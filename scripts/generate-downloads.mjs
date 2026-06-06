#!/usr/bin/env node
/**
 * 教材カタログ用のZIPを生成する。
 *
 * 使い方:
 *   node scripts/generate-downloads.mjs
 *   node scripts/generate-downloads.mjs --check
 */
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, "..");
const DOWNLOAD_ROOT = path.join(ROOT, "downloads");
const DOWNLOAD_TEMP_ROOT = path.join(ROOT, ".downloads.tmp");
const DOWNLOAD_BACKUP_ROOT = path.join(ROOT, ".downloads.backup");
const CHECK_ONLY = process.argv.includes("--check");
const COURSE_PATTERN = /^(小学生|中学生|高校生|高齢者)_(初級|中級|上級)$/;
const FIXED_DOS_DATE = 0x5c21;
const FIXED_DOS_TIME = 0;
const ZIP_METHOD_STORE = 0;

const CRC_TABLE = new Uint32Array(256);
for (let index = 0; index < 256; index++) {
  let value = index;
  for (let bit = 0; bit < 8; bit++) {
    value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  }
  CRC_TABLE[index] = value >>> 0;
}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function unicodePathExtra(fileName) {
  const extra = Buffer.alloc(9 + fileName.length);
  extra.writeUInt16LE(0x7075, 0);
  extra.writeUInt16LE(5 + fileName.length, 2);
  extra.writeUInt8(1, 4);
  extra.writeUInt32LE(crc32(fileName), 5);
  fileName.copy(extra, 9);
  return extra;
}

function zipEntries(entries) {
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  for (const entry of entries) {
    const fileName = Buffer.from(entry.name.replaceAll(path.sep, "/"), "utf8");
    const pathExtra = unicodePathExtra(fileName);
    const source = entry.data;
    const checksum = crc32(source);

    const localHeader = Buffer.alloc(30);
    localHeader.writeUInt32LE(0x04034b50, 0);
    localHeader.writeUInt16LE(20, 4);
    localHeader.writeUInt16LE(0x0800, 6);
    localHeader.writeUInt16LE(ZIP_METHOD_STORE, 8);
    localHeader.writeUInt16LE(FIXED_DOS_TIME, 10);
    localHeader.writeUInt16LE(FIXED_DOS_DATE, 12);
    localHeader.writeUInt32LE(checksum, 14);
    localHeader.writeUInt32LE(source.length, 18);
    localHeader.writeUInt32LE(source.length, 22);
    localHeader.writeUInt16LE(fileName.length, 26);
    localHeader.writeUInt16LE(pathExtra.length, 28);
    localParts.push(localHeader, fileName, pathExtra, source);

    const centralHeader = Buffer.alloc(46);
    centralHeader.writeUInt32LE(0x02014b50, 0);
    centralHeader.writeUInt16LE(0x0314, 4);
    centralHeader.writeUInt16LE(20, 6);
    centralHeader.writeUInt16LE(0x0800, 8);
    centralHeader.writeUInt16LE(ZIP_METHOD_STORE, 10);
    centralHeader.writeUInt16LE(FIXED_DOS_TIME, 12);
    centralHeader.writeUInt16LE(FIXED_DOS_DATE, 14);
    centralHeader.writeUInt32LE(checksum, 16);
    centralHeader.writeUInt32LE(source.length, 20);
    centralHeader.writeUInt32LE(source.length, 24);
    centralHeader.writeUInt16LE(fileName.length, 28);
    centralHeader.writeUInt16LE(pathExtra.length, 30);
    centralHeader.writeUInt16LE(0, 32);
    centralHeader.writeUInt16LE(0, 34);
    centralHeader.writeUInt16LE(0, 36);
    centralHeader.writeUInt32LE(0, 38);
    centralHeader.writeUInt32LE(offset, 42);
    centralParts.push(centralHeader, fileName, pathExtra);

    offset += localHeader.length + fileName.length + pathExtra.length + source.length;
  }

  const centralDirectory = Buffer.concat(centralParts);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralDirectory.length, 12);
  end.writeUInt32LE(offset, 16);
  end.writeUInt16LE(0, 20);

  return Buffer.concat([...localParts, centralDirectory, end]);
}

function fileEntry(relativePath, archivePath = relativePath) {
  return {
    name: archivePath,
    data: readFileSync(path.join(ROOT, relativePath)),
  };
}

function discoverArchives() {
  const archives = [];
  const courseDirectories = readdirSync(ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && COURSE_PATTERN.test(entry.name))
    .map((entry) => entry.name)
    .sort();

  for (const courseDirectory of courseDirectories) {
    const coursePath = path.join(ROOT, courseDirectory);
    const lessonDirectories = readdirSync(coursePath, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && /^\d+_/.test(entry.name))
      .map((entry) => entry.name)
      .sort();
    const courseEntries = [];
    const overviewPath = `${courseDirectory}/00_カリキュラム概要.md`;

    if (existsSync(path.join(ROOT, overviewPath))) {
      courseEntries.push(fileEntry(overviewPath, `${courseDirectory}/00_カリキュラム概要.md`));
    }

    for (const lessonDirectory of lessonDirectories) {
      const lessonEntries = [];
      for (const fileName of ["lesson.md", "interactive.html"]) {
        const relativePath = `${courseDirectory}/${lessonDirectory}/${fileName}`;
        if (!existsSync(path.join(ROOT, relativePath))) continue;
        const archivePath = `${lessonDirectory}/${fileName}`;
        lessonEntries.push(fileEntry(relativePath, archivePath));
        courseEntries.push(fileEntry(relativePath, `${courseDirectory}/${archivePath}`));
      }

      archives.push({
        output: `downloads/lessons/${courseDirectory}/${lessonDirectory}.zip`,
        buffer: zipEntries(lessonEntries),
      });
    }

    const optionalPath = path.join(coursePath, "オプション教材");
    if (existsSync(optionalPath)) {
      const optionalFiles = readdirSync(optionalPath, { withFileTypes: true })
        .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
        .map((entry) => entry.name)
        .sort();

      for (const fileName of optionalFiles) {
        const relativePath = `${courseDirectory}/オプション教材/${fileName}`;
        courseEntries.push(fileEntry(relativePath, relativePath));
      }
    }

    archives.push({
      output: `downloads/courses/${courseDirectory}.zip`,
      buffer: zipEntries(courseEntries),
    });
  }

  return archives;
}

function sameBuffer(file, expected) {
  if (!existsSync(file)) return false;
  const current = readFileSync(file);
  return current.length === expected.length && current.equals(expected);
}

function listZipFiles(directory) {
  if (!existsSync(directory)) return [];

  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return listZipFiles(entryPath);
    return entry.isFile() && entry.name.endsWith(".zip") ? [entryPath] : [];
  });
}

function replaceDownloadDirectory(archives) {
  rmSync(DOWNLOAD_TEMP_ROOT, { recursive: true, force: true });
  rmSync(DOWNLOAD_BACKUP_ROOT, { recursive: true, force: true });

  for (const { output, buffer } of archives) {
    const relativeOutput = path.relative("downloads", output);
    const outputPath = path.join(DOWNLOAD_TEMP_ROOT, relativeOutput);
    mkdirSync(path.dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, buffer);
  }

  try {
    if (existsSync(DOWNLOAD_ROOT)) renameSync(DOWNLOAD_ROOT, DOWNLOAD_BACKUP_ROOT);
    renameSync(DOWNLOAD_TEMP_ROOT, DOWNLOAD_ROOT);
    rmSync(DOWNLOAD_BACKUP_ROOT, { recursive: true, force: true });
  } catch (error) {
    if (!existsSync(DOWNLOAD_ROOT) && existsSync(DOWNLOAD_BACKUP_ROOT)) {
      renameSync(DOWNLOAD_BACKUP_ROOT, DOWNLOAD_ROOT);
    }
    rmSync(DOWNLOAD_TEMP_ROOT, { recursive: true, force: true });
    throw error;
  }
}

const archives = discoverArchives();

if (CHECK_ONLY) {
  const stale = archives.filter(({ output, buffer }) => !sameBuffer(path.join(ROOT, output), buffer));
  const expectedOutputs = new Set(archives.map(({ output }) => path.join(ROOT, output)));
  const unexpected = listZipFiles(DOWNLOAD_ROOT).filter((output) => !expectedOutputs.has(output));

  if (stale.length > 0 || unexpected.length > 0) {
    stale.forEach(({ output }) => console.error(`Out of date: ${output}`));
    unexpected.forEach((output) => console.error(`Unexpected: ${path.relative(ROOT, output)}`));
    console.error("Run: node scripts/generate-downloads.mjs");
    process.exit(1);
  }
  console.log(`${archives.length} download archives are up to date`);
} else {
  replaceDownloadDirectory(archives);
  console.log(`Generated ${archives.length} download archives`);
}
