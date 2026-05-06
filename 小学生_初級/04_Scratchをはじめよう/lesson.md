---
marp: true
theme: default
paginate: true
size: 16:9
header: '小学生プログラミング教室 ／ 第4回'
footer: 'Scratchをはじめよう'
style: |
  :root{--c-primary:#855CF8;--c-secondary:#FFD166;--c-accent:#06D6A0;--c-warn:#EF476F;--c-dark:#24323D;--c-light:#F6F2FF;}
  section{background:var(--c-light);color:var(--c-dark);font-family:'Hiragino Maru Gothic ProN','M PLUS Rounded 1c',sans-serif;padding:60px;}
  section h1{color:var(--c-primary);font-size:56px;border-bottom:none;}
  section h2{color:var(--c-primary);font-size:40px;}
  section h3{color:var(--c-accent);font-size:28px;}
  section.title{background:linear-gradient(135deg,#855CF8 0%,#06D6A0 100%);color:white;text-align:center;}
  section.title h1{color:white;font-size:72px;}
  section.section{background:var(--c-dark);color:white;text-align:center;}
  section.section h1{color:var(--c-secondary);font-size:64px;}
  section.quiz{background:var(--c-secondary);}
  section.quiz h1{color:var(--c-dark);}
  section.handson{background:#E9FFF8;}
  section.handson h1{color:var(--c-accent);}
  .big{font-size:60px;font-weight:bold;text-align:center;}
  .emoji-big{font-size:150px;text-align:center;line-height:1;}
  .card{background:white;border-radius:16px;padding:20px 28px;margin:12px 0;box-shadow:0 4px 0 rgba(0,0,0,.08);}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
  .grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
  .grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;}
  .pill{display:inline-block;background:var(--c-primary);color:white;padding:6px 18px;border-radius:999px;font-weight:bold;font-size:22px;}
  .note{font-size:20px;color:#55626D;}
---

<!-- _class: title -->

# Scratchを<br>はじめよう

### 第4回 ／ 小学生プログラミング教室

<br>

きょうは、**ブロックをつないで ねこを動かす** よ！

---

## まえの回の復習

<div style="font-size:42px;text-align:center;line-height:1.8">

📝 プログラミング ＝ ？  
1️⃣ じゅんばん  
🔁 くりかえし  
❓ もしも

</div>

---

## こたえ

- 📝 プログラミング ＝ **コンピューターに命令すること**
- 1️⃣ **じゅんばん**：上から順にやる
- 🔁 **くりかえし**：同じことを何回もやる
- ❓ **もしも**：条件で動きを変える

<br>

きょうは、この命令を **Scratchのブロック** で作ります。

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ Scratchの画面で、どこを使うか わかる

</div>

<div class="card">

### ✅ ブロックをつないで、スプライトを動かせる

</div>

<div class="card">

### ✅ じぶんの小さなアニメーションを作って保存できる

</div>

---

<!-- _class: section -->

# 1. Scratchってなに？

---

## Scratchは、ブロックで作るプログラミング

<div class="grid2">
<div>

文字をたくさん打たなくても、ブロックをつなげて命令を作れる。

- ゲーム
- アニメーション
- 音楽
- ものがたり

</div>
<div class="emoji-big">

🐱

</div>
</div>

---

## Scratchで作れるもの

<div class="grid4">
<div class="card">

### 🎮
ゲーム

</div>
<div class="card">

### 🎬
アニメ

</div>
<div class="card">

### 📖
ものがたり

</div>
<div class="card">

### 🎵
音楽

</div>
</div>

---

## Scratchの3つの部品

<div class="grid3">
<div class="card">

### 🐱 スプライト
動くキャラクター

</div>
<div class="card">

### 🧱 ブロック
命令のカード

</div>
<div class="card">

### 🖼️ 背景
ステージの場所

</div>
</div>

この3つを組み合わせて、作品を作るよ。

---

<!-- _class: quiz -->

## クイズ ① これは何？

<div style="font-size:44px;text-align:center;line-height:1.8">

画面の中で動くキャラクター  
たとえば、ねこ・ボール・ロケット

</div>

<br>

**A. スプライト　B. サーバー　C. フォルダ**

---

## こたえ：A. スプライト

<div style="text-align:center;font-size:120px">

🐱

</div>

Scratchでは、動かすものを **スプライト** と呼びます。

---

<!-- _class: section -->

# 2. Scratchの画面を見てみよう

---

## Scratchの画面は、大きく4つ

<div class="grid2">
<div class="card">

### ① ステージ
作品が動く場所

</div>
<div class="card">

### ② スプライト一覧
使うキャラクターを選ぶ場所

</div>
<div class="card">

### ③ ブロック一覧
命令を探す場所

</div>
<div class="card">

### ④ コードエリア
ブロックをつなぐ場所

</div>
</div>

---

## ブロックの色には意味がある

<div class="grid3">
<div class="card">

### 🔵 動き
10歩動かす、回す

</div>
<div class="card">

### 🟣 見た目
こんにちはと言う、衣装を変える

</div>
<div class="card">

### 🟡 イベント
旗が押されたら始める

</div>
</div>

まずは **イベント + 動き + 見た目** だけ使います。

---

## 最初に使うブロック

<div style="font-size:24px;line-height:1.9">

🟡 **旗が押されたとき**  
🔵 **10歩動かす**  
🔵 **15度回す**  
🟣 **こんにちは！と2秒言う**  
🟣 **次のコスチュームにする**

</div>

---

<!-- _class: quiz -->

## クイズ ② どのブロックから始める？

作品をスタートするとき、最初に置くとよいブロックはどれ？

<div style="font-size:32px;line-height:2">

A. 10歩動かす  
B. 旗が押されたとき  
C. こんにちはと言う

</div>

---

## こたえ：B. 旗が押されたとき

<div style="font-size:26px;line-height:1.8">

Scratchでは、緑の旗を押して作品をスタートします。

だから、最初は **「旗が押されたとき」** を置くとわかりやすい！

</div>

---

<!-- _class: section -->

# 3. やってみよう！
## ねこを歩かせる

---

<!-- _class: handson -->

## ハンズオン①：Scratchを開く

1. ブラウザで Scratch を開く
2. 「作る」をクリック
3. ねこのスプライトがいることを確認
4. 作品名を **はじめてのScratch** にする

<br>

<div class="note">
アカウントがない場合は、保存方法を先生と確認します。
</div>

---

<!-- _class: handson -->

## ハンズオン②：ねこにあいさつさせよう

ブロックをこの順につなぎます。

<div style="font-size:24px;line-height:2">

🟡 旗が押されたとき  
🟣 「こんにちは！」と2秒言う

</div>

できたら、緑の旗をクリック！

---

<!-- _class: handson -->

## ハンズオン③：ねこを歩かせよう

あいさつの下に、動きブロックを足します。

<div style="font-size:24px;line-height:2">

🟡 旗が押されたとき  
🟣 「こんにちは！」と2秒言う  
🔵 10歩動かす  
🔵 10歩動かす  
🔵 10歩動かす

</div>

---

<!-- _class: handson -->

## ハンズオン④：くりかえしを使おう

同じブロックが何回も出てきたら、まとめられる。

<div style="font-size:24px;line-height:2">

🟡 旗が押されたとき  
🟣 「こんにちは！」と2秒言う  
🔁 10回くりかえす  
　🔵 10歩動かす  
　🟣 次のコスチュームにする

</div>

---

<!-- _class: handson -->

## ハンズオン⑤：背景を変えよう

ねこが歩く場所をえらびます。

- 公園
- 宇宙
- 学校
- 海

背景を変えると、同じプログラムでも **作品の見え方** が変わるよ。

---

<!-- _class: handson -->

## ハンズオン⑥：じぶんだけのアレンジ

どれか1つ、変えてみよう。

- セリフを変える
- 歩く回数を変える
- 背景を変える
- スプライトを追加する
- 音をならす

---

<!-- _class: section -->

# 4. 保存と発表

---

## 保存しよう

<div class="card">

### 作品名
`04_はじめてのScratch_なまえ`

</div>

<div class="card">

### 確認すること
- 緑の旗で始まる
- ねこが動く
- 作品名がわかる

</div>

---

## 発表タイム

ひとり30秒で紹介します。

<div style="font-size:26px;line-height:1.8">

1. 作品名  
2. どんな動きを作ったか  
3. くふうしたところ

</div>

---

## うまくいかないときの見方

<div class="grid2">
<div class="card">

### ねこが動かない
旗のブロックがあるかな？

</div>
<div class="card">

### 反対へ行く
向きや回転を見よう

</div>
<div class="card">

### 画面から出る
歩く回数を減らそう

</div>
<div class="card">

### 保存できない
アカウントや通信を確認しよう

</div>
</div>

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

1. Scratchは **ブロックで作るプログラミング**
2. 動くキャラクターを **スプライト** という
3. **旗が押されたとき** から始めるとわかりやすい
4. 同じ動きは **くりかえし** でまとめられる
5. 作品は名前をつけて保存する

---

## こんどは…

<div style="text-align:center;font-size:130px">

🎮

</div>

# Scratchでゲームをつくろう

つぎは、**スコアつきのキャッチゲーム** にちょうせん！

---

<!-- _class: title -->

# きょうもおつかれさま！

### また こんど！ 👋
