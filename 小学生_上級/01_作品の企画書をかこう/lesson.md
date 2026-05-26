---
marp: true
theme: default
paginate: true
size: 16:9
header: '小学生プログラミング教室 ／ 上級 第1回'
footer: '作品の企画書をかこう'
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
  .grid5 { display: grid; grid-template-columns: repeat(5,1fr); gap: 10px; }
  .big { font-size: 64px; font-weight: bold; text-align: center; }
  .pill { display: inline-block; background: var(--c-primary); color: white;
    padding: 4px 14px; border-radius: 999px; font-size: 16px; font-weight: bold; margin: 2px; }
  .pill.s { background: var(--c-secondary); color: var(--c-dark); }
  .pill.a { background: var(--c-accent); }
  .pill.w { background: var(--c-warn); }
  .plan { background: white; border-radius: 14px; padding: 20px;
    box-shadow: 0 4px 0 rgba(0,0,0,.08); border-left: 8px solid var(--c-primary); }
  .plan h3 { color: var(--c-primary); }
  .mando { display: grid; grid-template-columns: repeat(3,1fr); gap: 6px;
    background: var(--c-primary); padding: 6px; border-radius: 12px; }
  .mando div { background: white; padding: 14px 10px; text-align: center;
    border-radius: 6px; font-size: 18px; font-weight: bold; }
  .mando .center { background: var(--c-secondary); color: var(--c-dark); }
  .ok { background: #E0F7FA; border-left: 6px solid var(--c-accent);
    border-radius: 10px; padding: 12px 16px; }
  .ng { background: #FFEBEE; border-left: 6px solid var(--c-warn);
    border-radius: 10px; padding: 12px 16px; }
  .screen { background: white; border: 3px solid var(--c-primary); border-radius: 12px;
    padding: 14px; min-height: 220px; box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .sticky { display: inline-block; background: #FFEB3B; padding: 8px 12px;
    margin: 4px; border-radius: 4px; font-size: 16px; font-weight: bold;
    transform: rotate(-2deg); box-shadow: 0 2px 4px rgba(0,0,0,.15); }
  .sticky.b { background: #80DEEA; transform: rotate(1deg); }
  .sticky.p { background: #F8BBD0; transform: rotate(-1deg); }
---

<!-- _class: title -->

# 作品の<br>企画書をかこう

### 第1回 ／ 小学生プログラミング教室・上級

<br>

きょうから **「自分で 考えて 作る」** スタート！ 📝✨

---

## ようこそ 上級コースへ

<div class="grid2">
<div class="card">

### 中級まで
先生の **お手本を まねる**<br>
↓<br>
ちょっと **アレンジ**

</div>
<div class="card">

### 上級では
**自分で 企画する**<br>
↓<br>
**ぜんぶ 自分で 決める**

</div>
</div>

<br>

中級は **「動いた！」** がゴール。<br>
上級は **「人に 使ってもらえた！」** がゴール。

---

## 上級 全4回スケジュール

| 回 | テーマ | やること |
|---|---|---|
| 1 | **企画書を かこう** | 紙1枚に まとめる ← きょう |
| 2 | 作品を 作ろう | Scratchで 設計どおりに |
| 3 | テストして なおそう | 友だちに 使ってもらう |
| 4 | 発表会 | 1人3分 プレゼン |

---

## きょうのゴール

- ✅ **作りたいもの** を 1つに しぼる
- ✅ **だれ向け** か はっきり させる
- ✅ **5つの項目** で 企画書を かく
- ✅ **画面**（どんな見た目か） を 紙に描く
- ✅ 友だちに **「これ 作ります」** と 説明できる

> ⚠️ きょうは **コードは 書きません**！

---

<!-- _class: section -->

# 1. 良い作品 って<br>どんなもの？

---

## ヒット作品 の 3つの 共通点

<div class="grid3">
<div class="card" style="text-align:center;border-top:6px solid var(--c-primary)">
<div style="font-size:60px">🎯</div>
<h3>① だれかに 役立つ</h3>
<p style="color:#666;font-size:14px">「困っていた人が 助かる」</p>
</div>
<div class="card" style="text-align:center;border-top:6px solid var(--c-secondary)">
<div style="font-size:60px">😄</div>
<h3>② 使うと 楽しい</h3>
<p style="color:#666;font-size:14px">「もう一回 やりたい」</p>
</div>
<div class="card" style="text-align:center;border-top:6px solid var(--c-accent)">
<div style="font-size:60px">✨</div>
<h3>③ ひと工夫 ある</h3>
<p style="color:#666;font-size:14px">「他に ない！」</p>
</div>
</div>

<br>

→ 3つ ぜんぶ そろう必要 はない。 **1つ あれば OK**。

---

## 良い 企画 / よくない 企画 の 例

<div class="ok" style="margin-bottom:14px">

### ✅ 良い企画
「**おじいちゃんと 遊べる 神経衰弱**ゲーム」<br>
→ だれ向け（おじいちゃん）・なに（神経衰弱）・工夫（大きな文字）が はっきり

</div>

<div class="ng">

### ❌ よくない企画
「**すごい ゲーム**」<br>
→ だれが？ なにが すごい？ ぜんぶ ぼんやり

</div>

---

<!-- _class: section -->

# 2. アイデアの<br>出し方

---

## マンダラ法 ＝ 9マス で 広げる

<div class="mando">
<div>家族</div>
<div>学校</div>
<div>友だち</div>
<div>毎日</div>
<div class="center">こまっている<br>こと</div>
<div>遊び</div>
<div>勉強</div>
<div>家事</div>
<div>あいさつ</div>
</div>

<br>

まんなかに **テーマ**、まわりに **思いつくこと** を どんどん。<br>
**「ヘンでもOK」** が ルール。

---

## アイデアを 広げる 3つの しつもん

<div class="grid3">
<div class="card">

### ❓ 「だれが」<br>「いつ」 こまる？
朝、夜、ごはん中…<br>
家族、ペット、自分…

</div>
<div class="card">

### ❓ もし<br>「○○ できたら」？
空が飛べたら、<br>時間が止まったら…

</div>
<div class="card">

### ❓ なにが あったら<br>うれしい？
点数アップ、<br>もぐもぐ食べる…

</div>
</div>

---

## アイデアを 1つに しぼる コツ

<div class="card">

### 「90分×4回」で できる？を チェック

</div>

<div class="grid2">
<div class="ok">

### 🟢 できそう
- 1画面の ゲーム
- 5枚カードの 神経衰弱
- 3問の クイズアプリ

</div>
<div class="ng">

### 🔴 大きすぎ
- マイクラ風 3D
- 友だちと オンライン対戦
- AI が 受け答え

</div>
</div>

<br>

**「ちっちゃくして スタート」** が 上手な人の コツ。

---

<!-- _class: section -->

# 3. 企画書 の<br>5つの 欄

---

## 企画書 ＝ ぜんぶ 紙1枚

<div class="grid5">
<div class="plan" style="border-left-color:var(--c-primary)"><h3 style="color:var(--c-primary);font-size:18px">① 名前</h3><p style="font-size:13px">作品名・キャッチ</p></div>
<div class="plan" style="border-left-color:var(--c-secondary)"><h3 style="color:#B8860B;font-size:18px">② だれ</h3><p style="font-size:13px">使う人</p></div>
<div class="plan" style="border-left-color:var(--c-accent)"><h3 style="color:var(--c-accent);font-size:18px">③ なに</h3><p style="font-size:13px">できる事</p></div>
<div class="plan" style="border-left-color:#9C27B0"><h3 style="color:#9C27B0;font-size:18px">④ 画面</h3><p style="font-size:13px">見た目</p></div>
<div class="plan" style="border-left-color:var(--c-warn)"><h3 style="color:var(--c-warn);font-size:18px">⑤ 心配</h3><p style="font-size:13px">むずかしそう</p></div>
</div>

<br>

**A4 1枚** に まとめれば、友だちに 30秒で 説明できる。

---

## ① 作品の 名前 ／ キャッチコピー

<div class="card">

### 名前 ＝ 覚えてもらえる 短い言葉

<span class="pill">🎮 ねこねこタイマー</span>
<span class="pill s">🍎 もぐもぐクイズ</span>
<span class="pill a">🏠 おうち探検ゲーム</span>

### キャッチコピー ＝ 30文字以内 で どんな作品か

「**ねこを 育てながら 集中時間を のばすアプリ**」

</div>

> 名前は **後で変えてOK**。とりあえず 仮で つける！

---

## ② だれが 使う？（ペルソナ）

<div class="card">

### こまかく 1人 を イメージする

</div>

<div class="grid2">
<div class="ok">

### 🟢 はっきり
「**小学2年生の 妹**」<br>
ひらがなだけ・大きなボタン・<br>音がほしい

</div>
<div class="ng">

### 🔴 ぼんやり
「**みんな**」<br>
→ だれにも 合わない 作品に なる！

</div>
</div>

---

## ③ なに が できる？（機能リスト）

<div class="card">

### 動詞で 3つ から 5つ

- 🎯 カードを **めくれる**
- ✅ 正解で **得点が 上がる**
- ⏱️ 30秒の **タイマー**
- 🏆 結果画面が **表示される**

</div>

> 多すぎると 作りきれない。**3〜5個** に しぼる！

---

## ④ 画面は どんな感じ？（手描き OK）

<div class="screen">

<div style="text-align:center;font-size:14px;color:#666">↓ 紙に エンピツで OK</div>

<div style="display:grid;grid-template-columns:1fr 2fr;gap:10px;margin-top:8px">
<div style="border:2px dashed #999;padding:10px;text-align:center;font-size:14px">😺<br>キャラ</div>
<div style="border:2px dashed #999;padding:10px;font-size:14px">
  得点：<b>120</b><br>のこり：<b>25秒</b><br>
  <div style="background:#FFEB3B;padding:5px;margin-top:5px;text-align:center">📋 カード</div>
</div>
</div>

</div>

<br>

**かっこよく 描かなくて OK**。 配置 が 分かれば 十分！

---

## ⑤ 心配なこと（むずかしそう）

<div class="card">

### 「ここで 詰まりそう」を 先に書いておく

- ❓ カードを めくる 動きが 作れる かな？
- ❓ 効果音は どうやって 入れる？
- ❓ タイマーと 得点を 同時に 動かせるかな？

</div>

> 第2回で 先生・AIに 聞くための **メモ** になる！

---

<!-- _class: section -->

# 4. 画面設計 ＝<br>紙の上で デザイン

---

## 画面パーツ ＝ 6種類くらい

<div class="grid3">
<div class="card">

### 📦 ハコ
背景・カード・<br>区切り

</div>
<div class="card">

### 🔘 ボタン
押すと なにかが 起こる

</div>
<div class="card">

### 📝 文字
タイトル・<br>得点・せつめい

</div>
<div class="card">

### 🖼️ 画像
キャラ・<br>背景・アイコン

</div>
<div class="card">

### 📊 メーター
得点バー・<br>タイマー

</div>
<div class="card">

### 🪟 ダイアログ
「クリア！」<br>などの 通知

</div>
</div>

---

## 付箋（ふせん） で 配置を ためす

<div class="screen">

<div style="text-align:center;font-weight:bold;font-size:18px;color:var(--c-primary)">🎮 ねこねこタイマー</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px">
<div>
  <span class="sticky">😺 ねこ画像</span><br>
  <span class="sticky b">⏱️ タイマー</span><br>
  <span class="sticky p">🍪 ごはんボタン</span>
</div>
<div>
  <span class="sticky">📈 グラフ</span><br>
  <span class="sticky b">⭐ レベル</span><br>
  <span class="sticky p">⚙️ 設定</span>
</div>
</div>

</div>

<br>

紙の付箋を **動かしながら** ベストな 配置を 見つける。

---

<!-- _class: section -->

# 5. ハンズオン
## 55分 で 企画書 1枚 完成

---

<!-- _class: handson -->

## ステップ表（55分）

| ステップ | やること | 時間 |
|---|---|---|
| ① | アイデア 出し（9マス・思いつくだけ） | 10分 |
| ② | **1つに しぼる**（3つの質問でチェック） | 5分 |
| ③ | 企画書 ①〜③ を 書く（名前・だれ・なに） | 15分 |
| ④ | 画面設計（④） を 描く | 15分 |
| ⑤ | 心配（⑤） を 書く | 5分 |
| ⑥ | 友だちに **30秒 説明** | 5分 |

---

<!-- _class: handson -->

## 上手な 進め方 の コツ

<div class="card">

### 💡 「とりあえず 書く」
1つの欄で 詰まったら **次の欄に 進む**。 あとで 戻ればOK。

</div>

<div class="card">

### 💡 「ぐちゃぐちゃ で いい」
1回で きれいに 書こうとしない。 線を 引きなおしながら。

</div>

<div class="card">

### 💡 「先生に 聞く前に 友だちに」
となりの 友だちに 説明したら、**自分でも 整理** できる！

</div>

---

<!-- _class: handson -->

## やってはいけない こと

<div class="ng">

### ⚠️ 個人情報を 入れない
本名・住所・学校名・友だちの 顔写真・電話番号 は ぜったいに NG。<br>
→ **ニックネーム・絵文字キャラ** で OK！

</div>

<div class="ng" style="margin-top:14px">

### ⚠️ コードを 書き始めない
今日は **企画だけ**！ コードは 第2回から。 <br>
「動かす」より「**考える**」を 優先しよう。

</div>

---

<!-- _class: section -->

# 6. 共有 ・ コメント

---

## 友だちの 企画書を 聞く

<div class="card">

### 1. **30秒** で 説明してもらう

### 2. 「**いいね！**」 を 1つ 言う

### 3. 「**もっと こうしたら？**」 を 1つ 言う

### 4. ペアを 交代

</div>

> 大事：「**ダメ出し**」ではなく「**良くなる ヒント**」を 言う。

---

## コメントの 例（言いかえ集）

<div class="grid2">
<div class="ng">

### 🙅 言わない
「つまらなさそう」<br>
「ぜんぜん わからない」<br>
「むずかしそう」

</div>
<div class="ok">

### 🙆 言う
「ここに 効果音が あったら 楽しそう」<br>
「キャラが もう1つ いたら かわいい」<br>
「説明文を 短くしたら 分かりやすそう」

</div>
</div>

---

<!-- _class: section -->

# 7. まとめ

---

## 今日 できたこと

1. **「自分で 企画する」** がコース全体のゴール
2. ヒット作品＝ **役立つ／楽しい／工夫** の どれか1つ
3. アイデアは **広げて → しぼる**
4. 企画書 ＝ **5つの欄 ＋ 画面設計** の 紙1枚
5. **コードを 書く前に** 紙で 考える

---

## 第2回までの 宿題

<div class="card">

### 📝 今日 書いた企画書 を おうちで 見直す

- ❓ 本当に 自分が 作りたい？
- ❓ 90分×3回で できる？
- ❓ だれが 使う？ はっきりしてる？

</div>

<br>

> もし **大きすぎたら ちっちゃくして OK**！ 第2回の 最初に 直す時間 あり。

---

## 次回予告

<div class="big">⚒️🐹</div>

# 第2回｜作品を 作ろう

企画書 どおりに **Scratchで 実装** スタート！<br>
**先生は サポート役**、自分の 設計図を 自分で 動かす。<br>
詰まったら **AI** に 相談する 方法も 紹介。

---

<!-- _class: title -->

# 企画書 おつかれさま 📝✨

### 「考える人」 への 第1歩

<br>

次回 **コードに 触る** までに、<br>
**紙の上で** いっぱい 想像しよう！
