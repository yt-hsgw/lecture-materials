---
marp: true
theme: default
paginate: true
size: 16:9
header: '高齢者向けパソコン教室 ／ 第2回'
footer: 'ファイルとフォルダ'
style: |
  :root {
    --c-primary: #2E7D32;
    --c-secondary: #FFA000;
    --c-accent: #5D4037;
    --c-warn: #C62828;
    --c-dark: #212121;
    --c-light: #FFF8E1;
  }
  section {
    background: var(--c-light);
    color: var(--c-dark);
    font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif;
    font-size: 28px;
    line-height: 1.7;
    padding: 60px;
  }
  section h1 { color: var(--c-primary); font-size: 56px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 44px; margin-bottom: 24px; }
  section h3 { color: var(--c-accent); font-size: 32px; }
  section.title {
    background: linear-gradient(135deg, #2E7D32 0%, #FFA000 100%);
    color: white; text-align: center;
  }
  section.title h1 { color: white; font-size: 72px; }
  section.section {
    background: var(--c-accent); color: white; text-align: center;
  }
  section.section h1 { color: var(--c-secondary); font-size: 64px; }
  section.handson { background: #E8F5E9; }
  section.handson h1 { color: var(--c-primary); }
  section.warn { background: #FFEBEE; }
  section.warn h1 { color: var(--c-warn); }
  .card {
    background: white; border-radius: 14px;
    padding: 22px 28px; margin: 14px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.1);
    font-size: 30px;
  }
  .big { font-size: 80px; text-align: center; line-height: 1; }
  .step { font-size: 32px; }
  .step b { color: var(--c-primary); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
  .pill {
    display: inline-block; background: var(--c-primary); color: white;
    padding: 8px 24px; border-radius: 999px; font-weight: bold; font-size: 26px;
  }
  .warn-card { border-left: 12px solid var(--c-warn); padding-left: 22px; }
  .ok-card { border-left: 12px solid var(--c-primary); padding-left: 22px; }
  .tip-card { border-left: 12px solid var(--c-secondary); padding-left: 22px; background: #FFFDF7; }
---

<!-- _class: title -->

# ファイルと<br>フォルダ

### 第2回 ／ 高齢者向け パソコン教室 ・ 初級

<br>

きょうは **「整理」と「もとに戻す」** の練習をしましょう。<br>**捨ててしまっても、ちゃんと戻せます。**

---

## 前回の復習

<div class="grid2">
<div class="card">

### 電源・マウス
**入れる・切る**<br>
クリック・ダブル・右クリック

</div>
<div class="card">

### キーボード・窓
**文字を入力**<br>
ウィンドウ操作・困ったら戻す

</div>
</div>

<br>

ご自宅で復習されたかた、すばらしいです。<br>
できなくても大丈夫、また一緒に練習します。

---

## きょうのゴール

<div class="card">

### ✅ **ファイル** と **フォルダ** のちがいがわかる

</div>

<div class="card">

### ✅ じぶんで **フォルダ** をつくれる

</div>

<div class="card">

### ✅ ファイルを **整理** ・ **名前変更** ・ **コピー** ができる

</div>

<div class="card">

### ✅ **ゴミ箱** から **もとに戻せる**

</div>

---

<!-- _class: section -->

# 1. ファイルって なに？

---

## ファイル ＝ パソコンの中の「1まいの紙」

<div class="big">📄</div>

写真も、文章も、音楽も、ぜんぶ **ファイル** という形でパソコンに入っています。

<br>

紙 → 引き出し に しまうのと、同じ感覚です。

---

## ファイルにはいろんな しゅるい

<div class="grid3">
<div class="card">

### 📷
**写真**
.jpg / .png

</div>
<div class="card">

### 📝
**文書**
.docx / .txt

</div>
<div class="card">

### 🎵
**音楽**
.mp3 / .wav

</div>
</div>

<br>

名前のうしろの **「.〇〇〇」** を **拡張子（かくちょうし）** といいます。<br>
**「これは写真ですよ」「これは文書ですよ」** をパソコンに教える しるし。

---

## 拡張子の 例

<div class="card step">

📄 **にっき.txt** → 文字だけのメモ

</div>

<div class="card step">

📄 **しゃしん.jpg** → 写真

</div>

<div class="card step">

📄 **おんがく.mp3** → 音楽

</div>

> **拡張子は できるだけ 触らないでください**。<br>変えてしまうと、ファイルが開けなくなることがあります。

---

<!-- _class: section -->

# 2. フォルダって なに？

---

## フォルダ ＝ ファイルを しまう「はこ」

<div class="big">📁</div>

紙（ファイル）を、まとまりごとに **はこ（フォルダ）** に入れる。

<br>

おうちの **書類ケース** や **アルバム** と、同じ考えです。

---

## なぜ フォルダで わけるの？

<div class="grid2">
<div class="card warn-card">

### ❌ ぐちゃぐちゃ

ぜんぶ デスクトップ にポイ…

→ **どこにあるか わからない**<br>
→ **おなじ写真が いくつも増える**

</div>
<div class="card ok-card">

### ⭕ きれいに

しゅるい別 ／ 時期別 にわける

→ **すぐ 見つけられる**<br>
→ **ぜんたいが すっきり**

</div>
</div>

---

## おすすめの 分け方

<div class="card step">

📁 **写真** — 撮ったしゃしん全部

</div>

<div class="card step">

📁 **書類** — 役所の書類、保険、お薬手帳など

</div>

<div class="card step">

📁 **思い出** — 旅行・行事・年賀状

</div>

> **「自分にわかりやすい名前」** で十分です。<br>「2025年のしゃしん」「お孫さんの動画」など。

---

## フォルダの 中に フォルダ

```
📁 写真
   ├── 📁 2024年
   │    ├── 📷 春の桜.jpg
   │    └── 📷 夏の海.jpg
   └── 📁 2025年
        ├── 📷 お正月.jpg
        └── 📷 旅行.jpg
```

「はこの中に、もうひとつ はこ」 を入れてもOK。<br>
**入れすぎないこと** がコツ — 2〜3段までが見やすいです。

---

<!-- _class: section -->

# 3. やってみましょう
## ハンズオン

---

<!-- _class: handson -->

## やることリスト

<div class="card step">

### ステップ 1 — **じぶんのフォルダ** をつくる

</div>

<div class="card step">

### ステップ 2 — その中に **2つのフォルダ** をつくる

</div>

<div class="card step">

### ステップ 3 — ファイルを **正しいフォルダに移す**

</div>

<div class="card step">

### ステップ 4 — ファイルの **名前を変える**

</div>

<div class="card step">

### ステップ 5 — **ゴミ箱に入れて、戻す**

</div>

---

<!-- _class: handson -->

## ステップ 1 — じぶんのフォルダをつくる

### Windows の場合

1. **デスクトップ** の何もないところで **右クリック**
2. メニューから 「**新規作成**」 → 「**フォルダー**」
3. 名前を入力（例：「**自分の練習**」）→ **Enter**

### Mac の場合

1. **デスクトップ** で **右クリック** （または control＋クリック）
2. 「**新規フォルダ**」
3. 名前を入力 → **return**

---

<!-- _class: handson -->

## ステップ 2 — 中に 2つのフォルダ

つくったフォルダを **ダブルクリック** して 中を開く。

そして、おなじやり方で **中に2つ** フォルダをつくります。

<div class="grid2">
<div class="card">

### 📁 **写真**

</div>
<div class="card">

### 📁 **書類**

</div>
</div>

> ダブルクリックは「とんとん」と すばやく 2回。<br>うまくいかなければ、何度でも 練習しましょう。

---

<!-- _class: handson -->

## ステップ 3 — ファイルを 移す

### ドラッグ ＆ ドロップ で 動かす

<div class="card step">

1. ファイル（紙のアイコン）を **クリックしたまま** 持つ

2. そのまま、入れたい **フォルダの上** にもっていく

3. **手をはなす** → ファイルが フォルダに入る

</div>

> 「**つかんで、はなす**」 の感覚です。<br>力はいりません、そっと。

---

<!-- _class: handson -->

## ステップ 3 のコツ

<div class="card tip-card">

### 💡 ドラッグの 練習

最初は「ドラッグ」が一番むずかしいです。<br>
**力を抜いて、ゆっくり** が正解。

</div>

<div class="card tip-card">

### 💡 「フォルダの上」 をめざす

フォルダの絵の **真上** に持っていくと、フォルダが **青く反応** します。<br>
**青くなったら、はなす** で 入ります。

</div>

---

<!-- _class: handson -->

## ステップ 4 — 名前を 変える

<div class="card step">

### やり方 ①：**ゆっくり 2回クリック**

ファイルを **1回クリック** → 少し待つ → **もう一回クリック**<br>
（ダブルクリックよりゆっくり）

</div>

<div class="card step">

### やり方 ②：**右クリックメニュー**

ファイルで **右クリック** → 「**名前の変更**」をえらぶ

</div>

→ 名前が **入力できる状態** になります。<br>
新しい名前を入力 → **Enter** で 確定。

---

<!-- _class: handson -->

## 名前のつけかた コツ

<div class="card">

### ⭕ あとで わかる名前

- 「2025年お正月_家族写真.jpg」
- 「保険証_コピー.pdf」

</div>

<div class="card">

### ❌ あとで わからない名前

- 「IMG_0382.JPG」
- 「Document1.docx」

</div>

> **「未来のじぶん」 が読んで わかる名前** にしましょう。

---

<!-- _class: section -->

# 4. ゴミ箱と もとに戻す

---

## ゴミ箱は「いったん置き場」

<div class="big">🗑️</div>

ファイルを **削除（さくじょ）** すると、いきなり消えるのではなく、**まず「ゴミ箱」に入ります**。

<br>

つまり…**まだ 戻せます**。

---

## 「消える」までの 2ステップ

<div class="card step">

### ① **ゴミ箱に入れる**（さくじょ）
紙を「いったん 引き出しに入れた」 状態。**戻せる**。

</div>

<div class="card step">

### ② **ゴミ箱を 空にする**
これで **完全に なくなる**。これは 戻せない。

</div>

> 講師から「ゴミ箱を空にして」と言われるまでは、**安心して触ってOK** です。

---

## ゴミ箱に 入れる方法

<div class="card step">

### やり方 ①：ファイルを **右クリック** → 「**削除**」

</div>

<div class="card step">

### やり方 ②：ファイルを **クリック** で選ぶ → **Delete キー**

</div>

<div class="card step">

### やり方 ③：ファイルを **ゴミ箱の絵** までドラッグ

</div>

どのやり方も、ぜんぶ おなじ動きです。

---

## もとに戻す方法

<div class="card step">

### ① **デスクトップの ゴミ箱** をダブルクリックで開く

</div>

<div class="card step">

### ② 戻したいファイルで **右クリック**

</div>

<div class="card step">

### ③ 「**元に戻す**」 を選ぶ

</div>

→ もとの場所に **ピョン と戻ります**。<br>これが今日いちばん覚えてほしい操作です。

---

<!-- _class: handson -->

## やってみましょう（5分）

<div class="card step">

### 1. れんしゅう用の メモを 1つ つくる

</div>

<div class="card step">

### 2. その メモを **ゴミ箱に入れる**

</div>

<div class="card step">

### 3. ゴミ箱を ひらいて、**もとに戻す**

</div>

<br>

**「消した」→「戻した」** が体で覚えられたら、もう怖くありません。

---

<!-- _class: warn -->

# 5. 気をつけること

---

## ⚠️ 触らないほうがいい フォルダ

<div class="card warn-card">

### システムのフォルダ

- 「Windows」「Program Files」「System32」（Windows）
- 「システム」「ライブラリ」（Mac）

これらは **パソコン本体が使っている** フォルダです。<br>
**中のファイルを動かしたり 名前を変えたりしないで**ください。

</div>

---

## ⚠️ ダウンロード フォルダの 整理

<div class="card tip-card">

### 📥 ダウンロード フォルダ

インターネットで保存したファイルは ここに集まります。<br>
**気づかないうちに いっぱい** になりがち。

**月に1回**、いらないものを **ゴミ箱へ** いれて整理しましょう。

</div>

---

## ⚠️ USBメモリ・SDカード

<div class="card warn-card">

### 安全に取り外す

USBメモリやSDカードを **いきなり抜かない** でください。<br>

**右下の取り外しマーク**（Windows）／<br>**左クリックで「取り出し」**（Mac） を必ず確認。

</div>

> いきなり抜くと、中の写真が **読めなくなる** ことがあります。

---

<!-- _class: section -->

# 6. まとめ

---

## きょう できるようになったこと

1. **ファイル** ＝ 1まいの紙、**フォルダ** ＝ はこ
2. **ダブルクリック** で フォルダを ひらく
3. **ドラッグ＆ドロップ** で ファイルを 動かす
4. ファイルの **名前を変える**
5. **ゴミ箱に入れて、戻せる**

> もう、デスクトップが ぐちゃぐちゃでも 怖くありません。

---

## いちばん大事なこと

<div class="card" style="text-align:center;font-size:42px;color:var(--c-primary);background:white">

**「消しても、戻せる」**

</div>

<br>

これだけ覚えておけば、**安心して** 触れます。<br>
わからなくなったら、**講師か ご家族 に きく** のもセットで。

---

## 次回 ご案内

<div class="big">🌐</div>

# 第3回｜インターネットを 安全に使う

ブラウザ・検索・**詐欺サイトの 見分け方** をやります。<br>
**「あやしいと思ったら、やめる」** を体で覚える回です。

---

## 次回までに（おすすめ・任意）

- 今日のフォルダ作りを **おうちでも1回** だけ復習
- ご家族の **写真や思い出** を 一つの フォルダ にまとめてみる
- できなくても 大丈夫、また 一緒に やりましょう

---

<!-- _class: title -->

# 今日も ありがとうございました

### また 次回、お待ちしています。

ゆっくりで、大丈夫です。
