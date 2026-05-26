---
marp: true
theme: default
paginate: true
size: 16:9
header: '中学生プログラミング塾 ／ 中級 第3回'
footer: 'バックエンド入門（Python Flask）'
style: |
  :root {
    --c-primary: #4F46E5; --c-secondary: #F59E0B; --c-accent: #10B981;
    --c-warn: #EF4444; --c-dark: #0F172A; --c-light: #F8FAFC;
    --c-get: #10B981; --c-post: #4F46E5; --c-put: #F59E0B; --c-del: #EF4444;
  }
  section { background: var(--c-light); color: var(--c-dark);
    font-family: 'Inter','Hiragino Sans','Yu Gothic',sans-serif; padding: 56px; }
  section h1 { color: var(--c-primary); font-size: 52px; border-bottom: none; letter-spacing:-.5px; }
  section h2 { color: var(--c-primary); font-size: 36px; letter-spacing:-.3px; }
  section h3 { color: var(--c-accent); font-size: 24px; }
  section.title { background: linear-gradient(135deg,#4F46E5,#7C3AED,#10B981); color: white; text-align: center; }
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
  .code .str { color: #FDBA74; }
  .code .key { color: #C4B5FD; }
  .code .num { color: #6EE7B7; }
  .code .com { color: #64748B; font-style: italic; }
  .code .fn { color: #5EEAD4; }
  .verb { display: inline-block; padding: 4px 12px; border-radius: 6px;
    font-family: 'JetBrains Mono','SF Mono',monospace; font-weight: bold;
    font-size: 14px; color: white; }
  .verb.GET { background: var(--c-get); }
  .verb.POST { background: var(--c-post); }
  .verb.PUT { background: var(--c-put); color: var(--c-dark); }
  .verb.DELETE { background: var(--c-del); }
  .status { display: inline-block; padding: 2px 10px; border-radius: 6px;
    font-family: 'JetBrains Mono','SF Mono',monospace; font-weight: bold;
    font-size: 13px; }
  .status.s2 { background: #D1FAE5; color: #065F46; }
  .status.s4 { background: #FEF3C7; color: #92400E; }
  .status.s5 { background: #FEE2E2; color: #991B1B; }
---

<!-- _class: title -->

# バックエンド入門

### 第3回 ／ 中学生プログラミング塾・中級

<br>

データを <b>サーバーに 預ける</b>！ 🐍 🌐

---

## 前回の 復習

<div class="grid3">
<div class="card">

### 🏗️ HTML
骨組み

</div>
<div class="card">

### ⚡ JS + DOM
動的操作

</div>
<div class="card">

### 💾 localStorage
ブラウザ保存

</div>
</div>

<br>

動く TODOアプリ ができた！でも **大きな問題** が…

---

## localStorage の 限界

<div class="ng">

### ❌ ブラウザ ごと に 別データ
- スマホ で 追加 → PC で 見えない
- 友だちと **共有 できない**
- ブラウザを 消すと データも 消える
- 容量 約 **5MB** まで

</div>

<br>

→ **サーバー** に データを 預ければ 全部 解決！

---

## きょうのゴール

- ✅ **クライアント・サーバー** モデルが 理解できる
- ✅ **HTTP** の リクエスト／レスポンス が分かる
- ✅ **Flask** で 最小サーバーが 立てられる
- ✅ **CRUD API**（GET/POST/PUT/DELETE）が 書ける
- ✅ フロントから **fetch()** で 呼び出せる

---

<!-- _class: section -->

# 1. クライアント／サーバー

---

## サーバー ＝ 「中央の 倉庫」

<div class="big">🏪</div>

- **クライアント**：ブラウザ・スマホアプリ（ユーザー側）
- **サーバー**：データを 預かる コンピュータ

<br>

何人が アクセスしても **同じデータ** を 返せる。<br>
それが **共有** と **永続** の 仕組み。

---

## 図でイメージ

<div class="code">
[ブラウザ A] ──── リクエスト ────▶ [サーバー]
                                       │
[ブラウザ B] ──── リクエスト ────▶  ┘
                                       │
                ◀──── レスポンス ─────┘
</div>

<br>

サーバーは **誰からの 問い合わせ** にも 答える 受付係。

---

<!-- _class: section -->

# 2. HTTP の基本

---

## HTTP ＝ 「会話のルール」

<div class="card">

### リクエスト（質問） と レスポンス（返事） を セットで やり取り

</div>

<br>

ブラウザ：「`GET /api/tasks` ください」<br>
サーバー：「`200 OK` どうぞ → [{...}, {...}]」

---

## HTTP メソッド（4種類）

| メソッド | 意味 | TODOアプリ で |
|---|---|---|
| <span class="verb GET">GET</span> | 取得 | 全タスク 一覧 |
| <span class="verb POST">POST</span> | 新規追加 | タスク 追加 |
| <span class="verb PUT">PUT</span> | 更新 | 完了フラグ 変更 |
| <span class="verb DELETE">DELETE</span> | 削除 | タスク 削除 |

<br>

→ この4つで CRUD（Create/Read/Update/Delete）が ぜんぶ できる！

---

## URL の 設計（リソース）

<div class="card">

```
GET    /api/tasks       … 一覧 取得
GET    /api/tasks/1     … ID=1 を 取得
POST   /api/tasks       … 新規 作成
PUT    /api/tasks/1     … ID=1 を 更新
DELETE /api/tasks/1     … ID=1 を 削除
```

</div>

<br>

URLは **名詞**（リソース）、動詞は メソッドで 表す。<br>
これが **RESTful** な 設計。

---

## ステータスコード

<div class="grid3">
<div class="card">

### <span class="status s2">2xx</span> 成功
- **200** OK
- **201** Created
- **204** No Content

</div>
<div class="card">

### <span class="status s4">4xx</span> リクエスト ミス
- **400** Bad Request
- **404** Not Found
- **403** Forbidden

</div>
<div class="card">

### <span class="status s5">5xx</span> サーバー側 エラー
- **500** Internal Error
- **503** Unavailable

</div>
</div>

---

## JSON ＝ データの 形式

<div class="code">
{
  <span class="key">"id"</span>: <span class="num">1</span>,
  <span class="key">"text"</span>: <span class="str">"数学の宿題"</span>,
  <span class="key">"done"</span>: <span class="num">false</span>
}
</div>

<br>

- 第1回で 設計したのが **JSON**！
- サーバーは JSON で 返す
- ブラウザは JSON を 受け取って 表示

---

<!-- _class: section -->

# 3. Flask 入門

---

## Flask ＝ Python の Webサーバー

<div class="card">

### 軽くて 速く 学べる
学校で 使われがちな **教科書フレームワーク**

</div>

<br>

<div class="code">
pip install flask
</div>

→ これ だけ で 準備 OK！

---

## Hello World サーバー

<div class="code">
<span class="com"># app.py</span>
<span class="key">from</span> flask <span class="key">import</span> Flask

app = <span class="fn">Flask</span>(__name__)

<span class="key">@app</span>.<span class="fn">route</span>(<span class="str">'/'</span>)
<span class="key">def</span> <span class="fn">hello</span>():
    <span class="key">return</span> <span class="str">'Hello, World!'</span>

<span class="key">if</span> __name__ == <span class="str">'__main__'</span>:
    app.<span class="fn">run</span>(debug=<span class="key">True</span>)
</div>

<br>

`python app.py` → http://localhost:5000 で アクセス！

---

## JSON を 返す

<div class="code">
<span class="key">from</span> flask <span class="key">import</span> Flask, jsonify

app = <span class="fn">Flask</span>(__name__)

tasks = [
  { <span class="str">'id'</span>: <span class="num">1</span>, <span class="str">'text'</span>: <span class="str">'宿題'</span>, <span class="str">'done'</span>: <span class="key">False</span> }
]

<span class="key">@app</span>.<span class="fn">route</span>(<span class="str">'/api/tasks'</span>)
<span class="key">def</span> <span class="fn">get_tasks</span>():
    <span class="key">return</span> <span class="fn">jsonify</span>(tasks)
</div>

<br>

`jsonify` は Python の dict / list を **JSON文字列** に 変換！

---

<!-- _class: section -->

# 4. TODO API を 設計

---

## 4つの エンドポイント

<div class="code">
<span class="key">@app</span>.<span class="fn">route</span>(<span class="str">'/api/tasks'</span>, methods=[<span class="str">'GET'</span>])
<span class="key">def</span> <span class="fn">list_tasks</span>():
    <span class="key">return</span> <span class="fn">jsonify</span>(tasks)

<span class="key">@app</span>.<span class="fn">route</span>(<span class="str">'/api/tasks'</span>, methods=[<span class="str">'POST'</span>])
<span class="key">def</span> <span class="fn">create_task</span>():
    data = request.<span class="fn">get_json</span>()
    new = { <span class="str">'id'</span>: <span class="fn">next_id</span>(), <span class="str">'text'</span>: data[<span class="str">'text'</span>], <span class="str">'done'</span>: <span class="key">False</span> }
    tasks.<span class="fn">append</span>(new)
    <span class="key">return</span> <span class="fn">jsonify</span>(new), <span class="num">201</span>
</div>

---

## 続き：PUT と DELETE

<div class="code">
<span class="key">@app</span>.<span class="fn">route</span>(<span class="str">'/api/tasks/&lt;int:tid&gt;'</span>, methods=[<span class="str">'PUT'</span>])
<span class="key">def</span> <span class="fn">update_task</span>(tid):
    task = <span class="fn">find</span>(tid)
    <span class="key">if not</span> task: <span class="key">return</span> <span class="str">''</span>, <span class="num">404</span>
    task[<span class="str">'done'</span>] = request.<span class="fn">get_json</span>()[<span class="str">'done'</span>]
    <span class="key">return</span> <span class="fn">jsonify</span>(task)

<span class="key">@app</span>.<span class="fn">route</span>(<span class="str">'/api/tasks/&lt;int:tid&gt;'</span>, methods=[<span class="str">'DELETE'</span>])
<span class="key">def</span> <span class="fn">delete_task</span>(tid):
    <span class="key">global</span> tasks
    tasks = [t <span class="key">for</span> t <span class="key">in</span> tasks <span class="key">if</span> t[<span class="str">'id'</span>] != tid]
    <span class="key">return</span> <span class="str">''</span>, <span class="num">204</span>
</div>

---

<!-- _class: section -->

# 5. フロントから 呼ぶ<br>fetch()

---

## fetch ＝ ブラウザの API呼び出し関数

<div class="code">
<span class="com">// 全タスク 取得</span>
<span class="key">const</span> res = <span class="key">await</span> <span class="fn">fetch</span>(<span class="str">'/api/tasks'</span>);
<span class="key">const</span> tasks = <span class="key">await</span> res.<span class="fn">json</span>();
<span class="fn">render</span>(tasks);
</div>

<br>

- `fetch()` は **Promise** を 返す
- `await` で 結果を 待つ
- `.json()` で JSONに 変換

---

## POST で 新規作成

<div class="code">
<span class="key">const</span> res = <span class="key">await</span> <span class="fn">fetch</span>(<span class="str">'/api/tasks'</span>, {
  method: <span class="str">'POST'</span>,
  headers: { <span class="str">'Content-Type'</span>: <span class="str">'application/json'</span> },
  body: JSON.<span class="fn">stringify</span>({ text: <span class="str">'新しいタスク'</span> })
});
<span class="key">const</span> created = <span class="key">await</span> res.<span class="fn">json</span>();
</div>

<br>

POST/PUT は `body` に JSON を つける！

---

## CORS の壁

<div class="card warn">

### ⚠️ ブラウザ：「別の オリジン だと 拒否します」

</div>

<br>

http://localhost:3000（フロント）から<br>
http://localhost:5000（Flask）を 呼ぶと **エラー**！

<br>

→ Flask 側で **CORS を 許可** が 必要：

<div class="code">
<span class="key">from</span> flask_cors <span class="key">import</span> CORS
<span class="fn">CORS</span>(app)
</div>

---

## localStorage → API への 移行

<div class="grid2">
<div class="card">

### 第2回（before）
```js
let tasks = JSON.parse(
  localStorage.getItem('tasks')
);
```

</div>
<div class="card" style="border-left:5px solid var(--c-accent)">

### 第3回（after）
```js
const res = await fetch('/api/tasks');
let tasks = await res.json();
```

</div>
</div>

<br>

→ **画面のコードは ほぼ そのまま**！ 取得方法 だけが 変わる。

---

<!-- _class: section -->

# 6. ハンズオン
## 50分で 動く API

---

<!-- _class: handson -->

## やることリスト（50分）

| ステップ | やる事 | 時間 |
|---|---|---|
| ① | `pip install flask flask-cors` | 5分 |
| ② | Hello World サーバー 起動 | 5分 |
| ③ | GET /api/tasks 実装 | 10分 |
| ④ | POST /api/tasks 実装 | 10分 |
| ⑤ | PUT/DELETE 実装 | 10分 |
| ⑥ | フロントから fetch で 接続 | 10分 |

---

<!-- _class: handson -->

## デバッグの 道具箱

<div class="grid2">
<div class="card">

### 🐍 Flask 側
- ターミナルに **print()** 出力
- `debug=True` で エラー詳細
- リロード も 自動

</div>
<div class="card">

### 🌐 ブラウザ 側
- DevTools **Network タブ**
- リクエスト・レスポンス 全部 見える
- ステータスコード も

</div>
</div>

---

<!-- _class: handson -->

## ⚠️ セキュリティ

<div class="ng">

### 絶対に やらない こと

- **APIキー** を コードに 直書き → `.env` を 使う
- **本名・住所** を サンプルデータに 入れる
- **GitHub** に `.env` を コミット → `.gitignore`！

</div>

<br>

→ 中級では **教室の中** で 動かすだけ。 公開は 第4回で 慎重に！

---

<!-- _class: section -->

# 7. まとめ

---

## 今日 おぼえたこと

1. **クライアント／サーバー** モデル
2. **HTTP** ＝ メソッド + URL + ステータス + JSON
3. **Flask** で 最小サーバー（`@app.route`）
4. **CRUD** ＝ GET / POST / PUT / DELETE
5. **fetch()** で フロントから 呼び出す
6. **CORS** に注意（`flask-cors`）

---

## 次回までの 宿題

<div class="card">

### 💾 サーバーを 完成

1. CRUD 4つ を **おうちで 完成**
2. 第2回の フロントから **fetch で 接続**
3. （余裕あれば） JSON ファイルに **データ永続化**（`json.dump`）

</div>

---

## 次回予告

<div class="big">🐛 ✅</div>

# 第4回｜テスト・Git・公開

DevTools で **デバッグ**、 **Git** で バージョン管理、<br>
**GitHub Pages** や **Render** で 公開！<br>
これで コース 修了 🎓

---

<!-- _class: title -->

# サーバーが 動いた！ おつかれさま 🐍

### 「アプリ」 から 「Webサービス」 へ

<br>

データが **どこからでも** アクセスできる。<br>
これが バックエンドの 本領！
