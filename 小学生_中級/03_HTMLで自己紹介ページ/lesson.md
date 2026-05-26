---
marp: true
theme: default
paginate: true
size: 16:9
header: '小学生プログラミング教室 ／ 中級 第3回'
footer: 'HTMLで自己紹介ページ'
style: |
  :root {
    --c-primary: #FF8C1A; --c-secondary: #FCBD19; --c-accent: #4C97FF;
    --c-warn: #FF4D6D; --c-dark: #2D3436; --c-light: #FFF8EE;
  }
  section { background: var(--c-light); color: var(--c-dark);
    font-family: 'Hiragino Maru Gothic ProN','M PLUS Rounded 1c',sans-serif; padding: 60px; }
  section h1 { color: var(--c-primary); font-size: 54px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 40px; }
  section h3 { color: var(--c-accent); font-size: 28px; }
  section.title { background: linear-gradient(135deg,#FF8C1A,#FCBD19); color: white; text-align: center; }
  section.title h1 { color: white; font-size: 70px; }
  section.section { background: var(--c-dark); color: white; text-align: center; }
  section.section h1 { color: var(--c-secondary); font-size: 60px; }
  section.handson { background: #E3F2FD; }
  section.handson h1 { color: var(--c-accent); }
  .card { background: white; border-radius: 14px; padding: 18px 24px; margin: 12px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
  .grid4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
  .big { font-size: 64px; font-weight: bold; text-align: center; }
  .code { background: #2D3436; color: #FFE082; border-radius: 10px; padding: 14px 18px;
    font-family: 'SF Mono','Menlo','Consolas',monospace; font-size: 20px;
    line-height: 1.6; box-shadow: 0 4px 0 rgba(0,0,0,.15); }
  .code .tag { color: #4C97FF; }
  .code .at  { color: #FCBD19; }
  .code .str { color: #FF8C1A; }
  .code .com { color: #888; }
  .preview { background: white; border: 3px dashed #FFB74D; border-radius: 10px;
    padding: 14px 18px; box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .swatch { display: inline-block; width: 22px; height: 22px; border-radius: 5px;
    vertical-align: middle; margin-right: 6px; border: 1.5px solid rgba(0,0,0,.15); }
  .pill { display: inline-block; background: var(--c-accent); color: white;
    padding: 4px 12px; border-radius: 999px; font-size: 16px; font-weight: bold; margin: 2px; }
---

<!-- _class: title -->

# HTMLで<br>自己紹介ページ

### 第3回 ／ 小学生プログラミング教室・中級

<br>

きょうは **Webページを じぶんの手で 作る** ！ 🌐✏️🎨

---

## 前回の復習

<div class="grid3">
<div class="card">

### 🏆 変数
スコアを 数えた

</div>
<div class="card">

### ⏱️ タイマー
30秒で 終了

</div>
<div class="card">

### 🔊 効果音
気持ちよさ UP

</div>
</div>

<br>

**もぐらたたき が 完成** したね。今日は **Scratchから 卒業** 、 **HTML** にチャレンジ！

---

## Scratch と HTML の ちがい

<div class="grid2">
<div class="card">

### 🐱 Scratch
- **ブロック** をくみあわせる
- **動く・遊ぶ** のがとくい

</div>
<div class="card">

### 🌐 HTML
- **文字** で書く
- **見せる・読ませる** のがとくい

</div>
</div>

<br>

どちらも **「コンピュータに 命令を 書く」** ことには かわりない。

---

## きょうのゴール

- ✅ **HTMLタグ** を 3〜4つ おぼえる
- ✅ **文字・画像・色** を 自由に置ける
- ✅ **自分の好きなもの3つ** を ページに のせる
- ✅ **家族に 見せられる 1ページ** を 完成させる

---

<!-- _class: section -->

# 1. HTML って 何？

---

## ぜんぶの Webページは HTMLでできている

<div class="big">🌐</div>

ニュース、YouTube、ゲームのページ、学校のホームページ…<br>
ぜ〜んぶ **HTML** という ことばで 書かれている。

<br>

**HTML** ＝ **H**yper**T**ext **M**arkup **L**anguage<br>
（むずかしいので 名前は おぼえなくてOK！）

---

## タグ ＝ 文字を 「かこむ」 ふしぎな記号

<div class="card">

<div class="code">
<span class="tag">&lt;h1&gt;</span>こんにちは！<span class="tag">&lt;/h1&gt;</span>
</div>

</div>

<br>

- **`<h1>`** ＝ 「ここから 大きい見出し」
- **`</h1>`** ＝ 「ここまで」（スラッシュが しっぽ）
- かこむと **コンピュータに 意味が 伝わる**

---

## 開始タグ と 閉じタグ は ペア

<div class="card">

<div class="code">
<span class="tag">&lt;p&gt;</span>これは ふつうの文 です。<span class="tag">&lt;/p&gt;</span>
</div>

</div>

<br>

ぜったいに **ペアで 書く**。閉じ忘れると コンピュータが まよう。

> 🍙 おにぎりみたいに、**「のり で かこむ」** イメージ。

---

## 最小の HTML（コピペでOK）

<div class="code">
<span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html&gt;</span>
<span class="tag">&lt;head&gt;</span>
  <span class="tag">&lt;title&gt;</span>わたしのページ<span class="tag">&lt;/title&gt;</span>
<span class="tag">&lt;/head&gt;</span>
<span class="tag">&lt;body&gt;</span>
  <span class="tag">&lt;h1&gt;</span>こんにちは！<span class="tag">&lt;/h1&gt;</span>
<span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span>
</div>

<br>

**`<body>` の中** に 見せたいものを 書いていく！

---

<!-- _class: section -->

# 2. 文字を 書こう

---

## 見出し（h1 〜 h3）

<div class="grid2">
<div>

<div class="code">
<span class="tag">&lt;h1&gt;</span>大きな見出し<span class="tag">&lt;/h1&gt;</span>
<span class="tag">&lt;h2&gt;</span>中くらい<span class="tag">&lt;/h2&gt;</span>
<span class="tag">&lt;h3&gt;</span>小さい<span class="tag">&lt;/h3&gt;</span>
</div>

</div>
<div class="preview">

# 大きな見出し
## 中くらい
### 小さい

</div>
</div>

<br>

**数が小さいほど 大きい** ！

---

## 段落（p） と 改行（br）

<div class="grid2">
<div>

<div class="code">
<span class="tag">&lt;p&gt;</span>こんにちは。<span class="tag">&lt;br&gt;</span>
わたしは ゆうたです。<span class="tag">&lt;/p&gt;</span>
</div>

</div>
<div class="preview">

こんにちは。<br>
わたしは ゆうたです。

</div>
</div>

<br>

- **`<p>`** ＝ ひとかたまりの 文章
- **`<br>`** ＝ 「ここで 改行！」（閉じタグ なし）

---

## リスト（ul ・ li）

<div class="grid2">
<div>

<div class="code">
<span class="tag">&lt;ul&gt;</span>
  <span class="tag">&lt;li&gt;</span>サッカー<span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span>マイクラ<span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span>ねこ<span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ul&gt;</span>
</div>

</div>
<div class="preview">

- サッカー
- マイクラ
- ねこ

</div>
</div>

<br>

「**好きなもの3つ**」 を 書くときに 便利！

---

<!-- _class: section -->

# 3. 画像を のせよう

---

## img タグ ＝ 画像

<div class="card">

<div class="code">
<span class="tag">&lt;img</span> <span class="at">src</span>=<span class="str">"neko.jpg"</span> <span class="at">alt</span>=<span class="str">"うちのねこ"</span><span class="tag">&gt;</span>
</div>

</div>

<br>

- **`src`** ＝ 画像の **ばしょ**（ファイル名）
- **`alt`** ＝ 画像が出ないときの **せつめい**

> 💡 個人情報注意！ **自分の顔・家・学校が写った写真** は のせない。

---

## 画像の 大きさを 変える

<div class="card">

<div class="code">
<span class="tag">&lt;img</span> <span class="at">src</span>=<span class="str">"neko.jpg"</span> <span class="at">width</span>=<span class="str">"200"</span><span class="tag">&gt;</span>
</div>

</div>

<br>

**`width="200"`** ＝ 横はば 200ピクセル<br>
数字を 大きくすると 画像も 大きくなる！

---

## ネットの 画像は つかっていい？

<div class="card warn">

### ⚠️ 勝手に コピーは ダメ

- 「**フリー素材** OK」と書いてあるサイトの画像を 使う
- 自分で描いた絵・写真は OK
- 教室では **絵文字（😺）** や **おすすめサイトの画像** を使おう

</div>

> 「これ かわいい！」と思っても、**誰かが 描いた絵** は その人のもの。

---

<!-- _class: section -->

# 4. 色を つけよう

---

## style ＝ 「見た目の 指示書」

<div class="card">

<div class="code">
<span class="tag">&lt;h1</span> <span class="at">style</span>=<span class="str">"color: red;"</span><span class="tag">&gt;</span>こんにちは！<span class="tag">&lt;/h1&gt;</span>
</div>

</div>

<br>

- **`style="...";`** の中に **見た目** を書く
- **`color`** ＝ 文字の色
- 色は **英語** か **カラーコード** で指定

---

## 色の 名前（カンタン）

<div class="grid4">
<div class="card" style="text-align:center"><span class="swatch" style="background:red"></span><br>red</div>
<div class="card" style="text-align:center"><span class="swatch" style="background:blue"></span><br>blue</div>
<div class="card" style="text-align:center"><span class="swatch" style="background:orange"></span><br>orange</div>
<div class="card" style="text-align:center"><span class="swatch" style="background:green"></span><br>green</div>
<div class="card" style="text-align:center"><span class="swatch" style="background:hotpink"></span><br>hotpink</div>
<div class="card" style="text-align:center"><span class="swatch" style="background:gold"></span><br>gold</div>
<div class="card" style="text-align:center"><span class="swatch" style="background:skyblue"></span><br>skyblue</div>
<div class="card" style="text-align:center"><span class="swatch" style="background:purple;color:white"></span><br>purple</div>
</div>

<br>

> 英語のスペルが むずかしかったら、見本リストを使ってOK！

---

## 背景の色 ＝ background

<div class="grid2">
<div>

<div class="code">
<span class="tag">&lt;body</span> <span class="at">style</span>=<span class="str">"background: #FFF8EE;"</span><span class="tag">&gt;</span>
</div>

</div>
<div class="preview" style="background:#FFF8EE">

ページ全体が この色に！

</div>
</div>

<br>

- **`background`** ＝ うしろの色
- **`#FFF8EE`** ＝ カラーコード（# のあとに 6文字）

---

## 文字を 大きく ・ 太く

<div class="card">

<div class="code">
<span class="tag">&lt;p</span> <span class="at">style</span>=<span class="str">"font-size: 28px; font-weight: bold;"</span><span class="tag">&gt;</span>
  わたしは ゆうたです！
<span class="tag">&lt;/p&gt;</span>
</div>

</div>

<br>

- **`font-size`** ＝ 文字の大きさ（px ＝ ピクセル）
- **`font-weight: bold`** ＝ ふとくする

---

<!-- _class: section -->

# 5. レイアウト ＝ 場所を 決める

---

## div ＝ 「ひとかたまり」 を 作るハコ

<div class="card">

<div class="code">
<span class="tag">&lt;div</span> <span class="at">style</span>=<span class="str">"background: gold; padding: 20px;"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;h2&gt;</span>すきなもの<span class="tag">&lt;/h2&gt;</span>
  <span class="tag">&lt;p&gt;</span>マイクラ／ねこ／カレー<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;/div&gt;</span>
</div>

</div>

<br>

**`div` でかこむ** と、まとめて 色や 場所を 変えられる。

---

## 中央寄せ ・ まわりの すきま

<div class="card">

<div class="code">
<span class="tag">&lt;div</span> <span class="at">style</span>=<span class="str">"text-align: center; padding: 30px;"</span><span class="tag">&gt;</span>
  ここの 中身は 中央 ぞろえ！
<span class="tag">&lt;/div&gt;</span>
</div>

</div>

<br>

- **`text-align: center`** ＝ 文字を 中央へ
- **`padding`** ＝ かこみと 中身の **すきま**

---

## 完成イメージ（先生のサンプル）

<div class="card preview" style="background:#FFF8EE">

<div style="text-align:center;background:linear-gradient(135deg,#FF8C1A,#FCBD19);color:white;padding:18px;border-radius:10px">
<h2 style="color:white;margin:0">こんにちは、ゆうたです！</h2>
<p style="margin:4px 0 0">しょうがく 4ねんせい・カレーがすき</p>
</div>

<h3>すきなもの 3つ</h3>

- 🎮 マインクラフト
- 🐈 ねこ（うちに2ひき）
- 🍛 カレーライス

</div>

---

<!-- _class: section -->

# 6. やってみよう
## ハンズオン

---

<!-- _class: handson -->

## やることリスト（50分）

| ステップ | やること | 時間 |
|---|---|---|
| ① | テンプレートを 開いて 名前を 変える | 5分 |
| ② | 見出しと 自己紹介の文 を書く | 10分 |
| ③ | 好きなもの 3つ を リストで書く | 10分 |
| ④ | 画像（または 絵文字）を のせる | 10分 |
| ⑤ | 色を 自分の好きな色 に変える | 10分 |
| ⑥ | 保存 → ブラウザで ひらく | 5分 |

---

<!-- _class: handson -->

## 入力で きをつけること

<div class="card">

### ✅ 半角 で書く

`<` `>` `/` `"` は ぜんぶ **半角英数**！<br>
ぜんかく だと コンピュータが わからない。

</div>

<div class="card">

### ✅ タグの 大文字／小文字

ぜんぶ **小文字** が おすすめ：<br>
`<H1>` より `<h1>` を つかおう。

</div>

---

<!-- _class: handson -->

## 詰まったら 確認すること

<div class="card">

### ❓ 文字が 出てこない
→ `<body>` の **中** に 書いた？

</div>

<div class="card">

### ❓ 色が つかない
→ `style="color: red;"` の **; （セミコロン）** を 忘れてない？

</div>

<div class="card">

### ❓ 画像が 出ない
→ 画像ファイルが HTMLと **同じフォルダ** に ある？<br>
　 ファイル名の **大文字／小文字** は あってる？

</div>

---

<!-- _class: section -->

# 7. 見せ合いタイム

---

## 発表のしかた

<div class="card">

### 1. 自分のパソコンで **ページを 開く**

### 2. となりの人と **席を 交代**

### 3. 相手のページを **30秒 読む**

### 4. **「いいね！」を 1つ** 伝える

</div>

> 「**色がきれい**」 「**この絵文字 おもしろい**」 など **具体的に** ！

---

## 自由カスタマイズ（時間があれば）

<div class="grid2">
<div class="card">

### 🎨 デザイン
- 背景を **グラデーション** にする
- 文字の **フォント** を変える
- 絵文字を **たくさん** いれる

</div>
<div class="card">

### 📝 内容
- 「**しょうらいの夢**」 を 書く
- 「**好きなYouTuber**」 を 書く
- 「**今ハマっていること**」 を 書く

</div>
</div>

---

<!-- _class: section -->

# 8. まとめ

---

## 今日 おぼえたこと

1. **HTML** ＝ Webページを 書く 言葉
2. **タグ** は **`< >`** で 文字を かこむ
3. **`<h1>` `<p>` `<ul>` `<img>`** で 文字・画像
4. **`style`** で **色・大きさ・場所** を 指定
5. **`<div>`** で まとまりを 作って レイアウト
6. **自分の1ページ** が 完成！

---

## おうちで できる こと

<div class="grid2">
<div class="card">

### 🏠 家族に 見せる
今日 作った HTMLファイルを<br>
**ダブルクリック** すれば<br>
家でも 開ける！

</div>
<div class="card">

### ✏️ 中身を 増やす
**好きなもの 5つに増やす**<br>
**家族の絵文字 を のせる**<br>
**色を季節に合わせる**

</div>
</div>

---

## 次回予告

<div class="big">🤖✨</div>

# 第4回｜AIと いっしょに 作品紹介

これまで作った **Scratchゲーム** と **HTMLページ** を、<br>
AIに **紹介文を 書いてもらう** ！<br>
そして 教室で **発表会** ！

---

## 次回までの 任意の宿題

- 今日のページを **おうちで 家族に 見せる**
- 「**自分の作品の すごいところ**」 を 1つ 考えておく（AIに 教えるため）
- 余裕があれば、ページを **もう少し 自分らしく** カスタマイズ

---

<!-- _class: title -->

# 自分のページ おめでとう！

### 「家族に 見せられる 1ページ」 が できました 🌐🎉

次回は **AIを 味方** に つけよう！
