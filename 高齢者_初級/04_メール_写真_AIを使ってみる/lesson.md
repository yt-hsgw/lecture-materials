---
marp: true
theme: default
paginate: true
size: 16:9
header: '高齢者向けパソコン教室 ／ 第4回'
footer: 'メール・写真・AIを使ってみる'
style: |
  :root {
    --c-primary: #2E7D32; --c-secondary: #FFA000; --c-accent: #5D4037;
    --c-warn: #C62828; --c-dark: #212121; --c-light: #FFF8E1;
  }
  section {
    background: var(--c-light); color: var(--c-dark);
    font-family: 'Hiragino Sans','Yu Gothic',sans-serif;
    font-size: 28px; line-height: 1.7; padding: 60px;
  }
  section h1 { color: var(--c-primary); font-size: 56px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 44px; margin-bottom: 24px; }
  section h3 { color: var(--c-accent); font-size: 32px; }
  section.title {
    background: linear-gradient(135deg, #2E7D32 0%, #FFA000 100%);
    color: white; text-align: center;
  }
  section.title h1 { color: white; font-size: 72px; }
  section.section { background: var(--c-accent); color: white; text-align: center; }
  section.section h1 { color: var(--c-secondary); font-size: 64px; }
  section.handson { background: #E8F5E9; }
  section.handson h1 { color: var(--c-primary); }
  section.warn { background: #FFEBEE; }
  section.warn h1 { color: var(--c-warn); }
  .card {
    background: white; border-radius: 14px;
    padding: 22px 28px; margin: 14px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.1); font-size: 30px;
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

# メール・写真・<br>AIを使ってみる

### 第4回 ／ 高齢者向け パソコン教室 ・ 初級

<br>

きょうは **ご家族と もっとつながれる** 道具を 試してみましょう。

---

## このコース 最終回です

<div class="grid2">
<div class="card">

### 第1〜3回
- パソコンの基本
- ファイル整理
- 安全に使う

</div>
<div class="card">

### 第4回（今日）
- **メール** で連絡
- **写真** を取り込み
- **AI** に質問

</div>
</div>

---

## きょうのゴール

<div class="card">

### ✅ **メール** の しくみ がわかる

</div>
<div class="card">

### ✅ **写真** を パソコンに取り込み、整理できる

</div>
<div class="card">

### ✅ **AI** に かんたんな質問をしてみる

</div>
<div class="card">

### ✅ **入れていい情報・だめな情報** がわかる

</div>

---

<!-- _class: section -->

# 1. メールってなに？

---

## メール ＝ パソコンで送る「お手紙」

<div class="big">📧</div>

紙のお手紙の **電子版**。<br>
1秒で 世界中に 届きます。

<br>

LINE や メッセージとの ちがい：<br>**メールには「住所（アドレス）」** がいります。

---

## メールアドレスの しくみ

<div class="card" style="font-family:'Courier New',monospace;font-size:36px;text-align:center;background:#F1F8E9">

**yamada@example.com**

</div>

<br>

<div class="grid2">
<div>

### `yamada` ＝ あなたの名前

</div>
<div>

### `example.com` ＝ メール屋さんの名前

</div>
</div>

<br>

Gmail、Yahoo!メール、ドコモ、au、おうちのプロバイダなど。

---

## メールでできる 3つのこと

<div class="grid3">
<div class="card">

### 📝 文を送る
お孫さんに 一言

</div>
<div class="card">

### 📷 写真を送る
旅行の写真を 添付

</div>
<div class="card">

### 📥 受け取る
家族・お店から

</div>
</div>

---

## メール送信の 4ステップ

<div class="card step">

### 1. **「新規作成」** ボタンを押す（鉛筆マーク ✏️）

</div>
<div class="card step">

### 2. **「宛先」** に 相手のアドレスを入力

</div>
<div class="card step">

### 3. **「件名」** と **「本文」** を書く

</div>
<div class="card step">

### 4. **「送信」** ボタンを押す

</div>

> 切手 や 封筒の値段 は **無料** です。

---

## メールの 注意点

<div class="card warn-card">

### ❌ **知らない人** からのメールは クリックしない
**特にリンク・添付ファイル** は あぶない（第3回のフィッシング）

</div>

<div class="card warn-card">

### ❌ **「至急」「凍結」** のメールは 偽物の可能性
銀行・通販を 名乗っていても、リンクは押さない

</div>

<div class="card ok-card">

### ⭕ **送信前に 宛先を 二度見** する
**一度送ると 取り消せません**

</div>

---

<!-- _class: section -->

# 2. 写真を 取り込む

---

## 写真は どこから 取り込む？

<div class="grid3">
<div class="card">

### 📱 スマホから
ケーブル または<br>クラウド（iCloud等）

</div>
<div class="card">

### 📷 カメラから
SDカード または USB ケーブル

</div>
<div class="card">

### 💌 メール添付
受け取った写真を 保存

</div>
</div>

---

## SDカード / USBの 使い方

<div class="card step">

### 1. **USB差し込み口** に カードを 差し込む

</div>
<div class="card step">

### 2. パソコンが **「外付けディスク」** と認識

</div>
<div class="card step">

### 3. その中の **写真フォルダ** を ひらく

</div>
<div class="card step">

### 4. **写真を ドラッグ&ドロップ**（第2回で習ったやり方）

</div>

---

## ⚠️ 抜くときは「取り外し」を 必ず

<div class="card warn-card">

### いきなり 抜くと…

中の **写真が 読めなくなる** ことがあります。<br>
**1万円のSD** が 使えなくなる、なんてことも。

</div>

<div class="card ok-card">

### ⭕ 安全な 取り外し方

- **Windows**：右下の **▲マーク** → USB → 「**取り出す**」
- **Mac**：USB のアイコンを **ゴミ箱にドラッグ**（または 右クリック → 取り出す）

</div>

---

## 写真の整理（第2回の応用）

<div class="card step">

### 1. パソコンに **「写真」フォルダ** を作る

</div>
<div class="card step">

### 2. その中に **「2025年」「2024年」** などのフォルダ

</div>
<div class="card step">

### 3. さらに **「春」「夏」「お正月」** など

</div>

> **入れすぎないこと**。2〜3段までが見やすい。

---

<!-- _class: section -->

# 3. AIに さわってみる

---

## AIって なに？

<div class="big">🤖</div>

**「コンピューターの中の、もの知り屋さん」** と思ってください。

質問すると、答えてくれます。

れい：
- 「肉じゃが の レシピ を教えて」
- 「今日の 富士山の 天気は？」
- 「俳句を 1つ 作って」

---

## AIの すごいところ

<div class="card ok-card">

### ⭕ **何でも 聞ける**
「タマネギ の 切り方」「孫の名前 で 短歌」

</div>

<div class="card ok-card">

### ⭕ **24時間 答えてくれる**
深夜でも、朝でも

</div>

<div class="card ok-card">

### ⭕ **怒らない・疲れない**
何度 聞き直しても 大丈夫

</div>

---

## ⚠️ AIの 「うっかり」 ところ

<div class="card warn-card">

### ❌ **平気で 嘘をつく** ことがある
（自信たっぷり に）

</div>

<div class="card warn-card">

### ❌ **古い情報** を 返すこともある

</div>

<div class="card warn-card">

### ❌ **「最新ニュース」 や 細かい固有名詞** は 苦手

</div>

> AIの答えは **「参考」程度**。大事なことは **本物の情報を 確認**。

---

## 入れていい情報・だめな情報

<div class="grid2">
<div class="card ok-card">

### ⭕ 入れていい

- 一般的な質問
- レシピ・俳句・天気
- ペットの名前
- 「肩こり 解消法」

</div>
<div class="card warn-card">

### ❌ 入れない

- **本名・住所・電話番号**
- **マイナンバー・口座番号**
- **パスワード**
- **お孫さんの 名前・学校**

</div>
</div>

---

## AIへの 聞き方のコツ

<div class="card step">

### **「だれに、何を、どう」** を 書く

</div>

<div class="card">

### ❌ 雑な聞き方
「レシピ おしえて」

### ⭕ ていねいな聞き方
**「2人前 の 肉じゃが レシピを、シンプルに 教えて」**

</div>

---

<!-- _class: handson -->

## ハンズオン ① メール送信の練習

教室で 用意した **練習用メール** で：

<div class="card step">

### 1. **「新規作成」** → 件名・本文を入力

</div>
<div class="card step">

### 2. 宛先は **講師のアドレス** or **教室の見本**

</div>
<div class="card step">

### 3. **送信前に 宛先を 二度見**

</div>
<div class="card step">

### 4. **「送信」** を押す

</div>

> ご自身の 本物のメールは、また 個別に お手伝いします。

---

<!-- _class: handson -->

## ハンズオン ② 写真の整理

<div class="card step">

### 1. USBに 入っている **練習用の写真** を見る

</div>
<div class="card step">

### 2. パソコンに **「2025年」フォルダ** を作る

</div>
<div class="card step">

### 3. 写真を **フォルダに ドラッグ**（第2回の復習）

</div>
<div class="card step">

### 4. **「取り外し」** して USBを抜く

</div>

---

<!-- _class: handson -->

## ハンズオン ③ AIに 質問してみる

教室で 用意した AI画面（または ChatGPT 等）で：

<div class="card step">

### 1. **天気** を聞く
「今日の **東京** の 天気を おしえて」

</div>
<div class="card step">

### 2. **レシピ** を聞く
「**にじます** の シンプルな 焼き方」

</div>
<div class="card step">

### 3. **俳句** を 作ってもらう
「**春**の 俳句を 3つ 作って」

</div>

---

## 答えを 見るときの 注意

<div class="card warn-card">

### 📌 **必ず 自分でも 確認**

- レシピ → 危なくない 材料か？
- 天気 → 一致しているか 別の天気サイトで
- 場所 → 実際に 開いているか 電話確認

</div>

> AIは便利だが、**人間が 最後にチェック**。

---

<!-- _class: section -->

# 4. まとめ

---

## きょう できるようになったこと

1. **メール** で 文を送れる
2. **メールアドレス** のしくみ がわかった
3. **USB・SDカードから 写真** を取り込める
4. **AIに 簡単な質問** ができる
5. **入れてはいけない情報** がわかった

---

## このコースで 習った 5つの大切なこと

<div class="card ok-card">

### 1. **「まちがえても 戻せる」**（第1〜2回）

</div>

<div class="card ok-card">

### 2. **「あやしい と思ったら やめる」**（第3回）

</div>

<div class="card ok-card">

### 3. **「個人情報は 入れない」**（第4回）

</div>

<div class="card ok-card">

### 4. **「困ったら 人にきく」**（毎回）

</div>

<div class="card ok-card">

### 5. **「自分のペースで」**（一番大切）

</div>

---

## おうちのかた向けメッセージ

<div class="card tip-card">

### ご家族・周りの方々へ

パソコンは「使いこなす」よりも 「楽しく使う」 が 大事です。<br>
ゆっくり 触ってあげてください。

**「うまくいかないとき、どこに聞けばいいか」** を一緒に決めておくと、教室の外でも 安心です。

</div>

---

## このさき 何をする？

<div class="grid3">
<div class="card">

### 📚 中級コース
もっと使いこなす

</div>
<div class="card">

### 💌 ご家族と
LINE・ビデオ通話

</div>
<div class="card">

### 🎓 続けて 触る
1日5分で OK

</div>
</div>

---

<!-- _class: title -->

# 4回 おつかれさまでした！

### 「こわい機械」 が<br>「ただの道具」 になりましたね。

<br>

これからも、ご自分のペースで。
