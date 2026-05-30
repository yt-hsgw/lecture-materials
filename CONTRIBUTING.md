# Contributing to lecture-materials

このリポジトリへのコントリビュート歓迎です。typo修正・新規教材の追加・対話型ツールの改善など、どんな規模でも OK。

## 始める前に

- **小さな修正**（typo / 表現修正 / バグ）は直接 PR で OK
- **新規コース / 大きな機能追加** は 先に Issue を立てて 方針を相談してください
- **行動規範**: 全員が安心して参加できるよう、攻撃的・差別的な言動は禁止です

## ローカル開発

### 必要なもの

- Git
- Node.js 20+（CI スクリプト / 撮影スクリプト用）
- VS Code（推奨）+ **Marp for VS Code** 拡張（`lesson.md` プレビュー用）

### セットアップ

```bash
git clone https://github.com/yt-hsgw/lecture-materials.git
cd lecture-materials
```

### CI チェックをローカル実行

PR を出す前に以下が全てパスすることを確認してください:

```bash
node scripts/check-inline-js.mjs            # inline <script> 構文
node scripts/check-id-duplicates.mjs        # 同一HTML内 id 重複
node scripts/check-a11y-static.mjs          # 静的 a11y 検査
node scripts/check-curriculum-sections.mjs  # 概要ファイルの必須セクション
```

CI（GitHub Actions）でも自動実行されます。詳細は [`scripts/README.md`](scripts/README.md) を参照。

## 新規コースを作る場合

1. `_templates/` の3ファイルをコピー
2. `_templates/README.md` のプレースホルダー一覧に従って `{{...}}` を埋める
3. 配色は `_templates/README.md` の「コース別配色」表から選択
4. 必須セクションは `scripts/check-curriculum-sections.mjs` でチェック
5. interactive.html を作る場合、各回に **対話型ツール 4個以上** を推奨

## 教材の品質ガイドライン

- **「動けば OK」では足りない**。 受講者が **「分かった！もっとやりたい！」** と感じる体験を最優先
- **クイズには解説必須**（モーダル or 開閉式）
- **PII（個人情報）を含まない例**を使用（実在の名前・住所・電話番号は避ける）
- **アクセシビリティ**: `docs/A11Y.md` のチェックリスト参照
- **キーボードだけで全操作可能** を維持

## コミットメッセージ

Conventional Commits 推奨:

```
<type>(<scope>): <subject>

[body]
```

- `feat`: 新機能・新コース
- `fix`: バグ修正
- `docs`: ドキュメント
- `chore`: その他
- `refactor`: リファクタリング
- `test`: テスト追加・修正
- `ci`: CI設定

例:

```
feat(高校生_中級): add 03 バックエンドのスケール interactive.html
fix(小学生_中級/02): correct snav anchor id mismatch
docs(README): update screenshot gallery
```

## PR の作法

- 1 PR = 1 目的（500行 以下 推奨、 大きい変更は分割）
- タイトルは Conventional Commits 形式
- 本文に **What / Why / How** と スクリーンショット（UI 変更時）
- CI が緑 になってからレビュー依頼

## Issue を立てる場合

- バグ報告: `.github/ISSUE_TEMPLATE/bug_report.yml`
- 機能提案: `.github/ISSUE_TEMPLATE/feature_request.yml`
- 新規教材提案: 上記の feature_request を使い、対象コース・回・狙いを明記

未着手の改善計画は [`docs/ISSUES.md`](docs/ISSUES.md) と GitHub Issues を参照してください。

## 質問

- ライセンス: MIT（[LICENSE](LICENSE) 参照）
- 問い合わせ: GitHub Issues / Discussions

ありがとう！🎓
