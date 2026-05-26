---
marp: true
theme: default
paginate: true
size: 16:9
header: '中学生プログラミング塾 ／ 中級 第4回'
footer: 'テスト・Git・公開'
style: |
  :root {
    --c-primary: #4F46E5; --c-secondary: #F59E0B; --c-accent: #10B981;
    --c-warn: #EF4444; --c-dark: #0F172A; --c-light: #F8FAFC;
    --c-git: #F05033; --c-github: #181717;
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
  section.finale { background: linear-gradient(135deg,#4F46E5,#10B981,#F59E0B); color: white; text-align: center; }
  section.finale h1 { color: white; font-size: 60px; }
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
    font-size: 16px; line-height: 1.7; overflow-x: auto; }
  .code .com { color: #64748B; font-style: italic; }
  .code .cmd { color: #FCD34D; }
  .code .arg { color: #FDBA74; }
  .code .ok-out { color: #6EE7B7; }
  .code .err-out { color: #FCA5A5; }
  .cert {
    background: linear-gradient(135deg, #FFFBEB, #F3E8FF);
    border: 4px double var(--c-primary); border-radius: 12px;
    padding: 24px; text-align: center; box-shadow: 0 4px 16px rgba(79,70,229,.18);
  }
  .cert h2 { color: var(--c-primary); letter-spacing: 6px; font-size: 28px; }
  .cert .name { font-size: 26px; font-weight: bold; color: var(--c-accent);
    display: inline-block; padding: 6px 30px;
    border-top: 2px solid var(--c-primary); border-bottom: 2px solid var(--c-primary);
    margin: 10px 0; }
---

<!-- _class: title -->

# テスト・Git・公開

### 第4回 ／ 中学生プログラミング塾・中級 ／ 最終回

<br>

開発の <b>「最後の1マイル」</b> を 走り抜く！ 🐛 ✅ 🚀

---

## 前回の 復習

<div class="grid4">
<div class="card">

### 📋 設計
要件・画面・データ

</div>
<div class="card">

### 💻 フロント
HTML/CSS/JS

</div>
<div class="card">

### 🐍 バック
Flask API

</div>
<div class="card">

### 🚀 公開
← きょう

</div>
</div>

<br>

ローカルで 動く ものが できた！ あとは **届ける** だけ。

---

## きょうのゴール

- ✅ **DevTools** で バグの 原因を 切り分けられる
- ✅ **Git の 基本フロー**（init / add / commit / push）が 使える
- ✅ **.gitignore** で 入れていい / ダメを 判断できる
- ✅ **GitHub Pages / Render** など 公開サービスを 知る
- ✅ 中学生・中級 コース **修了** 🎓

---

<!-- _class: section -->

# 1. デバッグ の 心得

---

## 「動かない！」 の 3つの 原因

<div class="grid3">
<div class="card" style="border-top:5px solid var(--c-warn);text-align:center">
<div style="font-size:40px">🌐</div>
<h3>① 通信エラー</h3>
<p style="color:#475569;font-size:14px">CORS / 404 / 500</p>
</div>
<div class="card" style="border-top:5px solid var(--c-secondary);text-align:center">
<div style="font-size:40px">⚙️</div>
<h3>② JS エラー</h3>
<p style="color:#475569;font-size:14px">undefined / typo</p>
</div>
<div class="card" style="border-top:5px solid var(--c-primary);text-align:center">
<div style="font-size:40px">🎨</div>
<h3>③ 見た目だけ</h3>
<p style="color:#475569;font-size:14px">CSS / 要素抜け</p>
</div>
</div>

<br>

→ どれか を **切り分ける** のが デバッグの 第一歩。

---

## DevTools 主要タブ おさらい

| タブ | いつ 使う |
|---|---|
| 📜 **Console** | JS エラー / `console.log` / 任意コード 実行 |
| 🌐 **Network** | 通信エラー / リクエスト・レスポンス 全部 見れる |
| 🏗️ **Elements** | DOMの 現在の 構造 / CSS の 効きを 確認 |
| 💾 **Application** | localStorage / Cookie / IndexedDB |
| ⏱️ **Performance** | 動きが 重い 時に |

---

## 切り分けの 基本パターン

<div class="code">
<span class="com">// 1. console.log で 値を 確認</span>
<span class="cmd">console.log</span>(<span class="arg">'tasks:'</span>, tasks);

<span class="com">// 2. 型 を 確認</span>
<span class="cmd">console.log</span>(<span class="cmd">typeof</span> tasks, Array.<span class="cmd">isArray</span>(tasks));

<span class="com">// 3. Network タブで リクエストを 確認</span>
<span class="com">//    → 何が 送られた？ 何が 返ってきた？</span>
</div>

<br>

→ **「思い込み」を 捨てて、 事実を 1個 ずつ 確認**！

---

<!-- _class: section -->

# 2. Git 入門

---

## なぜ Git が 必要か

<div class="ng">

### Git なしの 世界
- ファイルが **「最終版_v2_本当の最終.html」** だらけ
- 友だちと **同時編集 が できない**
- 過去の 動いていた時点 に **戻せない**

</div>

<br>

<div class="ok">

### Git ありの 世界
- 全履歴が **時系列で 保存**
- **ブランチ** で 安全に 実験
- **元に 戻せる** 安心感

</div>

---

## Git の 3つの 場所（モデル）

<div class="code">
[作業ディレクトリ] ──<span class="cmd">git add</span>──▶ [ステージ] ──<span class="cmd">git commit</span>──▶ [リポジトリ]
   (Working)               (Index)                  (.git/)
                                                       │
                                                  <span class="cmd">git push</span>
                                                       ▼
                                                 [GitHub など]
</div>

<br>

3層 に 分かれている のが Git の 特徴！

---

## 基本フロー（4ステップ）

<div class="code">
<span class="com"># 1. リポジトリを 初期化（最初の 1回だけ）</span>
$ <span class="cmd">git init</span>

<span class="com"># 2. 変更したファイルを ステージに 載せる</span>
$ <span class="cmd">git add</span> <span class="arg">app.py</span>

<span class="com"># 3. ステージの 内容を 履歴に 残す</span>
$ <span class="cmd">git commit</span> <span class="arg">-m "POST /api/tasks を 追加"</span>

<span class="com"># 4. リモート（GitHub）に 送る</span>
$ <span class="cmd">git push</span>
</div>

---

## status と log で 確認

<div class="code">
<span class="com"># 現在の 状態を 見る</span>
$ <span class="cmd">git status</span>
<span class="ok-out">On branch main
Changes not staged for commit:
  modified:   app.py</span>

<span class="com"># 過去の コミットを 見る</span>
$ <span class="cmd">git log</span> <span class="arg">--oneline</span>
<span class="ok-out">a1b2c3d POST /api/tasks を 追加
e4f5g6h GET /api/tasks を 追加
9h8j7k6 初期コミット</span>
</div>

---

## コミットメッセージ の 書き方

<div class="grid2">
<div class="ng">

### ❌ 良くない
```
ちょっと修正
update
あああ
fix
```

</div>
<div class="ok">

### ✅ 良い
```
GET /api/tasks を追加
ボタンの色を青に変更
README に起動方法を記載
タイマーが0で止まらないバグを修正
```

</div>
</div>

<br>

→ **動詞 ＋ 何を どうしたか** が 鉄則！

---

## .gitignore ＝ 入れない リスト

<div class="card warn">

### ⚠️ 絶対に Gitに 入れないもの

- **APIキー** ／ パスワード ／ トークン
- **.env** ファイル（環境変数）
- **node_modules/** ／ **__pycache__/**
- **.DS_Store** ／ **Thumbs.db**

</div>

<div class="code">
<span class="com"># .gitignore</span>
.env
*.pyc
__pycache__/
node_modules/
.DS_Store
</div>

---

## 1度 入れた 秘密は 取り戻せない

<div class="big">😱</div>

「コミット → push したあとに APIキーが あった！」<br>
→ **履歴から 削除** は 大変／不完全（先にキーを 無効化）

<br>

→ コミット前 に `git status` で **必ず 確認**！

---

<!-- _class: section -->

# 3. GitHub で 共有

---

## GitHub ＝ Git の 倉庫サービス

<div class="card">

### コードを Web上に 置いて 共有

</div>

<br>

- **無料** で 公開／非公開 リポジトリが 作れる
- ⭐ や Issue で **コミュニティ**
- **Pull Request** で コードレビュー文化

> 13歳以上 ／ 学校・保護者と 相談 してから アカウント作成！

---

## リモート 連携

<div class="code">
<span class="com"># 最初に 1回 リモート登録</span>
$ <span class="cmd">git remote add</span> <span class="arg">origin https://github.com/you/repo.git</span>

<span class="com"># 履歴を 送る</span>
$ <span class="cmd">git push -u origin main</span>

<span class="com"># 仲間が 入れた 変更を 取る</span>
$ <span class="cmd">git pull</span>
</div>

---

<!-- _class: section -->

# 4. 公開 サービス

---

## 用途別 4選

| サービス | 用途 | 料金 |
|---|---|---|
| 🌐 **GitHub Pages** | 静的サイト（HTML/CSS/JS のみ） | 無料 |
| 🚀 **Render** | Flask など サーバー | 無料 枠あり |
| ▲ **Vercel** | Next.js / 静的サイト | 無料 枠あり |
| 🚂 **Railway** | サーバー / DB | 無料 枠あり |

<br>

中級では **GitHub Pages**（フロント）＋ **Render**（Flask）が おすすめ！

---

## デプロイの 流れ（共通）

<div class="card">

### 1. **GitHub に push**
### 2. サービス が **自動で ビルド**
### 3. URL が 発行される
### 4. ブラウザで アクセス

</div>

<br>

→ コードを **更新** すれば、 自動で **再デプロイ**！

---

## 環境変数 ＝ 秘密の 入れ物

<div class="code">
<span class="com"># 開発時：.env（gitに 入れない！）</span>
API_KEY=<span class="arg">abc123...</span>
DATABASE_URL=<span class="arg">postgres://...</span>

<span class="com"># 本番時：サービスの 管理画面で 設定</span>
<span class="com"># コードからは os.environ['API_KEY'] で 読む</span>
</div>

<br>

→ Render / Vercel など、 ぜんぶ **環境変数 機能** あり。

---

## 公開する 前の チェック

<div class="card warn">

### ⚠️ 必ず 確認

1. **.gitignore** に `.env` を 入れた？
2. **本名・住所・学校名** を サンプルデータから 消した？
3. **CORS** で 自分のドメインのみ 許可した？
4. **保護者・先生** に 公開のOKを もらった？

</div>

---

<!-- _class: section -->

# 5. ハンズオン
## テスト → commit → 公開

---

<!-- _class: handson -->

## やることリスト（45分）

| ステップ | やること | 時間 |
|---|---|---|
| ① | TODOアプリの 動作確認（4機能 全部） | 5分 |
| ② | `git init` ＋ `.gitignore` | 5分 |
| ③ | `git add` + `git commit` | 10分 |
| ④ | GitHub リポジトリ 作成 + push | 10分 |
| ⑤ | GitHub Pages or Render で 公開 | 15分 |

---

<!-- _class: handson -->

## 詰まったら こうする

<div class="card">

### `git push` で 認証エラー
→ **Personal Access Token** が 必要（GitHub設定で 作成）

</div>

<div class="card">

### **エラーが 出すぎ て 混乱**
→ DevTools の Network → 一番上の **赤いリクエスト** から たどる

</div>

<div class="card">

### **公開 後 動かない**
→ Render: ログを 確認 / Pages: パスが 絶対パスに なってる？

</div>

---

<!-- _class: section -->

# 6. コース全体 ふり返り

---

## 中級 4回で 身についた こと

<div class="grid2">
<div class="card">

### 🧠 設計力
- 要件 → 画面 → データ
- MVP で 範囲を しぼる

</div>
<div class="card">

### 💻 実装力
- HTML/CSS/JS で フロント
- Flask で REST API
- fetch で 接続

</div>
</div>

<div class="grid2" style="margin-top:14px">
<div class="card">

### 🛠️ デバッグ力
- DevTools 4タブ
- バグ報告 メモ
- 切り分け 思考

</div>
<div class="card">

### 🚀 リリース力
- Git で バージョン管理
- GitHub で 共有
- 無料サービスで 公開

</div>
</div>

---

## つぎに やりたい こと（おすすめ）

<div class="grid3">
<div class="card">

### 🏗️ 上級コースへ
- **DB**（PostgreSQL）
- **認証**（ログイン）
- **本格的な フレームワーク**

</div>
<div class="card">

### 🎯 オリジナル作品
- **自分が 困ってる** 問題を 解く
- 1か月 1作品 を 目標に

</div>
<div class="card">

### 👥 OSS / 仲間
- GitHub で **Issue** を 立てる
- **Pull Request** を 出す

</div>
</div>

---

<!-- _class: section -->

# 7. 修了！

---

## 修了証

<div class="cert">

# 🏆 修　了　証

### 上記の者は<br><b>中学生プログラミング塾・中級コース</b> を<br>修了したことを 証します

<br>

「設計 → 実装 → テスト → 公開」<br>
の 一周を やり遂げた

</div>

---

## 最後に — 講師から

<div class="card">

### 「**完璧 より、 公開**」

</div>

<br>

90点を 1年 温めるより、**70点を 来週 公開** したほうが 学べる。<br>
バグも 失敗も 全部、**作りつづける 燃料**。

<br>

君が 作った コードを、**世界 に 出して** いこう！

---

<!-- _class: finale -->

# おめでとう 🎉🎓✨

### 君は もう「Webサービスを 作れる人」

<br>

設計から 公開まで、 自分の力で。<br>
次の作品が、 楽しみだ ！
