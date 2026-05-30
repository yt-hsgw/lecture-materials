---
title: "♿ A11Y 残61件: 教材ツール内 `<input>` のラベル付与（漸進）"
labels: ["accessibility", "priority/low", "ai-assisted"]
---

## 背景

`scripts/check-a11y-static.mjs` で 検出 される warning が **61件 残って いる**（2026-05-29 時点）。 すべて 教材ツール 内 の `<input>` で **ラベル が ない** もの。

これら は スクリーンリーダー 利用者 が 何 の 入力欄 か わからない 問題 を 起こす。 ただし 視覚的 には 隣接 の label テキスト が あるため、 視覚利用者 には 問題 ない。

## 状況

```bash
# 内訳 確認
node scripts/check-a11y-static.mjs 2>&1 | awk '/^[^ ]/ {file=$0; next} /<input/ {count[file]++} END {for(f in count) print count[f], f}' | sort -rn
```

トップ 残箇所:

- 高齢者・中級 第2回（6件）
- 高齢者・上級 第1回（5件）
- 小学生・初級/オプション教材/05_Scratchでゲーム（5件）
- 小学生・初級/オプション教材/04_Scratch入門（5件）
- 小学生・上級 第3回（5件）
- 小学生・上級 第4回（4件）
- 中学生・上級 第1回（4件）
- ... 他

## 期待される 成果物

1. **61 件 すべて の `<input>` に ラベル を 付与**:
   - 可能 なら `<label for="...">` で 紐付け（既存 visual label が ある 場合）
   - 不可能 なら `aria-label="..."`（icon-only / 動的生成）
2. **CI で 0 warning** を 達成
3. **新規 教材 で の 再発防止**: `_templates/interactive.html` を 確認 し、 ラベル の 推奨パターン を コメント化

## 受け入れ基準

- [ ] `node scripts/check-a11y-static.mjs` で `Warnings: 0`
- [ ] 既存 UI / 挙動 を 損なわない
- [ ] `<label>` を 使う 場合 は `for` 属性 を 確実 に 紐付け
- [ ] `aria-label` を 使う 場合 は 日本語 で 自然な 表現
- [ ] 小学生・高齢者 向け は **平易 な 日本語** で（例: 「お名前 を 入力」）

## 進め方（推奨）

**漸進的**:
- PR を **コース別** に 分ける（12 PR）
- 1 PR = 1 コース = 4 ファイル の `<input>` 修正

または **一括**:
- 「全 input に label 付け」 1 PR で 一気に（レビュー が 大変）

## 制約 / 注意

- 既存 `<label>` を 残し、 `for` 属性 だけ 追加 する のが 最小変更
- ID が 既に 使われている 場合 は 重複 に 注意（CI が 検出）
- `placeholder` を ラベル 代わり に 使わない（スクリーンリーダー で 読まれない）

## 実装 ヒント（一括 適用 スクリプト）

```javascript
// 過去 PR で 使った 自動 fix スクリプト（参考）:
import re
import sys

for path in sys.argv[1:]:
    with open(path, encoding="utf-8") as f:
        s = f.read()
    # <label>foo</label>(空白)<input ... id="bar" ...> → for="bar" を 自動付与
    new = re.sub(
        r'(<label\b[^>]*>)(.+?)(</label>)(\s*)(<input\b[^>]*\bid\s*=\s*["\']([^"\']+)["\'][^>]*>)',
        lambda m: m.group(1)[:-1] + f' for="{m.group(6)}">' + m.group(2) + m.group(3) + m.group(4) + m.group(5)
                  if 'for=' not in m.group(1) else m.group(0),
        s, flags=re.DOTALL
    )
    with open(path, "w", encoding="utf-8") as f:
        f.write(new)
```

## 参考

- ガイド: `docs/A11Y.md` の 「既知 warning と 対処」 セクション
- 過去 PR: コミット `d8e9359` (A11y 第二弾) で 117 件 → 61 件 まで 削減 した 履歴
- 関連: `_templates/interactive.html`（新規 教材 の 雛形）
