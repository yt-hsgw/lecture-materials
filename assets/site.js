(function () {
  const data = window.LESSON_SITE_DATA;
  const state = {
    audience: "all",
    level: "all",
    query: "",
  };

  const catalog = document.querySelector("[data-course-grid]");
  const resultLine = document.querySelector("[data-result-line]");
  const searchInput = document.querySelector("[data-search]");

  function encodePath(path) {
    return encodeURI(path);
  }

  function isExternalLink(href) {
    return /^https?:\/\//.test(href);
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function createLink(className, href, label) {
    const link = createElement("a", className, label);
    link.href = href.startsWith("#") ? href : encodePath(href);
    if (isExternalLink(href)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    return link;
  }

  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  }

  function lessonMatches(lesson, query) {
    const target = [lesson.title, lesson.theme, lesson.handson].join(" ").toLowerCase();
    return target.includes(query);
  }

  function courseMatches(course) {
    if (state.audience !== "all" && course.audience !== state.audience) return false;
    if (state.level !== "all" && course.level !== state.level) return false;

    const query = state.query.trim().toLowerCase();
    if (!query) return true;

    const courseTarget = [course.title, course.goal, course.audience, course.level].join(" ").toLowerCase();
    return courseTarget.includes(query) || course.lessons.some((lesson) => lessonMatches(lesson, query));
  }

  function visibleLessons(course) {
    const query = state.query.trim().toLowerCase();
    if (!query) return course.lessons;

    const courseTarget = [course.title, course.goal, course.audience, course.level].join(" ").toLowerCase();
    if (courseTarget.includes(query)) return course.lessons;
    return course.lessons.filter((lesson) => lessonMatches(lesson, query));
  }

  function renderStats() {
    setText("[data-stat-audiences]", data.counts.audiences);
    setText("[data-stat-courses]", data.counts.courses);
    setText("[data-stat-lessons]", data.counts.lessons);
    setText("[data-stat-materials]", data.counts.materials);
  }

  function renderFilterButtons(containerSelector, values, key) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    container.textContent = "";

    const allButton = createFilterButton("all", "すべて", key);
    container.append(allButton);

    values.forEach((value) => {
      container.append(createFilterButton(value.name || value, value.name || value, key));
    });
  }

  function createFilterButton(value, label, key) {
    const button = createElement("button", "filter-button", label);
    button.type = "button";
    button.dataset.filterKey = key;
    button.dataset.filterValue = value;
    button.setAttribute("aria-pressed", String(state[key] === value));
    button.addEventListener("click", () => {
      state[key] = value;
      document
        .querySelectorAll(`[data-filter-key="${key}"]`)
        .forEach((item) => item.setAttribute("aria-pressed", String(item.dataset.filterValue === value)));
      renderCatalog();
    });
    return button;
  }

  function renderAudiences() {
    const container = document.querySelector("[data-audience-grid]");
    if (!container) return;
    container.textContent = "";

    data.audiences.forEach((audience) => {
      const item = createElement("section", "audience-item");
      item.append(createElement("h3", "", audience.name));
      item.append(createElement("p", "", audience.description));
      container.append(item);
    });
  }

  function renderOptionalMaterials() {
    const container = document.querySelector("[data-optional-list]");
    if (!container) return;
    container.textContent = "";

    data.optionalMaterials.forEach((material) => {
      const item = createElement("article", "optional-item");
      item.append(createElement("h3", "", material.title));
      item.append(createElement("p", "", "小学生・初級の発展教材として使える単体HTMLです。"));
      item.append(createLink("", material.path, "教材を開く"));
      container.append(item);
    });
  }

  function renderSupportLinks() {
    const note = document.querySelector("[data-support-note]");
    if (note) note.textContent = data.support.note;

    const container = document.querySelector("[data-support-grid]");
    if (!container) return;
    container.textContent = "";

    data.support.links.forEach((supportLink) => {
      const item = createElement("article", "support-item");
      item.append(createElement("h3", "", supportLink.label));
      item.append(
        createElement(
          "p",
          "",
          supportLink.kind === "github"
            ? "Issueで改善提案、利用報告、相談を送れます。"
            : "任意支援と相談窓口の考え方を確認できます。",
        ),
      );
      item.append(createLink("", supportLink.href, "開く"));
      container.append(item);
    });
  }

  function createMaterialLink(material, label) {
    if (!material.exists) {
      return createElement("span", "material-link disabled", `${label}なし`);
    }
    return createLink("material-link", material.path, label);
  }

  function renderLessonRow(lesson) {
    const row = createElement("div", "lesson-row");
    row.append(createElement("span", "lesson-number", String(lesson.number)));

    const content = createElement("div", "lesson-content");
    content.append(createElement("strong", "", lesson.title));
    if (lesson.theme) content.append(createElement("span", "", lesson.theme));

    const links = createElement("div", "material-links");
    links.append(createMaterialLink(lesson.materials.lesson, "スライド"));
    links.append(createMaterialLink(lesson.materials.interactive, "体験HTML"));
    links.append(createMaterialLink(lesson.materials.screenshot, "画面"));
    content.append(links);

    row.append(content);
    return row;
  }

  function renderCourse(course) {
    const card = createElement("article", "course-card");
    card.style.setProperty("--course-color", course.color);

    const firstShot = course.lessons.find((lesson) => lesson.materials.screenshot.exists)?.materials.screenshot;
    if (firstShot) {
      const media = createElement("div", "course-shot");
      const image = document.createElement("img");
      image.src = encodePath(firstShot.path);
      image.alt = `${course.title} の教材画面`;
      image.loading = "lazy";
      media.append(image);
      card.append(media);
    }

    const body = createElement("div", "course-body");
    const meta = createElement("div", "course-meta");
    meta.append(createElement("span", "pill colored", course.audience));
    meta.append(createElement("span", "pill", course.level));
    meta.append(createElement("span", "pill", `${course.lessonCount}回`));
    body.append(meta);

    body.append(createElement("h3", "", course.title));
    body.append(createElement("p", "", course.goal));

    const actions = createElement("div", "material-links");
    actions.append(createLink("material-link", course.overviewPath, "概要"));
    actions.append(createLink("material-link", `${data.repository.url}/tree/main/${course.directory}`, "GitHub"));
    body.append(actions);

    const lessonList = createElement("div", "lesson-list");
    visibleLessons(course).forEach((lesson) => lessonList.append(renderLessonRow(lesson)));
    body.append(lessonList);

    card.append(body);
    return card;
  }

  function renderCatalog() {
    const courses = data.courses.filter(courseMatches);
    catalog.textContent = "";

    if (courses.length === 0) {
      catalog.append(createElement("p", "empty-state", "条件に合う教材が見つかりませんでした。"));
    } else {
      courses.forEach((course) => catalog.append(renderCourse(course)));
    }

    const visibleLessonCount = courses.reduce((sum, course) => sum + visibleLessons(course).length, 0);
    resultLine.textContent = `${courses.length}コース / ${visibleLessonCount}回を表示中`;
  }

  function bindSearch() {
    if (!searchInput) return;
    searchInput.addEventListener("input", (event) => {
      state.query = event.target.value;
      renderCatalog();
    });
  }

  function init() {
    if (!data || !catalog || !resultLine) return;
    renderStats();
    renderFilterButtons("[data-audience-filters]", data.audiences, "audience");
    renderFilterButtons("[data-level-filters]", data.levels, "level");
    renderAudiences();
    renderOptionalMaterials();
    renderSupportLinks();
    bindSearch();
    renderCatalog();
  }

  init();
})();
