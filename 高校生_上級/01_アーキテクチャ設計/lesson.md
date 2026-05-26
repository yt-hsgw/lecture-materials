---
marp: true
theme: default
paginate: true
size: 16:9
header: '高校生プログラミング塾 ／ 上級 第1回'
footer: 'アーキテクチャ設計'
style: |
  :root {
    --c-primary:   #1E40AF;
    --c-secondary: #EAB308;
    --c-accent:    #CA8A04;
    --c-warn:      #DC2626;
    --c-dark:      #0C0A09;
    --c-light:     #FAFAF9;
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
  section.handson { background: #FEFCE8; }
  section.handson h1 { color: var(--c-accent); }
  section.quiz { background: #FEFCE8; }
  section.quiz h1 { color: var(--c-secondary); }
  section.warn { background: #FEF2F2; }
  section.warn h1 { color: var(--c-warn); }
  .card { background: white; border-radius: 14px; padding: 18px 24px; margin: 12px 0; box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .ok  { background: #FEF9C3; border-left: 6px solid var(--c-accent);    padding: 12px 18px; border-radius: 6px; }
  .ng  { background: #FEF2F2; border-left: 6px solid var(--c-warn);      padding: 12px 18px; border-radius: 6px; }
  .tip { background: #FEFCE8; border-left: 6px solid var(--c-secondary); padding: 12px 18px; border-radius: 6px; }
  .code { background: var(--c-dark); color: #E2E8F0; border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono','SF Mono','Menlo',monospace; font-size: 17px; line-height: 1.7; overflow-x: auto; }
  .code .key { color: #FDE68A; }
  .code .str { color: #FCD34D; }
  .code .num { color: #93C5FD; }
  .code .com { color: #94A3B8; font-style: italic; }
  .code .type{ color: #FCD34D; }
---

<!-- _class: title -->

# アーキテクチャ<br>設計

### 第1回 ／ 高校生プログラミング塾・上級

<br>

きょうは **モノリス vs マイクロ / DDD / レイヤード / ヘキサゴナル** で<br>**設計可能 な エンジニア** へ ！ 🏛️📐🧱

---

## 中級 までの 復習

<div class="grid3">
<div class="card">

### 🤝 チーム開発
PR / レビュー / ペア / モブ

</div>
<div class="card">

### ⚛️🗄️ FE+BE
React/Next.js / Turso / Redis

</div>
<div class="card">

### 🚀 DevOps
CI/CD / Docker / 監視

</div>
</div>

上級 では **「複数 サービス が 関わる 規模 で 設計 する」** が テーマ。

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ モノリス / モジュラー / マイクロ の **トレードオフ**
正解 は ない、 状況 で 選ぶ

</div>
<div class="card">

### ✅ **DDD（Domain-Driven Design）** の 共通言語
ユビキタス言語 / 集約 / 境界づけられたコンテキスト

</div>
<div class="card">

### ✅ **レイヤード / ヘキサゴナル** の 境界設計
依存逆転 ＝ 「外側 が 内側 に 依存」

</div>

---

<!-- _class: section -->

# 1. モノリス vs マイクロサービス

---

## モノリス（一体型）

<div class="code">
my-app/
├── src/
│   ├── users/
│   ├── posts/
│   ├── payments/
│   ├── notifications/
│   └── ...
├── package.json     <span class="com"># 1個</span>
└── Dockerfile       <span class="com"># 1個</span>
</div>

<div class="ok">

⭕ **シンプル**：1リポジトリ / 1デプロイ<br>
⭕ **トランザクション** が DB レベル で 効く<br>
⭕ **リファクタ** しやすい（型 が 全体 で 効く）

</div>

<div class="ng">

❌ **チーム が 増える と 衝突**<br>
❌ 一部 機能 の **スケール アウト** が 難しい

</div>

---

## マイクロサービス（分散型）

<div class="code">
my-app/
├── service-users/      <span class="com"># 独立 リポジトリ・デプロイ</span>
├── service-posts/
├── service-payments/
├── service-notifications/
└── api-gateway/        <span class="com"># 集約</span>
</div>

<div class="ok">

⭕ **チーム独立**：別 言語 / 別 リズム<br>
⭕ **個別 スケール**：負荷部分 だけ 増強

</div>

<div class="ng">

❌ **複雑**：ネットワーク / トランザクション / 監視<br>
❌ **デバッグ 難**：原因 が どこの サービス か

</div>

---

## モジュラー モノリス（中間）

<div class="code">
my-app/
├── src/
│   ├── modules/
│   │   ├── users/   <span class="com"># 内部 API のみ 公開</span>
│   │   ├── posts/
│   │   └── payments/
│   └── shared/
└── package.json     <span class="com"># 1個（モジュール 間 は 明示 importのみ）</span>
</div>

<div class="ok">

⭕ モノリス の **シンプルさ**<br>
⭕ マイクロ の **境界設計**<br>
⭕ いつか **切り出せる** 余地

</div>

---

## 「いつ マイクロ に 切り出す か」

<div class="grid2">
<div class="card">

### 切り出す サイン
- チーム が **2人 以上** で コードを 触る モジュール
- **デプロイ サイクル** が 全体 と 違う
- **負荷特性** が 全然 違う（リアルタイム / バッチ）
- **言語 / 技術スタック** を 変えたい

</div>
<div class="card">

### 切り出さない サイン
- 単に **試したい だけ**
- **チーム 5人 未満**
- トランザクション境界 を またぐ 機能
- **運用ノウハウ なし**

</div>
</div>

---

## Sam Newman の 教え

<div class="tip">

💡 **「マイクロサービス を 採用する なら、 まず モノリス で 作ってから、 必要 に なった 部分 を 切り出せ」**<br>
（Sam Newman, "Monolith to Microservices" 著者）

</div>

<div class="card">

最初 から マイクロ で 作る と、 **境界 が 間違っている** ことが ほぼ 確実。 1年 動かして 「ここ が ホット スポット」 と わかってから 切り出す のが 王道。

</div>

---

<!-- _class: quiz -->

## クイズ

5人 チーム、 立ち上げ 3ヶ月、 ユーザー数 100人 の Web サービス で、 推奨される アーキテクチャ は？

- A. モノリス
- B. モジュラー モノリス
- C. マイクロサービス（5サービス 構成）
- D. **A または B**

---

## こたえ

<div class="ok">

**こたえ: D（モノリス または モジュラー モノリス）**

- 5人 / 立ち上げ 3ヶ月 / 100人 ＝ **モノリスの ど真ん中**
- マイクロ は **チーム 20人 以上** から 検討
- **将来 切り出す 余地** を 残すなら モジュラー モノリス
- 最初 から 5サービス は **ほぼ 確実 に オーバーキル**

「Just Use Postgres / Just Use Monolith」 の 時代 が 2023〜 戻ってきた。

</div>

---

<!-- _class: section -->

# 2. DDD ＝ ドメイン駆動設計

---

## DDD の 出発点

<div class="card">

「**ソフトウェア の 本質的 な 難しさ は ドメイン の 理解** に ある」<br>
（Eric Evans, "Domain-Driven Design", 2003）

技術 的 な 課題 より、 「ビジネス / 利用者 の 世界 を 正しく モデル化 する」 の が 難しい。

</div>

<div class="ok">

⭕ **業務エキスパート と エンジニア が 同じ 言葉 で 話す**<br>
⭕ コード 上 にも **ビジネス 用語** が 出てくる

</div>

---

## ユビキタス言語（Ubiquitous Language）

<div class="grid2">
<div class="card">

### NG
- ビジネス側：「注文」「請求」「配送」
- コード：`OrderEntity` / `BillingDTO` / `ShipmentService` / `pkg_ord` / `tbl_bil`

→ 翻訳 コスト 高い、 認識ズレ 多発

</div>
<div class="card">

### OK
ビジネス と コード で **同じ 用語** を 使う:
- 「注文」 ＝ `Order`
- 「請求書」 ＝ `Invoice`
- 「配送指示」 ＝ `ShippingOrder`

</div>
</div>

---

## エンティティ / 値オブジェクト

<div class="grid2">
<div class="card">

### エンティティ
**ID で 同一性** を 判定<br>
（名前が 同じでも 別人）

```ts
class User {
  id: UserId;   // ID で 識別
  name: string;
  email: Email;
}
```

</div>
<div class="card">

### 値オブジェクト
**値 で 同一性**<br>
（同じ値 なら 同じ）

```ts
class Email {
  constructor(public value: string) {
    if (!/@/.test(value)) throw new Error("invalid");
  }
  equals(other: Email) {
    return this.value === other.value;
  }
}
```

</div>
</div>

---

## 集約（Aggregate）

<div class="card">

**整合性 を 保つ 境界**。 1つの トランザクション で 変更する 単位。

</div>

<div class="code">
<span class="key">class</span> <span class="type">Order</span> {  <span class="com">// 集約ルート</span>
  <span class="key">private</span> items: <span class="type">OrderItem</span>[] = [];

  addItem(productId: <span class="type">ProductId</span>, quantity: <span class="type">number</span>) {
    <span class="key">if</span> (this.items.length &gt;= <span class="num">100</span>) <span class="key">throw new</span> <span class="type">Error</span>(<span class="str">"items max"</span>);
    this.items.push(<span class="key">new</span> <span class="type">OrderItem</span>(productId, quantity));
  }

  total(): <span class="type">Money</span> {
    <span class="key">return</span> this.items.reduce((sum, i) =&gt; sum.add(i.subtotal()), <span class="type">Money</span>.zero());
  }
}
</div>

<div class="ok">

⭕ `Order` を 通してしか `OrderItem` を 触れない<br>
⭕ **不変条件**（item ≤ 100）が 1箇所 に

</div>

---

## 境界づけられたコンテキスト（Bounded Context）

<div class="card">

「`User`」 と いっても、 **文脈 で 意味 が 違う**:

- **マーケティング**：メールアドレス / 興味
- **注文**：配送先 / 支払い方法
- **サポート**：問い合わせ履歴

これらを **無理に 1つの User クラス に まとめる と 巨大化**。

</div>

<div class="ok">

⭕ 文脈ごと に **別の User モデル**<br>
⭕ コンテキスト間 は **ID で 緩く 連携**

</div>

---

## コンテキストマップ

<div class="code">
<span class="com">// 4つの コンテキスト</span>
<span class="key">marketing</span>:  <span class="type">User</span> { id, email, preferences }
<span class="key">order</span>:      <span class="type">User</span> { id, shippingAddress[], paymentMethod[] }
<span class="key">billing</span>:    <span class="type">Customer</span> { id, taxId, billingAddress }
<span class="key">support</span>:    <span class="type">Contact</span> { id, name, ticketHistory[] }

<span class="com">// 連携</span>
order → billing : 同期 API（請求書 作成）
support → marketing : Event Stream（解約 → 興味抹消）
</div>

---

<!-- _class: section -->

# 3. レイヤードアーキテクチャ

---

## 古典的 4層

<div class="card">

```
┌───────────────────────┐
│   Presentation        │  ← UI / API
├───────────────────────┤
│   Application         │  ← ユースケース 調整
├───────────────────────┤
│   Domain              │  ← ビジネスルール
├───────────────────────┤
│   Infrastructure      │  ← DB / 外部API
└───────────────────────┘
```

</div>

<div class="ok">

⭕ 各層 は **下層 にだけ 依存**<br>
⭕ ビジネスルール が UI と 混ざらない

</div>

---

## 落とし穴：Anemic Domain Model

<div class="ng">

❌ Service クラス に ロジック 全部、 Domain クラス は **データ だけ**

```ts
class Order { items: Item[]; status: string; }    // データ だけ
class OrderService {                              // 全部 ロジック
  addItem(order: Order, item: Item) { ... }
  cancel(order: Order)               { ... }
  ship(order: Order)                 { ... }
}
```

→ **オブジェクト指向 の 意味 が なくなる**

</div>

---

<!-- _class: section -->

# 4. ヘキサゴナル（ポート & アダプタ）

---

## アイデア：「外側 が 内側 に 依存」

<div class="card">

```
           ┌──────────────┐
   API ──→ │   Domain     │ ──→ DB
           │  (中心)       │
   CLI ──→ │              │ ──→ 外部API
           └──────────────┘
```

**Domain は どこ にも 依存 しない**。 外側（API / DB）が Domain に 合わせる。

</div>

---

## ポート（インターフェース）

<div class="code">
<span class="com">// domain/ports/UserRepository.ts</span>
<span class="key">export interface</span> <span class="type">UserRepository</span> {
  findById(id: <span class="type">UserId</span>): <span class="type">Promise</span>&lt;<span class="type">User</span> | <span class="key">null</span>&gt;;
  save(user: <span class="type">User</span>): <span class="type">Promise</span>&lt;<span class="type">void</span>&gt;;
}

<span class="com">// domain/services/RegisterUser.ts</span>
<span class="key">export class</span> <span class="type">RegisterUser</span> {
  <span class="key">constructor</span>(<span class="key">private</span> repo: <span class="type">UserRepository</span>) {}

  <span class="key">async</span> execute(email: <span class="type">Email</span>, name: <span class="type">string</span>) {
    <span class="key">const</span> user = <span class="key">new</span> <span class="type">User</span>(<span class="type">UserId</span>.generate(), email, name);
    <span class="key">await</span> this.repo.save(user);
    <span class="key">return</span> user;
  }
}
</div>

---

## アダプタ（実装）

<div class="code">
<span class="com">// infra/db/DrizzleUserRepository.ts</span>
<span class="key">export class</span> <span class="type">DrizzleUserRepository</span> <span class="key">implements</span> <span class="type">UserRepository</span> {
  <span class="key">async</span> findById(id: <span class="type">UserId</span>): <span class="type">Promise</span>&lt;<span class="type">User</span> | <span class="key">null</span>&gt; {
    <span class="key">const</span> row = <span class="key">await</span> db.select().from(users).where(eq(users.id, id.value));
    <span class="key">return</span> row ? <span class="type">User</span>.fromRow(row) : <span class="key">null</span>;
  }
  <span class="key">async</span> save(u: <span class="type">User</span>) { <span class="com">/* INSERT or UPDATE */</span> }
}

<span class="com">// infra/db/InMemoryUserRepository.ts（テスト用）</span>
<span class="key">export class</span> <span class="type">InMemoryUserRepository</span> <span class="key">implements</span> <span class="type">UserRepository</span> {
  <span class="key">private</span> store = <span class="key">new</span> <span class="type">Map</span>&lt;<span class="type">string</span>, <span class="type">User</span>&gt;();
  <span class="key">async</span> findById(id: <span class="type">UserId</span>) { <span class="key">return</span> this.store.get(id.value) ?? <span class="key">null</span>; }
  <span class="key">async</span> save(u: <span class="type">User</span>)         { this.store.set(u.id.value, u); }
}
</div>

---

## なぜ 嬉しい か

<div class="grid3">
<div class="card">

### テスト容易
Domain ロジック を **DB なし で** 検証

</div>
<div class="card">

### 技術交換
DB を Postgres → Turso → MongoDB に **Domain 不変** で 差し替え

</div>
<div class="card">

### 業務集中
ビジネスロジック の 進化 が 技術 に 邪魔されない

</div>
</div>

---

<!-- _class: section -->

# 5. その他 の 主要 パターン

---

## CQRS（Command Query Responsibility Segregation）

<div class="grid2">
<div class="card">

### Command（書き込み）
- 正規化 された 厳密 モデル
- ビジネスルール 強制
- トランザクション

</div>
<div class="card">

### Query（読み取り）
- 非正規化 / 集約済み 表
- 表示 に 最適
- キャッシュ / 検索インデックス

</div>
</div>

<div class="tip">

💡 大規模 EC・SNS で 効く。 普通 の Web サービス に は **オーバーキル**。

</div>

---

## Event Sourcing

<div class="card">

「**状態** を 保存」 する 代わり に 「**変更イベント** を 全部 保存」。
現在 の 状態 は イベント を 全部 再生 して 作る。

</div>

<div class="code">
<span class="com">// イベント の 履歴</span>
[
  { type: <span class="str">"OrderCreated"</span>,    orderId: <span class="str">"o1"</span>, customer: <span class="str">"c1"</span>      },
  { type: <span class="str">"ItemAdded"</span>,       orderId: <span class="str">"o1"</span>, product: <span class="str">"p9"</span>, qty: <span class="num">2</span> },
  { type: <span class="str">"PaymentReceived"</span>, orderId: <span class="str">"o1"</span>, amount: <span class="num">5000</span>      },
  { type: <span class="str">"OrderShipped"</span>,    orderId: <span class="str">"o1"</span>                       },
]

<span class="com">// 現在状態 を 計算</span>
<span class="key">const</span> order = events.reduce(reducer, initialOrder);
</div>

<div class="tip">
💡 監査 / リプレイ / 時系列分析 に 強い。 学習コスト・運用コスト 高い。
</div>

---

## C4 モデル ＝ アーキ図 を 書く 4階層

<div class="grid2">
<div class="card">

### Context（最上位）
システム全体 と 外部 アクター

### Container
プロセス / DB / フロントエンド 単位

</div>
<div class="card">

### Component
コンテナ 内 の モジュール 構造

### Code
クラス / 関数 単位（UML 相当）

</div>
</div>

<div class="ok">

⭕ **Mermaid / draw.io / Excalidraw** で 描く<br>
⭕ Context → Container まで で **9割 の 説明** が 終わる

</div>

---

<!-- _class: handson -->

## ハンズオン: 卒業プロジェクト の 設計

<div class="step">

1. 自分の **卒業プロジェクト** の アイデア を 1つ 選ぶ
2. **Context 図** を Mermaid で 1枚（外部 アクター / システム）
3. **Container 図** を Mermaid で 1枚（フロント / API / DB / キュー）
4. **集約** を 3つ 以上 抽出（例: User / Post / Comment）
5. 各集約 で **不変条件** を 1個 ずつ 言語化
6. **コンテキスト** が 複数 ある か 検討
7. **モノリス / モジュラー / マイクロ** どれで 始めるか 決定
8. アーキテクチャ判断記録（**ADR**）を Markdown 1ファイル に

</div>

---

## ADR（Architecture Decision Record）

<div class="code">
<span class="com"># ADR-0001: モノリス で 始める</span>

## 状況
- チーム 1人（自分）
- ユーザー数 想定 100人 / 1年目
- 機能数 5〜10

## 決定
**モジュラー モノリス** で 開始。 Next.js + Turso + Drizzle。

## 理由
- スピード 重視
- マイクロ の 運用 コスト を 払えない
- 将来 切り出し やすい モジュール 境界 は 維持

## 結果
- 学習コスト 最小
- 1ヶ月 で MVP リリース可能
- 「ホット スポット」 が 見えたら 切り出し 検討
</div>

---

<!-- _class: warn -->

## 気をつけること

<div class="ng">

❌ **流行 で 選ぶ**：「マイクロ かっこいい」 で マイクロ を 選ぶ

</div>

<div class="ng">

❌ **完璧 を 求める**：1年 設計 してから 着手 → リリース できない

</div>

<div class="ng">

❌ **設計 を 文書 だけ で 終える**：実装 と ズレて 即陳腐化

</div>

<div class="ok">

⭕ **動かしながら 設計 を 進化**<br>
⭕ **「分からない」 と 言える** チームを 作る<br>
⭕ ADR で **判断 の 理由** を 残す（後から なぜ こうした か を 思い出せる）

</div>

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

<div class="grid3">
<div class="card">

### 1️⃣ アーキ選定 の トレードオフ
モノリス / モジュラー / マイクロ。 「正解 は ない、 状況 で 選ぶ」。

</div>
<div class="card">

### 2️⃣ DDD の 共通言語
ユビキタス言語 / 集約 / 境界づけられたコンテキスト。

</div>
<div class="card">

### 3️⃣ ヘキサゴナル
外側 が 内側 に 依存。 ポート ＆ アダプタ で 技術交換可能。

</div>
</div>

---

## 次回予告

<div class="card">

### 第2回｜AI/ML 入門
**scikit-learn / Hugging Face / LangChain / RAG** で AI / ML を 自分で 動かす。 「AI を 使う側 ＋ 作る側」 の 両方 を 1日 で 体験。

</div>

<div class="tip">

📚 おすすめの宿題:
- 自分の 卒業プロジェクト の **C4 Context + Container 図** を Mermaid で
- ADR を 1個 書く
- DDD 「集約」 の 境界 を 1つ 検討

</div>

---

<!-- _class: title -->

# おつかれさまでした 👏

### 「設計可能 な エンジニア」 への 第一歩！<br>次回 「AI/ML 入門」 で お会いしましょう。
