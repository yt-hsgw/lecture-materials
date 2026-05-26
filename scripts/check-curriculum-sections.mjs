#!/usr/bin/env node
/**
 * 各コース の 00_カリキュラム概要.md に **必須セクション** が 揃っているか チェック。
 *
 * 必須セクション（テンプレ準拠、 表記揺れ を 許容）:
 *   - このコースのゴール
 *   - 本編スケジュール
 *   - 各回の狙い
 *   - 標準タイムテーブル
 *   - 教材形式
 *   - 当日の準備物
 *   - 著作・連絡先
 *
 * 推奨セクション（warning 扱い）:
 *   - 配色テーマ
 *   - 設計方針
 *   - 危険ケース・注意
 *
 * 使い方:
 *   node scripts/check-curriculum-sections.mjs
 */
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

const ROOT = process.cwd();

// 必須セクション（部分一致）
const REQUIRED = [
  ["このコースのゴール", "ゴール"],
  ["本編スケジュール", "スケジュール"],
  ["各回の狙い", "各回"],
  ["タイムテーブル"],
  ["教材形式", "教材の形式"],
  ["当日の準備物", "準備物"],
  ["著作・連絡先", "連絡先", "著作"],
];

// 推奨セクション
const RECOMMENDED = [
  ["配色テーマ", "配色"],
  ["設計方針", "方針"],
  ["危険ケース", "注意", "気をつける"],
];

// 対象ファイル
let files;
try {
  files = execSync(`git ls-files -z`, { cwd: ROOT })
    .toString("utf8")
    .split("\0")
    .filter((p) => p.endsWith("00_カリキュラム概要.md"))
    .filter((p) => !p.startsWith("_templates/")); // テンプレ自体は対象外
} catch {
  console.error("git が 使えない 環境 です");
  process.exit(2);
}

let errors = 0;
let warnings = 0;

function hasSection(content, patterns) {
  const headings = [...content.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1]);
  return patterns.some((p) => headings.some((h) => h.includes(p)));
}

for (const file of files) {
  const content = readFileSync(`${ROOT}/${file}`, "utf8");
  const missing = [];
  const missingRec = [];

  for (const patterns of REQUIRED) {
    if (!hasSection(content, patterns)) missing.push(patterns[0]);
  }
  for (const patterns of RECOMMENDED) {
    if (!hasSection(content, patterns)) missingRec.push(patterns[0]);
  }

  if (missing.length > 0 || missingRec.length > 0) {
    console.log(`\n${file}`);
    for (const m of missing) {
      console.error(`  [NG] 必須セクション 欠落: "${m}"`);
      errors++;
    }
    for (const m of missingRec) {
      console.log(`  [!!] 推奨セクション 欠落: "${m}"`);
      warnings++;
    }
  }
}

console.log(`\n${"=".repeat(60)}`);
console.log(`Checked: ${files.length} curriculum overview files`);
console.log(`Errors: ${errors}, Warnings: ${warnings}`);

if (errors > 0) {
  console.error("必須セクション 欠落 を 修正 してください");
  process.exit(1);
}
console.log("Curriculum sections check: PASS (warnings 許容)");
