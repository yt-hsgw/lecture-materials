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

## ~~🖥️ [Feature] 高校生向けコース の interactive.html 実装~~ — **完了 2026-05-26**

**Labels:** `enhancement`, `new-course`, `priority/medium`

### 実装結果（完了）

高校生 12回 すべて の `interactive.html` を 完成（合計 約 **10,800行**、 全48ツール）。

| 回 | 実装ツール |
|---|---|
| 高初1 開発環境 | ⏱️環境構築タイムレース / 🐳Docker Compose ビルダー / 📁dotfiles ビルダー / 🔒pre-commit シミュレータ |
| 高初2 型 | 📐TS型推論 Playground / 🛡️Zod スキーマ Visualizer / ⚠️any vs unknown / 🎯型ガード Trainer |
| 高初3 TDD | 🔄TDDサイクル Visualizer / ▶テストランナー / 📊カバレッジ Viz / 🎯FizzBuzz Quest |
| 高初4 Issue駆動 | 🎫カンバン D&D / 🃏プランニングポーカー / 📊スプリント計画 / 🔁KPT レトロ + 🎓修了証 |
| 高中1 チーム開発 | 📋良い/悪いPR比較 / 💬レビュートーン Trainer / 🌳ブランチ戦略 / 📝Conventional Commits |
| 高中2 FE | ⚛️useState ライブ / ▲Server/Client境界 / 💎TanStack Query キャッシュ / 🗺️ルーティング Viz |
| 高中3 BE スケール | 🐌N+1ベンチ / ⚡インデックス効果 / 🔴Redis Cache-aside / 🚦マイグレ安全度判定 |
| 高中4 DevOps | 🚀CI/CDパイプ Viz / 📊SLO エラー予算 / 🔔アラート Trainer / 📋構造化ログ + 🎓修了証 |
| 高上1 アーキ | 🏛️モノリス/マイクロ Tradeoff / 📐DDD 集約設計 / 🧱ヘキサゴナル / 🗺️C4 図エディタ |
| 高上2 AI/ML | 🎯k-NN ライブデモ / 💬プロンプト品質スコア / 🔮RAG パイプ / 👁️幻覚検出 Trainer |
| 高上3 キャリア | 🧭キャリア診断 / 👤GitHub プロフィール ジェネレータ / 💼ビジネスモデル Sim / 🌍OSS 最初の一歩 |
| 高上4 卒業発表会 | ⏱️発表タイマー / 📑ピッチデック ジェネレータ / 💬質問ボード / 🏆グランド修了証（全12回） |

### 適用済み 配色テーマ

- **初級**: スレートグレー × オレンジ × エメラルド（実務感）
- **中級**: ミッドナイトブルー × イエロー × ティール（フレームワーク感）
- **上級**: ネイビー × ゴールド × ブラック（卒業・プロ感）

### CI 結果

- 52 HTML / 51 inline scripts: 全パス
- ID 重複: 0件
- a11y warning: 61件（増加なし）

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

## 📸 [Task] 各回のスクリーンショット撮影 — **準備完了 / 撮影待ち**

**Labels:** `documentation`, `priority/medium`

### 状態（2026-05-29）

- ✅ 撮影スクリプト `scripts/capture-screenshots.mjs` 作成完了（Playwright Chromium 1280×720）
- ✅ README に 12コース × `<details>` × 2×2テーブル ＝ **48画像分のパス枠** を 事前記述
- ✅ `docs/screenshots/<12コース>/.gitkeep` を 12 ディレクトリ事前作成
- ✅ パス整合性チェック済み（README 参照 48 ＝ 実 interactive.html 48）
- ⏳ **撮影実行はローカル必須**（サンドボックス は npm registry 403 で Playwright 入れられない）

### ローカル実行 手順

```bash
cd ~/work/講義
npm install --save-dev playwright       # 初回のみ
npx playwright install chromium          # 初回のみ（約200MB）
node scripts/capture-screenshots.mjs     # 全 48 枚を 自動撮影（3-5分）

git add docs/screenshots/
git commit -m "Add 48 interactive.html screenshots"
git push origin main
```

オプション:

```bash
# 既存上書き
node scripts/capture-screenshots.mjs --force

# 特定コースだけ
node scripts/capture-screenshots.mjs --filter 高校生
```

### 元のメモ（残置）

- 撮影サイズ：1280×720（README用）— ✅ 採用
- `docs/screenshots/<コース>/<回>.png` に保存 — ✅ 採用

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

## ~~📝 [Task] 各コース「00_カリキュラム概要.md」の 統一テンプレ化~~ — **部分完了 2026-05-26**

**Labels:** `documentation`, `priority/low`

### 状態

- ✅ `_templates/00_カリキュラム概要.md` を 基準テンプレに 整備
- ✅ セクション欠落を 検出する スクリプト `scripts/check-curriculum-sections.mjs`（CI統合済）
- ⏳ 改訂日付の 自動更新 — **未着手**（git ベース で 各 概要ファイル の last-commit-date を 参照する 方式 を 検討）

---

## ~~🐛 [Bug] 既知の小さな問題~~ — **完了 2026-05-26**

**Labels:** `bug`, `priority/low`

### ✅ 中学生・上級 第2回 interactive.html — 完了

`window.crypto.subtle` の file:// フォールバック を 実装:
- `HAS_SUBTLE` 動的検出 → DJB2 ベース の 簡易ハッシュ で フォールバック
- 失敗時 UI に 警告バナー（localhost 起動推奨）
- 既存 SHA-256 ハッシュ 表示 は そのまま

### ✅ 中学生・上級 第3回 interactive.html — 完了

テストランナー の ES2020+ 構文 対応:
- 起動時に `'?.'` `'??'` を 試して 失敗したら 推奨ブラウザ案内（Chrome 91+ / Safari 14+ / Firefox 90+）
- `runTests()` の catch で SyntaxError を 識別、 親切エラー 表示

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
- 状態：**全12コース × 4回 × (lesson.md + interactive.html) = 96ファイル コンプリート 🎉**
- 改訂：
  - 2026年5月26日（高校生コース追加 / CI/CD / A11Y 反映）
  - 2026年5月26日（高校生 interactive.html 12本 完成）
  - 2026年5月29日（スクリーンショット撮影 準備完了、 既知バグ完了化）
- 担当：（記入）
