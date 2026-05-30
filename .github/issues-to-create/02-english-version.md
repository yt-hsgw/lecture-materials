---
title: "🌍 英語版の作成（lesson.en.md / interactive.en.html）"
labels: ["enhancement", "i18n", "nice-to-have", "ai-assisted"]
---

## 背景

オープンソース化 した 教材 を 海外の 教育機関 / NPO / 個人 でも 使える ように、 英語版 を 作成 する。 翻訳作業 自体 が 生成 AI で 効率化 できる 領域 のため、 AI ツール での 着手 に 適している。

## 期待される 成果物

1. **新規 ファイル**: 各回 に `lesson.en.md` と `interactive.en.html` を 追加
2. **新規 ディレクトリ**: なし（既存 ディレクトリ に 同居）
3. **英語 README**: `README.en.md` を ルート に 追加
4. **language switcher**: README 冒頭 / HTML 内 に 言語切替 リンク

## 優先順位（推奨）

1. **第1段階**: 中学生・上級 4回（プログラミング用語 多 / 翻訳しやすい）
2. **第2段階**: 高校生・初級・中級・上級 12回（プロ向け、 国際的に 通じる 内容）
3. **第3段階**: 小学生・中学生 残り（語彙 が 子供向け で 訳し方 が 難しい）
4. **第4段階**: 高齢者向け（日本独自 の 文脈 が 多い、 訳出 困難 な 部分 あり）

## 受け入れ基準

- [ ] 命名規則: `lesson.en.md` / `interactive.en.html`（既存と並置）
- [ ] interactive.en.html は `<html lang="en">` で 開始
- [ ] CI（`check-inline-js`, `check-id-duplicates`, `check-a11y-static`）が パス
- [ ] 専門用語 が **既存 OSS / 教育サイト の 用語** に 整合（例: TDD → "Test-Driven Development"）
- [ ] 配色 / レイアウト / インタラクティブ ツール は 既存日本語版と 完全同じ
- [ ] README.en.md に 全コース 一覧 + ギャラリー（画像 流用）

## 翻訳方針

- **AI 主導 + 人間 監修**:
  - DeepL / Claude / GPT で 第一版 を 生成
  - **専門用語 の 用語集** を 1つ 作る（`docs/glossary.en.md`）
  - 「TDD」「Discriminated Union」 等 は AI に 翻訳 させず 用語集 を 参照
- **対象別 トーン 調整**:
  - 小学生 → 平易な 英語、 短文、 絵文字 多用
  - 中学生・高校生 → CS 教育標準 の 用語
  - 高齢者 → 平易な 英語、 段階的 説明、 大型 フォント

## 制約 / 注意

- 既存日本語版 を **削除 / 改変 しない**（並置 のみ）
- ファイル サイズ が 倍 に 増える ので、 必要な コース から 段階的 に
- **日本特有 の 文脈**（マイナポータル / 町内会 等）は 「This is a Japan-specific example」 と 注記
- 翻訳の **PR は 1回 ずつ**（48回 一括 は レビュー 不可能）

## 参考にすべき 既存実装

- 日本語版 lesson.md: `中学生_上級/01_要件定義と設計/lesson.md`
- 配色テーマ: `_templates/README.md` の 「コース別配色」
- 既存 ライセンス: `LICENSE`（MIT、 翻訳 配布 も 自由）
