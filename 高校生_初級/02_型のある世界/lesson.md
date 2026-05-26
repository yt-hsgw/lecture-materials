---
marp: true
theme: default
paginate: true
size: 16:9
header: '高校生プログラミング塾 ／ 初級 第2回'
footer: '型のある世界'
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
  .step { font-size: 30px; }
  .step b { color: var(--c-primary); }
---

<!-- _class: title -->

# 型のある世界

### 第2回 ／ 高校生プログラミング塾・初級

<br>

きょうは **TypeScript / Python型ヒント / Pydantic / Zod** で<br>「型」 を **設計の 道具** に！ 📐✨🛡️

---

## 前回の復習

<div class="grid3">
<div class="card">

### 🐳 Docker
環境を コード化、 全員 同じ 開発環境

</div>
<div class="card">

### 📁 dotfiles
PC を 入れ替えても 同じ 設定が 復元

</div>
<div class="card">

### 🔒 pre-commit
コミット 直前 に lint / format / 秘密検出

</div>
</div>

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ 「動けば OK」 から 「壊れない 設計」 へ
**型** を 書くと 何が 変わるかを 体感

</div>
<div class="card">

### ✅ 既存 JS を TypeScript に 段階的に 移行
`allowJs` で 一気に 全変換しない

</div>
<div class="card">

### ✅ Python でも **型を 武器** に
`mypy + Pydantic` で 同等の 安心感

</div>

---

<!-- _class: section -->

# 1. なぜ 型 が 必要 か

---

## 動的型 言語 の 自由 と コスト

<div class="grid2">
<div class="card">

### 自由（メリット）
- 書き始める のが 速い
- プロトタイプ に 最適
- 学習コスト 低い

</div>
<div class="card">

### コスト（デメリット）
- **実行する まで** バグに 気づかない
- 引数の 形 を 「察する」 必要
- リファクタが 怖い（影響範囲 不明）

</div>
</div>

---

## ある日 の バグ（JavaScript 編）

<div class="code">
<span class="com">// user.js</span>
<span class="key">function</span> greet(user) {
  <span class="key">return</span> <span class="str">`Hello, ${user.name.toUpperCase()}`</span>;
}

greet({ name: <span class="str">"Alice"</span> });  <span class="com">// "Hello, ALICE"</span>
greet({ Name: <span class="str">"Bob"</span>   });  <span class="com">// TypeError: Cannot read 'toUpperCase' of undefined</span>
greet(<span class="str">"Charlie"</span>);          <span class="com">// "Hello, undefined"</span>
greet(<span class="key">null</span>);               <span class="com">// 💥</span>
</div>

「`user.name` は **string** だ」 と **どこにも 書いていない** から、 全部 通っちゃう。

---

## TypeScript で 書き直す

<div class="code">
<span class="com">// user.ts</span>
<span class="key">type</span> <span class="type">User</span> = { <span class="key">name</span>: <span class="type">string</span> };

<span class="key">function</span> greet(user: <span class="type">User</span>): <span class="type">string</span> {
  <span class="key">return</span> <span class="str">`Hello, ${user.name.toUpperCase()}`</span>;
}

greet({ name: <span class="str">"Alice"</span> });  <span class="com">// ✅</span>
greet({ Name: <span class="str">"Bob"</span>   });  <span class="com">// ❌ コンパイル エラー</span>
greet(<span class="str">"Charlie"</span>);          <span class="com">// ❌ string は User じゃない</span>
greet(<span class="key">null</span>);               <span class="com">// ❌ null は User じゃない</span>
</div>

**保存した 瞬間に** エディタが 赤線を 引いてくれる。 実行する 前に 気づける。

---

## 型 は ドキュメント でも ある

<div class="grid2">
<div class="card">

### 型なし
`function fetchUser(id)` <br>
→ `id` は 数字？ 文字列？ UUID？

</div>
<div class="card">

### 型あり
`function fetchUser(id: UserId): Promise<User>` <br>
→ **UserId 型** を 渡せば **Promise の User** が 返ってくる

</div>
</div>

<div class="ok">

⭕ 関数 名 を 見るだけ で **「何を 渡し、 何が 返るか」** が わかる<br>
⭕ コメントを 書かなくても、 型 が ドキュメント の 代わり

</div>

---

<!-- _class: quiz -->

## クイズ

TypeScript の **「型」** が 一番 効くのは？

- A. 1ファイル 100行の 個人スクリプト
- B. **チーム複数人 / 数万行の コードベース**
- C. プロトタイプ で 仕様 が 毎日 変わる プロジェクト
- D. シェルスクリプト

---

## こたえ

<div class="ok">

**こたえ: B（チーム複数人 / 数万行）**

型 の 効果 は **コードベース が 大きく** なるほど 倍率 が 上がる。
- 1人 / 100行：型 を 書く コスト の 方が 高い ことも
- 10人 / 数万行：**型 が ない と リファクタ できない**

C（プロトタイプ）も TS は 強いが、 「仕様が 毎日 変わる」 場合 は 緩い 設定 で 始めて 後から 厳しく する 戦略 が おすすめ。

</div>

---

<!-- _class: section -->

# 2. TypeScript 入門（既存JS → TS 移行）

---

## tsconfig.json （初心者向け 推奨）

<div class="code">
{
  <span class="str">"compilerOptions"</span>: {
    <span class="str">"target"</span>: <span class="str">"ES2022"</span>,
    <span class="str">"module"</span>: <span class="str">"NodeNext"</span>,
    <span class="str">"moduleResolution"</span>: <span class="str">"NodeNext"</span>,
    <span class="str">"strict"</span>: <span class="key">true</span>,           <span class="com">// 全部 厳しく（推奨）</span>
    <span class="str">"esModuleInterop"</span>: <span class="key">true</span>,
    <span class="str">"skipLibCheck"</span>: <span class="key">true</span>,
    <span class="str">"allowJs"</span>: <span class="key">true</span>,         <span class="com">// .js も 同居 OK（移行中）</span>
    <span class="str">"outDir"</span>: <span class="str">"./dist"</span>,
    <span class="str">"sourceMap"</span>: <span class="key">true</span>
  },
  <span class="str">"include"</span>: [<span class="str">"src/**/*"</span>]
}
</div>

<div class="tip">
💡 `strict: true` は **必ず ON**。 緩い ON で 始めて 後から 厳しくする と 結局 やり直し。
</div>

---

## 段階移行の 順番

<div class="grid3">
<div class="card">

### Step 1
**ファイル を `.ts` に rename** だけ。 中身は そのまま。 動く。

</div>
<div class="card">

### Step 2
**関数の 引数 / 戻り値** に 型を 付ける。 ライブラリ の `@types/...` を 入れる。

</div>
<div class="card">

### Step 3
**`any` を 撲滅**。 `unknown` + 型ガード を 使う。

</div>
</div>

<div class="tip">

💡 「全部 一気に 厳しく」 は 心 が 折れる。 **1ファイル ずつ** が コツ。

</div>

---

## よく 使う 型

<div class="code">
<span class="com">// 基本</span>
<span class="key">let</span> name: <span class="type">string</span> = <span class="str">"Alice"</span>;
<span class="key">let</span> age:  <span class="type">number</span> = <span class="num">17</span>;
<span class="key">let</span> ok:   <span class="type">boolean</span> = <span class="key">true</span>;
<span class="key">let</span> ids:  <span class="type">number</span>[] = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];

<span class="com">// オブジェクト</span>
<span class="key">type</span> <span class="type">User</span> = {
  id: <span class="type">string</span>;
  name: <span class="type">string</span>;
  age?: <span class="type">number</span>;  <span class="com">// optional</span>
};

<span class="com">// 関数</span>
<span class="key">type</span> <span class="type">Greeter</span> = (u: <span class="type">User</span>) =&gt; <span class="type">string</span>;

<span class="com">// ユニオン</span>
<span class="key">type</span> <span class="type">Status</span> = <span class="str">"draft"</span> | <span class="str">"published"</span> | <span class="str">"archived"</span>;
</div>

---

## ジェネリクス（型を 引数 として 渡す）

<div class="code">
<span class="key">function</span> first&lt;<span class="type">T</span>&gt;(arr: <span class="type">T</span>[]): <span class="type">T</span> | <span class="key">undefined</span> {
  <span class="key">return</span> arr[<span class="num">0</span>];
}

<span class="key">const</span> n = first([<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]);        <span class="com">// number | undefined</span>
<span class="key">const</span> s = first([<span class="str">"a"</span>, <span class="str">"b"</span>, <span class="str">"c"</span>]);  <span class="com">// string | undefined</span>
</div>

<div class="ok">

⭕ 「**配列の 要素型 が 何でも 動く**」 を 表現できる<br>
⭕ ライブラリ 作者 は ほぼ 必ず ジェネリクス を 使う

</div>

---

## any vs unknown

<div class="grid2">
<div class="card">

### any（NG）
**型チェック OFF**。 何でも できる、 でも バグ も 全部 通る。

</div>
<div class="card">

### unknown（OK）
**「何か わからない」**。 触る前に **型ガード** が 必須。

</div>
</div>

<div class="code">
<span class="key">function</span> parse(json: <span class="type">string</span>): <span class="type">unknown</span> {
  <span class="key">return</span> <span class="type">JSON</span>.parse(json);
}

<span class="key">const</span> data = parse(<span class="str">'{"name":"Alice"}'</span>);
<span class="com">// data.name → ❌ unknown だから 触れない</span>

<span class="key">if</span> (<span class="key">typeof</span> data === <span class="str">"object"</span> && data !== <span class="key">null</span> && <span class="str">"name"</span> <span class="key">in</span> data) {
  <span class="key">console</span>.log(data.name);  <span class="com">// ✅ ここで 型 が 確定</span>
}
</div>

---

<!-- _class: section -->

# 3. Zod ＝ ランタイム 型バリデーション

---

## TypeScript の 型 は **コンパイル時 だけ**

<div class="ng">

❌ TS の `type User = {...}` は **実行時 には 消える**<br>
→ 外部 API / フォーム入力 / DB の 値 は 信用できない

</div>

<div class="code">
<span class="com">// ❌ これだけ では 危険</span>
<span class="key">type</span> <span class="type">User</span> = { name: <span class="type">string</span>; age: <span class="type">number</span> };

<span class="key">async function</span> fetchUser(): <span class="type">Promise</span>&lt;<span class="type">User</span>&gt; {
  <span class="key">const</span> r = <span class="key">await</span> fetch(<span class="str">"/api/me"</span>);
  <span class="key">return</span> <span class="key">await</span> r.json();  <span class="com">// 中身 は any、 信用できない</span>
}
</div>

---

## Zod で **ランタイム** にも 型を 効かせる

<div class="code">
<span class="key">import</span> { z } <span class="key">from</span> <span class="str">"zod"</span>;

<span class="key">const</span> <span class="type">User</span>Schema = z.object({
  name: z.string().min(<span class="num">1</span>),
  age:  z.number().int().min(<span class="num">0</span>),
});

<span class="key">type</span> <span class="type">User</span> = z.infer&lt;<span class="key">typeof</span> <span class="type">User</span>Schema&gt;;
<span class="com">// → { name: string; age: number }（自動で 型生成）</span>

<span class="key">async function</span> fetchUser(): <span class="type">Promise</span>&lt;<span class="type">User</span>&gt; {
  <span class="key">const</span> r = <span class="key">await</span> fetch(<span class="str">"/api/me"</span>);
  <span class="key">const</span> raw = <span class="key">await</span> r.json();
  <span class="key">return</span> <span class="type">User</span>Schema.parse(raw);  <span class="com">// ❌ 形 が 違えば throw</span>
}
</div>

---

## Zod の よく 使う パターン

<div class="code">
<span class="com">// フォーム入力 検証</span>
<span class="key">const</span> <span class="type">Signup</span> = z.object({
  email: z.string().email(),
  password: z.string().min(<span class="num">8</span>).regex(/[A-Z]/, <span class="str">"大文字必須"</span>),
  age: z.number().int().min(<span class="num">13</span>, <span class="str">"13歳以上"</span>),
});

<span class="com">// 環境変数</span>
<span class="key">const</span> <span class="type">Env</span> = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.<span class="key">enum</span>([<span class="str">"development"</span>, <span class="str">"production"</span>, <span class="str">"test"</span>]),
});
<span class="key">const</span> env = <span class="type">Env</span>.parse(<span class="type">process</span>.env);
<span class="com">// → 起動時 に env 不備 で 落ちる（後から 困らない）</span>
</div>

---

<!-- _class: handson -->

## ハンズオン: 既存 JS を TS + Zod へ

<div class="step">

1. 簡単な **JS スクリプト 1個** を 用意（例: `fetchUsers.js`）
2. `npm install -D typescript zod @types/node`
3. `npx tsc --init` → `tsconfig.json` 生成
4. `tsconfig.json` で `strict: true` / `allowJs: true`
5. `fetchUsers.js` を `fetchUsers.ts` に rename
6. レスポンス JSON の 形 を Zod スキーマ で 定義
7. `Schema.parse(json)` で バリデーション 通す
8. わざと 形 を 崩した モック レスポンス を 返して エラー が 出ることを 確認

</div>

---

<!-- _class: section -->

# 4. Python の 型 ＝ 型ヒント + mypy + Pydantic

---

## Python 3.10+ の 型ヒント

<div class="code">
<span class="key">def</span> greet(user: <span class="type">dict</span>[<span class="type">str</span>, <span class="type">str</span>]) -&gt; <span class="type">str</span>:
    <span class="key">return</span> f<span class="str">"Hello, {user['name'].upper()}"</span>

<span class="com"># 関数 / 変数 / クラス 属性 に 型 を 付けられる</span>

<span class="key">from</span> typing <span class="key">import</span> <span class="type">Optional</span>, <span class="type">Literal</span>

<span class="key">def</span> find_user(id: <span class="type">int</span>) -&gt; <span class="type">Optional</span>[<span class="type">dict</span>]:
    <span class="key">pass</span>

<span class="type">Status</span> = <span class="type">Literal</span>[<span class="str">"draft"</span>, <span class="str">"published"</span>, <span class="str">"archived"</span>]
</div>

---

## mypy で 型チェック

<div class="code">
<span class="com"># インストール</span>
pip install mypy

<span class="com"># 実行</span>
mypy src/

<span class="com"># 出力例</span>
src/user.py:<span class="num">12</span>: error: Argument <span class="num">1</span> to <span class="str">"greet"</span> has incompatible type <span class="str">"str"</span>; expected <span class="str">"dict"</span>
</div>

<div class="tip">

💡 IDE（PyCharm / VSCode Pyright）が リアルタイム に 同じ チェックを してくれる。 mypy は **CI で 動かす** 役。

</div>

---

## Pydantic v2 ＝ Python の Zod

<div class="code">
<span class="key">from</span> pydantic <span class="key">import</span> <span class="type">BaseModel</span>, <span class="type">EmailStr</span>, <span class="type">field_validator</span>

<span class="key">class</span> <span class="type">Signup</span>(<span class="type">BaseModel</span>):
    email: <span class="type">EmailStr</span>
    password: <span class="type">str</span>
    age: <span class="type">int</span>

    @<span class="type">field_validator</span>(<span class="str">"password"</span>)
    <span class="key">def</span> check_password(<span class="key">cls</span>, v: <span class="type">str</span>) -&gt; <span class="type">str</span>:
        <span class="key">if</span> <span class="key">len</span>(v) &lt; <span class="num">8</span>:
            <span class="key">raise</span> <span class="type">ValueError</span>(<span class="str">"8文字以上"</span>)
        <span class="key">return</span> v

<span class="com"># 使う</span>
data = <span class="type">Signup</span>(email=<span class="str">"a@b.com"</span>, password=<span class="str">"abcdefgh"</span>, age=<span class="num">17</span>)
<span class="com"># 失敗 すれば ValidationError</span>
</div>

---

## Pydantic + FastAPI（実務 で 一番 出会う 組み合わせ）

<div class="code">
<span class="key">from</span> fastapi <span class="key">import</span> <span class="type">FastAPI</span>
<span class="key">from</span> pydantic <span class="key">import</span> <span class="type">BaseModel</span>

app = <span class="type">FastAPI</span>()

<span class="key">class</span> <span class="type">Todo</span>(<span class="type">BaseModel</span>):
    title: <span class="type">str</span>
    done: <span class="type">bool</span> = <span class="key">False</span>

@app.post(<span class="str">"/todos"</span>)
<span class="key">def</span> create_todo(todo: <span class="type">Todo</span>) -&gt; <span class="type">Todo</span>:
    <span class="com"># todo は すでに 検証済み Todo インスタンス</span>
    <span class="key">return</span> todo
</div>

<div class="ok">

⭕ POST body を **自動 バリデーション**<br>
⭕ OpenAPI スキーマ も **自動 生成**<br>
⭕ TypeScript 用 クライアント も 自動生成 できる

</div>

---

<!-- _class: section -->

# 5. 型 を 設計 に 使う

---

## 型 で 「不正状態 を 表現不可能 に」

<div class="grid2">
<div class="card">

### 悪い 型
<div class="code">
<span class="key">type</span> <span class="type">User</span> = {
  loggedIn: <span class="type">boolean</span>;
  token?: <span class="type">string</span>;
};
</div>

`loggedIn: true` でも `token` が ない 状態 が 表現できる ＝ バグ温床

</div>
<div class="card">

### 良い 型
<div class="code">
<span class="key">type</span> <span class="type">User</span> =
  | { state: <span class="str">"guest"</span> }
  | { state: <span class="str">"login"</span>; token: <span class="type">string</span> };
</div>

`login` なら **必ず** `token` ある。 コンパイラ が 強制。

</div>
</div>

---

## Discriminated Union（識別 共用体）

<div class="code">
<span class="key">type</span> <span class="type">Shape</span> =
  | { kind: <span class="str">"circle"</span>;    radius: <span class="type">number</span> }
  | { kind: <span class="str">"rectangle"</span>; w: <span class="type">number</span>; h: <span class="type">number</span> }
  | { kind: <span class="str">"triangle"</span>;  base: <span class="type">number</span>; height: <span class="type">number</span> };

<span class="key">function</span> area(s: <span class="type">Shape</span>): <span class="type">number</span> {
  <span class="key">switch</span> (s.kind) {
    <span class="key">case</span> <span class="str">"circle"</span>:    <span class="key">return</span> <span class="type">Math</span>.PI * s.radius ** <span class="num">2</span>;
    <span class="key">case</span> <span class="str">"rectangle"</span>: <span class="key">return</span> s.w * s.h;
    <span class="key">case</span> <span class="str">"triangle"</span>:  <span class="key">return</span> s.base * s.height / <span class="num">2</span>;
  }
  <span class="com">// ↑ ここで 「未網羅」 を コンパイラ が 検出</span>
}
</div>

---

## branded types（ID 取り違え 防止）

<div class="code">
<span class="key">type</span> <span class="type">UserId</span> = <span class="type">string</span> &amp; { __brand: <span class="str">"UserId"</span> };
<span class="key">type</span> <span class="type">PostId</span> = <span class="type">string</span> &amp; { __brand: <span class="str">"PostId"</span> };

<span class="key">function</span> deletePost(id: <span class="type">PostId</span>) { <span class="com">/* ... */</span> }

<span class="key">const</span> u: <span class="type">UserId</span> = <span class="str">"u_123"</span> <span class="key">as</span> <span class="type">UserId</span>;
deletePost(u);  <span class="com">// ❌ UserId は PostId じゃない！ コンパイル エラー</span>
</div>

<div class="ok">

⭕ 「文字列だから 同じ じゃん」 を **型で 区別**<br>
⭕ DB の ID 取り違え 事故 を **コンパイル時 に 検出**

</div>

---

<!-- _class: warn -->

## 気をつけること

<div class="ng">

❌ **`any` の 乱用**：型を 書く 意味 が なくなる。 PR で 弾く

</div>

<div class="ng">

❌ **`as` 型アサーション の 乱発**：実態 と 嘘 を つける、 強制 で 通すと 後で 死ぬ

</div>

<div class="ng">

❌ **型 を 書き すぎ て 読めない**：複雑な ジェネリクス は ライブラリ作者 の 仕事

</div>

<div class="ok">

⭕ プロダクトコード では **読みやすい 型** を 優先<br>
⭕ 内部 ユーティリティ は 賢い 型 で 守る、 公開API は シンプル に

</div>

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

<div class="grid3">
<div class="card">

### 1️⃣ 型 ＝ 設計 と ドキュメント
動く 前に バグ を 検出、 関数 の シグネチャ が 仕様 に なる。

</div>
<div class="card">

### 2️⃣ TS / mypy で 静的 検査
TS なら `strict: true`、 Python なら `mypy --strict`。

</div>
<div class="card">

### 3️⃣ Zod / Pydantic で 動的 検査
外部入力 を 信用 しない、 形 を ガード。

</div>
</div>

<div class="tip">
💡 「型 が なくても 動く」 → 「型 が ないと 怖い」 が 体感 できれば 第2回 ゴール！
</div>

---

## 次回予告

<div class="card">

### 第3回｜テスト駆動開発（TDD）実践
**赤 → 緑 → リファクタ** の リズム を 1機能 通す。 jest / pytest / カバレッジ / モック を 体得。 「テスト が 設計 を 駆動する」 を 体験 します。

</div>

<div class="tip">

📚 おすすめの宿題:
- 既存 JS ファイル 1つを TS に 移行
- Zod / Pydantic で 1つ API レスポンス を バリデート
- 自分の リポジトリ の `tsconfig.json` を `strict: true` に

</div>

---

<!-- _class: title -->

# おつかれさまでした 👏

### 「型 の ある 世界」 へ ようこそ！<br>次回 「TDD 実践」 で お会いしましょう。
