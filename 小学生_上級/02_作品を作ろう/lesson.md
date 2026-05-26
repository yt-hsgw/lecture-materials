---
marp: true
theme: default
paginate: true
size: 16:9
header: '小学生プログラミング教室 ／ 上級 第2回'
footer: '作品を作ろう'
style: |
  :root {
    --c-primary: #7C4DFF; --c-secondary: #FFD54F; --c-accent: #00BFA5;
    --c-warn: #FF5252; --c-dark: #1A1A2E; --c-light: #F8F5FF;
    --c-ai: #00BFA5;
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
  .card { background: white; border-radius: 14px; padding: 18px 24px; margin: 12px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
  .grid4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
  .big { font-size: 64px; font-weight: bold; text-align: center; }
  .blk { display: inline-block; padding: 6px 12px; margin: 3px; border-radius: 8px;
    color: white; font-weight: bold; font-size: 16px; box-shadow: 0 2px 0 rgba(0,0,0,.15); }
  .blk-event{background:#FFD500;color:#6B5300} .blk-motion{background:#4C97FF}
  .blk-look{background:#9966FF} .blk-control{background:#FFAB19}
  .blk-sense{background:#5CB1D6} .blk-op{background:#59C059}
  .blk-var{background:#FF8C1A} .blk-sound{background:#CF63CF}
  .ok { background: #E0F7FA; border-left: 6px solid var(--c-accent);
    border-radius: 10px; padding: 12px 16px; }
  .ng { background: #FFEBEE; border-left: 6px solid var(--c-warn);
    border-radius: 10px; padding: 12px 16px; }
  .tip { background: #FFFCEE; border-left: 6px solid var(--c-secondary);
    border-radius: 10px; padding: 12px 16px; }
  .chat { background: white; border-radius: 12px; padding: 14px 18px; margin: 8px 0;
    box-shadow: 0 3px 0 rgba(0,0,0,.08); }
  .chat.me { background: #F3EFFF; border-left: 6px solid var(--c-primary); }
  .chat.ai { background: #E0F7FA; border-left: 6px solid var(--c-ai); }
  .chat .who { font-weight: bold; font-size: 13px; margin-bottom: 4px; color: var(--c-primary); }
  .chat.ai .who { color: var(--c-ai); }
  .flow { background: white; border-radius: 14px; padding: 16px 20px;
    box-shadow: 0 4px 0 rgba(0,0,0,.08); display: flex; align-items: center; gap: 12px; }
  .flow .num { background: var(--c-primary); color: white; width: 36px; height: 36px;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-weight: bold; flex-shrink: 0; }
  .flow .arrow { text-align: center; color: var(--c-primary); font-size: 28px; line-height: 1; }
---

<!-- _class: title -->

# 作品を 作ろう

### 第2回 ／ 小学生プログラミング教室・上級

<br>

きょうは **企画書 → 動く作品** へ！ ⚒️🐹

---

## 前回の 復習

<div class="grid3">
<div class="card">

### 📝 企画書
紙1枚に まとめた

</div>
<div class="card">

### 🎯 1人にしぼった
だれが 使う か はっきり

</div>
<div class="card">

### 🎨 画面設計
パーツの配置を 紙の上に

</div>
</div>

<br>

**設計図** は できた。今日は それを **動かす** ！

---

## きょうのゴール

- ✅ 企画書を **Scratchブロック** に 翻訳できる
- ✅ 大きな機能を **小さく 分割** できる
- ✅ **小さく作って 動かす** を くり返せる
- ✅ 詰まったら **「自分→友だち→AI→先生」** の順で 聞ける
- ✅ 完成形の **8割** まで 進む

---

<!-- _class: section -->

# 1. 設計 を ブロックに<br>翻訳 する

---

## いきなり 作り始めない！

<div class="ng">

### ❌ よくある 失敗
「とりあえず Scratchを 開いて 適当に ブロックを 並べる」<br>
→ ぐちゃぐちゃ になって 完成しない

</div>

<br>

<div class="ok">

### ✅ プロの やり方
**企画書 → 機能を分ける → 1つずつ ブロックで 書く**

</div>

---

## 機能 → ブロック の 例

企画書：「**スタートボタンで タイマーが 動く**」

<div class="card">

### 必要な ブロック を 探す

<span class="blk blk-event">🟡 旗が 押されたとき</span>
<span class="blk blk-var">🟧 のこり時間 を 25 にする</span>
<span class="blk blk-control">🟠 ずっと</span>
　<span class="blk blk-control">🟠 1秒 待つ</span>
　<span class="blk blk-var">🟧 のこり時間 を -1 ずつ変える</span>

</div>

<br>

→ ブロックの **「色」** で 仲間分け するのが コツ。

---

## 機能を「小さく」 分ける

**❌ 大きすぎ：** 「タイマー機能 を 作る」

**✅ 小さく分ける：**

<div class="card">

1. **のこり時間 変数** を 作る
2. **旗で 初期値** を セット
3. **1秒ごとに -1**
4. **0になったら 終了** メッセージ
5. **画面に 残り時間 を 表示**

</div>

→ 5つの **「ちっちゃな ステップ」** なら 1つずつ クリアできる！

---

<!-- _class: section -->

# 2. 小さく作って<br>動かす

---

## 「最小ロット」 の 考え方

<div class="big">🐣</div>

**全部 作ってから 動かす** → 動かなかった 時 どこが ダメか わからない

<br>

**1機能 作って → 動かす → OKなら 次** の くりかえし<br>
これが **プログラマーの 基本**！

---

## 中間チェック の リズム

<div class="flow">
<div class="num">1</div>
<div>機能を 1つ 書く（5〜10分）</div>
</div>

<div class="flow" style="margin-top:6px">
<div class="num" style="background:var(--c-accent)">2</div>
<div>旗をクリック → <b>動くか たしかめる</b></div>
</div>

<div class="flow" style="margin-top:6px">
<div class="num" style="background:var(--c-secondary);color:var(--c-dark)">3</div>
<div>動いた → 次へ。 動かない → なおす</div>
</div>

<br>

→ この **3ステップを ぐるぐる**。 30分ごとに 進みを 確認する習慣を！

---

## 進みを 「見える化」 する

<div class="card">

### 企画書の ④機能リスト に チェック

- ✅ スタートボタンで タイマーが 動く ← できた！
- ✅ 25分で ねこが 1匹 育つ ← できた！
- ⬜ 3匹 ためたら 図かんに のる
- ⬜ 休けい中に ごはんを あげられる

</div>

<br>

→ 「**今 どこまで できた**」が 一目で わかる。

---

<!-- _class: section -->

# 3. 詰まったら<br>どうする？

---

## 「詰まる」 は ふつう のこと

<div class="big">😣</div>

プログラミングは **詰まるのが 当たり前** ！<br>
プロでも 毎日 詰まる。 大事なのは **「どう ぬけ出すか」** 。

<br>

→ きょう おぼえてほしい **4ステップ** が ある。

---

## 詰まった時の 4ステップ

<div class="flow">
<div class="num">1</div>
<div>🤔 <b>自分で 30分</b> 考える・しらべる</div>
</div>

<div class="flow" style="margin-top:6px">
<div class="num" style="background:var(--c-secondary);color:var(--c-dark)">2</div>
<div>👫 <b>友だちに</b> 「ここが わからない」と 聞く</div>
</div>

<div class="flow" style="margin-top:6px">
<div class="num" style="background:var(--c-accent)">3</div>
<div>🤖 <b>AIに</b> 「どう したら 良い？」と 相談する（コードは 書かせない！）</div>
</div>

<div class="flow" style="margin-top:6px">
<div class="num" style="background:var(--c-warn)">4</div>
<div>🧑‍🏫 それでも ダメなら <b>先生</b> に</div>
</div>

---

## いきなり 先生に 聞かない 理由

<div class="card">

### 自分で 解こう とする時間 が 一番 のびる！

</div>

<br>

- 自分で 考える → **力がつく**
- 友だちと 話す → **新しい 視点**
- AIに 相談 → **いろんな 方法**

<br>

先生に 聞くのは **最後の手段**。 でも 困ったら ちゃんと 聞いてOK！

---

<!-- _class: section -->

# 4. AI を 相談相手 に

---

## AIに「コードを 書かせない」 理由

<div class="ng">

### ❌ ダメな使い方
「もぐらたたきゲームを Scratchで 全部 作って」<br>
→ 動いても **自分の作品 じゃない**。 卒業要件 に なりません！

</div>

<br>

<div class="ok">

### ✅ 良い使い方
「**変数の リセット は どこに 書く？**」<br>
「**カウントダウン の しくみ を おしえて**」<br>
→ **考え方** を 教えてもらう

</div>

---

## 良い 相談 の 書き方

<div class="chat me">
<div class="who">👤 わたし</div>
Scratchで <b>もぐらたたきゲーム</b> を 作っています。<br>
モグラを クリックしたら <b>スコアが 1上がる</b> ようにしたい です。<br>
クリックしたら 隠れるところまで できました。<br>
<b>どんなブロック</b> を 使えば 良いですか？
</div>

<br>

→ ポイント：**「何を作っているか」 「どこまで できたか」 「何を 知りたいか」** の3つ。

---

## AIへの 質問テンプレート

<div class="card">

```
わたしは Scratchで 〔何〕を 作っています。

今 〔ここまで〕は できています。
でも 〔ここ〕で 詰まっています。

〔どんなブロック / 考え方〕を 使えば 良いですか？
コードは 書かないで、ヒント だけ ください。
```

</div>

> 大事：「**コードは 書かないで**」 と 必ず 入れる！

---

## AI の 答え も 「ホンモノ」じゃない

<div class="card tip">

### 🤖 AIは ときどき まちがえる

- ある はずの ブロックを 「ある」と 言う
- ない はずの ブロックを 「ある」と 言う
- 動かない コードを 出す

</div>

<br>

→ 必ず **自分で たしかめる**。 動かなかったら **追加プロンプト** ！

---

<!-- _class: section -->

# 5. やってみよう
## 55分 個別制作

---

<!-- _class: handson -->

## やることリスト（55分）

| ステップ | やること | 時間 |
|---|---|---|
| ① | 企画書を 見直す （大きすぎたら 小さく） | 5分 |
| ② | 機能を **5つ** に 分割 | 5分 |
| ③ | 機能 1つ目 を 作って 動かす | 15分 |
| ④ | 機能 2つ目 を 作って 動かす | 15分 |
| ⑤ | 機能 3つ目 を 作って 動かす | 15分 |

> 4〜5つ目 は 第3回 にまわしてOK！ **8割** まで で 大成功。

---

<!-- _class: handson -->

## 「動かない！」 で 詰まったら

<div class="card">

### よくある 3つの 原因

1. **ブロックが ペアじゃない**（「〜なら」と「もし」のセット）
2. **変数が 入ってない**（「〜にする」を 旗の下に 入れた？）
3. **スプライトが ちがう**（モグラの スクリプト 開いてる？）

</div>

> まず この 3つ を チェック！

---

<!-- _class: handson -->

## 30分ごとの 中間チェック

<div class="card">

### 自分への 質問

- 🟢 **進んでる** ？ → このまま 次へ
- 🟡 **止まってる** ？ → どこで？ AIに 聞いてみる
- 🔴 **ぐちゃぐちゃ** ？ → いったん **休憩** して 整理

</div>

<br>

> 30分 進まなかったら **手を 止めて 整理** ！

---

<!-- _class: section -->

# 6. 中間共有

---

## ここまでの 進みを みんなで 見る

<div class="card">

### 1. 5分で **今のところ** を 見せ合う
### 2. **「いい感じ！」** を 1つ 言う
### 3. **「ここ どうやって？」** を 1つ 聞く

</div>

<br>

> 全部 できてなくても OK！ **「途中」** を 見せ合うのが 大事。

---

## 友だちから 学ぶ こと

<div class="grid3">
<div class="card">

### 💡 アイデア
「そういう やり方 あったか！」

</div>
<div class="card">

### 🐛 バグの 解決
「自分と 同じ 詰まり方だ」

</div>
<div class="card">

### 🎨 見た目
「色 きれい！ まねしよ」

</div>
</div>

---

<!-- _class: section -->

# 7. まとめ

---

## 今日 できたこと

1. 企画書 → **ブロック** に 翻訳できた
2. 機能を **小さく 分割** できた
3. **「作る → 動かす」 のくりかえし** を 体験した
4. 詰まった時の **4ステップ** を おぼえた
5. AIを **相談相手** として 使えた

---

## 第3回までの 宿題

<div class="card">

### 🏠 おうちで できること

1. **半分 動く 作品** を 家族に 見せる
2. 家族から **「使ってみた感想」** を 1つ もらう
3. （余裕あれば） **残りの 機能** を 追加してみる

</div>

<br>

> ⚠️ 大きく直さない！ 細かい バグは 第3回で みんなで なおします。

---

## 次回予告

<div class="big">🐛🔧</div>

# 第3回｜テストして なおそう

完成した作品を **友だちに 使ってもらう**！<br>
バグ・分かりにくい所 の フィードバックを もらって、<br>
自分で **改善** する。

---

<!-- _class: title -->

# 作って みた おつかれさま ⚒️✨

### 「設計どおりに 作る」 第一歩

<br>

次回は **「人に 使ってもらう」** ！<br>
ここから **本物の 作品** に なります。
