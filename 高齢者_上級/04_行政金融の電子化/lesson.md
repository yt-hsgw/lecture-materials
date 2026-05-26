---
marp: true
theme: default
paginate: true
size: 16:9
header: '高齢者向けパソコン教室 ／ 上級 第4回'
footer: '行政・金融の電子化'
style: |
  :root {
    --c-primary: #5E35B1;
    --c-secondary: #FFA726;
    --c-accent: #26A69A;
    --c-warn: #D32F2F;
    --c-dark: #1A237E;
    --c-light: #F7F5FA;
    --c-mynaport: #1976D2;
    --c-nenkin: #00897B;
    --c-etax: #C2185B;
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
  section.handson { background: #E0F2F1; }
  section.handson h1 { color: var(--c-accent); }
  section.warn { background: #FFEBEE; }
  section.warn h1 { color: var(--c-warn); }
  section.finale {
    background: linear-gradient(135deg,#5E35B1,#26A69A,#FFA726);
    color: white; text-align: center;
  }
  section.finale h1 { color: white; font-size: 60px; }
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
  .ok { background: #E0F2F1; border-left: 8px solid var(--c-accent);
    padding: 16px 22px; border-radius: 8px; font-size: 28px; }
  .ng { background: #FFEBEE; border-left: 8px solid var(--c-warn);
    padding: 16px 22px; border-radius: 8px; font-size: 28px; }
  .tip { background: #FFF3E0; border-left: 8px solid var(--c-secondary);
    padding: 16px 22px; border-radius: 8px; font-size: 28px; }
  .note {
    background: white; border: 3px solid var(--c-primary);
    border-radius: 8px; padding: 20px 28px;
    font-family: 'Hiragino Mincho ProN', serif;
    font-size: 22px; line-height: 1.9;
  }
  .note h4 { color: var(--c-primary); border-bottom: 1px solid var(--c-primary);
    padding-bottom: 4px; margin-bottom: 10px; font-size: 24px; }
  .cert {
    background: linear-gradient(135deg, #FFFBEB, #E0F2F1);
    border: 5px double var(--c-primary);
    border-radius: 14px; padding: 30px;
    text-align: center; box-shadow: 0 4px 20px rgba(94,53,177,.18);
  }
  .cert h2 { color: var(--c-primary); letter-spacing: 8px; font-size: 36px; }
  .cert .name { display: inline-block; font-size: 32px; font-weight: bold;
    color: var(--c-accent); padding: 8px 30px;
    border-top: 3px solid var(--c-primary); border-bottom: 3px solid var(--c-primary);
    margin: 14px 0; }
---

<!-- _class: title -->

# 行政・金融の<br>電子化

### 第4回 ／ 高齢者向け パソコン教室・上級 ／ 最終回

<br>

きょうは **マイナポータル ／ 年金 ／ 確定申告** を 体験！ 🏛️📱🎓

---

## 前回まで の 復習

<div class="grid2">
<div class="card">

### 上級 1〜3回
- ☁️ クラウド・バックアップ
- 🤖 AI と暮らす
- 📝 情報発信

</div>
<div class="card">

### 今回（最終回）
- 🏛️ マイナポータル
- 💰 ねんきんネット
- 📊 e-Tax 概要
- 🎓 コース 修了！

</div>
</div>

---

## きょうのゴール

- ✅ **3つの 電子サービス** が わかる
- ✅ **自分で やる範囲** と **家族と やる範囲** を 決められる
- ✅ **自分用 手順ノート** を 1枚 作る
- ✅ コース **修了** 🎓

---

<!-- _class: section -->

# 1. 電子化 って何？

---

## 「役所に 行かなくて 済む」 時代

<div class="big">🏛️ → 💻</div>

<br>

これまで：書類を 取りに 役所 → 窓口で 待つ → 印鑑<br>
これから：**家のパソコン から ログイン**！

<br>

→ 雨の日 も、 寒い日 も、 体調 悪い日 も 平気！

---

## 3つの 主要サービス

<div class="grid3">
<div class="card" style="text-align:center;border-top:6px solid #1976D2">

### 🏛️ マイナポータル
- 行政手続きの 玄関
- 各種申請
- 通知の 確認

</div>
<div class="card" style="text-align:center;border-top:6px solid #00897B">

### 💰 ねんきんネット
- 年金記録 確認
- 受給見込額 試算
- 通知書 ダウンロード

</div>
<div class="card" style="text-align:center;border-top:6px solid #C2185B">

### 📊 e-Tax
- 電子 確定申告
- 医療費控除
- 還付金 受け取り

</div>
</div>

---

## 共通の 必要なもの

<div class="card">

### マイナンバーカード

</div>

<br>

- カード本体
- **暗証番号**（4桁 ＋ 6桁以上）
- **カードリーダー** or **スマホ（NFC対応）**

<br>

→ なければ **市役所で 申請**（1ヶ月 待ち）！

---

<!-- _class: section -->

# 2. マイナポータル

---

## マイナポータル ＝ 行政の 玄関

<div class="card">

### 1つの ログイン で たくさんの 手続き

</div>

<br>

- **児童手当** の 申請
- **住民票** の 写し 取得
- **健康保険証** の 利用登録
- **確定申告** の 連携
- 自分の **行政データ** 確認

---

## ログイン 手順（スマホ版）

<div class="card step">

### 1. <b>マイナポータルアプリ</b> を ダウンロード
### 2. アプリ を 起動 → <b>「ログイン」</b>
### 3. <b>スマホで マイナンバーカード を 読み取り</b>（NFC）
### 4. 4桁の <b>暗証番号</b> を 入力
### 5. ログイン完了！

</div>

---

## できる 主な こと（一部）

<div class="grid2">
<div class="card">

### 📋 申請・届出
- 児童手当
- 妊娠届
- 引越し届
- 確定申告

</div>
<div class="card">

### 🔍 確認
- 自分の 行政情報
- 通知（お知らせ）
- 健康保険情報
- 薬剤情報

</div>
</div>

---

## おすすめ の 使い方（高齢者）

<div class="card">

### まず この 2つから

</div>

<br>

1. **健康保険証 として の 利用登録**<br>
　→ 病院で マイナカード 1枚で 受診

2. **自分の 薬剤情報** を 確認<br>
　→ 過去 飲んだ 薬の 履歴

<br>

→ 日常 で 一番 役立つ！

---

<!-- _class: section -->

# 3. ねんきんネット

---

## ねんきんネット ＝ 年金の マイページ

<div class="card">

### 自分の 年金 情報 を ぜんぶ 確認

</div>

<br>

- これまで <b>払った 年金</b> の 記録
- 将来 <b>もらえる 年金額</b> の 試算
- 年金 通知書 の 電子版
- 受給開始 時期 の シミュレーション

---

## 「年金記録 もれ」 の 確認に

<div class="card warn">

### ⚠️ 過去 ｢年金記録 漏れ｣ 問題が ありました

- 引っ越し ・転職 で 記録が 飛んだ ことが
- ねんきんネット で <b>自分で 確認</b> できる！
- 漏れが あれば <b>年金事務所</b> に 相談

</div>

---

## ログイン 方法

<div class="grid2">
<div class="card">

### 方法 ① マイナポータル経由
**マイナンバーカード** で 連携<br>
（おすすめ）

</div>
<div class="card">

### 方法 ② 基礎年金番号
**年金手帳** に ある番号 で<br>
登録 → ログイン

</div>
</div>

<br>

→ <b>初回 は 家族と 一緒に</b> 設定 すると 安心！

---

## 受給シミュレーション の 楽しみ

<div class="tip">

### 💡 「65歳 で もらう」 vs 「70歳 で もらう」 で 試算

</div>

<br>

- 受給時期 を 後ろに ずらす と <b>毎月 もらえる 額が 増える</b>（繰下げ受給）
- ねんきんネット で <b>シミュレーション</b> できる
- 大事な 決断 は <b>家族と相談</b> ！

---

<!-- _class: section -->

# 4. e-Tax<br>電子確定申告

---

## e-Tax ＝ 確定申告 を ネットで

<div class="card">

### 税務署 に 行かずに、 家から 申告！

</div>

<br>

- **医療費控除**（年間 10万円 超えた医療費）
- **ふるさと納税** の 申告
- **副業** の 申告（年金以外 の 収入）

→ <b>還付金</b>（戻ってくる お金）も 数週間で 振込！

---

## 自分で できる 範囲

<div class="grid2">
<div class="ok">

### ✅ 一人で OK
- 医療費控除（簡単）
- ふるさと納税
- 寄付金 控除

</div>
<div class="ng">

### ⚠️ 家族 / 税理士 と
- 不動産 売買
- 株式・投信 の 損益通算
- 副業の経費 計算

</div>
</div>

<br>

→ <b>「迷ったら 専門家」</b> が 正解！

---

## 必要なもの（医療費控除の 例）

<div class="card step">

### 1. マイナンバーカード ＋ スマホ or リーダー
### 2. 1年分の <b>医療費の 領収書</b>（or 健康保険組合 から の 通知書）
### 3. <b>給与・年金</b> の 源泉徴収票
### 4. 還付金 を 振り込む <b>銀行口座</b>

</div>

<br>

→ 領収書は <b>年初から 月別に 整理</b> しておくと ラク！

---

<!-- _class: section -->

# 5. 自分用<br>手順ノート

---

## なぜ「自分用 ノート」？

<div class="card">

### 1年に 1回 しか 使わない → <b>必ず 忘れる</b>

</div>

<br>

- 来年も 同じ手続き が 必要
- 講師は そばに いない
- 家族も 別の こと が ある

<br>

→ <b>未来の 自分への 手紙</b>！

---

## ノートに 書く 項目

<div class="note">

<h4>📒 マイナポータル ログイン 手順</h4>

<b>1.</b> アプリ：<u>マイナポータル</u>（青いアイコン）<br>
<b>2.</b> URL：<u>myna.go.jp</u><br>
<b>3.</b> 暗証番号：<u>○○○○</u>（4桁）<br>
　　※ 6桁以上のもの は <u>別紙</u> に<br>
<b>4.</b> 利用者証明書 → <b>「マイナンバーカード」</b><br>
<b>5.</b> 困ったら：息子の○○ に 電話

</div>

→ <b>手で 書く</b> のが 一番 覚える！

---

## ノートの 保管場所

<div class="ng">

### ⚠️ ノートに <b>暗証番号</b> を 書く 場合

- パソコンの 横 ／ デスクトップ <b>NG</b>
- <b>鍵付きの 引き出し</b> ／ 金庫
- 家族が <b>知っている場所</b>（緊急時のため）

</div>

<br>

→ 「自分が 入院した時に 家族が 開けられる場所」 が 理想！

---

## 暗証番号 を 忘れたら

<div class="card">

### マイナンバーカードの 暗証番号 ロック

</div>

<br>

- **4桁** ＝ 3回 間違えると ロック
- **6桁以上** ＝ 5回 間違えると ロック

<br>

→ **市役所で 再設定** が必要（手間！）<br>
　 落ち着いて、 慌てない！

---

<!-- _class: section -->

# 6. やってみよう
## 40分 ハンズオン

---

<!-- _class: handson -->

## ステップ表（40分）

| ステップ | やること | 時間 |
|---|---|---|
| ① | マイナポータルアプリ ログイン（先生と） | 10分 |
| ② | <b>健康保険証 利用登録</b> | 5分 |
| ③ | <b>薬剤情報・通知</b> を 確認 | 5分 |
| ④ | 「自分用 手順ノート」 を 1枚 作成 | 15分 |
| ⑤ | <b>家族の 連絡先</b> を ノートに 追加 | 5分 |

---

<!-- _class: handson -->

## 「これは 家族と」 と 思ったら

<div class="card">

### 🆘 一旦 中断 する 勇気

</div>

<br>

- 「ここから わからない」 と 思ったら 立ち止まる
- メモ を 残して 後日 家族と やる
- <b>無理して 進めない</b> ＝ 上級の 心得

<br>

→ 「自分で やる」 と 「家族と やる」 の 線引きが 上手 ＝ 上級者！

---

<!-- _class: warn -->

# ⚠️ 安全 の ひと言

---

## 偽サイト に 要注意

<div class="ng">

### 🚨 「税金が 還付されます」 メール は 99% 詐欺

- 国税庁・年金機構 から <b>メールで 還付通知 は 来ない</b>
- 必ず <b>公式アプリ / 公式サイト</b> から ログイン
- 検索結果の 上位 にも 偽サイト あり！

</div>

---

## ブックマーク を 必ず 作る

<div class="card step">

### 公式 URL を ブックマーク（お気に入り）！

</div>

<br>

- マイナポータル：<b>myna.go.jp</b>
- ねんきんネット：<b>nenkin.go.jp</b>
- e-Tax：<b>e-tax.nta.go.jp</b>

<br>

→ 毎回 ブックマーク から 開く！ 検索 は しない！

---

## 家族と 共有 すべき もの

<div class="tip">

### 💡 「もしも」 の 備え

</div>

<br>

- マイナンバーカード の <b>保管場所</b>
- 暗証番号 の <b>ヒント</b>（本物は 別保管）
- 年金 受給 口座
- 加入している 保険・カード 一覧

<br>

→ <b>緊急時に 家族が 困らない</b> ように！

---

<!-- _class: section -->

# 7. コース全体<br>ふり返り

---

## 上級 4回で 身についた こと

<div class="grid2">
<div class="card">

### ☁️ 第1回：クラウド
- 3-2-1 バックアップ
- 二段階認証
- 緊急連絡先

</div>
<div class="card">

### 🤖 第2回：AI
- プロンプト 3原則
- NG情報の 見極め
- 嘘の 見抜き方

</div>
</div>

<div class="grid2" style="margin-top:14px">
<div class="card">

### 📝 第3回：情報発信
- 公開範囲 4段階
- 写真 写り込み 注意
- コメント 対処

</div>
<div class="card">

### 🏛️ 第4回：電子化
- マイナポータル
- 自分用 手順ノート
- 家族 と 分担

</div>
</div>

---

## おうちで 続ける こと

<div class="card">

### 📅 月1 でも 触る → 忘れない

</div>

<br>

- **月初**：マイナポータル に ログイン（健康保険 利用）
- **3月**：医療費 領収書 整理
- **年末**：年賀状＋手紙 で AI 活用
- **休日**：ブログ で 1記事
- **毎日**：写真の 整理 ＆ クラウド同期

---

<!-- _class: section -->

# 8. 修了！

---

## 修了証

<div class="cert">

# 🏆 修　了　証

### 上記の方は<br><b>高齢者向け パソコン教室・上級コース</b> を<br>修了されました

<br>

「自分の暮らし を デザインする」 力<br>
を 身に つけられました

</div>

---

## 講師から の 最後 の ひと言

<div class="card">

### <b>「自分の 暮らしの 設計士」</b> として

</div>

<br>

上級コース まで 進んだ 皆さま は、<br>
もう <b>パソコンの 受け身 ではなく、 道具の 主人</b>。<br>
これからも、 困ったら <b>家族・専門家</b> に 頼りつつ、<br>
**自分の 生活を 自分で 設計** していって ください！

<br>

🌱 ゆっくり、 でも 諦めずに、 進みましょう。

---

## 次は どこへ？

<div class="grid3">
<div class="card">

### 🌍 地域コミュニティ
町内会 IT サポート ／<br>シルバー人材

</div>
<div class="card">

### 📚 もっと 学ぶ
オンライン 講座<br>YouTube

</div>
<div class="card">

### 👨‍👩‍👧 家族の先生
お孫さん に 教える ！

</div>
</div>

---

<!-- _class: finale -->

# 🎓 おめでとうございます

### 高齢者向け パソコン教室<br>上級コース 修了

<br>

3コース（初級 ・中級 ・上級）<br>
の すべてを 学び終えた 方は **真の パソコン マスター**！

<br>

これからも 楽しい デジタルライフ を ! 🌸
