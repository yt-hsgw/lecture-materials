---
marp: true
theme: default
paginate: true
size: 16:9
header: '中学生プログラミング塾 ／ 第4回'
footer: 'AI活用と開発の流れ'
style: |
  :root {
    --c-primary: #8B5CF6; --c-secondary: #F59E0B; --c-accent: #10B981;
    --c-warn: #EF4444; --c-dark: #1E293B; --c-light: #F5F3FF;
  }
  section { background: var(--c-light); color: var(--c-dark);
    font-family: 'Hiragino Sans','Yu Gothic',sans-serif; padding: 60px; }
  section h1 { color: var(--c-primary); font-size: 52px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 38px; }
  section h3 { color: var(--c-accent); font-size: 26px; }
  section.title { background: linear-gradient(135deg,#8B5CF6,#10B981); color: white; text-align: center; }
  section.title h1 { color: white; font-size: 68px; }
  section.section { background: var(--c-dark); color: white; text-align: center; }
  section.section h1 { color: var(--c-secondary); font-size: 60px; }
  section.handson { background: #ECFDF5; }
  section.handson h1 { color: var(--c-accent); }
  .code {
    font-family: 'JetBrains Mono','Consolas',monospace;
    background: #0F172A; color: #E2E8F0;
    padding: 18px 22px; border-radius: 10px;
    font-size: 20px; line-height: 1.7; white-space: pre-wrap;
  }
  .card { background: white; border-radius: 14px; padding: 18px 24px; margin: 10px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
  .pill { display: inline-block; background: var(--c-primary); color: white;
    padding: 5px 16px; border-radius: 999px; font-weight: bold; font-size: 18px; }
  .warn-card { border-left: 8px solid var(--c-warn); padding-left: 18px; }
---

<!-- _class: title -->

# AI活用と<br>開発の流れ

### 第4回 ／ 中学生プログラミング塾 ・ 初級

<br>

AIを **道具** として使いこなす。<br>「便利」と「確認」を、両方ちゃんとやろう。

---

## 前回の復習

3つの構文 ＋ 関数：

- 📦 変数 — `name = value`
- 🔀 条件分岐 — `if / elif / else`
- 🔁 繰り返し — `for / while`
- 🧩 関数 — `def f(x): return ...`

FizzBuzz が書けた。今回は **これを AI と一緒に育てて、テストして、改善する**。

---

## 今日のゴール

- ✅ **AI（LLM）の仕組み** をざっくり説明できる
- ✅ **プロンプト** の作り方（だれに・なに・どう）が分かる
- ✅ AIを **ペアプロ相手** として呼び出せる
- ✅ **設計 → 実装 → テスト → 改善** の流れを体験する
- ✅ AIを使うときの **「やってはいけないこと」** が言える

---

<!-- _class: section -->

# 1. AI（LLM）ってなに？

---

## AI ≠ "考える機械" — 「次の単語を予測する機械」

ChatGPT などの **LLM（Large Language Model）** がやっているのは：

```
入力：「むかしむかし、あるところに」
予測：次は おじいさん  → 確率 18%
      次は おばあさん  → 確率 12%
      次は 桃        → 確率  3%
      ...
出力：いちばん確率が高そうなものを選ぶ
```

これを **1単語ずつ、何百回もくりかえす** だけ。

---

## ちゃんと "考えて" いるわけじゃない

<div class="card warn-card">

### でも、すごく自然に見える

膨大なテキストで訓練されているので、**まるで意味を分かっているかのように** 応答する。

ただし：
- **間違えることがある**（自信ありそうに間違える）
- **古い情報を出すことがある**
- **意見を求めても "もっともらしい平均値"** を返すことが多い

</div>

---

## ハルシネーション（hallucination）

**自信たっぷりに嘘をつく現象**。

<div class="code">
質問：「徳川家康の出身地は？」
AI ：「徳川家康は鎌倉で生まれました（嘘）」
</div>

理由：「鎌倉」と「徳川」が **訓練データで近くにあったから** 統計的にもっともらしく見えた、それだけ。

> **だから、人間が必ず確認する** ことがセットになる。

---

<!-- _class: section -->

# 2. プロンプトの基本

---

## プロンプト ＝ AI への "指示書"

雑な指示 → 雑な答え。具体的な指示 → 具体的な答え。

<div class="grid2">
<div class="card warn-card">

### ❌ 雑

「Python のコード書いて」

→ なにをするコード？

</div>
<div class="card" style="border-left: 8px solid var(--c-accent); padding-left: 18px">

### ✅ 具体的

「1〜100 の FizzBuzz を Python で書いて。コメントは日本語で。」

</div>
</div>

---

## 「だれに・なに・どう」の3点セット

<div class="grid3">
<div class="card">

### 👤 だれに
（だれが読む？）

「中学生にも分かるように」<br>「初心者向けに」

</div>
<div class="card">

### 📋 なに
（何をしたい？）

「FizzBuzzを書いて」<br>「このバグを直して」

</div>
<div class="card">

### 🎨 どう
（どうやって？どんな形式で？）

「コメントつきで」<br>「箇条書きで」

</div>
</div>

---

## さらに効くテクニック

<div class="card">

### 1. **役割を与える**
「あなたは熟練のPythonエンジニアです」と冒頭につける

</div>

<div class="card">

### 2. **例を見せる**
「こういう入力→こういう出力」を1つ示す

</div>

<div class="card">

### 3. **手順を区切る**
「①〜② を順番にやって。①が終わってから②に進んで」

</div>

<div class="card">

### 4. **形式を指定する**
「JSONで返して」「コードと説明を分けて」

</div>

---

<!-- _class: section -->

# 3. AIをペアプロ相手にする

---

## ペアプログラミングとは

**2人で1台のコンピューター** を見ながらコードを書くやり方。<br>1人は書く役（ドライバー）、1人は考える役（ナビゲーター）。

<br>

AIをナビゲーターとして使うイメージ：

```
あなた（ドライバー） ⟷ AI（ナビゲーター）

「次は条件分岐を入れたい」 ⟶
                       ⟵ 「elif でこう書いたら？」
「動いたけど 15 で Fizz が出ちゃう」 ⟶
                       ⟵ 「条件の順番を入れ替えてみて」
```

---

## AI に "やってほしいこと" のパターン

<div class="card">

### 🔍 説明してもらう
「このコードを1行ずつ説明して」

</div>
<div class="card">

### 🐛 バグを探す
「動かない。エラーは○○。原因は？」

</div>
<div class="card">

### ✨ きれいに書き直す
「同じ動きでもっと簡潔に」

</div>
<div class="card">

### 🧪 テストを考える
「このコードに対するテストケースを5つ挙げて」

</div>

---

## 注意：AIに "頼みすぎない"

<div class="card warn-card">

### 全部AIに書かせると…

- **読めない・直せないコード** が手元に残る
- 動かない時に **どこから直したらいいか分からない**
- 結果的に **遅くなる**

</div>

> **「自分で1行は書く」「読んで・説明できる」** を毎回守る。

---

<!-- _class: section -->

# 4. 開発の流れ：設計→実装→テスト→改善

---

## 4ステップで考える

```
① 設計  ─ 何を作るか・どう作るか
   ↓
② 実装  ─ コードを書く
   ↓
③ テスト ─ 期待どおりか確かめる
   ↓
④ 改善  ─ もっと良くする
```

<br>

プロのエンジニアも、**この4ステップを何回も回す**。「動いたら終わり」ではない。

---

## ① 設計 — 紙とエンピツが最速

<div class="card">

### 設計＝「やりたいこと」を **書き出して整理する**

</div>

例：「数字を入れたら FizzBuzz を返す関数を作りたい」

```
入力：整数 n
処理：n が
   - 15 の倍数 → "FizzBuzz"
   - 3 の倍数  → "Fizz"
   - 5 の倍数  → "Buzz"
   - それ以外  → n をそのまま
出力：上の結果（文字列）
```

---

## ② 実装 — 設計どおりに書く

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
</div>

設計が明確なら、実装は **写し書きに近い** 作業になる。

---

## ③ テスト — "期待値" と比べる

<div class="code">
# 自分でテストを書く
assert fizzbuzz(3) == "Fizz"
assert fizzbuzz(5) == "Buzz"
assert fizzbuzz(15) == "FizzBuzz"
assert fizzbuzz(7) == "7"
print("全部OK！")
</div>

`assert` ＝ 「これ、本当？違ったらエラー出して」。<br>**書き残せば、何度でも自動で確認できる**。

---

## ④ 改善 — もっと良くするには？

- 関数名は分かりやすい？
- 同じことを繰り返してないか？
- もし `n` がマイナスだったら？ 0だったら？
- もし `n` が文字列だったら？

<br>

これを **AIに聞いてみる**：

> 「この fizzbuzz 関数を、エッジケースに強くするにはどう改善する？」

---

<!-- _class: section -->

# 5. やってみよう
## ハンズオン

---

<!-- _class: handson -->

## 今日のハンズオン

| 手順 | やること |
|----|------|
| ① | 設計をプロンプトに書き出す |
| ② | AIにコードを書いてもらう |
| ③ | コードを読んで、動かす |
| ④ | テストを5個書いて、自分で動かす |
| ⑤ | AIにレビューを依頼 → 1か所改善 |

> 今日は **疑似AI体験版** で進めます。実AIを使う場合は講師判断・保護者同意・個人情報入力なしのルールで。

---

<!-- _class: handson -->

## ① 設計をプロンプトに

たとえば「英単語のスペルを当てるゲーム」を作るとする：

<div class="code">
あなたは中学生向けのPython講師です。
次の仕様で関数を作ってください。

【入力】 正解の英単語（文字列）、ユーザーの入力（文字列）
【出力】 正解なら "Correct"、違うなら "Try again"（文字列）
【条件】 大文字小文字は区別しない

説明とコードを分けて出してください。
</div>

「だれに・なに・どう」が **全部入っている**のがポイント。

---

<!-- _class: handson -->

## ② AIからの返答（例）

<div class="code">
def check_answer(correct, user_input):
    if correct.lower() == user_input.lower():
        return "Correct"
    else:
        return "Try again"
</div>

**読んで**：`.lower()` は何をする？ `if-else` の比較はちゃんと正しい？

---

<!-- _class: handson -->

## ③ テストを書く（自分で考える）

<div class="code">
print(check_answer("apple", "apple"))   # Correct
print(check_answer("apple", "APPLE"))   # Correct
print(check_answer("apple", "banana"))  # Try again
print(check_answer("Apple", "apple"))   # Correct
print(check_answer("apple", ""))        # Try again
</div>

**「正解パターン × エラーパターン × ふちのパターン」** をそれぞれ作る。

---

<!-- _class: handson -->

## ④ AIにレビュー依頼

<div class="code">
次のPythonコードをレビューしてください：

def check_answer(correct, user_input):
    ...

【観点】
- 読みやすさ
- 入力が None や数値だったらどうなる？
- もっとシンプルに書けないか？
</div>

返ってきた中から **1か所だけ採用** して改善してみる。

---

<!-- _class: section -->

# 6. やってはいけないこと

---

## 5つのルール

<div class="card warn-card">

### 1. **個人情報を入れない**
本名・住所・学校名・電話番号・友だちの名前

</div>

<div class="card warn-card">

### 2. **APIキー・パスワードを入れない**
公開リポジトリにも、AIへのプロンプトにも

</div>

<div class="card warn-card">

### 3. **学校の宿題をそのまま投げない**
学校・先生のポリシーを必ず確認

</div>

---

## 5つのルール（続き）

<div class="card warn-card">

### 4. **AIの答えを「事実」として鵜呑みにしない**
特に **数字・日付・人名・出典** は必ず自分で確認

</div>

<div class="card warn-card">

### 5. **「コピペして提出」しない**
それは **自分のスキルが育たない** だけでなく、相手にも失礼

</div>

> **「使う」と「依存する」は違う**。電卓を使えても、暗算ができる人と、できない人がいる。

---

<!-- _class: section -->

# 7. まとめ

---

## 今日 おぼえたこと

1. AI（LLM）は **「次の単語を予測する」** 機械。考えてはいない
2. プロンプトは **「だれに・なに・どう」** の3点セット
3. AI は **ペアプロ相手**。書かせきるのではなく、対話する
4. **設計 → 実装 → テスト → 改善** の4ステップを回す
5. **個人情報・APIキー・パスワード** はAIに入れない

---

## このコースのまとめ

<div class="grid2">
<div class="card">

### 第1回
コンピューターと開発環境

</div>
<div class="card">

### 第2回
Webとインターネット

</div>
<div class="card">

### 第3回
プログラミング基本構文

</div>
<div class="card">

### 第4回（今日）
AI活用と開発の流れ

</div>
</div>

<br>

ここまでで、**「コードを書いて動かして、AIと一緒に改善する」** までできるようになった。

---

## 次のステップ（おすすめ）

- **OP1**：簡単なWebアプリ（Flask または HTML+JS）
- **OP2**：Gitの基本（init / add / commit / push）
- **OP3**：自分の "お気に入り" 紹介ページ作成
- **発展**：中級コース（条件式・データ構造・API）

> いちばん大切なのは、**「もう1個、自分で作る」** こと。

---

<!-- _class: title -->

# ぜんぶ おつかれさまでした！

### ここからが、本当のはじまり。

質問・相談はいつでも。
