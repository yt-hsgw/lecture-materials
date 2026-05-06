---
marp: true
theme: default
paginate: true
size: 16:9
header: '小学生プログラミング教室 ／ 第3回'
footer: 'プログラミングってなんだろう？'
style: |
  :root{--c-primary:#FFB347;--c-secondary:#FFE66D;--c-accent:#6A4C93;--c-dark:#2A3D45;--c-light:#FFF7E8;}
  section{background:var(--c-light);color:var(--c-dark);font-family:'Hiragino Maru Gothic ProN','M PLUS Rounded 1c',sans-serif;padding:60px;}
  section h1{color:var(--c-primary);font-size:56px;border-bottom:none;}
  section h2{color:var(--c-primary);font-size:40px;}
  section h3{color:var(--c-accent);font-size:28px;}
  section.title{background:linear-gradient(135deg,#FFB347 0%,#FFE66D 100%);color:white;text-align:center;}
  section.title h1{color:white;font-size:72px;}
  section.section{background:var(--c-dark);color:white;text-align:center;}
  section.section h1{color:var(--c-secondary);font-size:64px;}
  section.quiz{background:var(--c-secondary);}
  section.quiz h1{color:var(--c-dark);}
  section.handson{background:#F0EAFE;}
  section.handson h1{color:var(--c-accent);}
---

<!-- _class: title -->

# プログラミングって<br>なんだろう？

### 第3回 ／ 小学生プログラミング教室

<br>

きょうは、**コンピューターに命令する** ってどういうこと？を体験するよ！

---

## まえの回の復習

<div style="font-size:48px;text-align:center;line-height:1.6">

🌐 ＝ ？　　🏬 ＝ ？

📨 ＝ ？　　📦 ＝ ？

</div>

---

## こたえ

🌐 ＝ **インターネット**

🏬 ＝ **サーバー**（Webサイトのある場所）

📨 ＝ **リクエスト**（ブラウザのおねがい）

📦 ＝ **レスポンス**（サーバーのおこたえ）

---

## きょうのゴール

- ✅ **プログラミング** がなにをすることか わかる
- ✅ **じゅんばん／くりかえし／もしも** のしくみが わかる
- ✅ **プログラミング言語** にいろんな種類があると わかる
- ✅ かみカードで **じぶんでプログラム** をくんでみる

---

<!-- _class: section -->

# 1. プログラミングってなに？

---

## こんなことばを聞いたことある？

<div style="text-align:center;font-size:48px">

「ロボットを **プログラミング** する」

「ゲームを **プログラミング** で作る」

</div>

<br>

…でも、プログラミングって、ぐたいてきには**何をすること**？

---

## こたえ：コンピューターに **命令** すること

<div style="text-align:center;font-size:140px">

📝➡️🤖

</div>

「これをして」「つぎはこれ」と、こまかくつたえていくこと。

---

## コンピューターはとても「ばか正直」

<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;font-size:22px">

### 👤 人間

「冷蔵庫から牛乳とって」<br>
👉 ふつうは うまくやってくれる

### 🤖 コンピューター

「歩く」「冷蔵庫の前まで」<br>
「右手をのばす」「ドアをひらく」<br>
「牛乳をつかむ」「ドアをしめる」<br>
👉 **ぜんぶ言わないとうごかない！**

</div>

---

## だから「命令の書き方」がだいじ

<div style="text-align:center;font-size:36px;line-height:1.8">

📝 命令を **書く** ことが…

= **プログラミング**

</div>

その命令を集めたものを **プログラム** というよ。

---

<!-- _class: section -->

# 2. 3つのキホン

---

## どんなプログラムにも、3つのきほんがある

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:center;font-size:22px">

### ① じゅんばん
**1→2→3** の順にやる

### ② くりかえし
おなじことを **何回も**

### ③ もしも
じょうけんで **わかれ道**

</div>

---

## ① じゅんばん（順次）

<div style="font-size:24px;line-height:2">

れい：あさ、おうちを出るまで

1. おきる
2. かおをあらう
3. ごはんをたべる
4. はをみがく
5. ふくをきる
6. くつをはいて、いってきます！

</div>

順番が **ちがう** と、出かけられなくなる…

---

## ② くりかえし（反復）

<div style="font-size:24px;line-height:2;text-align:center">

「あいうえお」を **5回** うつ

📝 普通：「あいうえお」「あいうえお」「あいうえお」<br>
　　　「あいうえお」「あいうえお」

🔁 くりかえし：**5回 くりかえす：「あいうえお」**

</div>

おなじことは **まとめてしまえる** ！

---

## ③ もしも（条件分岐）

<div style="font-size:24px;line-height:1.8">

れい：おかいもの

**もし** お金が 100円より おおい：<br>
　　🍡 おかしを買う<br>
**そうでなければ**：<br>
　　🚶 がまんして帰る

</div>

「**もし〜なら**」を使うと、**じょうきょうにあわせて** うごかせる！

---

## 3つを組み合わせると…

<div style="font-size:22px;line-height:1.8">

**ゲームのできあがり！**

- じゅんばん： タイトル → スタート → ゲーム → スコア表示
- くりかえし： てきが何回も出てくる
- もしも： もし たまが あたったら、てきが消える

</div>

ぜんぶのプログラムは、**この3つの組み合わせ** でできているよ！

---

<!-- _class: quiz -->

## クイズ ① これはどれ？

<br>

**「テストでまちがえたら、もう一度やる」**

<br>

これは、3つのキホンのうち、どれを使ってる？

---

## こたえ：**もしも** ＋ **くりかえし**

<div style="font-size:22px;line-height:1.8">

**もし** まちがえた **なら** → もう一度<br>
**そうでなければ** → つぎへ

これを **正解するまで くりかえし**

</div>

組み合わせて使うことが多いよ！

---

<!-- _class: section -->

# 3. プログラミング言語ってなに？

---

## コンピューターが分かる「ことば」

<div style="text-align:center;font-size:44px">

🇯🇵 日本語　🇺🇸 英語　🇨🇳 中国語

</div>

人間どうしでも「ことば」がいる。

コンピューターには、**プログラミング言語** で命令をかくよ。

---

## いろんな言語、ぜんぶで何百もある！

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;font-size:22px;text-align:center">

### 🐍 Python
AI・かいせきが とくい

### 🟨 JavaScript
Webサイトを動かす

### 🔵 Scratch
こども向け・ブロック

### ⚙️ C / C++
ゲーム・きかい

### 🎮 Unity（C#）
ゲームを作る

### 🍎 Swift
iPhoneアプリを作る

</div>

---

## 言語によって、とくいなことがちがう

<div style="font-size:22px;line-height:1.8">

| 作りたいもの | おすすめの言語 |
|---|---|
| AI | Python |
| Webサイト | JavaScript / HTML / CSS |
| iPhoneアプリ | Swift |
| ゲーム | C# (Unity) / C++ |
| はじめての練習 | Scratch |

</div>

---

## どの言語も、やることは じつはおなじ

<div style="text-align:center;font-size:32px;line-height:1.8">

**じゅんばん／くりかえし／もしも**

</div>

書き方がちがうだけ。

ひとつ覚えれば、ほかの言語にも うつりやすい！

---

## たとえば：「Hello」を 3回ひょうじ

<div style="font-size:18px;line-height:1.6">

### 🐍 Python
```python
for i in range(3):
    print("Hello")
```

### 🟨 JavaScript
```javascript
for (let i=0; i<3; i++) {
  console.log("Hello");
}
```

### 🔵 Scratch
ブロック：「**3回くりかえす**」の中に「**Hello と言う**」

</div>

---

<!-- _class: section -->

# 4. やってみよう！
## カードでプログラミング

---

<!-- _class: handson -->

## カードで「ロボット」を動かそう

<div style="text-align:center;font-size:96px">

🤖

</div>

ロボットを ゴール（🏁）まで動かす カード命令 を組み立ててみよう！

---

<!-- _class: handson -->

## 命令カード

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;font-size:24px;text-align:center">

### ⬆️ まえへ1ます

### ⬅️ ひだりをむく

### ➡️ みぎをむく

### 🔁 ◯回くりかえす

### ❓ もし◯◯なら〜

### 💎 たからを とる

</div>

---

<!-- _class: handson -->

## 課題①：たからを取って ゴールへ！

```
スタート 🤖
   ⬇️
　 ⬆️ ⬆️ 💎 ⬆️ 🏁
```

カードの並べ方は…？

ヒント：**まえへ１ます** を つかおう

---

<!-- _class: handson -->

## こたえ例

<div style="font-size:22px;line-height:1.6">

⬆️ まえへ1ます<br>
⬆️ まえへ1ます<br>
💎 たからを とる<br>
⬆️ まえへ1ます<br>
🏁 ゴール！

</div>

または **「3回くりかえす：まえへ1ます」** でもOK！

---

<!-- _class: handson -->

## 課題②：もう少し むずかしく

```
スタート 🤖
   ⬇️
　 ⬆️ ⬆️ ⬆️ ➡️ ⬆️ ⬆️ 💎 🏁
```

まがるとき と たから のとき、どこに カードを入れる？

---

<!-- _class: handson -->

## こたえ例

<div style="font-size:20px;line-height:1.5">

🔁 3回くりかえす：⬆️ まえへ1ます<br>
➡️ みぎをむく<br>
🔁 2回くりかえす：⬆️ まえへ1ます<br>
💎 たからを とる<br>
⬆️ まえへ1ます<br>
🏁 ゴール！

</div>

くりかえし を使うと、カードが **少なく** なるね！

---

<!-- _class: handson -->

## 命令を書きかえてみよう（自由課題）

- たからを **2つ** に増やしてみよう
- まがる回数を **増やして** みよう
- ともだちと カードをまぜて、おたがいの**コースに挑戦**

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

1. プログラミング ＝ **コンピューターに命令** すること
2. 3つのきほん：**じゅんばん／くりかえし／もしも**
3. **プログラミング言語** はいろいろある（やることはおなじ）
4. カードでも **プログラム** はくめる

---

## こんどは…

<div style="text-align:center;font-size:140px">

🐱

</div>

# Scratch をはじめよう

つぎの回は、**じっさいにパソコンで** ねこを動かしてみるよ！

---

<!-- _class: title -->

# きょうもおつかれさま！

### また こんど！ 👋
