# scripts

このフォルダの中身は、各講義の原本（`lesson.md` / `interactive.html`）から派生物を生成するためのスクリプト類です。

| ファイル | 役割 |
|---|---|
| `build-pptx.sh` | Marpマークダウン (`lesson.md`) から PowerPoint (.pptx) を `_generated/` 配下に出力 |
| `capture-screenshots.mjs` | 全 `interactive.html` を Playwright で 1280×720 撮影。`hero` / `full` / `sections` モード対応 |
| `capture-videos.mjs` | 全 `interactive.html` を自動スクロールしながらデモ動画を WebM 録画。 `--convert-mp4` で MP4 変換 |
| `generate-downloads.mjs` | 各回と各コースの教材を、静的LPから配布するZIPとして `downloads/` に生成 |
| `generate-site-data.mjs` | 教材ディレクトリから `assets/site-data.js` を生成し、静的LP/教材カタログに反映 |
| `check-inline-js.mjs` | 全 HTML の inline `<script>` を `vm.Script` で構文チェック（CI 用） |
| `check-id-duplicates.mjs` | 同一 HTML 内の id 重複を検出（CI 用） |
| `check-a11y-static.mjs` | lang / alt / label / icon-only button の静的 a11y チェック（CI 用） |
| `check-curriculum-sections.mjs` | 各 `00_カリキュラム概要.md` の必須セクション欠落を検出（CI 用） |
| `html-validate.config.json` | html-validate ルール設定（CI 用） |

## 教材カタログの生成

教材を追加・削除したら、先に配布ZIP、その後にカタログデータを生成してください。カタログデータはZIPの存在も記録します。

```bash
node scripts/generate-downloads.mjs
node scripts/generate-site-data.mjs
```

CIと同じ差分確認:

```bash
node scripts/generate-downloads.mjs --check
node scripts/generate-site-data.mjs --check
```

出力先:

```text
downloads/
├── lessons/<コース>/<授業回>.zip
└── courses/<コース>.zip

assets/site-data.js
```

各回ZIPには `lesson.md` と、存在する場合は `interactive.html` が入ります。コースZIPにはカリキュラム概要、全4回の教材、該当する発展教材が入ります。

`--check` は原本と生成済みファイルの差分だけを確認します。CIでは更新漏れの検出に使います。

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

3つのモードがあります（`--mode <hero|full|sections>`、既定 `hero`）。

```bash
# === hero（既定）: ヒーロー画面 1枚/ファイル → 計 48枚 ===
node scripts/capture-screenshots.mjs
node scripts/capture-screenshots.mjs --force       # 既存上書き
node scripts/capture-screenshots.mjs --filter 高校生  # コース絞り込み

# === full: 縦長フルページ 1枚/ファイル → 計 48枚 (.full.png) ===
node scripts/capture-screenshots.mjs --mode full

# === sections: data-snav-target ごとに viewport 撮影 → 計 約 400 枚 ===
node scripts/capture-screenshots.mjs --mode sections

# 特定セクションだけ（id 指定）
node scripts/capture-screenshots.mjs --mode sections --section quiz
node scripts/capture-screenshots.mjs --mode sections --section sec1

# viewport を変更（例: モバイル幅）
node scripts/capture-screenshots.mjs --mode hero --width 800 --height 450
```

### 出力先（モード別）

**hero モード**（既定）:
```text
docs/screenshots/
├── 小学生_初級/
│   ├── 01_パソコンってなんだろう.png         ← 1280×720 ヒーロー
│   └── 04_AIってなんだろう.png
└── 高校生_上級/
    ├── 04_卒業プロジェクト発表会.png
    └── ...
```

**full モード**:
```text
docs/screenshots/
└── 高校生_上級/
    └── 04_卒業プロジェクト発表会.full.png    ← 1280×（数千px）の縦長
```

**sections モード**:
```text
docs/screenshots/
└── 高校生_上級/
    └── 04_卒業プロジェクト発表会/            ← フォルダになる
        ├── 01-top.png                       ← ヒーロー
        ├── 02-timer.png                     ← 発表タイマー
        ├── 03-pitch.png                     ← ピッチデック
        ├── 04-qb.png                        ← Q&Aボード
        ├── 05-sec-cert.png                  ← 修了証
        └── 06-wrap.png                      ← フィナーレ
```

撮影される セクション一覧 は 各回 の HTML 内 `[data-snav-target]` 要素 です。

### 仕組み

裏側で各 `interactive.html` に対して:

1. `file://` URL でローカルファイルとして開く
2. `domcontentloaded` まで待ち、さらに 900ms スリープして JS 初期化を完了させる
3. 起動時に開いたモーダル / トースト / 紙吹雪 を非表示化
4. モード別 に スクロール 位置 を 調整 し `page.screenshot()` を 実行
5. PNG を 該当 ディレクトリ に 保存

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

## capture-videos.mjs（デモ動画 撮影）

全 `interactive.html` を Playwright で **自動スクロールしながら WebM 動画録画**。 各 セクション を 順次 滑らか に スクロール し、 約 30秒 の デモ 動画 を 生成。

### 前提

- Node.js 20+
- Playwright + Chromium が インストール 済み（[screenshot 手順](#capture-screenshotsmjsスクリーンショット撮影) 参照）
- 任意: ffmpeg（MP4 変換 する 場合）

### 使い方

```bash
# 全 48 ファイルを撮影（既存ファイルは skip、 約 30秒/ファイル）
node scripts/capture-videos.mjs

# 高校生コースのみ
node scripts/capture-videos.mjs --filter 高校生

# 既存上書き + 45秒に延長
node scripts/capture-videos.mjs --duration 45 --force

# MP4 にも変換（README で 直接再生可能、 ffmpeg 必須）
node scripts/capture-videos.mjs --convert-mp4

# 特定の1ファイルだけ
node scripts/capture-videos.mjs --filter "高校生_上級/04"
```

### 出力先

```text
docs/videos/
├── 小学生_初級/
│   ├── 01_パソコンってなんだろう.webm
│   ├── 04_AIってなんだろう.webm
│   └── ...
└── 高校生_上級/
    ├── 04_卒業プロジェクト発表会.webm
    └── 04_卒業プロジェクト発表会.mp4    ← --convert-mp4 時のみ
```

### 動画の中身（自動再生される 演出）

1. **0.0〜1.5秒**: ヒーロー画面で 静止（タイトル を 見せる）
2. **1.5〜28秒**: `[data-snav-target]` セクション を 順次 滑らか に スクロール
   - 各セクション ≒ 2〜3秒 滞在
   - 区間の `smooth` スクロール 700ms
3. **28〜30秒**: 最終セクション（修了証 / まとめ）で 静止

セクション数が多い回（10+）では 中間 を 早送り、 少ない回（6）では 各セクション を 長め に 滞在 して 自動調整。

### MP4 変換について

GitHub の README で `<video>` タグ で 直接再生 する 場合 は **MP4 が 必須**（WebM 非対応）。 以下 いずれか:

```bash
# 撮影と 同時に 変換
node scripts/capture-videos.mjs --convert-mp4

# 既存 WebM を まとめて 変換
find docs/videos -name '*.webm' | while read f; do
  ffmpeg -y -i "$f" -c:v libx264 -crf 23 -preset fast -movflags +faststart "${f%.webm}.mp4"
done
```

### トラブルシューティング

#### 動画が真っ黒 / 壊れている

Playwright の recordVideo は コンテキスト 終了時 に ファイル を 確定 します。 スクリプト 内 で `await ctx.close()` を 正しく 待っているため 通常 は 問題ない ですが、 強制終了 した 場合 `docs/videos/<コース>/.tmp-*/` に 残骸 が 残る ことが あります。 削除 してください。

#### ファイルサイズ が 大きい

WebM は VP8/VP9 で 圧縮 されますが、 30秒 で 5〜15MB 程度。 GitHub の リポジトリ サイズ を 抑えたい 場合 は `--filter` で 主要回 のみ 撮影 する、 または README に YouTube/Vimeo の リンク を 貼る 方式 を 検討。

#### 想定 セクション 数 と 違う

スクリプト は `[data-snav-target]` 要素 を 数えて 滞在時間 を 配分 します。 一部 教材（特に オプション教材）は `data-snav-target` が ない ため、 hero + 末尾 の 2点 だけ の フォールバック 動画 に なります。

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
