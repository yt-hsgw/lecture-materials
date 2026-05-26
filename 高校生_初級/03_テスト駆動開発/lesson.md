---
marp: true
theme: default
paginate: true
size: 16:9
header: '高校生プログラミング塾 ／ 初級 第3回'
footer: 'テスト駆動開発（TDD）実践'
style: |
  :root {
    --c-primary:   #475569;
    --c-secondary: #F97316;
    --c-accent:    #10B981;
    --c-warn:      #DC2626;
    --c-dark:      #1E293B;
    --c-light:     #F8FAFC;
  }
  section {
    background: var(--c-light);
    color: #1A1A2E;
    font-family: 'Inter','Hiragino Sans','Yu Gothic',sans-serif;
    font-size: 28px;
    line-height: 1.7;
    padding: 56px;
  }
  section h1 { color: var(--c-primary); font-size: 56px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 40px; margin-bottom: 18px; }
  section h3 { color: var(--c-accent);  font-size: 28px; }
  section.title { background: linear-gradient(135deg, var(--c-primary), var(--c-dark)); color: white; text-align: center; }
  section.title h1 { color: white; font-size: 72px; }
  section.section { background: var(--c-dark); color: white; text-align: center; }
  section.section h1 { color: var(--c-secondary); font-size: 64px; }
  section.handson { background: #ECFDF5; }
  section.handson h1 { color: var(--c-accent); }
  section.quiz { background: #FFF7ED; }
  section.quiz h1 { color: var(--c-secondary); }
  section.warn { background: #FEF2F2; }
  section.warn h1 { color: var(--c-warn); }
  .card { background: white; border-radius: 14px; padding: 18px 24px; margin: 12px 0; box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .ok  { background: #ECFDF5; border-left: 6px solid var(--c-accent);    padding: 12px 18px; border-radius: 6px; }
  .ng  { background: #FEF2F2; border-left: 6px solid var(--c-warn);      padding: 12px 18px; border-radius: 6px; }
  .tip { background: #FFF7ED; border-left: 6px solid var(--c-secondary); padding: 12px 18px; border-radius: 6px; }
  .code { background: var(--c-dark); color: #E2E8F0; border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono','SF Mono','Menlo',monospace; font-size: 18px; line-height: 1.7; overflow-x: auto; }
  .code .key { color: #C4B5FD; }
  .code .str { color: #FDBA74; }
  .code .num { color: #6EE7B7; }
  .code .com { color: #94A3B8; font-style: italic; }
  .code .type{ color: #7DD3FC; }
  .cycle { display:flex; gap:18px; justify-content:center; font-size:32px; margin: 20px 0; }
  .cycle .step { background: white; border-radius: 50%; width:140px; height:140px; display:flex; align-items:center; justify-content:center; font-weight:bold; box-shadow: 0 4px 0 rgba(0,0,0,.1); }
  .cycle .red { color: var(--c-warn); border:4px solid var(--c-warn); }
  .cycle .green { color: var(--c-accent); border:4px solid var(--c-accent); }
  .cycle .blue { color: var(--c-primary); border:4px solid var(--c-primary); }
---

<!-- _class: title -->

# テスト駆動開発<br>（TDD）実践

### 第3回 ／ 高校生プログラミング塾・初級

<br>

きょうは **赤 → 緑 → リファクタ** の リズム を<br>1機能 通します！ 🔴🟢🔵

---

## 前回の復習

<div class="grid3">
<div class="card">

### 📐 TypeScript
動く前 に バグ 検出、 型 が ドキュメント

</div>
<div class="card">

### 🛡️ Zod / Pydantic
ランタイム も 型 で 守る、 外部入力 を 信用 しない

</div>
<div class="card">

### 🎨 型 を 設計 に
Discriminated Union / branded types で 不正状態 を 表現不可能 に

</div>
</div>

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ TDD ＝ **テスト を 先に 書く** を 体感
「赤 → 緑 → リファクタ」 を 1機能 で 通す

</div>
<div class="card">

### ✅ jest / pytest の 基本 を 押さえる
アサーション・スイート・モック・カバレッジ

</div>
<div class="card">

### ✅ 「テスト容易性」 が **設計 を 良くする**
依存注入・純粋関数・モック対象 の 切り出し

</div>

---

<!-- _class: section -->

# 1. なぜ TDD か

---

## テスト の 3つの 価値

<div class="grid3">
<div class="card">

### ① **デグレ 防止**
昔 動いた コード が 今 も 動く（リファクタ 安心）

</div>
<div class="card">

### ② **仕様 ドキュメント**
コードよりも テスト を 読む 方が 仕様 が 速く わかる

</div>
<div class="card">

### ③ **設計 改善**
テスト しにくい コード ＝ 設計 が 悪い、 の シグナル

</div>
</div>

---

## TDD ＝ テスト を **先に** 書く

<div class="cycle">
<div class="step red">🔴<br>RED</div>
<div class="step green">🟢<br>GREEN</div>
<div class="step blue">🔵<br>REFACTOR</div>
</div>

<div class="grid3">
<div class="card">

### 🔴 RED
失敗 する テスト を 書く。「まだ 機能 が ない」 こと を 確認。

</div>
<div class="card">

### 🟢 GREEN
**最小限** の コード で テスト を 通す。 美しさは あと。

</div>
<div class="card">

### 🔵 REFACTOR
テスト が 通った 状態 を **保ちながら** コード を 整える。

</div>
</div>

---

## なぜ 「先に 書く」 が 効くのか

<div class="grid2">
<div class="card">

### あとから テスト
- 「動いた、 まあ いいか」 で 終わる
- テスト が 後付け で 形だけ
- カバレッジ は 高い が **意味ない**

</div>
<div class="card">

### 先に テスト
- 「何を 期待 する か」 を **最初 に 言語化**
- **使う側 の 視点** で API 設計 できる
- 全テスト 必ず **1回は 落ちる 経験**

</div>
</div>

<div class="ok">

⭕ 「自分の コード を 自分で 信用 しない」 訓練 が TDD。

</div>

---

<!-- _class: quiz -->

## クイズ

TDD で 「赤 → 緑 → リファクタ」 の **緑** で やる べき こと は？

- A. 完璧な コード を 書く
- B. **テスト を 通す 最小限の コード を 書く**
- C. 全テスト を 書き直す
- D. リファクタを 始める

---

## こたえ

<div class="ok">

**こたえ: B（最小限の コード）**

緑 で やる の は **「いま 失敗 してる テスト を 1個 通す」 こと だけ**。

- 「`if (input === 1) return 1;`」 みたい な 嘘 でも OK
- 美しさ・最適化 は **次の リファクタ** で やる
- 「**緑 を 出してから 整える**」 が テンポ の 肝

完璧 を 緑 で 目指す と TDD の リズム が 壊れる。

</div>

---

<!-- _class: section -->

# 2. jest（JavaScript / TypeScript）

---

## セットアップ

<div class="code">
<span class="com"># インストール</span>
npm install -D jest @types/jest ts-jest typescript

<span class="com"># 初期化</span>
npx ts-jest config:init

<span class="com"># package.json に</span>
<span class="str">"scripts"</span>: {
  <span class="str">"test"</span>: <span class="str">"jest"</span>,
  <span class="str">"test:watch"</span>: <span class="str">"jest --watch"</span>,
  <span class="str">"test:cov"</span>: <span class="str">"jest --coverage"</span>
}
</div>

---

## 基本の テスト

<div class="code">
<span class="com">// src/calc.ts</span>
<span class="key">export function</span> add(a: <span class="type">number</span>, b: <span class="type">number</span>): <span class="type">number</span> {
  <span class="key">return</span> a + b;
}

<span class="com">// src/calc.test.ts</span>
<span class="key">import</span> { add } <span class="key">from</span> <span class="str">"./calc"</span>;

describe(<span class="str">"add"</span>, () =&gt; {
  test(<span class="str">"足し算"</span>, () =&gt; {
    expect(add(<span class="num">1</span>, <span class="num">2</span>)).toBe(<span class="num">3</span>);
  });

  test(<span class="str">"マイナス"</span>, () =&gt; {
    expect(add(-<span class="num">5</span>, <span class="num">5</span>)).toBe(<span class="num">0</span>);
  });
});
</div>

---

## よく 使う マッチャー

<div class="code">
expect(value).toBe(<span class="num">3</span>);                <span class="com">// 厳密一致</span>
expect(arr).toEqual([<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]);       <span class="com">// 深い 構造比較</span>
expect(arr).toContain(<span class="num">2</span>);             <span class="com">// 配列要素</span>
expect(arr).toHaveLength(<span class="num">3</span>);
expect(fn).toThrow(<span class="str">"エラー"</span>);

expect(user.age).toBeGreaterThan(<span class="num">17</span>);
expect(user.email).toMatch(/@example\.com$/);

<span class="com">// 非同期</span>
<span class="key">await</span> expect(fetchUser(<span class="num">1</span>)).resolves.toMatchObject({ name: <span class="str">"Alice"</span> });
<span class="key">await</span> expect(fetchUser(-<span class="num">1</span>)).rejects.toThrow();
</div>

---

## TDD の 1サイクル を 書いてみる

**仕様: 「FizzBuzz」 ＝ 1〜n で 3の倍数=Fizz / 5=Buzz / 15=FizzBuzz**

<div class="code">
<span class="com">// 🔴 STEP 1: 失敗 する テスト を 書く</span>
<span class="key">import</span> { fizzbuzz } <span class="key">from</span> <span class="str">"./fizzbuzz"</span>;
test(<span class="str">"1 は 1"</span>, () =&gt; {
  expect(fizzbuzz(<span class="num">1</span>)).toBe(<span class="str">"1"</span>);
});
<span class="com">// → fizzbuzz が 存在しない、 import エラー → 赤</span>

<span class="com">// 🟢 STEP 2: 最小限 で 通す</span>
<span class="key">export function</span> fizzbuzz(n: <span class="type">number</span>): <span class="type">string</span> {
  <span class="key">return</span> <span class="str">"1"</span>;  <span class="com">// 嘘 でも OK！</span>
}
<span class="com">// → 緑</span>
</div>

---

## 次の テスト を 追加 して 進める

<div class="code">
<span class="com">// 🔴 STEP 3: 次の テスト</span>
test(<span class="str">"3 は Fizz"</span>, () =&gt; {
  expect(fizzbuzz(<span class="num">3</span>)).toBe(<span class="str">"Fizz"</span>);
});

<span class="com">// 🟢 STEP 4: 通す</span>
<span class="key">export function</span> fizzbuzz(n: <span class="type">number</span>): <span class="type">string</span> {
  <span class="key">if</span> (n % <span class="num">3</span> === <span class="num">0</span>) <span class="key">return</span> <span class="str">"Fizz"</span>;
  <span class="key">return</span> <span class="type">String</span>(n);
}

<span class="com">// 🔵 STEP 5: 必要 なら リファクタ（まだ シンプル なので 不要）</span>

<span class="com">// 🔴 続いて 5、 15、 範囲チェック … と 1テスト ずつ 増やしていく</span>
</div>

---

<!-- _class: section -->

# 3. pytest（Python）

---

## セットアップ + 基本

<div class="code">
<span class="com"># pip install pytest pytest-cov</span>

<span class="com"># src/calc.py</span>
<span class="key">def</span> add(a: <span class="type">int</span>, b: <span class="type">int</span>) -&gt; <span class="type">int</span>:
    <span class="key">return</span> a + b

<span class="com"># tests/test_calc.py</span>
<span class="key">from</span> src.calc <span class="key">import</span> add

<span class="key">def</span> test_add():
    <span class="key">assert</span> add(<span class="num">1</span>, <span class="num">2</span>) == <span class="num">3</span>

<span class="key">def</span> test_add_negative():
    <span class="key">assert</span> add(-<span class="num">5</span>, <span class="num">5</span>) == <span class="num">0</span>

<span class="com"># 実行: pytest -v</span>
</div>

---

## fixture（前準備 を 共通化）

<div class="code">
<span class="key">import</span> pytest
<span class="key">from</span> src.db <span class="key">import</span> <span class="type">Database</span>

@pytest.fixture
<span class="key">def</span> db():
    db = <span class="type">Database</span>(<span class="str">":memory:"</span>)  <span class="com"># SQLite in-memory</span>
    db.migrate()
    <span class="key">yield</span> db
    db.close()

<span class="key">def</span> test_create_user(db):
    user = db.create_user(<span class="str">"Alice"</span>)
    <span class="key">assert</span> user.id <span class="key">is not</span> <span class="key">None</span>

<span class="key">def</span> test_find_user(db):
    db.create_user(<span class="str">"Bob"</span>)
    found = db.find_user(<span class="str">"Bob"</span>)
    <span class="key">assert</span> found.name == <span class="str">"Bob"</span>
</div>

---

## パラメータ化（同じ テスト を 多入力 で）

<div class="code">
@pytest.mark.parametrize(<span class="str">"input,expected"</span>, [
    (<span class="num">1</span>,  <span class="str">"1"</span>),
    (<span class="num">3</span>,  <span class="str">"Fizz"</span>),
    (<span class="num">5</span>,  <span class="str">"Buzz"</span>),
    (<span class="num">15</span>, <span class="str">"FizzBuzz"</span>),
    (<span class="num">30</span>, <span class="str">"FizzBuzz"</span>),
])
<span class="key">def</span> test_fizzbuzz(input, expected):
    <span class="key">assert</span> fizzbuzz(input) == expected
</div>

<div class="ok">

⭕ 1個 の テスト関数 で **5パターン** を カバー<br>
⭕ 失敗 すると **どの パラメータ で 失敗 したか** が 出力される

</div>

---

<!-- _class: section -->

# 4. モック ＝ 外部依存 を 偽物に

---

## なぜ モック が 必要 か

<div class="ng">

❌ **API を 本物 で 呼ぶ テスト**<br>
→ ネットワーク 必須、 遅い、 サーバー側 状態に 依存、 課金 発生

</div>

<div class="ng">

❌ **本物の DB を 立てる テスト**<br>
→ セットアップ 重い、 並列実行 で 衝突

</div>

<div class="ok">

⭕ **モック** で 「外部API / DB / 時刻」 を 制御<br>
⭕ テスト は **速く** **決定的** に なる

</div>

---

## jest の モック

<div class="code">
<span class="com">// src/user.ts</span>
<span class="key">import</span> { fetchUser } <span class="key">from</span> <span class="str">"./api"</span>;

<span class="key">export async function</span> greetUser(id: <span class="type">string</span>) {
  <span class="key">const</span> u = <span class="key">await</span> fetchUser(id);
  <span class="key">return</span> <span class="str">`Hello, ${u.name}`</span>;
}

<span class="com">// src/user.test.ts</span>
jest.mock(<span class="str">"./api"</span>);
<span class="key">import</span> { fetchUser } <span class="key">from</span> <span class="str">"./api"</span>;

test(<span class="str">"あいさつ"</span>, <span class="key">async</span> () =&gt; {
  (fetchUser <span class="key">as</span> jest.<span class="type">Mock</span>).mockResolvedValue({ name: <span class="str">"Alice"</span> });
  <span class="key">const</span> r = <span class="key">await</span> greetUser(<span class="str">"u1"</span>);
  expect(r).toBe(<span class="str">"Hello, Alice"</span>);
  expect(fetchUser).toHaveBeenCalledWith(<span class="str">"u1"</span>);
});
</div>

---

## pytest の モック

<div class="code">
<span class="key">from</span> unittest.mock <span class="key">import</span> patch

@patch(<span class="str">"src.user.fetchUser"</span>)
<span class="key">def</span> test_greet(mock_fetch):
    mock_fetch.return_value = {<span class="str">"name"</span>: <span class="str">"Alice"</span>}
    <span class="key">from</span> src.user <span class="key">import</span> greet_user
    <span class="key">assert</span> greet_user(<span class="str">"u1"</span>) == <span class="str">"Hello, Alice"</span>
    mock_fetch.assert_called_with(<span class="str">"u1"</span>)
</div>

<div class="tip">
💡 **モック の 罠**：何でも モック すると 「テスト が 通る ＝ コード が 動く」 が 言えなくなる。 統合 テスト も 必要。
</div>

---

## 「テスト容易性」 が 設計 を 良くする 例

<div class="grid2">
<div class="card">

### 悪い 例
<div class="code">
<span class="key">function</span> notifyUsers() {
  <span class="key">const</span> users = db.getAll();  <span class="com">// 直接 DB</span>
  <span class="key">for</span> (<span class="key">const</span> u <span class="key">of</span> users) {
    fetch(<span class="str">"https://slack.com"</span>, ...);  <span class="com">// 直接 API</span>
  }
}
</div>

DB / Slack を 全部 モック しないと テスト 不可能。

</div>
<div class="card">

### 良い 例
<div class="code">
<span class="key">function</span> notifyUsers(users, send) {
  <span class="key">for</span> (<span class="key">const</span> u <span class="key">of</span> users) send(u);
}
</div>

**依存注入**。 テスト では `users=[]`, `send=jest.fn()` を 渡せる。

</div>
</div>

---

<!-- _class: handson -->

## ハンズオン: FizzBuzz を TDD で

<div class="step">

1. プロジェクト 作成、 jest（or pytest）セットアップ
2. **🔴** `test("1 → '1'")` を 書く（コード ない、 import で 失敗）
3. **🟢** `function fizzbuzz(n) { return "1"; }` で 通す
4. **🔴** `test("2 → '2'")` を 追加 → 失敗
5. **🟢** 通す → `return String(n);`
6. **🔴** `test("3 → 'Fizz'")` → 失敗
7. **🟢** `if (n%3) ...` で 通す
8. 5、 15、 範囲チェック ... と 順次 追加
9. **🔵** 重複・ネスト を 整理（リファクタ）

</div>

---

<!-- _class: section -->

# 5. カバレッジ と CI

---

## カバレッジ ＝ どこ まで テスト が 通った か

<div class="code">
<span class="com"># jest</span>
npm run test:cov

<span class="com"># 出力</span>
File         | % Stmts | % Branch | % Funcs | % Lines
calc.ts      |  100.00 |   100.00 |  100.00 |  100.00
user.ts      |   75.00 |    50.00 |   80.00 |   75.00
</div>

<div class="grid3">
<div class="card">

### Stmts
**文** の カバレッジ

</div>
<div class="card">

### Branch
**条件分岐** が どっち も 通った か

</div>
<div class="card">

### Funcs
**関数** が 呼ばれた か

</div>
</div>

---

## カバレッジ の **罠**

<div class="ng">

❌ **カバレッジ 100% ＝ バグ ゼロ** ではない<br>
→ 「行 を 通った」 だけ で 「**正しい こと を 検証**」 してない 可能性

</div>

<div class="ok">

⭕ **目安**: 80% を 切ったら 危険、 95% 以上 を 狙う 必要 は 普通 ない<br>
⭕ **クリティカル 部分**（決済・認証 など）は **個別 に** 100% を 狙う<br>
⭕ **「変えやすさ」** が 真の 指標。 カバレッジ は その 副産物

</div>

---

## CI に 組み込む（GitHub Actions 例）

<div class="code">
<span class="com"># .github/workflows/test.yml</span>
<span class="key">name</span>: test
<span class="key">on</span>: [push, pull_request]

<span class="key">jobs</span>:
  <span class="key">test</span>:
    <span class="key">runs-on</span>: ubuntu-latest
    <span class="key">steps</span>:
      - <span class="key">uses</span>: actions/checkout@v4
      - <span class="key">uses</span>: actions/setup-node@v4
        <span class="key">with</span>:
          <span class="key">node-version</span>: <span class="num">20</span>
      - <span class="key">run</span>: npm ci
      - <span class="key">run</span>: npm run test:cov
      - <span class="key">uses</span>: codecov/codecov-action@v4
</div>

---

<!-- _class: warn -->

## 気をつけること

<div class="ng">

❌ **テスト の ない コード を マージ**：「あとで 書く」 は 来ない

</div>

<div class="ng">

❌ **テスト と 実装 を 同じ PR で 1日 後 に**：先に テスト だけ PR が 健全

</div>

<div class="ng">

❌ **モック を 信用 しすぎ**：本物 と 形 が 違って **テスト だけ 通る** ことが ある

</div>

<div class="ok">

⭕ **小さい コミット**：1テスト = 1コミット の リズム を 守る<br>
⭕ **CI が 赤 のまま マージ しない**：必ず 緑 を 待つ

</div>

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

<div class="grid3">
<div class="card">

### 1️⃣ TDD ＝ 赤 → 緑 → リファクタ
テスト を 先に 書き、 最小限 で 通し、 整える。

</div>
<div class="card">

### 2️⃣ jest / pytest
基本マッチャー、 fixture、 パラメータ化、 モック。

</div>
<div class="card">

### 3️⃣ テスト容易性 が 設計 を 良く する
依存注入・純粋関数 で 「モック しやすい」 設計。

</div>
</div>

<div class="tip">
💡 「テスト を 書く 時間 が 惜しい」 → 「テスト が ないと 怖い」 が 体感 できれば 第3回 ゴール！
</div>

---

## 次回予告

<div class="card">

### 第4回｜アジャイルとIssue駆動
**GitHub Issues + Projects** で スプリント 計画 → 実装 → レビュー → レトロ の 1サイクル。 個人 開発 から **チーム の 一員 として 動ける** ように。

</div>

<div class="tip">

📚 おすすめの宿題:
- 既存プロジェクト に 1ファイル ずつ テスト を 足す
- カバレッジ 80% を 目標 に
- 1回 だけ **完全 TDD** で 機能 を 作ってみる

</div>

---

<!-- _class: title -->

# おつかれさまでした 👏

### 「赤 → 緑 → リファクタ」 の リズム を 体に！<br>次回 「アジャイル と Issue 駆動」 で お会いしましょう。
