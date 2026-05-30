#!/usr/bin/env node
/**
 * 全 interactive.html を Playwright で 自動 スクロール しながら WebM 動画 を 撮影。
 *
 * 撮影 方針:
 *   - viewport 1280x720（README 埋め込み 用）
 *   - data-snav-target セクション を 順次 滑らか に スクロール
 *   - 各 セクション で 短い 停止（読める 時間）→ 次へ
 *   - 目標 全体 約 30秒（セクション 数 で 自動 調整）
 *   - 出力: docs/videos/<コース>/<回>.webm
 *
 * オプション:
 *   --duration <sec>    総 撮影時間 を 強制（既定 ≒ 30秒）
 *   --filter <text>     対象 を 部分一致 で 絞る
 *   --force             既存ファイル を 上書き
 *   --width <n>         ビューポート幅（既定 1280）
 *   --height <n>        ビューポート高（既定 720）
 *   --convert-mp4       追加 で .mp4 に 変換（ffmpeg 必須）
 *
 * 例:
 *   node scripts/capture-videos.mjs
 *   node scripts/capture-videos.mjs --filter 高校生
 *   node scripts/capture-videos.mjs --duration 45 --force
 *   node scripts/capture-videos.mjs --convert-mp4
 *
 * 注意:
 *   Playwright の recordVideo は WebM を 出力します。
 *   GitHub README で 直接再生 したい 場合 は MP4 に 変換 してください（README は WebM 非対応）。
 *   --convert-mp4 で 自動 変換、 または 以下 を 別途 実行:
 *     ffmpeg -i input.webm -c:v libx264 -crf 23 -preset fast output.mp4
 */
import { chromium } from "playwright";
import { execSync } from "node:child_process";
import { mkdirSync, existsSync, renameSync, rmSync, readdirSync, unlinkSync } from "node:fs";
import { resolve, join } from "node:path";

const ROOT = process.cwd();
const args = process.argv.slice(2);

function flag(name) {
  return args.includes(`--${name}`);
}
function arg(name, fallback = null) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : fallback;
}

const DURATION_OVERRIDE = arg("duration") ? parseInt(arg("duration"), 10) : null;
const FORCE = flag("force");
const FILTER = arg("filter");
const WIDTH = parseInt(arg("width", "1280"), 10);
const HEIGHT = parseInt(arg("height", "720"), 10);
const CONVERT_MP4 = flag("convert-mp4");

// ffmpeg の 存在確認（--convert-mp4 指定時のみ）
if (CONVERT_MP4) {
  try {
    execSync("ffmpeg -version", { stdio: "ignore" });
  } catch {
    console.error("--convert-mp4 指定 ですが ffmpeg が ありません。 `brew install ffmpeg` 等 で 入れてください。");
    process.exit(2);
  }
}

// 対象 HTML を git ls-files で 列挙
let files;
try {
  files = execSync(`git ls-files -z`, { cwd: ROOT })
    .toString("utf8")
    .split("\0")
    .filter(Boolean)
    .filter((p) => p.endsWith("interactive.html"))
    .filter((p) => !p.startsWith("_templates/"))
    .filter((p) => !p.startsWith("_generated/"));
} catch {
  console.error("git ls-files 失敗");
  process.exit(2);
}

if (FILTER) files = files.filter((p) => p.includes(FILTER));

const TARGET_TOTAL_SEC = DURATION_OVERRIDE || 30; // 目標 30秒
const VIDEO_DIR = "docs/videos";
mkdirSync(`${ROOT}/${VIDEO_DIR}`, { recursive: true });

console.log(`🎥 対象: ${files.length} ファイル / viewport ${WIDTH}x${HEIGHT} / 目標 ${TARGET_TOTAL_SEC}秒`);

let success = 0;
let skipped = 0;
let failed = 0;

for (const [i, file] of files.entries()) {
  const parts = file.split("/");
  const course = parts[0];
  const lessonDir = parts.slice(1, -1).join("/");
  const outName = lessonDir.replace(/\//g, "__");
  const outDir = `${ROOT}/${VIDEO_DIR}/${course}`;
  mkdirSync(outDir, { recursive: true });
  const outWebm = `${outDir}/${outName}.webm`;
  const outMp4 = `${outDir}/${outName}.mp4`;

  const targetExists = CONVERT_MP4 ? existsSync(outMp4) : existsSync(outWebm);
  if (!FORCE && targetExists) {
    skipped++;
    process.stdout.write(`[${i + 1}/${files.length}] ⏭  ${file} (skip)\n`);
    continue;
  }

  const url = "file://" + resolve(ROOT, file);

  // 撮影用 の 一時 ディレクトリ（Playwright は ディレクトリ単位 で 動画 を 保存）
  const tmpDir = `${outDir}/.tmp-${outName}`;
  mkdirSync(tmpDir, { recursive: true });

  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    recordVideo: {
      dir: tmpDir,
      size: { width: WIDTH, height: HEIGHT },
    },
  });
  const page = await ctx.newPage();
  page.on("pageerror", () => {});
  page.on("crash", () => {});

  const startMs = Date.now();
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
    // インライン JS 初期化 を 待つ
    await page.waitForTimeout(1000);
    // 起動 ポップアップ を 閉じる
    await page.evaluate(() => {
      document.querySelectorAll(".modal-bg.show, .modal-bg.open").forEach((el) => el.classList.remove("show", "open"));
      document.querySelectorAll(".toast.show").forEach((el) => el.classList.remove("show"));
      document.querySelectorAll(".confetti.on").forEach((el) => el.classList.remove("on"));
    });

    // セクション一覧 を 取得（最低 ヒーロー + 末尾 で 2つ は 確保）
    const sections = await page.evaluate(() => {
      const els = [...document.querySelectorAll("[data-snav-target]")];
      if (els.length === 0) {
        // フォールバック: body 末尾 を 加える
        return [
          { id: "hero", top: 0 },
          { id: "wrap", top: document.body.scrollHeight },
        ];
      }
      return els.map((el) => ({
        id: el.id || "",
        top: el.getBoundingClientRect().top + window.scrollY,
      }));
    });

    // 各 セクション の 滞在時間 を 計算
    // hero（最初）と 最後 は やや 長め、 中間 は 短め
    const N = sections.length;
    const baseHold = Math.max(1.0, TARGET_TOTAL_SEC / Math.max(N, 1) * 0.55);
    const scrollMs = 700; // スクロール アニメ 時間

    // hero（先頭）で 1.5秒 静止
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(1500);

    for (let si = 1; si < N; si++) {
      const target = sections[si];
      // 滑らか スクロール
      await page.evaluate((top) => {
        window.scrollTo({ top: Math.max(0, top - 20), behavior: "smooth" });
      }, target.top);
      await page.waitForTimeout(scrollMs);
      await page.waitForTimeout(baseHold * 1000);

      // 残時間 で 調整: 残り 大きく オーバー しそうなら 早めに 抜ける
      const elapsed = (Date.now() - startMs) / 1000;
      if (elapsed >= TARGET_TOTAL_SEC && si < N - 1) {
        // 最後 まで 行かず ループ終了（最終 セクション へ ジャンプ）
        const last = sections[sections.length - 1];
        await page.evaluate((top) => window.scrollTo({ top: Math.max(0, top - 20), behavior: "smooth" }), last.top);
        await page.waitForTimeout(scrollMs);
        await page.waitForTimeout(700);
        break;
      }
    }

    // 最後 に 0.5秒 静止 → 終了
    await page.waitForTimeout(500);

    // ページ を 閉じて 動画 を 確定
    await page.close();
    await ctx.close();
    await browser.close();

    // tmpDir から .webm を 拾って リネーム
    const webms = readdirSync(tmpDir).filter((f) => f.endsWith(".webm"));
    if (!webms.length) throw new Error("動画ファイル が 生成されなかった");
    // 最初の 1ファイル を 採用
    renameSync(join(tmpDir, webms[0]), outWebm);
    // 残骸 削除
    for (const f of readdirSync(tmpDir)) unlinkSync(join(tmpDir, f));
    rmSync(tmpDir, { recursive: true, force: true });

    // MP4 変換（任意）
    if (CONVERT_MP4) {
      execSync(`ffmpeg -y -i "${outWebm}" -c:v libx264 -crf 23 -preset fast -movflags +faststart "${outMp4}"`, { stdio: "ignore" });
    }

    const elapsed = ((Date.now() - startMs) / 1000).toFixed(1);
    success++;
    process.stdout.write(`[${i + 1}/${files.length}] ✅ ${file} (${elapsed}s)\n`);
  } catch (e) {
    // 失敗時 の クリーンアップ
    try {
      await page.close();
    } catch {}
    try {
      await ctx.close();
    } catch {}
    try {
      await browser.close();
    } catch {}
    try {
      for (const f of readdirSync(tmpDir)) unlinkSync(join(tmpDir, f));
      rmSync(tmpDir, { recursive: true, force: true });
    } catch {}
    failed++;
    process.stdout.write(`[${i + 1}/${files.length}] ❌ ${file}\n     → ${e.message}\n`);
  }
}

console.log("");
console.log("=".repeat(60));
console.log(`成功: ${success} / skip: ${skipped} / 失敗: ${failed}`);
if (CONVERT_MP4) console.log("（MP4 変換 込み）");

if (failed > 0) process.exit(1);
