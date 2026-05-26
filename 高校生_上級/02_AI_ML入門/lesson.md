---
marp: true
theme: default
paginate: true
size: 16:9
header: '高校生プログラミング塾 ／ 上級 第2回'
footer: 'AI/ML 入門'
style: |
  :root {
    --c-primary:   #1E40AF;
    --c-secondary: #EAB308;
    --c-accent:    #CA8A04;
    --c-warn:      #DC2626;
    --c-dark:      #0C0A09;
    --c-light:     #FAFAF9;
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
  section.handson { background: #FEFCE8; }
  section.handson h1 { color: var(--c-accent); }
  section.quiz { background: #FEFCE8; }
  section.quiz h1 { color: var(--c-secondary); }
  section.warn { background: #FEF2F2; }
  section.warn h1 { color: var(--c-warn); }
  .card { background: white; border-radius: 14px; padding: 18px 24px; margin: 12px 0; box-shadow: 0 4px 0 rgba(0,0,0,.08); }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .ok  { background: #FEF9C3; border-left: 6px solid var(--c-accent);    padding: 12px 18px; border-radius: 6px; }
  .ng  { background: #FEF2F2; border-left: 6px solid var(--c-warn);      padding: 12px 18px; border-radius: 6px; }
  .tip { background: #FEFCE8; border-left: 6px solid var(--c-secondary); padding: 12px 18px; border-radius: 6px; }
  .code { background: var(--c-dark); color: #E2E8F0; border-radius: 8px; padding: 14px 18px; font-family: 'JetBrains Mono','SF Mono','Menlo',monospace; font-size: 17px; line-height: 1.7; overflow-x: auto; }
  .code .key { color: #FDE68A; }
  .code .str { color: #FCD34D; }
  .code .num { color: #93C5FD; }
  .code .com { color: #94A3B8; font-style: italic; }
  .code .type{ color: #FCD34D; }
---

<!-- _class: title -->

# AI / ML 入門

### 第2回 ／ 高校生プログラミング塾・上級

<br>

きょうは **scikit-learn / Hugging Face / LangChain / RAG** で<br>**AI を 使う側 ＋ 作る側** ！ 🧠🤖🔮

---

## 前回の復習

<div class="grid3">
<div class="card">

### 🏛️ アーキ選定
モノリス / モジュラー / マイクロ

</div>
<div class="card">

### 📐 DDD
ユビキタス言語 / 集約 / 境界

</div>
<div class="card">

### 🧱 ヘキサゴナル
外側 が 内側 に 依存、 ポート＆アダプタ

</div>
</div>

---

<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ AI / ML の **全体地図** を 持つ
古典 ML / 深層学習 / LLM / RAG / Agent

</div>
<div class="card">

### ✅ scikit-learn で **1モデル 動かす**
データ → 分類 / 回帰 → 評価

</div>
<div class="card">

### ✅ LangChain で **LLM + RAG** を 1個
自分の 知識ベース に GPT を 接続

</div>

---

<!-- _class: section -->

# 1. AI / ML 全体地図

---

## 用語整理

<div class="grid2">
<div class="card">

### AI（Artificial Intelligence）
人間 の 知能 を 模倣 する **広い** 概念

### ML（Machine Learning）
データ から **パターン を 学ぶ** 手法

</div>
<div class="card">

### 深層学習（Deep Learning）
**ニューラルネット が 多層**（特徴量 を 自動 学習）

### LLM（Large Language Model）
**巨大 な 言語 モデル**（GPT / Claude / Llama）

</div>
</div>

---

## ML の 3カテゴリ

<div class="grid3">
<div class="card">

### 教師あり学習
**正解付き データ** から 学ぶ
- 分類（スパム判定）
- 回帰（価格予測）

</div>
<div class="card">

### 教師なし学習
**正解 なし**、 構造 を 発見
- クラスタリング
- 次元削減

</div>
<div class="card">

### 強化学習
**報酬** を 最大化 する 行動 を 学習
- ゲーム AI
- ロボット制御

</div>
</div>

---

## 「古典 ML を スキップ する な」

<div class="card">

LLM が 何でも できる ように 見えるが、 **実務 の 8割 は 古典 ML で 解決可能**:

- ユーザー の 離脱 予測 → ロジスティック回帰
- 商品 の 価格 設定   → 線形回帰 / XGBoost
- カテゴリ自動分類 → ナイーブベイズ / SVM
- 異常検知            → Isolation Forest
- 推薦                → 協調フィルタ / 行列分解

</div>

<div class="ok">

⭕ **速い / 軽い / 解釈可能**<br>
⭕ LLM が 高価・遅い・幻覚 する シーン で 大活躍

</div>

---

## scikit-learn の 基本フロー

<div class="code">
<span class="key">from</span> sklearn.model_selection <span class="key">import</span> train_test_split
<span class="key">from</span> sklearn.linear_model <span class="key">import</span> <span class="type">LogisticRegression</span>
<span class="key">from</span> sklearn.metrics <span class="key">import</span> accuracy_score

<span class="com"># 1. データ 分割</span>
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=<span class="num">0.2</span>, random_state=<span class="num">42</span>)

<span class="com"># 2. モデル 学習</span>
model = <span class="type">LogisticRegression</span>()
model.fit(X_train, y_train)

<span class="com"># 3. 予測 + 評価</span>
y_pred = model.predict(X_test)
<span class="key">print</span>(accuracy_score(y_test, y_pred))
</div>

---

## 実例：アヤメ 分類

<div class="code">
<span class="key">from</span> sklearn.datasets <span class="key">import</span> load_iris
<span class="key">from</span> sklearn.ensemble <span class="key">import</span> <span class="type">RandomForestClassifier</span>
<span class="key">from</span> sklearn.model_selection <span class="key">import</span> train_test_split

iris = load_iris()
X, y = iris.data, iris.target
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=<span class="num">0.2</span>)

model = <span class="type">RandomForestClassifier</span>(n_estimators=<span class="num">100</span>)
model.fit(X_tr, y_tr)

<span class="key">print</span>(<span class="str">"精度:"</span>, model.score(X_te, y_te))
<span class="com"># 精度: 0.9667（150件 で 97%）</span>
</div>

---

## 評価指標（分類）

<div class="grid2">
<div class="card">

### Accuracy
正答 ÷ 全件

⚠️ **不均衡データ で 意味なし**
（99% スパム ない データ で 「全部 通常」 で 99%）

</div>
<div class="card">

### Precision / Recall / F1
- **Precision**: スパム と 判定 した うち 本当に スパム
- **Recall**: 本物 スパム の うち 検出できた
- **F1**: 両者 の 調和平均

</div>
</div>

---

<!-- _class: quiz -->

## クイズ

「がん検査」 の AI で **重要 な のは どっち？**

- A. **Recall（見逃さない）**
- B. Precision（誤陽性 を 減らす）
- C. どちら も 同じ
- D. Accuracy

---

## こたえ

<div class="ok">

**こたえ: A（Recall）**

「がん 見逃し」 と 「健康な 人 を がん と 誤判定」 で **損失 が 全然 違う**:

- **見逃し（FN）**: 治療 遅れ、 命 に 関わる
- **誤陽性（FP）**: 精密検査 で 確認 すれば OK

→ **Recall を 高く**（FN を 最小化）。 Precision は 多少 下げて OK。

逆に **スパム判定** は Precision 重視（誤判定 で 重要メール を スパム箱 に 入れたく ない）。

**評価指標 ＝ ビジネス の 損失 関数**。

</div>

---

<!-- _class: section -->

# 2. 深層学習（Deep Learning）

---

## ニューラルネット 1分 で

<div class="card">

```
入力層    →   中間層   →   中間層   →   出力層
[28x28]      [128]        [64]         [10]
画像          隠れ層       隠れ層        0〜9 の どれか
```

各 層 は **重み付き 和 ＋ 活性化関数**（ReLU など）。
**誤差逆伝播法** で 重み を 自動調整。

</div>

---

## 主要 タスク と モデル

<div class="grid3">
<div class="card">

### 画像
- 分類: ResNet / EfficientNet
- 検出: YOLO
- 生成: Stable Diffusion

</div>
<div class="card">

### 音声 / 動画
- 音声認識: Whisper
- TTS: ElevenLabs
- 動画生成: Sora

</div>
<div class="card">

### 言語
- 分類: BERT
- 生成: GPT / Claude / Llama
- 翻訳: NLLB / MarianMT

</div>
</div>

---

## Hugging Face Hub

<div class="card">

**Hugging Face** ＝ 「AI モデル の GitHub」。
60万+ モデル / 12万+ データセット が 無料 で 使える。

</div>

<div class="code">
<span class="key">from</span> transformers <span class="key">import</span> pipeline

<span class="com"># 1行 で 日本語 感情分析</span>
clf = pipeline(<span class="str">"sentiment-analysis"</span>, model=<span class="str">"daigo/bert-base-japanese-sentiment"</span>)
<span class="key">print</span>(clf(<span class="str">"今日 は とても 楽しい！"</span>))
<span class="com"># [{'label': 'ポジティブ', 'score': 0.9876}]</span>

<span class="com"># 翻訳</span>
trans = pipeline(<span class="str">"translation"</span>, model=<span class="str">"Helsinki-NLP/opus-mt-ja-en"</span>)
<span class="key">print</span>(trans(<span class="str">"こんにちは、 世界"</span>))
<span class="com"># [{'translation_text': 'Hello, world'}]</span>
</div>

---

## Fine-tuning（微調整）

<div class="card">

既存 モデル を **自分の データ で 追加学習**。 0 から 学習 する より **何百倍 安く 速い**。

</div>

<div class="code">
<span class="key">from</span> transformers <span class="key">import</span> <span class="type">AutoTokenizer</span>, <span class="type">AutoModelForSequenceClassification</span>, <span class="type">Trainer</span>

model = <span class="type">AutoModelForSequenceClassification</span>.from_pretrained(<span class="str">"bert-base-uncased"</span>, num_labels=<span class="num">2</span>)
tokenizer = <span class="type">AutoTokenizer</span>.from_pretrained(<span class="str">"bert-base-uncased"</span>)

<span class="com"># 自分の データセット を 用意</span>
train_dataset = ...  <span class="com"># 例: 自社レビュー データ</span>

trainer = <span class="type">Trainer</span>(model=model, train_dataset=train_dataset, ...)
trainer.train()
</div>

<div class="tip">

💡 学習 は **GPU 必須**。 Google Colab 無料枠 の T4 で 小規模 なら OK。

</div>

---

<!-- _class: section -->

# 3. LLM（Large Language Model）

---

## LLM の しくみ（ざっくり）

<div class="card">

**「次の トークン を 予測」 を 何兆回 繰り返した モデル**。

トークン ≒ 単語 の 一部（GPT4 は 1トークン ≒ 3〜4文字 日本語）。

```
"今日 は 良い"  →  予測: "天気" / "日" / "気分" ...
"今日 は 良い 天気"  →  予測: "です" / "だ" / "ね" ...
```

</div>

<div class="ok">

⭕ コーパス が 巨大（数兆 トークン）<br>
⭕ パラメータ も 巨大（GPT-4: 推定 1兆+）

</div>

---

## 「使う側」：プロンプト 設計

<div class="grid2">
<div class="card">

### NG
「いい感じ に まとめて」

→ 抽象すぎて 出る もの が 期待外れ

</div>
<div class="card">

### OK
「以下 の 議事録 を、 **小学生 でも わかる 言葉** で、 **300字以内** で 要約。 **箇条書き は 使わず 段落 で**。」

→ 制約 が 明確 で 良い出力

</div>
</div>

---

## プロンプト の 4要素

<div class="grid2">
<div class="card">

### 1. 役割 / 文脈
「あなたは 経験豊富 な 編集者 です」

### 2. タスク
「次の 文章 を 校正 して」

</div>
<div class="card">

### 3. 制約
「敬語 で / 500字 以内 / Markdown 形式」

### 4. 例
「Before / After を 1組 示す」（Few-shot）

</div>
</div>

---

## OpenAI / Anthropic API

<div class="code">
<span class="key">from</span> openai <span class="key">import</span> <span class="type">OpenAI</span>
client = <span class="type">OpenAI</span>(api_key=os.environ[<span class="str">"OPENAI_API_KEY"</span>])

response = client.chat.completions.create(
    model=<span class="str">"gpt-4o-mini"</span>,
    messages=[
        {<span class="str">"role"</span>: <span class="str">"system"</span>, <span class="str">"content"</span>: <span class="str">"あなたは 親切な 数学教師 です"</span>},
        {<span class="str">"role"</span>: <span class="str">"user"</span>,   <span class="str">"content"</span>: <span class="str">"二次方程式 を 高校生 に 説明して"</span>},
    ],
    temperature=<span class="num">0.7</span>,
    max_tokens=<span class="num">500</span>,
)
<span class="key">print</span>(response.choices[<span class="num">0</span>].message.content)
</div>

---

## Anthropic（Claude）

<div class="code">
<span class="key">import</span> anthropic
client = anthropic.<span class="type">Anthropic</span>()

message = client.messages.create(
    model=<span class="str">"claude-sonnet-4-6"</span>,
    max_tokens=<span class="num">1024</span>,
    messages=[
        {<span class="str">"role"</span>: <span class="str">"user"</span>, <span class="str">"content"</span>: <span class="str">"二次方程式 を 高校生 に 説明して"</span>}
    ],
)
<span class="key">print</span>(message.content[<span class="num">0</span>].text)
</div>

<div class="tip">

💡 **API 課金 に 注意**！ ループ で 流す と **数千円 が 一瞬**。 必ず `max_tokens` で 上限、 ログ で 使用量 を 監視。

</div>

---

## 幻覚（Hallucination）

<div class="ng">

❌ LLM は **平気で 嘘 を 言う**:
- 存在 しない 論文 / 書籍 を 引用
- 数値 を 適当 に 生成
- ありもしない API メソッド を 提案

</div>

<div class="ok">

⭕ **ファクトチェック** を 自分で 必ず<br>
⭕ **コード提案** は 実行 + テスト で 検証<br>
⭕ **数値 / 引用** は 一次ソース 確認

</div>

---

<!-- _class: section -->

# 4. RAG（Retrieval-Augmented Generation）

---

## なぜ RAG が 必要 か

<div class="card">

LLM は:
- **学習時点 まで** の 知識 しか ない（最新 ニュース 知らない）
- **自社固有** の 知識 を 知らない（社内文書 / 製品マニュアル）
- **幻覚** で 嘘 を 言う

→ **検索 → 文脈 を 渡して 生成** ＝ **RAG**

</div>

---

## RAG の フロー

<div class="code">
質問: <span class="str">"今年の 売上推移 は？"</span>
   ↓
<span class="com"># 1. 検索（Vector Search）</span>
ベクトル化 → 社内 文書 DB から 関連 5件 取得
   ↓
<span class="com"># 2. プロンプト 組み立て</span>
<span class="str">"以下 の 文脈 を 参考 に、 質問 に 答えて
[文脈] 2026Q1 売上: 10億... 2026Q2: 12億...
[質問] 今年の 売上推移 は？"</span>
   ↓
<span class="com"># 3. LLM が 生成</span>
<span class="str">"2026Q1 は 10億円、 Q2 は 12億円 で 前期比 20% 増です"</span>
</div>

---

## ベクトル DB

<div class="grid3">
<div class="card">

### Pinecone
SaaS、 速い、 無料枠 あり

</div>
<div class="card">

### Qdrant / Weaviate
OSS、 自前運用 可

</div>
<div class="card">

### pgvector
PostgreSQL 拡張、 既存 DB と 統合

</div>
</div>

<div class="tip">

💡 小規模 なら **ChromaDB / FAISS** で ローカル開始 OK。 数十万件 超えたら クラウド DB。

</div>

---

## LangChain で 最短 RAG

<div class="code">
<span class="key">from</span> langchain_community.vectorstores <span class="key">import</span> <span class="type">Chroma</span>
<span class="key">from</span> langchain_openai <span class="key">import</span> <span class="type">OpenAIEmbeddings</span>, <span class="type">ChatOpenAI</span>
<span class="key">from</span> langchain.chains <span class="key">import</span> <span class="type">RetrievalQA</span>

<span class="com"># 1. 文書 を ベクトル化 して 保存</span>
embeddings = <span class="type">OpenAIEmbeddings</span>()
docs = load_my_documents()  <span class="com"># 自分の Markdown / PDF など</span>
db = <span class="type">Chroma</span>.from_documents(docs, embeddings)

<span class="com"># 2. 質問 → 検索 → LLM</span>
qa = <span class="type">RetrievalQA</span>.from_chain_type(
    llm=<span class="type">ChatOpenAI</span>(model=<span class="str">"gpt-4o-mini"</span>),
    retriever=db.as_retriever(),
)
<span class="key">print</span>(qa.invoke(<span class="str">"このプロジェクトの 主要技術 は？"</span>))
</div>

---

## LangChain の 強み と 注意点

<div class="grid2">
<div class="card">

### 強み
- LLM / 埋め込み / DB を **抽象化**
- Tool 呼び出し / メモリ
- LangSmith で **観測**

</div>
<div class="card">

### 注意点
- API が **頻繁 に 変わる**
- 「抽象化 が 邪魔」 と いう 声 も
- 単純 用途 なら **直接 OpenAI SDK** が シンプル

</div>
</div>

---

## Agent（自律的 タスク 実行）

<div class="card">

LLM に **ツール を 持たせて 自律的 に 実行**。

例: 「2026年 の 日本 の 出生数 を 調べて」
→ LLM が `web_search` ツール を 呼ぶ → 結果 を 解釈 → 「85万人」 と 回答

</div>

<div class="code">
<span class="key">from</span> langchain.agents <span class="key">import</span> create_react_agent, <span class="type">AgentExecutor</span>
<span class="key">from</span> langchain.tools <span class="key">import</span> <span class="type">Tool</span>

tools = [
    <span class="type">Tool</span>(name=<span class="str">"web_search"</span>, func=search_web, description=<span class="str">"Web 検索"</span>),
    <span class="type">Tool</span>(name=<span class="str">"calculator"</span>, func=calc, description=<span class="str">"数値計算"</span>),
]
agent = create_react_agent(llm, tools, prompt)
executor = <span class="type">AgentExecutor</span>(agent=agent, tools=tools)
executor.invoke({<span class="str">"input"</span>: <span class="str">"2026年 の 日本 の 出生数 ÷ 47都道府県 ="</span>})
</div>

---

<!-- _class: section -->

# 5. MLOps の 基本

---

## 「動く モデル」 と 「動き続ける モデル」

<div class="grid2">
<div class="card">

### 学習時
- データ 収集
- 特徴量 設計
- モデル 学習
- 評価

</div>
<div class="card">

### 運用時
- 推論 サーバ（API）
- データ ドリフト 監視
- 再学習 パイプライン
- A/B テスト

</div>
</div>

---

## モデル のバージョン管理

<div class="ok">

⭕ **MLflow / Weights & Biases / DVC** で:
- 学習 ハイパーパラメータ
- データセット バージョン
- 評価指標
- 学習済み 重みファイル

全部 記録、 後から **「あの 0.95 精度 モデル どう 学習 した？」** を 再現可能。

</div>

---

## エッジ vs クラウド 推論

<div class="grid2">
<div class="card">

### クラウド
- GPU 強力
- モデル 大きい OK
- ネット 必須、 遅延 あり

</div>
<div class="card">

### エッジ（端末）
- ネット 不要
- プライバシー 強い
- モデル 小さい 必要（量子化 / 蒸留）

</div>
</div>

<div class="tip">

💡 iOS は **Core ML**、 Android は **TensorFlow Lite**、 Web は **transformers.js** で エッジ 推論 可能

</div>

---

<!-- _class: handson -->

## ハンズオン: 自分の ドメイン で 1モデル

<div class="step">

1. **Google Colab** を 開く（GPU 無料枠）
2. scikit-learn で **アヤメ分類 を 動かして** 全体フロー を 体感
3. 自分の 興味 ある 分野 で データセット を 1つ 選ぶ
   （Kaggle / Hugging Face / 政府統計）
4. **scikit-learn** で 分類 or 回帰 を 1個 学習
5. 精度 を 計測、 別 モデル 試して 比較
6. （任意）Hugging Face の 既存 モデル を 1個 試す
7. （任意）LangChain で 自分の Markdown を RAG に
8. 学んだこと を ノートブック に 記録、 GitHub に push

</div>

---

<!-- _class: warn -->

## 気をつけること

<div class="ng">

❌ **個人情報** を AI に 送る：氏名 / 住所 / 病歴 / カード番号

</div>

<div class="ng">

❌ **学習データ の バイアス**：偏った データ ＝ 偏った AI

</div>

<div class="ng">

❌ **AI 過信**：判断 を 全部 AI に 任せる、 説明責任 を 放棄

</div>

<div class="ok">

⭕ **PII（個人識別情報）は 匿名化** してから 入れる<br>
⭕ **学習データ の 偏り** を 検証<br>
⭕ **最終判断 は 人間**、 AI は 補助

</div>

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

<div class="grid3">
<div class="card">

### 1️⃣ AI/ML 全体地図
古典ML / 深層学習 / LLM / RAG / Agent。 「使うべき場面」 を 識別。

</div>
<div class="card">

### 2️⃣ scikit-learn / Hugging Face
1モデル を 自分で 動かす、 既存モデル を 活用。

</div>
<div class="card">

### 3️⃣ LLM ＋ RAG
プロンプト 設計、 ベクトル DB、 LangChain で 知識ベース 接続。

</div>
</div>

---

## 次回予告

<div class="card">

### 第3回｜起業・OSS・キャリア
**プロダクト企画 / 法人化 / 知財 / OSS貢献 / 就職活動**。 卒業後 の 選択肢 を 並べて、 自分の 道 を 選ぶ ための 材料 を 提供。 GitHub プロフィール 整備、 キャリアシート 作成 も。

</div>

<div class="tip">

📚 おすすめの宿題:
- Kaggle の入門コース を 1本
- 自分の 興味分野 で 1モデル 動かす
- LangChain で 自分のメモ を RAG 化

</div>

---

<!-- _class: title -->

# おつかれさまでした 👏

### AI / ML を **自分の 手** で 動かせる ように！<br>次回 「起業・OSS・キャリア」 で お会いしましょう。
