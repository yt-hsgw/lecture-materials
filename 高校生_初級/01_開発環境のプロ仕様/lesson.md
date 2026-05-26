---
marp: true
theme: default
paginate: true
size: 16:9
header: '高校生プログラミング塾 ／ 初級 第1回'
footer: '開発環境のプロ仕様'
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
  .code { background: var(--c-dark); color: #E2E8F0; border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono','SF Mono','Menlo',monospace; font-size: 18px; line-height: 1.7; overflow-x: auto; }
  .code .key { color: #C4B5FD; }
  .code .str { color: #FDBA74; }
  .code .num { color: #6EE7B7; }
  .code .com { color: #94A3B8; font-style: italic; }
  .step { font-size: 30px; }
  .step b { color: var(--c-primary); }
---

<!-- _class: title -->

# 開発環境の<br>プロ仕様

### 第1回 ／ 高校生プログラミング塾・初級

<br>

きょうは **VSCode / Docker / WSL / dotfiles** で<br>自分の 環境を **コード化** ！ 💻⚙️🐳

---

## 中学生・上級 までの 復習

<div class="grid3">
<div class="card">

### 🎯 設計
要件定義・DB設計・API設計

</div>
<div class="card">

### 💻 実装
Git・PR・レビュー・認証

</div>
<div class="card">

### 🚀 運用
テスト・CI・デプロイ・監視

</div>
</div>

「動く ものを 公開して 改善する」 まで 体験 した あなた は、 もう エンジニアの 卵 です。
**高校生・初級** では それを **プロ仕様** に 進化させます。

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ 「環境構築 1日」 を 「環境構築 30分」 に
README ではなく **Dockerfile / devcontainer.json** で コード化

</div>
<div class="card">

### ✅ PC 入れ替えても 全く 同じ 環境
**dotfiles + Homebrew + Mackup** で 設定を Git管理

</div>
<div class="card">

### ✅ コミット する 前 に 自動チェック
**pre-commit** で lint / format / test を フックに 組み込む

</div>

---

<!-- _class: section -->

# 1. なぜ 環境を コード化 するのか

---

## ある日の 「環境構築」 あるある

<div class="ng">

❌ README に 「Node 18 を 入れて」 と 書いてある<br>
→ 自分は Node 20 入っている、 動かない<br>
→ nvm で 切り替え … でも `.nvmrc` ない<br>
→ メンバーに 聞く … 「あ、 16 でした」<br>
→ **1時間 経過**

</div>

<div class="ng">

❌ macOS で 動く コマンド、 Windows で 動かない<br>
→ `ls -la` が `dir` だったり、 改行が CRLF 問題<br>
→ **WSL 入れる ところ から 1日**

</div>

---

## プロの 解 ＝ **環境を コード化**

<div class="ok">

⭕ `Dockerfile` ＋ `docker-compose.yml`<br>
→ 全員 **同じ Linux 上 の 同じ Node 20**

</div>

<div class="ok">

⭕ `.devcontainer/devcontainer.json`<br>
→ VS Code が **コンテナの 中で** 起動する

</div>

<div class="ok">

⭕ `dotfiles` リポジトリ<br>
→ 新しい PC でも `bash install.sh` で 復元

</div>

---

## 「コード化」 の 3 段階

<div class="grid3">
<div class="card">

### 1️⃣ プロジェクト固有
**Dockerfile / docker-compose / devcontainer**

そのリポジトリに 同梱。 git clone で 自動的に セットアップ。

</div>
<div class="card">

### 2️⃣ 個人 全体
**dotfiles / .zshrc / .vimrc / Brewfile**

自分の PC 全体 の 設定。 GitHub に 公開可。

</div>
<div class="card">

### 3️⃣ チーム共通
**.editorconfig / .prettierrc / pre-commit / CI**

エディタ・整形・チェック の 統一。 全員 自動で 揃う。

</div>
</div>

---

<!-- _class: quiz -->

## クイズ

「環境構築 README」 が 数行 で 終わって いる プロジェクト で、 1番 起こりやすい トラブル は？

- A. README が 短すぎて 読まれない
- B. **書いていない 暗黙の 前提（OSバージョン / 依存ツール）で つまづく**
- C. README が 古くて 実態 と 違う
- D. README に 絵文字 が なくて 楽しくない

---

## こたえ

<div class="ok">

**こたえ: B（暗黙の 前提 で つまづく）**

実は C も よく ある（README が 古い）。 どちらも 原因は **「環境が ドキュメント に 依存している」** こと。

**Dockerfile に すると**:
- 暗黙の 前提 が 全部 明示される（OS / 依存パッケージ も）
- 実態 と 違ったら CI が 即 失敗する → 古く ならない

</div>

---

<!-- _class: section -->

# 2. Docker 入門（実務 編）

---

## Docker とは（中学生・上級 と 同じ説明）

<div class="grid2">
<div class="card">

### 仮想マシン
PC の 中に PC を 作る。 **重い**（数 GB / 起動 数分）。

</div>
<div class="card">

### Docker
PC の 中に **アプリ 1つ分** の 隔離環境。 **軽い**（数百MB / 起動 数秒）。

</div>
</div>

---

## 最小限の Dockerfile（Node.js アプリ）

<div class="code">
<span class="com"># 1. ベースイメージを 選ぶ（Node 20 + Alpine Linux）</span>
<span class="key">FROM</span> node:<span class="num">20</span>-alpine

<span class="com"># 2. 作業ディレクトリ</span>
<span class="key">WORKDIR</span> /app

<span class="com"># 3. 依存だけ 先に コピー（キャッシュ効かせる）</span>
<span class="key">COPY</span> package*.json ./
<span class="key">RUN</span> npm ci

<span class="com"># 4. アプリ全体 を コピー</span>
<span class="key">COPY</span> . .

<span class="com"># 5. 起動</span>
<span class="key">EXPOSE</span> <span class="num">3000</span>
<span class="key">CMD</span> [<span class="str">"npm"</span>, <span class="str">"start"</span>]
</div>

「OS の 選定 → 依存 → コード → 起動」 が **1ファイル に 全部 書ける**。

---

## docker-compose で 複数サービス

<div class="code">
<span class="com"># docker-compose.yml</span>
<span class="key">services</span>:
  <span class="key">app</span>:
    <span class="key">build</span>: .
    <span class="key">ports</span>: [<span class="str">"3000:3000"</span>]
    <span class="key">environment</span>:
      <span class="key">DATABASE_URL</span>: <span class="str">"libsql://..."</span>
    <span class="key">depends_on</span>: [db, redis]

  <span class="key">db</span>:
    <span class="key">image</span>: <span class="str">"ghcr.io/tursodatabase/libsql-server:latest"</span>
    <span class="key">ports</span>: [<span class="str">"8080:8080"</span>]

  <span class="key">redis</span>:
    <span class="key">image</span>: redis:<span class="num">7</span>-alpine
    <span class="key">ports</span>: [<span class="str">"6379:6379"</span>]
</div>

`docker compose up` 一発で **アプリ + DB + キャッシュ** が 立ち上がる。

---

<!-- _class: handson -->

## ハンズオン: Dev Container を 立てる

<div class="step">

1. **新しい フォルダ** で `code .` （VS Code 起動）
2. **Dev Containers 拡張** インストール
3. `Cmd/Ctrl + Shift + P` → `Dev Containers: Add Dev Container Configuration Files`
4. **Node.js & TypeScript** を 選ぶ
5. `.devcontainer/devcontainer.json` が 自動生成
6. `Reopen in Container` → コンテナ内で VS Code が 開く
7. ターミナルで `node --version` → コンテナの Node が 答える

</div>

<div class="tip">

💡 これで 「PC が 壊れても、 別の PC でも、 全く 同じ Node 環境」 が 手に 入る。

</div>

---

<!-- _class: section -->

# 3. WSL2（Windows の 人 向け）

---

## なぜ WSL2 ？

<div class="card">

Windows で 本格的に 開発する とき、 **PowerShell / cmd の 制約** に ぶつかる:
- パス区切りが `\`、 シェルスクリプト 動かない
- パッケージ 管理が 弱い（Chocolatey はあるが Linux と 差分）
- Docker は 結局 Linux カーネル

</div>

<div class="ok">

⭕ **WSL2** ＝ Windows の 中で **本物の Linux カーネル** が 動く<br>
→ Ubuntu 24.04 が ネイティブ 並み の 速度で 動く<br>
→ Docker Desktop と シームレス 連携<br>
→ VS Code の **Remote-WSL** で 直接 編集

</div>

---

## WSL2 の セットアップ（最短 3行）

<div class="code">
<span class="com"># PowerShell（管理者）</span>
wsl --install -d Ubuntu-<span class="num">24.04</span>

<span class="com"># 再起動 後、 Ubuntu を 開いて</span>
sudo apt update && sudo apt upgrade -y
sudo apt install -y build-essential git curl
</div>

<div class="tip">

💡 **ファイル を 置く場所**：必ず `/home/<user>/` の 下。 `/mnt/c/` 配下 は **遅い**（NTFS マウント）。

</div>

---

## VS Code の Remote-WSL

<div class="grid2">
<div class="card">

### Before
Windows で コード書く → WSL に コピー → 実行

</div>
<div class="card">

### After
**WSL 上で `code .`** → VS Code が WSL 上の Node / npm を 直接 操作

</div>
</div>

<div class="ok">

⭕ 拡張機能 も WSL側 に 自動 インストール<br>
⭕ ターミナル も 自動で WSL の bash<br>
⭕ Docker も WSL 側 で 動く

</div>

---

<!-- _class: section -->

# 4. dotfiles ＝ 設定を Git管理

---

## dotfiles とは

ホームディレクトリの **「.」 から 始まる 設定ファイル** たち:

<div class="grid2">
<div class="card">

### よく ある dotfiles
- `.zshrc` / `.bashrc`
- `.gitconfig`
- `.vimrc` / `.config/nvim/`
- `.tmux.conf`
- `.ssh/config`（**鍵 は 除外**！）

</div>
<div class="card">

### 何が 嬉しい？
- 新 PC で `git clone + bash install.sh` で 復元
- 設定変更 が **diff** で 見える
- 他人の dotfiles を **参考に** できる
- 教室 で 共通設定 を 配れる

</div>
</div>

---

## 典型的な dotfiles 構成

<div class="code">
~/dotfiles/
├── README.md
├── install.sh          <span class="com"># セットアップ自動化</span>
├── .zshrc
├── .gitconfig
├── .vimrc
├── Brewfile            <span class="com"># brew bundle 用</span>
├── vscode/
│   ├── settings.json
│   └── extensions.txt
└── .config/
    ├── starship.toml
    └── nvim/init.vim
</div>

---

## install.sh の イメージ

<div class="code">
<span class="com">#!/bin/bash</span>
<span class="key">set</span> -euo pipefail

DOTFILES=<span class="str">"$(pwd)"</span>

<span class="com"># シンボリックリンク</span>
<span class="key">ln</span> -sf <span class="str">"$DOTFILES/.zshrc"</span>     ~/.zshrc
<span class="key">ln</span> -sf <span class="str">"$DOTFILES/.gitconfig"</span> ~/.gitconfig
<span class="key">ln</span> -sf <span class="str">"$DOTFILES/.vimrc"</span>     ~/.vimrc

<span class="com"># brew で アプリ復元</span>
<span class="key">brew</span> bundle --file=<span class="str">"$DOTFILES/Brewfile"</span>

<span class="com"># VSCode 拡張 を 復元</span>
<span class="key">cat</span> <span class="str">"$DOTFILES/vscode/extensions.txt"</span> | xargs -L1 code --install-extension

<span class="key">echo</span> <span class="str">"✅ dotfiles installed"</span>
</div>

---

<!-- _class: warn -->

## 気をつけること

<div class="ng">

❌ **`.ssh/id_rsa`（秘密鍵）を コミット** → 即 漏洩、 GitHub から **強制削除**

</div>

<div class="ng">

❌ **`.env` を コミット** → API キー 漏洩。 `.gitignore` で 必ず 除外

</div>

<div class="ng">

❌ **`history` 系（zsh_history など）を コミット** → 過去の コマンド が 全公開

</div>

<div class="ok">

⭕ `.gitignore` に **秘密情報パターンを 多めに** 入れる<br>
⭕ git-secrets / gitleaks で コミット前 チェック

</div>

---

<!-- _class: section -->

# 5. pre-commit ＝ コミット前 に 自動チェック

---

## pre-commit とは

Git が コミット する **直前** に 走る スクリプト群。
**lint / format / test / 秘密情報 検出** を 自動化。

<div class="code">
<span class="com"># .pre-commit-config.yaml</span>
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.5.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: detect-private-key

  - repo: https://github.com/pre-commit/mirrors-prettier
    rev: v3.1.0
    hooks:
      - id: prettier

  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.4.0
    hooks:
      - id: ruff
      - id: ruff-format
</div>

---

## 使い方

<div class="code">
<span class="com"># 1. インストール</span>
pip install pre-commit
pre-commit install

<span class="com"># 2. ファイル編集 → git add → git commit</span>
git add .
git commit -m <span class="str">"feat: hello"</span>

<span class="com"># 3. コミット前 に 自動で 走る</span>
<span class="com"># Trim Trailing Whitespace.................Passed</span>
<span class="com"># Fix End of Files.........................Failed - hook id: end-of-file-fixer</span>
<span class="com"># - hook id: end-of-file-fixer</span>
<span class="com"># - files were modified by this hook</span>

<span class="com"># 4. 自動修正された ファイルを add し直して commit</span>
</div>

---

<!-- _class: handson -->

## ハンズオン: pre-commit を 1個 入れる

<div class="step">

1. プロジェクトで `pip install pre-commit`
2. `.pre-commit-config.yaml` を 上の 例で 作成
3. `pre-commit install` → `.git/hooks/pre-commit` に 自動配置
4. わざと **末尾 空白** を 入れた コミット を 作って 試す
5. **自動修正** が 走り、 もう一度 commit する 必要が ある ことを 確認
6. README に `pre-commit install` を 書く（人 が 入った とき の ため）

</div>

---

<!-- _class: section -->

# 6. AI ペアプロ ＝ Copilot / Cursor の 使い方

---

## AI を 「ペアプロ相手」 として 使う

<div class="grid2">
<div class="card">

### NG な 使い方
- 質問 を 投げて **コピペ で 完了**
- 生成 された コードを **読まずに** マージ
- AI が 「動く」 と 言った から OK

</div>
<div class="card">

### OK な 使い方
- まず 自分で 書く → AI に **レビュー させる**
- AI の 提案 を 「なぜ こう か？」 で 問い直す
- AI の コードを **テスト で 検証**

</div>
</div>

---

## Copilot Chat の 有効な 質問例

<div class="ok">

⭕ 「この 関数の **テスト** を pytest で 3パターン 書いて」<br>
⭕ 「この **エラーメッセージ** から、 想定される 原因 3つ を 列挙」<br>
⭕ 「この コードを **より 型安全** に リファクタ」<br>
⭕ 「`useState` を `useReducer` に 置き換える メリット を 説明」

</div>

<div class="ng">

❌ 「TODO アプリ 作って」 ← 抽象すぎて 出る ものが 期待外れ<br>
❌ 「これ 動かない」 ← エラーメッセージ / 期待 / 実態 が ない

</div>

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

<div class="grid3">
<div class="card">

### 1️⃣ 環境は コード化
**Dockerfile / devcontainer / dotfiles** で 再現可能 に。

</div>
<div class="card">

### 2️⃣ 設定 を Git管理
dotfiles リポジトリで **PC 入れ替えても 同じ 環境**。 秘密情報 は 除外。

</div>
<div class="card">

### 3️⃣ pre-commit で 自動 ガード
lint / format / 秘密情報検出 を コミット前 に 走らせる。

</div>
</div>

<div class="tip">
💡 「環境構築 1日 → 30分」 が 体感 できれば 第1回 は ゴール！
</div>

---

## 次回予告

<div class="card">

### 第2回｜型のある世界
**TypeScript / Python型ヒント / Pydantic / Zod** で 動的型 の 自由さの 裏側 を 体験。 既存 JS を TS に 段階的に 移行 し、 「型を 設計に 使う」 を 体得 します。

</div>

<div class="tip">

📚 おすすめの宿題:
- 自分の dotfiles リポジトリ を GitHub に 作成
- 既存プロジェクト 1つを Docker 化（Dockerfile + docker-compose）
- pre-commit を 既存リポジトリ に 入れる

</div>

---

<!-- _class: title -->

# おつかれさまでした 👏

### 環境構築 マスター への 第一歩！<br>次回 「型のある 世界」 で お会いしましょう。
