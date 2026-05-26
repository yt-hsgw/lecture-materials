---
marp: true
theme: default
paginate: true
size: 16:9
header: '中学生プログラミング塾 ／ 第1回'
footer: 'コンピューターと開発環境'
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
    background: var(--c-light);
    color: var(--c-dark);
    font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif;
    padding: 60px;
  }
  section h1 { color: var(--c-primary); font-size: 52px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 38px; }
  section h3 { color: var(--c-accent); font-size: 26px; }
  section.title {
    background: linear-gradient(135deg, #2563EB 0%, #1E293B 100%);
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
    font-family: 'JetBrains Mono', 'Consolas', monospace;
    background: #0F172A; color: #E2E8F0;
    padding: 18px 22px; border-radius: 10px;
    font-size: 22px; line-height: 1.7; white-space: pre-wrap;
  }
  .card {
    background: white; border-radius: 14px;
    padding: 18px 24px; margin: 10px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.08);
  }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
  .grid4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
  .pill {
    display: inline-block; background: var(--c-primary); color: white;
    padding: 5px 16px; border-radius: 999px; font-weight: bold; font-size: 18px;
  }
  .warn { border-left: 8px solid var(--c-warn); padding-left: 18px; }
  .ok   { border-left: 8px solid var(--c-accent); padding-left: 18px; }
---

<!-- _class: title -->

# コンピューターと<br>開発環境

### 第1回 ／ 中学生プログラミング塾 ・ 初級

<br>

「コンピューターは、命令を順番に実行する機械」 — その正体を見にいこう。

---

## このコース全体の流れ

| 回 | テーマ | 何ができるようになる |
|----|------|------------------|
| **1**（今日） | コンピューターと開発環境 | Python が動く環境を作って Hello World を実行 |
| 2 | Webとインターネット | DevTools でリクエスト／レスポンスを観察 |
| 3 | プログラミング基本構文 | 変数・条件・繰り返し・関数で FizzBuzz |
| 4 | AIと開発の流れ | AI をペアプロ相手に、設計→実装→テストまで体験 |

> **このコースのゴール：** 自分で書いたコードを動かす ＋ 開発の流れを言葉で説明できる

---

## 今日のゴール

- ✅ コンピューター・OS・ファイルシステムの **役割分担** を説明できる
- ✅ **エディタ** と **実行環境** が別物であることが分かる
- ✅ 自分の手で **Python を実行** して `Hello, World!` を出せる
- ✅ 簡単な計算とエラーを **読める** ようになる

---

<!-- _class: section -->

# 1. コンピューターの役者紹介

---

## コンピューターは「命令を順番に実行する機械」

```
入力 → [ 計算 ] → 記憶 → 出力
```

これだけ。とてもシンプル。

ただし「**正確に・高速に・大量に**」できる点が、人間と違う。

---

## 中身を 4 つの役者で見る

<div class="grid4">
<div class="card">

### 🧠 CPU
計算する人

</div>
<div class="card">

### 📋 メモリ
作業机

</div>
<div class="card">

### 📚 ストレージ
本だな

</div>
<div class="card">

### 🪟 OS
店長

</div>
</div>

<br>

CPU・メモリ・ストレージは**ハードウェア**、OSはそれらを束ねる**ソフトウェア**。

---

## OS（Operating System）

OSの仕事：

- ハードウェアと **対話する**（ドライバ）
- アプリの **起動・終了** を仕切る
- **ファイルシステム** を管理する
- **ユーザー** を識別する（誰がどこに何を書けるか）

代表例：

<div class="grid3">
<div class="card">

### 🪟 Windows

</div>
<div class="card">

### 🍎 macOS

</div>
<div class="card">

### 🐧 Linux

</div>
</div>

---

<!-- _class: section -->

# 2. ファイルシステム

---

## ファイル ＝ バイト列、フォルダ ＝ 整理棚

ファイル：1個1個に **名前** と **拡張子** が付いた、コンピューターが読めるデータの塊。

```
hello.py
notes.txt
icon.png
```

拡張子（`.py`, `.txt`, `.png`）はOSが「**何で開けばいいか**」を判断するヒント。

---

## パス（Path）

ファイルの **居場所を表す住所**。

<div class="grid2">
<div>

### 絶対パス

最上位（ルート）から書く

```
/Users/yuta/work/hello.py
C:\Users\Yuta\work\hello.py
```

</div>
<div>

### 相対パス

「いま居る場所」から書く

```
./hello.py
../images/icon.png
```

`.` ＝ 今いるフォルダ<br>`..` ＝ 1つ上のフォルダ

</div>
</div>

---

## ターミナルで「いま居る場所」を見る

<div class="code">
$ pwd
/Users/yuta/work
</div>

`pwd` ＝ Print Working Directory（いま居るところを教えて）

`cd` でフォルダを移動：

<div class="code">
$ cd Documents
$ cd ..        # 1つ上に戻る
$ cd /         # ルートまで戻る
</div>

---

<!-- _class: section -->

# 3. エディタと実行環境

---

## 「書く」と「動かす」は別の道具

<div class="grid2">
<div class="card">

### ✏️ エディタ
コードを **書く・直す** ための道具

例：VS Code、Vim、Notepad++

</div>
<div class="card">

### ⚙️ 実行環境（ランタイム）
書いたコードを **動かす** 道具

例：Python、Node.js、Java、Ruby

</div>
</div>

<br>

ワープロで小説を書く → 出版社が本にする、と同じ役割分担。

---

## VS Code の何がうれしいの？

- ✅ **シンタックスハイライト**（色分け）→ ミスに気づきやすい
- ✅ **エラー下線** → 動かす前に間違いが分かる
- ✅ **拡張機能**（Python, Marp, GitLens など）でいろいろ拡張できる
- ✅ **ターミナルが内蔵** → エディタと実行が同じ画面で完結
- ✅ 無料・Windows/Mac/Linux 全部対応

---

## ターミナル ＝ 文字でコンピューターと会話する場所

GUI（クリック操作）よりも、**書いた命令を一発で実行できる**のがターミナル。

<div class="code">
$ python3 --version
Python 3.12.4

$ python3 hello.py
Hello, World!
</div>

慣れると **GUI より早くて、再現性が高い**。

---

<!-- _class: section -->

# 4. やってみよう
## ハンズオン

---

<!-- _class: handson -->

## ハンズオン全体像

| 手順 | やること |
|----|------|
| ① | VS Code を開いて、フォルダを作る |
| ② | `hello.py` を作って書く |
| ③ | ターミナルで Python の場所を確認 |
| ④ | `python3 hello.py` で実行 |
| ⑤ | 計算してみる・変数を使う |
| ⑥ | わざとエラーを出して、読む |

---

<!-- _class: handson -->

## ① 作業フォルダを作る

ターミナルで：

<div class="code">
$ cd ~
$ mkdir intro-python
$ cd intro-python
$ pwd
/Users/yuta/intro-python
</div>

VS Code で `intro-python` フォルダを開く：

<div class="code">
$ code .
</div>

> `.` は「いま居るフォルダ」

---

<!-- _class: handson -->

## ② hello.py を作る

VS Code で **新規ファイル** → `hello.py` という名前で保存。

中に書く：

<div class="code">
print("Hello, World!")
</div>

> **拡張子 `.py`** にすることで、Python のコードだとOSと VS Code が認識する。

---

<!-- _class: handson -->

## ③ Python の場所を確認

ターミナル（VS Codeの中で開ける）で：

<div class="code">
$ python3 --version
Python 3.12.4

$ which python3
/usr/local/bin/python3
</div>

<br>

`Python 3.x` が出ればOK。出なければ Python のインストールが必要。

---

<!-- _class: handson -->

## ④ 実行する

<div class="code">
$ python3 hello.py
Hello, World!
</div>

<br>

🎉 **おめでとう！** これで「自分のコードを実行した」と言える状態になった。

---

<!-- _class: handson -->

## ⑤ 計算してみる

`hello.py` を書き換え：

<div class="code">
price = 120
count = 8
total = price * count
print("合計", total, "円")
</div>

実行：

<div class="code">
$ python3 hello.py
合計 960 円
</div>

**変数**（`price`, `count`, `total`） ＝ 名前のついた箱。

---

<!-- _class: handson -->

## ⑥ わざとエラーを出してみる

```python
print("Hello, World!"     # 閉じ括弧を消した
```

実行すると：

<div class="code" style="color:#FCA5A5">
File "hello.py", line 1
    print("Hello, World!"
         ^
SyntaxError: '(' was never closed
</div>

<br>

**エラーは敵じゃなくて、味方**。「どこ・なに・どう直すか」が書いてある。

---

## エラーメッセージを読む 3 ステップ

<div class="grid3">
<div class="card">

### 1. どこ？
ファイル名と行番号

`hello.py` の `line 1`

</div>
<div class="card">

### 2. 何？
エラーの種類

`SyntaxError`

</div>
<div class="card">

### 3. どう？
詳しい説明

`'(' was never closed`

</div>
</div>

<br>

最初は読めなくて当然。**毎回この3つを声に出す** だけで、3週間後には読めるようになる。

---

<!-- _class: section -->

# 5. まとめ

---

## 今日 おぼえたこと

1. コンピューター ＝ **命令を順番に実行する機械**（CPU・メモリ・ストレージ・OS）
2. **ファイル**＝バイト列、**フォルダ**＝整理棚、**パス**＝住所
3. **エディタ**（書く）と **実行環境**（動かす）は別物
4. **ターミナル**で `python3 hello.py` → コードを実行できた
5. **エラー**は「どこ・なに・どう」の3点で読む

---

## 次回予告

<div class="emoji-big" style="text-align:center;font-size:140px">🌐</div>

# 第2回｜Webとインターネットのしくみ

ブラウザに `https://...` を入れた瞬間、何が起きているのか？<br>
**TCP/IP・DNS・HTTP** の役者と、HTML/CSS/JavaScript の住み分けを見にいく。

---

## 次回までの宿題（任意）

- VS Code と Python が **自分のPCで動く状態** を作っておく
- `hello.py` で何か **自分の好きな数字の計算** を1つ書いてみる
- できたら **次の回でみんなに見せる**

> 困ったら、教室のチャット or 講師に聞いてOK。一人で詰まる時間がいちばんもったいない。

---

<!-- _class: title -->

# おつかれさまでした！

### また 次回。

質問はいつでも歓迎です。
