---
marp: true
theme: default
paginate: true
size: 16:9
header: '高校生プログラミング塾 ／ 中級 第3回'
footer: 'バックエンドのスケール'
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

# バックエンドの<br>スケール

### 第3回 ／ 高校生プログラミング塾・中級

<br>

きょうは **DB設計 / マイグレーション / Redis / キャッシュ戦略** で<br>**100万件 / 100同時** を さばく ！ 🗄️⚡🔁

---

## 前回の復習

<div class="grid3">
<div class="card">

### ⚛️ React 思考
コンポーネント分割・単方向データフロー

</div>
<div class="card">

### ▲ Next.js App Router
RSC / Server Action / 境界 は 葉

</div>
<div class="card">

### 💎 状態分離
Server State (TanStack) / Client State (Zustand)

</div>
</div>

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ DB を **本気** で 設計
正規化 / 主キー / 外部キー / インデックス / トランザクション

</div>
<div class="card">

### ✅ 安全な **マイグレーション**
Drizzle / Prisma / Atlas で スキーマ変更 を Git管理

</div>
<div class="card">

### ✅ **Redis キャッシュ** で 体感
リード重い API に キャッシュ 層 を 追加、 N+1 を 倒す

</div>

---

<!-- _class: section -->

# 1. DB 設計 再訪

---

## なぜ いま DB 設計 を 改めて

<div class="card">

中学生・上級 で SQL に 触れた けど、 「動けば OK」 で 通り過ぎた こと:

- **正規化**（重複を 避ける）
- **複合キー / 一意制約**
- **外部キー** と カスケード
- **インデックス**（B-tree の 気持ち）
- **トランザクション**（ACID）

これらを 知らない と **100万件 で 死ぬ** API が 量産 される。

</div>

---

## 正規化（第1〜3正規形）

<div class="grid2">
<div class="card">

### 非正規（NG）
| User                       |
|----------------------------|
| Alice / [tag1, tag2, tag3] |
| Bob   / [tag1]             |

タグ が **1セル に 複数値**

</div>
<div class="card">

### 正規化 後（OK）
**User**: id, name<br>
**Tag**: id, name<br>
**UserTag**: user_id, tag_id

「ユーザー 1人 が タグ 複数」 を 中間テーブル で 表現

</div>
</div>

---

## インデックス ＝ B-tree

<div class="code">
<span class="com">-- 1000万件 の users テーブル</span>
<span class="key">SELECT</span> * <span class="key">FROM</span> users <span class="key">WHERE</span> email = <span class="str">'alice@example.com'</span>;

<span class="com">-- インデックス なし: 全行 スキャン → 数秒</span>
<span class="com">-- インデックス あり: B-tree 探索 → 数ms</span>

<span class="key">CREATE INDEX</span> idx_users_email <span class="key">ON</span> users(email);

<span class="com">-- 複合インデックス（順番 が 大事！）</span>
<span class="key">CREATE INDEX</span> idx_posts_user_created <span class="key">ON</span> posts(user_id, created_at <span class="key">DESC</span>);
</div>

<div class="ok">

⭕ **WHERE / ORDER BY / JOIN** で 使う カラム に インデックス<br>
⭕ 複合インデックス は **使う 順番** で 設計

</div>

---

## インデックス の 落とし穴

<div class="ng">

❌ **インデックス が 多すぎ**：INSERT / UPDATE が 遅くなる、 ディスク 食う

</div>

<div class="ng">

❌ **WHERE 句 で 関数**：`WHERE LOWER(email) = ...` だと インデックス 効かない

</div>

<div class="ng">

❌ **LIKE '%foo%'**：前方一致 以外 は インデックス 効かない（全文検索 を 別途）

</div>

<div class="tip">

💡 **EXPLAIN ANALYZE** で 実際 に 使われた か 確認

</div>

---

## トランザクション ＝ ACID

<div class="code">
<span class="key">BEGIN</span>;
<span class="key">UPDATE</span> accounts <span class="key">SET</span> balance = balance - <span class="num">1000</span> <span class="key">WHERE</span> id = <span class="num">1</span>;
<span class="key">UPDATE</span> accounts <span class="key">SET</span> balance = balance + <span class="num">1000</span> <span class="key">WHERE</span> id = <span class="num">2</span>;
<span class="key">COMMIT</span>;  <span class="com">-- 両方 成功 した時のみ 確定</span>
</div>

<div class="grid2">
<div class="card">

### ACID
- **A**tomicity：全部 or 全く
- **C**onsistency：整合性
- **I**solation：他Tx に 影響しない
- **D**urability：コミット後 永続

</div>
<div class="card">

### 分離レベル
- READ UNCOMMITTED
- READ COMMITTED（多くの DB の デフォルト）
- REPEATABLE READ
- SERIALIZABLE（最も 厳しい）

</div>
</div>

---

<!-- _class: quiz -->

## クイズ

以下 の SQL の **問題点** は？

```sql
SELECT u.name, (SELECT COUNT(*) FROM posts WHERE user_id = u.id) AS cnt
FROM users u
WHERE u.created_at > '2026-01-01';
```

- A. 構文エラー
- B. **N+1 クエリ（users 件数 ぶん 投稿 を 数えるサブクエリ が 走る）**
- C. JOIN が ない
- D. インデックス が ない

---

## こたえ

<div class="ok">

**こたえ: B（N+1 クエリ）**

users が 1000件 あれば サブクエリ が 1000回 実行 される。

**改善**:
```sql
SELECT u.name, COUNT(p.id) AS cnt
FROM users u
LEFT JOIN posts p ON p.user_id = u.id
WHERE u.created_at > '2026-01-01'
GROUP BY u.id, u.name;
```

ORM（Prisma / Drizzle）でも `include` / `with` を 使わず ループ で fetch すると 同じ 罠 に 落ちる。

</div>

---

<!-- _class: section -->

# 2. Turso（モダン SQLite at the edge）

---

## なぜ Turso ？

<div class="grid2">
<div class="card">

### 特徴
- **SQLite ベース**（libSQL fork）
- **エッジ レプリケーション**（世界中 に 自動配置）
- **無料枠 が 大きい**（500 DB / 9GB / 月10億行 読み取り）
- **libSQL クライアント**（HTTP / WebSocket）
- **エンベデッド レプリカ**（ローカル 0ms 読み取り）

</div>
<div class="card">

### 向いている用途
- グローバル サービス
- 個人開発 / インディー
- Edge Functions（Vercel / Cloudflare）と 相性 最高
- 1〜数百万 ユーザー 規模

</div>
</div>

---

## Turso クライアント（TypeScript）

<div class="code">
<span class="com">// npm i @libsql/client</span>
<span class="key">import</span> { createClient } <span class="key">from</span> <span class="str">"@libsql/client"</span>;

<span class="key">const</span> db = createClient({
  url: <span class="type">process</span>.env.<span class="type">TURSO_DATABASE_URL</span>!,
  authToken: <span class="type">process</span>.env.<span class="type">TURSO_AUTH_TOKEN</span>!,
});

<span class="com">// クエリ</span>
<span class="key">const</span> result = <span class="key">await</span> db.execute({
  sql: <span class="str">"SELECT * FROM users WHERE email = ?"</span>,
  args: [<span class="str">"alice@example.com"</span>],
});

<span class="com">// トランザクション</span>
<span class="key">await</span> db.batch([
  <span class="str">"UPDATE accounts SET balance = balance - 1000 WHERE id = 1"</span>,
  <span class="str">"UPDATE accounts SET balance = balance + 1000 WHERE id = 2"</span>,
], <span class="str">"write"</span>);
</div>

---

## Drizzle ORM ＋ Turso

<div class="code">
<span class="com">// schema.ts</span>
<span class="key">import</span> { sqliteTable, integer, text } <span class="key">from</span> <span class="str">"drizzle-orm/sqlite-core"</span>;

<span class="key">export const</span> users = sqliteTable(<span class="str">"users"</span>, {
  id: integer(<span class="str">"id"</span>).primaryKey({ autoIncrement: <span class="key">true</span> }),
  email: text(<span class="str">"email"</span>).notNull().unique(),
  name: text(<span class="str">"name"</span>).notNull(),
  createdAt: integer(<span class="str">"created_at"</span>, { mode: <span class="str">"timestamp"</span> }).defaultNow(),
});

<span class="com">// 使う</span>
<span class="key">import</span> { drizzle } <span class="key">from</span> <span class="str">"drizzle-orm/libsql"</span>;
<span class="key">import</span> { eq } <span class="key">from</span> <span class="str">"drizzle-orm"</span>;

<span class="key">const</span> orm = drizzle(db);
<span class="key">const</span> user = <span class="key">await</span> orm.select().from(users).where(eq(users.email, <span class="str">"a@b.com"</span>));
</div>

---

<!-- _class: section -->

# 3. マイグレーション ＝ スキーマ変更 を Git管理

---

## マイグレーション の 必要性

<div class="ng">

❌ 「DB に 直接 ALTER TABLE」<br>
→ 本番 と 開発 が 別 スキーマ<br>
→ デプロイ後 「カラム ない」 で 500

</div>

<div class="ok">

⭕ **マイグレーション ファイル を コード化**<br>
⭕ Git に 入れて レビュー<br>
⭕ デプロイ時 に 自動 適用<br>
⭕ ロールバック も 仕組み化

</div>

---

## Drizzle マイグレーション の 流れ

<div class="code">
<span class="com"># 1. schema.ts を 編集（例: users に bio カラム 追加）</span>

<span class="com"># 2. マイグレーション 生成</span>
npx drizzle-kit generate

<span class="com"># → drizzle/0001_add_user_bio.sql が 生成される</span>
<span class="com">#    ALTER TABLE users ADD COLUMN bio TEXT;</span>

<span class="com"># 3. 開発DB に 適用</span>
npx drizzle-kit migrate

<span class="com"># 4. レビュー → コミット → CI で 本番 にも 自動適用</span>
</div>

---

## 安全な マイグレーション 戦略

<div class="grid2">
<div class="card">

### 後方互換 変更（安全）
- カラム追加（NULL 許可）
- インデックス追加
- 新テーブル

</div>
<div class="card">

### 破壊的 変更（要注意）
- カラム削除
- 型変更
- NOT NULL 追加

</div>
</div>

<div class="tip">

💡 **Expand-and-contract** パターン:
1. 新カラム 追加（互換）
2. 両方 書き込む コード を デプロイ
3. データ移行
4. 旧カラム 参照を 削除
5. 旧カラム を 削除

</div>

---

## トランザクションを 含む マイグレーション

<div class="code">
<span class="com">-- migrations/0002_rename_email.sql</span>
<span class="key">BEGIN</span>;

<span class="com">-- 1. 新カラム 追加</span>
<span class="key">ALTER TABLE</span> users <span class="key">ADD COLUMN</span> email_lower <span class="key">TEXT</span>;

<span class="com">-- 2. 既存データ コピー</span>
<span class="key">UPDATE</span> users <span class="key">SET</span> email_lower = <span class="key">LOWER</span>(email);

<span class="com">-- 3. NOT NULL 制約</span>
<span class="key">CREATE UNIQUE INDEX</span> idx_users_email_lower <span class="key">ON</span> users(email_lower);

<span class="key">COMMIT</span>;
</div>

<div class="ok">

⭕ 失敗 したら **全て 巻き戻る**<br>
⭕ 途中 で 中断 されても 整合性 保たれる

</div>

---

<!-- _class: section -->

# 4. キャッシュ戦略

---

## キャッシュ の 階層

<div class="grid3">
<div class="card">

### ブラウザ
HTTP キャッシュ（Cache-Control / ETag）

</div>
<div class="card">

### CDN
エッジ で 配信（Cloudflare / Vercel）

</div>
<div class="card">

### アプリ
**Redis / メモリ** で 計算結果 保持

</div>
</div>

<div class="ok">

⭕ 上位 で 解決 する ほど **DB に 届かない**<br>
⭕ DB は 最後 の 砦

</div>

---

## Redis 基本

<div class="code">
<span class="com"># Docker で 立ち上げ</span>
docker run -d -p <span class="num">6379</span>:<span class="num">6379</span> redis:<span class="num">7</span>-alpine

<span class="com"># node-redis</span>
<span class="key">import</span> { createClient } <span class="key">from</span> <span class="str">"redis"</span>;
<span class="key">const</span> r = createClient({ url: <span class="str">"redis://localhost:6379"</span> });
<span class="key">await</span> r.connect();

<span class="com">// 単純 KV</span>
<span class="key">await</span> r.set(<span class="str">"user:1"</span>, <span class="type">JSON</span>.stringify(user), { <span class="type">EX</span>: <span class="num">300</span> });  <span class="com">// 5分 で TTL</span>
<span class="key">const</span> cached = <span class="key">await</span> r.get(<span class="str">"user:1"</span>);

<span class="com">// カウンター</span>
<span class="key">await</span> r.incr(<span class="str">"page:home:views"</span>);

<span class="com">// セット / ハッシュ / リスト / ソート集合 / ストリーム</span>
</div>

---

## Cache-aside パターン

<div class="code">
<span class="key">async function</span> getUser(id: <span class="type">string</span>) {
  <span class="key">const</span> key = <span class="str">`user:${id}`</span>;

  <span class="com">// 1. キャッシュ確認</span>
  <span class="key">const</span> cached = <span class="key">await</span> redis.get(key);
  <span class="key">if</span> (cached) <span class="key">return</span> <span class="type">JSON</span>.parse(cached);

  <span class="com">// 2. DB から 取得</span>
  <span class="key">const</span> user = <span class="key">await</span> db.select().from(users).where(eq(users.id, id));

  <span class="com">// 3. キャッシュ に 保存</span>
  <span class="key">await</span> redis.set(key, <span class="type">JSON</span>.stringify(user), { <span class="type">EX</span>: <span class="num">300</span> });

  <span class="key">return</span> user;
}
</div>

---

## 無効化（Invalidation）の 戦略

<div class="grid2">
<div class="card">

### TTL（Time To Live）
**N秒後 自動 削除**

⭕ シンプル<br>
❌ 古い データ が N秒 出続ける

</div>
<div class="card">

### 明示的 削除
更新時 に `DEL key`

⭕ 即時 反映<br>
❌ キー の 関係を 全部 知る 必要

</div>
</div>

<div class="tip">

💡 **「キャッシュ無効化 は CS 2大 難問 の 1つ」** （Phil Karlton）<br>
→ TTL 短め + 明示 削除 の 併用 が 現実解

</div>

---

## ソートセット で ランキング

<div class="code">
<span class="com">// 投稿 ごと の イイネ数 を ランキング</span>
<span class="key">await</span> r.zIncrBy(<span class="str">"posts:likes"</span>, <span class="num">1</span>, <span class="str">"post:42"</span>);

<span class="com">// トップ10 取得</span>
<span class="key">const</span> top10 = <span class="key">await</span> r.zRangeWithScores(<span class="str">"posts:likes"</span>, <span class="num">0</span>, <span class="num">9</span>, { <span class="key">REV</span>: <span class="key">true</span> });
<span class="com">// → [{ value: "post:7", score: 1024 }, ...]</span>
</div>

<div class="ok">

⭕ DB の `ORDER BY likes DESC LIMIT 10` を **毎回 走らせる より 圧倒的 速い**<br>
⭕ いいね が 飛び交う ライブ集計 に 最適

</div>

---

## レート リミット

<div class="code">
<span class="key">async function</span> rateLimit(userId: <span class="type">string</span>, max: <span class="type">number</span>, windowSec: <span class="type">number</span>) {
  <span class="key">const</span> key = <span class="str">`rate:${userId}:${Math.floor(Date.now() / 1000 / windowSec)}`</span>;
  <span class="key">const</span> count = <span class="key">await</span> redis.incr(key);
  <span class="key">if</span> (count === <span class="num">1</span>) <span class="key">await</span> redis.expire(key, windowSec);
  <span class="key">if</span> (count &gt; max) <span class="key">throw new</span> <span class="type">Error</span>(<span class="str">"Rate limit exceeded"</span>);
}

<span class="com">// 1分 60回 まで</span>
<span class="key">await</span> rateLimit(userId, <span class="num">60</span>, <span class="num">60</span>);
</div>

---

<!-- _class: section -->

# 5. 非同期処理 と キューイング

---

## なぜ キュー が 必要 か

<div class="ng">

❌ **メール送信 を リクエスト中 に**<br>
→ レスポンス 5秒、 失敗 すると 全体 ロールバック

</div>

<div class="ok">

⭕ **キュー に 入れて 即 200 を 返す**<br>
⭕ ワーカー が 別プロセス で 順次 処理<br>
⭕ 失敗 したら **リトライ**

</div>

---

## BullMQ（Redis ベース）

<div class="code">
<span class="key">import</span> { <span class="type">Queue</span>, <span class="type">Worker</span> } <span class="key">from</span> <span class="str">"bullmq"</span>;

<span class="com">// プロデューサ（API側）</span>
<span class="key">const</span> emailQ = <span class="key">new</span> <span class="type">Queue</span>(<span class="str">"email"</span>, { connection: redisConn });

<span class="key">await</span> emailQ.add(<span class="str">"welcome"</span>, { userId: <span class="num">42</span>, to: <span class="str">"alice@example.com"</span> }, {
  attempts: <span class="num">3</span>,
  backoff: { type: <span class="str">"exponential"</span>, delay: <span class="num">1000</span> },
});

<span class="com">// ワーカー（別プロセス）</span>
<span class="key">new</span> <span class="type">Worker</span>(<span class="str">"email"</span>, <span class="key">async</span> (job) =&gt; {
  <span class="key">await</span> sendEmail(job.data.to, <span class="str">"ようこそ"</span>);
}, { connection: redisConn });
</div>

---

## キュー で よくある 用途

<div class="grid3">
<div class="card">

### 通知送信
メール / プッシュ / Webhook

</div>
<div class="card">

### 画像処理
リサイズ / サムネ / OCR

</div>
<div class="card">

### バッチ集計
日次 売上 / レポート

</div>
</div>

<div class="ok">

⭕ **ユーザー リクエスト** は 即 200<br>
⭕ **重い処理** は ワーカー で 後ろ から<br>
⭕ **失敗** したら リトライ・DLQ（Dead Letter Queue）

</div>

---

<!-- _class: handson -->

## ハンズオン: API に キャッシュ層 追加

<div class="step">

1. 既存 API（GET /api/posts）の レスポンス時間 を 測る
2. Docker で Redis 起動：`docker run -d -p 6379:6379 redis:7`
3. `npm i redis` + `getPostList()` に Cache-aside を 実装
4. もう一度 計測：**初回 200ms → 2回目 5ms** などを 体感
5. 投稿 を 編集 する API で `redis.del("posts:list")` を 実行（無効化）
6. **TTL 60秒** を 設定、 古い データ が 自然消滅 する のも 確認

</div>

---

<!-- _class: warn -->

## 気をつけること

<div class="ng">

❌ **キャッシュ が 真実 の 源** に なる：DB と ズレた 値 が 残り続ける

</div>

<div class="ng">

❌ **インデックス を 適当 に 全部 貼る**：書き込み 性能 ダダ落ち

</div>

<div class="ng">

❌ **マイグレーション を 手動 ALTER**：環境差 で デプロイ事故

</div>

<div class="ok">

⭕ **キャッシュ は DB の 補助**、 真実 は DB<br>
⭕ **EXPLAIN ANALYZE** を 必ず 見る<br>
⭕ **マイグレーション** は コード化、 CI で 自動適用

</div>

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

<div class="grid3">
<div class="card">

### 1️⃣ DB 設計を 本気で
正規化・インデックス・トランザクション・N+1 を 倒す。

</div>
<div class="card">

### 2️⃣ Turso + Drizzle
モダンな SQLite at the edge + 型安全 ORM。 マイグレーション は コード化。

</div>
<div class="card">

### 3️⃣ Redis で キャッシュ
Cache-aside + TTL + 明示削除。 キュー で 非同期処理。

</div>
</div>

---

## 次回予告

<div class="card">

### 第4回｜DevOps と 監視
**Docker Compose / GitHub Actions / Sentry / Datadog / OpenTelemetry** で test → build → deploy を パイプライン化、 エラー / パフォーマンス を 観測 可能 に します。 中級コース の 集大成。

</div>

<div class="tip">

📚 おすすめの宿題:
- 既存 API に Cache-aside を 1個 追加
- 自分の Turso DB を 作って Drizzle で マイグレーション
- EXPLAIN ANALYZE で 既存クエリ の 実行計画 を 読む

</div>

---

<!-- _class: title -->

# おつかれさまでした 👏

### スケール する バックエンド の 設計 を 体感！<br>次回 「DevOps と 監視」 で お会いしましょう。
