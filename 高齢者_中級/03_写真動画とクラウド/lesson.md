---
marp: true
theme: default
paginate: true
size: 16:9
header: '高齢者向けパソコン教室 ／ 中級 第3回'
footer: '写真・動画とクラウド'
style: |
  :root {
    --c-primary: #00838F;
    --c-secondary: #FFA000;
    --c-accent: #43A047;
    --c-warn: #C62828;
    --c-dark: #263238;
    --c-light: #F5F7F8;
  }
  section {
    background: var(--c-light);
    color: var(--c-dark);
    font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif;
    font-size: 28px;
    line-height: 1.7;
    padding: 60px;
  }
  section h1 { color: var(--c-primary); font-size: 56px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 44px; margin-bottom: 24px; }
  section h3 { color: var(--c-accent); font-size: 32px; }
  section.title {
    background: linear-gradient(135deg, #00838F 0%, #43A047 100%);
    color: white; text-align: center;
  }
  section.title h1 { color: white; font-size: 72px; }
  section.section {
    background: var(--c-dark); color: white; text-align: center;
  }
  section.section h1 { color: var(--c-secondary); font-size: 64px; }
  section.handson { background: #E0F2F1; }
  section.handson h1 { color: var(--c-primary); }
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
  .tip { background: #FFF8E1; border-left: 8px solid var(--c-secondary);
    padding: 16px 22px; border-radius: 8px; font-size: 28px; }
  .badge {
    display: inline-block; padding: 6px 18px; border-radius: 999px;
    color: white; font-weight: bold; font-size: 22px;
  }
  .badge.private { background: var(--c-warn); }
  .badge.link { background: var(--c-secondary); color: var(--c-dark); }
  .badge.family { background: var(--c-accent); }
  .badge.public { background: #C62828; }
---

<!-- _class: title -->

# 写真・動画 と<br>クラウド

### 第3回 ／ 高齢者向け パソコン教室・中級

<br>

きょうは **スマホの 写真** を<br>
家族と **共有** します 📸☁️

---

## 前回の 復習

<div class="grid2">
<div class="card">

### 前回（第2回）
**Excel** で 家計簿<br>
SUM 関数 と グラフ

</div>
<div class="card">

### 今回（第3回）
**スマホの写真** を<br>
家族と **共有** する

</div>
</div>

<br>

「**孫の運動会**」 を 遠くの 家族に 見せられる！

---

## きょうのゴール

- ✅ **クラウド** が なんとなく わかる
- ✅ **Google フォト**（または iCloud）の 使い方
- ✅ スマホの写真を **パソコンで 見る**
- ✅ **家族と 5枚 共有** できる
- ✅ **共有範囲** の 違いがわかる（公開／家族のみ など）

---

<!-- _class: section -->

# 1. クラウド って 何？

---

## クラウド ＝ 「ネット上の 巨大な 倉庫」

<div class="big">☁️</div>

<br>

写真や 文書を、 自分の パソコン だけでなく、<br>
**インターネットの 向こうの 倉庫** に 預けておく。<br>
いつでも、 どこからでも、 取り出せる！

---

## なぜ クラウドを 使うのか

<div class="grid2">
<div class="ng">

### 😣 クラウドが ない時代
- スマホが 壊れたら **写真 ぜんぶ 消える**
- パソコンに 移すのが **大変**
- 家族に 見せたくても **送るのが 面倒**

</div>
<div class="ok">

### 😊 クラウドが ある今
- スマホが 壊れても **写真は 無事**
- **自動で バックアップ**
- 家族に **リンク1つで 共有**

</div>
</div>

---

## クラウドの しくみ（イメージ）

<div class="card">

```
[スマホ] ──写真──▶ ☁️ ◀──写真──── [パソコン]
                    │
                    └──◀──── [家族の スマホ]
```

</div>

<br>

→ **真ん中の ☁️** に みんなが アクセスする！

---

<!-- _class: section -->

# 2. 主要 サービス

---

## 4つの 大きな サービス

<div class="grid4">
<div class="card" style="text-align:center;border-top:6px solid #4285F4">

### 🟦 Googleフォト
- Android向き
- 15GB まで 無料
- 検索が 賢い

</div>
<div class="card" style="text-align:center;border-top:6px solid #A2AAAD">

### 🍎 iCloud
- iPhone 向き
- 5GB まで 無料
- 自動同期 がラク

</div>
<div class="card" style="text-align:center;border-top:6px solid #0078D4">

### 🟦 OneDrive
- Windows 向き
- 5GB まで 無料
- Office と 連携

</div>
<div class="card" style="text-align:center;border-top:6px solid #FF9900">

### 🟧 Amazon Photos
- Prime 会員 向き
- **写真は 無制限**
- 動画は 5GB

</div>
</div>

---

## どれを 選べば いい？

<div class="card">

### スマホの メーカー で 選ぶ のが ラク

</div>

<br>

- **iPhone** → **iCloud**（最初から ある）
- **Android** → **Google フォト**（最初から ある）
- **Windows パソコン中心** → **OneDrive**
- **Amazon プライム** 会員 → **Amazon Photos**（写真 無制限！）

---

## 容量（ようりょう）の 話

<div class="card">

### 1GB（ギガバイト） ＝ だいたい <b>写真 300枚</b>

</div>

<br>

- 15GB（Googleフォト 無料）＝ 約 **4,500枚**
- 5GB（iCloud 無料）＝ 約 **1,500枚**

<br>

→ 「ぜんぜん 足りない！」と 感じたら **有料プラン**（月 200円〜）。

---

## 有料 プラン の 目安

| 容量 | だいたい 写真 | 料金 |
|---|---|---|
| 100 GB | 30,000枚 | 月 250円 |
| 200 GB | 60,000枚 | 月 380円 |
| 2 TB | 60万枚 | 月 1,300円 |

<br>

→ 始めは 無料で 試して、 **足りなくなったら** 有料に！

---

<!-- _class: section -->

# 3. 写真を クラウドに 送る

---

## スマホから（自動で）

<div class="card step">

### 一度 設定すれば、 撮った 写真が <b>勝手に</b> 入る

</div>

<br>

設定の しかた：
- **iPhone**：設定 → 写真 → **iCloud写真 オン**
- **Android**：Googleフォト アプリ → 右上 アイコン → **バックアップ オン**

<br>

→ あとは **何もしなくて OK**！

---

## パソコンから（手動で）

<div class="card step">

### 1. <b>photos.google.com</b> を 開く
### 2. ログイン（Gメールアドレス）
### 3. <b>「アップロード」</b> ボタン → 写真を 選ぶ
### 4. <b>待つ</b>（写真の 数だけ 時間）

</div>

---

## スマホの 写真を パソコンで 見る

<div class="big">📱 → 💻</div>

<br>

**iCloud / Googleフォト 経由 が 一番 ラク**！

<br>

1. スマホで バックアップ済み
2. パソコンで **同じアカウント** で ログイン
3. → スマホで 撮った 写真が **そのまま 見える**！

---

<!-- _class: section -->

# 4. 整理 する

---

## アルバム を 作る

<div class="card step">

### 1. 写真を <b>えらぶ</b>（複数 OK）
### 2. <b>「アルバムに 追加」</b>
### 3. アルバム名（例：<b>「孫の運動会 2026」</b>）

</div>

<br>

→ あとから「孫の運動会」 で **一発で 探せる**！

---

## 検索 が とても 便利

<div class="card">

### Googleフォト で 「<b>桜</b>」 と 検索 → 桜の 写真だけ

</div>

<br>

- **「孫」**（顔認識）
- **「東京」**（場所）
- **「2024年 12月」**（日付）

<br>

→ 何千枚 あっても **一瞬で 見つかる**！

---

## お気に入り（★） で 仕分け

<div class="card">

### 大切な 写真は <b>★</b> を つける

</div>

<br>

- 子・孫の 節目
- 旅行 の ベスト ショット
- 記念日

<br>

→ お気に入りだけ 別アルバムで まとめて 印刷も OK！

---

<!-- _class: section -->

# 5. 家族と 共有する

---

## 共有 ＝ 「リンクを 送る」

<div class="card step">

### 1. 共有したい 写真 / アルバムを <b>えらぶ</b>
### 2. <b>「共有」</b> ボタン
### 3. <b>「リンクを 取得」</b>
### 4. リンクを LINE / メール で 送る！

</div>

<br>

→ 相手は **ログイン不要** で 見られる！

---

## 共有範囲（はんい） ＝ <b>大事</b>

<div class="grid2">
<div class="card" style="text-align:center">

### <span class="badge private">🔒 自分のみ</span>
誰にも 見えない<br>
（最初は これ）

</div>
<div class="card" style="text-align:center">

### <span class="badge family">👨‍👩‍👧 家族</span>
指定した <b>家族だけ</b><br>
（おすすめ）

</div>
</div>

<div class="grid2" style="margin-top:14px">
<div class="card" style="text-align:center">

### <span class="badge link">🔗 リンクを 知る人</span>
リンクを 知れば 誰でも<br>
（注意 必要）

</div>
<div class="card" style="text-align:center">

### <span class="badge public">🌍 公開</span>
インターネット 全員<br>
（<b>絶対 NG</b>）

</div>
</div>

---

## 共有 する とき の 心構え

<div class="ng">

### 「リンクを 知る人」 は 危険 な ことも

- リンクが **転送されたら** 知らない人にも 届く
- 子・孫の **顔が はっきり 写った 写真** は 「家族」 限定 推奨
- **学校・住所・名札** が 写っていないか チェック

</div>

---

## LINE で リンクを 送る 方法

<div class="card step">

### 1. リンクを <b>長押し</b> → コピー
### 2. LINE で 家族の トーク を 開く
### 3. メッセージ欄に <b>貼り付け</b>（長押し → 貼り付け）
### 4. <b>送信</b>！

</div>

<br>

→ 家族の スマホで **タップ するだけ** で 写真が 見える！

---

<!-- _class: section -->

# 6. やってみよう
## 35分 で 家族と 共有

---

<!-- _class: handson -->

## ステップ表（35分）

| ステップ | やること | 時間 |
|---|---|---|
| ① | Googleフォト / iCloud にログイン | 5分 |
| ② | スマホから バックアップ確認 | 5分 |
| ③ | 写真を <b>5枚 えらぶ</b> | 5分 |
| ④ | <b>アルバム</b> を 作る（例：孫の○○） | 5分 |
| ⑤ | <b>「共有」</b> → リンクを 取得 | 5分 |
| ⑥ | LINE で 家族に 送る | 5分 |
| ⑦ | 家族から「見えた！」の 返信を 待つ | 5分 |

---

<!-- _class: handson -->

## 困った とき

<div class="card">

### ❓ アップロード が 終わらない
→ Wi-Fi 接続を 確認。 写真の数が 多いと 数十分かかる事も

</div>

<div class="card">

### ❓ 「容量が いっぱい」 と 出る
→ <b>古い動画</b> を 削除 or <b>有料プラン</b> に

</div>

<div class="card">

### ❓ 家族が「見えない」 と 言う
→ 共有範囲が <b>「自分のみ」</b> のまま かも。 確認！

</div>

---

<!-- _class: warn -->

# ⚠️ 安全 の ひと言

---

## 共有 の 取り消し も できる

<div class="card">

### 「やっぱり 公開 やめたい」 が <b>後から できる</b>

</div>

<br>

- 共有設定 → **「リンクを 無効化」**
- リンクが 死んで、誰も 見られなく なる

<br>

→ **不安なら すぐ 取り消し**！ ためらわない。

---

## クラウド アカウント の パスワード

<div class="ng">

### ぜったいに 守る

- パスワード を <b>家族 以外</b> に 教えない
- 「乗っ取りメール」 が 来ても <b>パスワード を 入れない</b>
- 怪しい メールは <b>すぐ 削除</b>

</div>

<div class="ng" style="margin-top:14px">

### <b>2段階認証</b> を つける

- ログイン時に <b>スマホに 確認コード</b> が 来る
- 設定で 1回 ONに しておけば 安全！

</div>

---

## クラウド と 個人情報

<div class="tip">

### 💡 顔写真 と 個人情報

写真の **顔・名札・住所** は 個人情報。<br>
**公開** は 絶対 避ける。<br>
家族共有 でも、**孫が 嫌がる写真は 共有しない**。

</div>

---

<!-- _class: section -->

# 7. まとめ

---

## 今日 できたこと

1. **クラウド** ＝ ネット上の 大きな 倉庫
2. **Google フォト / iCloud** で 写真を 保存
3. スマホから **自動 バックアップ**
4. **アルバム** で 整理 ／ **検索** で 一発
5. **リンク** で 家族と 共有
6. **共有範囲** を 必ず 確認！

---

## おうちで やってみる

<div class="card">

### 📸 こんな 共有が できる！

- **孫の 入学式** → 親戚に 一斉に
- **旅行先の 写真** → 行けなかった 家族に
- **法事の 集合写真** → 親族で 共有
- **古い アルバム を スキャン** → 兄弟と 共有
- **庭の 花の 成長記録** → 友人に

</div>

---

## 次回予告

<div class="big">📞 💬</div>

# 第4回｜ビデオ通話 と SNS の基本

**ZOOM / LINE / Google Meet** で<br>
**離れた 家族と 顔を 見て 話す**！<br>
最後に **詐欺・偽警告 の 復習** も。

---

<!-- _class: title -->

# おつかれさま でした 📸✨

### 「家族と つながる人」 に なりました

<br>

家に 帰って、<br>
**お孫さんの 写真 1枚** から<br>
家族に 送って みてください！
