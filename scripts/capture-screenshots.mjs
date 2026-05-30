#!/usr/bin/env node
/**
 * 全 interactive.html を Playwright (Chromium) で 撮影する スクリプト。
 *
 * 撮影方針:
 *   - viewport: 1280 x 720（README 表示 に 最適）
 *   - スクロール 位置: ヒーロー 直下（最初の divider が 見える位置）
 *   - 出力: docs/screenshots/<コース>/<回>.png
 *   - 既存 ファイル は --force で 上書き、 既定 では skip
 *
 * 使い方:
 *   node scripts/capture-screenshots.mjs           # 既存 を skip
 *   node scripts/capture-screenshots.mjs --force   # 全て 上書き
 *   node scripts/capture-screenshots.mjs --filter 高校生  # フォルダ名 部分一致
 */
import { chromium } from "playwright";
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { dirname, basename, resolve } from "node:path";

const ROOT = process.cwd();
const args = process.argv.slice(2);
const FORCE = args.includes("--force");
const filterIdx = args.indexOf("--filter");
const FILTER = filterIdx >= 0 ? args[filterIdx + 1] : null;

// 対象 HTML を git ls-files で 列挙（interactive.html のみ）
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

console.log(`📸 対象: ${files.length} ファイル`);

const SCREENSHOT_DIR = "docs/screenshots";
mkdirSync(`${ROOT}/${SCREENSHOT_DIR}`, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 1.5, // やや 高解像度
});

let success = 0;
let skipped = 0;
let failed = 0;

for (const [i, file] of files.entries()) {
  // 出力 パス を 決定
  //   小学生_初級/04_AIってなんだろう/interactive.html
  //     → docs/screenshots/小学生_初級/04_AIってなんだろう.png
  const parts = file.split("/");
  const course = parts[0]; // 小学生_初級 など
  const lessonDir = parts.slice(1, -1).join("/"); // 04_AIってなんだろう or オプション教材
  const outName = lessonDir.replace(/\//g, "__");
  const outDir = `${ROOT}/${SCREENSHOT_DIR}/${course}`;
  const outPath = `${outDir}/${outName}.png`;
  mkdirSync(outDir, { recursive: true });

  if (!FORCE && existsSync(outPath)) {
    skipped++;
    process.stdout.write(`[${i + 1}/${files.length}] ⏭  ${file} (skip)\n`);
    continue;
  }

  const url = "file://" + resolve(ROOT, file);
  const page = await ctx.newPage();

  // 一部 教材 の console.error / 未捕捉 例外 を 黙らせる
  page.on("pageerror", () => {});
  page.on("crash", () => {});

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
    // インライン JS の 初期化 を 待つ（紙吹雪・モーダル 等 の 遅延 初期化 を 考慮）
    await page.waitForTimeout(900);
    // モーダル が 開いてしまっていれば 閉じる
    await page.evaluate(() => {
      document.querySelectorAll(".modal-bg.show, .modal-bg.open").forEach((el) => el.classList.remove("show", "open"));
      // 一部 教材 で アラート/トースト を 隠す
      document.querySelectorAll(".toast.show").forEach((el) => el.classList.remove("show"));
    });

    // ページ 上部 を 撮影（ヒーロー + 直下 セクション の 始まり）
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    await page.screenshot({ path: outPath, fullPage: false });
    success++;
    process.stdout.write(`[${i + 1}/${files.length}] ✅ ${file}\n`);
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
console.log(`合計: ${files.length} / 成功: ${success} / skip: ${skipped} / 失敗: ${failed}`);

if (failed > 0) process.exit(1);
