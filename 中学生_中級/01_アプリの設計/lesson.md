---
marp: true
theme: default
paginate: true
size: 16:9
header: '中学生プログラミング塾 ／ 中級 第1回'
footer: 'アプリの設計'
style: |
  :root {
    --c-primary: #4F46E5; --c-secondary: #F59E0B; --c-accent: #10B981;
    --c-warn: #EF4444; --c-dark: #0F172A; --c-light: #F8FAFC;
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
    font-size: 18px; line-height: 1.6; }
  .code .key { color: #C4B5FD; }
  .code .str { color: #FDBA74; }
  .code .num { color: #6EE7B7; }
  .code .com { color: #64748B; font-style: italic; }
  .pill { display: inline-block; padding: 3px 12px; border-radius: 999px;
    font-size: 14px; font-weight: bold; background: var(--c-primary); color: white; margin: 2px; }
  .pill.s { background: var(--c-secondary); color: var(--c-dark); }
  .pill.a { background: var(--c-accent); }
  .pill.w { background: var(--c-warn); }
  .pill.gray { background: #94A3B8; }
  .wire { background: white; border: 2px dashed var(--c-primary); border-radius: 10px;
    padding: 16px; min-height: 160px; }
  .wire .box { background: #E2E8F0; border: 1.5px solid #94A3B8;
    border-radius: 4px; padding: 8px 12px; margin: 6px 0; font-size: 14px; color: #475569; }
  .wire .btn { background: var(--c-primary); color: white; border-radius: 4px;
    padding: 6px 14px; display: inline-block; font-size: 13px; font-weight: bold; }
  .step { display: flex; align-items: center; gap: 12px; background: white;
    border-radius: 10px; padding: 12px 16px; box-shadow: 0 2px 8px rgba(15,23,42,.06); margin: 6px 0; }
  .step .n { background: var(--c-primary); color: white; width: 32px; height: 32px;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-weight: bold; flex-shrink: 0; font-size: 14px; }
---

<!-- _class: title -->

# アプリの 設計

### 第1回 ／ 中学生プログラミング塾・中級

<br>

きょうから **「設計してから作る」** スタート 📐⚙️

---

## 中級コース へようこそ

<div class="grid2">
<div class="card">

### 初級まで
- 文法を **覚える**
- 1ファイルの スクリプト
- 「**書ける**」がゴール

</div>
<div class="card" style="border-left:6px solid var(--c-primary)">

### 中級では
- **設計の質** を上げる
- 複数ファイル ＋ サーバー
- 「**設計できる**」がゴール

</div>
</div>

<br>

つくる題材：**TODOアプリ**（タスク管理）

---

## 全4回 スケジュール

| 回 | テーマ | やる事 |
|---|---|---|
| 1 | **アプリの設計** | 要件・画面・データ ← きょう |
| 2 | フロントエンド実装 | HTML/CSS/JS で 画面 |
| 3 | バックエンド入門 | Python Flask で API |
| 4 | テスト・Git・公開 | DevTools / git commit |

---

## きょうのゴール

- ✅ **要件定義** が 3行で 書ける
- ✅ **ワイヤフレーム**（画面の絵）を 描ける
- ✅ **データモデル**（JSON）を 設計できる
- ✅ TODOアプリの **企画書1枚** が完成
- ✅ 友だちに **30秒で 説明** できる

> ⚠️ きょうは **コードを 書きません**！

---

<!-- _class: section -->

# 1. なぜ 設計するのか

---

## いきなりコードを書くと…

<div class="ng">

### ❌ よくある 失敗

- 何を作るか **途中で 変わる** → 書き直し
- 機能が **どんどん増える** → 終わらない
- データの **形が ぐちゃぐちゃ** → バグ多発

</div>

<br>

→ プロが **設計に 時間をかける** のは、こうならない ため。

---

## 設計 ＝ 「3つの ものを 決める」

<div class="grid3">
<div class="card" style="border-top:5px solid var(--c-primary);text-align:center">
<div style="font-size:40px">📋</div>
<h3>① 要件</h3>
<p style="font-size:14px;color:#475569">何が できる？</p>
</div>
<div class="card" style="border-top:5px solid var(--c-secondary);text-align:center">
<div style="font-size:40px">🖼️</div>
<h3>② 画面</h3>
<p style="font-size:14px;color:#475569">どう見える？</p>
</div>
<div class="card" style="border-top:5px solid var(--c-accent);text-align:center">
<div style="font-size:40px">💾</div>
<h3>③ データ</h3>
<p style="font-size:14px;color:#475569">何を 保存？</p>
</div>
</div>

<br>

この3つが 決まれば、**実装は 半分 終わったも 同然**！

---

<!-- _class: section -->

# 2. 要件定義<br>3行で 書く

---

## 「だれが・どうやって・何ができる」

<div class="card">

```
[だれ] が
[いつ／どこで] 
[何が できる]
```

</div>

<br>

これが **要件定義** の 最小単位。 3行に まとめる。

---

## TODOアプリの 要件 例

<div class="ok">

### ✅ 良い例

```
中学生が
スマホで宿題の進捗を 管理するために
タスクを 追加・完了・削除 できる
```

</div>

<br>

<div class="ng">

### ❌ ぼんやり例

```
すごい TODO アプリ
```

</div>

---

## 「やらないこと」 も 決める

<div class="card">

### スコープ（範囲）を 区切る

</div>

<div class="grid2">
<div class="ok">

### 🟢 やる
- タスク 追加
- 完了 チェック
- 削除
- ローカル保存

</div>
<div class="ng">

### 🔴 やらない
- ユーザー登録
- 複数人 共有
- リマインダ通知
- 期限管理

</div>
</div>

> 「やらない」を 決めると、**実装が ぐっと 軽くなる**。

---

<!-- _class: section -->

# 3. 画面設計<br>ワイヤフレーム

---

## ワイヤフレーム ＝ 「画面の 設計図」

<div class="big">📐</div>

絵は **下手でOK**！ どこに 何が 置かれるか が 分かれば 十分。

<br>

**紙＋えんぴつ** が いちばん 速い。

---

## ローファイ vs ハイファイ

<div class="grid2">
<div class="card">

### 📝 ローファイ（low-fi）
- えんぴつ書き
- 色なし
- **アイデア出し** 用

</div>
<div class="card">

### 🎨 ハイファイ（high-fi）
- ツール（Figma 等）
- 色つき
- **発注用** の 詳細図

</div>
</div>

<br>

→ 中級では **ローファイで OK**！

---

## TODOアプリの 画面（例）

<div class="grid2">
<div class="wire">
<div style="font-weight:bold;border-bottom:2px solid #4F46E5;padding-bottom:4px">📝 My Tasks</div>
<div style="display:flex;gap:6px;margin-top:8px">
<div class="box" style="flex:1;background:white">新しいタスクを 入力</div>
<div class="btn">追加</div>
</div>
<div class="box" style="display:flex;align-items:center;gap:8px">☐ 数学の宿題 <span style="margin-left:auto;color:#EF4444">×</span></div>
<div class="box" style="display:flex;align-items:center;gap:8px">☑ <s>歯みがき</s> <span style="margin-left:auto;color:#EF4444">×</span></div>
<div class="box" style="display:flex;align-items:center;gap:8px">☐ 部活 道具準備 <span style="margin-left:auto;color:#EF4444">×</span></div>
</div>
<div>
<h3>パーツの 役割</h3>

- **タイトル**：何のアプリか
- **入力欄＋追加ボタン**：新規追加
- **タスク行**：チェック ・本文・削除 ×

</div>
</div>

---

## 画面設計の コツ 3つ

<div class="grid3">
<div class="card">

### 🎯 大事なもの<br>を 大きく
ユーザーが まず 触る所

</div>
<div class="card">

### 👆 アクション<br>は 右側 / 下側
スマホの 親指が 届く所

</div>
<div class="card">

### 🧩 仲間 を<br>近くに 配置
関係ある UIは 集める

</div>
</div>

---

<!-- _class: section -->

# 4. データ設計<br>JSON で 書く

---

## アプリは 「データ」 を 持っている

<div class="big">💾</div>

TODOアプリの データは **「タスクの一覧」**。<br>
1つの タスクを **どう 表すか** を 決める！

---

## オブジェクト ＝ もの の「型」

<div class="card">

### 1つの タスクが 持つ もの は？

</div>

<br>

たぶん こんな感じ：

- 何のタスク？ → **内容**（文字列）
- 終わった？ → **完了フラグ**（true / false）
- どれが どれか 区別する → **ID**（数字）

---

## JSON で 書いて みる

<div class="code">
{
  <span class="key">"id"</span>: <span class="num">1</span>,
  <span class="key">"text"</span>: <span class="str">"数学の宿題"</span>,
  <span class="key">"done"</span>: <span class="num">false</span>
}
</div>

<br>

- **id** ＝ 1, 2, 3...（区別用）
- **text** ＝ タスクの内容
- **done** ＝ 終わったか？

---

## 一覧（配列） で 持つ

<div class="code">
[
  { <span class="key">"id"</span>: <span class="num">1</span>, <span class="key">"text"</span>: <span class="str">"数学の宿題"</span>, <span class="key">"done"</span>: <span class="num">false</span> },
  { <span class="key">"id"</span>: <span class="num">2</span>, <span class="key">"text"</span>: <span class="str">"歯みがき"</span>, <span class="key">"done"</span>: <span class="num">true</span> },
  { <span class="key">"id"</span>: <span class="num">3</span>, <span class="key">"text"</span>: <span class="str">"部活 道具準備"</span>, <span class="key">"done"</span>: <span class="num">false</span> }
]
</div>

<br>

これが **アプリの 状態（state）** ！

---

## なぜ ID が 必要？

<div class="tip">

### 💡 「同じ 内容」 でも 区別 したい

</div>

<br>

「歯みがき」 と 「歯みがき」 が 2つ あったら？<br>
名前だけだと **どっちを 消すか** わからない！

<br>

→ ID で **絶対に かぶらない名前** をつける。

---

## フィールド を 増やす？

<div class="card">

### 「あったら 便利」 を 全部 入れない！

</div>

<br>

例：期限・カテゴリ・優先度・タグ・メモ・添付ファイル…

<br>

→ いま 必要な **3つだけ** に。 追加したくなったら **後で 追加**。

---

<!-- _class: section -->

# 5. ハンズオン
## 50分で 企画書1枚

---

<!-- _class: handson -->

## やることリスト（50分）

| ステップ | やる事 | 時間 |
|---|---|---|
| ① | 自分が 困っている 事を 1つ 決める | 5分 |
| ② | 要件定義 を 3行で 書く | 10分 |
| ③ | 「やる／やらない」 を リスト化 | 5分 |
| ④ | ワイヤフレーム を 紙に 描く | 15分 |
| ⑤ | データモデル を JSON で 書く | 10分 |
| ⑥ | 友だちと **30秒 説明** | 5分 |

---

<!-- _class: handson -->

## 詰まったら やる事

<div class="card">

### ❓ 要件が ふんわり
→ **「だれが」「いつ」「何を」** の3つを 言葉に

</div>

<div class="card">

### ❓ 画面が 描けない
→ 似たアプリを **スマホで 開いて** マネする

</div>

<div class="card">

### ❓ データが 決まらない
→ **「画面に 出ている文字」** を 全部 リストアップ

</div>

---

<!-- _class: handson -->

## 注意：個人情報

<div class="ng">

### ⚠️ TODOアプリに 入れない データ

- 本名・住所・学校名・電話番号
- 家族の 名前
- パスワード・お金の 情報

</div>

<br>

→ サンプルデータも **「数学の宿題」「歯みがき」** など 当たり障りなく！

---

<!-- _class: section -->

# 6. レビュー会

---

## ピアレビュー の しかた

<div class="card">

### 1. **30秒** で 説明してもらう

### 2. 「**良い点**」 を 1つ 言う

### 3. 「**ここ どうする？**」 を 1つ 質問

### 4. ペア を 交代

</div>

<br>

> ダメ出し じゃなくて、 **「考えるきっかけ」** を 渡す。

---

## レビューで 聞かれがち な 質問

<div class="grid2">
<div class="card">

### 🙋 「データを どこに 保存？」
→ 次回（フロント） で **localStorage**<br>
→ 第3回 で **サーバーDB**

</div>
<div class="card">

### 🙋 「画面、 スマホ対応する？」
→ レスポンシブ で OK<br>
→ 中級は **PC優先** で

</div>
</div>

---

<!-- _class: section -->

# 7. まとめ

---

## 今日 できたこと

1. 設計＝ **要件・画面・データ** の 3つを 決めること
2. 要件は **「だれが・いつ・何が できる」** 3行で
3. ワイヤフレーム は **ローファイで** 十分
4. データモデル は **JSON** で 表現できる
5. **「やらないこと」** を 決めるのが 重要

---

## 次回までの 宿題

<div class="card">

### 📝 企画書 を 仕上げる（30分）

1. 今日の **企画書を 清書**
2. **似た アプリ** を 3つ 探して 違いを 書く
3. （余裕あれば） **追加の 機能** を 1つ メモ（実装は しない）

</div>

---

## 次回予告

<div class="big">💻 ⚛️</div>

# 第2回｜フロントエンド実装

設計した 画面を、**HTML / CSS / JavaScript** で 作る！<br>
`querySelector` `addEventListener` `localStorage` で<br>
**動く** TODOアプリ に。

---

<!-- _class: title -->

# 設計 おつかれさま 📐✨

### 「考えてから 書く」 への 第一歩

<br>

紙の上で 1時間 考えた分、<br>
実装は **3時間 速くなる** ！
