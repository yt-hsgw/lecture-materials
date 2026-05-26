---
marp: true
theme: default
paginate: true
size: 16:9
header: '高校生プログラミング塾 ／ 初級 第4回'
footer: 'アジャイルとIssue駆動'
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
  section.finale { background: linear-gradient(135deg, var(--c-primary), var(--c-accent), var(--c-secondary)); color: white; text-align: center; }
  section.finale h1 { color: white; font-size: 60px; }
  .card { background: white; border-radius: 14px; padding: 18px 24px; margin: 12px 0; box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .grid4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .ok  { background: #ECFDF5; border-left: 6px solid var(--c-accent);    padding: 12px 18px; border-radius: 6px; }
  .ng  { background: #FEF2F2; border-left: 6px solid var(--c-warn);      padding: 12px 18px; border-radius: 6px; }
  .tip { background: #FFF7ED; border-left: 6px solid var(--c-secondary); padding: 12px 18px; border-radius: 6px; }
  .code { background: var(--c-dark); color: #E2E8F0; border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono','SF Mono','Menlo',monospace; font-size: 17px; line-height: 1.7; overflow-x: auto; }
  .code .key { color: #C4B5FD; }
  .code .str { color: #FDBA74; }
  .code .num { color: #6EE7B7; }
  .code .com { color: #94A3B8; font-style: italic; }
  .kanban { display:grid; grid-template-columns: repeat(4,1fr); gap:8px; margin-top:12px; }
  .col { background:white; border-radius:8px; padding:10px; min-height:140px; box-shadow: 0 2px 6px rgba(0,0,0,.08); }
  .col h4 { color: var(--c-primary); border-bottom:2px solid currentColor; padding-bottom:4px; margin-bottom:8px; font-size: 18px; text-align:center; }
  .ticket { background: #FFF7ED; border-left:4px solid var(--c-secondary); border-radius:4px; padding:8px 10px; font-size:14px; margin-bottom:6px; }
  .ticket.bug { background:#FEF2F2; border-left-color: var(--c-warn); }
  .ticket.done { background:#ECFDF5; border-left-color: var(--c-accent); }
  .cert {
    background: linear-gradient(135deg, #FFFBEB, #ECFDF5);
    border: 5px double var(--c-primary);
    border-radius: 14px; padding: 26px; text-align: center;
    box-shadow: 0 4px 18px rgba(0,0,0,.12);
  }
  .cert h2 { color: var(--c-primary); letter-spacing: 6px; font-size: 36px; }
  .cert .name {
    display: inline-block; font-size: 30px; font-weight: bold;
    color: var(--c-accent); padding: 8px 28px;
    border-top: 3px solid var(--c-primary);
    border-bottom: 3px solid var(--c-primary);
    margin: 12px 0;
  }
---

<!-- _class: title -->

# アジャイルと<br>Issue駆動

### 第4回 ／ 高校生プログラミング塾・初級 ／ 最終回

<br>

きょうは **GitHub Issues / Projects / スクラム** で<br>**チームの 一員** として 動く！ 🎫📊🤝

---

## 前回までの 復習

<div class="grid4">
<div class="card">

### 🐳 第1回
環境を コード化（Docker / dotfiles）

</div>
<div class="card">

### 📐 第2回
型 で 設計（TS / Zod / Pydantic）

</div>
<div class="card">

### 🔴 第3回
TDD（赤 → 緑 → リファクタ）

</div>
<div class="card">

### 🎫 第4回
**Issue 駆動 ← きょう**

</div>
</div>

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ アジャイル / スクラム の 共通言語 を 持つ
PO / SM / 開発者 / バックログ / スプリント / レトロ

</div>
<div class="card">

### ✅ GitHub Issues + Projects で 実際 に 動かす
カンバン・ラベル・マイルストーン・自動化

</div>
<div class="card">

### ✅ 「**見積もり** と **振り返り**」 の リズム を 持つ
週次 スプリント・ストーリーポイント・ベロシティ

</div>

---

<!-- _class: section -->

# 1. アジャイル と は

---

## ウォーターフォール vs アジャイル

<div class="grid2">
<div class="card">

### ウォーターフォール
**完璧な 計画 → 設計 → 実装 → テスト → リリース** を 順番に。

- 計画通り に 進むと **強い**
- 途中で 仕様変更 すると **死ぬ**
- 完成まで **何ヶ月** も 動く ものが ない

</div>
<div class="card">

### アジャイル
**短い 周期** で 「計画 → 動く もの → 振り返り」 を 繰り返す。

- 仕様変更 に **強い**
- 1〜2週間 ごと に **動く ものが 出る**
- 計画 が 短期間 で 進化 する

</div>
</div>

---

## アジャイル の 4つの 価値（アジャイル宣言）

<div class="grid2">
<div class="card">

### より 重視 する
1. **個人 と 対話** > プロセスと ツール
2. **動く ソフトウェア** > 包括的な ドキュメント
3. **顧客との 協調** > 契約交渉
4. **変化への 対応** > 計画に 従うこと

</div>
<div class="card">

### 補足
「左 を 否定 する」 では なく、 **「両方 大事 だが、 左を より 重視 する」**。

「ドキュメント いらない」 と 言って いるのではない、 「動く ソフトウェア を 優先」 ということ。

</div>
</div>

---

## スクラム ＝ アジャイル の 1つの 流派

<div class="grid3">
<div class="card">

### 役割
- **PO**（プロダクトオーナー）
- **SM**（スクラムマスター）
- **開発者**

</div>
<div class="card">

### 道具
- **バックログ**（やる ことの 倉庫）
- **スプリント**（1〜2週間 の 単位）
- **ボード**（カンバン）

</div>
<div class="card">

### イベント
- **スプリント計画**
- **デイリー**
- **レビュー / レトロ**

</div>
</div>

---

## スプリント の 1週間 例

<div class="code">
<span class="com"># 月曜</span>
09:00 スプリント計画（1時間）
       → バックログ から 今週 やる 7枚 を 選ぶ
       → 各 チケット に 見積もり

<span class="com"># 火〜木</span>
09:00 デイリースタンドアップ（15分）
       昨日 / 今日 / ブロッカー を 1人 ずつ

<span class="com"># 金曜</span>
14:00 スプリントレビュー（30分）
       → 完成した もの の デモ
15:00 レトロスペクティブ（30分）
       → Keep / Problem / Try
</div>

---

<!-- _class: quiz -->

## クイズ

スクラム の **デイリースタンドアップ** で **NG** な のは？

- A. 「昨日 やった こと」 を 報告
- B. 「今日 やる こと」 を 報告
- C. 「ブロッカー（困っている こと）」 を 共有
- D. **その場で バグ調査 を 始める**

---

## こたえ

<div class="ok">

**こたえ: D（その場で バグ調査）**

デイリー は **15分** で 終わる **同期 イベント**。
- 詳細な 議論 は **「あとで 話そう」** と 切り上げる
- 全員 の 時間 を **平等 に 短く** 取る ための 仕組み

「ブロッカー」 を 共有 した あと、 関係者 2人 で 別 ミーティング を 設ける のが 正しい 流れ。

</div>

---

<!-- _class: section -->

# 2. GitHub Issues ＝ チケット の 倉庫

---

## Issue の 基本

<div class="code">
<span class="com"># タイトル</span>
ログイン後 に 500 エラー が 発生する

<span class="com"># 本文（テンプレ化 推奨）</span>
## 概要
ログイン直後、 ダッシュボード を 開くと <span class="num">500</span> が 返る。

## 再現手順
<span class="num">1</span>. /login で メール / パスワード を 入力
<span class="num">2</span>. /dashboard へ リダイレクト
<span class="num">3</span>. <span class="num">500</span> Internal Server Error

## 期待する挙動
ダッシュボード が 正常表示

## 実際の挙動
<span class="num">500</span>、 Sentry に スタック トレース あり

## 環境
- 本番 (https://example.com)
- Chrome <span class="num">125</span> / macOS <span class="num">14</span>
</div>

---

## Issue テンプレート（`.github/ISSUE_TEMPLATE/`）

<div class="code">
<span class="com"># .github/ISSUE_TEMPLATE/bug_report.yml</span>
<span class="key">name</span>: <span class="str">"🐛 バグ報告"</span>
<span class="key">description</span>: バグ を 見つけた とき
<span class="key">labels</span>: [<span class="str">"bug"</span>, <span class="str">"triage"</span>]
<span class="key">body</span>:
  - <span class="key">type</span>: textarea
    <span class="key">id</span>: what-happened
    <span class="key">attributes</span>:
      <span class="key">label</span>: 何が 起きた か
      <span class="key">placeholder</span>: ログイン後 に <span class="num">500</span> エラー
    <span class="key">validations</span>:
      <span class="key">required</span>: <span class="key">true</span>
  - <span class="key">type</span>: textarea
    <span class="key">id</span>: repro
    <span class="key">attributes</span>:
      <span class="key">label</span>: 再現手順
</div>

<div class="tip">
💡 テンプレ が ある と **書く 人 の 負担 が 減り**、 **情報 が 揃う**。
</div>

---

## ラベル設計（よく ある 例）

<div class="grid3">
<div class="card">

### 種別
`bug` / `enhancement` / `documentation` / `chore`

</div>
<div class="card">

### 優先度
`priority/high` / `priority/medium` / `priority/low`

</div>
<div class="card">

### 状態
`triage` / `in-progress` / `blocked` / `needs-review`

</div>
</div>

<div class="card">

### コンポーネント別
`area/frontend` / `area/backend` / `area/infra` / `area/docs`

</div>

---

<!-- _class: section -->

# 3. GitHub Projects ＝ カンバン ボード

---

## 標準カンバン の 4 列

<div class="kanban">
<div class="col">
<h4>📥 Backlog</h4>
<div class="ticket">#42 ログイン画面</div>
<div class="ticket">#43 パスワード再設定</div>
<div class="ticket bug">#44 500エラー</div>
</div>
<div class="col">
<h4>📅 Todo</h4>
<div class="ticket">#40 利用規約ページ</div>
<div class="ticket">#41 ヘッダー改修</div>
</div>
<div class="col">
<h4>🚧 In Progress</h4>
<div class="ticket">#38 認証API</div>
</div>
<div class="col">
<h4>✅ Done</h4>
<div class="ticket done">#36 README整備</div>
<div class="ticket done">#37 CI構築</div>
</div>
</div>

<div class="tip">
💡 **WIP制限**：In Progress は 1人 1〜2枚 まで。 「あれもこれも 着手」 を 防ぐ。
</div>

---

## GitHub Projects v2 の セットアップ

<div class="code">
<span class="com"># 1. リポジトリ → Projects → New project</span>
<span class="com"># 2. テンプレ "Team planning" を 選ぶ</span>
<span class="com"># 3. ビューを 追加（カンバン / テーブル / ロードマップ）</span>

<span class="com"># 自動化（Workflows）の 例</span>
- Issue が assigned された 時 → Todo に 移動
- PR が opened された 時 → In Progress
- PR が merged された 時 → Done
- 14日 触れていない カード → Stale ラベル
</div>

---

## マイルストーン ＝ リリース 単位

<div class="grid2">
<div class="card">

### 例
- **v1.0** ＝ MVP リリース
- **v1.1** ＝ パスワード 再設定 追加
- **v2.0** ＝ チーム機能

</div>
<div class="card">

### 効果
- 「今、 何を 目指している か」 が 明確
- リリースノート の 元 ネタ に
- 進捗バー が 出る（n / m 完了）

</div>
</div>

---

<!-- _class: section -->

# 4. 見積もり と ベロシティ

---

## ストーリーポイント ＝ 「相対的な 大きさ」

<div class="grid2">
<div class="card">

### 時間 で 見積もる の が 難しい 理由
- 個人 差 が 大きい（経験 / 環境）
- 中断 / レビュー / バグ 修正 時間 が 入る
- 「6時間」 と 言うと **責任** に なる

</div>
<div class="card">

### ポイント で 見積もる
**フィボナッチ**: 1, 2, 3, 5, 8, 13, 21
- 「1 ＝ コピペで 終わり」
- 「3 ＝ 半日」
- 「8 ＝ 1〜2日」
- 「13 ＝ 分割 検討」

</div>
</div>

---

## プランニングポーカー

<div class="code">
<span class="com"># 流れ</span>
<span class="num">1</span>. PO が Issue を 説明
<span class="num">2</span>. 全員 が <span class="str">"せーの"</span> で カード を 出す
<span class="num">3</span>. 一番 高い人 と 低い人 が 理由 を 話す
<span class="num">4</span>. 議論後、 もう一度 投票
<span class="num">5</span>. 合意した 数 を Issue に 記録
</div>

<div class="ok">

⭕ **多数決 ではない**、 **議論 が 主役**<br>
⭕ 「自分が 知らない 落とし穴」 が 出てくる ことが 多い

</div>

---

## ベロシティ ＝ チームの 速度

<div class="code">
<span class="com"># スプリント 1: 18 ポイント 完了</span>
<span class="com"># スプリント 2: 22 ポイント 完了</span>
<span class="com"># スプリント 3: 20 ポイント 完了</span>
<span class="com"># → 平均 ベロシティ ≒ 20 ポイント / 週</span>
</div>

<div class="grid2">
<div class="card">

### 使い方
- 次の スプリント 計画 で **20 ポイント分** を 取る
- リリース 予測： 残り 100 pt ÷ 20 pt/週 ＝ **5週**

</div>
<div class="card">

### NG な 使い方
- チーム間 で 比較（チーム ごと に ポイント基準 が 違う）
- 個人 評価（ベロシティ ＝ チーム の 数字）
- 上司に 報告 して **圧力**

</div>
</div>

---

<!-- _class: section -->

# 5. レトロスペクティブ（振り返り）

---

## KPT（Keep / Problem / Try）

<div class="grid3">
<div class="card">

### 🟢 Keep
**続けたい こと**
- ペアプロ で バグ 早く 発見
- PR テンプレ が 効いた
- 朝会 が 15分 で 終わる

</div>
<div class="card">

### 🔴 Problem
**問題 だった こと**
- レビュー 待ち が 長い
- CI が 5分 遅い
- 仕様変更 が 急

</div>
<div class="card">

### 🟡 Try
**次 試したい こと**
- レビュー 専任 ローテーション
- CI キャッシュ 改善
- PO に 仕様変更ルール 提案

</div>
</div>

---

## 「人 を 責めない」 ＝ レトロ の 鉄則

<div class="ng">

❌ 「A さん が 〇〇 して くれなかった」<br>
❌ 「B さん の レビュー が 遅い」

</div>

<div class="ok">

⭕ 「レビュー 待ち の 時間 が 長かった」 ← **事象** で 語る<br>
⭕ 「次は **専任ローテーション** を 試そう」 ← **仕組み** で 解決

</div>

<div class="tip">

💡 **心理的 安全性** が 失われた チーム は **問題 が 出てこなくなる**。 レトロ で 個人攻撃 を すると レトロ 自体 が 形骸化 する。

</div>

---

<!-- _class: handson -->

## ハンズオン: 1スプリント を 回す

<div class="step">

1. **GitHub リポジトリ + Project** を 作成
2. **Issue を 5枚** 作る（「TODOアプリ 機能 5個」 など）
3. ラベル / マイルストーン を 1個 ずつ
4. **プランニング**: 全員 で ポイント 見積もり
5. **In Progress** に 1枚 移動 → 実装 → PR → レビュー → マージ
6. **Done** に 移動、 残り を 1週間 で 消化
7. **レトロ**: KPT を 全員 で 出す
8. 次の スプリント に 反映

</div>

---

<!-- _class: warn -->

## 気をつけること

<div class="ng">

❌ **アジャイル ＝ 計画なし** と 誤解：実は **計画 を 頻繁 に 更新** する 手法

</div>

<div class="ng">

❌ **デイリー が 長い**：30分 超えたら 設計 ミス、 別 ミーティング 切り出し

</div>

<div class="ng">

❌ **完了 の 定義 が 曖昧**：「テスト 通る + コードレビュー済み + ドキュメント更新」 を 明文化

</div>

<div class="ok">

⭕ **動く こと を 優先**、 でも 「動けば 何でも OK」 は ない<br>
⭕ **Definition of Done**（完了の 定義）を 全員 で 合意

</div>

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

<div class="grid3">
<div class="card">

### 1️⃣ アジャイル / スクラム の 共通言語
PO / SM / バックログ / スプリント / レトロ。 チーム の 中 で 通じる。

</div>
<div class="card">

### 2️⃣ GitHub Issues + Projects
チケット で 1人1人 の 仕事 を 見える 化、 ボード で 流れ を 可視化。

</div>
<div class="card">

### 3️⃣ 見積もり と 振り返り
ストーリーポイント で 相対 サイズ、 KPT で 仕組み改善。

</div>
</div>

---

## 初級コース 4回 ふり返り

<div class="grid4">
<div class="card">

### 🐳 第1回
**環境**: Docker / dotfiles / pre-commit

</div>
<div class="card">

### 📐 第2回
**型**: TS / Zod / Python型ヒント

</div>
<div class="card">

### 🔴 第3回
**TDD**: 赤 → 緑 → リファクタ

</div>
<div class="card">

### 🎫 第4回
**Issue駆動**: スクラム / GitHub Projects

</div>
</div>

---

<!-- _class: finale -->

# 🎓 初級コース 修了 おめでとう！

<div class="cert">

## 修 了 証

<div class="name">{{受講者 名}}</div>

あなたは 高校生プログラミング塾・初級コース（全4回）を<br>
最後までやり遂げました。<br>
<br>
**プロ仕様の開発環境** ・ **型** ・ **TDD** ・ **Issue駆動** を<br>
身につけ、 **実務に近い 開発スキル** の 第一歩を 踏み出しました。

<br>

2026年5月修了

</div>

---

## 次の ステップ

<div class="grid2">
<div class="card">

### 中級 へ 進む
「チーム で 本格 Web サービス」<br>
React/Next.js, Redis, DevOps, 監視

</div>
<div class="card">

### 自分の 作品 を 育てる
ここまでの スキルだけ でも **インターン応募・個人開発・OSS貢献** が 可能。

</div>
</div>

<div class="tip">

📚 おすすめの次の一歩:
- 自分の リポジトリ に **Issue を 5枚** 立てる
- 1週間スプリント を 1回 自分で 回してみる
- 中級 コース 第1回「チーム開発の現実」へ 続く

</div>

---

<!-- _class: title -->

# おつかれさまでした 👏

### 高校生・初級 コース 修了！<br>**実務に 近い スキル** を 手に 入れた あなた を 誇りに 思います。
