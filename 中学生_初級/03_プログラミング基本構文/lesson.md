---
marp: true
theme: default
paginate: true
size: 16:9
header: '中学生プログラミング塾 ／ 第3回'
footer: 'プログラミング基本構文'
style: |
  :root {
    --c-primary: #2563EB; --c-secondary: #F59E0B; --c-accent: #10B981;
    --c-warn: #EF4444; --c-dark: #1E293B; --c-light: #F8FAFC;
  }
  section { background: var(--c-light); color: var(--c-dark);
    font-family: 'Hiragino Sans','Yu Gothic',sans-serif; padding: 60px; }
  section h1 { color: var(--c-primary); font-size: 52px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 38px; }
  section h3 { color: var(--c-accent); font-size: 26px; }
  section.title { background: linear-gradient(135deg,#2563EB,#F59E0B); color: white; text-align: center; }
  section.title h1 { color: white; font-size: 68px; }
  section.section { background: var(--c-dark); color: white; text-align: center; }
  section.section h1 { color: var(--c-secondary); font-size: 60px; }
  section.handson { background: #ECFDF5; }
  section.handson h1 { color: var(--c-accent); }
  .code {
    font-family: 'JetBrains Mono','Consolas',monospace;
    background: #0F172A; color: #E2E8F0;
    padding: 18px 22px; border-radius: 10px;
    font-size: 22px; line-height: 1.7; white-space: pre-wrap;
  }
  .card { background: white; border-radius: 14px; padding: 18px 24px; margin: 10px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
  .pill { display: inline-block; background: var(--c-primary); color: white;
    padding: 5px 16px; border-radius: 999px; font-weight: bold; font-size: 18px; }
---

<!-- _class: title -->

# プログラミング<br>基本構文

### 第3回 ／ 中学生プログラミング塾 ・ 初級

<br>

**変数・条件・繰り返し・関数** — Pythonの5つの基本道具で、自分の手で書いていこう。

---

## 前回の復習

- インターネット ≠ Web
- 3人の役者：**TCP/IP・DNS・HTTP**
- 3つの言語：**HTML・CSS・JavaScript**
- DevTools で本物の通信が見える

> 今回は **コードを書く側** に回る！

---

## 今日のゴール

- ✅ **変数** — 値に名前をつけて使い回す
- ✅ **条件分岐** — 「もし〜なら」で動きを変える
- ✅ **繰り返し** — 何回も実行する
- ✅ **関数** — まとまりに名前をつけて再利用する
- ✅ **FizzBuzz** を自分の手で書ききる

---

<!-- _class: section -->

# 1. 変数

---

## 変数 ＝ 「名前のついた箱」

<div class="code">
price = 120
count = 8
total = price * count

print(total)   # 960
</div>

`=` は **代入**（数学のイコールではない）。「右の値を、左の名前の箱に入れる」。

---

## 変数を使うと、なにがうれしい？

<div class="grid2">
<div class="card">

### ❌ 値を直書き

```python
total = 120 * 8
print(120, "円 ×", 8, "個 =", total, "円")
```

値段が変わったら **2 か所** 直す必要がある。

</div>
<div class="card">

### ✅ 変数を使う

```python
price = 120
count = 8
total = price * count
print(price, "円 ×", count, "個 =", total, "円")
```

値段が変わったら **1 か所** 直すだけ。

</div>
</div>

---

## 名前のつけかた（命名規則）

<div class="card">

### ✅ おすすめ

```python
user_name = "ゆうた"
total_price = 1200
is_active = True
```

</div>

<div class="card">

### ❌ さける

```python
x = "ゆうた"            # 何のxか分からない
totalPrice = 1200       # Pythonは小文字＿区切り推奨
1st_item = "りんご"     # 数字始まりはNG
```

</div>

> **「未来の自分が読んで分かる名前」** がいちばん大事。

---

## データ型（型）

| 型 | 例 | 用途 |
|----|----|------|
| `int` | `42` | 整数 |
| `float` | `3.14` | 小数 |
| `str` | `"こんにちは"` | 文字列 |
| `bool` | `True` / `False` | 真偽 |
| `list` | `[1, 2, 3]` | リスト（あとで） |

```python
print(type(42))         # <class 'int'>
print(type("hello"))    # <class 'str'>
```

---

<!-- _class: section -->

# 2. 条件分岐

---

## 「もし〜なら」 — if 文

<div class="code">
score = 75

if score >= 80:
    print("合格！")
else:
    print("もう少し")
</div>

`:` の後 → **インデント**（半角スペース 4 つ）が **同じグループ** の合図。

---

## 比較演算子

| 記号 | 意味 |
|------|------|
| `==` | ＝ 等しい（**==** に注意、`=` は代入） |
| `!=` | ≠ 等しくない |
| `>` `>=` | より大きい / 以上 |
| `<` `<=` | より小さい / 以下 |

```python
age = 14
if age >= 12 and age <= 15:
    print("中学生かも")
```

---

## elif で 3 つ以上の枝分かれ

<div class="code">
score = 75

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("もう少し")
</div>

上から順に判定して、最初に当たった枝が実行される。

---

<!-- _class: section -->

# 3. 繰り返し

---

## for で「決まった回数」 繰り返す

<div class="code">
for i in range(5):
    print(i, "回目")

# 0 回目
# 1 回目
# 2 回目
# 3 回目
# 4 回目
</div>

`range(5)` は **0 〜 4 の5回**。`range(1, 6)` なら 1〜5。

---

## while で「条件のあいだ」 繰り返す

<div class="code">
count = 0
while count < 3:
    print("カウント:", count)
    count = count + 1
</div>

条件が **False** になるまで続く。**無限ループに注意**（`Ctrl+C` で止める）。

---

## リストを for で回す

<div class="code">
fruits = ["りんご", "みかん", "バナナ"]

for fruit in fruits:
    print(fruit, "が好き")
</div>

リストの要素を **1 つずつ取り出す** のが Python らしい書き方。

---

<!-- _class: section -->

# 4. 関数

---

## 関数 ＝ 「まとまりに名前をつける」

<div class="code">
def greet(name):
    print("こんにちは、" + name + "さん！")

greet("ゆうた")    # こんにちは、ゆうたさん！
greet("はるか")    # こんにちは、はるかさん！
</div>

`def 関数名(引数):` で **定義**。書いた後は何度でも **呼び出せる**。

---

## 戻り値（return）

<div class="code">
def add(a, b):
    return a + b

result = add(3, 4)
print(result)    # 7
</div>

**入力 → 計算 → 結果を返す**。これが関数の3点セット。

---

## 関数を使うと…

<div class="grid2">
<div class="card">

### ❌ 同じ処理を毎回書く

```python
print("こんにちは、ゆうたさん！")
print("こんにちは、はるかさん！")
print("こんにちは、たけしさん！")
```

</div>
<div class="card">

### ✅ 関数にまとめる

```python
def greet(name):
    print("こんにちは、" + name + "さん！")

greet("ゆうた")
greet("はるか")
greet("たけし")
```

直すのは **1 か所** で済む。

</div>
</div>

---

<!-- _class: section -->

# 5. やってみよう
## ハンズオン：FizzBuzz

---

## FizzBuzz とは？

<div class="card">

### ルール

1 から 15 まで順に表示。ただし：
- 3 の倍数なら **"Fizz"**
- 5 の倍数なら **"Buzz"**
- 両方の倍数（15の倍数）なら **"FizzBuzz"**

</div>

期待出力：

<div class="code">
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
</div>

---

<!-- _class: handson -->

## ステップ① まずは for ＋ if で書く

<div class="code">
for i in range(1, 16):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
</div>

`%` ＝ **割った余り**。`6 % 3 == 0` なら 6 は 3 の倍数。

---

## ⚠️ 順番に注意

<div class="grid2">
<div class="card">

### ❌ こうするとダメ

```python
if i % 3 == 0:
    print("Fizz")
elif i % 5 == 0:
    print("Buzz")
elif i % 15 == 0:
    print("FizzBuzz")
```

15 のとき先に `Fizz` で当たる → `FizzBuzz` まで届かない。

</div>
<div class="card">

### ✅ こう書く

```python
if i % 15 == 0:
    print("FizzBuzz")
elif i % 3 == 0:
    print("Fizz")
elif i % 5 == 0:
    print("Buzz")
else:
    print(i)
```

**「より厳しい条件から」** が if-elif の鉄則。

</div>
</div>

---

<!-- _class: handson -->

## ステップ② 関数化してみる

<div class="code">
def fizzbuzz(n):
    if n % 15 == 0:
        return "FizzBuzz"
    elif n % 3 == 0:
        return "Fizz"
    elif n % 5 == 0:
        return "Buzz"
    else:
        return str(n)

for i in range(1, 16):
    print(fizzbuzz(i))
</div>

「**判定する関数**」と「**呼び出すループ**」を分けると、テストしやすくなる。

---

<!-- _class: handson -->

## ステップ③ 自分でテスト

<div class="code">
print(fizzbuzz(3))    # Fizz
print(fizzbuzz(5))    # Buzz
print(fizzbuzz(15))   # FizzBuzz
print(fizzbuzz(7))    # 7
</div>

**期待値と一致するか** を1個ずつ確認。これが「テスト」のはじめの一歩。

---

## 発展課題（時間があれば）

- 数字を `1〜100` まで広げる
- 7 の倍数のときは `"Bazz"` を追加（21 のとき何が出る？）
- 入力した数字までやる関数 `fizzbuzz_to(n)` を作る
- リストとして全部返す `fizzbuzz_list(n)` を作る

> 「動いた」 → 「もっと整理できる？」 を毎回考える習慣を。

---

<!-- _class: section -->

# 6. まとめ

---

## 今日 おぼえたこと

1. **変数** — 値に名前をつけて使い回す（`name = value`）
2. **条件分岐** — `if / elif / else`、比較演算子
3. **繰り返し** — `for ... in range(...)`、`while`、`for ... in リスト`
4. **関数** — `def 名前(引数): return 値`
5. **FizzBuzz** — `%` を使った倍数判定、判定の順番が大事

---

## 次回予告

<div style="text-align:center;font-size:140px">🤖</div>

# 第4回｜AI活用と開発の流れ

AIを **ペアプロ相手** にして、設計→実装→テスト→改善 を体験する。

---

## 次回までの宿題（任意）

- FizzBuzz を **自分の言葉でコメント** つきで書き直す
- `fizzbuzz_to(n)` まで作れたら、`fizzbuzz_to(30)` の結果を **目視で確認**
- できたら **GitHub** などで共有してみる（任意）

---

<!-- _class: title -->

# おつかれさまでした！

### また 次回。
