---
marp: true
theme: default
paginate: true
size: 16:9
header: '{{AUDIENCE}} ／ 第{{LESSON_NUMBER}}'
footer: '{{TITLE}}'
style: |
  :root {
    --c-primary: #3A86FF;
    --c-secondary: #FFD166;
    --c-accent: #06D6A0;
    --c-warn: #EF476F;
    --c-dark: #24323D;
    --c-light: #F3F8FF;
  }
  section {
    background: var(--c-light);
    color: var(--c-dark);
    font-family: 'Hiragino Maru Gothic ProN', 'M PLUS Rounded 1c', sans-serif;
    padding: 60px;
  }
  section h1 { color: var(--c-primary); font-size: 56px; border-bottom: none; }
  section h2 { color: var(--c-primary); font-size: 40px; }
  section h3 { color: var(--c-accent); font-size: 28px; }
  section.title {
    background: linear-gradient(135deg, var(--c-primary), var(--c-accent));
    color: white;
    text-align: center;
  }
  section.title h1 { color: white; font-size: 72px; }
  section.section {
    background: var(--c-dark);
    color: white;
    text-align: center;
  }
  section.section h1 { color: var(--c-secondary); font-size: 64px; }
  section.quiz { background: var(--c-secondary); }
  section.quiz h1 { color: var(--c-dark); }
  section.handson { background: #E9FFF8; }
  section.handson h1 { color: var(--c-accent); }
  .card {
    background: white;
    border-radius: 16px;
    padding: 20px 28px;
    margin: 12px 0;
    box-shadow: 0 4px 0 rgba(0,0,0,.08);
  }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .emoji-big { font-size: 150px; text-align: center; line-height: 1; }
---

<!-- _class: title -->

# {{TITLE}}

### 第{{LESSON_NUMBER}} ／ {{COURSE_NAME}}

{{INTRO_TEXT}}

---

## まえの回の復習

- {{REVIEW_POINT_1}}
- {{REVIEW_POINT_2}}
- {{REVIEW_POINT_3}}

---

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

<!-- _class: section -->

# 1. {{TOPIC_1}}

---

## {{SECTION_HEADING}}

{{DESCRIPTION}}

---

<!-- _class: quiz -->

## クイズ

{{QUESTION}}

---

## こたえ

{{ANSWER_AND_REASON}}

---

<!-- _class: section -->

# 2. {{TOPIC_2}}

---

## {{SECTION_HEADING}}

{{DESCRIPTION}}

---

<!-- _class: handson -->

## ハンズオン

1. {{STEP_1}}
2. {{STEP_2}}
3. {{STEP_3}}

---

<!-- _class: section -->

# まとめ

---

## きょう おぼえたこと

1. {{SUMMARY_1}}
2. {{SUMMARY_2}}
3. {{SUMMARY_3}}

---

<!-- _class: title -->

# おつかれさまでした

### {{NEXT_LESSON}}
