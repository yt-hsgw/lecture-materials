---
marp: true
theme: default
paginate: true
size: 16:9
header: '高校生プログラミング塾 ／ 上級 第4回 ／ 最終回'
footer: '卒業プロジェクト発表会'
style: |
  :root {
    --c-primary:   #1E40AF;
    --c-secondary: #EAB308;
    --c-accent:    #CA8A04;
    --c-warn:      #DC2626;
    --c-dark:      #0C0A09;
    --c-light:     #FAFAF9;
  }
  section {
    background: var(--c-light);
    color: #1A1A2E;
    font-family: 'Inter','Hiragino Sans','Yu Gothic',sans-serif;
    font-size: 28px;
    line-height: 1.7;
    padding: 56px;
  }
  section h1 { color: var(--c-primary); font-size: 56px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 40px; margin-bottom: 18px; }
  section h3 { color: var(--c-accent);  font-size: 28px; }
  section.title { background: linear-gradient(135deg, var(--c-primary), var(--c-dark)); color: white; text-align: center; }
  section.title h1 { color: white; font-size: 72px; }
  section.section { background: var(--c-dark); color: white; text-align: center; }
  section.section h1 { color: var(--c-secondary); font-size: 64px; }
  section.handson { background: #FEFCE8; }
  section.handson h1 { color: var(--c-accent); }
  section.warn { background: #FEF2F2; }
  section.warn h1 { color: var(--c-warn); }
  section.finale {
    background: linear-gradient(135deg, var(--c-primary), var(--c-accent), var(--c-secondary));
    color: white; text-align: center;
  }
  section.finale h1 { color: white; font-size: 60px; }
  .card { background: white; border-radius: 14px; padding: 18px 24px; margin: 12px 0; box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .grid4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .ok  { background: #FEF9C3; border-left: 6px solid var(--c-accent);    padding: 12px 18px; border-radius: 6px; }
  .ng  { background: #FEF2F2; border-left: 6px solid var(--c-warn);      padding: 12px 18px; border-radius: 6px; }
  .tip { background: #FEFCE8; border-left: 6px solid var(--c-secondary); padding: 12px 18px; border-radius: 6px; }
  .step { font-size: 30px; }
  .step b { color: var(--c-primary); }
  .cert {
    background: linear-gradient(135deg, #FEFCE8, #FAFAF9);
    border: 8px double var(--c-primary);
    border-radius: 18px; padding: 36px;
    text-align: center; box-shadow: 0 6px 24px rgba(30,64,175,.2);
  }
  .cert h2 { color: var(--c-primary); letter-spacing: 10px; font-size: 44px; }
  .cert .name {
    display: inline-block; font-size: 36px; font-weight: bold;
    color: var(--c-accent); padding: 12px 36px;
    border-top: 4px solid var(--c-primary);
    border-bottom: 4px solid var(--c-primary);
    margin: 18px 0;
  }
  .cert .seal { font-size: 80px; opacity: .15; }
  .timeline {
    display:grid; grid-template-columns: 1fr 4fr 1fr; gap: 8px;
    align-items:center; margin: 8px 0; font-size:24px;
  }
  .timeline .t { font-weight:bold; color: var(--c-primary); }
  .timeline .e { background:white; border-radius:8px; padding:8px 14px; }
  .timeline .m { color: var(--c-secondary); font-weight:bold; }
---

<!-- _class: title -->

# 卒業プロジェクト<br>発表会

### 第4回 ／ 高校生プログラミング塾・上級 ／ 最終回

<br>

きょうは **全12回 の 集大成** ！<br>あなたの **作品** を 世界 に お披露目 します ！ 🎤🎬🎓

---

## 高校生編 全12回 の 道のり

<div class="grid4">
<div class="card">

### 🐳 初級 1
環境を コード化

</div>
<div class="card">

### 📐 初級 2
型のある世界

</div>
<div class="card">

### 🔴 初級 3
TDD 実践

</div>
<div class="card">

### 🎫 初級 4
Issue 駆動

</div>
</div>

<div class="grid4">
<div class="card">

### 🤝 中級 1
チーム開発

</div>
<div class="card">

### ⚛️ 中級 2
React/Next.js

</div>
<div class="card">

### 🗄️ 中級 3
DB / Redis

</div>
<div class="card">

### 🚀 中級 4
DevOps と監視

</div>
</div>

<div class="grid4">
<div class="card">

### 🏛️ 上級 1
アーキテクチャ

</div>
<div class="card">

### 🧠 上級 2
AI / ML 入門

</div>
<div class="card">

### 🌍 上級 3
キャリア / OSS

</div>
<div class="card">

### 🎓 上級 4
**卒業 ← きょう**

</div>
</div>

---

<!-- _class: section -->

# きょう の 流れ

---

## 本日 の タイムテーブル（120分）

<div class="timeline">
<div class="t">0:00 - 0:10</div>
<div class="e">司会 ・ タイムテーブル 説明 ・ 講師 一言</div>
<div class="m">10分</div>
</div>

<div class="timeline">
<div class="t">0:10 - 1:30</div>
<div class="e">受講者 発表（1人 5〜10分 ＋ Q&A 2分）</div>
<div class="m">80分</div>
</div>

<div class="timeline">
<div class="t">1:30 - 1:50</div>
<div class="e">講師 講評 ・ 優秀賞 表彰</div>
<div class="m">20分</div>
</div>

<div class="timeline">
<div class="t">1:50 - 2:00</div>
<div class="e">修了証 授与 ・ 集合写真 ・ 紙吹雪 🎉</div>
<div class="m">10分</div>
</div>

---

<!-- _class: section -->

# 1. 発表 の 構成

---

## 発表 5〜10分 の 黄金 構成

<div class="grid3">
<div class="card">

### ① 課題（1分）
**「誰の どんな 困りごと」** を 解決するか

</div>
<div class="card">

### ② デモ（2〜3分）
**動く 画面** を 見せる。 ハマる ポイント を 強調

</div>
<div class="card">

### ③ 技術・工夫（2分）
使った 技術 と **設計判断**。 失敗 と 学び

</div>
</div>

<div class="grid2">
<div class="card">

### ④ 数字（1分）
ユーザー数 / 速度 / 精度 など 具体 数字

</div>
<div class="card">

### ⑤ 次の 一歩（1分）
今後 やりたい 機能 / 規模 / マネタイズ

</div>
</div>

---

## 「課題 → デモ → 技術」 の 順番 が 大事

<div class="ng">

❌ いきなり 「React 使いました、 Next.js で…」<br>
→ 何を 解決 する か わからない、 興味 失う

</div>

<div class="ok">

⭕ 「自分は 毎日 〇〇 で 困っていました」<br>
　 「だから この アプリ を 作りました」<br>
　 「実際 こう 動きます ←デモ」<br>
　 「技術 は React + Next.js を 選びました、 理由 は…」

</div>

---

## デモ の コツ

<div class="ok">

⭕ **本物 を 動かす**（録画 ではなく、 ライブ デモ）<br>
⭕ **ハッピーパス**：1つの シナリオ を 通す（あれもこれも 見せない）<br>
⭕ **失敗ケース も 見せる**：エラー処理 が 工夫 されている ことを アピール<br>
⭕ **オフライン 対応**：Wi-Fi 切れても 動く 動画 バックアップ

</div>

<div class="ng">

❌ 「動かなかったら ごめんなさい」 で 始まる デモ ← **準備不足**

</div>

---

## 「数字」 で 説得力 を 上げる

<div class="grid2">
<div class="card">

### 弱い
- 「結構 ユーザー います」
- 「速い です」
- 「いい感じ に 動きます」

</div>
<div class="card">

### 強い
- 「**月50人** が 使用」
- 「**p99 200ms** 以下 を 維持」
- 「**精度 92%** で 分類 成功」

</div>
</div>

<div class="tip">

💡 数字 が 小さくても OK。 「**測って、 改善 した**」 ことが 評価される。

</div>

---

<!-- _class: section -->

# 2. スライド の 作法

---

## 1スライド ＝ 1メッセージ

<div class="ng">

❌ **箇条書き 10個** を 1スライド に → 全部 読めない

</div>

<div class="ok">

⭕ **1メッセージ + 補助 図/画像**<br>
⭕ 文字 は **大きく**（後ろ の 席 でも 読める）<br>
⭕ **白 / グレー / 黒 + 1色 アクセント**<br>
⭕ アニメ は **最小限**（飛び出す 効果 は ノイズ）

</div>

---

## おすすめ スライド ツール

<div class="grid4">
<div class="card">

### Marp
**Markdown で書ける**、 Git管理 可能

</div>
<div class="card">

### Slidev
プレゼン特化、 **Vue / React 埋込可**

</div>
<div class="card">

### Keynote
Mac 標準、 アニメ綺麗

</div>
<div class="card">

### Google Slides
共有・共同編集 強い

</div>
</div>

<div class="ok">

⭕ **エンジニア コミュニティ では Marp / Slidev が 圧倒的 人気**<br>
⭕ Git で 管理、 CI で PDF 生成 も 可能

</div>

---

## アクセシビリティ も 考える

<div class="ok">

⭕ **コントラスト 比 4.5:1 以上**（WCAG AA）<br>
⭕ **文字色 ＋ 形** で 区別（色だけ ＝ 色覚多様性 で 見えない）<br>
⭕ **画像 に 説明**（alt テキスト / キャプション）<br>
⭕ **動画 に 字幕** を 用意

</div>

---

<!-- _class: section -->

# 3. Q&A の 受け方

---

## 「わかりません」 が 言える 強さ

<div class="grid2">
<div class="card">

### NG
「わからない」 を 隠して **適当に 答える**<br>
→ ベテラン には すぐ バレる

</div>
<div class="card">

### OK
「**現時点 で は わかりません、 持ち帰って 調べて 〇日 まで に 回答 します**」<br>
→ プロ の 態度

</div>
</div>

---

## 否定的 質問 / 厳しい 指摘 への 対応

<div class="card">

「**それ、 既存サービス と 同じ では？**」 と 言われたら…

</div>

<div class="ok">

⭕ **まず 質問者 に 感謝**：「ご指摘 ありがとう ございます」<br>
⭕ **違い を 1つ 言語化**：「〇〇 が 違います、 既存 は X、 私は Y」<br>
⭕ **わからない 部分 は 認める**：「市場調査 が 不足 でした、 確認 して 答えます」

</div>

<div class="ng">

❌ ムキ になる、 言い訳 が ましく なる、 質問者 を 否定 する

</div>

---

## 「次の質問！」 と 切り上げる 勇気

<div class="card">

1人 と 5分 議論 が 続いた ら **時間切れ**。 司会 に 任せる、 もしくは:

</div>

<div class="ok">

⭕ 「興味深い ご指摘 ありがとう ございます。 詳しく 話したい ので、 **後ほど 個別 に** いただけますか？」<br>
⭕ 「**次の方** の ご質問 を 伺っても いいですか？」

</div>

---

<!-- _class: section -->

# 4. 講師 が 見ている ポイント

---

## 評価 の 4軸

<div class="grid4">
<div class="card">

### 課題設定
誰の どんな 困りごと か、 明確 で 共感 できる か

</div>
<div class="card">

### 技術選定
**なぜ それ を 選んだ か** が 言語化 されている

</div>
<div class="card">

### 完成度
**動く** ことの 凄み、 細部 への こだわり

</div>
<div class="card">

### プレゼン
構成・スライド・話し方・Q&A

</div>
</div>

---

## 「凄い 技術」 より 「**動く 一貫性**」

<div class="card">

技術スタック が 派手 でも **動かない** プロダクト よりも、 シンプル でも **設計 → 実装 → デプロイ → 改善** が 一貫 した プロダクト の 方が 圧倒的に 評価 される。

</div>

<div class="ok">

⭕ HTML + JS + Turso でも **「ユーザー 月10人」** なら 立派<br>
⭕ Next.js + Kubernetes でも **「自分しか 使ってない」** なら 弱い

</div>

---

<!-- _class: section -->

# 5. 受講者 発表 タイム

---

<!-- _class: section -->

# 🎤 さあ、 発表 を 始めよう

---

## 発表者順 と 持ち時間

<div class="card">

| 順 | 発表者 | プロジェクト名 | 持ち時間 |
|---|---|---|---|
| 1 | 〇〇 さん | （プロジェクト名 を 記入） | 5〜10分 + Q&A 2分 |
| 2 | 〇〇 さん | （プロジェクト名 を 記入） | 5〜10分 + Q&A 2分 |
| 3 | 〇〇 さん | （プロジェクト名 を 記入） | 5〜10分 + Q&A 2分 |
| 4 | 〇〇 さん | （プロジェクト名 を 記入） | 5〜10分 + Q&A 2分 |
| 5 | 〇〇 さん | （プロジェクト名 を 記入） | 5〜10分 + Q&A 2分 |

</div>

<div class="tip">

💡 司会 は **タイマー** を 必ず 用意。 残り 1分 で ベル 1回、 終了 で ベル 2回。

</div>

---

## 観客 から の フィードバック ルール

<div class="grid2">
<div class="card">

### Keep
「**ここが 凄かった**」<br>
具体的 な 良い点 を 1つ

</div>
<div class="card">

### Try
「**ここを こうしたら もっと…**」<br>
建設的 な 提案 を 1つ

</div>
</div>

<div class="ng">

❌ 「ここ ダメ」 だけ で 終わる コメント

</div>

<div class="ok">

⭕ **Keep が 先、 Try は 提案 形式**

</div>

---

<!-- _class: section -->

# 6. 講評 と 表彰

---

## 講師 講評

<div class="card">

各 発表 ごと に 講師 が **2分** で:

- 🌟 **特に 良かった 点** を 1つ
- 💡 **次 試して みて 欲しい こと** を 1つ

</div>

<div class="ok">

⭕ 全員 が **必ず 褒められる** 体験 を<br>
⭕ 「あなた だけ に 向けた」 メッセージ を 1つ

</div>

---

## 受講者 投票 ＋ 講師 賞

<div class="grid3">
<div class="card">

### 🥇 最優秀賞
**全員投票** ＋ **講師選定**

</div>
<div class="card">

### 🎨 ベスト UX
**使いやすさ** に 突出

</div>
<div class="card">

### 🔧 ベスト技術
**設計判断 / 実装力** に 突出

</div>
</div>

<div class="grid3">
<div class="card">

### 🌍 ベスト社会性
**実用性 / 課題解決** が 強い

</div>
<div class="card">

### 🚀 ベスト挑戦
**難しい こと に 挑戦** した

</div>
<div class="card">

### 🎤 ベストプレゼン
**伝え方** が 上手

</div>
</div>

---

<!-- _class: finale -->

# 🎓 卒業 おめでとう ！

---

<!-- _class: section -->

# 7. 修了証 授与

---

<div class="cert">
<div class="seal">🏛️</div>

## 修 了 証

<div class="name">あなた の お名前</div>

あなたは 高校生プログラミング塾<br>
**初級 ・ 中級 ・ 上級** （全12回）を<br>
最後まで 修了 し、 **卒業プロジェクト** を<br>
完成 ・ 発表 されました。

<br>

**設計可能 な エンジニア** ・ **AI を 動かせる 技術者** ・<br>
**社会 に 出る 準備** が 整った 卒業生 として<br>
ここに 修了 を 証 します。

<br>

2026年 5月  ／  高校生プログラミング塾

</div>

---

## あなた が 身につけた こと（12回 で）

<div class="grid4">
<div class="card">

### 🐳 環境
プロ仕様 の 開発環境

</div>
<div class="card">

### 📐 型
TS / Python / 設計に 使う

</div>
<div class="card">

### 🔴 テスト
TDD / カバレッジ / モック

</div>
<div class="card">

### 🎫 進行
スクラム / Issue / Project

</div>
</div>

<div class="grid4">
<div class="card">

### 🤝 チーム
PR レビュー / ペア / モブ

</div>
<div class="card">

### ⚛️ FE
React / Next.js / RSC

</div>
<div class="card">

### 🗄️ BE
DB / Turso / Redis / N+1

</div>
<div class="card">

### 🚀 DevOps
CI/CD / Docker / 監視

</div>
</div>

<div class="grid4">
<div class="card">

### 🏛️ 設計
モノリス / DDD / ヘキサ

</div>
<div class="card">

### 🧠 AI
scikit / HF / LangChain

</div>
<div class="card">

### 🌍 キャリア
就職 / 起業 / OSS / 進学

</div>
<div class="card">

### 🎓 卒業作品
動く ／ 公開 ／ 発表

</div>
</div>

---

## 「ここ から が 本当の スタート」

<div class="card">

12回 を 修了 した あなた は **「初日 から 戦力」 に なれる レベル** に 到達 しました。

</div>

<div class="ok">

⭕ **インターン**：応募 → 即 内定 の 可能性<br>
⭕ **個人開発**：100ユーザー 突破 を 目指す<br>
⭕ **OSS**：継続コントリビューター へ<br>
⭕ **大学進学**：推薦入試 で 圧倒的 ポートフォリオ<br>
⭕ **起業**：MVP リリース → ユーザー獲得

</div>

---

## **道 を 選ぶ** の は、 これから の あなた

<div class="card">

正解 は ない。 あなたの **状況・志向・タイミング** で 最適 は 変わる。

</div>

<div class="grid2">
<div class="card">

### 1年後
- インターン に 受かる？
- 個人開発 100ユーザー？
- 大学合格？

</div>
<div class="card">

### 5年後
- 起業 して CEO？
- 大学院 で 研究者？
- 海外で エンジニア？

</div>
</div>

<div class="tip">

💡 答え は 今 出ない、 でも **「歩いている」** こと が 大事

</div>

---

<!-- _class: finale -->

# 🎊 集合写真 ＋ 紙吹雪

<br><br>

## 全員 で 1枚！<br>そして 解散！

<br>

### 1人 ずつ 修了証 を 受け取って、 写真 を 撮ろう

---

<!-- _class: title -->

# 卒業 おめでとう！ 🎓

### あなた の 旅 は ここから。<br>**12回 で 出会えて 嬉しかった**、 また どこか で 会いましょう！

<br>

### 高校生プログラミング塾 講師一同
