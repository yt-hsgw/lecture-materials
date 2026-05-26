---
marp: true
theme: default
paginate: true
size: 16:9
header: '中学生プログラミング塾 ／ 上級 第4回'
footer: '運用・改善・マネタイズ概論'
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
  section.warn { background: #FEF2F2; }
  section.warn h1 { color: var(--c-warn); }
  section.finale { background: linear-gradient(135deg,#6D28D9,#06B6D4,#10B981); color: white; text-align: center; }
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
  .tip { background: #ECFEFF; border-left: 5px solid var(--c-secondary);
    border-radius: 8px; padding: 12px 16px; }
  .code { background: #0F172A; color: #E2E8F0; border-radius: 8px;
    padding: 14px 18px; font-family: 'JetBrains Mono','SF Mono','Menlo',monospace;
    font-size: 17px; line-height: 1.7; overflow-x: auto; }
  .code .key { color: #C4B5FD; }
  .code .str { color: #FDBA74; }
  .code .num { color: #6EE7B7; }
  .code .com { color: #64748B; font-style: italic; }
  .matrix { display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
    background: #0F172A; padding: 8px; border-radius: 10px; }
  .matrix > div { background: white; padding: 14px; border-radius: 8px; text-align: center; }
  .matrix > div b { display: block; color: var(--c-primary); font-size: 16px; margin-bottom: 4px; }
  .cert { background: linear-gradient(135deg, #F5F3FF, #ECFEFF);
    border: 5px double var(--c-primary); border-radius: 14px;
    padding: 30px; text-align: center; box-shadow: 0 4px 20px rgba(109,40,217,.18); }
  .cert h2 { color: var(--c-primary); letter-spacing: 8px; font-size: 32px; }
  .cert .name { display: inline-block; font-size: 28px; font-weight: bold;
    color: var(--c-accent); padding: 8px 30px;
    border-top: 3px solid var(--c-primary); border-bottom: 3px solid var(--c-primary);
    margin: 14px 0; }
---

<!-- _class: title -->

# 運用・改善・<br>マネタイズ概論

### 第4回 ／ 中学生プログラミング塾・上級 ／ 最終回

<br>

リリース後の 世界へ ようこそ！ 📊💸🎓

---

## 前回までの 復習

<div class="grid4">
<div class="card">

### 📐 第1回
要件・DB・API 設計

</div>
<div class="card">

### 💻 第2回
実装・PR・レビュー

</div>
<div class="card">

### 🧪 第3回
テスト・CI・デプロイ

</div>
<div class="card">

### 📊 第4回
**運用 ← きょう**

</div>
</div>

<br>

ついに **公開** までできた！ きょうは <b>そこから の 物語</b>。

---

## きょうのゴール

- ✅ **ログ／監視** の 基本 を 知る
- ✅ **フィードバック** を 集めて 分類できる
- ✅ **優先度マトリクス** で バグ／機能を 整理
- ✅ **マネタイズ** 4モデル の 違いがわかる
- ✅ **法務**（著作権／個人情報／利用規約） の 基礎
- ✅ コース **修了** 🎓

---

<!-- _class: section -->

# 1. 公開後の 世界

---

## リリースは <b>終わり ではなく 始まり</b>

<div class="big">🚀 → 📊</div>

<br>

中学生 まで：作って 動かして 終わり。<br>
プロ：公開 後の <b>運用</b> こそが 本番！

<br>

- ユーザー が <b>本当に 使う</b>
- バグが <b>実環境で 発見</b> される
- 改善 と 新機能 が <b>連続</b>

---

## 運用の 4観点

<div class="grid4">
<div class="card" style="text-align:center;border-top:5px solid var(--c-primary)">

### 📊 ログ
何が 起きた？

</div>
<div class="card" style="text-align:center;border-top:5px solid var(--c-secondary)">

### 💬 声
ユーザーの 反応

</div>
<div class="card" style="text-align:center;border-top:5px solid var(--c-accent)">

### 🔧 改善
何から 直す？

</div>
<div class="card" style="text-align:center;border-top:5px solid #F59E0B">

### 📈 成長
継続できる？

</div>
</div>

---

<!-- _class: section -->

# 2. ログ と 監視

---

## アクセスログ ＝ 「誰が いつ 何を」

<div class="code">
<span class="com"># Render の ログ画面（例）</span>
[2026-05-24 10:23:45] INFO  GET /api/reviews 200 (43ms)
[2026-05-24 10:23:50] INFO  POST /api/reviews 201 (87ms)
[2026-05-24 10:24:01] <span class="str">WARN</span>  GET /api/reviews 404 (5ms)
[2026-05-24 10:24:12] <span class="str">ERROR</span> POST /api/reviews 500 (1203ms)
   <span class="com"># traceback: KeyError 'rating'</span>
</div>

→ アクセス・エラー・遅延 が <b>1行ずつ</b> 残る！

---

## エラー監視ツール

<div class="grid3">
<div class="card" style="text-align:center;border-top:5px solid #362D59">

### 🐛 Sentry
**エラー** 専用<br>
スタックトレース<br>
無料枠あり

</div>
<div class="card" style="text-align:center;border-top:5px solid #F9AB00">

### 📊 Google Analytics
**アクセス解析**<br>
ユーザー数 / PV<br>
無料

</div>
<div class="card" style="text-align:center;border-top:5px solid #0091EA">

### 🔍 Datadog / NewRelic
**総合監視**<br>
ログ + 性能<br>
有料（学割あり）

</div>
</div>

<br>

中学生 上級：まず **Sentry** から！

---

## 「無音 ＝ 健康」 ではない

<div class="card warn">

### ⚠️ ユーザーは <b>諦めて 去る</b> 場合 が ほとんど

</div>

<br>

- バグに 遭った ユーザーの <b>9割は 報告しない</b>
- ログ／監視 が <b>ある＝気付ける</b>
- <b>「障害アラート」</b> を 設定 して 即対応

---

<!-- _class: section -->

# 3. フィードバック<br>収集

---

## 3つの 収集チャネル

<div class="grid3">
<div class="card" style="text-align:center">

### 📝 お問い合わせ<br>フォーム
受動的<br>真面目な 声

</div>
<div class="card" style="text-align:center">

### 💬 SNS / レビュー
能動的<br>感情的 な 声

</div>
<div class="card" style="text-align:center">

### 👥 インタビュー
直接 ヒアリング<br>深い 声

</div>
</div>

---

## フィードバック の 分類

<div class="grid2">
<div class="card">

### 🐛 バグ
動かない／誤動作<br>
→ **即 修正**

</div>
<div class="card">

### 💡 改善 要望
こうしてほしい<br>
→ <b>優先度 を 評価</b>

</div>
</div>

<div class="grid2" style="margin-top:14px">
<div class="card">

### ❤️ 称賛
ありがとう / 良い<br>
→ <b>励みに</b>

</div>
<div class="card">

### 😡 苦情
不満・怒り<br>
→ 落ち着いて <b>事実確認</b>

</div>
</div>

---

## 「ぜんぶ 対応 はしない」

<div class="card tip">

### 💡 全ユーザーの 要望 を 入れる → 機能 過多 で 誰も使えない

</div>

<br>

- **ターゲット ユーザー** の 声 を 優先
- 1人の 強い 要望 ＞ 100人の 弱い 要望
- 「やらない」 を 説明する 勇気！

---

<!-- _class: section -->

# 4. 改善の<br>優先順位

---

## インパクト × 工数 マトリクス

<div class="matrix">
<div style="background:#FEE2E2">
<b>🔥 すぐ やる</b><br>
<small>影響大 × 工数小</small>
</div>
<div style="background:#FEF3C7">
<b>📅 計画して</b><br>
<small>影響大 × 工数大</small>
</div>
<div style="background:#D1FAE5">
<b>😊 余裕あれば</b><br>
<small>影響小 × 工数小</small>
</div>
<div style="background:#E0E7FF">
<b>❌ やらない</b><br>
<small>影響小 × 工数大</small>
</div>
</div>

<br>

→ <b>「影響大 × 工数小」</b> から 順番 に 着手！

---

## バックログ管理（GitHub Issues）

<div class="code">
<span class="com"># Issue の 書き方（テンプレート）</span>
**種類**: バグ / 機能 / 改善
**優先度**: P0（即）/ P1（高）/ P2（中）/ P3（低）
**ラベル**: frontend, backend, security

## 概要
ログイン失敗時 500エラー

## 再現手順
1. パスワード を 空欄
2. ログイン ボタン

## 期待 / 実際
期待: 「必須」エラー / 実際: 500
</div>

---

## P0〜P3 の 目安

<div class="grid4">
<div class="card" style="text-align:center;border-top:5px solid var(--c-warn)">

### P0
即対応<br>
**サービス停止**

</div>
<div class="card" style="text-align:center;border-top:5px solid #F59E0B">

### P1
今週中<br>
**重要機能 影響**

</div>
<div class="card" style="text-align:center;border-top:5px solid var(--c-secondary)">

### P2
今月中<br>
**改善要望**

</div>
<div class="card" style="text-align:center;border-top:5px solid #94A3B8">

### P3
いつか<br>
**気が向いたら**

</div>
</div>

---

<!-- _class: section -->

# 5. マネタイズ<br>概論

---

## 4つの 主要モデル

<div class="grid4">
<div class="card" style="text-align:center;border-top:5px solid #4285F4">

### 📺 広告
無料＋広告<br>
<small>Google AdSense</small>

</div>
<div class="card" style="text-align:center;border-top:5px solid var(--c-accent)">

### 🔄 サブスク
月額 / 年額<br>
<small>Netflix 型</small>

</div>
<div class="card" style="text-align:center;border-top:5px solid var(--c-secondary)">

### 💰 従量課金
使った 分だけ<br>
<small>AWS 型</small>

</div>
<div class="card" style="text-align:center;border-top:5px solid #EC4899">

### 🤝 手数料
取引の % を<br>
<small>メルカリ型</small>

</div>
</div>

---

## どれを 選ぶ？

<div class="card">

### ユーザー数 × 単価 で 考える

</div>

<br>

- **広告**：ユーザー多 × 単価小（毎月 1万PV で 数千円）
- **サブスク**：ユーザー中 × 単価中（月500円 × 100人 = 5万円）
- **従量**：B2B 向き
- **手数料**：取引が 多い 場で

→ 中学生は <b>「まず 無料で 公開」 → 反応を 見て 検討</b>。

---

## ⚠️ 13歳未満／未成年 の 注意

<div class="ng">

### 規約 違反 ＝ アカウント 停止 リスク

- **Google AdSense**：18歳以上（保護者が 受取）
- **Stripe / PayPal**：18歳以上
- **App Store**：保護者の <b>Apple ID</b> で 配信
- **収益発生 → 確定申告**（年20万超）

</div>

<br>

→ <b>必ず 保護者 と 一緒に</b>！ 教室の 講師 にも 相談。

---

## マネタイズ の 落とし穴

<div class="ng">

### お金が からむと <b>責任 が 重く なる</b>

- ユーザーが 払った → <b>「動いて 当然」</b> と 期待
- 障害 で <b>賠償 請求</b> 可能性
- 個人情報 ＋ 決済情報 ＝ <b>厳重な セキュリティ</b>

</div>

<br>

→ <b>無料 で 始めて 評価を 集める</b> のが 中学生 には 賢い 道！

---

<!-- _class: section -->

# 6. 法務 概論

---

## 著作権 ＝ 「作った人の もの」

<div class="ng">

### ❌ NG
- ネット の画像 を 勝手に 使う
- 他人の コード を コピペ
- 音楽 / フォント の 無断使用

</div>

<div class="ok" style="margin-top:14px">

### ✅ OK
- 自分で 作ったもの
- フリー素材（**ライセンス確認**）
- オープンソース（**ライセンス遵守**）
- **引用**（出典明記）

</div>

---

## 個人情報保護法（日本）

<div class="card">

### 集めて 良い 情報・ダメな情報

</div>

<br>

- **収集**：何を 集めるか **目的を 明示**
- **同意**：ユーザー の <b>同意</b> を 取る
- **保存**：必要な分だけ 最短期間
- **第三者提供**：原則 NG（同意 必要）

<br>

→ <b>「集めない が 一番 安全」</b>！

---

## 利用規約 ＋ プライバシーポリシー

<div class="grid2">
<div class="card">

### 📜 利用規約
- やっていい / ダメ
- 違反時の 対応
- 免責 事項

</div>
<div class="card">

### 🔒 プライバシーポリシー
- どんな 情報を 集める
- なぜ 集める
- 第三者 提供
- 削除請求 方法

</div>
</div>

<br>

→ 公開 サービスは <b>両方 必須</b>！ ひな型 から 始めて 弁護士 に 確認。

---

## まずは ひな型 から

<div class="card">

### 信頼できる ひな型 サイト

</div>

<br>

- **Kiyac**（無料 ひな型 ジェネレータ）
- **政府 ガイドライン**（個人情報保護委員会）
- **GitHub Open Source Templates**

<br>

→ コピペ で 終わらず、 <b>自分の サービスに 合わせて 修正</b>！

---

<!-- _class: section -->

# 7. ハンズオン
## 改善計画

---

<!-- _class: handson -->

## やることリスト（40分）

| ステップ | やる事 | 時間 |
|---|---|---|
| ① | デプロイ済みアプリ の **ログを 5分 観察** | 5分 |
| ② | 家族・友人に <b>使ってもらって 感想収集</b> | 15分 |
| ③ | フィードバック を 4分類 | 5分 |
| ④ | <b>優先度マトリクス</b> に 配置 | 5分 |
| ⑤ | **P0 / P1** を **GitHub Issues** に 登録 | 10分 |

---

<!-- _class: handson -->

## 「これで コース 完了」 の 判定

<div class="ok">

### ✅ 全部 達成 で <b>真の 修了</b>

- ✅ Webサービス を **設計→実装→テスト→公開**
- ✅ **チーム** で 1回以上 開発
- ✅ **コードレビュー** を 1回以上
- ✅ **テスト** を 1本以上 書いた
- ✅ **本物の URL** を 持っている
- ✅ **改善計画** を 立てた

</div>

---

<!-- _class: section -->

# 8. コース全体<br>ふり返り

---

## 上級 4回 で 身についたこと

<div class="grid2">
<div class="card">

### 📐 設計
- ユーザーストーリー
- DB / API
- ER図

</div>
<div class="card">

### 💻 実装
- Git ブランチ・PR
- 認証・ハッシュ
- セキュリティ

</div>
</div>

<div class="grid2" style="margin-top:14px">
<div class="card">

### 🧪 テスト
- pytest / Jest
- TDD
- CI/CD

</div>
<div class="card">

### 📊 運用
- ログ・監視
- 優先度
- 法務・マネタイズ

</div>
</div>

---

## 中学生プログラミング塾 <b>全12回</b> 修了

<div class="card">

### 初級 → 中級 → 上級

</div>

<br>

- **初級**：Python / 文法 / 1ファイル
- **中級**：Webアプリ / DB前 / 1人開発
- **上級**：チーム / DB / テスト / 公開

<br>

→ ここまで来た 君は <b>本物の エンジニア の卵</b>！

---

## これから の キャリア

<div class="grid3">
<div class="card">

### 🏫 進学
- 工業高校 / 高専
- 専門学校
- 情報系 大学

</div>
<div class="card">

### 💼 仕事
- インターン
- フリーランス
- 起業

</div>
<div class="card">

### 🌍 コミュニティ
- OSS 貢献
- 勉強会
- ハッカソン

</div>
</div>

---

<!-- _class: section -->

# 9. 修了！

---

## 修了証

<div class="cert">

# 🏆 修　了　証

### 上記の者は<br><b>中学生プログラミング塾・上級コース</b> を<br>修了したことを 証します

<br>

「設計 → 実装 → テスト → 公開 → 運用」<br>
の <b>1サイクル</b> を やり遂げた

</div>

---

## 講師から の 最後 の メッセージ

<div class="card">

### 「**動くものを 出し続ける**」 が プロ

</div>

<br>

- 完璧 を 待つと <b>1つも 出ない</b>
- 70点で **公開**、 改善は <b>後から</b>
- バグも 失敗も、**作りつづける 燃料**

<br>

→ 君が 作る Webサービスを、<b>世界 が 待っている</b>！

---

## 大事 な 3つの こと

<div class="grid3">
<div class="card">

### 🤝 人と つながる
GitHub で フォロー<br>勉強会 に 参加

</div>
<div class="card">

### 📚 学び続ける
新技術は <b>毎月 出る</b><br>1日 15分でも

</div>
<div class="card">

### ❤️ 楽しむ
楽しい から<br>続けられる

</div>
</div>

---

<!-- _class: finale -->

# 🎓 おめでとう！

### 全12回 完全 制覇

<br>

これからも <b>作って 公開して</b><br>
世界を 少しずつ <b>良くしていって</b> ください！

<br>

🚀 君の 次の 一歩を、 楽しみに しています ！
