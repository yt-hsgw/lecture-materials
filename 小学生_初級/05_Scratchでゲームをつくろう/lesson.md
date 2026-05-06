---
marp: true
theme: default
paginate: true
size: 16:9
header: '小学生プログラミング教室 ／ 第5回'
footer: 'Scratchでゲームをつくろう'
style: |
  :root{--c-primary:#118AB2;--c-secondary:#FFD166;--c-accent:#EF476F;--c-green:#06D6A0;--c-dark:#24323D;--c-light:#F0FBFF;}
  section{background:var(--c-light);color:var(--c-dark);font-family:'Hiragino Maru Gothic ProN','M PLUS Rounded 1c',sans-serif;padding:60px;}
  section h1{color:var(--c-primary);font-size:56px;border-bottom:none;}
  section h2{color:var(--c-primary);font-size:40px;}
  section h3{color:var(--c-accent);font-size:28px;}
  section.title{background:linear-gradient(135deg,#118AB2 0%,#06D6A0 100%);color:white;text-align:center;}
  section.title h1{color:white;font-size:72px;}
  section.section{background:var(--c-dark);color:white;text-align:center;}
  section.section h1{color:var(--c-secondary);font-size:64px;}
  section.quiz{background:var(--c-secondary);}
  section.quiz h1{color:var(--c-dark);}
  section.handson{background:#E9FFF8;}
  section.handson h1{color:var(--c-green);}
  .big{font-size:60px;font-weight:bold;text-align:center;}
  .emoji-big{font-size:150px;text-align:center;line-height:1;}
  .card{background:white;border-radius:16px;padding:20px 28px;margin:12px 0;box-shadow:0 4px 0 rgba(0,0,0,.08);}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
  .grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
  .grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
  .pill{display:inline-block;background:var(--c-primary);color:white;padding:6px 18px;border-radius:999px;font-weight:bold;font-size:22px;}
  .code{font-size:22px;line-height:1.8;background:white;border-radius:16px;padding:18px 24px;box-shadow:0 4px 0 rgba(0,0,0,.08);}
  .note{font-size:20px;color:#55626D;}
---

<!-- _class: title -->

# Scratchで<br>ゲームをつくろう

### 第5回 ／ 小学生プログラミング教室

<br>

きょうは、**スコアがふえるキャッチゲーム** を作るよ！

---

## まえの回の復習

<div style="font-size:40px;text-align:center;line-height:1.8">

🐱 スプライト ＝ ？  
🟡 旗が押されたとき ＝ ？  
🔁 くりかえし ＝ ？

</div>

---

## こたえ

- 🐱 スプライト ＝ **動くキャラクター**
- 🟡 旗が押されたとき ＝ **ゲームを始めるイベント**
- 🔁 くりかえし ＝ **同じ命令を何回も行う**

<br>

今日はここに **スコア** と **もし触れたなら** を足します。

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ ゲームに必要な部品がわかる

</div>

<div class="card">

### ✅ 条件分岐「もし〜なら」をScratchで使える

</div>

<div class="card">

### ✅ 変数「スコア」を使ったキャッチゲームを作れる

</div>

---

<!-- _class: section -->

# 1. ゲームってどうできている？

---

## キャッチゲームの部品

<div class="grid4">
<div class="card">

### 🧺
プレイヤー

</div>
<div class="card">

### 🍎
落ちてくるもの

</div>
<div class="card">

### ⭐
スコア

</div>
<div class="card">

### ⏱️
時間

</div>
</div>

---

## ゲームは「ルール」でできている

<div class="code">

1. 旗を押したらゲームスタート  
2. りんごが上から落ちる  
3. かごに触れたらスコアを1ふやす  
4. りんごを上にもどす  
5. これを時間までくりかえす

</div>

---

## 今日のデータ

<div class="grid3">
<div class="card">

### スコア
何個キャッチしたか

</div>
<div class="card">

### 残り時間
あと何秒か

</div>
<div class="card">

### りんごの場所
どこから落ちるか

</div>
</div>

データが変わると、ゲームの状態も変わるよ。

---

<!-- _class: quiz -->

## クイズ ① スコアは何を覚える？

<div style="font-size:34px;line-height:2">

A. 何個キャッチしたか  
B. パソコンの名前  
C. Webサイトの住所

</div>

---

## こたえ：A. 何個キャッチしたか

<div style="font-size:28px;line-height:1.8">

スコアは、ゲームの中で変わる数です。  
Scratchでは、こういう数を **変数** に入れて使います。

</div>

---

<!-- _class: section -->

# 2. 変数と条件分岐

---

## 変数ってなに？

<div class="grid2">
<div>

変数は、ゲームが覚えておく **数字や言葉の箱**。

今日使う箱はこれ。

<div class="pill">スコア</div>

</div>
<div class="emoji-big">

📦

</div>
</div>

---

## スコアを使う流れ

<div class="code">

🟡 旗が押されたとき  
⭐ スコアを 0 にする  
🔁 ずっと  
　❓ もし りんごが かごに触れたなら  
　　⭐ スコアを 1 ずつ変える

</div>

---

## 条件分岐「もし〜なら」

<div style="font-size:26px;line-height:1.8">

**もし** りんごが かごに触れた **なら**  
　スコアを1ふやす  
　りんごを上にもどす

<br>

**そうでなければ**  
　そのまま落ちる

</div>

---

## イベントは「きっかけ」

<div class="grid3">
<div class="card">

### 🟢 旗
ゲーム開始

</div>
<div class="card">

### ⌨️ キー
かごを動かす

</div>
<div class="card">

### 👆 触れた
キャッチ判定

</div>
</div>

ゲームは、いろいろな **きっかけ** で動きます。

---

<!-- _class: quiz -->

## クイズ ② これは条件分岐？

<div style="font-size:30px;line-height:1.9">

「もし りんごが かごに触れたなら、スコアを1ふやす」

</div>

<br>

これは **じゅんばん／くりかえし／もしも** のどれ？

---

## こたえ：もしも

<div style="font-size:26px;line-height:1.8">

「触れたかどうか」で動きが変わるので、**もしも** です。  
ゲームでは、この「判定」がとても大事！

</div>

---

<!-- _class: section -->

# 3. やってみよう！
## キャッチゲーム制作

---

<!-- _class: handson -->

## ハンズオン①：新しい作品を作る

1. Scratchで「作る」を開く
2. 作品名を `05_キャッチゲーム_なまえ` にする
3. ねこは消すか、好きなキャラクターに変える
4. プレイヤー用のスプライトを選ぶ
5. 落ちてくるもの用のスプライトを選ぶ

---

<!-- _class: handson -->

## ハンズオン②：プレイヤーを動かす

左右キーでプレイヤーを動かします。

<div class="code">

🟡 旗が押されたとき  
🔁 ずっと  
　❓ もし 右向き矢印キーが押されたなら  
　　🔵 x座標を 10 ずつ変える  
　❓ もし 左向き矢印キーが押されたなら  
　　🔵 x座標を -10 ずつ変える

</div>

---

<!-- _class: handson -->

## ハンズオン③：りんごを落とす

<div class="code">

🟡 旗が押されたとき  
🔁 ずっと  
　🔵 y座標を -5 ずつ変える  
　❓ もし 端に触れたなら  
　　🔵 y座標を 170 にする  
　　🔵 x座標を ランダム にする

</div>

---

<!-- _class: handson -->

## ハンズオン④：スコアを作る

Scratchの「変数」から、変数を作ります。

<div class="big">

スコア

</div>

<div class="note">
名前はわかりやすく、ひらがなやカタカナでもOKです。
</div>

---

<!-- _class: handson -->

## ハンズオン⑤：キャッチしたら点をふやす

<div class="code">

🟡 旗が押されたとき  
⭐ スコアを 0 にする  
🔁 ずっと  
　❓ もし りんごが プレイヤーに触れたなら  
　　⭐ スコアを 1 ずつ変える  
　　🔵 りんごを上にもどす  
　　🔊 音をならす

</div>

---

<!-- _class: handson -->

## ハンズオン⑥：ゲームらしくする

どれか1つ、アレンジしてみよう。

- りんごのスピードを変える
- 背景を変える
- キャッチした音を変える
- りんご以外のものを落とす
- キャッチしたらセリフを出す

---

<!-- _class: section -->

# 4. テストと直し方

---

## ゲームは必ずテストする

<div class="grid2">
<div class="card">

### 動く？
左右キーで動かせるか

</div>
<div class="card">

### 点が入る？
触れたときだけ増えるか

</div>
<div class="card">

### 止まらない？
りんごが何回も落ちるか

</div>
<div class="card">

### 楽しい？
速すぎないか、簡単すぎないか

</div>
</div>

---

## よくある不具合

<div class="grid2">
<div class="card">

### スコアが増えない
「触れたなら」の相手を確認

</div>
<div class="card">

### 点が増え続ける
キャッチ後にりんごを上へ戻す

</div>
<div class="card">

### 動きが速すぎる
移動する数字を小さくする

</div>
<div class="card">

### 画面から出る
端で止める、または戻す

</div>
</div>

---

## 安全に作るための約束

- 作品名に本名や学校名を入れない
- 共有するときは先生や家の人に確認する
- 友だちの作品をまねるときは、どこを参考にしたか言う
- うまくいかないときは、1つずつブロックを確認する

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

1. ゲームには **プレイヤー／アイテム／スコア／時間** がある
2. スコアは **変数** で覚える
3. キャッチ判定には **もし〜なら** を使う
4. キー操作や旗は **イベント**
5. ゲームは作ったあとに **テスト** する

---

## こんどは…

<div style="text-align:center;font-size:130px">

🤖

</div>

# AIってなんだろう？

つぎは、AIに文章や絵を作ってもらって、できること・できないことを見てみよう！

---

<!-- _class: title -->

# きょうもおつかれさま！

### また こんど！ 👋
