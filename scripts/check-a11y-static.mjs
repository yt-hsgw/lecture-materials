#!/usr/bin/env node
/**
 * HTML の 静的 アクセシビリティ チェック（軽量版）
 *
 * 検出する 問題:
 *   1. <html lang> 属性 が ない
 *   2. <img alt> 属性 が ない or 空 でない
 *   3. ラベル なし の <input>（aria-label / aria-labelledby / <label> も なし）
 *   4. ボタン に テキスト も aria-label も ない（icon-only button）
 *   5. リンク に テキスト が ない（icon-only link）
 *
 * 使い方:
 *   node scripts/check-a11y-static.mjs
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

let errors = 0;
let warnings = 0;

for (const file of files) {
  const rawHtml = readFileSync(`${ROOT}/${file}`, "utf8");
  // <script>...</script> / <style>...</style> を除外して 静的 HTML だけ 検査
  // （JS文字列内の <img>、 教材内のサンプルコード を 誤検出 しないため）
  const html = rawHtml
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, "")
    .replace(/<!--[\s\S]*?-->/g, ""); // HTML コメント を 除外（教材内 サンプル コード を 誤検出 しない）
  const fileIssues = [];

  // 1. <html lang>
  if (!/<html[^>]*\blang\s*=/.test(rawHtml)) {
    fileIssues.push({ level: "warn", msg: "<html> に lang 属性 が ない" });
  }

  // 2. <img alt>
  const imgs = [...html.matchAll(/<img\b([^>]*)>/g)];
  imgs.forEach(([full, attrs], i) => {
    if (!/\balt\s*=/.test(attrs)) {
      fileIssues.push({ level: "warn", msg: `<img> ${i + 1}個目 に alt 属性 が ない` });
    }
  });

  // 3. ラベルなし input
  const inputs = [...html.matchAll(/<input\b([^>]*)>/g)];
  inputs.forEach(([full, attrs], i) => {
    const typeMatch = attrs.match(/\btype\s*=\s*["']([^"']+)["']/);
    const type = typeMatch ? typeMatch[1] : "text";
    if (["hidden", "submit", "reset", "button"].includes(type)) return;

    const hasAria = /\baria-label\s*=/.test(attrs) || /\baria-labelledby\s*=/.test(attrs);
    const hasPlaceholder = /\bplaceholder\s*=/.test(attrs);
    const hasId = attrs.match(/\bid\s*=\s*["']([^"']+)["']/);
    let hasLabel = false;
    if (hasId) {
      const lbl = new RegExp(`<label[^>]*\\bfor\\s*=\\s*["']${hasId[1]}["']`);
      hasLabel = lbl.test(html);
    }
    if (!hasAria && !hasLabel && !hasPlaceholder) {
      fileIssues.push({
        level: "warn",
        msg: `<input type="${type}"> ${i + 1}個目 に ラベル が ない（label / aria-label / placeholder のいずれも 無）`,
      });
    }
  });

  // 4. icon-only ボタン（中身が 空 か絵文字/アイコンのみ + aria-label なし）
  const buttons = [...html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)];
  buttons.forEach(([full, attrs, body], i) => {
    const text = body
      .replace(/<[^>]+>/g, "")
      .replace(/\s/g, "")
      .trim();
    const hasAria = /\baria-label\s*=/.test(attrs) || /\btitle\s*=/.test(attrs);
    // 日本語/英語/数字を含むなら OK
    const hasReadableText = /[ぁ-んァ-ヶー一-龥A-Za-z0-9]/.test(text);
    if (!hasReadableText && !hasAria) {
      fileIssues.push({
        level: "warn",
        msg: `アイコンのみ <button> ${i + 1}個目 に aria-label / title なし: "${text.slice(0, 20)}"`,
      });
    }
  });

  // 5. icon-only リンク
  const links = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)];
  links.forEach(([full, attrs, body], i) => {
    const text = body
      .replace(/<[^>]+>/g, "")
      .replace(/\s/g, "")
      .trim();
    const hasAria = /\baria-label\s*=/.test(attrs) || /\btitle\s*=/.test(attrs);
    const hasReadableText = /[ぁ-んァ-ヶー一-龥A-Za-z0-9]/.test(text);
    if (!hasReadableText && !hasAria) {
      fileIssues.push({
        level: "warn",
        msg: `アイコンのみ <a> ${i + 1}個目 に aria-label / title なし`,
      });
    }
  });

  if (fileIssues.length > 0) {
    console.log(`\n${file}`);
    for (const { level, msg } of fileIssues) {
      const icon = level === "error" ? "[NG]" : "[!!]";
      console.log(`  ${icon} ${msg}`);
      if (level === "error") errors++;
      else warnings++;
    }
  }
}

console.log(`\n${"=".repeat(60)}`);
console.log(`Checked: ${files.length} HTML files`);
console.log(`Errors: ${errors}, Warnings: ${warnings}`);

// Warning は CI を 落とさない（漸進的 改善 のため）
if (errors > 0) process.exit(1);
console.log("A11y static check: PASS (warnings 許容)");
