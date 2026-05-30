#!/usr/bin/env bash
# .github/issues-to-create/*.md を GitHub Issues として 一括 登録
#
# 前提:
#   - gh CLI が インストール 済み（https://cli.github.com/）
#   - gh auth login 済み
#   - このリポジトリ の ルート から 実行
#
# 使い方:
#   ./.github/issues-to-create/create-all.sh           # 全 .md を 登録
#   ./.github/issues-to-create/create-all.sh --dry-run # 試運転（実際 には 登録 しない）
#   ./.github/issues-to-create/create-all.sh --one 01-demo-videos.md  # 1ファイル だけ

set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DRY_RUN=false
ONE=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run) DRY_RUN=true; shift ;;
    --one)     ONE="$2"; shift 2 ;;
    *) echo "不明なオプション: $1"; exit 2 ;;
  esac
done

if ! command -v gh >/dev/null 2>&1; then
  echo "❌ gh CLI が 見つかりません: https://cli.github.com/"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "❌ gh auth login が 未認証 です。 まず ログイン してください:"
  echo "   gh auth login"
  exit 1
fi

# 対象 ファイル を 列挙
if [[ -n "$ONE" ]]; then
  files=("$DIR/$ONE")
else
  files=()
  while IFS= read -r f; do files+=("$f"); done < <(find "$DIR" -maxdepth 1 -name '[0-9][0-9]-*.md' | sort)
fi

if [[ ${#files[@]} -eq 0 ]]; then
  echo "登録対象 ファイル が ありません"
  exit 0
fi

echo "📋 登録対象: ${#files[@]} 件"
$DRY_RUN && echo "（DRY RUN: 実際 には 登録 しません）"
echo ""

success=0
failed=0

for f in "${files[@]}"; do
  if [[ ! -f "$f" ]]; then
    echo "❌ ファイル が ない: $f"
    failed=$((failed + 1))
    continue
  fi

  # フロントマター から title / labels を 抽出
  # 簡易 パーサ（yq が あれば 使う、 なければ awk）
  title=$(awk '/^title:/{sub(/^title:[[:space:]]*"?/,""); sub(/"?$/,""); print; exit}' "$f")
  labels=$(awk '/^labels:/{sub(/^labels:[[:space:]]*\[?/,""); sub(/\]?$/,""); gsub(/"/,""); gsub(/,[[:space:]]*/,","); print; exit}' "$f")

  # 本文 を 抽出（2つ目 の --- 以降）
  body=$(awk 'BEGIN{found=0; sep=0} /^---/{sep++; if(sep==2){found=1; next}} found==1{print}' "$f")

  if [[ -z "$title" ]]; then
    echo "❌ title が ない: $f"
    failed=$((failed + 1))
    continue
  fi

  echo "📝 [$(basename "$f")]"
  echo "   Title:  $title"
  echo "   Labels: $labels"

  if $DRY_RUN; then
    echo "   (dry-run、 登録 しません)"
    success=$((success + 1))
    continue
  fi

  # gh issue create
  label_args=()
  IFS=',' read -ra LARR <<< "$labels"
  for l in "${LARR[@]}"; do
    l_trim=$(echo "$l" | awk '{$1=$1;print}')
    [[ -n "$l_trim" ]] && label_args+=(--label "$l_trim")
  done

  if echo "$body" | gh issue create --title "$title" --body-file - "${label_args[@]}"; then
    success=$((success + 1))
    echo ""
  else
    failed=$((failed + 1))
    echo "   ❌ 登録 失敗"
    echo ""
  fi
done

echo "================================================================"
echo "成功: $success / 失敗: $failed"
$DRY_RUN && echo "（DRY RUN なので 実際 の 登録 は されて いません）"
