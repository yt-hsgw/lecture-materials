---
title: "📝 00_カリキュラム概要.md の改訂日付を git ベースで自動更新"
labels: ["documentation", "priority/low", "ai-assisted"]
---

## 背景

各 コース の `00_カリキュラム概要.md` には 末尾 に 「改訂: 2026年5月版」 の ような 表記 が ある。 これ を **git の last-commit-date から 自動 生成** する しくみ が 欲しい。

手動 更新 だと 「内容 が 変わって いるのに 改訂日 が 古いまま」 になる ことが ある。

## 期待される 成果物

1. **`scripts/update-revision-date.mjs`**: 各 `00_カリキュラム概要.md` の 改訂行 を git log の 該当 ディレクトリ の last commit date で 自動更新
2. **CI に 組み込み**（`pre-commit` フック または GitHub Actions の `prepare-commit-msg`）
3. または **README 内 で 自動生成**（commit hash + date）

## 仕様 案

### Option A: コミット時 自動更新（pre-commit）

```bash
# pre-commit hook で 該当 ファイル の 改訂日 を 自動更新
# 例: 「改訂: 2026年5月版」 を 「改訂: 2026-05-29 (commit a8dcfc6)」 に
```

### Option B: GitHub Actions で 自動コミット

```yaml
# main へ push 時に 改訂日 を 一括 更新 → 自動コミット
```

### Option C: GitHub Pages / docs/ で 自動生成

各 ページ の 末尾 に 「Last modified: 2026-05-29」 を ビルド時 に 注入

## 受け入れ基準

- [ ] 12 コース 全て の `00_カリキュラム概要.md` で 改訂日 が 自動更新 される
- [ ] 既存 表記（手書きの 「2026年5月版」）を 上書き しない 形式（追記 or 別行 推奨）
- [ ] CI で 動作 確認 が できる（差分 が ある 状態 で 走らせ、 期待通り 更新 される）
- [ ] 各 lesson.md にも 同様 の しくみ を 適用 可能（オプション）

## 制約 / 注意

- git の commit date は **author date** と **committer date** が ある。 どちら を 使うか 統一
- リネーム / 移動 を 跨ぐ 履歴 追跡 は `git log --follow` が 必要
- `git log` は サブモジュール 等 で コスト が かかる場合 が ある

## 実装 ヒント

```bash
# 該当 ファイル の 最終 コミット 日付
git log -1 --format=%cd --date=format:%Y-%m-%d -- 高校生_初級/00_カリキュラム概要.md

# Node.js から
import { execSync } from "node:child_process";
const date = execSync(`git log -1 --format=%cd --date=format:%Y-%m-%d -- "${file}"`).toString().trim();
```

## 参考

- 既存スクリプト: `scripts/check-curriculum-sections.mjs`（同じ ファイル を 対象 に している）
- 関連 ISSUE: `docs/ISSUES.md` の 「📝 統一テンプレ化」 セクション（部分完了）
