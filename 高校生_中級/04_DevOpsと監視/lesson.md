---
marp: true
theme: default
paginate: true
size: 16:9
header: '高校生プログラミング塾 ／ 中級 第4回'
footer: 'DevOps と 監視'
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
  section.finale { background: linear-gradient(135deg, var(--c-primary), var(--c-accent), var(--c-secondary)); color: white; text-align: center; }
  section.finale h1 { color: white; font-size: 60px; }
  .card { background: white; border-radius: 14px; padding: 18px 24px; margin: 12px 0; box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .grid4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .ok  { background: #ECFEFA; border-left: 6px solid var(--c-accent);    padding: 12px 18px; border-radius: 6px; }
  .ng  { background: #FEF2F2; border-left: 6px solid var(--c-warn);      padding: 12px 18px; border-radius: 6px; }
  .tip { background: #FEFCE8; border-left: 6px solid var(--c-secondary); padding: 12px 18px; border-radius: 6px; }
  .code { background: var(--c-dark); color: #E2E8F0; border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono','SF Mono','Menlo',monospace; font-size: 17px; line-height: 1.7; overflow-x: auto; }
  .code .key { color: #FDE68A; }
  .code .str { color: #5EEAD4; }
  .code .num { color: #BAE6FD; }
  .code .com { color: #94A3B8; font-style: italic; }
  .code .type{ color: #C4B5FD; }
  .cert { background: linear-gradient(135deg,#FEFCE8,#ECFEFA); border:5px double var(--c-primary); border-radius:14px; padding:26px; text-align:center; box-shadow:0 4px 18px rgba(0,0,0,.12); }
  .cert h2 { color: var(--c-primary); letter-spacing:6px; font-size:36px; }
  .cert .name { display:inline-block; font-size:30px; font-weight:bold; color:var(--c-accent); padding:8px 28px; border-top:3px solid var(--c-primary); border-bottom:3px solid var(--c-primary); margin:12px 0; }
---

<!-- _class: title -->

# DevOps と 監視

### 第4回 ／ 高校生プログラミング塾・中級 ／ 最終回

<br>

きょうは **CI/CD / Docker Compose / Sentry / 監視** で<br>**「動く」 から 「動き続ける」 へ** ！ 🚀📈🔔

---

## 前回までの 復習

<div class="grid4">
<div class="card">

### 🤝 第1回
チーム開発（PR / レビュー / ペア / モブ）

</div>
<div class="card">

### ⚛️ 第2回
React + Next.js + 状態分離

</div>
<div class="card">

### 🗄️ 第3回
DB / Turso / Drizzle / Redis

</div>
<div class="card">

### 🚀 第4回
**DevOps と 監視 ← きょう**

</div>
</div>

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ **CI/CD パイプライン** を 1本に
test → build → deploy を GitHub Actions で

</div>
<div class="card">

### ✅ **Docker Compose** で 本番に 近い ローカル
app + DB + Redis + ジョブワーカー

</div>
<div class="card">

### ✅ **観測可能性** ＝ ログ + メトリクス + トレース
Sentry / Datadog / OpenTelemetry

</div>

---

<!-- _class: section -->

# 1. DevOps とは

---

## DevOps の 3つの 原則（CALMS）

<div class="grid3">
<div class="card">

### Culture
**チーム文化**：失敗を 責めない、 学ぶ

</div>
<div class="card">

### Automation
**自動化**：手動 作業 は 全て CI に

</div>
<div class="card">

### Lean / Measurement / Sharing
小さく速く / 計測 / 知見共有

</div>
</div>

<div class="ok">

⭕ DevOps ＝ ツール の 話 で は ない<br>
⭕ 「開発 と 運用 を 分けない」 文化 と 仕組み

</div>

---

## DORA メトリクス（4つの 指標）

<div class="grid2">
<div class="card">

### 速さ
- **Deployment Frequency**：デプロイ頻度
- **Lead Time for Changes**：変更 から 本番 まで の 時間

</div>
<div class="card">

### 安定性
- **MTTR**（Mean Time To Recovery）：復旧時間
- **Change Failure Rate**：変更失敗率

</div>
</div>

<div class="tip">

💡 **エリート チーム**: 1日 複数回 デプロイ、 リードタイム 1時間 未満、 MTTR 1時間 未満、 失敗率 15% 以下

</div>

---

<!-- _class: section -->

# 2. CI（継続的 インテグレーション）

---

## CI ＝ コードが 入る たび に 自動チェック

<div class="code">
<span class="com"># .github/workflows/ci.yml</span>
<span class="key">name</span>: CI
<span class="key">on</span>: [push, pull_request]

<span class="key">jobs</span>:
  <span class="key">test</span>:
    <span class="key">runs-on</span>: ubuntu-latest
    <span class="key">services</span>:
      <span class="key">redis</span>:
        <span class="key">image</span>: redis:<span class="num">7</span>-alpine
        <span class="key">ports</span>: [<span class="str">"6379:6379"</span>]
    <span class="key">steps</span>:
      - <span class="key">uses</span>: actions/checkout@v4
      - <span class="key">uses</span>: actions/setup-node@v4
        <span class="key">with</span>:
          <span class="key">node-version</span>: <span class="num">20</span>
          <span class="key">cache</span>: <span class="str">"npm"</span>
      - <span class="key">run</span>: npm ci
      - <span class="key">run</span>: npm run lint
      - <span class="key">run</span>: npm run type-check
      - <span class="key">run</span>: npm test
      - <span class="key">run</span>: npm run build
</div>

---

## CI で 走らせる べき もの

<div class="grid3">
<div class="card">

### 静的
- lint（ESLint / ruff）
- format check（Prettier / black）
- 型チェック（tsc / mypy）
- セキュリティ scan

</div>
<div class="card">

### テスト
- ユニット
- 結合（DB / Redis あり）
- E2E（Playwright）
- スナップショット

</div>
<div class="card">

### ビルド
- TypeScript コンパイル
- Docker image build
- バンドルサイズ
- a11y チェック

</div>
</div>

---

## 並列化 と キャッシュ

<div class="code">
<span class="key">jobs</span>:
  <span class="key">lint</span>: <span class="com"># 並列 ジョブ 1</span>
    <span class="key">runs-on</span>: ubuntu-latest
    <span class="key">steps</span>:
      - <span class="key">uses</span>: actions/cache@v4
        <span class="key">with</span>:
          <span class="key">path</span>: ~/.npm
          <span class="key">key</span>: <span class="str">${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}</span>
      ...

  <span class="key">test</span>:  <span class="com"># 並列 ジョブ 2</span>
    <span class="key">runs-on</span>: ubuntu-latest
    <span class="key">strategy</span>:
      <span class="key">matrix</span>:
        <span class="key">node</span>: [<span class="num">18</span>, <span class="num">20</span>, <span class="num">22</span>]  <span class="com"># 3バージョン 並列</span>
    ...
</div>

<div class="ok">

⭕ ジョブ並列 で **全体時間 短縮**<br>
⭕ キャッシュ で 依存 ダウンロード を 数秒

</div>

---

## マトリクスビルド

<div class="code">
<span class="key">strategy</span>:
  <span class="key">matrix</span>:
    <span class="key">os</span>: [ubuntu-latest, macos-latest, windows-latest]
    <span class="key">node</span>: [<span class="num">20</span>, <span class="num">22</span>]

<span class="key">runs-on</span>: <span class="str">${{ matrix.os }}</span>
<span class="key">steps</span>:
  - <span class="key">uses</span>: actions/setup-node@v4
    <span class="key">with</span>:
      <span class="key">node-version</span>: <span class="str">${{ matrix.node }}</span>
</div>

3 × 2 = 6 ジョブ が 並列実行。 **「Mac だけ 落ちる」 を 即発見**。

---

<!-- _class: quiz -->

## クイズ

CI で **「lint と test と build を 同じ ジョブ」** に まとめる 主な デメリット は？

- A. ジョブ名 が ださい
- B. **失敗箇所 が わかりにくい / 全体 時間 が 長い**
- C. YAML が 短くなる
- D. 動かない

---

## こたえ

<div class="ok">

**こたえ: B**

- 失敗 した のが lint なのか test なのか **ログ を 読まないと わからない**
- 直列実行 で 時間 が 線形 加算
- 1個 直して 全部 やり直し（lint 修正 → test まで 走り直す）

**分けると**:
- どの ジョブ が 失敗 か **GitHub UI で 一目**
- 並列 で 短時間
- 失敗 した ジョブ だけ 再実行 可能

</div>

---

<!-- _class: section -->

# 3. CD（継続的 デリバリー / デプロイ）

---

## CD の 段階

<div class="grid3">
<div class="card">

### Continuous Delivery
**いつでも デプロイ できる 状態** を 保つ（手動 トリガー）

</div>
<div class="card">

### Continuous Deployment
**main マージ で 自動 本番デプロイ**

</div>
<div class="card">

### Progressive Delivery
**段階的 リリース**（Canary / Blue-Green / Feature Flag）

</div>
</div>

---

## Vercel / Cloudflare Pages（PaaS）

<div class="code">
<span class="com"># vercel.json は ほぼ 不要、 git push で 自動デプロイ</span>

<span class="com"># プレビュー デプロイ</span>
git push origin feat/new-page
<span class="com"># → https://my-app-git-feat-new-page-myteam.vercel.app/ が 自動生成</span>

<span class="com"># 本番デプロイ</span>
git push origin main
<span class="com"># → https://my-app.com/ に 自動デプロイ</span>
</div>

<div class="ok">

⭕ PR ごと **プレビュー URL**（レビュー で 動作確認 即可）<br>
⭕ main マージで **本番**<br>
⭕ 即 ロールバック ボタン

</div>

---

## Docker でデプロイ（自前 サーバー / VPS）

<div class="code">
<span class="com"># GitHub Container Registry に push</span>
<span class="key">jobs</span>:
  <span class="key">deploy</span>:
    <span class="key">if</span>: <span class="str">github.ref == 'refs/heads/main'</span>
    <span class="key">runs-on</span>: ubuntu-latest
    <span class="key">steps</span>:
      - <span class="key">uses</span>: actions/checkout@v4
      - <span class="key">uses</span>: docker/login-action@v3
        <span class="key">with</span>:
          <span class="key">registry</span>: ghcr.io
          <span class="key">username</span>: <span class="str">${{ github.actor }}</span>
          <span class="key">password</span>: <span class="str">${{ secrets.GITHUB_TOKEN }}</span>
      - <span class="key">run</span>: docker build -t ghcr.io/myorg/myapp:<span class="str">${{ github.sha }}</span> .
      - <span class="key">run</span>: docker push ghcr.io/myorg/myapp:<span class="str">${{ github.sha }}</span>
      - <span class="key">name</span>: Deploy via SSH
        <span class="key">run</span>: ssh ... <span class="str">"docker pull ghcr.io/myorg/myapp && docker compose up -d"</span>
</div>

---

## Docker Compose で 本番 に 近い ローカル

<div class="code">
<span class="com"># docker-compose.yml</span>
<span class="key">services</span>:
  <span class="key">app</span>:
    <span class="key">build</span>: .
    <span class="key">ports</span>: [<span class="str">"3000:3000"</span>]
    <span class="key">environment</span>:
      <span class="key">DATABASE_URL</span>: <span class="str">"libsql://db:8080"</span>
      <span class="key">REDIS_URL</span>: <span class="str">"redis://redis:6379"</span>
    <span class="key">depends_on</span>: [db, redis]

  <span class="key">db</span>:
    <span class="key">image</span>: ghcr.io/tursodatabase/libsql-server:latest

  <span class="key">redis</span>:
    <span class="key">image</span>: redis:<span class="num">7</span>-alpine

  <span class="key">worker</span>:
    <span class="key">build</span>: .
    <span class="key">command</span>: node dist/worker.js
    <span class="key">depends_on</span>: [redis]
</div>

`docker compose up` 一発 で **全部 動く**。

---

<!-- _class: section -->

# 4. 観測可能性（Observability）

---

## 3本柱：Logs / Metrics / Traces

<div class="grid3">
<div class="card">

### Logs
**何が 起きた か** の 時系列 記録（テキスト）

`2026-05-26 10:00:01 ERROR: DB timeout`

</div>
<div class="card">

### Metrics
**数値** の 時系列（CPU / メモリ / リクエスト数）

`http_request_duration_p99 = 250ms`

</div>
<div class="card">

### Traces
**1リクエスト** を 分散 サービス 横断 で 追跡

`api → auth → db → cache`

</div>
</div>

---

## 構造化 ログ

<div class="ng">

❌ `console.log("user " + id + " login failed at " + new Date())`<br>
→ パース 不可、 検索 不可

</div>

<div class="code">
<span class="com">// pino（高速 構造化ロガー）</span>
<span class="key">import</span> pino <span class="key">from</span> <span class="str">"pino"</span>;
<span class="key">const</span> log = pino();

log.info({ userId: id, event: <span class="str">"login_failed"</span>, reason: <span class="str">"invalid_password"</span> }, <span class="str">"Login failed"</span>);

<span class="com">// → {"level":30,"time":1716736800000,"userId":42,"event":"login_failed",</span>
<span class="com">//    "reason":"invalid_password","msg":"Login failed"}</span>
</div>

<div class="ok">

⭕ JSON で **検索 / 集計 / アラート** が 可能<br>
⭕ Datadog / CloudWatch / Splunk に そのまま 流せる

</div>

---

## Sentry ＝ エラー監視 の 定番

<div class="code">
<span class="com">// npm i @sentry/node @sentry/nextjs</span>
<span class="key">import</span> * <span class="key">as</span> <span class="type">Sentry</span> <span class="key">from</span> <span class="str">"@sentry/nextjs"</span>;

<span class="type">Sentry</span>.init({
  dsn: <span class="type">process</span>.env.<span class="type">SENTRY_DSN</span>,
  environment: <span class="type">process</span>.env.<span class="type">NODE_ENV</span>,
  tracesSampleRate: <span class="num">0.1</span>,  <span class="com">// 10% のみ trace 収集</span>
});

<span class="com">// 例外 を 自動 捕捉、 ブレッドクラム も 自動</span>
<span class="key">try</span> {
  <span class="key">await</span> riskyOperation();
} <span class="key">catch</span> (e) {
  <span class="type">Sentry</span>.captureException(e, {
    user: { id: userId },
    tags: { feature: <span class="str">"payment"</span> },
  });
  <span class="key">throw</span> e;
}
</div>

---

## Sentry が 教えてくれる こと

<div class="grid2">
<div class="card">

### スタックトレース
ソースマップ 付き、 ファイル：行 で 即特定

</div>
<div class="card">

### コンテキスト
- ユーザー（ID / メール）
- リクエスト（URL / method / body）
- ブラウザ / OS
- リリース バージョン

</div>
</div>

<div class="ok">

⭕ 同じ エラー を **集約**（10000件 でも 1件 表示）<br>
⭕ Slack / Discord に 自動 通知<br>
⭕ どの リリース で **発生 / 再発** か グラフ化

</div>

---

## Datadog / New Relic / Grafana（APM）

<div class="grid3">
<div class="card">

### Datadog
**統合 観測**：ログ / メトリクス / トレース / RUM 全部入り。 高い が 強力。

</div>
<div class="card">

### New Relic
**老舗 APM**。 似た 機能、 価格 やや 安い。

</div>
<div class="card">

### Grafana Stack
**OSS**：Loki（ログ）/ Prometheus（メトリクス）/ Tempo（トレース）/ Grafana（可視化）

</div>
</div>

---

## OpenTelemetry（ベンダー中立）

<div class="code">
<span class="com">// アプリ側 は OTel SDK で 計測、 送信先 は 自由</span>
<span class="key">import</span> { <span class="type">NodeSDK</span> } <span class="key">from</span> <span class="str">"@opentelemetry/sdk-node"</span>;
<span class="key">import</span> { getNodeAutoInstrumentations } <span class="key">from</span> <span class="str">"@opentelemetry/auto-instrumentations-node"</span>;

<span class="key">new</span> <span class="type">NodeSDK</span>({
  instrumentations: [getNodeAutoInstrumentations()],
}).start();

<span class="com">// HTTP / DB / Redis / fetch を 自動 instrumentation</span>
<span class="com">// 送信先 を 後から Datadog → Grafana など に 変更可能</span>
</div>

<div class="tip">

💡 **ベンダーロックイン 回避**。 監視 SaaS を 移行 しても アプリ コード 変更不要。

</div>

---

## SLI / SLO / SLA

<div class="grid3">
<div class="card">

### SLI（指標）
**Indicator**：エラー率 / レイテンシ p99 など

</div>
<div class="card">

### SLO（目標）
**Objective**：「99.9% の リクエスト が 200ms 以下」

</div>
<div class="card">

### SLA（契約）
**Agreement**：顧客 と の 約束、 違反時 ペナルティ

</div>
</div>

<div class="ok">

⭕ **エラー予算**（SLO 違反 余地）の 残量 で デプロイ可否 を 判断<br>
⭕ 「機能追加 と 安定化 の バランス」 を 数字 で 決める

</div>

---

## アラート 設計

<div class="ng">

❌ **何でも アラート**：オオカミ少年、 真の 障害 を 見逃す

</div>

<div class="ng">

❌ **CPU 90% で 鳴らす**：症状 ではなく **影響** に 鳴らす

</div>

<div class="ok">

⭕ 鳴らす べき は **ユーザー体験 への 影響**<br>
　 例: 「エラー率 が 5分間 5% 超」「p99 レイテンシ 1秒 超」<br>
⭕ **Severity 分け**（即起こす / 営業時間 / 翌日対応）<br>
⭕ **オンコール ローテーション** を 公平 に

</div>

---

<!-- _class: section -->

# 5. シークレット管理

---

## 環境変数 と シークレット

<div class="grid2">
<div class="card">

### 開発
`.env.local`（gitignore）

</div>
<div class="card">

### 本番
- **GitHub Actions Secrets**
- **Vercel / Cloudflare Secrets**
- **Doppler / 1Password / AWS Secrets Manager**

</div>
</div>

<div class="ng">

❌ **`.env` を コミット** → 即 漏洩、 鍵 ローテーション 必須<br>
❌ **`console.log(env)`** で ログに 全部 出る

</div>

---

## GitHub Actions Secrets の 使い方

<div class="code">
<span class="key">jobs</span>:
  <span class="key">deploy</span>:
    <span class="key">runs-on</span>: ubuntu-latest
    <span class="key">env</span>:
      <span class="key">TURSO_AUTH_TOKEN</span>: <span class="str">${{ secrets.TURSO_AUTH_TOKEN }}</span>
      <span class="key">SENTRY_DSN</span>: <span class="str">${{ secrets.SENTRY_DSN }}</span>
    <span class="key">steps</span>:
      - <span class="key">run</span>: npm run deploy
</div>

<div class="ok">

⭕ GitHub UI で **暗号化 して 保存**<br>
⭕ ログ には **`***`** で マスク<br>
⭕ **Environment 別** に 設定可（dev / staging / prod）

</div>

---

<!-- _class: handson -->

## ハンズオン: CI → デプロイ → 監視 を 1本に

<div class="step">

1. リポジトリ に `.github/workflows/ci.yml` を 作成
   （lint / type / test / build を 並列）
2. main に push したら Vercel に 自動 デプロイ（既存連携）
3. Sentry プロジェクト 作成、 DSN を Secrets に
4. Next.js に `@sentry/nextjs` 導入、 Wizard で 自動セットアップ
5. 故意に エラー を 投げる ボタン を 1個 作って 本番 で 押す
6. Sentry に エラー が 上がる ことを 確認（Slack 通知も）
7. SLO を 1つ 決める（例: 「エラー率 1% 未満」）

</div>

---

<!-- _class: warn -->

## 気をつけること

<div class="ng">

❌ **CI 緑 ＝ デプロイ OK と は 限らない**：マイグレーション・データ移行 漏れ

</div>

<div class="ng">

❌ **ロールバック 手段 が ない**：DB マイグレーション 含めて 逆戻り 計画

</div>

<div class="ng">

❌ **アラート 疲れ**：1ヶ月後 全員 ミュート、 障害 見逃し

</div>

<div class="ok">

⭕ **デプロイ ＋ DB マイグレーション** を 同じ パイプライン に<br>
⭕ **小さく / 頻繁 に** リリース（巨大デプロイ は ロールバック 困難）<br>
⭕ アラート は **削減 と 改善 が 定期業務**

</div>

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

<div class="grid3">
<div class="card">

### 1️⃣ CI/CD パイプライン
GitHub Actions で test → build → deploy を 1本に。 並列 + キャッシュ で 高速化。

</div>
<div class="card">

### 2️⃣ Docker Compose
本番に 近い ローカル 環境を 1コマンド で 再現。

</div>
<div class="card">

### 3️⃣ 観測可能性 3本柱
Logs / Metrics / Traces ＋ Sentry / Datadog / OTel。 SLO で 数字管理。

</div>
</div>

---

## 中級コース 4回 ふり返り

<div class="grid4">
<div class="card">

### 🤝 第1回
チーム開発の現実

</div>
<div class="card">

### ⚛️ 第2回
フロントエンドFW

</div>
<div class="card">

### 🗄️ 第3回
バックエンドスケール

</div>
<div class="card">

### 🚀 第4回
DevOps と 監視

</div>
</div>

---

<!-- _class: finale -->

# 🎓 中級コース 修了 おめでとう！

<div class="cert">

## 修 了 証

<div class="name">{{受講者 名}}</div>

あなたは 高校生プログラミング塾・中級コース（全4回）を<br>
最後までやり遂げました。<br>
<br>
**チーム開発** ・ **モダンFE / BE** ・ **DevOps / 監視** を<br>
身につけ、 **スタートアップ初日から 戦力** に なれる レベルへ。

<br>

2026年5月修了

</div>

---

## 次の ステップ

<div class="card">

### 上級 へ 進む
**アーキテクチャ設計 / AI/ML / 起業・OSS・キャリア / 卒業プロジェクト** で 社会に 出る 前の 総まとめ。 自分の 作品を 社会に 出す。

</div>

<div class="tip">

📚 おすすめの次の一歩:
- 自分の 既存プロジェクト を Vercel に デプロイ → Sentry 連携
- Docker Compose で ローカル 全部入り 環境 を 1つ 作る
- 上級コース 第1回 「アーキテクチャ設計」 へ 続く

</div>

---

<!-- _class: title -->

# おつかれさまでした 👏

### 高校生・中級 コース 修了！<br>**動く から 動き続ける へ** の 一歩 を 踏み出した あなた を 誇りに 思います。
