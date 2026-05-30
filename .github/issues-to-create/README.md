# .github/issues-to-create/

GitHub Issues として **一括登録予定** の Markdown ファイル群です。

## 使い方

### 1. ローカルで内容を確認・編集

各 `.md` ファイルが 1つの Issue に対応します。冒頭の YAML フロントマターに `title` と `labels` が入っています。本文（`---` 以降）が Issue 本文になります。

### 2. GitHub Issue として 一括登録

[GitHub CLI](https://cli.github.com/) (`gh`) を 認証 した 状態で:

```bash
# このリポジトリ で 実行
./.github/issues-to-create/create-all.sh

# または 個別 に
gh issue create --title "..." --body-file file.md --label "..."
```

### 3. 登録後

成功したら 該当 .md を削除 or `archived/` フォルダに 移動 してください。

## なぜ ファイルで 管理 するか

- **生成 AI 親和性**: Claude / GPT 等 が ファイル を 読んで タスク 着手 できる
- **PR レビュー で 内容 確認 可能**: Issue 本文 を 直接 編集 する より 履歴 が 追える
- **オフライン編集 可能**: GitHub への 接続 が なくても 起草 できる
- **再現性**: スクリプト で 再度 立て直せる（誤って 削除 した 時 など）

## ファイル一覧（2026-05-29 時点）

| ファイル | タイトル | ラベル |
|---|---|---|
| `01-demo-videos.md` | 🎥 デモ動画（30秒×48回）の作成 | `enhancement`, `documentation`, `nice-to-have` |
| `02-english-version.md` | 🌍 英語版の作成（lesson.en.md / interactive.en.html） | `enhancement`, `i18n`, `nice-to-have` |
| `03-packaging-distribution.md` | 📦 パッケージング・配布（コース別 ZIP / GitHub Releases） | `enhancement`, `nice-to-have` |
| `04-certificate-unification.md` | 🎓 修了証デザインの統一（共通テンプレ化） | `design`, `enhancement`, `nice-to-have` |
| `05-student-portal-webapp.md` | 💡 受講者向けポータルWebサイト（進度管理 / バッジ / 自動修了証） | `enhancement`, `nice-to-have` |
| `06-curriculum-revision-date.md` | 📝 00_カリキュラム概要.md の改訂日付を git ベースで自動更新 | `documentation`, `priority/low` |
| `07-a11y-input-labels.md` | ♿ A11Y 残61件: 教材ツール内 `<input>` のラベル付与（漸進） | `accessibility`, `priority/low` |
