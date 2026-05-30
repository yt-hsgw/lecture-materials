# scripts

このフォルダの中身は、各講義の原本（`lesson.md` / `interactive.html`）から派生物を生成するためのスクリプト類です。

| ファイル | 役割 |
|---|---|
| `build-pptx.sh` | Marpマークダウン (`lesson.md`) から PowerPoint (.pptx) を `_generated/` 配下に出力 |
| `capture-screenshots.mjs` | 全 `interactive.html` を Playwright で 1280×720 撮影、`docs/screenshots/` に保存 |
| `check-inline-js.mjs` | 全 HTML の inline `<script>` を `vm.Script` で構文チェック（CI 用） |
| `check-id-duplicates.mjs` | 同一 HTML 内の id 重複を検出（CI 用） |
| `check-a11y-static.mjs` | lang / alt / label / icon-only button の静的 a11y チェック（CI 用） |
| `check-curriculum-sections.mjs` | 各 `00_カリキュラム概要.md` の必須セクション欠落を検出（CI 用） |
| `html-validate.config.json` | html-validate ルール設定（CI 用） |

## build-pptx.sh

Marp拡張は VS Code 上で個別にエクスポートも可能ですが、複数回・複数対象を一括で出力したいときにこのスクリプトを使います。

### 前提

- macOS / Linux
- Node.js / npx（[公式インストーラ](https://nodejs.org/ja/download) または `brew install node`）
- インターネット接続（初回のみ `marp-cli` を `npx` 経由でダウンロード）

### 使い方

リポジトリのルート（このスクリプトの2階層上の `講義/` ディレクトリ）から実行します。

```bash
# すべての対象を変換
./scripts/build-pptx.sh

# 小学生・初級だけ
./scripts/build-pptx.sh 小学生_初級

# 変換せず、対象ファイル一覧だけ表示
./scripts/build-pptx.sh --list

# PPTX に加えて PDF も出力
./scripts/build-pptx.sh --pdf

# ヘルプ
./scripts/build-pptx.sh --help
```

### 出力先

```text
_generated/
└── 小学生_初級/
    ├── 01_パソコンってなんだろう.pptx
    ├── 02_インターネットとWebサイト.pptx
    ├── 03_プログラミングってなんだろう.pptx
    └── 04_AIってなんだろう.pptx
```

`_generated/` 配下は `.gitignore` で除外しています。再生成は自由、コミット不要です。

### 仕組み

裏側ではこんなコマンドを各 `lesson.md` に対して実行しています。

```bash
npx -y --package=@marp-team/marp-cli marp \
  --pptx --allow-local-files \
  -o "_generated/<対象者>/<回名>.pptx" \
  "<対象者>/<回フォルダ>/lesson.md"
```

`--pdf` をつけると `marp-cli` の `--pdf` フラグも実行し、PDFも生成します。

### トラブルシューティング

#### 「npx が見つかりません」と表示される

Node.js がインストールされていません。Mac なら `brew install node`、または [公式](https://nodejs.org/ja/download) からダウンロードしてください。

#### 初回実行が遅い

`npx` が `marp-cli` 一式（ヘッドレス Chromium 含む、約数百MB）をキャッシュにダウンロードします。2回目以降はすぐ実行されます。

#### 絵文字が文字化けする・□で表示される

PPTX変換は内部で Chromium を使うため、レンダリング時に絵文字フォントが必要です。Mac は標準で Apple Color Emoji が入っているのでそのまま使えます。Linux で実行する場合は `fonts-noto-color-emoji` 等を入れてください。

#### 一部のスライドだけ更新したい

`--list` でフォルダ名を確認した上で、フォルダ名（例: `04_AIってなんだろう`）でフィルターできます。

```bash
./scripts/build-pptx.sh 04_AI
```

### 既知の制限

- Marp の PPTX 変換は、各スライドを 画像化 して埋め込む方式です。PowerPoint 上でテキストを直接編集することはできません（編集は原本の `lesson.md` を変更してから再生成）。
- 細かいフォントの違い（特に Hiragino Maru Gothic ProN）は、変換環境とプレゼン環境のフォント有無によって表示が変わることがあります。プレゼン端末で一度だけ全スライドの目視確認を推奨します。

## capture-screenshots.mjs（スクリーンショット撮影）

全 `interactive.html`（48 ファイル）を **Playwright（Chromium）** で 1280×720 のヒーロー画面で撮影し、`docs/screenshots/<コース>/<回>.png` に保存します。README のギャラリーで利用。

### 前提

- Node.js 20+
- インターネット接続（初回のみ Playwright と Chromium ブラウザをダウンロード、約 200MB）

### 初回セットアップ

リポジトリのルートで:

```bash
# Playwright をローカルインストール
npm install --save-dev playwright

# Chromium ブラウザをダウンロード
npx playwright install chromium
```

### 使い方

```bash
# 全 48 ファイルを撮影（既存ファイルは skip）
node scripts/capture-screenshots.mjs

# 既存ファイルを上書きして再撮影
node scripts/capture-screenshots.mjs --force

# 特定コースだけ撮影（フォルダ名 部分一致）
node scripts/capture-screenshots.mjs --filter 高校生
node scripts/capture-screenshots.mjs --filter 中学生_上級
```

### 出力先

```text
docs/screenshots/
├── 小学生_初級/
│   ├── 01_パソコンってなんだろう.png
│   ├── 02_インターネットとWebサイト.png
│   ├── 03_プログラミングってなんだろう.png
│   ├── 04_AIってなんだろう.png
│   └── オプション教材__04_Scratch入門.png  (※ サブフォルダは __ で結合)
├── 中学生_初級/
├── ... 全 12 コース ...
└── 高校生_上級/
    ├── 01_アーキテクチャ設計.png
    ├── 02_AI_ML入門.png
    ├── 03_起業OSSキャリア.png
    └── 04_卒業プロジェクト発表会.png
```

### 仕組み

裏側で各 `interactive.html` に対して:

1. `file://` URL でローカルファイルとして開く
2. `domcontentloaded` まで待ち、さらに 900ms スリープして JS 初期化を完了させる
3. 起動時に開いたモーダルやトースト要素を非表示化
4. `window.scrollTo(0, 0)` でヒーロー位置に戻す
5. `page.screenshot()` で viewport（1280×720）を PNG 出力

### 撮影後

スクリーンショットを git に追加してコミット → push すると、`README.md` のギャラリーセクションで GitHub 上で表示されます:

```bash
git add docs/screenshots/
git commit -m "Add 48 interactive.html screenshots"
git push
```

### トラブルシューティング

#### `Error: browserType.launch: Executable doesn't exist at ...`

`npx playwright install chromium` を実行してください。Chromium のバイナリが必要です。

#### `Error: net::ERR_FILE_NOT_FOUND` で全ファイル失敗

リポジトリのルート（`講義/` ディレクトリ）から実行しているか確認してください。

#### 一部ファイルだけ崩れている

撮影スクリプトは JS 初期化を 900ms 待つので大抵 OK ですが、画像読み込みや WebGL を使う回でずれることがあります。`--force` で再撮影、または該当ファイルを開いて手動でクリーン状態にしてから撮影してください。

#### 撮影後の画像サイズが想定より大きい / 小さい

`deviceScaleFactor: 1.5` を script 内で指定しています。完全に 1280×720 にしたい場合は `1` に変更してください（README ではこの値で良い感じに見えます）。

## CI 用スクリプト群

GitHub Actions（`.github/workflows/check.yml`）から自動実行される静的検査スクリプトです。ローカルでも実行できます:

```bash
# inline JS の構文チェック
node scripts/check-inline-js.mjs

# 同一HTML内の id 重複検出
node scripts/check-id-duplicates.mjs

# 静的 a11y チェック（lang / img alt / input label / icon-only button）
node scripts/check-a11y-static.mjs

# カリキュラム概要の必須セクション欠落検出
node scripts/check-curriculum-sections.mjs

# HTML 構文検証
npx html-validate --config scripts/html-validate.config.json '**/*.html'
```

各スクリプトは `git ls-files` ベースで対象ファイルを列挙するため、git 管理外のファイルは自動的に対象外になります。

## 関連ファイル

- `_templates/lesson.md` — 新しい回を作るときのテンプレート
- `00_講義資料_全体仕様.md` — 教材形式の方針
- `<対象者_レベル>/00_カリキュラム概要.md` — 各コースの構成
- `docs/A11Y.md` — アクセシビリティガイド
- `docs/ISSUES.md` — 改善計画
