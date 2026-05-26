---
marp: true
theme: default
paginate: true
size: 16:9
header: '小学生プログラミング教室 ／ 上級 第4回'
footer: '発表会'
style: |
  :root {
    --c-primary: #7C4DFF; --c-secondary: #FFD54F; --c-accent: #00BFA5;
    --c-warn: #FF5252; --c-dark: #1A1A2E; --c-light: #F8F5FF;
  }
  section { background: var(--c-light); color: var(--c-dark);
    font-family: 'Hiragino Maru Gothic ProN','M PLUS Rounded 1c',sans-serif; padding: 60px; }
  section h1 { color: var(--c-primary); font-size: 54px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 40px; }
  section h3 { color: var(--c-accent); font-size: 28px; }
  section.title { background: linear-gradient(135deg,#7C4DFF,#536DFE,#00BFA5); color: white; text-align: center; }
  section.title h1 { color: white; font-size: 70px; }
  section.section { background: var(--c-dark); color: white; text-align: center; }
  section.section h1 { color: var(--c-secondary); font-size: 60px; }
  section.handson { background: #E0F7FA; }
  section.handson h1 { color: var(--c-accent); }
  section.finale { background: linear-gradient(135deg,#7C4DFF,#00BFA5,#FFD54F); color: white; text-align: center; }
  section.finale h1 { color: white; font-size: 66px; }
  .card { background: white; border-radius: 14px; padding: 18px 24px; margin: 12px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
  .grid4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
  .big { font-size: 64px; font-weight: bold; text-align: center; }
  .ok { background: #E0F7FA; border-left: 6px solid var(--c-accent);
    border-radius: 10px; padding: 12px 16px; }
  .ng { background: #FFEBEE; border-left: 6px solid var(--c-warn);
    border-radius: 10px; padding: 12px 16px; }
  .tip { background: #FFFCEE; border-left: 6px solid var(--c-secondary);
    border-radius: 10px; padding: 12px 16px; }
  .timeline { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px;
    background: var(--c-dark); padding: 10px; border-radius: 12px; }
  .timeline > div { background: white; padding: 14px 10px; border-radius: 8px; text-align: center; }
  .timeline > div b { display: block; color: var(--c-primary); font-size: 18px; }
  .timeline > div span { color: var(--c-muted, #666); font-size: 12px; }
  .chat { background: white; border-radius: 12px; padding: 12px 16px; margin: 6px 0;
    box-shadow: 0 3px 0 rgba(0,0,0,.08); }
  .chat.q { background: #FFFCEE; border-left: 6px solid var(--c-secondary); }
  .chat.a { background: #E0F7FA; border-left: 6px solid var(--c-accent); }
  .chat .who { font-weight: bold; font-size: 13px; margin-bottom: 3px; color: var(--c-primary); }
  .chat.a .who { color: var(--c-accent); }
  .cert { background: linear-gradient(135deg,#FFFCEE,#F3EFFF);
    border: 4px double var(--c-primary); border-radius: 14px;
    padding: 30px 24px; text-align: center; box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .cert h2 { color: var(--c-primary); }
---

<!-- _class: title -->

# 発表会

### 第4回 ／ 小学生プログラミング教室・上級

<br>

きょうは **コース最終回 ＋ 発表会** ！ 🎤🎓✨

---

## 前回の 復習

<div class="grid3">
<div class="card">

### 🧐 自分テスト
10項目チェック

</div>
<div class="card">

### 👫 友だちテスト
観察＆メモ

</div>
<div class="card">

### 🔧 改善
1〜2個 直した

</div>
</div>

<br>

おうちで **「直したリスト」** は 仕上がった？ 今日 みんなで 発表しよう！

---

## きょうのゴール

- ✅ **3分プレゼン** を 1人で やりきる
- ✅ **質疑応答** に 答えられる
- ✅ 友だちの 発表を **しっかり聞く**
- ✅ **コース修了** 🎓

<br>

> 緊張するのは ふつう！ 大事なのは **「やってみる」** こと。

---

<!-- _class: section -->

# 1. 良いプレゼン って？

---

## プレゼン ＝ 「自慢」 じゃなくて 「共有」

<div class="big">🤝</div>

- ❌ **「すごいでしょ！」**
- ✅ **「こんなの 作ったよ。 こう使うんだ」**

<br>

聞いてる人に **「面白そう」「やってみたい」** と思ってもらえれば 大成功！

---

## 良いプレゼン の 3つの 特徴

<div class="grid3">
<div class="card" style="border-top:6px solid var(--c-primary)">

### 🎯 短くて わかりやすい
聞く人を **疲れさせない**

</div>
<div class="card" style="border-top:6px solid var(--c-accent)">

### 🎬 実物を 見せる
言葉だけより **動くもの**

</div>
<div class="card" style="border-top:6px solid var(--c-secondary)">

### 😄 自分が 楽しそう
気持ちは **伝染** する

</div>
</div>

---

<!-- _class: section -->

# 2. 3分プレゼン<br>4つのパート

---

## 3分の 黄金構成

<div class="timeline">
<div><b>30秒</b><span>① 何を 作った</span></div>
<div><b>60秒</b><span>② どう 作った（デモ）</span></div>
<div><b>60秒</b><span>③ 苦労した こと</span></div>
<div><b>30秒</b><span>④ 次に やりたいこと</span></div>
</div>

<br>

**「3分 ＝ 180秒」** だから、しゃべる量は おもったより 少ない！

---

## ① 何を 作った（30秒）

<div class="card">

### 「○○ という ○○ を 作りました」

### 例：
「**ねこねこタイマー** という、**ねこを 育てながら 集中時間を のばすアプリ** を 作りました。」

</div>

<br>

ポイント：
- **作品名** ＋ **どんなもの** を 1文で
- **だれ向け** か も 言うと もっと良い

---

## ② どう 作った（60秒・デモ）

<div class="card">

### 「実際に 動かして 見せます」

</div>

<br>

- パソコンの **画面を見せて**、旗を 押す
- **代表的な機能** を 1〜2個 見せる（全部 見せると 長い！）
- 「**ここが 自分の工夫**」 と 言う

> ⚠️ **「動かない！」** にならないよう、リハーサルで 必ず 確認！

---

## ③ 苦労した こと（60秒）

<div class="card">

### 「ここが 一番 大変でした」

</div>

<br>

例：
- 「**タイマーが 0で 止まらなくて** 大変でした。 AIに 相談して、もし=0なら すべてを止める を 入れたら 直りました。」
- 「**友だちに 使ってもらったら ボタンの場所が 分かりにくいと 言われた** ので、 中央に 大きく しました。」

> **「どう 解決したか」** まで セットで 話す！

---

## ④ 次に やりたいこと（30秒）

<div class="card">

### 「もし 時間が あれば、こうしたい」

</div>

<br>

例：
- 「**ねこの 種類を 5匹に 増やしたい** です」
- 「**スマホでも 使えるように** したいです」

<br>

→ 「**まだ 改良の 余地が ある**」 と 見せると 上手！

---

<!-- _class: section -->

# 3. 上手な 見せ方

---

## 緊張 を ほぐす コツ

<div class="grid3">
<div class="card">

### 🫁 深呼吸
吸って4秒・<br>はいて6秒

</div>
<div class="card">

### 💪 ガッツポーズ
発表前に **両手を 上に** 10秒

</div>
<div class="card">

### 😊 友だちの顔
だれか **やさしい人** を 見て話す

</div>
</div>

<br>

> ✋ 緊張で 手が ふるえても OK！ **声** が 出てれば 伝わる。

---

## デモを 失敗しない 準備

<div class="card warn">

### ⚠️ 「発表 前に」 必ず 1回 動かす

</div>

<br>

- パソコンを **充電** する（Wi-Fiも）
- 旗を 1回 押して **動くか** 確認
- **音量** を 確認（出過ぎ NG・出てない NG）
- もし 動かなかったら？ → **「画面を 説明する」** ことに 切り替え！

---

## プレゼンが 苦手な人 へ

<div class="ok">

### 🎬 別の やり方 もOK

</div>

<br>

- **動画で 録画** しておいて 流す（先生に 相談）
- **ペアで 発表**（友だちと 2人で 交代しながら）
- **読みあげ** でOK（紙を 見ながら）

<br>

> 「**やり方は 自由**」。 大事なのは **やってみる** こと！

---

<!-- _class: section -->

# 4. 質疑 応答

---

## 答え方の 型

<div class="chat q">
<div class="who">🙋 質問</div>
「ねこの 絵は どうやって 描いたの？」
</div>

<div class="chat a">
<div class="who">😄 答え</div>
「**自分で** Scratchの ペイントツール で 描きました。<br>
むずかしかったので **15分** かかりました！」
</div>

<br>

→ **質問の オウム返し** ＋ **理由** ＋ **エピソード** の3点セット。

---

## 答えが わからない とき

<div class="card tip">

### 「すみません、わかりません！」 でOK

</div>

<br>

- 「**いい質問ですね。考えたこと なかったです**」
- 「**今度 調べてみます！**」
- 「**先生 教えてもらって いいですか？**」

<br>

→ **しらないフリ をしない**！ 正直に。

---

## 聞く 人 の おしごと

<div class="grid3">
<div class="card">

### 👂 しっかり 聞く
スマホ・私語 ストップ

</div>
<div class="card">

### 👏 はくしゅ
発表おわりに 大きく！

</div>
<div class="card">

### 🙋 質問する
わからない所 ／ いい所

</div>
</div>

<br>

> 質問は **「責める」 じゃなくて 「気になる」** で 聞く！

---

<!-- _class: section -->

# 5. ハンズオン
## リハーサル

---

<!-- _class: handson -->

## ペアで リハーサル（20分）

<div class="card">

### 1. ペアを 作る（となりの 人）

### 2. **1人ずつ 3分** で 発表

### 3. 聞いた 人は **タイマー係**

### 4. 終わったら **「いいね 1つ」「もっと こうしたら 1つ」**

</div>

<br>

> 本番で 困らないよう **必ず 1回** やる！

---

<!-- _class: handson -->

## リハーサル チェック

<div class="card">

### 自分の 発表で たしかめる

- ⏱️ **3分** に おさまった？
- 💻 **デモ** で 動かなかった所 は なかった？
- 🗣️ **声の 大きさ** は OK？
- 😊 **顔を上げて** 話せた？

</div>

---

<!-- _class: section -->

# 6. いよいよ<br>発表会 🎤

---

## 発表会 の 進め方

<div class="card">

### 1. **順番** は くじびき or 立候補

### 2. 1人 **3分プレゼン ＋ 質疑1分** ＝ 4分

### 3. 終わったら **大きな はくしゅ**！ 🎉

### 4. 全員 終わったら **修了式**

</div>

<br>

> 発表する人 も 聞く人 も **主役**！

---

## 上級コース で 身についた こと

<div class="grid2">
<div class="card">

### 🧠 考える チカラ
- 企画書を 書く
- 機能を 分割
- 優先順位

</div>
<div class="card">

### ⚒️ 作る チカラ
- 設計どおりに 実装
- 中間チェック
- AIに 相談

</div>
</div>

<div class="grid2" style="margin-top:14px">
<div class="card">

### 🔧 直す チカラ
- ユーザーテスト
- バグ報告
- 改善ループ

</div>
<div class="card">

### 🎤 伝える チカラ
- 3分プレゼン
- 質疑応答
- 共有する 姿勢

</div>
</div>

---

<!-- _class: section -->

# 7. つぎは どこへ？

---

## 進める道 はいっぱい

<div class="grid3">
<div class="card">

### 🐍 中学生コース
**Python** で<br>テキストコード

</div>
<div class="card">

### 🎮 もっと Scratch
**オンライン公開** や<br>大きな作品に 挑戦

</div>
<div class="card">

### 🌐 もっと Web
**HTML/CSS** で<br>本格的な サイト

</div>
</div>

<br>

> 「**作りつづける**」 のが いちばん 大事！

---

## 「ためる」 が 一番の 力

<div class="card tip">

### 💡 1か月に 1作品 でも OK

</div>

<br>

- 1年で **12作品**
- 3年で **36作品**
- 高校生になる頃 **100作品**！

<br>

→ それが **君の ポートフォリオ**。 すごい武器に なる。

---

<!-- _class: finale -->

# 🎓 修了 おめでとう！

### 4回 × 60〜90分 ＝ コース修了

<br>

**自分で企画 → 作る → テスト → 発表** が <br>
できる ようになりました！

---

## 修了証

<div class="cert">

# 🏆 修了証

### 上記の者は<br>**小学生 プログラミング教室・上級コース** を<br>修了したことを 証します

<br>

**「企画 → 実装 → テスト → 発表」**<br>
の一連を 自分で やり遂げた

<br>

2026年5月 ／ 教室 講師

</div>

---

## 最後に 先生から

<div class="card">

### 「**作りたい** と 思ったら 作って みる」<br>これが プログラミングの 一番の 上達法 です。

</div>

<br>

詰まっても OK。 失敗しても OK。<br>
**作りつづける** 君を、先生は ずっと 応援しています！

---

<!-- _class: title -->

# おつかれさま 🎉🎓✨

### 君は もう **「自分で 作品を 作れる人」**

<br>

これからも、**作る たのしさ** を<br>
忘れないでね！
