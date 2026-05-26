---
marp: true
theme: default
paginate: true
size: 16:9
header: '小学生プログラミング教室 ／ 中級 第1回'
footer: 'Scratchでゲームを作ろう（前編）'
style: |
  :root {
    --c-primary: #FF8C1A;
    --c-secondary: #FCBD19;
    --c-accent: #4C97FF;
    --c-warn: #FF4D6D;
    --c-dark: #2D3436;
    --c-light: #FFF8EE;
  }
  section {
    background: var(--c-light); color: var(--c-dark);
    font-family: 'Hiragino Maru Gothic ProN','M PLUS Rounded 1c',sans-serif;
    padding: 60px;
  }
  section h1 { color: var(--c-primary); font-size: 54px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 40px; }
  section h3 { color: var(--c-accent); font-size: 28px; }
  section.title {
    background: linear-gradient(135deg,#FF8C1A 0%,#FCBD19 100%);
    color: white; text-align: center;
  }
  section.title h1 { color: white; font-size: 70px; }
  section.section {
    background: var(--c-dark); color: white; text-align: center;
  }
  section.section h1 { color: var(--c-secondary); font-size: 60px; }
  section.handson { background: #E3F2FD; }
  section.handson h1 { color: var(--c-accent); }
  section.quiz { background: var(--c-secondary); }
  section.quiz h1 { color: var(--c-dark); }
  .card {
    background: white; border-radius: 14px;
    padding: 18px 24px; margin: 12px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.08);
  }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
  .grid4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
  .big { font-size: 64px; font-weight: bold; text-align: center; }
  .block {
    display: inline-block; padding: 8px 16px; margin: 4px;
    border-radius: 10px; color: white; font-weight: bold; font-size: 18px;
    box-shadow: 0 2px 0 rgba(0,0,0,.15);
  }
  .blk-event   { background: #FFD500; color: #6B5300; }
  .blk-motion  { background: #4C97FF; }
  .blk-look    { background: #9966FF; }
  .blk-control { background: #FFAB19; }
  .blk-sense   { background: #5CB1D6; }
  .blk-op      { background: #59C059; }
  .blk-var     { background: #FF8C1A; }
---

<!-- _class: title -->

# Scratchでゲームを<br>作ろう（前編）

### 第1回 ／ 小学生プログラミング教室・中級

<br>

中級のはじまり！ きょうから **「もぐらたたき」** を作っていきます 🔨🐹

---

## 中級コース、ようこそ！

<div class="grid2">
<div class="card">

### 初級でやったこと
- パソコンとファイル
- インターネット
- プログラミングって何？
- AIに触ってみる

</div>
<div class="card">

### 中級で目指すこと
- **自分のゲームを完成させる**
- 自己紹介ページを作る
- AIに紹介してもらう
- **家族に見せる！**

</div>
</div>

> 中級は **「作って、見せる」** がいちばん大切。

---

## このコース 全4回の予定

| 回 | 何をする？ |
|----|----------|
| 1（今日） | もぐらたたきの **骨組み** を作る |
| 2 | スコア・タイマー・効果音 → **完成** |
| 3 | HTMLで **自己紹介ページ** を作る |
| 4 | AIに **紹介文** を書いてもらう → **発表会** |

---

## きょうのゴール

- ✅ **スプライト** と **背景** をしくみで理解する
- ✅ **ブロックの種類**（イベント／動き／見た目／制御）を見分けられる
- ✅ もぐらたたきの **モグラが ランダムに出てくる** ところまで作れる
- ✅ **「次はこうしたい」** を自分で1つ言える

---

<!-- _class: section -->

# 1. Scratchをおさらい

---

## Scratchの 3つの主役

<div class="grid3">
<div class="card">

### 🐱 スプライト
うごく **キャラクター**

</div>
<div class="card">

### 🖼️ ステージ
ゲームの **画面**（背景）

</div>
<div class="card">

### 🧱 ブロック
**命令** のカード

</div>
</div>

<br>

**ブロックを組み合わせて、スプライトに命令する** ＝ プログラミング！

---

## ブロックには「9つの色」がある

<div style="text-align:center">

<span class="block blk-event">🟡 イベント</span>
<span class="block blk-motion">🔵 動き</span>
<span class="block blk-look">🟣 見た目</span>
<br>
<span class="block blk-control">🟠 制御</span>
<span class="block blk-sense">🔷 調べる</span>
<span class="block blk-op">🟢 演算</span>
<br>
<span class="block blk-var">🟧 変数</span>

</div>

<br>

**色 ＝ なかま分け**。同じ色のブロックは似た仕事をします。

---

## 4つだけ 覚えれば 今日はOK

<div class="grid4">
<div class="card">

<span class="block blk-event">🟡 イベント</span>
**いつ始める？**

例：旗が押されたら

</div>
<div class="card">

<span class="block blk-motion">🔵 動き</span>
**どこに行く？**

例：x=0, y=0 へ

</div>
<div class="card">

<span class="block blk-look">🟣 見た目</span>
**見せる／隠す**

例：表示する

</div>
<div class="card">

<span class="block blk-control">🟠 制御</span>
**くりかえし・もし**

例：10回くりかえす

</div>
</div>

---

<!-- _class: section -->

# 2. もぐらたたき って？

---

## どんなゲーム？

<div class="big">🐹⚒️</div>

- **モグラ** がランダムに出てくる
- **マウスでクリック** すると消える
- たくさん たたいた人が 勝ち

<br>

シンプルだけど、**プログラミングの基本** がぜんぶつまっています。

---

## ゲームを 分解 してみよう

<div class="grid2">
<div class="card">

### 🐹 モグラ
- **見えたり 隠れたり**
- **ランダムな位置**
- **クリックされたら 消える**

</div>
<div class="card">

### 🟫 穴（背景）
- 並んでいる
- 動かない
- ただ そこにいる

</div>
</div>

<br>

> 大きなゲームも、**「小さな動き」の組み合わせ** です。

---

## 必要な「命令」を 並べてみよう

モグラのプログラム は こんな感じ：

<div class="card">

1. 🟡 **旗が押されたら** スタート
2. 🟣 **隠す**（最初は見えない）
3. 🟠 **ずっとくりかえす**：
   - 🔵 ランダムな位置 へ移動
   - 🟣 **見せる**
   - 🟠 **1秒 待つ**
   - 🟣 **隠す**
   - 🟠 **0.5秒 待つ**

</div>

これだけで モグラが動き始めます！

---

<!-- _class: section -->

# 3. やってみよう
## ハンズオン

---

<!-- _class: handson -->

## ハンズオン全体図

| ステップ | やること | 所要時間 |
|---|---|---|
| ① | Scratch を開いて 新規プロジェクト | 3分 |
| ② | モグラのスプライトを追加 | 5分 |
| ③ | モグラを「隠す→見せる→隠す」 | 10分 |
| ④ | ランダムな位置 に移動させる | 10分 |
| ⑤ | クリックで「消える」 | 10分 |
| ⑥ | もう一匹 増やしてみる | 10分 |

合計 **50分** くらい。途中で詰まったら 先生をよぼう！

---

<!-- _class: handson -->

## ステップ① Scratchを開く

<div class="card">

### 1. ブラウザで `scratch.mit.edu` を開く

### 2. 右上の **「作る」** をクリック

### 3. **新しいプロジェクト** が始まる

</div>

> ねこのスプライトが出てきますね。これが Scratch のはじまりです。

---

<!-- _class: handson -->

## ステップ② モグラのスプライトを追加

<div class="card">

### 1. ねこを **右クリック → 削除**

### 2. 右下の **🐱 マーク** をクリック

### 3. 「**スプライトをえらぶ**」 → モグラっぽい子を選ぶ
（「Owl」「Hedgehog」 など、好きなキャラクターで OK）

</div>

> 名前は気にしなくてOK。**かわいい子** を選びましょう！

---

<!-- _class: handson -->

## ステップ③ 「見せる ↔ 隠す」 を試す

このブロックを **コードエリア** にドラッグ：

<div class="card">

<span class="block blk-event">🟡 旗が押されたとき</span>
<span class="block blk-look">🟣 表示する</span>
<span class="block blk-control">🟠 1秒待つ</span>
<span class="block blk-look">🟣 隠す</span>

</div>

**緑の旗** を押すと、モグラが **1秒だけ見えて、消える**！

---

<!-- _class: handson -->

## ステップ④ ずっと くりかえす

「**ずっと**」ブロックで くりかえします：

<div class="card">

<span class="block blk-event">🟡 旗が押されたとき</span>
<span class="block blk-control">🟠 ずっと</span> ← この中に入れる
　　<span class="block blk-motion">🔵 x=○ y=○ へ移動</span>
　　<span class="block blk-look">🟣 表示する</span>
　　<span class="block blk-control">🟠 1秒待つ</span>
　　<span class="block blk-look">🟣 隠す</span>
　　<span class="block blk-control">🟠 0.5秒待つ</span>

</div>

これで「**現れて 消えて 現れて…**」がずっと続く！

---

<!-- _class: handson -->

## ⚠️ コツ：座標（ざひょう）

<div class="grid2">
<div class="card">

### Scratchの画面
- ど真ん中 が **(x=0, y=0)**
- 右へ行くほど **xが増える**（〜240）
- 上へ行くほど **yが増える**（〜180）

</div>
<div class="card">

### ランダムにするには
**🔵 ランダムな位置 へ移動**<br>
というブロックがある！<br>
これを使えば モグラが バラバラに 出てくる。

</div>
</div>

---

<!-- _class: handson -->

## ステップ⑤ クリックで「消える」

モグラのスプライトに 2つめのスクリプト：

<div class="card">

<span class="block blk-event">🟡 このスプライトが クリックされたとき</span>
<span class="block blk-look">🟣 隠す</span>

</div>

これだけ！ クリックしたら隠れる ＝ **ヒット成功**！

> ステージ上でモグラを **クリックして遊んでみよう** 🎮

---

<!-- _class: handson -->

## ステップ⑥ もう一匹 ふやす

<div class="card">

### スプライトを **右クリック → 複製**

</div>

<br>

これだけで **同じスクリプトのコピー** がついてきます。

→ ランダム位置で動くので、**かぶらず** に動いてくれる ✨

時間があれば 3匹、4匹 と増やしてみましょう。

---

<!-- _class: section -->

# 4. 見せ合い・振り返り

---

## 友だちのゲームを 1分ずつ 遊んでみよう

<div class="card">

### 順番

1. 自分のパソコンで 緑の旗を 押して、動くことを確認
2. 隣の人と **席を交代** して、相手のゲームを1分プレイ
3. **「いいね！」 と思った点** を1つ 言ってあげる

</div>

> 他人のを見ると、**「あ、こうもできるんだ」** が見つかります。

---

## 自分の作品メモを 残そう

紙またはノートに **3行** だけ書いてみよう：

<div class="card">

### 1. 今日できたこと
（例：モグラが動いた）

### 2. うまくいかなかったこと
（例：たまにクリックしても消えない）

### 3. 次やってみたいこと
（例：スコアを表示したい）

</div>

これが **次回の出発点** になります。

---

<!-- _class: section -->

# 5. まとめ

---

## 今日 おぼえたこと

1. **スプライト・ステージ・ブロック** の3つで Scratchは動く
2. **ブロックの色は仕事のなかま分け**
3. **イベント → 動き → くりかえし** の組み合わせで モグラが動く
4. **複製** で 簡単にスプライトを増やせる

---

## 次回予告

<div class="big">🏆⏱️🔊</div>

# 第2回｜後編 — 完成へ！

- **スコア変数** をつけて 点数表示
- **タイマー** で時間制限
- **効果音** で「ヒット感」を出す
- **友だちと交換プレイ** で発表会

---

## 次回までの 任意の宿題

- 今日のScratchプロジェクトを **保存** しておく（**ファイル → 直ちに保存**）
- もう一匹 モグラを **増やしてみる**
- **「自分の好きな ふんいき」** に色を変えてみる（背景・スプライト）

---

<!-- _class: title -->

# おつかれさま！

### 次回、もっと面白くしていこう 🎮

おうちで触れる人は、ぜひ続きを 🐹⚒️
