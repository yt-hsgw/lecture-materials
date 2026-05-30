#!/usr/bin/env node
/**
 * 全 interactive.html を Playwright (Chromium) で 撮影する スクリプト。
 *
 * モード:
 *   - hero（既定）  : ヒーロー位置 1280x720 1枚 → <course>/<lesson>.png
 *   - full           : ページ全体 を 縦長 で 1枚 → <course>/<lesson>.full.png
 *   - sections       : data-snav-target ごと に viewport 撮影
 *                       → <course>/<lesson>/01-<section_id>.png ... 形式
 *
 * オプション:
 *   --mode <hero|full|sections>     撮影モード（既定: hero）
 *   --section <id>                  特定セクション の id だけ 撮影（sections モード前提）
 *   --force                         既存ファイル を 上書き
 *   --filter <substring>            対象ファイル を 部分一致で 絞る
 *   --width <n>                     ビューポート幅（既定 1280）
 *   --height <n>                    ビューポート高（既定 720）
 *
 * 例:
 *   node scripts/capture-screenshots.mjs                          # 既定: hero
 *   node scripts/capture-screenshots.mjs --mode full              # 全48枚 を フルページ で
 *   node scripts/capture-screenshots.mjs --mode sections          # 各回 × 全セクション
 *   node scripts/capture-screenshots.mjs --mode sections --filter 高校生_上級 --force
 *   node scripts/capture-screenshots.mjs --mode sections --section quiz  # クイズ セクション だけ
 */
import { chromium } from "playwright";
import { execSync } from "node:child_process";
import { mkdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = process.cwd();
const args = process.argv.slice(2);

function flag(name) {
  return args.includes(`--${name}`);
}
function arg(name, fallback = null) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : fallback;
}

const MODE = arg("mode", "hero"); // hero | full | sections
const SECTION = arg("section");
const FORCE = flag("force");
const FILTER = arg("filter");
const WIDTH = parseInt(arg("width", "1280"), 10);
const HEIGHT = parseInt(arg("height", "720"), 10);

if (!["hero", "full", "sections"].includes(MODE)) {
  console.error(`不明な --mode: ${MODE}（hero / full / sections のいずれか）`);
  process.exit(2);
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

console.log(`📸 mode=${MODE} / 対象: ${files.length} ファイル / viewport ${WIDTH}x${HEIGHT}`);

const SCREENSHOT_DIR = "docs/screenshots";
mkdirSync(`${ROOT}/${SCREENSHOT_DIR}`, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: WIDTH, height: HEIGHT },
  deviceScaleFactor: 1.5,
});

let success = 0;
let skipped = 0;
let failed = 0;

for (const [i, file] of files.entries()) {
  const parts = file.split("/");
  const course = parts[0];
  const lessonDir = parts.slice(1, -1).join("/");
  const outName = lessonDir.replace(/\//g, "__");

  const url = "file://" + resolve(ROOT, file);
  const page = await ctx.newPage();
  page.on("pageerror", () => {});
  page.on("crash", () => {});

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
    // インライン JS 初期化 を 待つ（紙吹雪・遅延 初期化 を 考慮）
    await page.waitForTimeout(900);
    // 開いてしまった モーダル / トースト を 閉じる
    await page.evaluate(() => {
      document.querySelectorAll(".modal-bg.show, .modal-bg.open").forEach((el) => el.classList.remove("show", "open"));
      document.querySelectorAll(".toast.show").forEach((el) => el.classList.remove("show"));
      document.querySelectorAll(".confetti.on").forEach((el) => el.classList.remove("on"));
    });

    if (MODE === "hero") {
      const outDir = `${ROOT}/${SCREENSHOT_DIR}/${course}`;
      const outPath = `${outDir}/${outName}.png`;
      mkdirSync(outDir, { recursive: true });
      if (!FORCE && existsSync(outPath)) {
        skipped++;
        process.stdout.write(`[${i + 1}/${files.length}] ⏭  ${file} (skip)\n`);
        await page.close();
        continue;
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);
      await page.screenshot({ path: outPath, fullPage: false });
      success++;
      process.stdout.write(`[${i + 1}/${files.length}] ✅ ${file}\n`);
    } else if (MODE === "full") {
      const outDir = `${ROOT}/${SCREENSHOT_DIR}/${course}`;
      const outPath = `${outDir}/${outName}.full.png`;
      mkdirSync(outDir, { recursive: true });
      if (!FORCE && existsSync(outPath)) {
        skipped++;
        process.stdout.write(`[${i + 1}/${files.length}] ⏭  ${file} (skip)\n`);
        await page.close();
        continue;
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);
      await page.screenshot({ path: outPath, fullPage: true });
      success++;
      process.stdout.write(`[${i + 1}/${files.length}] ✅ ${file} (full)\n`);
    } else if (MODE === "sections") {
      // data-snav-target 要素 を 取得
      const sections = await page.evaluate(() => {
        return [...document.querySelectorAll("[data-snav-target]")].map((el) => ({
          id: el.id || "(no-id)",
          top: el.getBoundingClientRect().top + window.scrollY,
        }));
      });

      if (!sections.length) {
        process.stdout.write(`[${i + 1}/${files.length}] ⚠️  ${file}: data-snav-target が ない、 hero だけ 撮影\n`);
        const outDir = `${ROOT}/${SCREENSHOT_DIR}/${course}/${outName}`;
        const outPath = `${outDir}/01-top.png`;
        mkdirSync(outDir, { recursive: true });
        if (!(FORCE || !existsSync(outPath))) {
          skipped++;
          await page.close();
          continue;
        }
        await page.screenshot({ path: outPath, fullPage: false });
        success++;
        await page.close();
        continue;
      }

      // 特定 section だけ 撮影 する 場合 は フィルタ
      const targets = SECTION ? sections.filter((s) => s.id === SECTION) : sections;
      if (!targets.length) {
        process.stdout.write(`[${i + 1}/${files.length}] ⏭  ${file}: section="${SECTION}" 該当なし\n`);
        skipped++;
        await page.close();
        continue;
      }

      const outDir = `${ROOT}/${SCREENSHOT_DIR}/${course}/${outName}`;
      mkdirSync(outDir, { recursive: true });
      let ok = 0;
      for (const [si, sec] of targets.entries()) {
        const idx = String(sections.indexOf(sec) + 1).padStart(2, "0");
        const outPath = `${outDir}/${idx}-${sec.id}.png`;
        if (!FORCE && existsSync(outPath)) {
          skipped++;
          continue;
        }
        // 該当セクション へ スクロール（上部 に やや 余白 を 残す）
        await page.evaluate((top) => window.scrollTo({ top: Math.max(0, top - 20), behavior: "auto" }), sec.top);
        await page.waitForTimeout(280);
        await page.screenshot({ path: outPath, fullPage: false });
        ok++;
      }
      success += ok;
      process.stdout.write(`[${i + 1}/${files.length}] ✅ ${file}（${ok} sections）\n`);
    }
  } catch (e) {
    failed++;
    process.stdout.write(`[${i + 1}/${files.length}] ❌ ${file}\n     → ${e.message}\n`);
  } finally {
    await page.close();
  }
}

await ctx.close();
await browser.close();

console.log("");
console.log("=".repeat(60));
console.log(`mode=${MODE} / 成功: ${success} / skip: ${skipped} / 失敗: ${failed}`);

if (failed > 0) process.exit(1);
