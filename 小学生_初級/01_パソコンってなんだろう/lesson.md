---
marp: true
theme: default
paginate: true
size: 16:9
header: '小学生プログラミング教室 ／ 第1回'
footer: 'パソコンってなんだろう？'
style: |
  :root {
    --c-primary: #FF6B6B;
    --c-secondary: #FFE66D;
    --c-accent: #4ECDC4;
    --c-dark: #2A3D45;
    --c-light: #FFF8F0;
  }
  section {
    background: var(--c-light);
    color: var(--c-dark);
    font-family: 'Hiragino Maru Gothic ProN', 'M PLUS Rounded 1c', sans-serif;
    padding: 60px;
  }
  section h1 {
    color: var(--c-primary);
    font-size: 56px;
    border-bottom: none;
  }
  section h2 {
    color: var(--c-primary);
    font-size: 40px;
  }
  section h3 {
    color: var(--c-accent);
    font-size: 28px;
  }
  section.title {
    background: linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%);
    color: white;
    text-align: center;
  }
  section.title h1 {
    color: white;
    font-size: 72px;
  }
  section.section {
    background: var(--c-dark);
    color: white;
    text-align: center;
  }
  section.section h1 {
    color: var(--c-secondary);
    font-size: 64px;
  }
  section.quiz {
    background: var(--c-secondary);
  }
  section.quiz h1 {
    color: var(--c-dark);
  }
  section.handson {
    background: #E8F8F5;
  }
  section.handson h1 {
    color: var(--c-accent);
  }
  .big {
    font-size: 64px;
    font-weight: bold;
    text-align: center;
  }
  .emoji-big {
    font-size: 180px;
    text-align: center;
    line-height: 1;
  }
  .card {
    background: white;
    border-radius: 16px;
    padding: 20px 28px;
    margin: 12px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,0.08);
  }
  .grid2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .grid3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }
  .grid4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  .pill {
    display: inline-block;
    background: var(--c-primary);
    color: white;
    padding: 6px 18px;
    border-radius: 999px;
    font-weight: bold;
    font-size: 22px;
  }
---

<!-- _class: title -->

# パソコンってなんだろう？

### 第1回 ／ 小学生プログラミング教室

<br>

きょう、いっしょに **パソコンのひみつ** をのぞいてみよう！

---

## こんにちは！

<div class="grid2">
<div>

### きょうのこうし

ここにこうしのなまえ・じこしょうかい

- すきなゲームは…
- すきなたべものは…

</div>
<div class="emoji-big">

👋

</div>
</div>

---

## みんなは、なんてよぶ？

<div class="grid2">
<div>

なまえとすきなものをひとことずつ！

- なまえ
- すきなあそび or すきなゲーム

</div>
<div class="emoji-big">

🙋‍♀️🙋‍♂️

</div>
</div>

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ 「パソコン」がどんな道具か わかる

</div>

<div class="card">

### ✅ パソコンの中で **なに** がうごいているか わかる

</div>

<div class="card">

### ✅ じぶんで **フォルダ** と **ファイル** をつくれるようになる

</div>

---

<!-- _class: section -->

# 1. パソコンってどんなもの？

---

## パソコンって、なに？

<div class="big">

🖥️

**パ**ーソナル<br>
**コ**ンピューター

</div>

「**じぶん用のコンピューター**」っていういみ！

---

## こんなのも、ぜんぶパソコンのなかま

<div class="grid4">
<div class="card">

### 💻
**ノートパソコン**

</div>
<div class="card">

### 🖥️
**デスクトップ**

</div>
<div class="card">

### 📱
**スマートフォン**

</div>
<div class="card">

### 📲
**タブレット**

</div>
</div>

ぜんぶ **コンピューター** のなかま。
やっていることは、じつはおんなじ！

---

<!-- _class: quiz -->

## クイズ① これはパソコンのなかま？

<div class="grid3">
<div class="card">

### 🎮
**ゲーム機**

</div>
<div class="card">

### 📺
**テレビ**

</div>
<div class="card">

### 🚗
**くるま**

</div>
</div>

<br>

### こたえ：**ぜんぶ「コンピューター入り」！**

いまの世の中、コンピューターは **どこにでも** はいっているんだ。

---

<!-- _class: section -->

# 2. パソコンの中はどうなってる？

---

## パソコンは「人間のからだ」とにている

<div class="grid2">
<div>

### 人間

- あたま（考える）
- つくえ（さぎょうする）
- 本だな（おぼえておく）
- 目（見る）
- 手（うごかす）

</div>
<div>

### パソコン

- **CPU**（考える）
- **メモリ**（さぎょうする）
- **ストレージ**（おぼえておく）
- **がめん**（見せる）
- **キーボード／マウス**（うごかす）

</div>
</div>

---

## ① CPU ＝ パソコンの「あたま」

<div class="emoji-big">🧠</div>

けいさんしたり、かんがえたりするぶぶん。

**あたまがいいCPU** がはいっているパソコンほど、はやくうごく！

---

## ② メモリ ＝ つくえの「ひろさ」

<div class="emoji-big">📋</div>

いまやっていることを、いちじてきに ひろげておくばしょ。

**つくえがひろい** ほど、たくさんのことを いっぺんにできる！

---

## ③ ストレージ ＝ おおきな「本だな」

<div class="emoji-big">📚</div>

しゃしん・どうが・ファイルを **しまっておく** ばしょ。

電げんを切っても、なかみは消えない！

---

## ④ がめん ＝ 「目」のかわり

<div class="emoji-big">👀</div>

CPUが かんがえたことを、わたしたちに見せてくれる。

---

## ⑤ キーボード／マウス ＝ 「口」と「手」

<div class="emoji-big">🖱️⌨️</div>

わたしたちの命令を、パソコンに つたえる どうぐ。

---

<!-- _class: quiz -->

## クイズ② パソコンが「重くなる」のはなぜ？

<br>

つかっているうちに、パソコンが おそくなる…

それは…

<br>

### ヒント：つくえのうえに、なにがありすぎ？

---

## こたえ：つくえ（メモリ）が ぱんぱん！

たくさんのアプリをひらきっぱなしにしていると、
**つくえ（メモリ）** がぐちゃぐちゃになって、
CPUが うまく さぎょうできなくなる。

<br>

### つかわないアプリは とじよう！

---

<!-- _class: section -->

# 3. ファイルとフォルダ

---

## ファイルってなに？

<div class="big">

📄

</div>

しゃしんも、どうがも、おてがみも、ぜんぶ **ファイル**。

パソコンの中の **「いちまいの紙」** みたいなもの。

---

## ファイルにはいろんなしゅるい

<div class="grid4">
<div class="card">

### 📷
**しゃしん**
.jpg / .png

</div>
<div class="card">

### 🎬
**どうが**
.mp4 / .mov

</div>
<div class="card">

### 📝
**もじ**
.txt / .docx

</div>
<div class="card">

### 🎵
**おんがく**
.mp3 / .wav

</div>
</div>

ファイルのうしろの **「.〇〇〇」** が しゅるいをあらわすよ。

---

## フォルダってなに？

<div class="big">

📁

</div>

ファイルを **しまっておく「はこ」**。

---

## フォルダの中に、フォルダ

```
📁 がっこう
   ├── 📁 こくご
   │    ├── 📄 さくぶん.docx
   │    └── 📄 ことばあつめ.txt
   ├── 📁 さんすう
   │    └── 📄 けいさんドリル.docx
   └── 📁 ずこう
        └── 📷 さくひん.jpg
```

**「箱の中に箱」** がいくつもはいっていてもOK！

---

## なんで フォルダで わけるの？

<div class="grid2">
<div>

### ぐちゃぐちゃ

ぜんぶ デスクトップにポイ…
👉 **どこにあるかわからん！**

</div>
<div>

### きれい

きまったフォルダにいれる
👉 **すぐみつかる！**

</div>
</div>

---

<!-- _class: section -->

# 4. やってみよう！
## ハンズオン

---

<!-- _class: handson -->

## やることリスト

<div class="card">

### ステップ1️⃣ デスクトップに **じぶんのフォルダ** をつくる
名前は「○○のれんしゅう」

</div>

<div class="card">

### ステップ2️⃣ そのなかに **3つのフォルダ** をつくる
「しゃしん」「もじ」「おんがく」

</div>

<div class="card">

### ステップ3️⃣ もじファイルをつくって、**「もじ」フォルダ** に入れる

</div>

<div class="card">

### ステップ4️⃣ ファイルの **なまえをかえる**

</div>

---

<!-- _class: handson -->

## ステップ1️⃣ じぶんのフォルダをつくる

### Windows のばあい

1. デスクトップで **みぎクリック**
2. 「**新規作成**」 → 「**フォルダー**」
3. 名前をいれて **Enter**

### Mac のばあい

1. デスクトップで **みぎクリック（または control＋クリック）**
2. 「**新規フォルダ**」
3. 名前をいれて **return**

---

<!-- _class: handson -->

## ステップ2️⃣ なかに3つフォルダをつくる

つくったフォルダを **ダブルクリック** であける

そのなかで、おなじやりかたで…

<div class="grid3">
<div class="card">

### 📷
**しゃしん**

</div>
<div class="card">

### 📝
**もじ**

</div>
<div class="card">

### 🎵
**おんがく**

</div>
</div>

---

<!-- _class: handson -->

## ステップ3️⃣ もじファイルをつくる

### Windows
1. みぎクリック → 「**新規作成**」 → 「**テキストドキュメント**」
2. ひらいて、なにかかいてみよう
3. 「**ファイル**」 → 「**保存**」

### Mac
1. **メモ** や **テキストエディット** をひらく
2. なにかかいてみよう
3. 「**ファイル**」 → 「**保存**」 → さっきの「もじ」フォルダをえらぶ

---

<!-- _class: handson -->

## ステップ4️⃣ なまえをかえてみよう

ファイルを **1かいだけクリック** → ちょっと待って もういちどクリック

または みぎクリック → 「**名前の変更**」

<div class="card">

### 💡 なまえのつけかたコツ

- なにのファイルか **じぶんがあとで見てもわかる名前** に
- スペースのかわりに「**_**」や「**-**」をつかう
- 日本語OK！ でも英語のほうがトラブルがすくない

</div>

---

<!-- _class: handson -->

## できたひと、できなかったひと

<div class="grid2">
<div>

### できたひと 🎉

- もう1つフォルダをつくってみよう
- ファイルを **ドラッグ&ドロップ** で べつのフォルダにうごかしてみよう

</div>
<div>

### こまったひと 🙋

- まわりの人に きいてみよう
- 先生をよぼう
- できなくてもダイジョウブ！

</div>
</div>

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

<div class="card">

### 1. パソコンは **コンピューター** のなかま
スマホもタブレットも、なかま！

</div>

<div class="card">

### 2. パソコンの中には **5つのぶぶん** がある
CPU・メモリ・ストレージ・がめん・キーボード／マウス

</div>

<div class="card">

### 3. ファイルとフォルダで **きれいに整理** できる
「箱の中に紙」「箱の中に箱」

</div>

---

## こんどは…

<div class="big">

🌐

**インターネットってなんだろう？**

</div>

つぎの回は、**パソコン同士がどうやってつながっているか**、Webサイトはどこから来ているか、たんけんしてみよう！

---

<!-- _class: title -->

# きょうもおつかれさま！

### また こんど！ 👋
