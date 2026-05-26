---
marp: true
theme: default
paginate: true
size: 16:9
header: '中学生プログラミング塾 ／ 上級 第1回'
footer: '要件定義と設計'
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
  .grid4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 10px; }
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
  .role { display:inline-block; padding:3px 12px; border-radius:6px;
    color:white; font-size:14px; font-weight:bold; }
  .role.pm { background: var(--c-primary); }
  .role.fe { background: var(--c-secondary); color: var(--c-dark); }
  .role.be { background: var(--c-accent); }
  .role.qa { background: var(--c-warn); }
  .story { background: white; border-left: 5px solid var(--c-primary);
    border-radius: 8px; padding: 16px 20px; font-size: 22px; line-height: 1.8;
    box-shadow: 0 2px 6px rgba(15,23,42,.06); }
  .story b { color: var(--c-primary); }
---

<!-- _class: title -->

# 要件定義 と 設計

### 第1回 ／ 中学生プログラミング塾・上級

<br>

きょうから **チーム開発** スタート！ 🏗️📐

---

## 上級コース へ ようこそ

<div class="grid2">
<div class="card">

### 中級まで
- <b>個人開発</b>
- 動けば OK
- localStorage で 永続化
- 1人で 公開

</div>
<div class="card" style="border-left:6px solid var(--c-primary)">

### 上級では
- <b>チーム開発</b>
- <b>テスト・運用</b>
- DB ＋ 認証
- レビュー文化

</div>
</div>

<br>

中級は「個人」、 上級は「**チーム ＋ 運用**」。

---

## 全4回 スケジュール

| 回 | テーマ | やる事 |
|---|---|---|
| 1 | **要件定義と 設計** | ユーザーストーリー / DB / API ← きょう |
| 2 | 実装と レビュー | DB / 認証 / PR フロー |
| 3 | テスト と リリース | pytest / Jest / デプロイ |
| 4 | 運用・改善・マネタイズ概論 | ログ / 法務 / 改善計画 |

---

## きょうのゴール

- ✅ **チーム開発** の 役割分担 を 知る
- ✅ **ユーザーストーリー** が 書ける
- ✅ **DBスキーマ**（テーブル / 主キー / 外部キー）が 設計できる
- ✅ **REST API** を リソース志向で 設計できる
- ✅ **企画書 1枚** が チームで 仕上がる

---

<!-- _class: section -->

# 1. チーム開発って？

---

## 「1人 で 全部」 → 「4人 で 分担」

<div class="big">👤 → 👥👥</div>

<br>

個人開発 と 違う 5つの 課題：
1. **同じファイル を 同時に 編集** すると コンフリクト
2. **誰が 何やってる か わからない**
3. **設計が ばらける** → 動かない
4. **レビュー** が 必要に
5. **ドキュメント** が 重要に

---

## チームの 4つの 役割

<div class="grid4">
<div class="card" style="text-align:center;border-top:5px solid var(--c-primary)">

### <span class="role pm">PM</span>
プロダクト<br>マネージャー<br>
<small>要件 / 進捗 / 優先順位</small>

</div>
<div class="card" style="text-align:center;border-top:5px solid var(--c-secondary)">

### <span class="role fe">FE</span>
フロントエンド<br>
<small>HTML / CSS / JS</small>

</div>
<div class="card" style="text-align:center;border-top:5px solid var(--c-accent)">

### <span class="role be">BE</span>
バックエンド<br>
<small>API / DB / 認証</small>

</div>
<div class="card" style="text-align:center;border-top:5px solid var(--c-warn)">

### <span class="role qa">QA</span>
テスト / 品質<br>
<small>動作確認 / バグ報告</small>

</div>
</div>

<br>

→ 教室では <b>1人 2役 OK</b>！ ペアプロ も 推奨。

---

## チーム開発の フロー（全体像）

<div class="code">
<span class="com"># 1. 設計 (今日)</span>
チーム → 要件定義 → 画面・DB・API 設計

<span class="com"># 2. 実装 (第2回)</span>
個人 → ブランチ → コード → プルリクエスト → レビュー

<span class="com"># 3. テスト・公開 (第3回)</span>
チーム → テスト → デプロイ → 公開！

<span class="com"># 4. 運用 (第4回)</span>
チーム → ユーザーの声 → 改善 → 再デプロイ
</div>

---

<!-- _class: section -->

# 2. 要件定義<br>ユーザーストーリー

---

## 「ユーザーストーリー」 ＝ 3行で 表す 機能

<div class="story">
<b>As a</b> 〔だれ〕 として、<br>
<b>I want</b> 〔何が したい〕 ので、<br>
<b>So that</b> 〔こんな ためになる〕。
</div>

<br>

→ アジャイル開発の <b>業界標準</b>！ シリコンバレー も これを 使う。

---

## ユーザーストーリーの 例

<div class="story">
<b>As a</b> 中学生 として、<br>
<b>I want</b> 読んだ本の 感想を 記録 したい ので、<br>
<b>So that</b> 後で 振り返って 次の本を 選ぶ ヒントに できる。
</div>

<br>

このストーリーから **必要な機能** が 見えてくる：
- 感想 入力 画面（FE）
- 保存 する API（BE）
- 感想 一覧 表示（FE）
- 検索 機能（FE + BE）

---

## 受け入れ基準（Acceptance Criteria）

<div class="card">

### ストーリー に 「完成の 定義」 を つける

</div>

<br>

例：「感想記録 アプリ」 の 完成条件：
- ✅ タイトル・本文 が 入力できる
- ✅ <b>140文字以下</b> の 制限
- ✅ 投稿 後 一覧に 即 反映
- ✅ ログイン した ユーザーのみ 投稿可能

<br>

→ <b>テスト の 基準 にも なる</b>！

---

## 優先順位（MoSCoW法）

<div class="grid4">
<div class="card" style="text-align:center;border-top:5px solid var(--c-warn)">

### Must
**絶対** 必要

</div>
<div class="card" style="text-align:center;border-top:5px solid var(--c-secondary)">

### Should
**できれば** 欲しい

</div>
<div class="card" style="text-align:center;border-top:5px solid var(--c-accent)">

### Could
**あったら** 良い

</div>
<div class="card" style="text-align:center;border-top:5px solid #94A3B8">

### Won't
**今回は** やらない

</div>
</div>

<br>

→ <b>「Won't」 を 決めるのが プロ</b>！

---

<!-- _class: section -->

# 3. DB 設計

---

## データベース（DB） とは

<div class="big">🗄️</div>

<br>

- 中級の **localStorage** は ブラウザ１つ 限定
- **DB** ＝ サーバー の 中で **構造化** して データを 保存
- 何百万件 でも 高速 検索

→ **SQLite / PostgreSQL / MySQL** など 種類が ある。

---

## テーブル ＝ Excel の シート

<div class="code">
<span class="com">-- books テーブル</span>
+----+-------------------+----------+------------+
| <span class="key">id</span> | <span class="key">title</span>             | <span class="key">author</span>   | <span class="key">created_at</span> |
+----+-------------------+----------+------------+
| <span class="num">1</span>  | <span class="str">"星の王子さま"</span>     | <span class="str">"サン=テグジュペリ"</span> | <span class="str">"2026-04-15"</span> |
| <span class="num">2</span>  | <span class="str">"こころ"</span>            | <span class="str">"夏目漱石"</span>  | <span class="str">"2026-04-20"</span> |
+----+-------------------+----------+------------+
</div>

<br>

- 1行 ＝ <b>1レコード</b>
- 1列 ＝ <b>1カラム</b>

---

## 主キー（PRIMARY KEY）＝ ID

<div class="card">

### 「世界で 唯一」 の ID

</div>

<br>

- **整数で 自動採番** が 一般的（1, 2, 3…）
- **UUID** という 文字列も
- **絶対 重複しない** → データを 一意に 特定

<br>

→ 中級で <b>JSON の `id`</b> を 設計した、 あれが <b>主キー</b>！

---

## 外部キー（FOREIGN KEY）＝ 参照

<div class="code">
<span class="com">-- users テーブル</span>
+----+-----------+
| <span class="key">id</span> | <span class="key">name</span>      |
+----+-----------+
| <span class="num">1</span>  | <span class="str">"yuta"</span>    |
| <span class="num">2</span>  | <span class="str">"hana"</span>    |
+----+-----------+

<span class="com">-- reviews テーブル</span>
+----+----------+---------+-----------+
| <span class="key">id</span> | <span class="key">book_id</span> | <span class="key">user_id</span> | <span class="key">comment</span>   |
+----+----------+---------+-----------+
| <span class="num">1</span>  | <span class="num">1</span>        | <span class="num">1</span>       | <span class="str">"名作"</span>     |
| <span class="num">2</span>  | <span class="num">1</span>        | <span class="num">2</span>       | <span class="str">"感動した"</span> |
+----+----------+---------+-----------+
</div>

`book_id`、 `user_id` が <b>外部キー</b>！

---

## ER図（Entity-Relationship Diagram）

<div class="code">
   <span class="key">users</span>          <span class="key">reviews</span>          <span class="key">books</span>
  ┌──────┐      ┌──────────┐      ┌──────┐
  │ id   │◀──┐  │ id       │  ┌──▶│ id   │
  │ name │   └──│ user_id  │  │   │ title│
  └──────┘      │ book_id  │──┘   │ author│
                │ comment  │      └──────┘
                └──────────┘
</div>

<br>

→ 「<b>1 ユーザー</b> は <b>複数 reviews</b> を 持つ」（1対多）

---

## カラムの 型

<div class="grid2">
<div class="card">

### 主な型
- **INTEGER** ／ **BIGINT**
- **VARCHAR(255)** ／ **TEXT**
- **DATE** ／ **TIMESTAMP**
- **BOOLEAN**
- **DECIMAL(10, 2)** ← お金用

</div>
<div class="card">

### 必須属性
- **PRIMARY KEY**
- **NOT NULL**（空にできない）
- **UNIQUE**（重複禁止）
- **DEFAULT** 値
- **FOREIGN KEY**

</div>
</div>

---

## CREATE TABLE 文 例

<div class="code">
<span class="key">CREATE TABLE</span> reviews (
  <span class="fn">id</span>         <span class="key">INTEGER PRIMARY KEY AUTOINCREMENT</span>,
  <span class="fn">user_id</span>    <span class="key">INTEGER NOT NULL REFERENCES</span> users(id),
  <span class="fn">book_id</span>    <span class="key">INTEGER NOT NULL REFERENCES</span> books(id),
  <span class="fn">comment</span>    <span class="key">TEXT NOT NULL</span>,
  <span class="fn">rating</span>     <span class="key">INTEGER</span>,
  <span class="fn">created_at</span> <span class="key">TIMESTAMP DEFAULT CURRENT_TIMESTAMP</span>
);
</div>

---

<!-- _class: section -->

# 4. API 設計<br>RESTful

---

## REST API ＝ 名詞 + 動詞 のセット

<div class="card">

### URL ＝ <b>名詞</b>（リソース）／ HTTPメソッド ＝ <b>動詞</b>

</div>

<br>

中級で 学んだ TODO の 例：
- <b>GET</b> `/api/tasks` → 一覧 取得
- <b>POST</b> `/api/tasks` → 新規追加
- <b>PUT</b> `/api/tasks/1` → 更新
- <b>DELETE</b> `/api/tasks/1` → 削除

---

## reviews リソースの API 設計

<div class="code">
<span class="com"># 一覧取得</span>
<span class="key">GET</span>    /api/books/<span class="num">1</span>/reviews

<span class="com"># 新規作成（認証必要）</span>
<span class="key">POST</span>   /api/books/<span class="num">1</span>/reviews
  body: { <span class="str">"comment"</span>: <span class="str">"良い本！"</span>, <span class="str">"rating"</span>: <span class="num">5</span> }

<span class="com"># 更新（自分の もののみ）</span>
<span class="key">PUT</span>    /api/reviews/<span class="num">42</span>

<span class="com"># 削除（自分の もののみ）</span>
<span class="key">DELETE</span> /api/reviews/<span class="num">42</span>
</div>

→ <b>ネストした URL</b> で 「あの本の レビュー」 を 表現！

---

## API 設計の チェックリスト

<div class="card">

### 5項目 を 全 API で 揃える

</div>

<br>

1. **URL** ＝ 名詞・複数形（`/users` not `/user`）
2. **メソッド** ＝ GET/POST/PUT/DELETE を 適切に
3. **ステータスコード** ＝ 200/201/400/404/500
4. **リクエスト body** ＝ JSON
5. **レスポンス** ＝ 一貫した 形

---

<!-- _class: section -->

# 5. ハンズオン
## チームで 企画書

---

<!-- _class: handson -->

## やることリスト（50分）

| ステップ | やる事 | 時間 |
|---|---|---|
| ① | チーム 結成 ＋ 役割分担 | 5分 |
| ② | 題材 を 決める（感想記録 / 行事カレンダー など） | 10分 |
| ③ | **ユーザーストーリー** を 3〜5本 | 15分 |
| ④ | **DB スキーマ**（2〜4テーブル） | 10分 |
| ⑤ | **API エンドポイント** 一覧 | 10分 |

---

<!-- _class: handson -->

## ペアプロ の 基本

<div class="card">

### <b>ドライバー（書く人）</b> + <b>ナビゲーター（見る人）</b>

</div>

<br>

- 15分で 交代
- ナビゲーターが <b>大事な 観点</b> を チェック
- 1人で 抱え込まない → <b>2人で 進む</b>

---

<!-- _class: handson -->

## 詰まったら

<div class="card">

### ❓ DB の 「適切な テーブル分け」 が わからない
→ <b>「もの」 単位 で 分ける</b>（ユーザー / 本 / レビュー…）

</div>

<div class="card">

### ❓ ユーザーストーリーが 思いつかない
→ <b>「自分が 困った 経験」</b> から

</div>

<div class="card">

### ❓ チームで 意見が 割れる
→ <b>3分 議論 → 多数決 or PM が 決定</b>

</div>

---

<!-- _class: section -->

# 6. まとめ

---

## 今日 おぼえたこと

1. チーム開発 ＝ **4つの 役割**（PM / FE / BE / QA）
2. **ユーザーストーリー** で 要件 を 表現
3. **MoSCoW** で 優先順位
4. **DB** ＝ テーブル ＋ 主キー ＋ 外部キー
5. **REST API** ＝ 名詞のURL ＋ 動詞のメソッド
6. **「Won't」を 決める** のが プロ！

---

## 次回までの 宿題

<div class="card">

### 📝 チームで 仕上げる

1. 今日の **企画書** を 清書
2. **GitHub リポジトリ** を 作成（チーム名）
3. README.md に **企画書** を 載せる
4. （余裕あれば） **DB の 作成 SQL** を 書く

</div>

---

## 次回予告

<div class="big">💻 🌿</div>

# 第2回｜実装と レビュー

設計した DB ＋ API を **チームで 実装**！<br>
**Git ブランチ → プルリクエスト → コードレビュー → マージ**<br>
の フロー を 体験！

---

<!-- _class: title -->

# 設計 おつかれさま 📐✨

### 「チームで 設計」 の 第一歩

<br>

紙の 上で 全員 揃った設計、<br>
これが <b>実装で 揉めない</b> 秘訣！
