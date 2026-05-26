---
marp: true
theme: default
paginate: true
size: 16:9
header: '高校生プログラミング塾 ／ 中級 第1回'
footer: 'チーム開発の現実'
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
  .code { background: var(--c-dark); color: #E2E8F0; border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono','SF Mono','Menlo',monospace; font-size: 18px; line-height: 1.7; overflow-x: auto; }
  .code .key { color: #FDE68A; }
  .code .str { color: #5EEAD4; }
  .code .num { color: #BAE6FD; }
  .code .com { color: #94A3B8; font-style: italic; }
---

<!-- _class: title -->

# チーム開発の<br>現実

### 第1回 ／ 高校生プログラミング塾・中級

<br>

きょうは **GitHub Flow / レビュー文化 / ペアプロ・モブプロ** で<br>**チームで コード を 動かす リアル** ！ 🤝🔀👀

---

## 初級 までの 復習

<div class="grid3">
<div class="card">

### 🐳 環境
Docker / dotfiles / pre-commit

</div>
<div class="card">

### 📐 型 / TDD
TS / Zod / 赤緑リファクタ

</div>
<div class="card">

### 🎫 Issue 駆動
スクラム / GitHub Projects

</div>
</div>

中級 では これを **チーム 5人** で 回す リアル を 体験 します。

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ GitHub Flow / Git Flow / Trunk-based の 違い
チーム規模 と リリース頻度 で 選ぶ

</div>
<div class="card">

### ✅ コードレビュー の **文化** を 知る
「良い PR」 と 「悪い PR」 を 並べて 比較

</div>
<div class="card">

### ✅ ペアプロ / モブプロ の 使い所
1人作業 と 何が 違うか、 いつ 使うか

</div>

---

<!-- _class: section -->

# 1. ブランチ戦略 の 3パターン

---

## GitHub Flow（最 シンプル）

<div class="code">
main ─●──●──●──●──●──●─→
        \      \    \
         feat-A feat-B fix-C
</div>

<div class="grid2">
<div class="card">

### ルール
- `main` は **常に デプロイ可能**
- 新機能 / 修正 は ブランチ で
- PR → レビュー → マージ → 即 デプロイ

</div>
<div class="card">

### 向いている チーム
- 小〜中規模（〜20人）
- CI/CD 整備済み
- 1日 複数回 リリース
- Web サービス 中心

</div>
</div>

---

## Git Flow（昔ながら の 正統派）

<div class="code">
main    ─●─────────────●──→ (本番)
         \             /
develop  ─●─●─●─●─●─●─●──→ (開発統合)
            \   \     /
             feat-A feat-B
</div>

<div class="grid2">
<div class="card">

### ルール
- `main` / `develop` の **2本柱**
- `feature/*` `release/*` `hotfix/*`
- リリース時 に `release/x.x` 切り出し

</div>
<div class="card">

### 向いている チーム
- 大規模・複数版運用
- パッケージ製品（バージョン番号 大事）
- リリース周期 が 月次 以上

</div>
</div>

---

## Trunk-based development（モダン 大規模）

<div class="code">
main ─●─●─●─●─●─●─●─●─●─●─●─→
       ↑ 全員 1日 何度も 直接 push
</div>

<div class="grid2">
<div class="card">

### ルール
- `main` に **直接** または 短命 ブランチ から PR
- **Feature Flag** で 未完成機能 を ON/OFF
- 全員 1日 1回 以上 main に 統合

</div>
<div class="card">

### 向いている チーム
- 大規模 / 数百人
- CI/CD が 強力
- Feature Flag 基盤あり
- Google / Meta / FAANG 系

</div>
</div>

---

<!-- _class: quiz -->

## クイズ

5人 チーム で **週1リリース** の Web サービス。 おすすめ の ブランチ戦略 は？

- A. **GitHub Flow**
- B. Git Flow
- C. Trunk-based + Feature Flag
- D. ブランチ なし、 全員 main に push

---

## こたえ

<div class="ok">

**こたえ: A（GitHub Flow）**

- 5人 / 週1リリース は GitHub Flow の **ど真ん中**
- Git Flow は オーバースペック（`develop` ブランチ が 邪魔）
- Trunk-based は Feature Flag 基盤 が 重い
- D は 論外（レビュー なし、 デグレ 即発生）

**目安**:
- 〜20人 / Web : GitHub Flow
- パッケージ / 製品 : Git Flow
- 数百人 / 巨大 monorepo : Trunk-based

</div>

---

<!-- _class: section -->

# 2. コードレビュー の 文化

---

## なぜ レビュー が 必要 か

<div class="grid3">
<div class="card">

### バグ発見
書いた 本人 が 見落とす バグ を 他人が 見つける

</div>
<div class="card">

### 知識共有
他人の コード を 読むだけ で **学習** に なる

</div>
<div class="card">

### 集合所有
「この コード 知ってる の あの人 だけ」 を なくす

</div>
</div>

---

## 良い PR の 条件

<div class="ok">

⭕ **小さい**（300行 以下 / 1〜2目的）<br>
⭕ **タイトル が 一文 で わかる**（`feat: add login form`）<br>
⭕ **本文 に 「なぜ」 が 書いてある**（What / Why / How）<br>
⭕ **スクリーンショット or デモ動画**（UI 変更時）<br>
⭕ **テスト が 同梱**<br>
⭕ **セルフレビュー 済み**（自分で 1回 通読）

</div>

---

## 悪い PR の 例

<div class="ng">

❌ **5000行 の "リファクタ"** ← レビュー 不可能<br>
❌ タイトル `update` / `fix` ← 何を？<br>
❌ 本文 空 ← 意図 不明<br>
❌ Webpack 設定 + 認証 ロジック + UI ← **目的 が 混在**<br>
❌ テスト なし、 動作確認 なし

</div>

<div class="tip">

💡 大きな 変更 は **「下準備 PR → 本体 PR」** に 分ける<br>
💡 リファクタ と 機能追加 は **絶対 に 分ける**

</div>

---

## レビューコメント の トーン

<div class="grid2">
<div class="card">

### ❌ NG
- 「これ ダメでしょ」
- 「なんで こう 書いたの？」
- 「全部 やり直し」

</div>
<div class="card">

### ⭕ OK
- 「ここ、 ◯◯ の 方が 読みやすい かも？」
- 「意図 を 教えて もらえると 助かる」
- 「**nit:** 命名 だけ 気になる」（軽い 指摘）
- 「**must:** ここ 直さないと マージ できない」

</div>
</div>

---

## レビュー の 重大度 ラベル

<div class="grid3">
<div class="card">

### `nit:`
**気になる** 程度、 直さなくても OK

</div>
<div class="card">

### `suggestion:`
**提案**、 議論 して 決めたい

</div>
<div class="card">

### `must:` / `blocker:`
**直さないと マージ 不可**

</div>
</div>

<div class="ok">

⭕ 全部 `must:` だと **レビュアー が 偉そう** に 見える<br>
⭕ `nit:` を 多めに、 `must:` は 厳選

</div>

---

## レビュー 待ち が 長い 問題 と 対策

<div class="ng">

❌ **2日 放置** → 著者は その間 他の 仕事に → コンテキスト 失う → 質 低下

</div>

<div class="ok">

⭕ **2時間以内 ファースト ルック**（深く 見なくて OK、 まず 目を 通す）<br>
⭕ **専任 レビュアー ローテーション**（今週 の レビュー 担当 は 〇〇）<br>
⭕ **Slack で メンション** + GitHub PR テンプレ<br>
⭕ **CODEOWNERS** で 自動 アサイン

</div>

---

## CODEOWNERS の 例

<div class="code">
<span class="com"># .github/CODEOWNERS</span>

<span class="com"># 全ファイル</span>
*                       @team-lead

<span class="com"># フロントエンド</span>
/src/components/        @alice @bob
/src/pages/             @alice

<span class="com"># バックエンド</span>
/api/                   @carol @dave
/migrations/            @dave

<span class="com"># インフラ</span>
/.github/               @team-lead
/Dockerfile             @dave
</div>

該当 PR に **自動 で レビュアー アサイン**。

---

<!-- _class: section -->

# 3. ペアプロ と モブプロ

---

## 個人作業 / ペアプロ / モブプロ

<div class="grid3">
<div class="card">

### 個人作業
1人 で 集中

⭐ 速い（自分の ペース）<br>
❌ バグ 見落とし<br>
❌ 知識 偏在

</div>
<div class="card">

### ペアプロ
2人 = ドライバー + ナビゲーター

⭐ 即時 レビュー<br>
⭐ 知識 共有<br>
❌ 単純 倍 コスト

</div>
<div class="card">

### モブプロ
3〜5人 = 1台 で 全員

⭐ チーム全員 で 設計合意<br>
⭐ 新人 教育 に 強力<br>
❌ コスト 高

</div>
</div>

---

## ペアプロ の リズム

<div class="code">
<span class="com"># ドライバー / ナビゲーター 交代</span>
<span class="num">25</span>分: ドライバー A、 ナビゲーター B
<span class="num">5</span>分:  休憩
<span class="num">25</span>分: ドライバー B、 ナビゲーター A
<span class="num">5</span>分:  休憩
... 繰り返し

<span class="com"># mob.sh / mob プログラミング タイマー</span>
brew install remotemobprogramming/brew/mob
mob start <span class="num">10</span>        <span class="com"># 10分 タイマー</span>
mob next            <span class="com"># 次の人 に 交代（git push 自動）</span>
mob done            <span class="com"># セッション 終了</span>
</div>

---

## ペアプロ の 役割

<div class="grid2">
<div class="card">

### ドライバー
**キーボード** を 持つ

- 戦術 を 担当（**いま どう 書くか**）
- 質問 を 投げる（「これで OK？」）

</div>
<div class="card">

### ナビゲーター
**画面 を 見る** 側

- 戦略 を 担当（**次に 何を するか**）
- タイプミス を 指摘
- 設計 / テスト の 抜け を 指摘

</div>
</div>

---

## いつ ペアプロ を 使うか

<div class="ok">

⭕ **複雑 / リスク 高い** 機能（決済・認証・DB マイグレーション）<br>
⭕ **新人 オンボーディング**（先輩 ナビゲーター）<br>
⭕ **デバッグ で 詰まった**（2人 で 見ると 一瞬）<br>
⭕ **設計 が 固まっていない** 機能

</div>

<div class="ng">

❌ **単純作業**（テストデータ作成、 ドキュメント 修正）<br>
❌ 慣れた **CRUD 量産**<br>
❌ 集中して **黙々 と 1人 で やりたい とき**

</div>

---

## モブプロ ＝ 全員 で 1台

<div class="grid2">
<div class="card">

### よく ある 場面
- スプリント 開始 の **設計合意**
- アーキテクチャ **大改修**
- 全員 が 知らない **新技術** の 導入
- バグ で **全員 困った**

</div>
<div class="card">

### 進め方
- ドライバー を **10分 ローテーション**
- 黙る人 が 出たら **質問 で 巻き込む**
- 議論 が 長引いたら **タイムボックス**
- 終了後、 **誰でも 同じ コード が 書ける** 状態

</div>
</div>

---

<!-- _class: section -->

# 4. ブランチ命名・コミットメッセージ・PR

---

## ブランチ命名 規約 例

<div class="code">
<span class="com"># <種別>/<Issue番号>-<短い説明></span>

feat/<span class="num">42</span>-login-form          <span class="com"># 新機能</span>
fix/<span class="num">123</span>-500-on-dashboard    <span class="com"># バグ修正</span>
chore/<span class="num">88</span>-upgrade-react      <span class="com"># 雑務</span>
docs/<span class="num">99</span>-update-readme       <span class="com"># ドキュメント</span>
refactor/<span class="num">55</span>-extract-api     <span class="com"># リファクタ</span>
</div>

<div class="tip">

💡 種別 は `feat / fix / chore / docs / refactor / test / ci` の 7つ で 十分

</div>

---

## Conventional Commits（コミット メッセージ）

<div class="code">
<span class="com"># 構造</span>
&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;

&lt;body&gt;

&lt;footer&gt;

<span class="com"># 例</span>
feat(auth): add password reset endpoint

新規 POST /api/auth/password/reset を 追加。
- メール送信 は 既存 mailer サービス を 再利用
- トークン 有効期限 1時間

Closes #<span class="num">42</span>
</div>

---

## Conventional Commits の メリット

<div class="grid3">
<div class="card">

### CHANGELOG 自動生成
`feat:` / `fix:` から リリースノート を 生成

</div>
<div class="card">

### バージョン 自動上げ
**Semantic Versioning** に 連動

</div>
<div class="card">

### 履歴 が 読みやすい
`git log --oneline` で 一目

</div>
</div>

<div class="ok">

⭕ `husky + commitlint` で **コミット前 チェック**<br>
⭕ `release-please` / `semantic-release` で **自動 リリース**

</div>

---

## PR テンプレート（`.github/pull_request_template.md`）

<div class="code">
## 概要
&lt;!-- この PR で 何を 変えたか --&gt;

## なぜ
&lt;!-- なぜ この変更 が 必要か（Issue 番号 など）--&gt;
Closes #

## どう
&lt;!-- 実装方針 / 設計判断 --&gt;

## スクリーンショット / 動画
&lt;!-- UI 変更時 --&gt;

## チェックリスト
- [ ] テスト追加・更新
- [ ] CI 緑
- [ ] 影響範囲 確認
- [ ] スクリーンショット添付（UI 変更時）
</div>

---

<!-- _class: handson -->

## ハンズオン: チーム PR レビュー

<div class="step">

1. 4人 1組 で 1リポジトリ を 共有
2. 各自 ブランチ を 切り、 **同じ 機能（タスク追加）** を 3パターン 実装
3. 互いに PR を **3つ** レビュー
4. **`nit:` / `suggestion:` / `must:`** の ラベル で コメント
5. 議論 が 出たら 修正 → 再レビュー
6. 全員 が **Approve** したら マージ
7. 振り返り: 「良い PR」 「悪い PR」 の パターン を 列挙

</div>

---

<!-- _class: warn -->

## 気をつけること

<div class="ng">

❌ **長期 ブランチ**（1ヶ月）→ コンフリクト 地獄、 マージ 時 デグレ

</div>

<div class="ng">

❌ **「最後 に まとめて PR」** → 巨大 で レビュー 不可能、 やり直し リスク

</div>

<div class="ng">

❌ **レビュー で 個人攻撃** → 心理的安全性 破壊、 チーム解散 へ

</div>

<div class="ok">

⭕ **1日 1 PR** を 目安に<br>
⭕ **drafts**（下書き PR）で 早期 フィードバック<br>
⭕ **「コード を 批判」 する のであって 「人 を 批判」 しない**

</div>

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

<div class="grid3">
<div class="card">

### 1️⃣ ブランチ戦略 を 選ぶ
チーム規模 / リリース頻度 で **GitHub Flow / Git Flow / Trunk-based**。

</div>
<div class="card">

### 2️⃣ レビュー文化
小さい PR、 セルフレビュー、 `nit:` / `must:` で トーン 制御。

</div>
<div class="card">

### 3️⃣ ペアプロ / モブプロ
複雑機能 / オンボーディング / 設計合意 に 強力 な ツール。

</div>
</div>

---

## 次回予告

<div class="card">

### 第2回｜フロントエンドフレームワーク
**React / Next.js / 状態管理（Zustand + TanStack Query）** で **Server State と Client State を 分ける** 設計 を 体得。 TODO アプリ を Next.js で 1個 作ります。

</div>

<div class="tip">

📚 おすすめの宿題:
- 自分の リポジトリ で `.github/pull_request_template.md` を 1個 作る
- CODEOWNERS を 設定 する
- Conventional Commits で 直近 5コミット を 整える

</div>

---

<!-- _class: title -->

# おつかれさまでした 👏

### 「チーム で コード を 動かす」 第一歩！<br>次回 「フロントエンド フレームワーク」 で お会いしましょう。
