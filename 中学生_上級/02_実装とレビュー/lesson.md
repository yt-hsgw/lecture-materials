---
marp: true
theme: default
paginate: true
size: 16:9
header: '中学生プログラミング塾 ／ 上級 第2回'
footer: '実装とレビュー'
style: |
  :root {
    --c-primary: #6D28D9; --c-secondary: #06B6D4; --c-accent: #10B981;
    --c-warn: #DC2626; --c-dark: #0F172A; --c-light: #F8FAFC;
  }
  section { background: var(--c-light); color: var(--c-dark);
    font-family: 'Inter','Hiragino Sans','Yu Gothic',sans-serif; padding: 56px; }
  section h1 { color: var(--c-primary); font-size: 52px; border-bottom: none; letter-spacing:-.5px; }
  section h2 { color: var(--c-primary); font-size: 36px; letter-spacing:-.3px; }
  section h3 { color: var(--c-accent); font-size: 24px; }
  section.title { background: linear-gradient(135deg,#6D28D9,#0E7490,#0F172A); color: white; text-align: center; }
  section.title h1 { color: white; font-size: 64px; }
  section.section { background: var(--c-dark); color: white; text-align: center; }
  section.section h1 { color: var(--c-secondary); font-size: 54px; }
  section.handson { background: #ECFDF5; }
  section.handson h1 { color: var(--c-accent); }
  .card { background: white; border-radius: 12px; padding: 18px 22px; margin: 10px 0;
    box-shadow: 0 2px 8px rgba(15,23,42,.08); border:1px solid rgba(15,23,42,.06); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
  .big { font-size: 60px; font-weight: bold; text-align: center; letter-spacing: -1px; }
  .ok { background: #ECFDF5; border-left: 5px solid var(--c-accent);
    border-radius: 8px; padding: 12px 16px; }
  .ng { background: #FEF2F2; border-left: 5px solid var(--c-warn);
    border-radius: 8px; padding: 12px 16px; }
  .tip { background: #ECFEFF; border-left: 5px solid var(--c-secondary);
    border-radius: 8px; padding: 12px 16px; }
  .code { background: #0F172A; color: #E2E8F0; border-radius: 8px;
    padding: 14px 18px; font-family: 'JetBrains Mono','SF Mono','Menlo',monospace;
    font-size: 17px; line-height: 1.7; overflow-x: auto; }
  .code .key { color: #C4B5FD; }
  .code .str { color: #FDBA74; }
  .code .num { color: #6EE7B7; }
  .code .com { color: #64748B; font-style: italic; }
  .code .fn { color: #67E8F9; }
  .code .branch { color: #FCD34D; }
  .code .add { color: #6EE7B7; }
  .code .del { color: #FCA5A5; }
  .branch { display: inline-block; padding: 3px 12px; border-radius: 6px;
    font-family: 'JetBrains Mono','SF Mono',monospace; font-weight: bold;
    background: #FEF3C7; color: #92400E; font-size: 16px; }
  .branch.main { background: #DDD6FE; color: #5B21B6; }
  .branch.feat { background: #BBF7D0; color: #14532D; }
  .branch.fix { background: #FECACA; color: #991B1B; }
---

<!-- _class: title -->

# 実装と レビュー

### 第2回 ／ 中学生プログラミング塾・上級

<br>

きょうは **Git ブランチ → PR → レビュー → マージ**！ 🌿🔍

---

## 前回の 復習

<div class="grid3">
<div class="card">

### 📝 ストーリー
As a / I want / So that

</div>
<div class="card">

### 🗄️ DB設計
テーブル + 主キー + 外部キー

</div>
<div class="card">

### 🌐 API設計
REST + CRUD

</div>
</div>

<br>

設計 は できた！ きょうから **チームで 実装**。

---

## きょうのゴール

- ✅ **Git ブランチ** を 切って 安全に 開発
- ✅ **プルリクエスト（PR）** を 出せる
- ✅ **コードレビュー** の 観点を 知る
- ✅ **認証**（パスワードハッシュ）の しくみ
- ✅ **入力検証**（XSS / SQLi 対策）

---

<!-- _class: section -->

# 1. Git ブランチ戦略

---

## なぜ ブランチ？

<div class="big">🌿</div>

<br>

中級まで：`main` ブランチ だけ で 直接 編集<br>
上級：**機能ごとに ブランチ** を 切る！

<br>

→ <b>「壊れた コード が 本番 に 流れない」</b> 仕組み。

---

## ブランチ の 種類

<div class="grid3">
<div class="card" style="text-align:center;border-top:5px solid var(--c-primary)">

### <span class="branch main">main</span>
本番用<br>
<small>常に 動く 状態</small>

</div>
<div class="card" style="text-align:center;border-top:5px solid var(--c-secondary)">

### <span class="branch">develop</span>
開発統合<br>
<small>次回 リリース候補</small>

</div>
<div class="card" style="text-align:center;border-top:5px solid var(--c-accent)">

### <span class="branch feat">feature/xxx</span>
機能 単位<br>
<small>1人 / 1機能</small>

</div>
</div>

<br>

→ 中規模 開発 の <b>定番</b> パターン（GitHub Flow）。

---

## ブランチ 命名規則

<div class="card">

```
feature/add-login        # ← 新機能
feature/review-list      # ← 新機能
bugfix/login-error       # ← バグ修正
hotfix/security-patch    # ← 緊急修正
chore/update-deps        # ← 雑用（依存更新 など）
```

</div>

<br>

→ **頭の prefix + 動詞-名詞** が ベスト プラクティス！

---

## 基本 フロー

<div class="code">
<span class="com"># 1. main から ブランチを 切る</span>
$ <span class="key">git checkout</span> main
$ <span class="key">git pull</span>
$ <span class="key">git checkout</span> -b <span class="branch">feature/add-login</span>

<span class="com"># 2. コードを書いて コミット</span>
$ <span class="key">git add</span> .
$ <span class="key">git commit</span> -m <span class="str">"feat: add login form"</span>

<span class="com"># 3. リモートに push</span>
$ <span class="key">git push</span> origin <span class="branch">feature/add-login</span>

<span class="com"># 4. GitHub で PR を 作成！</span>
</div>

---

## コミットメッセージ ＝ Conventional Commits

<div class="card">

```
feat: ユーザー ログイン 機能を 追加
fix: タイマーが 0で止まらない バグを 修正
docs: README に 起動手順を追加
refactor: render関数を 簡潔に
test: ログインAPIの テストを追加
chore: 依存パッケージを 更新
```

</div>

<br>

→ **`type: 何をした`** の 形！ <b>未来の自分</b> と <b>同僚</b> に 親切。

---

<!-- _class: section -->

# 2. Pull Request<br>(PR)

---

## PR ＝ 「マージ前 の レビュー会」

<div class="big">📥 → 🔍 → ✅</div>

<br>

1. ブランチで 機能を 作る
2. main に **マージしたい** と PR
3. 仲間が **レビュー**
4. OK で マージ！

---

## PR の 説明 テンプレート

<div class="card">

```
## やったこと
- ユーザー ログイン機能を 追加

## なぜ
- ユーザーストーリー #12 の対応

## 変更点
- POST /api/auth/login 追加
- パスワードを bcryptで ハッシュ化

## テスト
- ローカルで ログイン成功・失敗 ともに確認
- ユニットテスト 3件 追加

## レビュー観点
- パスワード保存 周りの安全性
```

</div>

---

## レビュアー の 指定

<div class="card">

### チーム メンバー の 名前を 入れる

</div>

<br>

- GitHub の <b>「Reviewers」</b> セクションで 選ぶ
- 1〜2人 が 適切
- **PMやリード** が 必須に なる ことも

<br>

→ レビュー されない PR は <b>マージしない</b>！

---

## マージ の 種類

<div class="grid3">
<div class="card">

### 🔵 Merge commit
履歴 そのまま<br>
+ マージ コミット

</div>
<div class="card">

### 🟣 Squash
複数 コミットを<br>**1つに圧縮**

</div>
<div class="card">

### 🟢 Rebase
履歴を <b>一直線</b><br>に つなげる

</div>
</div>

<br>

→ チームで <b>事前 に 決めて</b> おく！ Squash が おすすめ。

---

<!-- _class: section -->

# 3. コードレビュー

---

## レビューの 観点 5つ

<div class="card">

### ✅ 1. 動く？（テスト 通る）
### ✅ 2. 名前 が 適切？（変数 / 関数 / ファイル）
### ✅ 3. 重複 してない？（DRY）
### ✅ 4. テスト ある？
### ✅ 5. セキュリティ OK？

</div>

<br>

→ <b>「動く だけ」 では 不十分</b>！

---

## 良い レビューの 書き方

<div class="ng">

### ❌ ダメな コメント
- 「これ ダメ」
- 「センス ない」
- 「読みにくい」

</div>

<div class="ok" style="margin-top:14px">

### ✅ 良い コメント
- 「**この 変数名 `a` だと 何の値か わかりにくいです。`userId` は どう？**」
- 「**この while 無限ループ にならないか 確認しました？**」
- 「**ナイス！ ここ 短くて 読みやすい**」

</div>

---

## レビュー の 強弱

<div class="card">

### Conventional Comments（プレフィクス を つける）

</div>

<br>

- **`nit:`** ＝ 細かい指摘（無視 OK）
- **`question:`** ＝ 質問
- **`suggestion:`** ＝ 提案
- **`issue:`** ＝ 要対応（マージ前 に 直して）

<br>

→ レビュアー の <b>意図</b> が 明確になる！

---

## AI レビュー も 併用

<div class="card">

### GitHub Copilot / Claude / GPT に PR diff を 渡す

</div>

<br>

- 機械的 チェック（命名 / 抜け漏れ / セキュリティ）に 強い
- でも <b>文脈 や 設計</b> は 人間 のほうが 上
- **「AI が OK = 安心」ではない**！ 人間が 最終判断

---

<!-- _class: section -->

# 4. 認証（Auth）

---

## ユーザー 登録 ＝ 危険な処理

<div class="ng">

### ❌ パスワードを そのまま 保存 する → 史上 最悪

- DB が 漏れたら 全員の パスワード 露出
- ユーザーは <b>他のサービスで 使い回している</b> ことが 多い
- **法的責任** も 発生

</div>

---

## 解決：ハッシュ化 (bcrypt)

<div class="code">
<span class="key">from</span> werkzeug.security <span class="key">import</span> generate_password_hash, check_password_hash

<span class="com"># 登録時：パスワードを ハッシュに 変換して 保存</span>
hashed = <span class="fn">generate_password_hash</span>(<span class="str">"mypassword"</span>)
<span class="com"># → "scrypt:32768:8:1$abc...$xyz..." のような 長い文字列</span>

<span class="com"># ログイン時：入力と ハッシュを 比較</span>
<span class="key">if</span> <span class="fn">check_password_hash</span>(hashed, user_input):
    <span class="fn">login_user</span>(user)
</div>

→ ハッシュは **元に 戻せない**！ DBが 漏れても 安全。

---

## セッション or JWT？

<div class="grid2">
<div class="card">

### 🍪 セッション
- サーバー側 に 状態
- Cookie で 連携
- ログアウト 簡単
- **小規模** 向き

</div>
<div class="card">

### 🔑 JWT（JSON Web Token）
- トークン に 全情報
- サーバー 状態 なし
- 複数サーバー 対応
- **大規模 / API** 向き

</div>
</div>

<br>

→ 中学生上級 は **Flask-Login（セッション）** で 始めるのが ラク！

---

## 認証 必須 ルート

<div class="code">
<span class="key">from</span> flask_login <span class="key">import</span> login_required, current_user

<span class="key">@app</span>.<span class="fn">route</span>(<span class="str">'/api/reviews'</span>, methods=[<span class="str">'POST'</span>])
<span class="key">@login_required</span>  <span class="com"># ← この デコレータ！</span>
<span class="key">def</span> <span class="fn">create_review</span>():
    data = request.<span class="fn">get_json</span>()
    review = Review(
        user_id=current_user.id,  <span class="com"># 認証済み ユーザーIDが 入る</span>
        ...
    )
</div>

---

<!-- _class: section -->

# 5. 入力検証<br>セキュリティ

---

## OWASP Top 10 の 中で 重要 3つ

<div class="grid3">
<div class="card" style="border-top:5px solid var(--c-warn);text-align:center">

### 💉 SQL<br>インジェクション
DBクエリ に<br>悪意ある SQL

</div>
<div class="card" style="border-top:5px solid var(--c-warn);text-align:center">

### 🪤 XSS
画面に<br>悪意ある<br>JavaScript

</div>
<div class="card" style="border-top:5px solid var(--c-warn);text-align:center">

### 🔓 認証バイパス
パスワードなし<br>で ログイン

</div>
</div>

---

## SQL インジェクション の 例

<div class="ng">

### ❌ 危険な コード
```python
query = f"SELECT * FROM users WHERE name='{user_input}'"
```

ユーザー入力：`' OR '1'='1`<br>
→ `SELECT * FROM users WHERE name='' OR '1'='1'` ＝ <b>全ユーザー 取得</b>！

</div>

<div class="ok" style="margin-top:14px">

### ✅ 安全な コード
```python
query = "SELECT * FROM users WHERE name = ?"
cursor.execute(query, (user_input,))  # ← パラメータで 渡す
```

</div>

---

## XSS の 例

<div class="ng">

### ❌ 危険な コード
```javascript
element.innerHTML = userComment;
```

ユーザー入力：`<script>alert('hacked')</script>`<br>
→ ブラウザで <b>JS が 実行</b> されてしまう！

</div>

<div class="ok" style="margin-top:14px">

### ✅ 安全な コード
```javascript
element.textContent = userComment;  // ← テキストとして扱う
```

</div>

---

## 入力検証 の 二段構え

<div class="card">

### クライアント側 ＋ サーバー側 の <b>両方</b> で 検証

</div>

<br>

- **クライアント**：UX 向上（即座にフィードバック）
- **サーバー**：<b>本当の セキュリティ</b>（クライアントは 信用しない）

<br>

→ <b>サーバー側だけ で OK</b> は 危険！ クライアント 抜けると 全部 抜ける。

---

## 秘密 情報 は コード に 書かない

<div class="ng">

### ❌ NG
```python
API_KEY = "sk-abc123..."  # コードに 直書き
```

</div>

<div class="ok" style="margin-top:14px">

### ✅ OK
```python
import os
API_KEY = os.environ['API_KEY']  # 環境変数 から
```

</div>

→ `.env` ファイル ＋ `.gitignore` で <b>絶対 git に 入れない</b>！

---

<!-- _class: section -->

# 6. ハンズオン
## ペアでブランチ→PR

---

<!-- _class: handson -->

## やることリスト（50分）

| ステップ | やる事 | 時間 |
|---|---|---|
| ① | チームで feature ブランチ 命名規則 を 決める | 5分 |
| ② | ペア で 1機能 を 担当 | 5分 |
| ③ | <b>ブランチ作成 → 実装 → コミット</b> | 20分 |
| ④ | <b>PR 作成 → 説明を 書く</b> | 5分 |
| ⑤ | 別ペア と <b>レビュー交換</b> | 10分 |
| ⑥ | 修正対応 → <b>マージ</b> | 5分 |

---

<!-- _class: handson -->

## ペアプロ × レビュー の 進め方

<div class="card">

### 1. ペアA は <b>ペアB</b> の PR を レビュー
### 2. ペアB は <b>ペアA</b> の PR を レビュー

</div>

<br>

- レビューは <b>2人で 議論</b> しながら
- 修正は <b>元の ペア</b> が 対応
- <b>「ナイス」</b> を 必ず 1つ 言う！

---

<!-- _class: handson -->

## 詰まった とき

<div class="card">

### ❓ コンフリクト 発生
→ <b>main を rebase</b>（または merge）して 解消

</div>

<div class="card">

### ❓ レビュー で 揉めた
→ <b>「3往復で 結論」</b> ルール。 それ以上は ミーティング

</div>

<div class="card">

### ❓ AI レビュー の 結果が 間違ってる
→ <b>「AI ≠ 真実」</b>。 人間の レビュアー が 最終決定

</div>

---

<!-- _class: section -->

# 7. まとめ

---

## 今日 おぼえたこと

1. **Git ブランチ** ＝ main を 守る
2. **PR ＋ レビュー** ＝ チーム品質
3. **コミットメッセージ** ＝ `type: 何をした`
4. **パスワード** ＝ ぜったい ハッシュ化
5. **入力検証** ＝ クライアント＋サーバー両方
6. **秘密情報** ＝ 環境変数

---

## 次回までの 宿題

<div class="card">

### 🌿 PR + 機能 1〜2個

1. 第1回 設計の **機能 1つ** を 実装
2. 別ペア に <b>PR レビュー</b> 依頼
3. レビューを 受けて <b>修正 → マージ</b>
4. （余裕あれば）<b>テスト を 1つ 書く</b>

</div>

---

## 次回予告

<div class="big">🧪 🚀</div>

# 第3回｜テストと リリース

**pytest / Jest** で ユニットテスト！<br>
**Render / Vercel** で デプロイ！<br>
公開 できる 状態 まで 持っていく。

---

<!-- _class: title -->

# レビュー おつかれさま 🔍✨

### 「チームの 品質を 守る」 第一歩

<br>

良い レビュー 文化 を 育てた チームは<br>
<b>必ず 成長</b> します！
