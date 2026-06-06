# lecture-materials — プログラミング・パソコン教室の教材セット

[![CI](https://github.com/yt-hsgw/lecture-materials/actions/workflows/check.yml/badge.svg)](https://github.com/yt-hsgw/lecture-materials/actions/workflows/check.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![All courses complete](https://img.shields.io/badge/courses-12%2F12-brightgreen)
![Files](https://img.shields.io/badge/files-96-blue)

小学生・中学生・高校生・高齢者の **4対象 × 初級／中級／上級** = **全12コース・48回** の授業教材をオープンソースで公開しています。

Marpスライド (`lesson.md`) と インタラクティブHTML (`interactive.html`) の2形式で、講師の説明と受講者の体験を組み合わせて使えるのが特徴。各 `interactive.html` は外部CDN・APIに一切依存せず、ブラウザで直接開けば動作します（オフライン教室でも安心）。

> **🤝 コントリビュート歓迎**：typo修正・新規教材・対話型ツールの改善など、どんな規模でも OK。詳細は [`CONTRIBUTING.md`](CONTRIBUTING.md) を参照。
> 改善計画・残タスクは [GitHub Issues](../../issues) と [`docs/ISSUES.md`](docs/ISSUES.md) にあります。

## 🌐 教材まとめサイト

ルートの [`index.html`](index.html) は、ログインなしで使える静的LP兼教材カタログです。

- ローカルで見る: `index.html` をブラウザで開く
- 配布ZIPを更新: `node scripts/generate-downloads.mjs`
- 配布ZIPの差分確認: `node scripts/generate-downloads.mjs --check`
- 教材データを更新: `node scripts/generate-site-data.mjs`
- 生成データの差分確認: `node scripts/generate-site-data.mjs --check`
- 設計メモ: [`docs/SITE_STRATEGY.md`](docs/SITE_STRATEGY.md)
- お問い合わせ: `index.html#contact` のフォームから GitHub Issue を作成

---

## 🎉 完成状況

| 対象 | 初級 | 中級 | 上級 |
|---|:---:|:---:|:---:|
| **小学生** | ✅ 4/4 | ✅ 4/4 | ✅ 4/4 |
| **中学生** | ✅ 4/4 | ✅ 4/4 | ✅ 4/4 |
| **高校生** | ✅ 4/4 | ✅ 4/4 | ✅ 4/4 |
| **高齢者** | ✅ 4/4 | ✅ 4/4 | ✅ 4/4 |

**全12コース × 4回 × (lesson.md + interactive.html) = 96ファイル — 完全コンプリート 🎉**

---

## 📚 全コース・全回 一覧

### 小学生向けプログラミング教室

| コース | 第1回 | 第2回 | 第3回 | 第4回 |
|---|---|---|---|---|
| **初級** | パソコンってなんだろう | インターネットとWebサイト | プログラミングってなんだろう | AIってなんだろう |
| **中級** | Scratchでゲーム（前編） | Scratchでゲーム（後編） | HTMLで自己紹介ページ | AIといっしょに作品紹介 |
| **上級** | 作品の企画書をかこう | 作品を作ろう | テストしてなおそう | 発表会 |

### 中学生向けプログラミング塾

| コース | 第1回 | 第2回 | 第3回 | 第4回 |
|---|---|---|---|---|
| **初級** | コンピューターと開発環境 | Webとインターネット | プログラミング基本構文 | AI活用と開発の流れ |
| **中級** | アプリの設計 | フロントエンド実装 | バックエンド入門 (Flask) | テスト・Git・公開 |
| **上級** | 要件定義と設計 | 実装とレビュー | テストとリリース | 運用・改善・マネタイズ概論 |

### 高校生プログラミング塾（MD のみ）

| コース | 第1回 | 第2回 | 第3回 | 第4回 |
|---|---|---|---|---|
| **初級** | 開発環境のプロ仕様 | 型のある世界 | テスト駆動開発 (TDD) | アジャイルとIssue駆動 |
| **中級** | チーム開発の現実 | フロントエンドフレームワーク | バックエンドのスケール | DevOps と監視 |
| **上級** | アーキテクチャ設計 | AI/ML 入門 | 起業・OSS・キャリア | 卒業プロジェクト発表会 |

### 高齢者向けパソコン教室

| コース | 第1回 | 第2回 | 第3回 | 第4回 |
|---|---|---|---|---|
| **初級** | パソコンを使ってみよう | ファイルとフォルダ | インターネットを安全に使う | メール・写真・AIを使ってみる |
| **中級** | 文書を作ろう (Word) | 数字の表を使ってみる (Excel) | 写真・動画とクラウド | ビデオ通話とSNSの基本 |
| **上級** | クラウドとバックアップ | AIを暮らしの相棒に | 情報発信を楽しむ | 行政・金融の電子化 |

---

## 🎨 コース別配色

各コースを 視覚的に 区別できるよう、配色を 差別化しています。

| コース | メイン色 | アクセント | 雰囲気 |
|---|---|---|---|
| 小学生・初級 | `#FF6B6B` コーラル | `#FFE66D` × `#4ECDC4` | ポップ・幼児向け |
| 小学生・中級 | `#FF8C1A` オレンジ | `#FCBD19` × `#4C97FF` | Scratch風 |
| 小学生・上級 | `#7C4DFF` パープル | `#FFD54F` × `#00BFA5` | クリエイティブ |
| 中学生・初級 | `#2563EB` ブルー | `#F59E0B` × `#10B981` | モダン開発者 |
| 中学生・中級 | `#4F46E5` インディゴ | `#F59E0B` × `#10B981` | 技術書風 |
| 中学生・上級 | `#6D28D9` ディープパープル | `#06B6D4` × `#10B981` | プロダクション |
| 高校生・初級 | `#475569` スレートグレー | `#F97316` × `#10B981` | 実務感・ターミナル |
| 高校生・中級 | `#1E3A8A` ミッドナイトブルー | `#FACC15` × `#14B8A6` | フレームワーク・Vercel風 |
| 高校生・上級 | `#1E40AF` ネイビー | `#EAB308` × `#CA8A04` | 卒業・プロ・ゴールド |
| 高齢者・初級 | `#2E7D32` グリーン | `#FFA000` × `#5D4037` | 落ち着いた木目調 |
| 高齢者・中級 | `#00838F` ティール | `#FFA000` × `#43A047` | 実用・安心 |
| 高齢者・上級 | `#5E35B1` ディープパープル | `#FFA726` × `#26A69A` | 知性・上品 |

---

## ✨ 主要なインタラクティブ機能（抜粋）

各回の `interactive.html` には、ブラウザで動く独自の対話型ツールが組み込まれています。**150以上の機能**を実装。

### 小学生向け

- **🎮 ライブもぐらたたきゲーム**（小・中級第2回）：実際に遊べる完成版＋ Scratchブロック解説
- **📝 ライブHTMLエディタ**（小・中級第3回）：左でコード／右で即時プレビュー、`.html` ダウンロード対応
- **🪪 自己紹介ページメーカー**（小・中級第3回）：35種類の絵文字＋カラーピッカーで本物の HTML を生成
- **📐 マンダラ法アイデア発想**（小・上級第1回）：9マスでアイデアを広げる
- **🎨 画面設計ボード**（小・上級第1回）：パーツをドラッグで自由配置
- **🤖 AI模擬対話**（小・中級第4回／上級第2回）：プロンプト品質に応じて回答が変化

### 中学生向け

- **💾 ライブTODOアプリ**（中・中級第2回）：実際に動作＋ localStorage 永続化＋ DevTools 学習
- **🌐 モック Flask API テスター**（中・中級第3回）：ブラウザ内で完全なREST APIを再現（CRUD＋エラーハンドリング）
- **🗄️ DB スキーマ設計ツール**（中・上級第1回）：CREATE TABLE / TypeScript / JSON を自動生成、ER図にも連動描画
- **🌿 Git ブランチ可視化**（中・上級第2回）：commit/branch/merge をボタン操作で SVG 可視化
- **🛡️ SQLi/XSS プレイグラウンド**（中・上級第2回）：実際の攻撃パターンを試して安全/危険を比較
- **🧪 in-browser Jest ランナー**（中・上級第3回）：`test()` / `expect().toBe()` 実装で本物の感覚

### 高齢者向け

- **📊 印刷可能な町内会案内ジェネレータ**（高・中級第1回）：A4印刷 / .html保存 — 家でも使える
- **💴 家計簿テンプレート**（高・中級第2回）：合計・グラフ自動更新
- **📷 共有範囲シミュレータ**（高・中級第3回）：自分のみ／家族のみ／リンク／公開を視覚化
- **🕵️ 詐欺見破りクイズ**（高・中級第4回）：実物そっくりの SMS / 電話 / LINE / メール
- **🛡️ NG情報チェッカー**（高・上級第2回）：AI に入れていい情報を 正規表現15ルールで判定
- **📒 自分用手順ノート ジェネレータ**（高・上級第4回）：マイナポータル等のログイン手順を印刷可能ノートに

---

## 📸 ギャラリー（全48ファイルの実画面）

実際の `interactive.html` を 1280×720 で撮影したスクリーンショットです。各セクションを展開してください。

> **📌 撮影方法**：`docs/screenshots/` 配下に画像を生成します。手順は [`scripts/README.md`](scripts/README.md#capture-screenshotsmjsスクリーンショット撮影) を参照（`npm install playwright && npx playwright install chromium && node scripts/capture-screenshots.mjs` の3コマンドで全48枚を自動撮影）。

<details>
<summary><b>🧒 小学生・初級</b>（パソコン / インターネット / プログラミング / AI）</summary>

| 第1回 パソコンってなんだろう | 第2回 インターネットとWebサイト |
|---|---|
| ![](docs/screenshots/小学生_初級/01_パソコンってなんだろう.png) | ![](docs/screenshots/小学生_初級/02_インターネットとWebサイト.png) |
| **第3回 プログラミングってなんだろう** | **第4回 AIってなんだろう** |
| ![](docs/screenshots/小学生_初級/03_プログラミングってなんだろう.png) | ![](docs/screenshots/小学生_初級/04_AIってなんだろう.png) |

</details>

<details>
<summary><b>🧒 小学生・中級</b>（Scratchゲーム前後編 / HTML / AI作品紹介）</summary>

| 第1回 Scratchでゲーム（前編） | 第2回 Scratchでゲーム（後編） |
|---|---|
| ![](docs/screenshots/小学生_中級/01_Scratchでゲームを作ろう_前編.png) | ![](docs/screenshots/小学生_中級/02_Scratchでゲームを作ろう_後編.png) |
| **第3回 HTMLで自己紹介ページ** | **第4回 AIといっしょに作品紹介** |
| ![](docs/screenshots/小学生_中級/03_HTMLで自己紹介ページ.png) | ![](docs/screenshots/小学生_中級/04_AIといっしょに作品紹介.png) |

</details>

<details>
<summary><b>🧒 小学生・上級</b>（企画書 / 制作 / テスト / 発表会）</summary>

| 第1回 作品の企画書をかこう | 第2回 作品を作ろう |
|---|---|
| ![](docs/screenshots/小学生_上級/01_作品の企画書をかこう.png) | ![](docs/screenshots/小学生_上級/02_作品を作ろう.png) |
| **第3回 テストしてなおそう** | **第4回 発表会** |
| ![](docs/screenshots/小学生_上級/03_テストしてなおそう.png) | ![](docs/screenshots/小学生_上級/04_発表会.png) |

</details>

<details>
<summary><b>👨‍🎓 中学生・初級</b>（コンピューター / Web / プログラミング基本 / AI活用）</summary>

| 第1回 コンピューターと開発環境 | 第2回 Webとインターネット |
|---|---|
| ![](docs/screenshots/中学生_初級/01_コンピューターと開発環境.png) | ![](docs/screenshots/中学生_初級/02_Webとインターネット.png) |
| **第3回 プログラミング基本構文** | **第4回 AI活用と開発の流れ** |
| ![](docs/screenshots/中学生_初級/03_プログラミング基本構文.png) | ![](docs/screenshots/中学生_初級/04_AI活用と開発の流れ.png) |

</details>

<details>
<summary><b>👨‍🎓 中学生・中級</b>（アプリ設計 / FE実装 / BE入門 / テスト・Git公開）</summary>

| 第1回 アプリの設計 | 第2回 フロントエンド実装 |
|---|---|
| ![](docs/screenshots/中学生_中級/01_アプリの設計.png) | ![](docs/screenshots/中学生_中級/02_フロントエンド実装.png) |
| **第3回 バックエンド入門** | **第4回 テストGit公開** |
| ![](docs/screenshots/中学生_中級/03_バックエンド入門.png) | ![](docs/screenshots/中学生_中級/04_テストGit公開.png) |

</details>

<details>
<summary><b>👨‍🎓 中学生・上級</b>（要件定義 / 実装レビュー / テストリリース / 運用マネタイズ）</summary>

| 第1回 要件定義と設計 | 第2回 実装とレビュー |
|---|---|
| ![](docs/screenshots/中学生_上級/01_要件定義と設計.png) | ![](docs/screenshots/中学生_上級/02_実装とレビュー.png) |
| **第3回 テストとリリース** | **第4回 運用改善マネタイズ** |
| ![](docs/screenshots/中学生_上級/03_テストとリリース.png) | ![](docs/screenshots/中学生_上級/04_運用改善マネタイズ.png) |

</details>

<details>
<summary><b>🎓 高校生・初級</b>（開発環境プロ仕様 / 型 / TDD / アジャイル）</summary>

| 第1回 開発環境のプロ仕様 | 第2回 型のある世界 |
|---|---|
| ![](docs/screenshots/高校生_初級/01_開発環境のプロ仕様.png) | ![](docs/screenshots/高校生_初級/02_型のある世界.png) |
| **第3回 テスト駆動開発** | **第4回 アジャイルとIssue駆動** |
| ![](docs/screenshots/高校生_初級/03_テスト駆動開発.png) | ![](docs/screenshots/高校生_初級/04_アジャイルとIssue駆動.png) |

</details>

<details>
<summary><b>🎓 高校生・中級</b>（チーム開発 / FE FW / BEスケール / DevOps監視）</summary>

| 第1回 チーム開発の現実 | 第2回 フロントエンドフレームワーク |
|---|---|
| ![](docs/screenshots/高校生_中級/01_チーム開発の現実.png) | ![](docs/screenshots/高校生_中級/02_フロントエンドフレームワーク.png) |
| **第3回 バックエンドのスケール** | **第4回 DevOpsと監視** |
| ![](docs/screenshots/高校生_中級/03_バックエンドのスケール.png) | ![](docs/screenshots/高校生_中級/04_DevOpsと監視.png) |

</details>

<details>
<summary><b>🎓 高校生・上級</b>（アーキ設計 / AI ML / キャリア / 卒業発表）</summary>

| 第1回 アーキテクチャ設計 | 第2回 AI/ML 入門 |
|---|---|
| ![](docs/screenshots/高校生_上級/01_アーキテクチャ設計.png) | ![](docs/screenshots/高校生_上級/02_AI_ML入門.png) |
| **第3回 起業・OSS・キャリア** | **第4回 卒業プロジェクト発表会** 🎓 |
| ![](docs/screenshots/高校生_上級/03_起業OSSキャリア.png) | ![](docs/screenshots/高校生_上級/04_卒業プロジェクト発表会.png) |

</details>

<details>
<summary><b>👵 高齢者・初級</b>（パソコン / ファイル / インターネット安全 / メール・写真・AI）</summary>

| 第1回 パソコンを使ってみよう | 第2回 ファイルとフォルダ |
|---|---|
| ![](docs/screenshots/高齢者_初級/01_パソコンを使ってみよう.png) | ![](docs/screenshots/高齢者_初級/02_ファイルとフォルダ.png) |
| **第3回 インターネットを安全に使う** | **第4回 メール・写真・AIを使ってみる** |
| ![](docs/screenshots/高齢者_初級/03_インターネットを安全に使う.png) | ![](docs/screenshots/高齢者_初級/04_メール_写真_AIを使ってみる.png) |

</details>

<details>
<summary><b>👵 高齢者・中級</b>（文書 / 表計算 / 写真・動画クラウド / ビデオ通話SNS）</summary>

| 第1回 文書を作ろう | 第2回 数字の表を使ってみる |
|---|---|
| ![](docs/screenshots/高齢者_中級/01_文書を作ろう.png) | ![](docs/screenshots/高齢者_中級/02_数字の表を使ってみる.png) |
| **第3回 写真動画とクラウド** | **第4回 ビデオ通話とSNS** |
| ![](docs/screenshots/高齢者_中級/03_写真動画とクラウド.png) | ![](docs/screenshots/高齢者_中級/04_ビデオ通話とSNS.png) |

</details>

<details>
<summary><b>👵 高齢者・上級</b>（クラウド・バックアップ / AIを暮らしの相棒 / 情報発信 / 行政金融電子化）</summary>

| 第1回 クラウドとバックアップ | 第2回 AIを暮らしの相棒に |
|---|---|
| ![](docs/screenshots/高齢者_上級/01_クラウドとバックアップ.png) | ![](docs/screenshots/高齢者_上級/02_AIを暮らしの相棒に.png) |
| **第3回 情報発信を楽しむ** | **第4回 行政金融の電子化** |
| ![](docs/screenshots/高齢者_上級/03_情報発信を楽しむ.png) | ![](docs/screenshots/高齢者_上級/04_行政金融の電子化.png) |

</details>

---

## 🎨 共通レイアウト（SVG模式図）

以下は全 `interactive.html` で共通の UI パターンです。

### コース構成図

```mermaid
graph LR
    A[初級・各回] --> B[中級・各回]
    B --> C[上級・各回]
    A1[小学生] --> B1[小学生] --> C1[小学生]
    A2[中学生] --> B2[中学生] --> C2[中学生]
    A3[高齢者] --> B3[高齢者] --> C3[高齢者]
```

### 共通インタラクティブHTML レイアウト

```text
┌─────────────────────────────────────────┬─────┐
│ プログレスバー（上端、スクロール率）           │     │
├─────────────────────────────────────────┤章ナビ│
│                                         │縦並び│
│ Hero（グラデーション背景・大タイトル）       │     │
│                                         │ 1   │
├─────────────────────────────────────────┤ 2   │
│ Section（カード／ツール／クイズ）             │ 3   │
│                                         │ ... │
│  📊 各回独自の対話ツール                       │     │
│  ❓ クイズ（解説付き）                         │     │
│                                         │     │
└──────────────────────────────────────[?]┴─────┘
                                       ↑
                                  キーボード ヘルプ
```

### 共通UXパターン（全36回で統一）

- ⬆️ **プログレスバー**：スクロール率を上端に表示
- 🧭 **章ナビ**（右側）：ホバーで章タイトル表示、クリックで該当章へ
- ❓ **モーダル**：詳細情報をポップアップで（×でクローズ）
- ⌨️ **キーボードショートカット**：`←↑→↓` 章移動、`1-9` で直行、`?` ヘルプ
- 🍞 **トースト通知**：アクション結果を画面下部に一時表示
- ✅ **クイズ**：解説モーダル付き、リトライ無制限

---

## 📂 ディレクトリ構成

```text
.
├── README.md                       # このファイル
├── 00_講義資料_全体仕様.md           # 設計仕様
├── 授業前チェックリスト.md            # 講師向け
├── docs/
│   └── ISSUES.md                  # 改善点・新講座候補のIssue一覧
├── _templates/                    # 新規教材のひな形
│   ├── 00_カリキュラム概要.md
│   ├── lesson.md
│   └── interactive.html
├── scripts/                       # 補助スクリプト
│   ├── README.md
│   └── build-pptx.sh              # Marp → PPTX 一括変換
│
├── 小学生_初級/
│   ├── 00_カリキュラム概要.md
│   ├── 01_パソコンってなんだろう/   { lesson.md, interactive.html }
│   ├── 02_インターネットとWebサイト/
│   ├── 03_プログラミングってなんだろう/
│   ├── 04_AIってなんだろう/
│   └── オプション教材/             # Scratch 入門（任意）
│
├── 小学生_中級/                    # 01〜04 各回
├── 小学生_上級/                    # 01〜04 各回
├── 中学生_初級/                    # 01〜04 各回
├── 中学生_中級/                    # 01〜04 各回
├── 中学生_上級/                    # 01〜04 各回
├── 高校生_初級/                    # 01〜04 各回（lesson.md のみ）
├── 高校生_中級/                    # 01〜04 各回（lesson.md のみ）
├── 高校生_上級/                    # 01〜04 各回（lesson.md のみ）
├── 高齢者_初級/                    # 01〜04 各回
├── 高齢者_中級/                    # 01〜04 各回
└── 高齢者_上級/                    # 01〜04 各回
```

各回フォルダの中身：

```text
NN_タイトル/
├── lesson.md              # Marp 形式のスライド原本
└── interactive.html       # ブラウザで開く対話型教材
```

一部の回には追加で `template.html`（高齢者向けの 手順書 など）が同梱されています。

---

## 🚀 使い方

### スライドを見る

1. VS Code で対象回の `lesson.md` を開く
2. **Marp拡張** でプレビュー
3. 必要に応じて PDF や PPTX へ書き出し

### PPTX を一括書き出し

```bash
./scripts/build-pptx.sh                  # 全対象を変換
./scripts/build-pptx.sh 小学生_初級       # 対象を絞る
./scripts/build-pptx.sh --list           # 対象ファイル一覧の確認のみ
./scripts/build-pptx.sh --pdf            # PPTXに加えPDFも出力
```

出力先は `_generated/<対象者_レベル>/<回フォルダ名>.pptx`。`_generated/` は `.gitignore` 済み。

### 体験教材を使う

`interactive.html` を **ブラウザで直接開く**。ローカルファイルで動作するように設計してあります（外部CDN・APIへの依存なし）。

```bash
# macOS
open 小学生_初級/04_AIってなんだろう/interactive.html

# Linux
xdg-open 小学生_初級/04_AIってなんだろう/interactive.html
```

### 授業で使う（標準フロー）

各回は60〜90分を想定：

1. あいさつ・前回の復習（5分）
2. スライド説明（20分）
3. ハンズオン／インタラクティブ教材（40〜50分）
4. 共有・発表（10分）
5. 振り返り・宿題（5分）

→ 詳細は [`授業前チェックリスト.md`](授業前チェックリスト.md) を参照。

---

## 🎨 設計方針

- **データモデル先行**：対象者 × レベル × 教材形式 × 講義トピックを分けて管理
- **lesson.md = 原本、PPTX = 生成物**：Git管理は原本のみ
- **ブラウザだけで完結**：interactive.html は CDN・API への依存なし（localStorage / sessionStorage も不使用）
- **配色で識別**：12コース各々で配色を差別化、UI共通パターンは維持
- **AI体験は疑似AI推奨**：実APIに依存せず、プロンプト品質に応じた応答を内蔵
- **段階的開示**：初級は触る・中級は作る・上級は組み立てる
- **オフライン耐性**：教室の Wi-Fi がなくても全機能が動作する

---

## 🔒 セキュリティ・共有時の注意

- **APIキー、パスワード、個人情報を 教材に書かない**
- AI体験で本名、住所、学校名、電話番号、顔写真、友だちの情報を **入力しない**
- 実AIサービスを実演する場合は、年齢制限・アカウント・保護者同意・入力してよい情報を **事前確認**
- 外部AIサービスや Scratch 本体を使う場合は、年齢制限・保護者同意・保存方法を確認
- GitHub で外部共有する場合は、このリポジトリへのアクセス権限を **必要な相手だけに 付与**

---

## 📊 開発統計

- **総スライド数**：約 **2,400+ スライド**（lesson.md 48本）
- **総スクリプト行数**：約 **40,000+ 行**（interactive.html × 48 の JavaScript）
- **対話型ツール数**：**200+** （各回 4〜6個の独自ツール）
- **クイズ問題数**：**140+**
- **印刷可能ドキュメント**：8種以上（修了証 7種＋町内会案内・家計簿・手順ノート 等）

---

## 🤖 CI / CD（GitHub Actions）

push / PR 時に `.github/workflows/check.yml` が以下を自動チェック:

| ジョブ | 内容 |
|---|---|
| `markdown-lint` | markdownlint-cli2 で 全 `.md` を 検査 |
| `html-validate` | html-validate で 全 `.html` の 構文を 検査 |
| `js-syntax` | `interactive.html` 内 inline `<script>` の 構文を `vm.Script` で 検査 |
| `id-duplicates` | 各 HTML の id 重複 検出（同一ファイル内） |
| `link-check` | lychee で リンク切れ 検出（warning） |
| `a11y-static` | 静的 a11y チェック（lang / alt / label / icon-only button） |

ローカルでも 実行可能:

```bash
node scripts/check-inline-js.mjs
node scripts/check-id-duplicates.mjs
node scripts/check-a11y-static.mjs
```

---

## ♿ アクセシビリティ

全教材で **WCAG 2.1 AA 相当** を 目標。 詳細 / チェックリスト は [`docs/A11Y.md`](docs/A11Y.md) を 参照。

- ✅ `<html lang="ja">` を 全 HTML に
- ✅ `modal-close`（× ボタン）全39ファイル に `aria-label="閉じる"` 付与済み（2026-05）
- ✅ コース別配色 は **コントラスト比 4.5:1 以上** を 維持
- ⚠️ インタラクティブ ツール 内 の `<input>` ラベル付与 は 漸進改善中

---

## 🔮 ロードマップ

未着手の改善提案は [GitHub Issues](../../issues) と [`docs/ISSUES.md`](docs/ISSUES.md) を参照。生成 AI が単独で着手しやすい形式で `.github/issues-to-create/` にも下書きあり。

- 🎥 **デモ動画**（30秒×48回）作成 — 撮影スクリプト [`scripts/capture-videos.mjs`](scripts/capture-videos.mjs) 完成済み、 実行のみ残
- 🌍 **英語版** の作成（`lesson.en.md` / `interactive.en.html`）
- 📦 **パッケージング / 配布**（コース別 ZIP + GitHub Releases）
- 🎓 **修了証 デザイン 統一**（共通テンプレ化 + PDF ダウンロード）
- 💡 **受講者向けポータル Web サイト**（進度管理 / バッジ / 自動修了証）
- ♿ A11Y 残61件（教材ツール内 input ラベル付与の漸進対応）

---

## 🤝 コントリビュート

- バグ報告 / 機能提案: [GitHub Issues](../../issues) で歓迎
- コード貢献: [`CONTRIBUTING.md`](CONTRIBUTING.md) のガイドラインを参照
- 議論 / 質問: GitHub Discussions（リポジトリ設定で有効化）

新規 PR・改善提案 大歓迎です！

---

## 📝 ライセンス

[MIT License](LICENSE) ©︎ 2026 contributors

教材コンテンツ・コード ともに自由にお使いいただけます（クレジット表記推奨）。

---

## 🙏 Acknowledgements

教材作成・改善には生成 AI（Anthropic Claude）も活用しています。今後の改善も AI と人間の協働で進めていく予定です。

---

<sub>最終更新: 2026年5月</sub>
