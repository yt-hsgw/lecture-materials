---
marp: true
theme: default
paginate: true
size: 16:9
header: '{{COURSE_NAME}} ／ {{LEVEL}} 第{{LESSON_NUMBER}}回'
footer: '{{TITLE}}'
style: |
  /* ============================================
   * 配色トークン（コースごとに上書き）
   * ============================================
   *  --c-primary  : 主役色（H1/H2 / hero グラデ起点）
   *  --c-secondary: 副色 （divider タイトル / アクセントバッジ）
   *  --c-accent   : 強調色（handson / ok / 成功）
   *  --c-warn     : 警告色（warn / ng / エラー）
   *  --c-dark     : 暗色 （divider 背景 / code 背景）
   *  --c-light    : 明色 （section 背景）
   *
   * 推奨パレット例:
   *   小学生・初級  primary:#3A86FF secondary:#FFD166 accent:#06D6A0 warn:#EF476F dark:#24323D light:#F3F8FF
   *   小学生・中級  primary:#FF6B6B secondary:#FFD93D accent:#6BCB77 warn:#E63946 dark:#22223B light:#FFF8F0
   *   小学生・上級  primary:#7209B7 secondary:#F72585 accent:#4CC9F0 warn:#E63946 dark:#1D1A2F light:#F8F4FF
   *   中学生・初級  primary:#1D4ED8 secondary:#F59E0B accent:#10B981 warn:#DC2626 dark:#0F172A light:#F1F5F9
   *   中学生・中級  primary:#0E7490 secondary:#F97316 accent:#22C55E warn:#DC2626 dark:#0C4A6E light:#F0F9FF
   *   中学生・上級  primary:#6D28D9 secondary:#06B6D4 accent:#10B981 warn:#DC2626 dark:#0F172A light:#F8FAFC
   *   高齢者・初級  primary:#1565C0 secondary:#F9A825 accent:#2E7D32 warn:#C62828 dark:#102A43 light:#F5F8FB
   *   高齢者・中級  primary:#00695C secondary:#FFA000 accent:#388E3C warn:#C62828 dark:#003D33 light:#F1F8F6
   *   高齢者・上級  primary:#5E35B1 secondary:#FFA726 accent:#26A69A warn:#D32F2F dark:#1A237E light:#F7F5FA
   */

  :root {
    --c-primary:   #3A86FF;
    --c-secondary: #FFD166;
    --c-accent:    #06D6A0;
    --c-warn:      #EF476F;
    --c-dark:      #24323D;
    --c-light:     #F3F8FF;
  }

  section {
    background: var(--c-light);
    color: #1A1A2E;
    font-family: 'Hiragino Sans', 'Hiragino Maru Gothic ProN', 'Yu Gothic', sans-serif;
    font-size: 28px;
    line-height: 1.7;
    padding: 56px;
  }
  section h1 { color: var(--c-primary); font-size: 56px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 40px; margin-bottom: 18px; }
  section h3 { color: var(--c-accent);  font-size: 28px; }

  /* ─── スライドテーマ ─── */
  section.title {
    background: linear-gradient(135deg, var(--c-primary), var(--c-dark));
    color: white; text-align: center;
  }
  section.title h1 { color: white; font-size: 72px; }

  section.section {
    background: var(--c-dark); color: white; text-align: center;
  }
  section.section h1 { color: var(--c-secondary); font-size: 64px; }

  section.handson { background: #E9FFF8; }
  section.handson h1 { color: var(--c-accent); }

  section.quiz { background: #FFF8E1; }
  section.quiz h1 { color: var(--c-secondary); }

  section.warn { background: #FFEBEE; }
  section.warn h1 { color: var(--c-warn); }

  section.finale {
    background: linear-gradient(135deg, var(--c-primary), var(--c-accent), var(--c-secondary));
    color: white; text-align: center;
  }
  section.finale h1 { color: white; font-size: 60px; }

  /* ─── 部品 ─── */
  .card {
    background: white; border-radius: 14px;
    padding: 18px 24px; margin: 12px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.08);
  }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .grid4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }

  .big      { font-size: 80px; text-align: center; line-height: 1; }
  .step     { font-size: 30px; }
  .step b   { color: var(--c-primary); }

  .ok  { background: #E0F2F1; border-left: 6px solid var(--c-accent);    padding: 12px 18px; border-radius: 6px; }
  .ng  { background: #FFEBEE; border-left: 6px solid var(--c-warn);      padding: 12px 18px; border-radius: 6px; }
  .tip { background: #FFF3E0; border-left: 6px solid var(--c-secondary); padding: 12px 18px; border-radius: 6px; }

  /* コード（中学生・上級以上で使用） */
  .code {
    background: var(--c-dark); color: #E2E8F0;
    border-radius: 8px; padding: 12px 16px;
    font-family: 'JetBrains Mono','SF Mono','Menlo',monospace;
    font-size: 18px; line-height: 1.7; overflow-x: auto;
  }
  .code .key { color: #C4B5FD; }
  .code .str { color: #FDBA74; }
  .code .num { color: #6EE7B7; }
  .code .com { color: #94A3B8; font-style: italic; }

  /* 2×2 マトリクス（優先度 / 比較 / 4象限 など） */
  .matrix {
    display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
    background: var(--c-dark); padding: 8px; border-radius: 10px;
  }
  .matrix > div { background: white; padding: 14px; border-radius: 8px; text-align: center; }
  .matrix > div b { display: block; color: var(--c-primary); font-size: 18px; margin-bottom: 4px; }

  /* 修了証（最終回で使用） */
  .cert {
    background: linear-gradient(135deg, #FFFBEB, #E0F2F1);
    border: 5px double var(--c-primary);
    border-radius: 14px; padding: 26px; text-align: center;
    box-shadow: 0 4px 18px rgba(0,0,0,.12);
  }
  .cert h2 { color: var(--c-primary); letter-spacing: 6px; font-size: 36px; }
  .cert .name {
    display: inline-block; font-size: 30px; font-weight: bold;
    color: var(--c-accent); padding: 8px 28px;
    border-top: 3px solid var(--c-primary);
    border-bottom: 3px solid var(--c-primary);
    margin: 12px 0;
  }
---

<!-- ============================================
     1. タイトル
     ============================================ -->
<!-- _class: title -->

# {{TITLE}}

### 第{{LESSON_NUMBER}}回 ／ {{COURSE_NAME}}・{{LEVEL}}

<br>

{{INTRO_LINE}}

---

<!-- ============================================
     2. 前回の復習
     ============================================ -->

## 前回の復習

<div class="grid3">
<div class="card">

### {{REVIEW_TITLE_1}}
{{REVIEW_BODY_1}}

</div>
<div class="card">

### {{REVIEW_TITLE_2}}
{{REVIEW_BODY_2}}

</div>
<div class="card">

### {{REVIEW_TITLE_3}}
{{REVIEW_BODY_3}}

</div>
</div>

---

<!-- ============================================
     3. きょうのゴール
     ============================================ -->
<!-- _class: section -->

# きょうのゴール

---

## きょうのゴール

<div class="card">

### ✅ {{GOAL_1}}

</div>
<div class="card">

### ✅ {{GOAL_2}}

</div>
<div class="card">

### ✅ {{GOAL_3}}

</div>

---

<!-- ============================================
     4. セクション 1
     ============================================ -->
<!-- _class: section -->

# 1. {{TOPIC_1_TITLE}}

---

## {{TOPIC_1_HEADING}}

{{TOPIC_1_DESCRIPTION}}

<div class="grid2">
<div class="card">

### {{TOPIC_1_POINT_A}}
{{TOPIC_1_POINT_A_BODY}}

</div>
<div class="card">

### {{TOPIC_1_POINT_B}}
{{TOPIC_1_POINT_B_BODY}}

</div>
</div>

---

<!-- _class: quiz -->

## クイズ

{{QUESTION_1}}

- A. {{CHOICE_1A}}
- B. {{CHOICE_1B}}
- C. {{CHOICE_1C}}

---

## こたえ

<div class="ok">

**こたえ: {{ANSWER_1}}**
{{ANSWER_1_REASON}}

</div>

---

<!-- ============================================
     5. セクション 2
     ============================================ -->
<!-- _class: section -->

# 2. {{TOPIC_2_TITLE}}

---

## {{TOPIC_2_HEADING}}

{{TOPIC_2_DESCRIPTION}}

<!-- 上級向け: コードを見せるとき
<div class="code">
<span class="key">def</span> hello(name):
    <span class="key">return</span> <span class="str">"Hello, "</span> + name
</div>
-->

---

<!-- _class: handson -->

## ハンズオン

<div class="step">

1. **{{STEP_1}}**
2. **{{STEP_2}}**
3. **{{STEP_3}}**

</div>

<div class="tip">
💡 ヒント: {{HANDSON_HINT}}
</div>

---

<!-- ============================================
     6. セクション 3（オプション）
     ============================================ -->
<!-- _class: section -->

# 3. {{TOPIC_3_TITLE}}

---

## {{TOPIC_3_HEADING}}

{{TOPIC_3_DESCRIPTION}}

<div class="matrix">
<div><b>{{MATRIX_LABEL_TL}}</b>{{MATRIX_BODY_TL}}</div>
<div><b>{{MATRIX_LABEL_TR}}</b>{{MATRIX_BODY_TR}}</div>
<div><b>{{MATRIX_LABEL_BL}}</b>{{MATRIX_BODY_BL}}</div>
<div><b>{{MATRIX_LABEL_BR}}</b>{{MATRIX_BODY_BR}}</div>
</div>

---

<!-- ============================================
     7. 気をつけること（任意）
     ============================================ -->
<!-- _class: warn -->

## 気をつけること

<div class="ng">

❌ {{WARN_1}}

</div>

<div class="ng">

❌ {{WARN_2}}

</div>

<div class="ok">

⭕ {{SAFE_PRACTICE}}

</div>

---

<!-- ============================================
     8. まとめ
     ============================================ -->
<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

<div class="grid3">
<div class="card">

### 1️⃣ {{SUMMARY_TITLE_1}}
{{SUMMARY_BODY_1}}

</div>
<div class="card">

### 2️⃣ {{SUMMARY_TITLE_2}}
{{SUMMARY_BODY_2}}

</div>
<div class="card">

### 3️⃣ {{SUMMARY_TITLE_3}}
{{SUMMARY_BODY_3}}

</div>
</div>

---

<!-- ============================================
     9. 次回予告（最終回でない場合）
     ============================================ -->

## 次回予告

<div class="card">

### 第{{NEXT_LESSON_NUMBER}}回｜{{NEXT_LESSON_TITLE}}
{{NEXT_LESSON_DESCRIPTION}}

</div>

<div class="tip">
📚 おすすめの宿題: {{HOMEWORK}}
</div>

---

<!-- ============================================
     10. クロージング
     ============================================ -->
<!-- _class: title -->

# おつかれさまでした 👏

### また次回お会いしましょう！

<!-- ============================================
     【最終回のみ】 修了証スライドを追加
     ============================================
<!-- _class: finale -->

# 🎓 修了 おめでとう！

<div class="cert">

## 修 了 証

<div class="name">{{STUDENT_NAME}}</div>

あなたは {{COURSE_NAME}}・{{LEVEL}}コース（全4回）を<br>
最後までやり遂げました。

<br>

{{COMPLETION_DATE}}<br>
{{INSTRUCTOR_NAME}}

</div>
-->
