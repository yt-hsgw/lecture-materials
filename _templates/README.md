# `_templates/` 使い方

新しい回（または新しいコース）を作るときに **コピー元** として使うテンプレ集です。
全9コース（小学生・中学生・高齢者 × 初級・中級・上級）の最新実装パターンを抽出してあります。

## ファイル構成

| ファイル | 用途 | コピー先 |
|---|---|---|
| `lesson.md` | Marp スライド原本 | `{コース}/{回}/lesson.md` |
| `interactive.html` | インタラクティブ教材 | `{コース}/{回}/interactive.html` |
| `00_カリキュラム概要.md` | コース概要（4回分のまとめ） | `{コース}/00_カリキュラム概要.md` |

## 新しい回を作る手順

```bash
# 例: 中学生・初級 第5回（あくまで例）を作る
CSE="中学生_初級/05_新しい回"
mkdir -p "$CSE"
cp _templates/lesson.md       "$CSE/lesson.md"
cp _templates/interactive.html "$CSE/interactive.html"
```

その後、エディタで `{{TITLE}}` などのプレースホルダを実値に置換します。

## プレースホルダ一覧

### 共通（lesson.md / interactive.html 両方）

| プレースホルダ | 例 | 説明 |
|---|---|---|
| `{{COURSE_NAME}}` | `中学生プログラミング塾` | コース全体の名前 |
| `{{LEVEL}}` | `初級` / `中級` / `上級` | レベル |
| `{{LESSON_NUMBER}}` | `1` 〜 `4` | 第N回 |
| `{{TITLE}}` | `Webとインターネット` | 当回のタイトル |
| `{{INTRO_LINE}}` | `Web の正体を のぞいて みよう！` | ヒーローの導入文 |

### lesson.md 専用

| プレースホルダ | 説明 |
|---|---|
| `{{REVIEW_TITLE_N}}` / `{{REVIEW_BODY_N}}` | 前回ふり返り（3項目） |
| `{{GOAL_N}}` | きょうのゴール（3項目） |
| `{{TOPIC_N_TITLE}}` | セクションNの章タイトル（divider用） |
| `{{TOPIC_N_HEADING}}` / `{{TOPIC_N_DESCRIPTION}}` | セクション本体の見出し / 説明 |
| `{{QUESTION_N}}` / `{{CHOICE_NA}}` 〜 `C` / `{{ANSWER_N}}` / `{{ANSWER_N_REASON}}` | クイズ |
| `{{STEP_N}}` / `{{HANDSON_HINT}}` | ハンズオン手順 |
| `{{WARN_N}}` / `{{SAFE_PRACTICE}}` | 警告 |
| `{{MATRIX_LABEL_TL}}` 〜 `BR` / `{{MATRIX_BODY_*}}` | 2×2マトリクス |
| `{{SUMMARY_TITLE_N}}` / `{{SUMMARY_BODY_N}}` | まとめ（3項目） |
| `{{NEXT_LESSON_NUMBER}}` / `{{NEXT_LESSON_TITLE}}` / `{{NEXT_LESSON_DESCRIPTION}}` / `{{HOMEWORK}}` | 次回予告 |
| `{{STUDENT_NAME}}` / `{{COMPLETION_DATE}}` / `{{INSTRUCTOR_NAME}}` | 修了証（最終回のみ） |

### interactive.html 専用

| プレースホルダ | 説明 |
|---|---|
| `{{HERO_EMOJI}}` | ヒーローの大型絵文字（例: `🌐💻✨`） |
| `{{SNAV_LABEL_N}}` | 右側ナビのツールチップ文言 |
| `{{GOAL_HEADING}}` / `{{GOAL_N}}` / `{{GOAL_N_DETAIL}}` | ゴールカード |
| `{{TOPIC_N_GOOD}}` / `{{TOPIC_N_GOOD_BODY}}` / `{{TOPIC_N_BAD}}` / `{{TOPIC_N_BAD_BODY}}` | OK/NG カード |
| `{{STEP_N_TITLE}}` / `{{STEP_N_BODY}}` | 番号付き手順 |
| `{{TIP_N_TITLE}}` / `{{TIP_N_BODY}}` | TIPカード |
| `{{QN_TEXT}}` / `{{QN_A}}` 〜 `C` / `{{QN_EXPLANATION}}` | クイズ（3問） |
| `{{SUMMARY_N_TITLE}}` / `{{SUMMARY_N_BODY}}` | まとめ |
| `{{FINALE_MESSAGE}}` | 最終回フィナーレの文言 |

### 00_カリキュラム概要.md 専用

| プレースホルダ | 説明 |
|---|---|
| `{{COURSE_OVERVIEW}}` / `{{COURSE_HOOK}}` | コース全体の趣旨 / 引用ボックス |
| `{{LESSON_N_TITLE/THEME/HANDSON/AIM}}` | 各回 |
| `{{COLOR_PRIMARY/SECONDARY/ACCENT/WARN/DARK/LIGHT}}` | 配色テーマ |
| `{{TEACHER_EQUIP_N}}` / `{{STUDENT_EQUIP_N}}` | 準備物 |
| `{{POLICY_N_TITLE/BODY}}` | 設計方針 |
| `{{WARN_N_TITLE/BODY}}` | 危険ケース |
| `{{PREV_FEATURE_N}}` / `{{THIS_FEATURE_N}}` | 前段との差分 |
| `{{REVISION_DATE}}` | 改訂日 |
| `{{COURSE_DIR}}` | 例: `中学生_上級` |

## 配色テーマ一覧（CSS変数）

`lesson.md` の `:root` と `interactive.html` の `:root` の値を、コース別に上書きしてください。

| コース | primary | secondary | accent | warn | dark | light |
|---|---|---|---|---|---|---|
| 小学生・初級 | `#3A86FF` | `#FFD166` | `#06D6A0` | `#EF476F` | `#24323D` | `#F3F8FF` |
| 小学生・中級 | `#FF6B6B` | `#FFD93D` | `#6BCB77` | `#E63946` | `#22223B` | `#FFF8F0` |
| 小学生・上級 | `#7209B7` | `#F72585` | `#4CC9F0` | `#E63946` | `#1D1A2F` | `#F8F4FF` |
| 中学生・初級 | `#1D4ED8` | `#F59E0B` | `#10B981` | `#DC2626` | `#0F172A` | `#F1F5F9` |
| 中学生・中級 | `#0E7490` | `#F97316` | `#22C55E` | `#DC2626` | `#0C4A6E` | `#F0F9FF` |
| 中学生・上級 | `#6D28D9` | `#06B6D4` | `#10B981` | `#DC2626` | `#0F172A` | `#F8FAFC` |
| 高齢者・初級 | `#1565C0` | `#F9A825` | `#2E7D32` | `#C62828` | `#102A43` | `#F5F8FB` |
| 高齢者・中級 | `#00695C` | `#FFA000` | `#388E3C` | `#C62828` | `#003D33` | `#F1F8F6` |
| 高齢者・上級 | `#5E35B1` | `#FFA726` | `#26A69A` | `#D32F2F` | `#1A237E` | `#F7F5FA` |

## 対象別のチューニング指針

| 対象 | フォント推奨 | 本文サイズ | 行間 | 注意点 |
|---|---|---|---|---|
| 小学生 | `Hiragino Maru Gothic ProN`（丸ゴシック） | 28〜32px | 1.7 | 用語より絵・体験を優先。漢字には ひらがな or ふりがな |
| 中学生 | `Hiragino Sans` / `Inter` | 26〜28px | 1.7 | 用語は正確に。`code`部品 で 本物のコード を 見せる |
| 高齢者 | `Hiragino Sans` / `Yu Gothic`（明朝NG） | 30〜34px | 1.8〜1.9 | コントラスト高めに。ボタンは ≥ 44px の タップ領域 |

## 利用可能なスライドテーマ（lesson.md）

| クラス | 用途 |
|---|---|
| `.title` | タイトルスライド（最初・最後） |
| `.section` | セクション境界（大きな章番号） |
| `.handson` | ハンズオンスライド（うすい緑背景） |
| `.quiz` | クイズスライド（うすい黄色背景） |
| `.warn` | 注意スライド（うすい赤背景） |
| `.finale` | 最終回フィナーレ（虹色グラデ） |

## 利用可能なコンポーネント

### lesson.md

| 部品 | 用途 |
|---|---|
| `.card` | 白い角丸カード |
| `.grid2` / `.grid3` / `.grid4` | カードを2/3/4列に並べる |
| `.ok` / `.ng` / `.tip` | 左ボーダー付きの色つきブロック |
| `.code` | ターミナル風コードブロック（`.key/.str/.num/.com` で着色） |
| `.matrix` | 2×2マトリクス（優先度・象限分析） |
| `.cert` | 修了証（最終回） |
| `.big` / `.step` | 大型テキスト / 手順 |

### interactive.html

| 部品 | 用途 |
|---|---|
| `.progressbar` | 上端の進捗バー（必須） |
| `.top-status` | 右上の現在地表示（必須） |
| `.snav` + `.snav-help` | 右側ナビ + ショートカット説明 |
| `.modal-bg` + `.modal` | 解説ポップアップ |
| `.toast` | 短い通知 |
| `.confetti` + `celebrate()` | 紙吹雪エフェクト |
| `.hero` + `.scroll-hint` | ヒーロー（最初の画面） |
| `.divider` | セクション境界 |
| `.section` + `.section-label` + `.lead` | セクション本体 |
| `.grid` + `.grid-2/3/4` | レスポンシブグリッド |
| `.card` + `.card.ok/warn/tip` | カード |
| `.quiz` + `.qrow` | 複数問クイズ（解説つき） |
| `.steps` + `.step-row` | 番号付き手順 |
| `.certbox` + `.cert` | 修了証（ライブ更新） |
| `.summary` + `.summary-row` | まとめ |
| `.finale` | お祝いブロック |
| `@media print` | 修了証印刷用 |

## 必須の JS API（interactive.html）

| 関数 | 用途 |
|---|---|
| `updateProgress()` | スクロール / リサイズで自動呼び出し |
| `info(emoji, title, body)` | モーダル表示 |
| `closeModal()` | モーダルを閉じる |
| `showToast(msg)` | トースト通知 |
| `celebrate()` | 紙吹雪 + 「おめでとう」トースト |

## キーボードショートカット（interactive.html 標準搭載）

| キー | 動作 |
|---|---|
| `1` 〜 `9` | 各セクションへジャンプ |
| `?` | ショートカット一覧モーダル |
| `Esc` | モーダルを閉じる |

## 規約

- HTML 1ファイル完結（外部 CSS/JS 禁止、CDN も使わない）
- `localStorage` / `sessionStorage` は 使わない（プライバシー・互換性のため）
- ID重複なし（CIで検出予定）
- 絵文字は OS 依存を避け 標準的なもの（🎓 ✅ ⚠️ 💡 など）を 使う
- `console.log` などのデバッグ出力は 本番に 残さない

## 既存コースの参考リンク

最も実装が厚い回（コピーして 別配色に 流用しやすい）:

| パターン | 参考実装 |
|---|---|
| 子ども向け 王道（クイズ + ハンズオン） | `小学生_初級/04_AIってなんだろう/` |
| プログラミング 上級（多機能ツール集） | `中学生_上級/04_運用改善マネタイズ/` |
| 高齢者向け 大型UI + 修了証 | `高齢者_上級/04_行政金融の電子化/` |
| 中級プログラミング（ライブエディタ含む） | `中学生_中級/02_フロントエンド実装/` |
