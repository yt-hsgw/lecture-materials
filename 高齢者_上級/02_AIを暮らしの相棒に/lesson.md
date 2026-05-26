---
marp: true
theme: default
paginate: true
size: 16:9
header: '高齢者向けパソコン教室 ／ 上級 第2回'
footer: 'AIを暮らしの相棒に'
style: |
  :root {
    --c-primary: #5E35B1;
    --c-secondary: #FFA726;
    --c-accent: #26A69A;
    --c-warn: #D32F2F;
    --c-dark: #1A237E;
    --c-light: #F7F5FA;
  }
  section {
    background: var(--c-light);
    color: #1A1A2E;
    font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif;
    font-size: 28px;
    line-height: 1.7;
    padding: 60px;
  }
  section h1 { color: var(--c-primary); font-size: 56px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 44px; margin-bottom: 24px; }
  section h3 { color: var(--c-accent); font-size: 32px; }
  section.title {
    background: linear-gradient(135deg, #5E35B1 0%, #26A69A 100%);
    color: white; text-align: center;
  }
  section.title h1 { color: white; font-size: 72px; }
  section.section {
    background: var(--c-dark); color: white; text-align: center;
  }
  section.section h1 { color: var(--c-secondary); font-size: 64px; }
  section.handson { background: #E0F2F1; }
  section.handson h1 { color: var(--c-accent); }
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
  .ok { background: #E0F2F1; border-left: 8px solid var(--c-accent);
    padding: 16px 22px; border-radius: 8px; font-size: 28px; }
  .ng { background: #FFEBEE; border-left: 8px solid var(--c-warn);
    padding: 16px 22px; border-radius: 8px; font-size: 28px; }
  .tip { background: #FFF3E0; border-left: 8px solid var(--c-secondary);
    padding: 16px 22px; border-radius: 8px; font-size: 28px; }
  .chat {
    background: white; border-radius: 12px;
    padding: 18px 22px; margin: 10px 0;
    box-shadow: 0 3px 0 rgba(0,0,0,.08);
    font-size: 26px; line-height: 1.7;
  }
  .chat.me {
    background: #F7F5FA;
    border-left: 6px solid var(--c-primary);
  }
  .chat.ai {
    background: #E0F2F1;
    border-left: 6px solid var(--c-accent);
  }
  .chat .who { font-weight: bold; font-size: 22px; margin-bottom: 4px; color: var(--c-primary); }
  .chat.ai .who { color: var(--c-accent); }
---

<!-- _class: title -->

# AIを<br>暮らしの相棒に

### 第2回 ／ 高齢者向け パソコン教室・上級

<br>

きょうは **AIを 自分の 道具** として 使います 🤖✨

---

## 前回の 復習

<div class="grid2">
<div class="card">

### 前回（第1回）
- ☁️ クラウドで 整理
- 🛡️ 3-2-1 バックアップ
- 🔐 二段階認証

</div>
<div class="card">

### 今回（第2回）
- 🤖 AI を 知る
- ✍️ 手紙・俳句・調べ物
- ⚠️ 入れていい / だめ な情報

</div>
</div>

<br>

クラウドが「**保管**」、 AIが「**手伝い**」。

---

## きょうのゴール

- ✅ **AI 3社**（ChatGPT / Gemini / Claude）の 違いがわかる
- ✅ **良い質問** の 仕方 がわかる
- ✅ **手紙・俳句・調べもの** で 使える
- ✅ **入れていい・だめな 情報** が わかる
- ✅ **AIの嘘** を 見抜ける

---

<!-- _class: section -->

# 1. AI って 何？

---

## AI ＝ 「ものすごく 物知りな 相棒」

<div class="big">🤖</div>

<br>

文字で 質問すると、 文字で 答えてくれる。<br>
**手紙の 下書き・俳句・調べ物・薬の確認**<br>
…なんでも 試せる！

---

## 3社の AI（無料で 使える）

<div class="grid3">
<div class="card" style="text-align:center;border-top:6px solid #10A37F">

### 💚 ChatGPT
**OpenAI 社**<br>
一番 有名<br>
日本語 自然

</div>
<div class="card" style="text-align:center;border-top:6px solid #4285F4">

### 🟦 Gemini
**Google 社**<br>
検索 と 連携<br>
最新情報 強い

</div>
<div class="card" style="text-align:center;border-top:6px solid #D97757">

### 🟧 Claude
**Anthropic 社**<br>
長文 が 得意<br>
丁寧な 文体

</div>
</div>

<br>

→ どれも 無料 で 使える！ まず 1つ 試して みる。

---

## どう 使い分ける？

<div class="card">

### 用途で 選ぶ コツ

</div>

<br>

- **今日のニュース** ／ 天気 → **Gemini**（検索 強い）
- **手紙・俳句** ／ 文章 推敲 → **Claude** or **ChatGPT**
- **何でも 試したい** → **ChatGPT**（情報も多い）

<br>

→ **全部 試して 自分に合うもの** で OK！

---

<!-- _class: section -->

# 2. 良い質問の<br>仕方

---

## プロンプトの 3原則

<div class="grid3">
<div class="card" style="text-align:center">

### 🎯 具体的に
「文書」→「**孫への 手紙**」

</div>
<div class="card" style="text-align:center">

### 📏 長さを 指定
「**300文字 で**」

</div>
<div class="card" style="text-align:center">

### 🎨 雰囲気 を 伝える
「**やさしい 言葉で**」

</div>
</div>

<br>

→ 3つ 揃うと、 AIの答え が グッと 良くなる！

---

## ふんわり vs くわしい

<div class="ng">

### ❌ ふんわり プロンプト
「<b>手紙 書いて</b>」<br>
→ ぼんやり した 一般的な手紙

</div>

<div class="ok" style="margin-top:14px">

### ✅ くわしい プロンプト
「<b>遠くの 孫（小学3年生）への 誕生日 手紙</b> を、<br>
<b>200文字 で、 やさしい言葉で</b> 書いて。<br>
おじいちゃん は <b>俳句が 趣味</b>。」<br>
→ ぴったりの 手紙！

</div>

---

## 質問テンプレート

<div class="card">

```
[だれが・どんな状況] の[私] です。

[何を] してほしい：
・[長さ・形式]
・[雰囲気・トーン]
・[含めて ほしいこと]
```

</div>

<br>

→ 紙に 書いてから 入力する のが おすすめ！

---

<!-- _class: section -->

# 3. 暮らしで 使う 例

---

## ① 手紙の 下書き

<div class="chat me">
<div class="who">👤 わたし</div>
お世話に なった 担当の 看護師さん への <b>退院お礼の 手紙</b> を、<br>
<b>200文字 で 丁寧な 言葉</b> で 書いてください。
</div>

<div class="chat ai">
<div class="who">🤖 AI</div>
拝啓 暖かい日が 続く 折、 いかが お過ごし でしょうか。<br>
入院中は 大変 お世話に なり、 心より お礼申し上げます。<br>
○○様の 細やかな ご配慮 と 優しい お声がけ に 支えられ、<br>
無事に 退院 することが できました…
</div>

→ そのまま 使わず、 **自分の言葉に 直す** のが ポイント！

---

## ② 俳句・川柳 案

<div class="chat me">
<div class="who">👤 わたし</div>
<b>「桜」</b> を テーマ に した <b>俳句</b> を <b>3句</b> 考えてください。
</div>

<div class="chat ai">
<div class="who">🤖 AI</div>
1. 散る桜 風の重さを 知る昼下がり<br>
2. 桜咲く 校庭の端の 兄妹かな<br>
3. 夜桜や 一人歩きの 影もまた
</div>

→ **アイデアの 種** として 使う！ 自分で 練り直す。

---

## ③ 調べもの

<div class="chat me">
<div class="who">👤 わたし</div>
<b>マイナンバーカード の 受け取り方法</b> を、<br>
<b>箇条書き で 5項目</b> 教えて ください。
</div>

<div class="chat ai">
<div class="who">🤖 AI</div>
1. 申請して 約1ヶ月後 に「交付通知書」が 自宅に 届きます<br>
2. 通知書 / 本人確認書類 / 印鑑 を 持って 市役所へ<br>
3. 窓口で 暗証番号（4桁 + 6桁以上）を 設定<br>
…
</div>

→ <b>必ず 公式サイトでも 確認</b>！

---

## ④ 薬の 確認（注意あり）

<div class="ng">

### ⚠️ AIに 医療の 最終判断は させない

</div>

<br>

「**飲み合わせ** を 教えて」 → **参考程度**！<br>
必ず **薬剤師・医師** に 相談。<br>
お薬手帳を 見せれば すぐ 教えて くれる。

---

## ⑤ レシピ

<div class="chat me">
<div class="who">👤 わたし</div>
冷蔵庫に <b>キャベツ・卵・玉ねぎ</b> がある。<br>
<b>10分</b> で 作れる <b>2人分</b> の <b>夜ご飯 レシピ</b> を 教えて。
</div>

<div class="chat ai">
<div class="who">🤖 AI</div>
<b>「キャベツと卵の 中華風 卵とじ」</b><br>
1. キャベツを ざく切り（5分）<br>
2. 玉ねぎを 薄切り（2分）<br>
3. フライパンに 油 → 玉ねぎ → キャベツ → 中華スープの素…
</div>

---

<!-- _class: section -->

# 4. 入れていい<br>だめな情報

---

## 絶対に 入れない 情報

<div class="ng">

### 🚫 個人情報 全般

- 本名・住所・電話番号
- マイナンバー
- 生年月日（年齢の 大まかな範囲なら OK）
- 銀行口座 番号・カード番号
- パスワード
- 家族 全員の フルネーム

</div>

---

## 入れて OK な 情報

<div class="ok">

### ✅ 一般的な 情報

- 「**60代**」「**夫婦 二人暮らし**」（範囲 のみ）
- 「**孫（小学生）**」 のような ぼかし
- 「**○○市 近郊**」 のような 範囲
- 趣味・関心（俳句・園芸 など）

</div>

<br>

→ <b>具体名 を 出さず 範囲で</b> 伝える。

---

## 医療・法律・税金 は 最終判断 NG

<div class="ng">

### ⚠️ AIの答え は <b>「下調べ用」</b>

- **薬** → 必ず 薬剤師
- **法律** → 必ず 弁護士・司法書士
- **税金** → 必ず 税理士・税務署
- **医療** → 必ず 医師

</div>

<br>

→ 「<b>AIさんが こう言ってました</b>」 で 専門家に 聞ける と スムーズ！

---

<!-- _class: section -->

# 5. AIの 嘘<br>（ハルシネーション）

---

## AI は ときどき<br><b>もっともらしい 嘘</b> を つく

<div class="big">🤥</div>

<br>

これを **「ハルシネーション」** と 言います。<br>
（幻覚 という 意味）<br>
**自信満々で 間違う** ので 注意！

---

## 嘘の 例

<div class="chat ai">
<div class="who">🤖 AI</div>
徳川家康 は <b>1605年に</b> 江戸幕府を 開きました。
</div>

<br>

→ 本当は **1603年**！ AIは **数字 や 年号** で よく 間違える。

<br>

<div class="chat ai">
<div class="who">🤖 AI</div>
〇〇市役所 の 電話番号は <b>03-1234-5678</b> です。
</div>

→ **電話番号 や 住所** は <b>絶対 確認</b>！

---

## 嘘を 見抜く 3つの コツ

<div class="grid3">
<div class="card" style="text-align:center">

### 🔍 出典 を 聞く
「**情報源 は？**」 と 続けて 質問

</div>
<div class="card" style="text-align:center">

### ✅ 公式サイト で 確認
重要な 数字・年号は<br>
**必ず 検索**

</div>
<div class="card" style="text-align:center">

### 👨‍👩‍👧 家族に 聞く
「AIが こう言ってる」<br>
を 家族と 確認

</div>
</div>

---

## 自信を 持って 質問する コツ

<div class="card">

### 「<b>本当ですか？ 確認 できる ところ ありますか？</b>」<br>と 続けて 聞く

</div>

<br>

→ AIは 素直に「確認 してください」と 答える ことが 多い。<br>
**AI 自身も「自分は 間違える」と 知っている**！

---

<!-- _class: section -->

# 6. やってみよう
## 40分 ハンズオン

---

<!-- _class: handson -->

## ステップ表（40分）

| ステップ | やること | 時間 |
|---|---|---|
| ① | AI（ChatGPT / Gemini） にログイン | 5分 |
| ② | <b>自己紹介</b> 文 を AI に 作って もらう | 10分 |
| ③ | <b>俳句 3句</b> 案を 作って もらう | 10分 |
| ④ | <b>自分の 趣味</b> について 調べ物 | 10分 |
| ⑤ | AIの 答えを <b>3つの コツ</b> で 確認 | 5分 |

---

<!-- _class: handson -->

## 困った とき

<div class="card">

### ❓ AIが 「英語」 で 答える
→ <b>「日本語で 答えて」</b> と 続ける

</div>

<div class="card">

### ❓ 答えが 短すぎ・長すぎ
→ <b>「もっと詳しく」「もう少し 短く」</b> と 続ける

</div>

<div class="card">

### ❓ 答えが 間違っていそう
→ <b>「本当ですか？」「出典は？」</b> と 確認

</div>

---

<!-- _class: warn -->

# ⚠️ 安全 の ひと言

---

## AI 詐欺 にも 注意

<div class="ng">

### 📞 AI で 偽の 声・動画

- 「お母さん、 オレだよ」 が <b>AIで 作られる</b> 時代
- 家族の声 そっくり に 偽電話
- 必ず <b>合言葉</b> で 確認！

</div>

<div class="ng" style="margin-top:14px">

### 💸 「儲かる AI」 詐欺

- 「AIで 株が 必ず 勝てる」 → <b>絶対 嘘</b>
- 「無料 AI セミナー」 → 高額商材

</div>

---

## AI への 依存 を 避ける

<div class="tip">

### 💡 「最終判断は 人間」

</div>

<br>

- 大事な 決断（医療・法律・お金）は **人間に 相談**
- AIは あくまで **「下調べ・整理」**
- 「<b>自分で 考える 力</b>」 を 失わない！

---

<!-- _class: section -->

# 7. まとめ

---

## 今日 できたこと

1. **AI 3社** の 特徴 を 把握
2. **プロンプト 3原則**（具体・長さ・雰囲気）
3. **暮らしで 使う 5例**（手紙・俳句・調べ物・薬・レシピ）
4. **NG情報** の リスト（個人情報・専門分野）
5. **AI の嘘** を 見抜く 3コツ

---

## おうちで やってみる

<div class="card">

### 🤖 AI に 聞いてみたいこと

- 法事・お祝い の <b>挨拶文</b>
- 旅行 の <b>計画</b>
- 季節 の <b>レシピ</b>
- 趣味（俳句・川柳・絵手紙）の <b>アイデア</b>
- 家電の <b>使い方</b> 質問

</div>

> **毎日 1問** 聞く 習慣 で 上達！

---

## 次回予告

<div class="big">📝 🌐</div>

# 第3回｜情報発信を 楽しむ

**ブログ / Facebook / Instagram** で<br>
**写真・文章を 公開** する 楽しみ！<br>
**公開範囲・個人情報** の注意も。

---

<!-- _class: title -->

# おつかれさま でした 🤖✨

### 「AIを 使いこなす人」 に

<br>

家に 帰って、<br>
**気になっていた 1問** を<br>
AI に 聞いてみてください！
