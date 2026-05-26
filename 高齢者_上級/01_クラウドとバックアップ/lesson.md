---
marp: true
theme: default
paginate: true
size: 16:9
header: '高齢者向けパソコン教室 ／ 上級 第1回'
footer: 'クラウドとバックアップ'
style: |
  :root {
    --c-primary: #5E35B1;
    --c-secondary: #FFA726;
    --c-accent: #26A69A;
    --c-warn: #D32F2F;
    --c-dark: #1A237E;
    --c-light: #F7F5FA;
  }
  section {
    background: var(--c-light);
    color: #1A1A2E;
    font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif;
    font-size: 28px;
    line-height: 1.7;
    padding: 60px;
  }
  section h1 { color: var(--c-primary); font-size: 56px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 44px; margin-bottom: 24px; }
  section h3 { color: var(--c-accent); font-size: 32px; }
  section.title {
    background: linear-gradient(135deg, #5E35B1 0%, #1A237E 100%);
    color: white; text-align: center;
  }
  section.title h1 { color: white; font-size: 72px; }
  section.section {
    background: var(--c-dark); color: white; text-align: center;
  }
  section.section h1 { color: var(--c-secondary); font-size: 64px; }
  section.handson { background: #E8F5E9; }
  section.handson h1 { color: var(--c-accent); }
  section.warn { background: #FFEBEE; }
  section.warn h1 { color: var(--c-warn); }
  .card {
    background: white; border-radius: 14px;
    padding: 22px 28px; margin: 14px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.1);
    font-size: 30px;
  }
  .big { font-size: 80px; text-align: center; line-height: 1; }
  .step { font-size: 32px; }
  .step b { color: var(--c-primary); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
  .grid4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
  .ok { background: #E8F5E9; border-left: 8px solid var(--c-accent);
    padding: 16px 22px; border-radius: 8px; font-size: 28px; }
  .ng { background: #FFEBEE; border-left: 8px solid var(--c-warn);
    padding: 16px 22px; border-radius: 8px; font-size: 28px; }
  .tip { background: #FFF3E0; border-left: 8px solid var(--c-secondary);
    padding: 16px 22px; border-radius: 8px; font-size: 28px; }
  .key {
    display: inline-block;
    background: white; border: 2px solid var(--c-dark);
    border-radius: 8px; padding: 4px 14px;
    font-family: monospace; font-weight: bold; font-size: 26px;
    box-shadow: 0 3px 0 rgba(0,0,0,.2);
  }
  .badge { display: inline-block; background: var(--c-primary); color: white;
    padding: 4px 14px; border-radius: 6px; font-size: 22px; font-weight: bold; }
  .badge.a { background: var(--c-accent); }
  .badge.s { background: var(--c-secondary); color: var(--c-dark); }
  .badge.w { background: var(--c-warn); }
---

<!-- _class: title -->

# クラウドと<br>バックアップ

### 第1回 ／ 高齢者向け パソコン教室・上級

<br>

きょうは **暮らしの 安心の 仕組み** を 作ります ☁️🔐

---

## 上級コース へ ようこそ

<div class="grid2">
<div class="card">

### 中級まで
- 文書・表・写真
- 家族と <b>共有</b>
- 「家でも 使える」

</div>
<div class="card" style="border-left:8px solid var(--c-primary)">

### 上級では
- 暮らしの <b>仕組み</b> を作る
- AI を 相棒に
- <b>「自分で 設計」 できる</b>

</div>
</div>

<br>

中級は「<b>使う</b>」、 上級は「<b>組み立てる</b>」！

---

## 全4回 スケジュール

| 回 | やること |
|---|---|
| 1 | **クラウドと バックアップ** ← きょう |
| 2 | AIを 暮らしの 相棒に |
| 3 | 情報発信を 楽しむ |
| 4 | 行政・金融 の 電子化 |

---

## きょうのゴール

- ✅ **クラウド** の 上手な 使い方 がわかる
- ✅ **重要書類** の 整理ルール が 決まる
- ✅ **3-2-1 ルール** で バックアップ する
- ✅ **二段階認証** を 設定して 安全に
- ✅ 家族と **緊急連絡先** を 共有

---

<!-- _class: section -->

# 1. クラウドの<br>「上級」とは

---

## 中級 と 上級 の ちがい

<div class="grid2">
<div class="card">

### 📸 中級（写真）
- 写真を 預ける
- 家族と 共有

</div>
<div class="card" style="border-left:8px solid var(--c-primary)">

### ☁️ 上級（ぜんぶ）
- <b>重要書類</b> も 預ける
- <b>パソコン・スマホで 同じ</b>
- <b>家族 不在 でも</b> 自分で

</div>
</div>

<br>

→ クラウド ＝ **「もう 1つの 自分の机」**！

---

## 主要 3 サービス（おさらい＋深掘り）

<div class="grid3">
<div class="card" style="text-align:center;border-top:6px solid #4285F4">

### 🟦 Googleドライブ
- 無料 15GB
- 文書・表・写真<br>すべて 1か所
- Gmail と セット

</div>
<div class="card" style="text-align:center;border-top:6px solid #A2AAAD">

### 🍎 iCloud Drive
- 無料 5GB
- iPhone との 連携 抜群
- 書類 自動 同期

</div>
<div class="card" style="text-align:center;border-top:6px solid #0078D4">

### 🟦 OneDrive
- 無料 5GB
- Word/Excel と 一体
- Microsoft 365 で 1TB

</div>
</div>

---

<!-- _class: section -->

# 2. 何を 保管<br>すべきか

---

## 重要書類 リスト

<div class="grid2">
<div class="card">

### 📄 公的書類
- 住民票 控え
- 年金 関係 書類
- 健康保険証 写し
- 戸籍謄本 控え

</div>
<div class="card">

### 💴 金融
- 預金口座 情報メモ
- 保険証券（写真）
- 株式・投信 明細
- 確定申告 書類

</div>
</div>

<div class="grid2" style="margin-top:14px">
<div class="card">

### 🏥 医療
- 病院 診察券（写真）
- お薬手帳（写真）
- 健康診断結果
- 紹介状

</div>
<div class="card">

### 🏠 暮らし
- 賃貸契約書 / 権利書
- 家電 保証書（写真）
- 取扱説明書 PDF
- 家族の 連絡先

</div>
</div>

---

## スマホで 「スキャン」する

<div class="card">

### 紙の 書類を カメラで <b>PDF化</b>

</div>

<br>

- iPhone：**メモアプリ** → カメラマーク → 「書類スキャン」
- Android：**Googleドライブ** → ＋ボタン → 「スキャン」
- 自動で **歪み補正** ＋ PDF 化！

<br>

→ **取扱説明書・保証書** も これで 保管！

---

## 検索しやすい ファイル名

<div class="ng">

### ❌ ダメな名前
- 「ファイル.pdf」
- 「無題.docx」
- 「IMG_1234.jpg」

</div>

<div class="ok" style="margin-top:14px">

### ✅ 良い名前 ＝ <b>日付＋内容</b>
- 「2026-04-15_町内会_案内.pdf」
- 「2025-12-01_健康診断_結果.pdf」
- 「2024-03-20_保険証券_医療保険.pdf」

</div>

→ **西暦 4桁 - 月 2桁 - 日 2桁** で 並び替え も 楽！

---

<!-- _class: section -->

# 3. フォルダで<br>整理

---

## おすすめ フォルダ 構造

<div class="card">

```
📁 マイドライブ
├── 📁 1_重要書類（公的・金融・医療）
│   ├── 📁 公的
│   ├── 📁 金融
│   └── 📁 医療
├── 📁 2_暮らし（保証書・契約書）
├── 📁 3_写真_2026
├── 📁 4_文書_作りもの
└── 📁 5_家族と共有
```

</div>

→ 数字 を 頭に つけると **順番が 揃う**！

---

## アクセス権 ＝ 「誰に 見せるか」

<div class="grid3">
<div class="card">

### 🔒 自分のみ
<span class="badge w">非公開</span>
重要書類 は<br>これ！

</div>
<div class="card">

### 👨‍👩‍👧 家族
<span class="badge a">限定共有</span>
旅行写真・行事

</div>
<div class="card">

### 🔗 リンク
<span class="badge s">注意</span>
ふだん使わない

</div>
</div>

<br>

→ **重要書類は ぜったいに 「自分のみ」** ！

---

<!-- _class: section -->

# 4. バックアップ<br>戦略

---

## 3-2-1 ルール ＝ プロの 鉄則

<div class="big">3-2-1</div>

<br>

- **3つ** の コピー（原本 ＋ 2つの バックアップ）
- **2種類** の メディア（クラウド + USB など）
- **1つ** は 家の <b>外</b>（クラウド or 実家）

---

## 高齢者向け 3-2-1 の例

<div class="card">

### 📋 重要書類 1ファイル の バックアップ

1. **パソコン** の マイドライブ（同期 フォルダ）
2. **クラウド**（Google ドライブ 等）→ 自動アップロード
3. **USB メモリ** に 月1 コピー → 引き出しへ

</div>

<br>

→ パソコン 壊れても、 クラウド 障害でも、 **2つは 残る**！

---

## 自動同期 vs 手動コピー

<div class="grid2">
<div class="card">

### 🔄 自動同期
- 何もしなくて OK
- 編集も 即 同期
- <b>消したら 消える</b>！

</div>
<div class="card" style="border-left:8px solid var(--c-warn)">

### ✋ 手動コピー
- 自分で 定期 コピー
- 古い 版が <b>残る</b>
- 月1回 で OK

</div>
</div>

<br>

→ **両方** 組み合わせる のが 上級！

---

## 「消したファイルを 復元」 も できる

<div class="ok">

### 💡 Googleドライブ：ゴミ箱に <b>30日</b> 残る

- 「やっぱり 必要だった！」 でも 30日以内なら 復元可能
- 30日 過ぎたら 完全削除

</div>

<br>

→ **慌てず 確認** できる！

---

<!-- _class: section -->

# 5. 二段階認証

---

## なぜ 二段階認証 ？

<div class="card">

### パスワード だけ では <b>もう 守れない</b>

</div>

<br>

- パスワードが 漏れる 事件 が 毎年 発生
- 二段階認証 ＝ **「鍵 2つ」** で 安全
  - 1段目：パスワード
  - 2段目：スマホへの **確認コード**

---

## 二段階認証 の 3つの 方法

<div class="grid3">
<div class="card" style="text-align:center;border-top:6px solid var(--c-secondary)">

### 📩 SMS
スマホに 番号 が届く<br>
<b>カンタン</b> だが<br>
最近は 弱い

</div>
<div class="card" style="text-align:center;border-top:6px solid var(--c-accent)">

### 📱 認証アプリ
Google Authenticator<br>など<br>
<b>おすすめ</b>

</div>
<div class="card" style="text-align:center;border-top:6px solid var(--c-primary)">

### 🔐 物理キー
USB のような 鍵<br>
<b>最強</b> だが<br>
無くしたら 終わり

</div>
</div>

<br>

→ まずは **SMS** から、 慣れたら **認証アプリ** へ！

---

## 設定 手順（Googleアカウント の例）

<div class="card step">

### 1. <b>myaccount.google.com</b> を 開く
### 2. <b>セキュリティ</b> → <b>「2段階認証プロセス」</b>
### 3. <b>スマホの番号</b> を 登録
### 4. テスト：SMS で コードが 届く 確認
### 5. <b>バックアップコード</b> を 印刷して 大事に保管！

</div>

---

## 緊急 連絡先 ＝ <b>家族</b> を 設定

<div class="card">

### 自分が <b>ロックアウト</b> された 時に

</div>

<br>

スマホを 無くす、 番号を 変える → ログインできない！<br>
→ **家族のメール / 電話** を 緊急連絡先に 登録 しておく。

<br>

→ 「もう 自分では 入れない」 でも **家族 から 助けて もらえる**！

---

## パスワード管理 の コツ

<div class="ng">

### ❌ ダメな パスワード
- 「123456」「password」
- 誕生日・電話番号
- 全部 同じ パスワード

</div>

<div class="ok" style="margin-top:14px">

### ✅ 良い パスワード
- <b>3つの 単語</b> を つなぐ：「桜・東京・コーヒー」 → `Sakura@Tokyo!Coffee`
- 12文字以上
- サービス ごとに <b>少しずつ 違う</b>

</div>

---

## パスワード メモ の しかた

<div class="grid2">
<div class="card">

### 📝 紙のメモ
- 引き出しの 鍵付き 場所
- 家族 だけが 知る場所
- **デスクトップ 付箋 はダメ**

</div>
<div class="card">

### 🔐 パスワード管理アプリ
- 1Password / Bitwarden
- 1つだけ 覚えれば<br>あとは 自動入力
- <b>上級者向け</b>

</div>
</div>

---

<!-- _class: section -->

# 6. やってみよう
## 40分 ハンズオン

---

<!-- _class: handson -->

## ステップ表（40分）

| ステップ | やること | 時間 |
|---|---|---|
| ① | クラウド アカウント 確認 | 5分 |
| ② | <b>フォルダ構造</b> を 作る | 8分 |
| ③ | 重要書類 1〜2件 を スキャン → アップロード | 12分 |
| ④ | <b>二段階認証</b> を 設定 | 10分 |
| ⑤ | 家族を <b>緊急連絡先</b> に 登録 | 5分 |

---

<!-- _class: handson -->

## 困った とき

<div class="card">

### ❓ 「容量が いっぱい」
→ 古い 動画を 削除 or 有料プラン

</div>

<div class="card">

### ❓ 二段階認証 で スマホに コードが 来ない
→ 数分 待つ ／ Wi-Fi を 切って モバイル通信 で 試す

</div>

<div class="card">

### ❓ パスワードを 忘れた
→ 「パスワードを お忘れですか？」 から 再設定<br>
（緊急連絡先 が あれば 助かる）

</div>

---

<!-- _class: warn -->

# ⚠️ 安全 の ひと言

---

## クラウドの 落とし穴

<div class="ng">

### ⚠️ 「無料容量 超え → 自動課金」 に 注意

- 写真が 増えすぎて 課金 開始
- クレカ登録 してると 知らぬ間に
- 設定で **「自動課金 OFF」** を 確認

</div>

<div class="ng" style="margin-top:14px">

### ⚠️ 二段階認証 で <b>電話番号 変更</b> → ロックアウト

- ガラケー → スマホ買い替え 時 など
- **変更前** に 緊急連絡先・新番号 登録

</div>

---

## 偽 ログイン ページ に 注意

<div class="card warn">

### URL を 必ず 確認

</div>

<br>

- 本物：`accounts.google.com`
- 偽物：`accounts-google.com.xyz` のような 似た URL
- **メールの リンクから ログイン しない**！<br>
　ブラウザの ブックマーク or 公式アプリ から

---

<!-- _class: section -->

# 7. まとめ

---

## 今日 できたこと

1. **クラウド** ＝ 「もう1つの 机」
2. **重要書類** の 保管リスト ができた
3. **日付付き ファイル名** で 整理
4. **3-2-1 ルール** で バックアップ
5. **二段階認証** で 安全
6. **家族と 緊急連絡先** 共有

---

## おうちで やる こと

<div class="card">

### 📝 自分用 「手順ノート」 を 作る

- ログイン URL
- アカウント（メールアドレス）
- パスワード の <b>ヒント</b>（本物は 別に メモ）
- 2段階認証の <b>バックアップコード</b>
- 家族の 連絡先

</div>

> このノート 自体も **金庫 / 鍵付き 引き出し** に！

---

## 次回予告

<div class="big">🤖 ✨</div>

# 第2回｜AIを 暮らしの相棒に

**ChatGPT / Gemini / Claude** で<br>
**手紙の下書き・俳句・調べもの** を 楽しむ！<br>
入れていい情報・だめな情報 も 確認。

---

<!-- _class: title -->

# おつかれさま でした ☁️✨

### 「自分の暮らしを 守れる人」 に

<br>

今日 設定 した 仕組みが、<br>
<b>10年後</b> の 自分を 助けてくれます！
