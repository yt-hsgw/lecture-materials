---
title: "📦 パッケージング・配布（コース別 ZIP / GitHub Releases）"
labels: ["enhancement", "infrastructure", "nice-to-have", "ai-assisted"]
---

## 背景

教室・学校・NPO が **ダウンロード 1つ** で 全教材 を 使える ように したい。 現状 は `git clone` か リポジトリ ZIP を 案内 する しか ない。

## 期待される 成果物

1. **`scripts/build-release.mjs`**: コース別 ZIP を 作成 する スクリプト
2. **`release/<コース>.zip`**: 12 ファイル の ZIP（CI で 生成、 リポジトリ には コミット しない）
3. **`.github/workflows/release.yml`**: タグ push で 自動 リリース
4. **各 ZIP に 同梱**:
   - 該当 コース の 全 `lesson.md` + `interactive.html`
   - `00_カリキュラム概要.md`
   - `授業前チェックリスト.md`
   - `LICENSE`
   - **`START_HERE.html`**: コース 選択 画面（4回 へ の リンク + 説明）

## 期待する ユーザー 体験

```
1. https://github.com/yt-hsgw/lecture-materials/releases から
   「小学生・初級.zip」 を ダウンロード
2. 解凍
3. START_HERE.html を ブラウザで 開く
4. 4回 から 選んで クリック → 該当 interactive.html が 開く
```

## 受け入れ基準

- [ ] `node scripts/build-release.mjs` 単体で 12 ZIP が 生成 される
- [ ] `node scripts/build-release.mjs --course 小学生_初級` で 1コース のみ も 可能
- [ ] 各 ZIP に START_HERE.html が 入り、 ローカル で 開いて 全 4回 が 起動 する
- [ ] `.github/workflows/release.yml` で `v*` タグ push 時 に GitHub Releases に 12 ZIP が 添付
- [ ] README に Releases ページ へ の リンク 追加

## START_HERE.html の 雛形（仕様）

- コース名 / 配色（該当コース と 統一）
- 4 回 を 大きな カード で 並べ、 クリック で 該当 `interactive.html` へ
- 「lesson.md は VS Code + Marp で 開いて ください」 と 補足
- 印刷可能 な ミニ パンフレット PDF（任意）

## 制約 / 注意

- ZIP に **大きなバイナリ**（動画 / 高解像度画像）を 入れすぎない（>50MB は 警告）
- ライセンス 表記 を 必ず 同梱（`LICENSE` を ZIP ルート に）
- 文字化け 対策: ZIP は UTF-8 ファイル名 で（Mac / Windows / Linux で 開ける こと を 確認）

## 参考

- 既存 スクリプト: `scripts/build-pptx.sh`（Marp 用、 build スクリプト の 書き方 参考）
- GitHub Actions: `.github/workflows/check.yml`（既存 CI、 マトリックス や ジョブ 設計 参考）
