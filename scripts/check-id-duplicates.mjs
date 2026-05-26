#!/usr/bin/env node
/**
 * 各 HTML ファイルで id 属性 が 重複 していないか チェック。
 * 1ファイル 内 の 重複 が あれば エラー。
 *
 * 使い方:
 *   node scripts/check-id-duplicates.mjs
 */
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

const ROOT = process.cwd();

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

let totalDup = 0;

for (const file of files) {
  let html = readFileSync(`${ROOT}/${file}`, "utf8");

  // <script>...</script> / <style>...</style> / <!--...--> を除外
  // （JS テンプレ文字列の `id="..."` や 教材内 サンプルコード を 誤検出 しないため）
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  html = html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, "");
  html = html.replace(/<!--[\s\S]*?-->/g, "");

  // <タグ id="xxx"> または id='xxx' を抽出（属性順序に依存しない）
  // テンプレ展開を含む id（${...} を持つ）は 静的解析対象外として 除外
  const ids = [];
  const re = /<[a-zA-Z][^>]*\bid\s*=\s*["']([^"']+)["'][^>]*>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m[1].includes("${")) continue; // 動的 id は対象外
    ids.push(m[1]);
  }

  const seen = new Map();
  const dups = [];
  for (const id of ids) {
    seen.set(id, (seen.get(id) || 0) + 1);
  }
  for (const [id, count] of seen) {
    if (count > 1) dups.push({ id, count });
  }

  if (dups.length > 0) {
    console.error(`[NG] ${file}:`);
    for (const { id, count } of dups) {
      console.error(`     id="${id}" × ${count}`);
    }
    totalDup += dups.length;
  }
}

console.log(`\nChecked: ${files.length} HTML files`);
if (totalDup > 0) {
  console.error(`Duplicate ids: ${totalDup} groups`);
  process.exit(1);
}
console.log("No duplicate ids: OK");
