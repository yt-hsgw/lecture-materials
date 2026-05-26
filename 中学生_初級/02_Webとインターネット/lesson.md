---
marp: true
theme: default
paginate: true
size: 16:9
header: '中学生プログラミング塾 ／ 第2回'
footer: 'Webとインターネットのしくみ'
style: |
  :root {
    --c-primary: #2563EB;
    --c-secondary: #F59E0B;
    --c-accent: #10B981;
    --c-warn: #EF4444;
    --c-dark: #1E293B;
    --c-light: #F8FAFC;
  }
  section {
    background: var(--c-light); color: var(--c-dark);
    font-family: 'Hiragino Sans','Yu Gothic',sans-serif; padding: 60px;
  }
  section h1 { color: var(--c-primary); font-size: 52px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 38px; }
  section h3 { color: var(--c-accent); font-size: 26px; }
  section.title {
    background: linear-gradient(135deg,#2563EB 0%,#10B981 100%);
    color: white; text-align: center;
  }
  section.title h1 { color: white; font-size: 68px; }
  section.section {
    background: var(--c-dark); color: white; text-align: center;
  }
  section.section h1 { color: var(--c-secondary); font-size: 60px; }
  section.handson { background: #ECFDF5; }
  section.handson h1 { color: var(--c-accent); }
  .code {
    font-family: 'JetBrains Mono','Consolas',monospace;
    background: #0F172A; color: #E2E8F0;
    padding: 18px 22px; border-radius: 10px;
    font-size: 20px; line-height: 1.7; white-space: pre-wrap;
  }
  .card {
    background: white; border-radius: 14px;
    padding: 18px 24px; margin: 10px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.08);
  }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
  .pill {
    display: inline-block; background: var(--c-primary); color: white;
    padding: 5px 16px; border-radius: 999px; font-weight: bold; font-size: 18px;
  }
---

<!-- _class: title -->

# Webとインターネットの<br>しくみ

### 第2回 ／ 中学生プログラミング塾 ・ 初級

<br>

ブラウザに `https://...` を入れた瞬間、何が起きているのか？<br>
**役者を一人ずつ** 紹介していこう。

---

## 前回の復習

<div class="grid3">
<div class="card">

### 🧠 CPU
計算する人

</div>
<div class="card">

### 📋 メモリ
作業机

</div>
<div class="card">

### 🪟 OS
店長

</div>
</div>

エディタ（書く） vs 実行環境（動かす）も別の道具。
今回はその **コンピューター同士** がどうつながっているか。

---

## 今日のゴール

- ✅ **インターネット**と**Web**がちがうもの だと分かる
- ✅ **TCP/IP・DNS・HTTP** の役者を説明できる
- ✅ **HTML・CSS・JavaScript** の住み分けが分かる
- ✅ **DevTools** を使って **本物のリクエスト／レスポンス** を見られる

---

<!-- _class: section -->

# 1. インターネット ≠ Web

---

## 「インターネット」は道、「Web」は乗り物の1つ

<div class="grid2">
<div class="card">

### 🛣️ インターネット
**世界中のコンピューターをつなぐ「道」**

物理的・論理的なネットワーク。

</div>
<div class="card">

### 🚗 Web（World Wide Web）
**その道を走る "乗り物" の1つ**

ブラウザでページを見る仕組み。

</div>
</div>

<br>

ほかの「乗り物」例：メール（SMTP）、ファイル転送（FTP）、ビデオ通話、オンラインゲーム…

---

## ブラウザに `https://` と入れた瞬間に何が起きる？

```
1. ブラウザ：「example.com の IP アドレス、教えて」
2. DNS    ：「93.184.216.34 だよ」
3. ブラウザ：「93.184.216.34 にHTMLください」
4. サーバー：「はい、HTML どうぞ」
5. ブラウザ：「CSSもください」「画像もください」…
6. ブラウザ：受け取ったものを画面に組み立てる
```

これを **0.5 秒以内** にやっている。

---

<!-- _class: section -->

# 2. 3 人の役者：TCP/IP・DNS・HTTP

---

## 役者①：TCP/IP — 「住所と配達ルール」

<div class="grid2">
<div>

### IP
**コンピューターの住所**（IPアドレス）

例：`93.184.216.34`<br>例：`2606:2800:220:1:248:1893:25c8:1946`（IPv6）

</div>
<div>

### TCP
**届け方のルール**

- 順番が乱れない
- 抜け落ちない
- 確認しながら送る

</div>
</div>

<br>

> 「住所だけ知ってても届かない。書留みたいなしっかりした配達ルールが TCP」。

---

## 役者②：DNS — 「電話帳」

人間：`https://www.youtube.com` と書きたい<br>
コンピューター：`172.217.31.142` を知りたい

<br>

DNS（Domain Name System） ＝ **名前 → IP の変換** をしてくれる電話帳。

<div class="code">
$ nslookup www.youtube.com
Server:		192.168.1.1
Address:	192.168.1.1#53

Name:	www.youtube.com
Address: 172.217.31.142
</div>

---

## 役者③：HTTP — 「リクエストとレスポンス」

ブラウザとサーバーの **会話のフォーマット**。

<div class="grid2">
<div>

### 📨 リクエスト

```http
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
```

</div>
<div>

### 📦 レスポンス

```http
HTTP/1.1 200 OK
Content-Type: text/html

<html>...</html>
```

</div>
</div>

`200 OK` ＝ 成功。`404 Not Found`、`500 Server Error` など番号で意味が決まっている。

---

## HTTPS の "S" は「ひみつ」

<div class="grid2">
<div class="card">

### 🌐 http://
**そのまま流れる**

途中で見られる可能性あり

</div>
<div class="card">

### 🔒 https://
**暗号化される**

途中で見られても読めない

</div>
</div>

<br>

> 銀行・ログイン・SNS は **必ず https://**。アドレスバーの 🔒 マークを確認するクセを。

---

<!-- _class: section -->

# 3. Webページの3つの層：HTML / CSS / JS

---

## 「家」にたとえると

<div class="grid3">
<div class="card">

### 🧱 HTML
**骨組み**

部屋の数、ドア、窓<br>(構造)

</div>
<div class="card">

### 🎨 CSS
**装飾**

壁紙、色、フォント<br>(見た目)

</div>
<div class="card">

### ⚡ JavaScript
**仕掛け**

照明スイッチ、自動ドア<br>(動き)

</div>
</div>

<br>

3つは **役割が違う言語**。1つの Webページに混ざって入っている。

---

## 最小の HTML

<div class="code">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;はじめてのページ&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;こんにちは、世界！&lt;/h1&gt;
    &lt;p&gt;これは段落です&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</div>

タグ `<h1>...</h1>` で **「ここからここまで見出し」** と意味付けする。

---

## 最小の CSS

<div class="code">
body {
  background: #F8FAFC;
  font-family: sans-serif;
}
h1 {
  color: #2563EB;
  font-size: 32px;
}
</div>

**セレクタ { プロパティ: 値 }** の構造。

「`h1` を見つけて、青色・32pxにする」

---

## 最小の JavaScript

<div class="code">
const button = document.querySelector("#hello");
button.addEventListener("click", () =&gt; {
  alert("ボタンが押されたよ！");
});
</div>

イベント（クリック・キー入力など）を **拾って動かす**。

---

<!-- _class: section -->

# 4. やってみよう
## ハンズオン

---

<!-- _class: handson -->

## ハンズオン全体像

| 手順 | やること |
|----|------|
| ① | 自分でHTMLファイルを作る |
| ② | ブラウザで開く |
| ③ | DevTools で要素を見る |
| ④ | DevTools の Network でリクエストを見る |
| ⑤ | わざとエラーを起こして 404 を観察 |

---

<!-- _class: handson -->

## ① index.html を作る

VS Code で `web-test/` フォルダを作って、その中に `index.html`：

<div class="code">
&lt;!DOCTYPE html&gt;
&lt;html lang="ja"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;はじめてのページ&lt;/title&gt;
    &lt;style&gt;
      body { background: #F1F5F9; font-family: sans-serif; }
      h1 { color: #2563EB; }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;こんにちは、Web！&lt;/h1&gt;
    &lt;p id="msg"&gt;クリックしてね&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</div>

---

<!-- _class: handson -->

## ② ブラウザで開く

ファイルを **ダブルクリック** するか、ブラウザに **ドラッグ&ドロップ**。

URL バーが `file:///Users/.../index.html` になっていればOK。

> サーバーを通さなくても、ブラウザ単体でHTMLは表示できる。

---

<!-- _class: handson -->

## ③ DevTools で要素を見る

ページ上で **右クリック → 検証**（または `F12` / `Cmd+Opt+I`）。

「**Elements**（要素）」タブで、自分が書いた `<h1>` や `<p>` が見える。

タグをクリック → 画面の対応箇所がハイライトされる。

> 世界中のサイトで同じことができる。**Yahoo!でも YouTube でも、HTML が見える**。

---

<!-- _class: handson -->

## ④ Network タブで通信を見る

「**Network**（ネットワーク）」タブを開いた状態で、ページを **再読み込み（F5 / Cmd+R）**。

ずらっと並んだ行のひとつをクリック：

- **Headers**：HTTPのリクエスト・レスポンスがそのまま見える
- **Status**：`200 OK` などのコード
- **Type**：HTML、CSS、JS、画像など

---

<!-- _class: handson -->

## ⑤ わざと 404 を出してみる

`index.html` に：

```html
<img src="not-found.jpg">
```

ブラウザで再読み込み → Network タブを見ると…

<div class="code" style="color:#FCA5A5">
not-found.jpg    404    image
</div>

**「ファイルがありませんでした」** という赤い行が出る。

**404 はサーバーからの "それはありません" メッセージ**。

---

<!-- _class: section -->

# 5. まとめ

---

## 今日 おぼえたこと

1. **インターネット**（道）≠ **Web**（乗り物）
2. **TCP/IP**（住所＋ルール）／ **DNS**（電話帳）／ **HTTP**（会話）
3. **HTTPS** は暗号化された通信。ログインは必ずこれ
4. Webページは **HTML（骨組み）／ CSS（装飾）／ JS（仕掛け）** の3層
5. **DevTools** で世界中のサイトの中身が見える

---

## 次回予告

<div style="text-align:center;font-size:140px">🐍</div>

# 第3回｜プログラミング基本構文

**変数・条件・繰り返し・関数** を Python で書く。最後は **FizzBuzz** に挑戦！

---

## 次回までの宿題（任意）

- 自分の好きなサイトで **DevTools** をひらいて、`<h1>` を1つ見つけてくる
- できたら **どんなタグが使われているか** を1つ書き留める
- VS Code で `index.html` を1ファイル作って、自己紹介ページを作る（次の回でちょこっと使う）

---

<!-- _class: title -->

# おつかれさまでした！

### また 次回。

質問はいつでも歓迎です。
