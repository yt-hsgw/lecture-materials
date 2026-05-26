# Issues / 改善計画

このファイルは、GitHub Issues に転記しやすい形式で改善点・新規追加候補をまとめたものです。
各セクションを **そのまま** GitHub Issue として登録できます（タイトル / Labels / Body のセット）。

---

## ✅ 完了済み（2026-05-26）

### ✅ [Feature] 高校生向け講座 lesson.md ＝ **完了**

- 高校生・初級／中級／上級 × 各4回 = **12本 の lesson.md** を 作成（合計 ~9,700行）
- 各コース に `00_カリキュラム概要.md` ＝ 3本（合計 ~470行）
- 配色テーマ採用: 初級スレートグレー / 中級ミッドナイトブルー / 上級ブラック×ゴールド
- 「interactive.html を 全12回 で 実装」 は **別 Issue として 残置**（下記の 🖥️ 参照）

### ✅ [Task] CI/CD（GitHub Actions） ＝ **完了**

- `.github/workflows/check.yml` 構築
- markdown-lint / html-validate / inline-JS構文 / id重複 / lychee / a11y静的 の 6ジョブ
- 既存 ID重複 4件 検出 → 全件修正済み

### ✅ [Task] アクセシビリティ強化（B4） ＝ **第一弾完了**

- `docs/A11Y.md` チェックリスト 作成
- `modal-close`（× ボタン）全39ファイル に `aria-label="閉じる"` 一括付与
- `<input>` ラベル付与・icon-only button の 個別対応 は 漸進改善（warning として 検出継続）

---

## 🖥️ [Feature] 高校生向けコース の interactive.html 実装

**Labels:** `enhancement`, `new-course`, `priority/medium`

### 背景

高校生 12回 の `lesson.md` は 完成済み だが、 各回 に 対応する 体験型 `interactive.html` が 未実装。
中学生・上級 第4回 / 高齢者・上級 第4回 と 同等 の 多機能 ツール集 を 揃えたい。

### 想定 する 主な ツール（回別）

| 回 | ツール 案 |
|---|---|
| 高初1 開発環境 | Docker Compose 設計 シミュレータ / dotfiles 構成 ビルダー |
| 高初2 型 | TS Playground（ts→js 変換 体験） / Zod スキーマ ビジュアライザー |
| 高初3 TDD | in-browser jest ランナー（中・上級 第3回 を 流用 / 拡張） |
| 高初4 Issue駆動 | カンバン ボード ＋ プランニング ポーカー |
| 高中1 チーム開発 | 良い PR / 悪い PR 比較 ビューア |
| 高中2 FE | React Hooks シミュレータ / Server vs Client 境界 ビジュアライザー |
| 高中3 BE スケール | N+1 体感 ベンチ / Redis キャッシュ ヒット率 グラフ |
| 高中4 DevOps | CI/CD パイプライン エディタ / SLO エラー予算 ダッシュボード |
| 高上1 アーキ | C4 図 エディタ / DDD 集約 設計 ツール |
| 高上2 AI/ML | scikit-learn デモ（ブラウザ TF.js）/ プロンプト エディタ |
| 高上3 キャリア | キャリアシート ジェネレータ / GitHub プロフィール プレビュー |
| 高上4 卒業発表会 | 発表 タイマー / 修了証 ジェネレータ |

### 受け入れ基準

- 12回 × interactive.html ＝ **12ファイル** 追加
- 既存 配色テーマ（初級スレート×オレンジ / 中級ネイビー×イエロー / 上級ブラック×ゴールド）を 適用
- `_templates/interactive.html` の パターン に 準拠
- 各回 に **対話型 ツール 4個以上**

---

## ~~🎓 [完了] 高校生向け講座（初級／中級／上級）の作成~~ （参考: 元の Issue）

~~**Labels:** `enhancement`, `new-course`, `priority/high`~~ **— 完了 2026-05-26**

### 背景

現在、小学生・中学生・高齢者の 3対象 × 3レベル ＝ **9コース・36回** が完成しています。
中学生・上級 を 完了した 受講者が 高校生〜大学生 へ 進学する 自然な 流れ として、
**高校生向け コース** を 追加 すべきです。

### 想定する 3コース

#### 高校生・初級（コーディングの実務基礎）

中学生・上級 までで「自分で 動くものを 作って 公開」できた 高校生 が、**実務に近い 開発スキル** を 身につける。

| 回 | タイトル | テーマ |
|---|---|---|
| 1 | 開発環境のプロ仕様 | VSCode / Docker / WSL / dotfiles |
| 2 | 型のある世界 | TypeScript / Python型ヒント / Pydantic |
| 3 | テスト駆動開発 (TDD) 実践 | jest / pytest / カバレッジ |
| 4 | アジャイル と Issue 駆動 | GitHub Issues / Projects / Scrum |

#### 高校生・中級（チームで作る本格Webサービス）

| 回 | タイトル | テーマ |
|---|---|---|
| 1 | チーム開発の現実 | スクラム / レビュー文化 / ペアプロ |
| 2 | フロントエンドフレームワーク | React / Next.js / 状態管理 |
| 3 | バックエンドのスケール | DB設計再訪 / マイグレーション / Redis / キャッシュ |
| 4 | DevOps と監視 | Docker / GitHub Actions / Sentry / Datadog |

#### 高校生・上級（社会に出る前の総まとめ）

| 回 | タイトル | テーマ |
|---|---|---|
| 1 | アーキテクチャ設計 | モノリス vs マイクロ / DDD 入門 |
| 2 | AI/ML 入門 | scikit-learn / Hugging Face / LangChain |
| 3 | 起業・OSS・キャリア | プロダクト企画 / 法人化 / 知財 |
| 4 | 卒業プロジェクト発表会 | 自分の作品を 社会に 出す |

### 受け入れ基準

- 各コース 4回 × (lesson.md + interactive.html) ＝ **24ファイル** 追加
- 既存の **配色／UXパターン** を 継承（高校生コースで 新配色 3種を 採用）
- **進学先・就活** へ つながる 実用的 コンテンツ
- 各回に **対話型ツール** を 4個以上

### 配色提案（高校生向け）

| コース | 配色案 |
|---|---|
| 高校生・初級 | スレートグレー × エメラルド × オレンジ（実務感） |
| 高校生・中級 | ミッドナイトブルー × ティール × イエロー（フレームワーク感） |
| 高校生・上級 | ブラック × ゴールド × ネイビー（卒業・プロ感） |

---

## 📸 [Task] 各回のスクリーンショット撮影

**Labels:** `documentation`, `priority/medium`

### 背景

README には現在 SVG 模式図しかない。実画面の **スクリーンショット** を 撮影して README に 埋め込みたい。

### やること

- 36回 × 主要セクション 1〜2枚 ＝ 約50〜70枚
- 撮影サイズ：1280×720（README用）／ 800×450（サムネイル用）
- `docs/screenshots/<コース>/<回>/<セクション>.png` に保存
- README の SVG プレビュー欄を **実画像** に 置き換え

### 優先撮影リスト（目玉機能）

- 中学生・中級 第2回 ライブTODOアプリ（コード＋動作の2画面）
- 中学生・中級 第3回 モック Flask API テスター
- 中学生・上級 第1回 ER図 リアルタイム描画
- 中学生・上級 第2回 Git ブランチ可視化
- 中学生・上級 第2回 SQLi プレイグラウンド
- 高齢者・中級 第1回 町内会案内ジェネレータ
- 高齢者・上級 第2回 AI嘘発見ゲーム
- 小学生・中級 第3回 ライブHTMLエディタ
- 小学生・上級 第4回 修了証 + 紙吹雪
- 中学生・上級 第4回 ログダッシュボード

---

## 🎥 [Task] デモ動画（30秒×36回）

**Labels:** `documentation`, `nice-to-have`

### 背景

各回の **30秒デモ動画** が あれば、 講師が 事前に 内容を 把握しやすい。

### やること

- 1回30秒 × 36回 ＝ 18分（YouTube 1動画 or 36個の Short）
- 主要 対話型ツール を 操作する 様子 を 録画（音声なしでOK）
- `docs/videos/` に MP4 を 置く or YouTube リンクを README に
- ツール例：QuickTime（Mac）、 ScreenRec、 OBS

---

## 🌍 [Feature] 英語版の作成

**Labels:** `enhancement`, `i18n`, `nice-to-have`

### 背景

オープンソース化 して 海外の 教育機関 でも 使えるよう、英語版を 作成。

### やること

- ファイル命名規則：`lesson.en.md` / `interactive.en.html`
- まず 中学生・上級 4回 から（プログラミング用語 多めで 翻訳しやすい）
- 翻訳は AI（DeepL / Claude / GPT）を 活用、 人手で 用語統一
- README も `README.en.md` を 作成

---

## ~~♿ [Task] アクセシビリティ強化~~ — **第一弾完了 2026-05-26**

**Labels:** `accessibility`, `priority/medium`

### 背景

interactive.html は 視覚的に 充実 しているが、 アクセシビリティ 観点で 改善余地。

### やること（完了 / 残作業）

- ✅ `docs/A11Y.md` チェックリスト 作成
- ✅ `modal-close`（× ボタン）全39ファイル に `aria-label="閉じる"` 一括付与
- ✅ a11y 静的チェック を CI に 統合（`scripts/check-a11y-static.mjs`）
- ⏳ **残**: インタラクティブツール内 `<input>` の ラベル付与（漸進）
- ⏳ **残**: icon-only `<button>` 残り 6件 の aria-label（教材ツール 固有）
- ⏳ **残**: WAVE / Lighthouse での 各回 数値計測

### 検証ツール

- axe DevTools（Chrome 拡張）
- WAVE
- Lighthouse Accessibility スコア

---

## ~~🧪 [Task] CI/CD の追加（HTML構文・リンク切れ検出）~~ — **完了 2026-05-26**

**Labels:** `infrastructure`, `priority/medium`

### 背景

72ファイル の HTML/Markdown を 安全に 保守するため、 自動チェックを 入れたい。

### 実装（完了）

`.github/workflows/check.yml` に 以下 6ジョブ を 設定:

- ✅ HTML 構文チェック（html-validate, `scripts/html-validate.config.json`）
- ✅ Markdown lint（markdownlint-cli2, `.markdownlint-cli2.jsonc`）
- ✅ リンク切れ チェック（lychee, warning扱い）
- ✅ JS 構文チェック（`scripts/check-inline-js.mjs`、 全40ファイル × 39 inline script）
- ✅ ID 重複検出（`scripts/check-id-duplicates.mjs`、 既存 4件 検出 → 全件 修正済み）
- ✅ a11y 静的チェック（`scripts/check-a11y-static.mjs`）

### 期待効果

- PR 時に 自動で 品質保証
- 共著者 が 増えても 安心

---

## 📦 [Task] パッケージング・配布

**Labels:** `enhancement`, `nice-to-have`

### 背景

教室・学校が ダウンロード 1つで 全教材を 使えるように。

### やること

- `release/` フォルダに **コース別 ZIP** を 用意
- GitHub Releases で バージョン管理（v1.0.0 = 全9コース完成）
- 必要 ファイルだけ（lesson.md + interactive.html + 修了証テンプレ）
- ZIP の 中に `START_HERE.html`（コース選択画面）

---

## 🎓 [Task] 修了証 デザインの 統一

**Labels:** `design`, `nice-to-have`

### 背景

現在、 小学生・上級 / 中学生・中級 / 中学生・上級 / 高齢者・中級 / 高齢者・上級 の **5コース** で 修了証 ジェネレータ を 実装 済み。 デザインが 微妙に 違うので 統一感を 出したい。

### やること

- 共通の 修了証 テンプレ を `_templates/certificate.html` に
- コース別の **アクセント色** だけ 切替
- QRコード で 検証用 URL（オプション）
- PDFダウンロード機能（jsPDF）

---

## 📝 [Task] 各コース「00_カリキュラム概要.md」の 統一テンプレ化

**Labels:** `documentation`, `priority/low`

### 背景

9コースの 概要 ファイルは 既に **同じ構造** に 統一済み だが、 改訂時に 一括 管理 したい。

### やること

- `_templates/00_カリキュラム概要.md` を 基準テンプレに
- セクション欠落を 検出する スクリプト
- 改訂日付の 自動更新

---

## 🐛 [Bug] 既知の小さな問題

**Labels:** `bug`, `priority/low`

### 中学生・上級 第1回 interactive.html

`window.crypto.subtle` を 使う パスワードハッシュ デモ（第2回）が、 **`file://` プロトコル で 動かないブラウザ** がある（Chrome のセキュリティ制限）。
- 影響：ローカル ファイルで 開いた 時、 ハッシュ生成 が 失敗
- 対処：簡易ハッシュ（DJB2 など）への フォールバック、 または localhost で開く案内

### 中学生・上級 第3回 interactive.html

テストランナー の `new Function()` 実行 で、 一部の ES2020+ 構文（`?.`, `??`）が 古いブラウザで エラーに なる 可能性。
- 影響：IE / 古いSafari / Firefox ESR
- 対処：エラー時の フォールバック メッセージ、 推奨ブラウザの明記

---

## 💡 [Idea] 受講者向け Webサイト

**Labels:** `enhancement`, `nice-to-have`

### 背景

受講者が **学習進度** を 管理 できる Web サイト を 作りたい（このコース 自体を 題材に）。

### やること

- 12コース × 4回 ＝ 48項目 の チェックリスト
- 修了証 を **自動発行**
- 履修済み スキルの「**バッジ**」コレクション

→ これ自体が **中学生・上級コース or 高校生・上級コース の 卒業 課題** になりうる！

---

## 📋 Issue 作成 後 の 運用

1. このファイルの 各セクションを GitHub Issues に **コピペ** で 転記
2. **Labels** を 付与（上記 推奨ラベル を 参照）
3. **Milestone** で バージョン管理（v1.1 = 高校生コース など）
4. **Project ボード** に 配置（Todo / In Progress / Done）
5. 完了したら このファイル の セクションを ❌（取り消し線）に 更新

---

## 📝 メタ情報

- 作成日：2026年5月
- 状態：高校生コース MD 12本 完成・CI/CD 構築・A11Y 第一弾 完了
- 改訂：2026年5月26日（高校生コース追加 / CI/CD / A11Y 反映）
- 担当：（記入）
