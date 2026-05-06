---
marp: true
theme: default
paginate: true
size: 16:9
header: '小学生プログラミング教室 ／ 第2回'
footer: 'インターネットとWebサイト'
style: |
  :root {
    --c-primary: #4ECDC4;
    --c-secondary: #FFE66D;
    --c-accent: #FF6B6B;
    --c-dark: #2A3D45;
    --c-light: #F0FCFA;
  }
  section {
    background: var(--c-light);
    color: var(--c-dark);
    font-family: 'Hiragino Maru Gothic ProN', 'M PLUS Rounded 1c', sans-serif;
    padding: 60px;
  }
  section h1 { color: var(--c-primary); font-size: 56px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 40px; }
  section h3 { color: var(--c-accent); font-size: 28px; }
  section.title {
    background: linear-gradient(135deg, #4ECDC4 0%, #FFE66D 100%);
    color: white; text-align: center;
  }
  section.title h1 { color: white; font-size: 72px; }
  section.section {
    background: var(--c-dark); color: white; text-align: center;
  }
  section.section h1 { color: var(--c-secondary); font-size: 64px; }
  section.quiz { background: var(--c-secondary); }
  section.quiz h1 { color: var(--c-dark); }
  section.handson { background: #FFF3E0; }
  section.handson h1 { color: var(--c-accent); }
---

<!-- _class: title -->

# インターネットって<br>なんだろう？

### 第2回 ／ 小学生プログラミング教室

<br>

きょうは、**Webサイトがどこから来ているか** をたんけんするよ！

---

## まえの回の復習クイズ

<div style="font-size:48px;text-align:center">

🧠 ＝ ？

📋 ＝ ？

📚 ＝ ？

</div>

<br>

ヒント：「あたま・つくえ・本だな」

---

## こたえ

🧠 ＝ **CPU**（あたま・かんがえる）

📋 ＝ **メモリ**（つくえ・さぎょうする）

📚 ＝ **ストレージ**（本だな・おぼえる）

---

## きょうのゴール

- ✅ **インターネット** がどんなしくみか わかる
- ✅ **Webサイト** がどこから来ているか わかる
- ✅ **サーバー** ってなにか わかる
- ✅ じぶんでブラウザで サイトを たんけん できる

---

<!-- _class: section -->

# 1. インターネットってなに？

---

## まずは みんなに しつもん

<div style="text-align:center;font-size:60px">

📱 💻 🖥️

</div>

<br>

きみのスマホやパソコンは、せかいの中で **ひとりぼっち** ？

それとも **だれかと つながっている** ？

---

## こたえ：せかい中とつながっている！

<div style="text-align:center;font-size:60px">

🌍

</div>

それを じつげんしているのが…

# **インターネット**

---

## インターネット ＝ せかい中の道

イメージ：パソコンとパソコンを **道路** でぜんぶつないだもの

<div style="text-align:center;font-size:48px;line-height:1.5">

🏠━━━━🏠<br>
&nbsp;&nbsp;&nbsp;&nbsp;┃&nbsp;&nbsp;&nbsp;&nbsp;┃<br>
🏠━━🌍━━🏠<br>
&nbsp;&nbsp;&nbsp;&nbsp;┃&nbsp;&nbsp;&nbsp;&nbsp;┃<br>
🏠━━━━🏠

</div>

おうち・がっこう・かいしゃ・しょうてんがい… みんな **つながっている**！

---

## インターネットでできること

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;font-size:24px">

📺 どうがを見る

🎮 オンラインゲーム

💬 メッセージのやりとり

🔍 しらべものをする

🛒 おかいもの

📞 ビデオつうわ

</div>

ぜんぶ **インターネット** がはたらいてくれているよ！

---

<!-- _class: quiz -->

## クイズ ① これはインターネットがいる？

<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;font-size:24px">

📺 テレビでアニメを見る

📺 YouTubeでアニメを見る

📞 おうちでんわ

📞 LINEでつうわ

</div>

---

## こたえ

✅ **インターネットいる**：YouTube／LINEつうわ

❌ **いらない**：テレビ／おうちでんわ

<br>

YouTubeは **Webサイト** からどうがをもらってる<br>
LINEは **メッセージ** をインターネットで おくってる

テレビは **でんぱ**、おうちでんわは **でんわせん** で、インターネットとはちがうよ

---

<!-- _class: section -->

# 2. Webサイトってどこから来るの？

---

## Webサイトって、なに？

<div style="text-align:center;font-size:120px">

🌐

</div>

ブラウザでみる、いろんなページのこと

れい：YouTube、Google、こどもニュース、…

---

## ブラウザ ＝ Webサイトをみる「窓」

<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;text-align:center;font-size:20px">

🌐<br>**Chrome**

🦊<br>**Firefox**

🧭<br>**Safari**

🔵<br>**Edge**

</div>

<br>

ぜんぶ「ブラウザ」のなかま。やっていることはおんなじ！

---

## URL ＝ Webサイトの「住所」

```
https://www.google.com
```

おうちにじゅうしょがあるみたいに、Webサイトにも **住所** があるよ。

<br>

ブラウザに この住所をいれると、そのおうち（サイト）にいける！

---

## では、Webサイトはどこにあるの？

<div style="text-align:center;font-size:96px">

🤔

</div>

ブラウザの中？ パソコンの中？ クラウド？

---

## こたえ：**サーバー** にある！

<div style="text-align:center;font-size:120px">

🏬

</div>

サーバー ＝ せかいのどこかに ある **おおきなコンピューター**

---

## サーバーはなんでも持ってる「お店の倉庫」

<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;font-size:22px">

### 🏬 おみせ

ねがいごとを いう人（お客さん）に、しょうひんを わたす

れい：ハンバーガーやさん

### 💻 サーバー

ねがいごとを いう人（ブラウザ）に、Webページを わたす

れい：YouTubeのサーバー

</div>

---

## Webサイトが届くまで（劇場）

<div style="font-size:24px;line-height:2">

**1. きみ：** ブラウザに `youtube.com` といれる<br>

**2. ブラウザ：** 「youtube.com の Webページください」<br>
&nbsp;&nbsp;&nbsp;&nbsp;━━━ インターネット ━━━ 🏬 サーバー<br>

**3. サーバー：** 「はい、どうぞ！」（HTMLをわたす）<br>
&nbsp;&nbsp;&nbsp;&nbsp;🏬 サーバー ━━━ インターネット ━━━<br>

**4. ブラウザ：** うけとったページを画面にみせる ✨

</div>

---

## このやりとりに、なまえがある

<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;text-align:center">

### 📨 リクエスト

ブラウザが「ください」と<br>サーバーに **おねがいする**

### 📦 レスポンス

サーバーが「どうぞ」と<br>ブラウザに **こたえる**

</div>

<br>

これがインターネットの **基本の会話**！

---

<!-- _class: quiz -->

## クイズ ② サーバーが止まると、どうなる？

<br>

おみせの倉庫がお休みだと、しょうひんがおみせに届かない。

<br>

じゃあ、YouTubeのサーバーが止まると…？

---

## こたえ：YouTubeが見られなくなる！

<div style="text-align:center;font-size:96px">

😱

</div>

サーバーから **レスポンス** がもらえないと、Webサイトはひらけない。

ニュースで「○○がダウン」と聞くのは、これのこと。

---

<!-- _class: section -->

# 3. やってみよう！
## ハンズオン

---

<!-- _class: handson -->

## ハンズオン ① URLを よく見てみよう

ブラウザのアドレスバーに よく見る URL は、いくつかのパーツでできてる。

```
https://www.youtube.com/watch?v=abc123
```

<br>

- `https://` → やくそく（プロトコル）
- `www.youtube.com` → サーバーの住所
- `/watch?v=abc123` → どのページか

---

<!-- _class: handson -->

## ハンズオン ② サイトを たんけん

ブラウザでひらいてみよう：

- 🎓 [子ども向け検索 Yahoo!きっず](https://kids.yahoo.co.jp/) — `kids.yahoo.co.jp`
- 📰 [NHK for school](https://www.nhk.or.jp/school/) — `www.nhk.or.jp`
- 🌐 [国立科学博物館](https://www.kahaku.go.jp/) — `www.kahaku.go.jp`

URLを じっと見てみよう。**「.jp」「.com」** いろんなのがあるよ。

---

<!-- _class: handson -->

## ハンズオン ③ 「ページの中身」をみてみよう

ブラウザのページを **みぎクリック** → **「ページのソースを表示」**

たくさんの **もじ** が出てくる。

これがサーバーから来た **HTML** の正体！

---

<!-- _class: handson -->

## ハンズオン ④ 開発者ツール（ちょっとだけ）

**F12** または **みぎクリック → 検証**

「Network」タブをひらいて、ページを再読みこみ：

→ **リクエスト** と **レスポンス** が ぜんぶ見えるよ！

「あ、ほんとうに サーバーとお話してた」が体感できる ✨

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

1. **インターネット** ＝ せかい中のコンピューターをつなぐ「みち」
2. **Webサイト** は ブラウザでみる ページ
3. Webサイトは **サーバー** にある
4. ブラウザは **リクエスト**、サーバーは **レスポンス** で会話する

---

## こんどは…

<div style="text-align:center;font-size:120px">

🤖

</div>

# プログラミングって なんだろう？

つぎの回は、**コンピューターに命令する** ってどういうこと？を体験するよ！

---

<!-- _class: title -->

# きょうもおつかれさま！

### また こんど！ 👋
