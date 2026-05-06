---
marp: true
theme: default
paginate: true
size: 16:9
header: '小学生プログラミング教室 ／ 第4回'
footer: 'AIってなんだろう？'
style: |
  :root{--c-primary:#3A86FF;--c-secondary:#FFD166;--c-accent:#8338EC;--c-green:#06D6A0;--c-warn:#EF476F;--c-dark:#24323D;--c-light:#F3F8FF;}
  section{background:var(--c-light);color:var(--c-dark);font-family:'Hiragino Maru Gothic ProN','M PLUS Rounded 1c',sans-serif;padding:60px;}
  section h1{color:var(--c-primary);font-size:56px;border-bottom:none;}
  section h2{color:var(--c-primary);font-size:40px;}
  section h3{color:var(--c-accent);font-size:28px;}
  section.title{background:linear-gradient(135deg,#3A86FF 0%,#8338EC 100%);color:white;text-align:center;}
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
  .warn{border-left:10px solid var(--c-warn);}
---

<!-- _class: title -->

# AIって<br>なんだろう？

### 第4回 ／ 小学生プログラミング教室

<br>

きょうは、**AIにたのむ・たしかめる** を体験するよ！

---

## まえの回の復習

<div style="font-size:40px;text-align:center;line-height:1.8">

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

AIにも、人間が **お願いの言葉** を出します。

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ AIがどんな道具か、ふんわりわかる

</div>

<div class="card">

### ✅ AIへのお願いのしかたを練習する

</div>

<div class="card">

### ✅ AIの答えを、そのまま信じすぎない理由がわかる

</div>

---

<!-- _class: section -->

# 1. AIってなに？

---

## AIは「考えるまね」ができるコンピューター

<div class="grid2">
<div>

AIは、人間のように文章を書いたり、絵のアイデアを出したり、質問に答えたりできるコンピューターのしくみです。

でも、ほんとうに人間と同じように **わかっている** わけではありません。

</div>
<div class="emoji-big">

🤖

</div>
</div>

---

## AIでできること

<div class="grid4">
<div class="card">

### ✍️
文章を書く

</div>
<div class="card">

### 🎨
絵のアイデア

</div>
<div class="card">

### 💡
考えを出す

</div>
<div class="card">

### 🧩
プログラムのヒント

</div>
</div>

---

## AIが苦手なこと

<div class="grid2">
<div class="card">

### ❌ ぜったい正しい答え
まちがえることがある

</div>
<div class="card">

### ❌ 気持ちを本当にわかる
それっぽく返すだけのことがある

</div>
<div class="card">

### ❌ 新しい事実の確認
知らないことを作ってしまうことがある

</div>
<div class="card">

### ❌ ひみつを守る判断
入力してよい情報は人間が決める

</div>
</div>

---

<!-- _class: quiz -->

## クイズ ① AIはいつも正しい？

<div style="font-size:34px;line-height:2">

A. いつも正しい  
B. まちがえることもある  
C. 何も答えられない

</div>

---

## こたえ：B. まちがえることもある

<div style="font-size:28px;line-height:1.8">

AIはとても便利。  
でも、**人間がたしかめる** ことが大切です。

</div>

---

<!-- _class: section -->

# 2. AIへのお願い

---

## AIへのお願いを「プロンプト」という

<div class="big">

プロンプト

</div>

AIに出すお願い・質問・命令のこと。

プログラミングの命令と同じで、**あいまい** だと答えもあいまいになります。

---

## よいお願いの3つのコツ

<div class="grid3">
<div class="card">

### ① 目的
何を作りたい？

</div>
<div class="card">

### ② 条件
長さ・対象・雰囲気

</div>
<div class="card">

### ③ 確認
まちがいがないか見る

</div>
</div>

---

## あいまいなお願い

<div class="code">

おもしろい話を書いて

</div>

これだけだと、だれ向け？ どれくらい？ どんな話？ がわからない。

---

## よいお願い

<div class="code">

小学生向けに、宇宙をテーマにした  
1分で読める楽しいお話を書いて。  
むずかしい言葉は少なくして。

</div>

目的と条件があると、AIも答えやすい。

---

<!-- _class: quiz -->

## クイズ ② どちらがよいお願い？

<div style="font-size:28px;line-height:1.8">

A. なんか作って  
B. 小学生向けに、海の生き物をテーマにしたクイズを3問作って

</div>

---

## こたえ：B

<div style="font-size:28px;line-height:1.8">

Bには、**だれ向け・テーマ・数** が入っています。  
AIにお願いするときは、条件を入れるとよい答えに近づきます。

</div>

---

<!-- _class: section -->

# 3. やってみよう！
## AIにお願いする練習

---

<!-- _class: handson -->

## ハンズオン①：文章を作るお願い

<div class="code">

小学生向けに、  
「インターネットの安全」をテーマにした  
30秒で読める標語を3つ作って。

</div>

できた答えを見て、わかりやすいか確認しよう。

---

<!-- _class: handson -->

## ハンズオン②：絵のアイデアを作るお願い

<div class="code">

「未来のパソコン教室」の絵を作るための  
アイデアを5つ出して。  
明るく、子ども向けの雰囲気にして。

</div>

---

<!-- _class: handson -->

## ハンズオン③：答えをたしかめる

AIの答えを見たら、3つチェック。

<div class="grid3">
<div class="card">

### 本当？
事実を確認

</div>
<div class="card">

### 安全？
ひみつを書いていない？

</div>
<div class="card">

### 自分らしい？
そのまま出してよい？

</div>
</div>

---

<!-- _class: section -->

# 4. AIを安全に使う

---

## 入れてはいけない情報

<div class="grid2">
<div class="card warn">

### 名前・住所
本名、家、学校、電話番号

</div>
<div class="card warn">

### パスワード
アカウントの秘密

</div>
<div class="card warn">

### 顔写真
本人がわかる写真

</div>
<div class="card warn">

### 友だちの情報
自分以外の個人情報

</div>
</div>

---

## AIを使うときの約束

1. ひみつの情報を入れない
2. 答えをそのまま信じない
3. 先生や家の人に確認する
4. 最後は自分で考えて直す

---

## AIは「答えを出す人」ではなく「手伝う道具」

<div class="big">

AI + 人間 = 便利

</div>

AIに全部まかせるのではなく、  
人間が **目的を決める・たしかめる・直す**。

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

1. AIは文章やアイデアを作れる便利な道具
2. AIへのお願いを **プロンプト** という
3. よいプロンプトには **目的・条件** がある
4. AIはまちがえることがある
5. ひみつの情報はAIに入れない

---

## コースのおさらい

<div class="grid4">
<div class="card">

### 1
パソコン

</div>
<div class="card">

### 2
インターネット

</div>
<div class="card">

### 3
プログラミング

</div>
<div class="card">

### 4
AI

</div>
</div>

---

<!-- _class: title -->

# これで本編は完走！

### また作りたいものがあったら、つづきをやろう 👋
