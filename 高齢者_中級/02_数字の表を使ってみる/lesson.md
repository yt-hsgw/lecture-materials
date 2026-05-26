---
marp: true
theme: default
paginate: true
size: 16:9
header: '高齢者向けパソコン教室 ／ 中級 第2回'
footer: '数字の表を使ってみる（Excel家計簿）'
style: |
  :root {
    --c-primary: #00838F;
    --c-secondary: #FFA000;
    --c-accent: #43A047;
    --c-warn: #C62828;
    --c-dark: #263238;
    --c-light: #F5F7F8;
  }
  section {
    background: var(--c-light);
    color: var(--c-dark);
    font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif;
    font-size: 28px;
    line-height: 1.7;
    padding: 60px;
  }
  section h1 { color: var(--c-primary); font-size: 56px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 44px; margin-bottom: 24px; }
  section h3 { color: var(--c-accent); font-size: 32px; }
  section.title {
    background: linear-gradient(135deg, #00838F 0%, #43A047 100%);
    color: white; text-align: center;
  }
  section.title h1 { color: white; font-size: 72px; }
  section.section {
    background: var(--c-dark); color: white; text-align: center;
  }
  section.section h1 { color: var(--c-secondary); font-size: 64px; }
  section.handson { background: #E0F2F1; }
  section.handson h1 { color: var(--c-primary); }
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
  .key {
    display: inline-block;
    background: white; border: 2px solid var(--c-dark);
    border-radius: 8px; padding: 4px 14px;
    font-family: monospace; font-weight: bold; font-size: 26px;
    box-shadow: 0 3px 0 rgba(0,0,0,.2);
  }
  .ok { background: #E8F5E9; border-left: 8px solid var(--c-accent);
    padding: 16px 22px; border-radius: 8px; font-size: 28px; }
  .ng { background: #FFEBEE; border-left: 8px solid var(--c-warn);
    padding: 16px 22px; border-radius: 8px; font-size: 28px; }
  .tip { background: #FFF8E1; border-left: 8px solid var(--c-secondary);
    padding: 16px 22px; border-radius: 8px; font-size: 28px; }
  .sheet {
    border-collapse: collapse;
    font-family: 'SF Mono', 'Menlo', 'Yu Gothic', sans-serif;
    font-size: 22px;
    margin: 14px auto;
  }
  .sheet th, .sheet td {
    border: 2px solid #90A4AE;
    padding: 6px 14px;
    background: white;
  }
  .sheet th {
    background: #ECEFF1;
    color: var(--c-dark);
    font-weight: bold;
  }
  .sheet td.num {
    text-align: right;
    font-family: 'SF Mono', monospace;
  }
  .sheet td.sum {
    background: #FFF8E1;
    font-weight: bold;
    color: var(--c-warn);
  }
  .cell {
    display: inline-block;
    background: white; border: 2px solid var(--c-primary);
    padding: 4px 12px; border-radius: 4px;
    font-family: 'SF Mono', monospace;
    font-weight: bold; font-size: 26px;
  }
---

<!-- _class: title -->

# 数字の表 を<br>使ってみる

### 第2回 ／ 高齢者向け パソコン教室・中級

<br>

きょうは **「家計簿」** を Excel で 作ります 📊💴

---

## 前回の 復習

<div class="grid2">
<div class="card">

### ✅ できたこと
- Word で 文書 を 作った
- 文字を 飾った（太字・色）
- 印刷した
- **町内会の案内** が 完成

</div>
<div class="card">

### 💪 おうちで やった人？
- 家族に 手紙
- 冷蔵庫の メモ
- 病院 への 連絡

</div>
</div>

<br>

きょうは **数字** を 扱う ソフト！

---

## きょうのゴール

- ✅ **Excel** の 画面 が わかる
- ✅ **セル** に 数字や 文字を 入れられる
- ✅ <span class="cell">=SUM</span> で **合計** が出せる
- ✅ かんたんな **グラフ** が 作れる
- ✅ **1か月の 家計簿** が 1ページ 完成

---

<!-- _class: section -->

# 1. Excel って 何？

---

## 数字を 扱う 専用ソフト

<div class="big">📊</div>

<br>

紙の **「方眼紙」** が パソコン に なったもの。<br>
**自動で 計算** してくれる のが すごい！

---

## こんな時に 便利

<div class="grid3">
<div class="card">

### 💴 家計簿
毎月の 出費を 管理

</div>
<div class="card">

### 📋 名簿
町内会・サークル

</div>
<div class="card">

### 📅 予定表
旅行・行事 の 計画

</div>
</div>

<br>

「**ノートで 書いて 電卓で 計算**」 が **全部 1台 で**！

---

## Excel を 開いてみる

<div class="card step">

### 1. <b>スタートボタン</b> を クリック
### 2. <b>「Excel」</b> を 探して クリック
### 3. <b>「空白のブック」</b> を 選ぶ

</div>

<br>

→ マス目（**セル**）が いっぱい の 画面が 出ます。

---

## 画面の 見方

<div class="card">

### マス目 ＝ <b>セル</b>

</div>

<br>

- **横の 並び** ＝ 行（1, 2, 3...）
- **縦の 並び** ＝ 列（A, B, C...）
- 1つの セルの 名前 ＝ **A1** や **B3**（住所みたい）

---

## 例： A1 ／ B2 ／ C5

<table class="sheet">
<thead>
<tr><th></th><th>A</th><th>B</th><th>C</th></tr>
</thead>
<tbody>
<tr><th>1</th><td style="background:#FFFDE7"><b>A1</b></td><td></td><td></td></tr>
<tr><th>2</th><td></td><td style="background:#FFFDE7"><b>B2</b></td><td></td></tr>
<tr><th>3</th><td></td><td></td><td></td></tr>
<tr><th>4</th><td></td><td></td><td></td></tr>
<tr><th>5</th><td></td><td></td><td style="background:#FFFDE7"><b>C5</b></td></tr>
</tbody>
</table>

<br>

「**列の文字 ＋ 行の数字**」 で 場所が きまる！

---

<!-- _class: section -->

# 2. セルに 入れる

---

## 文字 と 数字、 違う？

<div class="grid2">
<div class="card">

### 📝 文字
- 左寄せ で 表示
- 例：「食費」「日付」

</div>
<div class="card">

### 🔢 数字
- 右寄せ で 表示
- 計算 できる！

</div>
</div>

<br>

→ Excel が **自動で 見分けて** くれる。

---

## 入れる 手順

<div class="card step">

### 1. セルを <b>クリック</b>（選ぶ）
### 2. キーボードで <b>文字 or 数字</b> を 打つ
### 3. <span class="key">Enter</span> で 確定

</div>

<br>

→ 次の セル に 自動で 移る！

---

## 例：かんたんな 表

<table class="sheet">
<thead>
<tr><th></th><th>A</th><th>B</th></tr>
</thead>
<tbody>
<tr><th>1</th><td><b>項目</b></td><td><b>金額</b></td></tr>
<tr><th>2</th><td>米</td><td class="num">2,000</td></tr>
<tr><th>3</th><td>野菜</td><td class="num">1,500</td></tr>
<tr><th>4</th><td>魚</td><td class="num">800</td></tr>
</tbody>
</table>

<br>

A列＝項目（文字）・ B列＝金額（数字）。 シンプル！

---

## オートフィル ＝ 自動で 連番

<div class="card step">

### 月／火／水／木... を 一気に 入れる

### 1. 「月」 だけ 入れる
### 2. セルの <b>右下の 小さい四角</b> を つかむ
### 3. 下に <b>ドラッグ</b>

</div>

<br>

→ 火・水・木・金・土・日 が **自動で 入る**！

---

<!-- _class: section -->

# 3. 計算 してみる

---

## 計算式は <b>=</b> から 始める

<div class="card">

### セルに <b>=A1+B1</b> と入れると<br>「A1 + B1 の答え」 が 出る！

</div>

<br>

<table class="sheet">
<thead>
<tr><th></th><th>A</th><th>B</th><th>C</th></tr>
</thead>
<tbody>
<tr><th>1</th><td class="num">100</td><td class="num">200</td><td class="num sum">=A1+B1 → 300</td></tr>
</tbody>
</table>

---

## 4つの 計算記号

| 記号 | 意味 |
|---|---|
| <span class="key">+</span> | 足す |
| <span class="key">-</span> | 引く |
| <span class="key">*</span> | かける（×ではない！） |
| <span class="key">/</span> | わる（÷ではない！） |

<br>

例：<span class="cell">=10*5</span> → 50

---

## SUM 関数 ＝ 合計を 一発

<div class="card">

### <span class="cell">=SUM(B2:B10)</span><br>「B2 から B10 までの 合計」

</div>

<br>

10個 でも 100個 でも、 **範囲 を 指定するだけ**！<br>
一個ずつ <span class="cell">+</span> しなくて OK。

---

## 例：家計簿の 合計

<table class="sheet">
<thead>
<tr><th></th><th>A</th><th>B</th></tr>
</thead>
<tbody>
<tr><th>1</th><td><b>項目</b></td><td><b>金額</b></td></tr>
<tr><th>2</th><td>食費</td><td class="num">25,000</td></tr>
<tr><th>3</th><td>光熱費</td><td class="num">12,000</td></tr>
<tr><th>4</th><td>通信費</td><td class="num">8,000</td></tr>
<tr><th>5</th><td>医療費</td><td class="num">5,000</td></tr>
<tr><th>6</th><td><b>合計</b></td><td class="num sum">=SUM(B2:B5)<br>50,000</td></tr>
</tbody>
</table>

---

## よく使う 関数 4つ

<div class="grid2">
<div class="card">

### 合計
<span class="cell">=SUM(範囲)</span>

</div>
<div class="card">

### 平均
<span class="cell">=AVERAGE(範囲)</span>

</div>
<div class="card">

### 最大
<span class="cell">=MAX(範囲)</span>

</div>
<div class="card">

### 最小
<span class="cell">=MIN(範囲)</span>

</div>
</div>

---

<!-- _class: section -->

# 4. 表を 飾る

---

## 罫線（けいせん）で 見やすく

<div class="card step">

### 1. <b>表 全体</b> を なぞって 選ぶ
### 2. 上の <b>「罫線」ボタン</b>（田 のマーク）
### 3. <b>「格子」</b> を 選ぶ

</div>

<br>

→ マス目の **黒い線** が ちゃんと 出る！

---

## 数字を <b>「円」</b> 表示に

<div class="card step">

### 1. 数字の セルを 選ぶ
### 2. 上の <b>「¥」（円マーク）</b> ボタンを 押す

</div>

<br>

→ **25000** が **¥25,000** に！<br>
カンマ も 自動で つく。

---

## 色を 付ける

<div class="grid2">
<div class="card">

### 🎨 セルの 色
背景を 色付け<br>（赤＝注意、黄＝強調）

</div>
<div class="card">

### 🅰️ 文字の 色
合計を 赤く<br>マイナスを 青く

</div>
</div>

<br>

→ ぱっと 見て **わかりやすく**！

---

<!-- _class: section -->

# 5. グラフ を 作る

---

## 数字 → グラフ で 見える化

<div class="big">📊 → 📈</div>

<br>

数字 だらけ より、**棒グラフ** や **円グラフ** で 見ると 一目瞭然！

---

## グラフ の 作り方

<div class="card step">

### 1. <b>表 全体</b> を なぞって 選ぶ
### 2. 上の <b>「挿入」タブ</b> → <b>「グラフ」</b>
### 3. <b>棒グラフ や 円グラフ</b> を 選ぶ

</div>

<br>

→ クリック 3回 で グラフ 完成！

---

## グラフの 種類

<div class="grid3">
<div class="card">

### 📊 棒グラフ
**比べる** のに 便利<br>
（月ごと の 食費 など）

</div>
<div class="card">

### 🥧 円グラフ
**割合** が わかる<br>
（食費・光熱費 の 比）

</div>
<div class="card">

### 📈 折れ線
**変化** が わかる<br>
（1年の 体重 など）

</div>
</div>

---

<!-- _class: section -->

# 6. やってみよう
## 家計簿 を 作る

---

<!-- _class: handson -->

## ステップ表（35分）

| ステップ | やる事 | 時間 |
|---|---|---|
| ① | Excel を 開く | 3分 |
| ② | 項目（食費・光熱費 等） を 入れる | 5分 |
| ③ | 金額 を 入れる | 5分 |
| ④ | <span class="cell">=SUM</span> で <b>合計</b>を出す | 7分 |
| ⑤ | 罫線・円表示 で 飾る | 5分 |
| ⑥ | 円グラフ を 作る | 5分 |
| ⑦ | <b>保存</b> | 3分 |

---

<!-- _class: handson -->

## 家計簿 の 見本

<table class="sheet">
<thead>
<tr><th></th><th>A</th><th>B</th></tr>
</thead>
<tbody>
<tr><th>1</th><td><b>2026年4月 家計簿</b></td><td></td></tr>
<tr><th>2</th><td></td><td></td></tr>
<tr><th>3</th><td><b>項目</b></td><td><b>金額</b></td></tr>
<tr><th>4</th><td>食費</td><td class="num">¥45,000</td></tr>
<tr><th>5</th><td>光熱費</td><td class="num">¥18,000</td></tr>
<tr><th>6</th><td>通信費</td><td class="num">¥9,000</td></tr>
<tr><th>7</th><td>医療費</td><td class="num">¥6,000</td></tr>
<tr><th>8</th><td>交際費</td><td class="num">¥12,000</td></tr>
<tr><th>9</th><td><b>合計</b></td><td class="num sum">¥90,000</td></tr>
</tbody>
</table>

---

<!-- _class: handson -->

## 困ったら こうする

<div class="card step">

### ❓ <b>####</b> が 出た
→ セルの 幅が <b>狭すぎる</b>。 列の境目を ドラッグで 広げる

</div>

<div class="card step">

### ❓ <b>#DIV/0!</b> が 出た
→ 0で わり算 してる。 数式を 確認！

</div>

<div class="card step">

### ❓ 数字が 計算されない
→ 数字の前に <b>空白</b> や 文字 が 入っていないか？

</div>

---

<!-- _class: warn -->

# ⚠️ 安全 の ひと言

---

## 家計簿に <b>入れない</b> もの

<div class="ng">

### 危ない 情報

- **銀行口座 の 番号**
- **クレジットカード 番号**
- **暗証番号 や パスワード**
- **マイナンバー**

</div>

<br>

→ Excelファイル が <b>誰かに 渡る</b> 可能性も。 入れない 方が 安全！

---

## パスワード を つける

<div class="card step">

### 大事な ファイルは パスワード保護！

### <b>ファイル</b> → <b>情報</b> → <b>ブックの 保護</b> → <b>パスワードを 使用して 暗号化</b>

</div>

<br>

> ⚠️ パスワードを <b>忘れたら 開けない</b>！ 必ず メモを 別の場所 に。

---

<!-- _class: section -->

# 7. まとめ

---

## 今日 できたこと

1. Excel ＝ **数字の 方眼紙**
2. **セル** に 文字や 数字を 入れる
3. <span class="cell">=A1+B1</span> で **計算**
4. <span class="cell">=SUM</span> で **一発で 合計**
5. **罫線・円表示** で 見やすく
6. **グラフ** で 一目瞭然

---

## おうちで やってみる

<div class="card">

### 📊 家計簿 を 続ける

- **5月** の 家計簿 を 作る
- **去年と 比べる**（去年 4月 と 今年 4月）
- **円グラフ** で 何に 一番 使っているか 見る

</div>

<br>

> 続けると **「家計の クセ」** が 見えてくる！

---

## 次回予告

<div class="big">📸 ☁️</div>

# 第3回｜写真・動画 と クラウド

スマホの写真を **パソコンに 移して** 整理。<br>
**Googleフォト** で **家族と 共有**！

---

<!-- _class: title -->

# おつかれさま でした 📊✨

### 「数字の表 が 使える人」 に なりました

<br>

電卓 と ノートが、<br>
**1つの ファイル** に なる 便利さ！
