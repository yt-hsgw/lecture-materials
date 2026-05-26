#!/usr/bin/env node
/**
 * interactive.html や *.html の <script> ブロック内 JS を vm で構文チェック。
 * 失敗があれば exit 1。
 *
 * 使い方:
 *   node scripts/check-inline-js.mjs
 */
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";
import vm from "node:vm";

const ROOT = process.cwd();

// 対象 HTML ファイルを git ls-files で列挙（-z で NUL区切り → 日本語ファイル名対応）
let files;
try {
  files = execSync(`git ls-files -z '*.html'`, { cwd: ROOT })
    .toString("utf8")
    .split("\0")
    .filter(Boolean)
    .filter((p) => !p.startsWith("_generated/") && !p.startsWith("node_modules/"));
} catch {
  console.error("git が 使えない 環境 です");
  process.exit(2);
}

let total = 0;
let errors = 0;

for (const file of files) {
  const html = readFileSync(`${ROOT}/${file}`, "utf8");
  const scripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)];
  for (const [, body] of scripts) {
    total++;
    try {
      // type="module" / 通常 どちらも検査
      new vm.Script(body, { filename: file });
    } catch (e) {
      errors++;
      console.error(`[NG] ${file}: ${e.message}`);
    }
  }
}

console.log(`\nChecked: ${files.length} HTML files / ${total} inline <script> blocks`);
if (errors > 0) {
  console.error(`Errors: ${errors}`);
  process.exit(1);
}
console.log("All inline JS syntax: OK");
