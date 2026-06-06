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
  const contactForm = document.querySelector("[data-contact-form]");
  const contactStatus = document.querySelector("[data-contact-status]");
  const contactMessage = document.querySelector("#contact-message");
  const messageCount = document.querySelector("[data-message-count]");

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

  function createLink(className, href, label, options = {}) {
    const link = createElement("a", className, label);
    link.href = href.startsWith("#") ? href : encodePath(href);
    if (options.download) link.setAttribute("download", "");
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
      item.append(createLink("", material.path, "HTMLをダウンロード", { download: true }));
      container.append(item);
    });
  }

  function createDownloadLink(download, label, className = "download-link") {
    if (!download.exists) {
      return createElement("span", `${className} disabled`, "準備中");
    }
    return createLink(className, download.path, label, { download: true });
  }

  function renderLessonRow(lesson) {
    const row = createElement("div", "lesson-row");
    row.append(createElement("span", "lesson-number", String(lesson.number)));

    const content = createElement("div", "lesson-content");
    content.append(createElement("strong", "", lesson.title));
    if (lesson.theme) content.append(createElement("span", "", lesson.theme));

    const downloadRow = createElement("div", "download-row");
    downloadRow.append(createDownloadLink(lesson.download, "教材をダウンロード"));
    content.append(downloadRow);

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

    const actions = createElement("div", "course-actions");
    actions.append(createDownloadLink(course.download, "まとめてダウンロード", "download-link primary"));
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

  function updateMessageCount() {
    if (!contactMessage || !messageCount) return;
    messageCount.textContent = `${contactMessage.value.length} / 2000`;
  }

  function buildIssueUrl(category, subject, message) {
    const body = [
      "## お問い合わせ種別",
      category,
      "",
      "## お問い合わせ内容",
      message,
      "",
      "---",
      "静的教材カタログのお問い合わせフォームから作成されました。",
    ].join("\n");
    const params = new URLSearchParams({
      title: `[問い合わせ] ${subject}`,
      body,
      labels: "question",
    });
    return `${data.repository.issuesUrl}/new?${params.toString()}`;
  }

  function bindContactForm() {
    if (!contactForm || !contactStatus || !contactMessage) return;
    contactMessage.addEventListener("input", updateMessageCount);
    updateMessageCount();

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      contactStatus.className = "form-status";
      contactStatus.textContent = "";

      if (!contactForm.checkValidity()) {
        contactStatus.classList.add("error");
        contactStatus.textContent = "未入力または入力条件を満たしていない項目があります。";
        contactForm.reportValidity();
        return;
      }

      const formData = new FormData(contactForm);
      const category = String(formData.get("category") || "").trim();
      const subject = String(formData.get("subject") || "").trim();
      const message = String(formData.get("message") || "").trim();

      if (subject.length < 3 || message.length < 10) {
        contactStatus.classList.add("error");
        contactStatus.textContent = "件名は3文字以上、内容は10文字以上で入力してください。";
        return;
      }

      if (/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(`${subject} ${message}`)) {
        contactStatus.classList.add("error");
        contactStatus.textContent = "メールアドレスを含む内容は送信できません。個人情報を除いてください。";
        return;
      }

      const issueUrl = buildIssueUrl(category, subject, message);
      contactStatus.classList.add("success");
      contactStatus.textContent = "GitHubで内容を確認する画面を開きます。";
      window.location.assign(issueUrl);
    });
  }

  function init() {
    if (!data || !catalog || !resultLine) return;
    renderStats();
    renderFilterButtons("[data-audience-filters]", data.audiences, "audience");
    renderFilterButtons("[data-level-filters]", data.levels, "level");
    renderAudiences();
    renderOptionalMaterials();
    bindSearch();
    bindContactForm();
    renderCatalog();
  }

  init();
})();
