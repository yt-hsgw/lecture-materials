# scripts

このフォルダの中身は、各講義の原本（`lesson.md` / `interactive.html`）から派生物を生成するためのスクリプト類です。

| ファイル | 役割 |
|---|---|
| `build-pptx.sh` | Marpマークダウン (`lesson.md`) から PowerPoint (.pptx) を `_generated/` 配下に出力 |

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

## 関連ファイル

- `_templates/lesson.md` — 新しい回を作るときのテンプレート
- `00_講義資料_全体仕様.md` — 教材形式の方針
- `<対象者_レベル>/00_カリキュラム概要.md` — 各コースの構成
