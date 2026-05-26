---
marp: true
theme: default
paginate: true
size: 16:9
header: '高校生プログラミング塾 ／ 中級 第2回'
footer: 'フロントエンドフレームワーク'
style: |
  :root {
    --c-primary:   #1E3A8A;
    --c-secondary: #FACC15;
    --c-accent:    #14B8A6;
    --c-warn:      #DC2626;
    --c-dark:      #0F172A;
    --c-light:     #F0F9FF;
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
  section.handson { background: #ECFEFA; }
  section.handson h1 { color: var(--c-accent); }
  section.quiz { background: #FEFCE8; }
  section.quiz h1 { color: var(--c-secondary); }
  section.warn { background: #FEF2F2; }
  section.warn h1 { color: var(--c-warn); }
  .card { background: white; border-radius: 14px; padding: 18px 24px; margin: 12px 0; box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .ok  { background: #ECFEFA; border-left: 6px solid var(--c-accent);    padding: 12px 18px; border-radius: 6px; }
  .ng  { background: #FEF2F2; border-left: 6px solid var(--c-warn);      padding: 12px 18px; border-radius: 6px; }
  .tip { background: #FEFCE8; border-left: 6px solid var(--c-secondary); padding: 12px 18px; border-radius: 6px; }
  .code { background: var(--c-dark); color: #E2E8F0; border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono','SF Mono','Menlo',monospace; font-size: 17px; line-height: 1.7; overflow-x: auto; }
  .code .key { color: #FDE68A; }
  .code .str { color: #5EEAD4; }
  .code .num { color: #BAE6FD; }
  .code .com { color: #94A3B8; font-style: italic; }
  .code .type{ color: #C4B5FD; }
---

<!-- _class: title -->

# フロントエンド<br>フレームワーク

### 第2回 ／ 高校生プログラミング塾・中級

<br>

きょうは **React / Next.js / 状態管理** で<br>**Server State と Client State** を 分ける ！ ⚛️▲💎

---

## 前回の復習

<div class="grid3">
<div class="card">

### 🌳 ブランチ戦略
GitHub Flow / Git Flow / Trunk-based

</div>
<div class="card">

### 👀 レビュー文化
小さい PR / `nit:` `must:` / CODEOWNERS

</div>
<div class="card">

### 🤝 ペアプロ / モブプロ
複雑機能 / 設計合意 に 強力

</div>
</div>

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ React の **コンポーネント思考** を 理解
状態 ＝ UI の 単方向 データフロー

</div>
<div class="card">

### ✅ Next.js の **App Router** ＝ サーバーコンポーネント
RSC / Server Action / Streaming

</div>
<div class="card">

### ✅ **Server State / Client State** を 分けて 扱う
TanStack Query + Zustand の 役割分担

</div>

---

<!-- _class: section -->

# 1. React の 思考法

---

## なぜ React ？ 素のHTML/JS と 何が 違う

<div class="grid2">
<div class="card">

### 素の DOM 操作
```js
const btn = document.getElementById('btn');
let count = 0;
btn.addEventListener('click', () => {
  count++;
  document.getElementById('display').textContent = count;
});
```

**「状態 → UI」 を 自分で 同期**

</div>
<div class="card">

### React
```jsx
function Counter() {
  const [c, setC] = useState(0);
  return (
    <button onClick={() => setC(c + 1)}>
      {c}
    </button>
  );
}
```

**「状態 を 書き換える だけ、 UI は 自動」**

</div>
</div>

---

## React の 3つ の 原則

<div class="grid3">
<div class="card">

### ① 単方向 データフロー
親 → 子 へ props で 流す。 子 → 親 は コールバック で。

</div>
<div class="card">

### ② コンポーネント分割
UI を **小さな 関数** に 分ける。 再利用・テスト しやすい。

</div>
<div class="card">

### ③ 状態 が UI を 決定
**UI = f(state)**。 状態 を 変えれば UI が 自動で 追従。

</div>
</div>

---

## useState の 基本

<div class="code">
<span class="key">import</span> { useState } <span class="key">from</span> <span class="str">"react"</span>;

<span class="key">function</span> <span class="type">Counter</span>() {
  <span class="key">const</span> [count, setCount] = useState(<span class="num">0</span>);

  <span class="key">return</span> (
    &lt;<span class="key">div</span>&gt;
      &lt;<span class="key">p</span>&gt;カウント: {count}&lt;/<span class="key">p</span>&gt;
      &lt;<span class="key">button</span> onClick={() =&gt; setCount(count + <span class="num">1</span>)}&gt;
        ＋1
      &lt;/<span class="key">button</span>&gt;
    &lt;/<span class="key">div</span>&gt;
  );
}
</div>

<div class="tip">
💡 `count` を 直接 書き換えてはダメ。 **必ず `setCount`**。 React が 検知 して 再レンダ。
</div>

---

## コンポーネント分割

<div class="code">
<span class="key">function</span> <span class="type">TodoList</span>({ todos, onToggle }) {
  <span class="key">return</span> (
    &lt;<span class="key">ul</span>&gt;
      {todos.map((t) =&gt; (
        &lt;<span class="type">TodoItem</span> key={t.id} todo={t} onToggle={onToggle} /&gt;
      ))}
    &lt;/<span class="key">ul</span>&gt;
  );
}

<span class="key">function</span> <span class="type">TodoItem</span>({ todo, onToggle }) {
  <span class="key">return</span> (
    &lt;<span class="key">li</span>&gt;
      &lt;<span class="key">input</span> type=<span class="str">"checkbox"</span> checked={todo.done}
             onChange={() =&gt; onToggle(todo.id)} /&gt;
      {todo.title}
    &lt;/<span class="key">li</span>&gt;
  );
}
</div>

---

## useEffect ＝ 副作用

<div class="code">
<span class="key">import</span> { useState, useEffect } <span class="key">from</span> <span class="str">"react"</span>;

<span class="key">function</span> <span class="type">User</span>({ id }) {
  <span class="key">const</span> [user, setUser] = useState(<span class="key">null</span>);

  useEffect(() =&gt; {
    fetch(<span class="str">`/api/users/${id}`</span>)
      .then((r) =&gt; r.json())
      .then(setUser);
  }, [id]);  <span class="com">// id が 変わる たび に 再 実行</span>

  <span class="key">if</span> (!user) <span class="key">return</span> &lt;<span class="key">p</span>&gt;読み込み中...&lt;/<span class="key">p</span>&gt;;
  <span class="key">return</span> &lt;<span class="key">h2</span>&gt;{user.name}&lt;/<span class="key">h2</span>&gt;;
}
</div>

<div class="tip">

💡 **依存配列**（`[id]`）が 重要。 空 `[]` は マウント時 のみ、 省略 は 毎回。

</div>

---

<!-- _class: quiz -->

## クイズ

useState で 配列 を 更新 する とき、 **NG** な のは？

- A. `setItems([...items, newItem])`
- B. `setItems(items.filter((x) => x.id !== id))`
- C. **`items.push(newItem); setItems(items);`**
- D. `setItems(items.map((x) => x.id === id ? { ...x, done: true } : x))`

---

## こたえ

<div class="ok">

**こたえ: C（push してから setItems）**

`items.push(newItem)` は **元の 配列 を 直接 変更**。 React は 「参照 が 同じ」 と 判断して **再レンダしない**。

⭕ **新しい 配列を 作って 渡す** が 正解:
- 追加: `[...items, newItem]`
- 削除: `items.filter(...)`
- 更新: `items.map(...)`

これを **イミュータブル更新** と 呼ぶ。 React の 設計思想 の 核心。

</div>

---

<!-- _class: section -->

# 2. Next.js App Router

---

## Next.js とは

<div class="grid2">
<div class="card">

### React と 何が 違う
- **ルーティング 内蔵**（ファイル＝ページ）
- **SSR / SSG / RSC** 全部 入り
- **API ルート** で バックエンド も 同居
- **画像・フォント最適化**
- **Vercel デプロイ 1コマンド**

</div>
<div class="card">

### App Router（v13+）
- `app/` ディレクトリ
- **React Server Components**
- **Server Actions**
- **Streaming**
- **Layout / Loading / Error** が ファイルで 表現

</div>
</div>

---

## ファイル ＝ ルート

<div class="code">
app/
├── layout.tsx          <span class="com"># 全ページ 共通 レイアウト</span>
├── page.tsx            <span class="com"># /</span>
├── about/
│   └── page.tsx        <span class="com"># /about</span>
├── todos/
│   ├── page.tsx        <span class="com"># /todos</span>
│   ├── loading.tsx     <span class="com"># /todos 読み込み中</span>
│   ├── error.tsx       <span class="com"># /todos エラー時</span>
│   └── [id]/
│       └── page.tsx    <span class="com"># /todos/:id</span>
└── api/
    └── todos/
        └── route.ts    <span class="com"># GET / POST /api/todos</span>
</div>

---

## Server Component vs Client Component

<div class="grid2">
<div class="card">

### Server Component（デフォルト）
```tsx
// app/users/page.tsx
async function UsersPage() {
  const users = await db.user.findMany();
  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

⭕ DB 直アクセス OK<br>
⭕ シークレット 漏れない<br>
❌ useState / onClick **使えない**

</div>
<div class="card">

### Client Component
```tsx
"use client";
// 先頭 に "use client" 必須
function Counter() {
  const [c, setC] = useState(0);
  return <button onClick={() => setC(c+1)}>{c}</button>;
}
```

⭕ useState / イベント OK<br>
❌ DB 直 NG<br>
❌ シークレット **バンドル される**

</div>
</div>

---

## 「境界」 を どこ に 引く か

<div class="code">
<span class="com">// app/dashboard/page.tsx （Server Component）</span>
<span class="key">import</span> <span class="type">UserList</span> <span class="key">from</span> <span class="str">"./UserList"</span>;
<span class="key">import</span> <span class="type">RefreshButton</span> <span class="key">from</span> <span class="str">"./RefreshButton"</span>;

<span class="key">export default async function</span> <span class="type">DashboardPage</span>() {
  <span class="key">const</span> users = <span class="key">await</span> db.user.findMany();  <span class="com">// サーバー側</span>
  <span class="key">return</span> (
    &lt;<span class="key">div</span>&gt;
      &lt;<span class="key">h1</span>&gt;ダッシュボード&lt;/<span class="key">h1</span>&gt;
      &lt;<span class="type">UserList</span> users={users} /&gt;       <span class="com">// データ受け渡し</span>
      &lt;<span class="type">RefreshButton</span> /&gt;                 <span class="com">// クライアント側</span>
    &lt;/<span class="key">div</span>&gt;
  );
}
</div>

<div class="tip">

💡 **インタラクション が 必要な 葉**（ボタン / フォーム）だけ Client。 **データ取得 / レイアウト** は Server。

</div>

---

## Server Action（フォーム送信 が シンプル）

<div class="code">
<span class="com">// app/todos/page.tsx</span>
<span class="key">import</span> { revalidatePath } <span class="key">from</span> <span class="str">"next/cache"</span>;

<span class="key">async function</span> createTodo(formData: <span class="type">FormData</span>) {
  <span class="str">"use server"</span>;
  <span class="key">const</span> title = formData.get(<span class="str">"title"</span>) <span class="key">as</span> <span class="type">string</span>;
  <span class="key">await</span> db.todo.create({ data: { title } });
  revalidatePath(<span class="str">"/todos"</span>);
}

<span class="key">export default async function</span> <span class="type">TodosPage</span>() {
  <span class="key">const</span> todos = <span class="key">await</span> db.todo.findMany();
  <span class="key">return</span> (
    &lt;<span class="key">form</span> action={createTodo}&gt;
      &lt;<span class="key">input</span> name=<span class="str">"title"</span> /&gt;
      &lt;<span class="key">button</span>&gt;追加&lt;/<span class="key">button</span>&gt;
    &lt;/<span class="key">form</span>&gt;
  );
}
</div>

---

<!-- _class: section -->

# 3. Server State / Client State 分離

---

## 「状態」 を 2つ に 分ける

<div class="grid2">
<div class="card">

### Server State
**サーバー が 真実 の 源**
- ユーザー / 投稿 / 商品 / 注文 …
- API で 取得、 キャッシュ、 更新後 再取得
- **TanStack Query** が 主役

</div>
<div class="card">

### Client State
**画面の 状態**
- モーダル 開閉 / フォーム入力中 / ダーク モード
- ブラウザ で 完結
- **useState / Zustand / Context** が 主役

</div>
</div>

---

## なぜ 分ける のか

<div class="ng">

❌ **全部 Redux に 入れる**<br>
→ API レスポンス を 手動で キャッシュ・無効化<br>
→ 「いつ 再取得？」 「ステイル？」 を 全画面 で 書く

</div>

<div class="ok">

⭕ **Server State** は TanStack Query<br>
→ キャッシュ・再取得・楽観的更新・無効化 が **宣言的**

⭕ **Client State** は Zustand<br>
→ シンプル、 100行 で 終わる

</div>

---

## TanStack Query 基本

<div class="code">
<span class="key">import</span> { useQuery } <span class="key">from</span> <span class="str">"@tanstack/react-query"</span>;

<span class="key">function</span> <span class="type">Todos</span>() {
  <span class="key">const</span> { data, isLoading, error } = useQuery({
    queryKey: [<span class="str">"todos"</span>],
    queryFn: () =&gt; fetch(<span class="str">"/api/todos"</span>).then((r) =&gt; r.json()),
  });

  <span class="key">if</span> (isLoading) <span class="key">return</span> &lt;<span class="key">p</span>&gt;読み込み中...&lt;/<span class="key">p</span>&gt;;
  <span class="key">if</span> (error)     <span class="key">return</span> &lt;<span class="key">p</span>&gt;エラー&lt;/<span class="key">p</span>&gt;;

  <span class="key">return</span> (
    &lt;<span class="key">ul</span>&gt;
      {data.map((t) =&gt; &lt;<span class="key">li</span> key={t.id}&gt;{t.title}&lt;/<span class="key">li</span>&gt;)}
    &lt;/<span class="key">ul</span>&gt;
  );
}
</div>

---

## TanStack Query の すごい ところ

<div class="grid3">
<div class="card">

### キャッシュ自動
同じ queryKey なら 共有、 別画面 でも 再取得 不要

</div>
<div class="card">

### ステイル/再取得
古く なったら 自動 再取得（フォーカス時・再接続時）

</div>
<div class="card">

### 楽観的更新
ローカル を 先に 更新、 失敗 したら ロールバック

</div>
</div>

---

## ミューテーション（書き込み）

<div class="code">
<span class="key">import</span> { useMutation, useQueryClient } <span class="key">from</span> <span class="str">"@tanstack/react-query"</span>;

<span class="key">function</span> <span class="type">AddTodo</span>() {
  <span class="key">const</span> qc = useQueryClient();
  <span class="key">const</span> mutation = useMutation({
    mutationFn: (title: <span class="type">string</span>) =&gt;
      fetch(<span class="str">"/api/todos"</span>, { method: <span class="str">"POST"</span>, body: <span class="type">JSON</span>.stringify({ title }) }),
    onSuccess: () =&gt; {
      qc.invalidateQueries({ queryKey: [<span class="str">"todos"</span>] });  <span class="com">// 自動 再取得</span>
    },
  });

  <span class="key">return</span> &lt;<span class="key">button</span> onClick={() =&gt; mutation.mutate(<span class="str">"新しい TODO"</span>)}&gt;追加&lt;/<span class="key">button</span>&gt;;
}
</div>

---

## Zustand ＝ シンプル な Client State

<div class="code">
<span class="key">import</span> { create } <span class="key">from</span> <span class="str">"zustand"</span>;

<span class="key">type</span> <span class="type">UIStore</span> = {
  sidebarOpen: <span class="type">boolean</span>;
  toggleSidebar: () =&gt; <span class="type">void</span>;
};

<span class="key">export const</span> useUIStore = create&lt;<span class="type">UIStore</span>&gt;((set) =&gt; ({
  sidebarOpen: <span class="key">false</span>,
  toggleSidebar: () =&gt; set((s) =&gt; ({ sidebarOpen: !s.sidebarOpen })),
}));

<span class="com">// 使う側</span>
<span class="key">function</span> <span class="type">Header</span>() {
  <span class="key">const</span> { sidebarOpen, toggleSidebar } = useUIStore();
  <span class="key">return</span> &lt;<span class="key">button</span> onClick={toggleSidebar}&gt;{sidebarOpen ? <span class="str">"閉じる"</span> : <span class="str">"開く"</span>}&lt;/<span class="key">button</span>&gt;;
}
</div>

---

## いつ Context、 いつ Zustand

<div class="grid3">
<div class="card">

### useState
1コンポーネント 内 だけ

</div>
<div class="card">

### Context
**頻繁 に 変わらない** グローバル（テーマ / 認証情報）

</div>
<div class="card">

### Zustand
**頻繁に 変わる** 共有 状態（UI 開閉 / 選択中 アイテム）

</div>
</div>

<div class="tip">

💡 Context を 「ストア」 代わり に 使うと **無関係 コンポーネント が 再レンダ**。 Zustand は 必要な 部分 だけ。

</div>

---

<!-- _class: section -->

# 4. スタイリング

---

## 主要 4スタイル

<div class="grid2">
<div class="card">

### Tailwind CSS（人気）
```tsx
<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
  保存
</button>
```
- クラス を 当てる だけ
- JIT で 軽量
- デザインシステム と 相性

</div>
<div class="card">

### CSS Modules
```tsx
import s from "./Button.module.css";
<button className={s.primary}>保存</button>
```
- 通常 の CSS、 自動で スコープ化
- フレームワーク 中立

</div>
</div>

---

## 主要 4スタイル（続き）

<div class="grid2">
<div class="card">

### shadcn/ui
- **Radix UI + Tailwind** の コピペ コンポーネント
- 「ライブラリ じゃない」、 コード を コピー して 持つ
- カスタマイズ 自由

</div>
<div class="card">

### CSS-in-JS（styled-components / Emotion）
- JS で CSS を 書く
- 動的スタイル に 強い
- SSR の パフォーマンス 注意（最近 やや 衰退）

</div>
</div>

---

## おすすめ の 組み合わせ（2026）

<div class="ok">

⭕ **Tailwind CSS** ＋ **shadcn/ui** ＋ **Lucide React**（アイコン）

- 学習コスト 中程度
- 圧倒的 な コミュニティ
- Next.js / Remix と 相性 最高
- AI（Cursor / Copilot）が **超 得意**

</div>

---

<!-- _class: section -->

# 5. パフォーマンス

---

## React の パフォーマンス 落とし穴

<div class="ng">

❌ **不要 な 再レンダ**：親 が レンダ する たび 全 子 が レンダ

</div>

<div class="ng">

❌ **巨大 リスト** を 一気に レンダ：1000件 で フリーズ

</div>

<div class="ng">

❌ **重い 計算** を 毎レンダ：CPU 100%

</div>

---

## 対策

<div class="code">
<span class="com">// 1. React.memo（不要 再レンダ 抑制）</span>
<span class="key">const</span> <span class="type">TodoItem</span> = <span class="type">React</span>.memo(<span class="key">function</span>({ todo }) {
  <span class="key">return</span> &lt;<span class="key">li</span>&gt;{todo.title}&lt;/<span class="key">li</span>&gt;;
});

<span class="com">// 2. useMemo / useCallback（重い 計算・関数 をキャッシュ）</span>
<span class="key">const</span> sorted = useMemo(
  () =&gt; todos.sort((a, b) =&gt; b.created - a.created),
  [todos]
);

<span class="com">// 3. 仮想スクロール（react-window）</span>
&lt;<span class="type">FixedSizeList</span> height={<span class="num">600</span>} itemCount={<span class="num">10000</span>} itemSize={<span class="num">35</span>}&gt;
  {<span class="type">Row</span>}
&lt;/<span class="type">FixedSizeList</span>&gt;
</div>

---

## Next.js の Image / Font 最適化

<div class="code">
<span class="key">import</span> <span class="type">Image</span> <span class="key">from</span> <span class="str">"next/image"</span>;
<span class="key">import</span> { <span class="type">Inter</span> } <span class="key">from</span> <span class="str">"next/font/google"</span>;

<span class="key">const</span> inter = <span class="type">Inter</span>({ subsets: [<span class="str">"latin"</span>] });

<span class="key">export default function</span> <span class="type">Page</span>() {
  <span class="key">return</span> (
    &lt;<span class="key">div</span> className={inter.className}&gt;
      &lt;<span class="type">Image</span> src=<span class="str">"/hero.png"</span> width={<span class="num">800</span>} height={<span class="num">400</span>} alt=<span class="str">"hero"</span> priority /&gt;
    &lt;/<span class="key">div</span>&gt;
  );
}
</div>

<div class="ok">

⭕ 画像: WebP / AVIF 自動変換、 サイズ別 配信、 LCP 改善<br>
⭕ フォント: 自動 サブセット、 CLS 防止

</div>

---

<!-- _class: handson -->

## ハンズオン: TODO アプリ を Next.js で

<div class="step">

1. `npx create-next-app@latest todo-app --typescript --tailwind --app`
2. `app/todos/page.tsx`（Server Component） で DB から TODO 一覧 を 取得（Turso 推奨）
3. `app/todos/AddForm.tsx`（Client Component） で フォーム + TanStack Query mutation
4. `app/todos/TodoItem.tsx` で チェック / 削除（Client）
5. Server Action で 作成 / 更新 / 削除
6. `revalidatePath("/todos")` で 自動 再取得
7. Tailwind で スタイル、 shadcn/ui で Button・Input を 入れて 整える
8. `npm run build && npm start` で 本番 起動

</div>

---

<!-- _class: warn -->

## 気をつけること

<div class="ng">

❌ **すべて を Client Component** にすると Next.js の メリット 半減

</div>

<div class="ng">

❌ **API key を Client Component** に 書く → ブラウザ に 漏洩

</div>

<div class="ng">

❌ **巨大 な useState オブジェクト**：1つの 状態 を 1コンポーネント で 抱え過ぎ

</div>

<div class="ok">

⭕ Client 境界 を **小さく / 葉に** 保つ<br>
⭕ シークレット は Server Component / Server Action / .env で<br>
⭕ Server State / Client State を 物理的 に 別ストア

</div>

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

<div class="grid3">
<div class="card">

### 1️⃣ React の 思考
コンポーネント分割・単方向データフロー・状態 が UI を 決定。

</div>
<div class="card">

### 2️⃣ Next.js App Router
RSC / Server Action で SSR を 自然に。 境界 は 葉 に。

</div>
<div class="card">

### 3️⃣ 状態 を 2つ に 分ける
Server State は TanStack Query、 Client State は Zustand。

</div>
</div>

---

## 次回予告

<div class="card">

### 第3回｜バックエンドのスケール
**DB 設計 再訪 / マイグレーション / N+1 問題 / インデックス / Redis キャッシュ**。 DB は **Turso** を 第1選択肢として、 リード重い API に キャッシュ 層 を 追加して 体感 します。

</div>

<div class="tip">

📚 おすすめの宿題:
- 自分の Next.js プロジェクト で RSC / Client の 境界 を 整理
- TanStack Query Devtools を 入れて キャッシュ を 観察
- shadcn/ui の Button / Dialog を 1つ 入れる

</div>

---

<!-- _class: title -->

# おつかれさまでした 👏

### Server / Client の 境界 を 引ける ように！<br>次回 「バックエンド の スケール」 で お会いしましょう。
