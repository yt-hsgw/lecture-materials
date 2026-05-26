---
marp: true
theme: default
paginate: true
size: 16:9
header: '中学生プログラミング塾 ／ 上級 第3回'
footer: 'テストとリリース'
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
  .code .pass { color: #6EE7B7; }
  .code .fail { color: #FCA5A5; }
---

<!-- _class: title -->

# テストと リリース

### 第3回 ／ 中学生プログラミング塾・上級

<br>

きょうは **pytest / Jest → デプロイ**！ 🧪🚀

---

## 前回の 復習

<div class="grid3">
<div class="card">

### 🌿 Git ブランチ
feature → PR → merge

</div>
<div class="card">

### 🔍 コードレビュー
10観点

</div>
<div class="card">

### 🛡️ セキュリティ
ハッシュ・検証

</div>
</div>

<br>

実装 と レビュー で **動く** ものが できた。<br>
次は **公開** ！

---

## きょうのゴール

- ✅ **テストピラミッド** を 理解
- ✅ **pytest / Jest** で ユニットテスト が 書ける
- ✅ **TDD**（テスト駆動開発） の 基本
- ✅ **手動テストシナリオ** が 作れる
- ✅ **CI/CD** ＋ **Render** デプロイ で 公開

---

<!-- _class: section -->

# 1. なぜ テスト？

---

## テスト ＝ 「未来の自分への 保険」

<div class="big">🛡️</div>

<br>

- 修正したら **別の所が 壊れる**（リグレッション）
- リファクタする 勇気が 出ない
- バグが **本番で 発見** されて 慌てる

→ テスト が あれば 上記の 全部 解決！

---

## テストの 種類

<div class="grid3">
<div class="card" style="text-align:center;border-top:5px solid var(--c-accent)">

### 🧪 ユニットテスト
**関数 1個ずつ**<br>
小さい・速い・多数

</div>
<div class="card" style="text-align:center;border-top:5px solid var(--c-secondary)">

### 🔗 結合テスト
**API ＋ DB** など<br>
中規模・中速

</div>
<div class="card" style="text-align:center;border-top:5px solid var(--c-warn)">

### 🌍 E2Eテスト
**ブラウザで 操作**<br>
大規模・遅い・少数

</div>
</div>

---

## テストピラミッド

<div class="code">
                    🌍 E2E（少）
                  ───────────
                 🔗 結合（中）
               ─────────────
              🧪 ユニット（<b>多</b>）
            ─────────────────
</div>

<br>

→ <b>ユニットテストを 厚く</b> が 鉄則！<br>
E2E は 重いので 厳選 した シナリオだけ。

---

<!-- _class: section -->

# 2. ユニットテスト

---

## pytest — Python の 定番

<div class="code">
<span class="com"># test_calc.py</span>
<span class="key">def</span> <span class="fn">test_add</span>():
    <span class="key">assert</span> <span class="fn">add</span>(<span class="num">2</span>, <span class="num">3</span>) == <span class="num">5</span>

<span class="key">def</span> <span class="fn">test_add_negative</span>():
    <span class="key">assert</span> <span class="fn">add</span>(-<span class="num">1</span>, <span class="num">1</span>) == <span class="num">0</span>
</div>

<br>

実行：
<div class="code">
$ pytest
<span class="pass">test_add PASSED
test_add_negative PASSED</span>
</div>

---

## Jest — JavaScript の 定番

<div class="code">
<span class="com">// add.test.js</span>
test(<span class="str">'add: 2 + 3 = 5'</span>, () => {
  <span class="fn">expect</span>(<span class="fn">add</span>(<span class="num">2</span>, <span class="num">3</span>)).<span class="fn">toBe</span>(<span class="num">5</span>);
});

test(<span class="str">'add: -1 + 1 = 0'</span>, () => {
  <span class="fn">expect</span>(<span class="fn">add</span>(-<span class="num">1</span>, <span class="num">1</span>)).<span class="fn">toBe</span>(<span class="num">0</span>);
});
</div>

<br>

→ <b>expect(値).マッチャー(期待)</b> の 形！

---

## AAA パターン

<div class="card">

### **A**rrange / **A**ct / **A**ssert の 3ブロック

</div>

<div class="code">
<span class="key">def</span> <span class="fn">test_create_review</span>():
    <span class="com"># Arrange（準備）</span>
    user = User(name=<span class="str">"alice"</span>)
    db.session.<span class="fn">add</span>(user)
    db.session.<span class="fn">commit</span>()

    <span class="com"># Act（実行）</span>
    review = <span class="fn">create_review</span>(user_id=user.id, comment=<span class="str">"good"</span>)

    <span class="com"># Assert（検証）</span>
    <span class="key">assert</span> review.id <span class="key">is not None</span>
    <span class="key">assert</span> review.comment == <span class="str">"good"</span>
</div>

---

## TDD ＝ テスト 駆動 開発

<div class="big">🔴 → 🟢 → 🔵</div>

<br>

1. **🔴 Red**：テストを 書く → <b>失敗</b>（まだ実装 してない）
2. **🟢 Green**：最小の 実装で <b>通す</b>
3. **🔵 Refactor**：きれいに <b>整える</b>（テストは 通ったまま）

→ **テストを 先に 書く** が 鉄則！

---

## TDD の 流れ（例）

<div class="code">
<span class="com"># 🔴 1. テストを 書く</span>
<span class="key">def</span> <span class="fn">test_add</span>():
    <span class="key">assert</span> <span class="fn">add</span>(<span class="num">2</span>, <span class="num">3</span>) == <span class="num">5</span>

<span class="com"># 実行 → FAIL（add が ない）</span>

<span class="com"># 🟢 2. 最小実装</span>
<span class="key">def</span> <span class="fn">add</span>(a, b):
    <span class="key">return</span> a + b

<span class="com"># 実行 → PASS！</span>

<span class="com"># 🔵 3. リファクタ（必要なら）</span>
<span class="com"># 今回は シンプルで OK</span>
</div>

---

## テスト カバレッジ

<div class="card">

### 「コードの 何 % が テスト されてるか」

</div>

<br>

<div class="code">
$ pytest --cov=app
<span class="pass">Coverage: 82%</span>
</div>

<br>

→ **70-80% を 目標**！<br>
100% は <b>過剰</b>（テストの保守コスト 大）。

---

<!-- _class: section -->

# 3. 手動テスト<br>シナリオ

---

## テストケース 表

<div class="card">

| # | 操作 | 期待結果 | 実際 | 判定 |
|---|------|---------|------|------|
| 1 | 旗→クリック | カウンタ +1 | +1 | ✅ |
| 2 | 旗→100連打 | カウンタ +100 | +100 | ✅ |
| 3 | リセット | 0 に | 0に | ✅ |
| 4 | リロード | 値が 残る | 0 に | ❌ |

</div>

<br>

→ <b>「実際」 と 「期待」 が 違う</b> ＝ バグ。

---

## バグ報告 フォーマット

<div class="card">

```
【再現手順】
1. ログインする
2. 「投稿」を クリック
3. タイトルを 空欄で 送信

【期待】 エラーメッセージ「タイトルは 必須」
【実際】 サーバーが 500エラー で クラッシュ

【環境】 Chrome 125 / Mac
【再現率】 5回中 5回
【スクリーンショット】 添付
```

</div>

→ <b>「再現手順」</b> が 最重要！

---

## 探索テスト

<div class="card">

### 「いじわるテスト」 で 普通でない 操作

</div>

<br>

- 空文字 / 1000文字 / 絵文字 を 入力
- 連打・連続クリック
- ネットワーク 切断 で 操作
- 古い ブラウザ で アクセス

<br>

→ プロは **「壊し方」 を 探す** のが 上手！

---

<!-- _class: section -->

# 4. CI/CD

---

## CI/CD ＝ 自動化の 仕組み

<div class="grid2">
<div class="card">

### 🔄 CI<br>(Continuous Integration)
PR ごとに **自動テスト**

</div>
<div class="card">

### 🚀 CD<br>(Continuous Deployment)
main マージ で **自動デプロイ**

</div>
</div>

<br>

→ **GitHub Actions** が 業界標準！

---

## GitHub Actions の例

<div class="code">
<span class="com"># .github/workflows/test.yml</span>
<span class="key">name</span>: Tests
<span class="key">on</span>: [push, pull_request]

<span class="key">jobs</span>:
  test:
    runs-on: ubuntu-latest
    steps:
      - <span class="key">uses</span>: actions/checkout@v4
      - <span class="key">uses</span>: actions/setup-python@v5
      - <span class="key">run</span>: pip install -r requirements.txt
      - <span class="key">run</span>: pytest
</div>

<br>

→ PR を 作ると **自動で テスト**！ ✅ or ❌ が 表示。

---

## 「赤い PR は マージしない」

<div class="card warn">

### ⚠️ CI が 失敗（赤） → マージ ボタン を 押さない

</div>

<br>

- どこかが <b>壊れた</b> 証拠
- 直してから 再 push → CI が <b>緑</b> に
- main は **常に 動く 状態** を 保つ！

---

<!-- _class: section -->

# 5. デプロイ

---

## デプロイ先 主要 4社

<div class="grid2">
<div class="card">

### 🚀 Render
- **Flask / Express** に 強い
- 無料プラン あり
- GitHub 連携 自動

</div>
<div class="card">

### ▲ Vercel
- **Next.js / 静的サイト**
- 高速 CDN
- 無料 寛大

</div>
</div>

<div class="grid2" style="margin-top:14px">
<div class="card">

### ☁️ Cloudflare Pages
- 静的サイト 専門
- **無制限 帯域**
- 高速

</div>
<div class="card">

### 🚂 Railway
- DB（Postgres）と セット
- バックエンド 向き
- 無料枠 限定的

</div>
</div>

---

## Render に Flask を デプロイ（手順）

<div class="card">

### 1. GitHub に <b>push</b>
### 2. Render で <b>「New → Web Service」</b>
### 3. リポジトリ を 選ぶ
### 4. <b>Build Command</b>：`pip install -r requirements.txt`
### 5. <b>Start Command</b>：`gunicorn app:app`
### 6. <b>環境変数</b>（API_KEY など）を 設定
### 7. デプロイ！ URLが 発行される

</div>

---

## 環境変数 ＝ 本番用 の 秘密

<div class="card warn">

### ⚠️ コード に 書かない！ Render の 設定画面に

</div>

<br>

開発 時：`.env` ファイル<br>
本番 時：Render / Vercel の <b>環境変数 設定</b>

<br>

→ `.env` は <b>絶対に git に push しない</b>（`.gitignore` に！）。

---

## デプロイ 後 の 動作確認

<div class="card">

### 必ず やる 3チェック

</div>

<br>

1. **トップページ** が 表示される
2. **重要機能**（ログイン・投稿 など）が 動く
3. **DB** に データが 入る／取れる

<br>

→ 動かなかったら **デプロイログ** を 確認！

---

<!-- _class: section -->

# 6. ハンズオン
## テスト + デプロイ

---

<!-- _class: handson -->

## やることリスト（55分）

| ステップ | やる事 | 時間 |
|---|---|---|
| ① | pytest / Jest を 環境構築 | 5分 |
| ② | <b>関数 1つに テストを 書く</b> | 10分 |
| ③ | <b>API 1本に テストを 書く</b> | 10分 |
| ④ | <b>GitHub Actions</b> を 設定 | 10分 |
| ⑤ | Render に デプロイ | 15分 |
| ⑥ | 動作確認 + 環境変数 設定 | 5分 |

---

<!-- _class: handson -->

## 詰まった とき

<div class="card">

### ❓ pytest が 動かない
→ `pip install pytest` ＋ ファイル名 が <b>`test_xxx.py`</b> か 確認

</div>

<div class="card">

### ❓ GitHub Actions が 失敗
→ <b>ローカルで pytest 通る?</b>  pythonバージョン 一致？

</div>

<div class="card">

### ❓ Render で 起動しない
→ <b>ログ</b> 確認。 Start Command / 環境変数 を チェック

</div>

---

<!-- _class: section -->

# 7. 安全 の ひと言

---

## 公開＝責任 が 発生

<div class="ng">

### ⚠️ ネットに 出すと、 他人が <b>使う / 攻撃する</b>

</div>

<br>

- **個人情報** を 適切に 扱う 義務
- **障害** で 困らせる 可能性
- **未成年は 保護者・教室の 同意** を 必ず

<br>

→ <b>「公開する権利」 ＝ 「守る責任」</b>！

---

## 公開 前 チェックリスト

<div class="card">

### 必ず 全部 ✅！

</div>

<br>

- ✅ `.env` が **git に 入っていない**
- ✅ **本名・住所** が サンプルに ない
- ✅ **CORS** を 必要な ドメインのみ 許可
- ✅ **エラーメッセージに DB情報** 出てない
- ✅ **テストが 全部 通る**
- ✅ **保護者・教室 OK**

---

<!-- _class: section -->

# 8. まとめ

---

## 今日 おぼえたこと

1. **テストピラミッド** ＝ ユニット多 / E2E少
2. **pytest / Jest** ＋ AAAパターン
3. **TDD** ＝ Red → Green → Refactor
4. **手動テストシナリオ** ＋ バグ報告
5. **CI/CD**（GitHub Actions）
6. **Render** で デプロイ → 公開 ！

---

## 次回までの 宿題

<div class="card">

### 🚀 公開 まで 走る

1. テストを **追加 3〜5本**
2. Render に <b>デプロイ</b> して URL 発行
3. **家族・友人 に URL を送る**
4. （余裕あれば）GitHub Actions の README バッジ 設置

</div>

---

## 次回予告

<div class="big">📊 💸</div>

# 第4回｜運用・改善・マネタイズ

公開した サービスを **どう 育てるか**：<br>
ログ / フィードバック / バグ修正 の <b>優先順位</b><br>
そして 法務 と **マネタイズ 概論**！

---

<!-- _class: title -->

# 公開 おつかれさま 🚀✨

### 「他人に 使ってもらえる人」 へ

<br>

ローカルの コードが <b>世界 に 出た</b>！<br>
責任を持って、 楽しんで 育てよう！
