---
marp: true
theme: default
paginate: true
size: 16:9
header: '小学生プログラミング教室 ／ 中級 第2回'
footer: 'Scratchでゲームを作ろう（後編）'
style: |
  :root {
    --c-primary: #FF8C1A; --c-secondary: #FCBD19; --c-accent: #4C97FF;
    --c-warn: #FF4D6D; --c-dark: #2D3436; --c-light: #FFF8EE;
  }
  section { background: var(--c-light); color: var(--c-dark);
    font-family: 'Hiragino Maru Gothic ProN','M PLUS Rounded 1c',sans-serif; padding: 60px; }
  section h1 { color: var(--c-primary); font-size: 54px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 40px; }
  section h3 { color: var(--c-accent); font-size: 28px; }
  section.title { background: linear-gradient(135deg,#FF8C1A,#FCBD19); color: white; text-align: center; }
  section.title h1 { color: white; font-size: 70px; }
  section.section { background: var(--c-dark); color: white; text-align: center; }
  section.section h1 { color: var(--c-secondary); font-size: 60px; }
  section.handson { background: #E3F2FD; }
  section.handson h1 { color: var(--c-accent); }
  .card { background: white; border-radius: 14px; padding: 18px 24px; margin: 12px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
  .grid4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
  .big { font-size: 64px; font-weight: bold; text-align: center; }
  .blk { display: inline-block; padding: 8px 16px; margin: 4px; border-radius: 10px;
    color: white; font-weight: bold; font-size: 18px; box-shadow: 0 2px 0 rgba(0,0,0,.15); }
  .blk-event{background:#FFD500;color:#6B5300} .blk-motion{background:#4C97FF}
  .blk-look{background:#9966FF} .blk-control{background:#FFAB19}
  .blk-sense{background:#5CB1D6} .blk-op{background:#59C059}
  .blk-var{background:#FF8C1A} .blk-sound{background:#CF63CF}
---

<!-- _class: title -->

# Scratchでゲームを<br>作ろう（後編）

### 第2回 ／ 小学生プログラミング教室・中級

<br>

きょうは **「もぐらたたき」を 完成させる** 回！🏆⏱️🔊

---

## 前回の復習

<div class="grid3">
<div class="card">

### 🐱 スプライト
モグラを 追加した

</div>
<div class="card">

### 🧱 ブロック
9色 ＝ なかま分け

</div>
<div class="card">

### 🐹 ずっと
出たり消えたり

</div>
</div>

<br>

**「動く骨組み」 は できた**。今日は **「ゲームにする」** ！

---

## きょうのゴール

- ✅ **変数（スコア）** を作れる
- ✅ **タイマー** で時間制限をつけられる
- ✅ **効果音** を鳴らせる
- ✅ **ゲームオーバー画面** を出せる
- ✅ **完成 → 友だちと交換プレイ** で発表会

---

<!-- _class: section -->

# 1. スコアを 表示しよう

---

## 変数（へんすう）＝「数を覚えるハコ」

<div class="big">📦</div>

スコア、タイマー、レベル、HP… **覚えておきたい数** はぜんぶ変数。

<br>

Scratchでは **🟧 変数** のカテゴリで作る。

---

## スコア変数を 作る

<div class="card">

### 1. 左メニュー **🟧 変数** をクリック

### 2. **「変数を作る」** を押す

### 3. 名前に **「スコア」** と入力 → OK

</div>

→ ステージの **左上に「スコア 0」** が表示される！

---

## モグラがヒットしたら +1

第1回の「クリックされたとき」スクリプトに **1行 追加**：

<div class="card">

<span class="blk blk-event">🟡 このスプライトが クリックされたとき</span>
<span class="blk blk-var">🟧 スコア を 1 ずつ変える</span> ← 追加！
<span class="blk blk-look">🟣 隠す</span>

</div>

これで **モグラを叩くたびに スコアが +1** ！

---

## ゲーム開始時に スコアをリセット

旗が押されたときに **スコアを0に戻す**：

<div class="card">

<span class="blk blk-event">🟡 旗が押されたとき</span>
<span class="blk blk-var">🟧 スコア を 0 にする</span> ← 追加！
<span class="blk blk-look">🟣 隠す</span>
<span class="blk blk-control">🟠 ずっと ↓ </span>
...

</div>

> **「リセットを忘れる」** ありがち。最初に必ず 0 にする クセを。

---

<!-- _class: section -->

# 2. タイマーで 時間制限

---

## タイマー変数 を 作る

<div class="card">

### スコアと同じ手順で **「のこり時間」** という変数を作る

</div>

<br>

このタイマーは **ステージ専用** にすると分かりやすい：

ステージ（一番右下の青い四角）を選択 → スクリプト を書く。

---

## ステージのスクリプト：時間を減らす

<div class="card">

<span class="blk blk-event">🟡 旗が押されたとき</span>
<span class="blk blk-var">🟧 のこり時間 を 30 にする</span>
<span class="blk blk-control">🟠 ずっと ↓ </span>
　<span class="blk blk-control">🟠 1秒 待つ</span>
　<span class="blk blk-var">🟧 のこり時間 を -1 ずつ変える</span>
　<span class="blk blk-control">🟠 もし のこり時間 = 0 なら ↓ </span>
　　<span class="blk blk-event">🟡 「ゲーム終了」を送る</span>
　　<span class="blk blk-control">🟠 すべてを止める</span>

</div>

---

## 「メッセージを送る」 って？

<div class="card">

### イベントの一種
スプライト同士の **「呼びかけ」** に使う

</div>

<br>

ステージから **「ゲーム終了」** を送る<br>
↓<br>
モグラ全員が **「ゲーム終了を受け取ったら」** で反応できる

→ 大きなゲームほど **必須のテクニック**！

---

## モグラ側：終了したら 隠れる

モグラのスクリプトに 追加：

<div class="card">

<span class="blk blk-event">🟡 「ゲーム終了」を受け取ったとき</span>
<span class="blk blk-look">🟣 隠す</span>

</div>

> これで モグラは ピタッ と動きを止めて隠れる。

---

<!-- _class: section -->

# 3. 効果音を 鳴らそう

---

## ゲームの「気持ちよさ」は 効果音から

<div class="big">🔊</div>

「叩いた！」「ヒットした！」 を **音** で伝えると 楽しさ倍増。

<br>

Scratchの **🟪 音** カテゴリ にある。

---

## 効果音を 追加する

<div class="card">

### 1. モグラのスプライトを 選ぶ

### 2. 上の **「音」タブ** をクリック

### 3. 左下の **🔊 マーク** → 「音を選ぶ」

### 4. **「Pop」** や **「Boing」** など 短い音を選ぶ

</div>

---

## クリックで 音を鳴らす

クリックされたときのスクリプトに 1行 追加：

<div class="card">

<span class="blk blk-event">🟡 このスプライトが クリックされたとき</span>
<span class="blk blk-sound">🟪 Pop の音を 鳴らす</span> ← 追加！
<span class="blk blk-var">🟧 スコア を 1 ずつ変える</span>
<span class="blk blk-look">🟣 隠す</span>

</div>

→ クリックするたびに **ポン！** と鳴る 🎵

---

<!-- _class: section -->

# 4. ゲームオーバー画面

---

## 終了の しらせ を 出す

新しいスプライト として「ゲームオーバー文字」を 追加：

<div class="card">

### 1. **「スプライトをえらぶ」** → 「**ペイント**」（自分で描く）

### 2. **テキスト** で 「GAME OVER!」 と書く

### 3. **大きく・カラフルに**

</div>

---

## ゲームオーバー文字のスクリプト

<div class="card">

<span class="blk blk-event">🟡 旗が押されたとき</span>
<span class="blk blk-look">🟣 隠す</span>

<span class="blk blk-event">🟡 「ゲーム終了」を受け取ったとき</span>
<span class="blk blk-look">🟣 表示する</span>
<span class="blk blk-look">🟣 最前面へ移動する</span>

</div>

→ 最初は見えなくて、終わったら ドーン！と出てくる。

---

<!-- _class: section -->

# 5. やってみよう
## ハンズオン

---

<!-- _class: handson -->

## やることリスト（50分）

| ステップ | やること | 時間 |
|---|---|---|
| ① | スコア変数 を作る・表示 | 10分 |
| ② | クリックで +1、開始時に 0 | 10分 |
| ③ | のこり時間 変数 + 1秒ずつ減らす | 15分 |
| ④ | 効果音を 入れる | 5分 |
| ⑤ | ゲームオーバー画面 | 10分 |

---

<!-- _class: handson -->

## 詰まったら 確認すること

<div class="card">

### ❓ スコアが 増えない
→ クリックされたとき の中に「スコア を 1ずつ変える」 入ってる？

</div>

<div class="card">

### ❓ タイマー が 止まらない
→ もし のこり時間 = 0 なら の中に「すべてを止める」 入ってる？

</div>

<div class="card">

### ❓ 音が 鳴らない
→ 「音」タブで 音を 追加した？  パソコンの音量は？

</div>

---

<!-- _class: section -->

# 6. 発表会・交換プレイ

---

## 発表のしかた

<div class="card">

### 1. **緑の旗 をクリック** → 動くことを確認

### 2. となりの人と **席を交代**

### 3. 相手のゲームを **30秒だけ プレイ**

### 4. **「いいね！」 を1つ** 伝える

</div>

> 「ここのアイデアいいね」「効果音 おもしろい」 など、**具体的に**。

---

## 自由カスタマイズ（時間があれば）

<div class="grid2">
<div class="card">

### 🌈 見た目
- 背景 を変える
- モグラの色を変える
- スプライトを 別の生き物に

</div>
<div class="card">

### 🎮 ゲーム性
- モグラの数を 増やす
- スピードを 速くする
- **「叩いてはいけない」** モグラを混ぜる

</div>
</div>

---

<!-- _class: section -->

# 7. まとめ

---

## 今日 完成したこと

1. **変数** で スコア・タイマー を覚えられる
2. **メッセージ** でスプライト同士が やりとりできる
3. **効果音** でゲームが 気持ちよくなる
4. **ゲームオーバー画面** で 結果を見せられる
5. **自分のゲームを 完成** させた！

---

## 次回予告

<div class="big">🌐✏️</div>

# 第3回｜HTMLで 自己紹介ページ

Scratchから 卒業して、こんどは **Webページ** を 自分で作ります。<br>
「**家族に見せる じぶんの1ページ**」がゴール！

---

## 次回までの 任意の宿題

- 今日のゲームを **おうちで 家族と遊ぶ**
- 「自分の好きなものを **3つ**」 考えておく（次回 自己紹介ページで使う）
- ゲームの **保存・スクラッチアカウントへの公開**（やる場合は 保護者と相談）

---

<!-- _class: title -->

# 完成 おめでとう！

### 「自分で 作ったゲーム」 が 1つ できました 🎉

次回 もっと別のものに 挑戦してみよう。
