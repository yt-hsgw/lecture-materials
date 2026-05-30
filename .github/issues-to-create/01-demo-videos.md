---
title: "🎥 デモ動画（30秒×48回）の作成"
labels: ["enhancement", "documentation", "nice-to-have", "ai-assisted"]
---

## 背景

各回の **30秒デモ動画** が あれば、 講師が 事前 に 内容 を 把握 しやすく、 受講前 の 受講者 / 保護者 への アピール 素材 にも なる。

## 状況（2026-05-29）

撮影スクリプト `scripts/capture-videos.mjs` は 既に 実装済み。 Playwright で 自動 スクロール しながら WebM（or MP4） を 出力 する。 **撮影実行 だけ が 残作業**。

## 対象 ファイル / ディレクトリ

- `scripts/capture-videos.mjs` — 撮影 ロジック（実装済み、 改良 余地 あり）
- `docs/videos/<コース>/<回>.webm` — 出力先
- `README.md` — ギャラリーセクション に 動画 へ の リンク 追加

## 期待される 成果物

1. **48 ファイル × .webm 動画** を `docs/videos/<コース>/<回>.webm` に 生成
2. （任意）`--convert-mp4` で MP4 も 生成（GitHub `<video>` タグ 直再生 用）
3. README に ギャラリー 追加: 各 サムネ クリック で 動画 が 開く / モーダル で 表示
4. （任意）動画 を YouTube / Vimeo に アップロード し、 README に URL を 貼る 方式 も 検討

## 受け入れ基準

- [ ] 48 ファイル 撮影 完了（`find docs/videos -name '*.webm' | wc -l` ＝ 48）
- [ ] 各 動画 が **15〜45秒** に 収まっている（極端 に 短い / 長い 動画 が ない）
- [ ] 動画 内 で **モーダル / トースト が 開きっぱなし** に なっていない
- [ ] README ギャラリー で クリック → 動画 が 再生 できる（GitHub 上 で の 動作確認）
- [ ] リポジトリ サイズ が 過大 に なる 場合（>500MB）、 YouTube リンク 方式 に 切替

## 実行 コマンド

```bash
# 全 48ファイル を 撮影（既存 skip）
node scripts/capture-videos.mjs

# MP4 も 同時 生成
node scripts/capture-videos.mjs --convert-mp4

# 高校生コース だけ
node scripts/capture-videos.mjs --filter 高校生

# 30秒 ではなく 45秒 に
node scripts/capture-videos.mjs --duration 45 --force
```

## 制約 / 注意

- 動画ファイル は バイナリ で 大きい。 リポジトリ サイズ が 急増 する 場合 は **Git LFS** か **YouTube リンク 方式** を 検討
- `.tmp-*` ディレクトリ が 残る ことが ある（`.gitignore` で 除外済み）
- 一部 教材（オプション教材 等）は `[data-snav-target]` が ない ため、 フォールバック で hero + 末尾 だけ の 短い 動画 に なる

## 参考

- 仕様: `scripts/README.md` の 「capture-videos.mjs」 セクション
- 既存 スクリーンショット ギャラリー: `README.md` の 📸 ギャラリー セクション
