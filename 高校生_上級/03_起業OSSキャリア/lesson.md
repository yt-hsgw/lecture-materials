---
marp: true
theme: default
paginate: true
size: 16:9
header: '高校生プログラミング塾 ／ 上級 第3回'
footer: '起業・OSS・キャリア'
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
  .grid4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .ok  { background: #FEF9C3; border-left: 6px solid var(--c-accent);    padding: 12px 18px; border-radius: 6px; }
  .ng  { background: #FEF2F2; border-left: 6px solid var(--c-warn);      padding: 12px 18px; border-radius: 6px; }
  .tip { background: #FEFCE8; border-left: 6px solid var(--c-secondary); padding: 12px 18px; border-radius: 6px; }
  .code { background: var(--c-dark); color: #E2E8F0; border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono','SF Mono','Menlo',monospace; font-size: 17px; line-height: 1.7; overflow-x: auto; }
  .code .key { color: #FDE68A; }
  .code .str { color: #FCD34D; }
  .code .num { color: #93C5FD; }
  .code .com { color: #94A3B8; font-style: italic; }
---

<!-- _class: title -->

# 起業・OSS・<br>キャリア

### 第3回 ／ 高校生プログラミング塾・上級

<br>

きょうは **就職 / 起業 / OSS / 進学** の<br>**4つの 道** を 並べる ！ 🚀🌍🎓💼

---

## 前回の復習

<div class="grid3">
<div class="card">

### 🧠 全体地図
古典ML / 深層学習 / LLM / RAG

</div>
<div class="card">

### 🤖 手を動かす
scikit-learn / Hugging Face

</div>
<div class="card">

### 🔮 LLM + RAG
プロンプト / ベクトル DB / LangChain

</div>
</div>

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ 卒業後 の **4つの 道** を 知る
就職 / 起業 / OSS / 進学。 正解 は ない

</div>
<div class="card">

### ✅ それぞれ の **入り口 と 落とし穴**
新卒採用 / 法人化 / 初コントリビュート / 受験

</div>
<div class="card">

### ✅ 自分の **キャリアシート** を 1枚
GitHub プロフィール ＋ 経歴メモ ＋ 次の一歩

</div>

---

<!-- _class: section -->

# 1. 4つの 道 を 並べる

---

## 卒業後 の 主な 進路

<div class="grid4">
<div class="card">

### 💼 就職
新卒・中途・インターン

</div>
<div class="card">

### 🚀 起業
法人化・個人事業・副業

</div>
<div class="card">

### 🌍 OSS
コントリビュート・自作公開

</div>
<div class="card">

### 🎓 進学
大学・高専・専門学校

</div>
</div>

<div class="ok">

⭕ **どれか1つ ではなく、 組み合わせ が 普通**<br>
　 例: 大学生 ＋ インターン ＋ OSS / 起業家 ＋ OSS / 就職 ＋ 副業

</div>

---

## 「正解 は ない」 の 本当の 意味

<div class="card">

「**自分の 状況・志向・タイミング で 最適 が 変わる**」 ＝ 正解が ない。

- 経済状況：実家支援 / 借金 / 貯金
- 健康：体力 / メンタル / 持病
- 家族構成：扶養 / 結婚 / 子育て
- 興味 の 持続：1分野 / 多分野
- リスク許容度：安定志向 / 挑戦志向

</div>

<div class="tip">

💡 **「友達 が 起業 した から 自分も」** や **「親 に 大学 に 行けと 言われた から」** で 決めない

</div>

---

<!-- _class: section -->

# 2. 就職（新卒・インターン）

---

## エンジニア 新卒採用 の 流れ

<div class="code">
高校3年 / 大学1〜2年: <span class="key">サマーインターン</span>（1〜5日）
                       → 業界・職種 体験

大学3年 春:          <span class="key">長期インターン</span>（週20h〜）
                       → 実務経験 + 評価

大学3年 夏〜冬:      <span class="key">本選考</span> 開始
                       → コーディングテスト・面接・最終面接

大学4年 春:          <span class="key">内定</span>
                       → 4月 入社（または 早期入社）
</code></div>

<div class="ok">

⭕ **インターン 経験 が 圧倒的 有利**<br>
⭕ 大手 は **AtCoder / LeetCode** の 競プロ 力 を 見る ことも

</div>

---

## ポートフォリオ の 役割

<div class="grid2">
<div class="card">

### 何を 見る
- **動く 作品** が ある か
- コード が **読める** か
- **継続性**（コミット 履歴）
- **チーム経験**（PR レビュー など）

</div>
<div class="card">

### 評価される 作品 の 特徴
- **動く デモ URL** が ある
- 技術選定 の **理由** が 書いてある
- **テスト / CI** が 通っている
- README が **第三者 に 説明可能**

</div>
</div>

---

## 技術 面接 の 種類

<div class="grid3">
<div class="card">

### コーディング
- AtCoder ABC C問題 〜 LeetCode Medium
- アルゴリズム + データ構造
- 標準入出力 を 書ける か

</div>
<div class="card">

### システム設計
- 「URL短縮 サービス を 設計して」
- Twitter / Instagram / Slack を 分解
- スケール / DB / キャッシュ 議論

</div>
<div class="card">

### 行動面接
- 「困難 だった 経験」
- 「チーム で 衝突 した とき」
- **STAR法** で 答える

</div>
</div>

---

## STAR 法

<div class="card">

困難経験 / 失敗談 を 聞かれた時 の フレームワーク。

- **S**ituation: 状況
- **T**ask: 課題
- **A**ction: 自分の 行動
- **R**esult: 結果

</div>

<div class="code">
<span class="com">// 例: 「チームで 衝突 した経験」</span>
[<span class="key">S</span>] スクラム チーム 4人 で WebApp 開発
[<span class="key">T</span>] バックエンド の 設計 で 2案 に 分裂、 議論 が 1週間 平行線
[<span class="key">A</span>] 両案 の メリット/デメリット 表 を 作り、 1日 触る 比較会 を 提案
[<span class="key">R</span>] チーム 合意 で B案 採用、 リリース 1週間遅れ で 完了。
    その後、 ADR を チーム標準 に 提案 して 採用された
</code></div>

---

<!-- _class: quiz -->

## クイズ

新卒採用 の 技術面接 で **アピール する べき** ことは？

- A. 取得 した 資格 の 数
- B. **自分が 主体的 に 関わった プロジェクト の 設計判断**
- C. 学校 の プログラミング 授業 の 成績
- D. 流暢 な 自己紹介

---

## こたえ

<div class="ok">

**こたえ: B（主体的 な 設計判断）**

面接官 が 見たい のは:
- **「何 を 自分の 頭 で 決めた か」**
- **「なぜ そう 選んだ か」 の 言語化**
- 失敗 から **何を 学んだ か**

資格 / 成績 は **「努力 の 証明」 にはなる が 差別化 にならない**。

「**React と Vue で 迷って、 ◯◯ を 理由 に React を 選びました**」<br>
の 1文 が **資格 10個 より 強い**。

</div>

---

<!-- _class: section -->

# 3. 起業・個人事業

---

## 起業 の 3パターン

<div class="grid3">
<div class="card">

### 個人事業主
**開業届** だけ。 手続き 1日。

⭕ 一番 ハードル 低い<br>
❌ 信用 / 節税 で 弱い

</div>
<div class="card">

### 合同会社（LLC）
**資本金 1円〜**、 登記費用 約 6万円

⭕ 設立 安い<br>
❌ 株式公開 不可

</div>
<div class="card">

### 株式会社
資本金 自由、 登記費用 約 24万円

⭕ 信用・資金調達 強い<br>
❌ 維持コスト 高い

</div>
</div>

---

## ビジネスモデル の 主な パターン

<div class="grid2">
<div class="card">

### B2C（個人 向け）
- サブスク（Netflix）
- 広告（YouTube）
- 物販（EC）
- フリーミアム

</div>
<div class="card">

### B2B（企業 向け）
- SaaS（Slack / Notion）
- 受託開発
- ライセンス販売
- コンサル

</div>
</div>

---

## 個人開発 で やる ステップ

<div class="code">
1. 課題 を 見つける（自分が 毎日 困ってる こと）
   ↓
2. MVP を 1週間 で 作る（必要最小機能 のみ）
   ↓
3. 5人 に 使ってもらう（友達 / SNS）
   ↓
4. フィードバック で 改善
   ↓
5. 課金 / 広告 / 寄付 / 売却
</code></div>

<div class="tip">

💡 **「作りたい もの」 ではなく 「困っている 課題」 から 始める**<br>
→ 自分以外 にも 困ってる人 が いれば 顧客 が いる

</div>

---

## 知財（特許・商標・著作権）

<div class="grid3">
<div class="card">

### 著作権
**発生 自動**、 登録 不要

⭕ ソースコード / 文章 / 画像 / 音楽

</div>
<div class="card">

### 商標
**登録 必要**（特許庁）

⭕ サービス名 / ロゴ
コスト: 数万円〜

</div>
<div class="card">

### 特許
**登録 必要**、 ハードル 高い

⭕ 新規 / 進歩性 ある 発明
コスト: 数十万円〜

</div>
</div>

---

## 未成年 で 起業 する 場合

<div class="ng">

❌ **18歳未満** は 法律行為 に **保護者同意** が 必須

</div>

<div class="ok">

⭕ **個人事業主** ： 開業届 に 保護者 の 同意書<br>
⭕ **法人**       ： 親権者全員 の 同意、 印鑑証明<br>
⭕ **銀行口座**   ： 親権者同意 / 共同名義<br>
⭕ **契約**       ： 取り消し可能 期間（成年到達後 5年）

</div>

<div class="tip">

💡 **税務署 / 法務局 / 商工会議所 / 創業支援センター** が 無料 相談可能

</div>

---

<!-- _class: section -->

# 4. OSS（オープンソース）

---

## なぜ OSS に 関わる か

<div class="grid3">
<div class="card">

### 学習
**世界トップ レベル** の コード を 読める

</div>
<div class="card">

### 実績
GitHub プロフィール が **動く 履歴書**

</div>
<div class="card">

### 仲間
グローバル な エンジニア コミュニティ

</div>
</div>

<div class="ok">

⭕ **無料 で やる** の は OK、 でも **キャリア 価値 が 大きい**<br>
⭕ 採用面接 で 「OSS コントリビューション」 は 1秒 で 通る

</div>

---

## 初コントリビュート の 進め方

<div class="code">
1. <span class="key">使っている ライブラリ</span> を 1つ 選ぶ
   （react / vue / next / fastapi など）
   ↓
2. <span class="key">good-first-issue</span> ラベル の Issue を 探す
   ↓
3. 「私 が やります」 と コメント
   ↓
4. fork → branch → 実装 → テスト → PR
   ↓
5. レビュー → 修正 → マージ
   ↓
6. <span class="key">あなた も コントリビューター</span> 🎉
</code></div>

---

## 良い Issue の 探し方

<div class="grid2">
<div class="card">

### ラベル で 検索
- `good first issue`
- `help wanted`
- `documentation`
- `bug`

</div>
<div class="card">

### おすすめ レベル別
- **typo 修正** / 翻訳：超 初心者向け
- **ドキュメント追記**：技術判断 軽め
- **テスト追加**：理解 が 必要
- **バグ修正**：本格コントリビューション

</div>
</div>

---

## 自作 OSS を 公開 する

<div class="card">

「車輪 の 再発明」 でも OK。 **README が 書けて、 動いて、 ライセンス が あれば** 立派 な OSS。

</div>

<div class="code">
my-cool-lib/
├── README.md           <span class="com"># 何 / なぜ / どう 使うか</span>
├── LICENSE             <span class="com"># MIT or Apache-2.0 が 無難</span>
├── CONTRIBUTING.md     <span class="com"># コントリビューター ガイド</span>
├── CODE_OF_CONDUCT.md  <span class="com"># 行動規範</span>
├── src/
├── tests/
├── package.json
└── .github/
    ├── workflows/      <span class="com"># CI</span>
    └── ISSUE_TEMPLATE/
</code></div>

---

## OSS ライセンス の 選び方

<div class="grid3">
<div class="card">

### MIT
**最も 緩い**、 商用 OK、 改変 OK

→ 個人プロジェクト 推奨

</div>
<div class="card">

### Apache-2.0
特許条項 あり、 大手企業 に 安心

→ 企業 で 使われる 想定

</div>
<div class="card">

### GPL / AGPL
**改変 を 公開 強制**

→ 「自由 を 守りたい」 哲学

</div>
</div>

---

<!-- _class: section -->

# 5. 進学（大学・高専・専門）

---

## 進学先 の 主な タイプ

<div class="grid3">
<div class="card">

### 大学 情報系
- 国立: 東大 / 京大 / 阪大 / 東工大 / 名工大 など
- 私立: 慶應 / 早稲田 / 立命館 / 産業医大 など
- 4年制、 学費 国立 約 60万/年

</div>
<div class="card">

### 高専
- 全国 51校（国立）
- 5年制 一貫、 15歳 入学
- 早期 実技教育、 大手就職強い

</div>
<div class="card">

### 専門学校
- 2〜4年制
- 即戦力 育成
- 学費 やや 高い

</div>
</div>

---

## エンジニア 志望 で 大学 行く メリット

<div class="grid2">
<div class="card">

### メリット
- **CS の 基礎理論**（OS / アルゴ / DB 設計 / コンパイラ）
- **数学 / 統計 / 機械学習** の 数学基盤
- **研究室** で 論文 / 発表
- **インターン** に 時間 を 割ける
- **海外大学院** 進学 の 入り口

</div>
<div class="card">

### デメリット
- **学費 / 時間** コスト
- 「就職 に 直結 しない」 と 感じる 場合 も
- 独学 で 進む 速い 人 には **退屈**

</div>
</div>

---

## 大学 を 選ばない 道

<div class="ok">

⭕ **専門学校 + インターン** で 即戦力 化<br>
⭕ **高専 5年** で 高校 + 大学2年 相当 を 圧縮<br>
⭕ **18歳起業** で 1年 やってから 進学 検討<br>
⭕ **海外 大学** （ヨーロッパ は 学費 安い）

</div>

<div class="tip">

💡 **「行きたい から 行く」** と **「他に 選択肢 が ない から 行く」** は 違う。 後者 なら 1年 立ち止まる 価値 が ある。

</div>

---

## 推薦入試 で の アピール

<div class="ok">

⭕ **GitHub プロフィール**：継続的 な コントリビューション<br>
⭕ **動く 作品**：URL を 1個 用意<br>
⭕ **コンテスト 入賞**：AtCoder / Kaggle / 高校生 起業 コンテスト<br>
⭕ **OSS コントリビューション**：1コミット でも 大学側 は 評価

</div>

<div class="tip">

💡 高校生 で OSS コントリビューション している 受験生 は **稀**。 強力 な 差別化。

</div>

---

<!-- _class: section -->

# 6. キャリアシート を 作る

---

## キャリアシート 1枚 の 中身

<div class="code">
# 〇〇 〇〇 のキャリアシート

## 1. 自己紹介（200字）
- 高校生 〇年。 興味 ＝ Web / AI / ゲーム
- 自分の 1文 ＝ <span class="str">"Aを Bする Cな C人"</span>

## 2. これまで の 経験
- 2024 春: HTML/CSS で 個人サイト
- 2024 夏: Python で データ可視化
- 2025 秋: React + Next.js で TODO アプリ
- 2026 春: OSS 初コントリビュート、 個人開発 で 月10ユーザー

## 3. 主な 作品（GitHub URL付き）
- todo-cool-app: 自作 TODO（120 stars）
- react-router: ドキュメント 翻訳 PR 5件

## 4. 次の 1年 で やりたい こと
- [ ] 自分の 卒業プロジェクト を 100ユーザー
- [ ] OSS コントリビューション 月1
- [ ] AtCoder 緑 達成
</code></div>

---

## GitHub プロフィール 最適化

<div class="ok">

⭕ **README.md** で 自己紹介（プロフィール リポジトリ 作成）<br>
⭕ **Pinned リポジトリ**：見せたい 6個 を ピン<br>
⭕ **コミット 履歴**：継続性 が 一目<br>
⭕ **README on each repo**：第三者 が 1分 で 理解 可能<br>
⭕ **アイコン / 名前**：本名 or 一貫 した ハンドル

</div>

---

<!-- _class: handson -->

## ハンズオン: キャリアシート ＋ GitHub整備

<div class="step">

1. **GitHub プロフィール リポジトリ** を 作成（自分の username と 同名）
2. README.md に 自己紹介 / スキル / 作品 / 連絡先 を 書く
3. **Pinned リポジトリ** を 整理（6個、 順番 も 戦略的に）
4. 各 リポジトリ の README を 最低限 整える（What/Why/How/Demo）
5. **キャリアシート Markdown** を 1枚 作成（上の テンプレ参考）
6. **次の1年 で やりたい こと** を 3つ 書く
7. 互いに 5人 で キャリアシート レビュー（コメント し合う）
8. 公開 / 非公開 を 決める（公開 推奨）

</div>

---

<!-- _class: warn -->

## 気をつけること

<div class="ng">

❌ **「将来 やりたい こと」 を 1つ に 絞り過ぎ**：高校生 で 確定 する 必要 なし

</div>

<div class="ng">

❌ **他人 と 比べる**：1人1人 ペース が 違う

</div>

<div class="ng">

❌ **「経歴 を 盛る」**：嘘 が 1個 でも あると 信頼 全壊

</div>

<div class="ok">

⭕ **複数 の 選択肢** を 持って 後で 決める<br>
⭕ **小さく 試して** 軌道修正<br>
⭕ **嘘 ゼロ、 でも 良く 見せる** 努力 は 全力

</div>

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

<div class="grid4">
<div class="card">

### 💼 就職
インターン / ポートフォリオ / STAR法

</div>
<div class="card">

### 🚀 起業
個人事業 / 法人 / MVP / 知財

</div>
<div class="card">

### 🌍 OSS
コントリビュート / 自作公開 / ライセンス

</div>
<div class="card">

### 🎓 進学
大学 / 高専 / 専門 / 推薦

</div>
</div>

<div class="tip">
💡 「正解 は ない」 を 体感 できれば 第3回 ゴール！
</div>

---

## 次回予告

<div class="card">

### 第4回｜卒業プロジェクト 発表会
**全12回 の 集大成**！ 1人 5〜10分 で 自分の **卒業プロジェクト** を 発表。 動く デモ + スライド + Q&A。 修了証 授与 ＋ 紙吹雪 ＋ 集合写真。

</div>

<div class="tip">

📚 おすすめの宿題（最終回 まで に）:
- **卒業プロジェクト** の 完成（公開 URL or デモ動画）
- **発表スライド** を 5〜10分版 で 用意
- **キャリアシート** を 印刷 して 持参（共有）

</div>

---

<!-- _class: title -->

# おつかれさまでした 👏

### 自分の **道** を 選ぶ 材料 を 揃えた！<br>次回 「卒業プロジェクト発表会」 で **作品** を 持ってきて ください。
