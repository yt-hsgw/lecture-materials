#!/usr/bin/env node
/**
 * 既存の教材ディレクトリから、静的LP/教材カタログ用のデータを生成する。
 *
 * 使い方:
 *   node scripts/generate-site-data.mjs
 *   node scripts/generate-site-data.mjs --check
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, "..");
const OUTPUT = path.join(ROOT, "assets", "site-data.js");
const CHECK_ONLY = process.argv.includes("--check");

const AUDIENCE_ORDER = ["小学生", "中学生", "高校生", "高齢者"];
const LEVEL_ORDER = ["初級", "中級", "上級"];

const COURSE_COLORS = {
  "小学生_初級": "#FF6B6B",
  "小学生_中級": "#FF8C1A",
  "小学生_上級": "#7C4DFF",
  "中学生_初級": "#2563EB",
  "中学生_中級": "#4F46E5",
  "中学生_上級": "#6D28D9",
  "高校生_初級": "#475569",
  "高校生_中級": "#1E3A8A",
  "高校生_上級": "#1E40AF",
  "高齢者_初級": "#2E7D32",
  "高齢者_中級": "#00838F",
  "高齢者_上級": "#5E35B1",
};

const AUDIENCE_DESCRIPTIONS = {
  小学生: "体験重視で、パソコン・Web・プログラミング・AIを広く知る",
  中学生: "Webアプリ、設計、Git、テストまで段階的に接続する",
  高校生: "型、TDD、チーム開発、アーキテクチャ、AI/MLまで広げる",
  高齢者: "日常利用、安全なインターネット、AI活用、行政・金融の電子化を扱う",
};

function cleanMarkdown(value) {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/[`*_~]/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripCell(value) {
  return cleanMarkdown(value.replace(/^:?-+:?$/, ""));
}

function readMarkdown(file) {
  return existsSync(file) ? readFileSync(file, "utf8") : "";
}

function findCourseGoal(markdown) {
  const match = markdown.match(/## このコースのゴール\s*([\s\S]*?)(?=\n## |\n---|\s*$)/);
  if (!match) return "";

  const lines = match[1]
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith("|"))
    .filter((line) => !line.startsWith("-"))
    .filter((line) => !line.startsWith(">"));

  const firstParagraph = lines.find((line) => !line.startsWith("#")) || "";
  const cleaned = cleanMarkdown(firstParagraph);
  return cleaned.length > 120 ? `${cleaned.slice(0, 117)}...` : cleaned;
}

function findCourseTitle(markdown, fallback) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? cleanMarkdown(match[1]) : fallback;
}

function parseSchedule(markdown) {
  const rows = new Map();
  const section = markdown.match(/## 本編スケジュール[\s\S]*?(?=\n## |\s*$)/);
  if (!section) return rows;

  for (const line of section[0].split("\n")) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("|")) continue;
    const cells = trimmed
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map(stripCell);

    const number = Number(cells[0]);
    if (!Number.isInteger(number)) continue;
    rows.set(number, {
      title: cells[1] || "",
      theme: cells[2] || "",
      handson: cells[3] || "",
    });
  }

  return rows;
}

function lessonTitleFromDirectory(directoryName) {
  return directoryName.replace(/^\d+_/, "").replaceAll("_", " ");
}

function parseCourse(directoryName) {
  const match = directoryName.match(/^(小学生|中学生|高校生|高齢者)_(初級|中級|上級)$/);
  if (!match) return null;

  const [, audience, level] = match;
  const coursePath = path.join(ROOT, directoryName);
  const overviewPath = path.join(coursePath, "00_カリキュラム概要.md");
  const overviewMarkdown = readMarkdown(overviewPath);
  const schedule = parseSchedule(overviewMarkdown);

  const lessonDirectories = readdirSync(coursePath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => /^\d+_/.test(name))
    .sort((a, b) => a.localeCompare(b, "ja"));

  const lessons = lessonDirectories.map((lessonDirectory) => {
    const number = Number(lessonDirectory.match(/^(\d+)_/)?.[1] || 0);
    const row = schedule.get(number) || {};
    const lessonPath = `${directoryName}/${lessonDirectory}/lesson.md`;
    const interactivePath = `${directoryName}/${lessonDirectory}/interactive.html`;
    const screenshotPath = `docs/screenshots/${directoryName}/${lessonDirectory}.png`;

    return {
      number,
      directory: lessonDirectory,
      title: row.title || lessonTitleFromDirectory(lessonDirectory),
      theme: row.theme || "",
      handson: row.handson || "",
      materials: {
        lesson: {
          path: lessonPath,
          exists: existsSync(path.join(ROOT, lessonPath)),
        },
        interactive: {
          path: interactivePath,
          exists: existsSync(path.join(ROOT, interactivePath)),
        },
        screenshot: {
          path: screenshotPath,
          exists: existsSync(path.join(ROOT, screenshotPath)),
        },
      },
    };
  });

  return {
    id: directoryName,
    directory: directoryName,
    audience,
    level,
    title: findCourseTitle(overviewMarkdown, `${audience} ${level}`),
    goal: findCourseGoal(overviewMarkdown) || AUDIENCE_DESCRIPTIONS[audience],
    color: COURSE_COLORS[directoryName] || "#334155",
    overviewPath: `${directoryName}/00_カリキュラム概要.md`,
    lessonCount: lessons.length,
    lessons,
  };
}

function parseOptionalMaterials() {
  const optionalRoot = path.join(ROOT, "小学生_初級", "オプション教材");
  if (!existsSync(optionalRoot)) return [];

  return readdirSync(optionalRoot, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => /^\d+_.*\.html$/.test(name))
    .sort((a, b) => a.localeCompare(b, "ja"))
    .map((fileName) => {
      const number = Number(fileName.match(/^(\d+)_/)?.[1] || 0);
      return {
        number,
        title: fileName.replace(/^\d+_/, "").replace(/\.html$/, ""),
        path: `小学生_初級/オプション教材/${fileName}`,
      };
    });
}

function buildSiteData() {
  const courses = readdirSync(ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => parseCourse(entry.name))
    .filter(Boolean)
    .sort((a, b) => {
      const audienceDiff = AUDIENCE_ORDER.indexOf(a.audience) - AUDIENCE_ORDER.indexOf(b.audience);
      if (audienceDiff !== 0) return audienceDiff;
      return LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level);
    });

  const lessonCount = courses.reduce((sum, course) => sum + course.lessons.length, 0);
  const materialCount = courses.reduce(
    (sum, course) =>
      sum +
      course.lessons.reduce((lessonSum, lesson) => {
        return (
          lessonSum +
          Number(lesson.materials.lesson.exists) +
          Number(lesson.materials.interactive.exists)
        );
      }, 0),
    0,
  );

  return {
    schemaVersion: 1,
    repository: {
      name: "lecture-materials",
      url: "https://github.com/yt-hsgw/lecture-materials",
      issuesUrl: "https://github.com/yt-hsgw/lecture-materials/issues",
    },
    support: {
      note: "教材はMIT Licenseで公開し、支援は任意です。金銭支援先が未設定の場合は、Issue、PR、授業での利用報告が支援になります。",
      links: [
        {
          label: "改善提案を送る",
          href: "https://github.com/yt-hsgw/lecture-materials/issues",
          kind: "github",
        },
        {
          label: "支援方法を見る",
          href: "https://github.com/yt-hsgw/lecture-materials/blob/main/SUPPORT.md",
          kind: "support",
        },
      ],
    },
    counts: {
      audiences: AUDIENCE_ORDER.length,
      levels: LEVEL_ORDER.length,
      courses: courses.length,
      lessons: lessonCount,
      materials: materialCount,
      optionalMaterials: parseOptionalMaterials().length,
    },
    audiences: AUDIENCE_ORDER.map((name) => ({
      name,
      description: AUDIENCE_DESCRIPTIONS[name],
    })),
    levels: LEVEL_ORDER,
    courses,
    optionalMaterials: parseOptionalMaterials(),
  };
}

function renderDataFile(data) {
  return `// Generated by scripts/generate-site-data.mjs. Do not edit manually.\nwindow.LESSON_SITE_DATA = ${JSON.stringify(
    data,
    null,
    2,
  )};\n`;
}

const nextContent = renderDataFile(buildSiteData());

if (CHECK_ONLY) {
  const currentContent = existsSync(OUTPUT) ? readFileSync(OUTPUT, "utf8") : "";
  if (currentContent !== nextContent) {
    console.error("assets/site-data.js is out of date. Run: node scripts/generate-site-data.mjs");
    process.exit(1);
  }
  console.log("assets/site-data.js is up to date");
} else {
  mkdirSync(path.dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, nextContent);
  console.log(`Generated ${path.relative(ROOT, OUTPUT)}`);
}
