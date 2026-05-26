---
marp: true
theme: default
paginate: true
size: 16:9
header: '小学生プログラミング教室 ／ 中級 第4回'
footer: 'AIといっしょに作品紹介'
style: |
  :root {
    --c-primary: #FF8C1A; --c-secondary: #FCBD19; --c-accent: #4C97FF;
    --c-warn: #FF4D6D; --c-dark: #2D3436; --c-light: #FFF8EE;
    --c-ai: #8338EC;
  }
  section { background: var(--c-light); color: var(--c-dark);
    font-family: 'Hiragino Maru Gothic ProN','M PLUS Rounded 1c',sans-serif; padding: 60px; }
  section h1 { color: var(--c-primary); font-size: 54px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 40px; }
  section h3 { color: var(--c-accent); font-size: 28px; }
  section.title { background: linear-gradient(135deg,#FF8C1A,#FCBD19,#8338EC); color: white; text-align: center; }
  section.title h1 { color: white; font-size: 70px; }
  section.section { background: var(--c-dark); color: white; text-align: center; }
  section.section h1 { color: var(--c-secondary); font-size: 60px; }
  section.handson { background: #E3F2FD; }
  section.handson h1 { color: var(--c-accent); }
  section.finale { background: linear-gradient(135deg,#8338EC,#4C97FF); color: white; text-align: center; }
  section.finale h1 { color: white; font-size: 64px; }
  .card { background: white; border-radius: 14px; padding: 18px 24px; margin: 12px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
  .grid4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
  .big { font-size: 64px; font-weight: bold; text-align: center; }
  .chat { background: white; border-radius: 14px; padding: 16px 20px; margin: 8px 0;
    box-shadow: 0 3px 0 rgba(0,0,0,.08); }
  .chat.me { background: #FFF3D6; border-left: 6px solid var(--c-primary); }
  .chat.ai { background: #EEE3FF; border-left: 6px solid var(--c-ai); }
  .chat .who { font-weight: bold; font-size: 14px; color: var(--c-primary); margin-bottom: 4px; }
  .chat.ai .who { color: var(--c-ai); }
  .bad { background: #FFEBEE; border-left: 6px solid var(--c-warn); border-radius: 10px; padding: 12px 16px; }
  .good { background: #E8F5E9; border-left: 6px solid #4CAF50; border-radius: 10px; padding: 12px 16px; }
---

<!-- _class: title -->

# AIといっしょに<br>作品紹介

### 第4回 ／ 小学生プログラミング教室・中級

<br>

きょうは **AIに紹介文を書いてもらう** → **発表会** ！ 🤖✨🎤

---

## ここまでの 3回で 作ったもの

<div class="grid2">
<div class="card">

### 🐹 もぐらたたきゲーム
（第1〜2回 Scratch）

スコア・タイマー・効果音 入り

</div>
<div class="card">

### 🌐 自己紹介ページ
（第3回 HTML）

家族に見せられる 1ページ

</div>
</div>

<br>

**自分の作品が 2つ** できた！ 今日は その作品を **「みんなに 知ってもらう」** 回。

---

## きょうのゴール

- ✅ **AIへの たのみ方（プロンプト）** がわかる
- ✅ AIに **作品の紹介文** を 書いてもらえる
- ✅ AIの答えを **「使えるかな？」** と たしかめられる
- ✅ **発表会** で 1人ずつ 自分の作品を紹介できる
- ✅ **コース修了！** 🎉

---

<!-- _class: section -->

# 1. AI ってこんなとき<br>めっちゃ便利

---

## AI ＝ 文章の おてつだいロボット

<div class="big">🤖</div>

- 質問に答えてくれる
- 文章を **書いてくれる**
- 短くしたり、長くしたりも できる

<br>

**「もう一人 自分がいる」** みたいなイメージ。

---

## 今日 やりたいこと：紹介文 を 書いてもらう

<div class="grid2">
<div class="card">

### 😣 自分で書くと…
- なんて書けばいいか わからない
- 同じ言葉ばかり 使っちゃう
- 時間が かかる

</div>
<div class="card">

### 🤖 AIに たのむと…
- すぐ 案を出してくれる
- いろんな書き方を ためせる
- **でも そのまま 使っちゃダメ**！

</div>
</div>

---

## ⚠️ AIも まちがえる

<div class="card warn">

### AIは **「もっともらしい うそ」** を 言うことがある！

- ありもしない 機能を 書いちゃう
- 自分が 入れてない 言葉を 入れちゃう
- ちょっと **大げさ** すぎる

</div>

<br>

→ だから **「自分で たしかめる」** がとても大事！

---

<!-- _class: section -->

# 2. プロンプト ＝<br>AIへの おねがい

---

## 「プロンプト」って？

<div class="big">💬</div>

**AIに 入力する 文** のこと。

<br>

**プロンプトが ふんわり** ＝ 答えも ふんわり<br>
**プロンプトが くわしい** ＝ 答えも ちょうど良い

---

## ダメな例 vs 良い例

<div class="bad" style="margin-bottom:14px">

### 😣 ふんわり プロンプト
「**ゲームの紹介 書いて**」

→ AI：「面白いゲームです！」だけ…

</div>

<div class="good">

### 🤩 くわしい プロンプト
「**小学生が作った もぐらたたきゲーム** の紹介文を、**3行で やさしいことば** で書いて」

→ AI：ちゃんと **小学生っぽい・短い・やさしい** 紹介文！

</div>

---

## プロンプトの 3つの 型

<div class="grid3">
<div class="card">

### 👥 だれ向け
家族／友だち／<br>先生／知らない人

</div>
<div class="card">

### 📝 なに を
紹介／お礼／<br>感想／お知らせ

</div>
<div class="card">

### 📏 どのくらい
3行／100文字／<br>5つの箇条書き

</div>
</div>

<br>

**「だれに・なにを・どのくらい」** を入れると 一気に上手くなる。

---

## 例：Scratchゲームの 紹介プロンプト

<div class="chat me">
<div class="who">👤 わたし</div>
わたしは 小学4年生です。<br>
<b>Scratchで「もぐらたたきゲーム」</b>を作りました。<br>
スコアと タイマー、効果音 が入っています。<br>
このゲームを <b>家族に紹介する 文章</b> を<br>
<b>やさしい言葉で 3行</b> で 書いてください。
</div>

---

## 例：HTMLページの 紹介プロンプト

<div class="chat me">
<div class="who">👤 わたし</div>
<b>HTMLで 自己紹介ページ</b> を作りました。<br>
中身は： 名前／好きなもの3つ／しょうらいの夢 です。<br>
このページを <b>友だちに見せるとき の ひとこと</b> を、<br>
<b>2文・元気な感じ</b> で 書いてください。
</div>

---

<!-- _class: section -->

# 3. AIの答えを<br>たしかめる

---

## 3つの チェック ポイント

<div class="grid3">
<div class="card">

### ① うそ じゃない？
**書いてないことを<br>書かれてない？**

例：入れてない機能を<br>書いてたら ×

</div>
<div class="card">

### ② 自分らしい？
**自分の言葉に<br>聞こえる？**

むずかしすぎる言葉は<br>カットしよう

</div>
<div class="card">

### ③ ちゃんと 読める？
**家族・友だちが<br>わかるかな？**

小学生っぽくない言葉も<br>カットする

</div>
</div>

---

## AI回答の チェック例

<div class="chat ai">
<div class="who">🤖 AI</div>
このゲームは <s>3Dグラフィックを駆使した</s> 本格的な もぐらたたき！<br>
<s>5レベル</s> の難易度で 飽きずに 遊べます。<br>
ぜひ <s>世界大会で</s> 試してみてください！
</div>

<div class="card warn" style="margin-top:14px">

### ⚠️ ぜんぶ うそ！
3Dでもないし、5レベルもない、世界大会も無い。<br>
→ そのまま使うと **大うそつき** に なる！

</div>

---

## なおして もらう ＝ 追加プロンプト

<div class="chat me">
<div class="who">👤 わたし</div>
3Dじゃないです。難易度は1つだけ。世界大会も無いです。<br>
<b>事実だけで</b> もう一度 書きなおしてください。
</div>

<div class="chat ai">
<div class="who">🤖 AI（やり直し）</div>
30秒で 何匹 たたけるか 挑戦！<br>
スコアが 表示されて、音も 出ます。<br>
家族でも 楽しめます。
</div>

→ **追加でおねがい** すれば どんどん 良くなる！

---

<!-- _class: section -->

# 4. やってみよう
## ハンズオン

---

<!-- _class: handson -->

## AIを 使うときの 大事な おやくそく

<div class="card warn">

### 🚨 AIを使うときの 約束（家族・先生と 確認！）

1. **本名・住所・学校名・電話番号** は 入れない
2. **個人情報（自分や家族のこと）** を 細かく書かない
3. AIの答えを **そのまま信じない**（必ず 自分で見直す）
4. **保護者・先生** に 「これ AIに 聞いていい？」 と聞いてからやる

</div>

> 多くのAIは **13歳以上＋保護者同意** が必要。教室では 先生が一緒に！

---

<!-- _class: handson -->

## やることリスト（40分）

| ステップ | やること | 時間 |
|---|---|---|
| ① | 紹介したい作品を **1つ 決める** | 5分 |
| ② | プロンプトを **下書きで書く**（紙でOK） | 10分 |
| ③ | 先生が **AIに 聞く**（または各自） | 10分 |
| ④ | AIの答えを **チェック** （3つの観点） | 10分 |
| ⑤ | 追加プロンプトで **なおして もらう** | 5分 |

---

<!-- _class: handson -->

## プロンプト 下書き シート

<div class="card">

```
わたしは ＿＿＿年生です。
〔 　　　　　　 〕で 〔 　　　　　　　　　 〕を 作りました。
中身は ：〔　　　　　 〕〔　　　　　 〕〔　　　　　 〕です。

これを 〔 だれ 〕に 〔 なに 〕する 文章を、
〔 何行・何文字 〕で 〔 どんな感じ 〕で 書いてください。
```

</div>

> まず 紙に 書いてから、最後に AIに 入力する！

---

<!-- _class: section -->

# 5. 発表会 🎤

---

## 発表のしかた（1人 2分）

<div class="card">

### 1. **作品の名前** を言う（10秒）

### 2. **何ができるか** 見せる（60秒）

### 3. AIに書いてもらった **紹介文** を読む（30秒）

### 4. **「いちばん がんばったところ」** を1つ言う（20秒）

</div>

> 発表の とき、AIの答えを **そのまま読まない**。 自分の言葉で 言いかえてOK！

---

## 聞く 人の おしごと

<div class="grid3">
<div class="card">

### 👂 しっかり 聞く
スマホやお話は ストップ

</div>
<div class="card">

### 👏 はくしゅ する
発表おわりに ぜったい

</div>
<div class="card">

### 🌟 いいねを 1つ
「ここよかった」を伝える

</div>
</div>

---

<!-- _class: section -->

# 6. コース全体の<br>ふりかえり

---

## 中級 4回で 身についたこと

<div class="grid2">
<div class="card">

### 🐹 第1〜2回
- Scratch で **ゲームを完成**
- 変数・タイマー・効果音
- 友だちと **交換プレイ**

</div>
<div class="card">

### 🌐 第3〜4回
- HTML で **自己紹介ページ**
- AIに **おねがい・たしかめ**
- **発表会** で みんなに 紹介

</div>
</div>

<br>

**作る → なおす → 見せる** の流れが 自分で できるように！

---

## 自己採点（5段階）

<div class="card">

### 自分で つけてみよう

- 🐹 Scratchで ゲームを 完成させた … ⭐⭐⭐⭐⭐
- 🌐 HTMLで ページを 作った … ⭐⭐⭐⭐⭐
- 🤖 AIに 上手に たのめた … ⭐⭐⭐⭐⭐
- 🎤 みんなの前で 発表できた … ⭐⭐⭐⭐⭐
- 😄 楽しかった！ … ⭐⭐⭐⭐⭐

</div>

> 全部 ⭐5つ つけて OK！「やった」が 大事 ！

---

<!-- _class: section -->

# 7. まとめ ・ おわりに

---

## 今日 おぼえたこと

1. **AI** は 文章の おてつだい が得意
2. **プロンプト** は 「だれに・なにを・どのくらい」
3. AIも **まちがえる** ので 必ず **チェック**
4. **追加プロンプト** で どんどん 良くなる
5. **作品 → 紹介 → 発表** で コース 完結！

---

## おうちで できる こと

<div class="grid2">
<div class="card">

### 🏠 作品を 見せる
今日の **発表内容** を<br>
そのまま 家族の前で<br>
もう一度 やってみよう

</div>
<div class="card">

### 🚀 もっと 作る
- Scratchで **別のゲーム**
- HTMLで **家族のページ**
- 友だち と **交換** する

</div>
</div>

---

## つぎ どうする？

<div class="card">

### 🎓 上級コースへ
- 自分で考えた **オリジナルゲーム**
- **複数ページ** のWebサイト
- AIと **本格的な対話**

</div>

<div class="card tip" style="background:#FFFCEE;border-left:8px solid #FCBD19">

### 🌱 まずは つづける
むずかしいことより **「作りつづける」** が 一番！<br>
毎週 ちょっとずつ、つくった作品を **ためていこう**。

</div>

---

<!-- _class: finale -->

# おめでとう！🎉

### 中級コース 4回 ぜんぶ 修了

<br>

**自分の作品で 自分を 紹介できる**<br>
これは すごく すてきな チカラ。

<br>

これからも **作る → 見せる** を つづけよう ！
