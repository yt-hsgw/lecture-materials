---
marp: true
theme: default
paginate: true
size: 16:9
header: '中学生プログラミング塾 ／ 中級 第2回'
footer: 'フロントエンド実装'
style: |
  :root {
    --c-primary: #4F46E5; --c-secondary: #F59E0B; --c-accent: #10B981;
    --c-warn: #EF4444; --c-dark: #0F172A; --c-light: #F8FAFC;
    --c-html: #E34F26; --c-css: #2965F1; --c-js: #F7DF1E;
  }
  section { background: var(--c-light); color: var(--c-dark);
    font-family: 'Inter','Hiragino Sans','Yu Gothic',sans-serif; padding: 56px; }
  section h1 { color: var(--c-primary); font-size: 52px; border-bottom: none; letter-spacing:-.5px; }
  section h2 { color: var(--c-primary); font-size: 36px; letter-spacing:-.3px; }
  section h3 { color: var(--c-accent); font-size: 24px; }
  section.title { background: linear-gradient(135deg,#4F46E5,#7C3AED,#EC4899); color: white; text-align: center; }
  section.title h1 { color: white; font-size: 64px; }
  section.section { background: var(--c-dark); color: white; text-align: center; }
  section.section h1 { color: var(--c-secondary); font-size: 54px; }
  section.handson { background: #ECFDF5; }
  section.handson h1 { color: var(--c-accent); }
  .card { background: white; border-radius: 12px; padding: 18px 22px; margin: 10px 0;
    box-shadow: 0 2px 8px rgba(15,23,42,.08); border:1px solid rgba(15,23,42,.06); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
  .grid4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 10px; }
  .big { font-size: 60px; font-weight: bold; text-align: center; letter-spacing: -1px; }
  .ok { background: #ECFDF5; border-left: 5px solid var(--c-accent);
    border-radius: 8px; padding: 12px 16px; }
  .ng { background: #FEF2F2; border-left: 5px solid var(--c-warn);
    border-radius: 8px; padding: 12px 16px; }
  .tip { background: #FFFBEB; border-left: 5px solid var(--c-secondary);
    border-radius: 8px; padding: 12px 16px; }
  .code { background: #0F172A; color: #E2E8F0; border-radius: 8px;
    padding: 14px 18px; font-family: 'JetBrains Mono','SF Mono','Menlo',monospace;
    font-size: 17px; line-height: 1.7; overflow-x: auto; }
  .code .tag { color: #93C5FD; }
  .code .at { color: #FCD34D; }
  .code .str { color: #FDBA74; }
  .code .key { color: #C4B5FD; }
  .code .num { color: #6EE7B7; }
  .code .com { color: #64748B; font-style: italic; }
  .code .fn { color: #5EEAD4; }
  .badge { display:inline-block; padding:3px 10px; border-radius:6px;
    font-size:14px; font-weight:bold; color:white; }
  .badge.html { background: var(--c-html); }
  .badge.css { background: var(--c-css); }
  .badge.js { background: var(--c-dark); color: var(--c-js); }
  .badge.pri { background: var(--c-primary); }
---

<!-- _class: title -->

# フロントエンド<br>実装

### 第2回 ／ 中学生プログラミング塾・中級

<br>

設計を <b>動く画面</b> に！ <span class="badge html">HTML</span> <span class="badge css">CSS</span> <span class="badge js">JS</span>

---

## 前回の 復習

<div class="grid3">
<div class="card">

### 📋 要件定義
3行で 書いた

</div>
<div class="card">

### 🖼️ ワイヤフレーム
画面の絵 を 描いた

</div>
<div class="card">

### 💾 データモデル
JSON で 設計

</div>
</div>

<br>

**企画書 ＋ Task型** ができてる前提で 進めます。

---

## きょうのゴール

- ✅ **3層モデル**（HTML / CSS / JS）が 説明できる
- ✅ **DOM操作** で 要素を 追加・削除 できる
- ✅ **イベント** で クリックに反応 できる
- ✅ **localStorage** で データを 永続化 できる
- ✅ **完成形の TODOアプリ** が 動く

---

<!-- _class: section -->

# 1. フロントエンドの<br>3層 モデル

---

## 3つの言語＝役割分担

<div class="grid3">
<div class="card" style="border-top:6px solid var(--c-html);text-align:center">
<div style="font-size:48px">🏗️</div>
<h3 style="color:var(--c-html)">HTML</h3>
<p style="color:#475569;font-size:14px">何があるか<br><b>骨組み</b></p>
</div>
<div class="card" style="border-top:6px solid var(--c-css);text-align:center">
<div style="font-size:48px">🎨</div>
<h3 style="color:var(--c-css)">CSS</h3>
<p style="color:#475569;font-size:14px">どう見えるか<br><b>見た目</b></p>
</div>
<div class="card" style="border-top:6px solid #DAA520;text-align:center">
<div style="font-size:48px">⚡</div>
<h3 style="color:#B45309">JavaScript</h3>
<p style="color:#475569;font-size:14px">どう動くか<br><b>振る舞い</b></p>
</div>
</div>

<br>

**家** にたとえると： HTML＝<b>柱</b>、CSS＝<b>壁紙</b>、JS＝<b>電気・水道</b>。

---

## なぜ 分けるのか

<div class="card tip">

### 💡 関心の 分離（Separation of Concerns）

</div>

<br>

- **HTML** を 変えても CSS / JS は そのまま
- **CSS** を 変えても 構造は そのまま
- **JS** を 変えても 見た目は そのまま

<br>

→ **デザイナーと エンジニアが 並行作業** できる！

---

<!-- _class: section -->

# 2. HTML<br>骨組み

---

## セマンティックタグ ＝ 意味のある タグ

<div class="grid2">
<div class="ng">

### ❌ 全部 div
```html
<div class="header">...</div>
<div class="main">...</div>
<div class="footer">...</div>
```

</div>
<div class="ok">

### ✅ 意味で 使い分け
```html
<header>...</header>
<main>...</main>
<footer>...</footer>
```

</div>
</div>

<br>

検索エンジン や スクリーンリーダーが **意味を理解** できる！

---

## TODOアプリ の HTML 骨組み

<div class="code">
<span class="tag">&lt;main</span> <span class="at">class</span>=<span class="str">"todo-app"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;h1&gt;</span>📝 My Tasks<span class="tag">&lt;/h1&gt;</span>

  <span class="tag">&lt;form</span> <span class="at">id</span>=<span class="str">"taskForm"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;input</span> <span class="at">id</span>=<span class="str">"taskInput"</span> <span class="at">placeholder</span>=<span class="str">"何をする？"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;button</span> <span class="at">type</span>=<span class="str">"submit"</span><span class="tag">&gt;</span>追加<span class="tag">&lt;/button&gt;</span>
  <span class="tag">&lt;/form&gt;</span>

  <span class="tag">&lt;ul</span> <span class="at">id</span>=<span class="str">"taskList"</span><span class="tag">&gt;&lt;/ul&gt;</span>
<span class="tag">&lt;/main&gt;</span>
</div>

<br>

`id` と `class` を 使い分けるのが ポイント！

---

## id と class の 使い分け

<div class="grid2">
<div class="card">

### 🎯 id ＝ 唯一
1ページに **1つだけ**<br>
JSから 探す用：<br>
`document.getElementById()`

</div>
<div class="card">

### 🏷️ class ＝ 仲間分け
1ページに **複数OK**<br>
CSSで まとめてスタイル：<br>
`.task-item { ... }`

</div>
</div>

---

<!-- _class: section -->

# 3. CSS<br>見た目

---

## セレクタ＝「だれに スタイルを 当てるか」

<div class="code">
<span class="com">/* 要素 ぜんぶ */</span>
<span class="key">main</span> { padding: <span class="num">20px</span>; }

<span class="com">/* class="task-item" の要素 */</span>
.<span class="key">task-item</span> { background: white; }

<span class="com">/* id="taskInput" の要素 */</span>
#<span class="key">taskInput</span> { font-size: <span class="num">16px</span>; }

<span class="com">/* main の中の input だけ */</span>
<span class="key">main input</span> { border: <span class="num">1px</span> solid #ccc; }
</div>

---

## Flexbox で 横並び

<div class="code">
.<span class="key">task-item</span> {
  <span class="key">display</span>: flex;        <span class="com">/* 横並びに */</span>
  <span class="key">align-items</span>: center; <span class="com">/* 縦中央 */</span>
  <span class="key">gap</span>: <span class="num">10px</span>;          <span class="com">/* すきま */</span>
  padding: <span class="num">12px</span>;
}
</div>

<br>

→ **チェックボックス・タスク本文・削除ボタン** を 横に 並べる時に 使う。

---

## 「動く → きれいに」 の順

<div class="card tip">

### 💡 まず HTML だけで 動かす
CSS は **あとから**！

</div>

<br>

CSS から こだわると、 機能の 実装が 遅くなる。<br>
**「動いた」 と 「きれい」 は 別の 工程** と 思おう。

---

<!-- _class: section -->

# 4. JavaScript<br>動的操作

---

## 要素を 取得：querySelector

<div class="code">
<span class="com">// id を 探す</span>
<span class="key">const</span> input = document.<span class="fn">getElementById</span>(<span class="str">'taskInput'</span>);

<span class="com">// CSSセレクタで 探す（万能）</span>
<span class="key">const</span> input = document.<span class="fn">querySelector</span>(<span class="str">'#taskInput'</span>);
<span class="key">const</span> items = document.<span class="fn">querySelectorAll</span>(<span class="str">'.task-item'</span>);
</div>

<br>

→ 中級では **querySelector** を 推奨。 CSSの 知識が 使い回せる。

---

## イベント：addEventListener

<div class="code">
form.<span class="fn">addEventListener</span>(<span class="str">'submit'</span>, (<span class="key">event</span>) => {
  event.<span class="fn">preventDefault</span>();          <span class="com">// ページ移動を 止める</span>
  <span class="key">const</span> text = input.value.<span class="fn">trim</span>();
  <span class="key">if</span> (!text) <span class="key">return</span>;            <span class="com">// 空なら 何もしない</span>
  <span class="fn">addTask</span>(text);                  <span class="com">// 自前の関数を 呼ぶ</span>
  input.value = <span class="str">''</span>;
});
</div>

---

## 配列 と forEach

<div class="code">
<span class="key">let</span> tasks = [];  <span class="com">// 全タスク（Task型 の配列）</span>

<span class="key">function</span> <span class="fn">addTask</span>(text) {
  tasks.<span class="fn">push</span>({
    id: Date.<span class="fn">now</span>(),
    text: text,
    done: <span class="key">false</span>
  });
  <span class="fn">render</span>();
}

<span class="key">function</span> <span class="fn">render</span>() {
  list.<span class="key">innerHTML</span> = <span class="str">''</span>;
  tasks.<span class="fn">forEach</span>(task => {
    <span class="key">const</span> li = <span class="fn">createTaskElement</span>(task);
    list.<span class="fn">appendChild</span>(li);
  });
}
</div>

---

## innerHTML vs createElement

<div class="grid2">
<div class="card">

### 📝 innerHTML
```js
list.innerHTML = '<li>X</li>';
```
- **簡単** だが
- **XSS** の リスク

</div>
<div class="card">

### 🧱 createElement
```js
const li = document.createElement('li');
li.textContent = 'X';
list.appendChild(li);
```
- **安全**
- やや 長い

</div>
</div>

<br>

→ ユーザー入力は **createElement + textContent** が 安全！

---

## localStorage で 保存

<div class="code">
<span class="com">// 保存（オブジェクト → 文字列）</span>
localStorage.<span class="fn">setItem</span>(<span class="str">'tasks'</span>, JSON.<span class="fn">stringify</span>(tasks));

<span class="com">// 読み込み（文字列 → オブジェクト）</span>
<span class="key">const</span> saved = localStorage.<span class="fn">getItem</span>(<span class="str">'tasks'</span>);
tasks = saved ? JSON.<span class="fn">parse</span>(saved) : [];
</div>

<br>

→ ブラウザを 閉じても データが 残る！

---

## 永続化の パターン

<div class="card">

### データを 変えたら 必ず 保存

</div>

<div class="code">
<span class="key">function</span> <span class="fn">save</span>() {
  localStorage.<span class="fn">setItem</span>(<span class="str">'tasks'</span>, JSON.<span class="fn">stringify</span>(tasks));
}

<span class="key">function</span> <span class="fn">addTask</span>(text) {
  tasks.<span class="fn">push</span>({ id: Date.<span class="fn">now</span>(), text, done: <span class="key">false</span> });
  <span class="fn">save</span>();         <span class="com">// ← 必ず</span>
  <span class="fn">render</span>();
}
</div>

---

<!-- _class: section -->

# 5. ハンズオン
## 45分で 動く TODO

---

<!-- _class: handson -->

## 段階的に 作る（45分）

| ステップ | やること | 時間 |
|---|---|---|
| ① | HTML 骨組み（form + ul） | 10分 |
| ② | CSS で 基本デザイン | 10分 |
| ③ | JS：追加 機能 | 10分 |
| ④ | JS：完了チェック・削除 | 10分 |
| ⑤ | localStorage で 永続化 | 5分 |

---

<!-- _class: handson -->

## デバッグの 基本

<div class="card">

### 🛠️ DevTools を 開く（F12 / ⌥⌘I）

</div>

<div class="grid3">
<div class="card">

### Console
`console.log()`<br>で 変数を 表示

</div>
<div class="card">

### Elements
HTMLが どう なってるか 見る

</div>
<div class="card">

### Application
localStorage の中身 を 確認

</div>
</div>

---

<!-- _class: handson -->

## よくある エラー TOP3

<div class="card warn">

### `Cannot read property of null`
→ `querySelector` が 要素を 見つけられない<br>
→ id / class の **タイポ** を 確認！

</div>

<div class="card warn">

### `Uncaught SyntaxError`
→ カッコ や `;` の **閉じ忘れ**<br>
→ DevTools の 行番号 から たどる

</div>

<div class="card warn">

### `addEventListener is not a function`
→ 要素じゃない ものに 付けようと してる<br>
→ `console.log()` で 中身 を 確認

</div>

---

<!-- _class: section -->

# 6. コードレビュー

---

## レビュー観点 3つ

<div class="grid3">
<div class="card">

### 📛 名前
変数名・関数名は<br>**読んで わかる**？

</div>
<div class="card">

### 🔁 重複
同じコードが<br>**2回 以上**？

</div>
<div class="card">

### 🧹 整理
1関数 1機能 に<br>**なってる**？

</div>
</div>

---

## レビューの 言い方

<div class="grid2">
<div class="ng">

### 🙅 言わない
- 「ヘタクソ」
- 「ぜんぜん ダメ」
- 「全部 書き直し」

</div>
<div class="ok">

### 🙆 言う
- 「**この関数 名前 何？**」
- 「**ここ 似たコード ない？**」
- 「**こうしたら 短くなる かも**」

</div>
</div>

---

<!-- _class: section -->

# 7. まとめ

---

## 今日 おぼえたこと

1. フロントエンドは **HTML / CSS / JS** の 3層
2. HTML＝骨組み、 CSS＝見た目、 JS＝振る舞い
3. **querySelector** で 要素を 取得、 **addEventListener** で イベント
4. データは **配列で 持って forEach で描画**
5. **localStorage** で データが ブラウザ に 残る

---

## 次回までの 宿題

<div class="card">

### 💻 TODOアプリ を 完成させる

1. 今日 出来なかった所を **おうちで 完成**
2. **CSS で 自分好み** に カスタマイズ
3. （余裕あれば） **完了 タスクを 隠す** ボタンを 追加

</div>

<br>

> 次回は サーバー！ いまの **localStorage** が **API呼び出し** に 変わる。

---

## 次回予告

<div class="big">🐍 🌐</div>

# 第3回｜バックエンド入門

**Python の Flask** で 最小 API サーバーを 立てる！<br>
`GET /api/tasks` `POST /api/tasks` を fetch で 呼ぶ。<br>
データが **サーバーに 保存** されるように。

---

<!-- _class: title -->

# 動いた！ おつかれさま 💻✨

### コードが UI に なる 体験

<br>

CSS で 仕上げて、家族や 友だちに 見せよう！<br>
次回 **「バックエンド」** で アプリは ぐっと 本格的に。
