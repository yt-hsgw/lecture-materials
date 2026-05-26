---
marp: true
theme: default
paginate: true
size: 16:9
header: '小学生プログラミング教室 ／ 上級 第3回'
footer: 'テストしてなおそう'
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
  .label-bug { background: var(--c-warn); color: white;
    padding: 3px 12px; border-radius: 999px; font-weight: bold; font-size: 14px; }
  .label-ui { background: var(--c-secondary); color: var(--c-dark);
    padding: 3px 12px; border-radius: 999px; font-weight: bold; font-size: 14px; }
  .label-ok { background: var(--c-accent); color: white;
    padding: 3px 12px; border-radius: 999px; font-weight: bold; font-size: 14px; }
  .matrix { display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
    background: var(--c-dark); padding: 8px; border-radius: 12px; }
  .matrix > div { background: white; padding: 14px; border-radius: 8px; text-align: center; }
  .matrix > div b { display: block; color: var(--c-primary); font-size: 16px; margin-bottom: 4px; }
---

<!-- _class: title -->

# テストして<br>なおそう

### 第3回 ／ 小学生プログラミング教室・上級

<br>

きょうは **「動く」 → 「使える」** へ！ 🐛🔧

---

## 前回の 復習

<div class="grid3">
<div class="card">

### ⚒️ 8割 完成
機能を 3つ ぐらい

</div>
<div class="card">

### 🤖 AIに 相談
コードは 自分で

</div>
<div class="card">

### 🔁 小さく作って 動かす
中間チェックの 習慣

</div>
</div>

<br>

おうちで 家族に 見せてみた？ どんな **「使ってみた感想」** が もらえた？

---

## きょうのゴール

- ✅ **「動く」と「使える」 のちがい** がわかる
- ✅ 自分で **3種類のテスト** ができる
- ✅ 友だちに **使ってもらえる**
- ✅ もらった意見を **3つに 分類** できる
- ✅ **直す順番** を 自分で 決められる

---

<!-- _class: section -->

# 1. テスト って 何？

---

## 「動く」 と 「使える」 は ちがう

<div class="big">⚙️ ≠ 😊</div>

<div class="grid2">
<div class="ng">

### 動く
- プログラムが エラーで 止まらない
- 旗を押すと 反応する

</div>
<div class="ok">

### 使える
- **見て すぐ わかる**
- **触って 楽しい**
- **困らず 最後まで 進める**

</div>
</div>

<br>

上級コースの ゴールは **「人に 使ってもらえた」** ＝ **使える** に することなんだ。

---

## 3種類の テスト

<div class="grid3">
<div class="card" style="border-top:6px solid var(--c-primary)">

### 🧐 ① 自分テスト
自分で **5分** あちこち さわる

</div>
<div class="card" style="border-top:6px solid var(--c-accent)">

### 👫 ② 友だちテスト
**何も教えず** 渡して 見守る

</div>
<div class="card" style="border-top:6px solid var(--c-secondary)">

### 👨‍👩‍👧 ③ 本気テスト
**ターゲット の人** に 使ってもらう

</div>
</div>

<br>

きょう やるのは **①と②**！

---

<!-- _class: section -->

# 2. バグ ／ 使いにくさ

---

## バグ と 使いにくさ は べつもの

<div class="card">

### <span class="label-bug">🐛 バグ</span> ＝ 動かない／こわれてる
- スコアが マイナスに なる
- 旗を押しても 何も 起きない
- 音が ぜんぶ 鳴らない

</div>

<div class="card">

### <span class="label-ui">🤔 使いにくさ</span> ＝ 動くけど 分からない
- ボタンが 小さくて 押しにくい
- どこから 始めればいい？
- 終わった のか 分からない

</div>

---

## どっちも 大事！

<div class="card tip">

### 💡 順番は バグ → 使いにくさ

</div>

<br>

- **バグ** は <b>動かない</b> から まず 直す
- **使いにくさ** は <b>もっと よくなる</b> ところ

<br>

→ **同時に 直そうとしない！** ぐちゃぐちゃに なる。

---

<!-- _class: section -->

# 3. 自分 テスト

---

## 自分テスト の チェックリスト

<div class="card">

### 5分で やる 10項目

1. ✅ 旗を **5回** 押して、毎回 同じ動き？
2. ✅ 全部の **ボタン** を 1回ずつ 押した？
3. ✅ スコアは **0から** 始まる？
4. ✅ 終了したら **ちゃんと 止まる**？
5. ✅ もう一度 旗 → **リセット** される？
6. ✅ 全部の **音** が 鳴る？
7. ✅ **画面の はじまで** 動かしても 大丈夫？
8. ✅ **超速く** クリックしても 平気？
9. ✅ 何もしない で 30秒 待っても OK？
10. ✅ **タイトル画面 → 結果画面** まで 通せる？

</div>

---

## 「わざと 変な操作」 で テスト

<div class="card">

### こわし方を 探そう

- 旗を **連打** する
- ボタンを **同時に** 押す
- スコアを **わざと 0** にする
- タイマーが **0秒** で 開始した らどうなる？

</div>

> プログラマーは これを **「いじわるテスト」** って 言うよ。

---

<!-- _class: section -->

# 4. 友だち テスト

---

## 友だちテスト の ルール

<div class="card">

### 1. 友だちに **作品を 渡す**

### 2. **何も 説明しない**！（タイトルだけ）

### 3. **メモを 取りながら** 黙って 見る

### 4. 友だちが 困った所 を 書きとめる

</div>

<br>

> ⚠️ 「こうやって 使うんだよ」 は ぜったい 言わない！<br>
> **困るのが** いちばん 大事な 情報。

---

## メモシート ＝ 観察用

<div class="card">

```
こまった所：
□ ボタンの 場所が わからなかった
□ ルールが 分からなかった
□ どこで 終わるか 分からない
□ もう一度 やる 方法 ?
□ その他：________________________________

楽しかった所：
□ ____________________________________
```

</div>

---

## 友だちに 聞く 3つの 質問

<div class="grid3">
<div class="card">

### ❓ どこで 止まった？
**こまった瞬間** を 教えてもらう

</div>
<div class="card">

### ❓ 何が 楽しかった？
**良かった所** も 大事！

</div>
<div class="card">

### ❓ もう一度 やりたい？
**満足度** が 一発で 分かる

</div>
</div>

---

## 言われても 落ち込まない！

<div class="card tip">

### 💡 マイナスの 意見は <b>「ごほうび」</b>

</div>

<br>

- 「分からない」と 言われた ＝ **直せる ヒント**
- 「つまらない」と 言われた ＝ **改善の チャンス**
- 言われない 方が **ヤバい**！ そのまま 公開 されちゃう。

<br>

→ 友だちに **「ありがとう」** と 言おう。

---

<!-- _class: section -->

# 5. なおし方

---

## もらった意見を 3つに 分類

<div class="grid3">
<div class="card" style="border-top:6px solid var(--c-warn)">

### 🔥 すぐ直す
**バグ** ／ **すぐ できる** こと

</div>
<div class="card" style="border-top:6px solid var(--c-secondary)">

### ⏳ 次回まわし
**大きな 機能** は 第4回 or 後で

</div>
<div class="card" style="border-top:6px solid var(--c-accent)">

### 🤔 直さない
**自分の こだわり** は 守ってOK

</div>
</div>

<br>

→ ぜんぶ 直す必要は ない！ **自分で決める**。

---

## 直す 優先順位（マトリックス）

<div class="matrix">
<div style="background:#FFCDD2">
<b>🔥 すぐ直す</b><br>
<small>大事＋カンタン</small>
</div>
<div style="background:#FFE0B2">
<b>⏳ 計画して</b><br>
<small>大事＋むずかしい</small>
</div>
<div style="background:#C8E6C9">
<b>😄 余裕あれば</b><br>
<small>小さい＋カンタン</small>
</div>
<div style="background:#E1BEE7">
<b>❌ やらない</b><br>
<small>小さい＋むずかしい</small>
</div>
</div>

<br>

**「カンタンで 大事」** を まず 直す！

---

## バグ報告 メモ の 型

<div class="card">

```
【何を した】 旗を 5回 連打 した
【どうなった】 スコアが マイナスに なった
【どうなる はず】 0より 下に ならない
【どこで】 もぐらたたきゲーム
【何回中 何回】 5回中 5回（毎回）
```

</div>

> こう書くと、AIや 先生に 相談するのも 楽！

---

<!-- _class: section -->

# 6. やってみよう
## 55分 ハンズオン

---

<!-- _class: handson -->

## ステップ表（55分）

| ステップ | やること | 時間 |
|---|---|---|
| ① | 作品の **足りないところ** を 完成（残り20%） | 15分 |
| ② | **自分テスト**（10項目チェック） | 5分 |
| ③ | **友だちテスト**（5分ずつ ×2人） | 15分 |
| ④ | もらった意見を **3つに 分類** | 5分 |
| ⑤ | **「すぐ直す」 を 1〜2個 直す** | 15分 |

---

<!-- _class: handson -->

## 「直したい！」が 5個 ある時

<div class="card warn">

### ⚠️ 全部 一気に 直さない

</div>

<br>

1. **1つ 直す**
2. **動くか たしかめる**
3. **OK なら 次へ**

<br>

5個 一気に 直すと、**どこで こわれたか 分からない**！

---

<!-- _class: handson -->

## 直し方が わからない時

<div class="card">

### 第2回の 4ステップ を 思い出す

</div>

<br>

1. 🤔 **自分で 30分** 考える
2. 👫 **友だち** に 聞く
3. 🤖 **AIに 相談**（バグ報告 メモを そのまま）
4. 🧑‍🏫 **先生** に 聞く

> バグ報告メモが あれば、AI も すぐ 答えてくれる！

---

<!-- _class: section -->

# 7. ふり返り

---

## 改善 で 何が 変わった？

<div class="grid2">
<div class="card">

### 改善 前
- ⏱️ タイマーが 0で 止まらない
- 🎮 もう一度 ボタンが ない
- 🔊 効果音が 鳴らない

</div>
<div class="card" style="border-left:6px solid var(--c-accent);background:#E0F7FA">

### 改善 後
- ✅ 0で きちんと 止まる
- ✅ 「もう一度」 ボタン 追加
- ✅ クリック音が 鳴る

</div>
</div>

<br>

→ **「これは 直した」 を 言葉に する** と、次回の プレゼンで 使える！

---

## 「直した リスト」 を メモ

<div class="card">

### 第4回の プレゼンで 必要！

```
直したこと：
1. ____________________________________
2. ____________________________________
3. ____________________________________

直さなかった こと（理由付き）：
1. ____________________________________
```

</div>

---

<!-- _class: section -->

# 8. まとめ

---

## 今日 できたこと

1. **「動く」 と 「使える」** の ちがい
2. **3種類の テスト**（自分／友だち／本気）
3. **バグ** と **使いにくさ** を 分けて 考える
4. もらった意見を **3つに 分類**
5. **「直す順」** を 自分で 決められた

---

## 第4回までの 宿題

<div class="card">

### 🏠 プレゼン 準備

1. 作品を **おうちで 家族に 見せる**（もう一回！）
2. **「直したこと」リスト** を 仕上げる
3. **3分で 話す内容** を ざっくり 考える
   - 何を 作ったか
   - どう 作ったか
   - 苦労した所
   - 次に やりたい こと

</div>

---

## 次回予告

<div class="big">🎤✨</div>

# 第4回｜発表会

**1人 3分** で 自分の作品を プレゼン！<br>
質疑応答 も ちょっとだけ。<br>
コース修了 ！ 🎓

---

<!-- _class: title -->

# テスト おつかれさま 🔧✨

### 「使える」 作品 への 第一歩

<br>

「**人に 使ってもらえた**」 が <br>
上級コースの ゴール！<br>
次回 みんなの 作品 を 見るのが 楽しみ。
