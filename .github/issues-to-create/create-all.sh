#!/usr/bin/env bash
# .github/issues-to-create/*.md を GitHub Issues として 一括 登録
#
# 機能:
#   - 各 .md の フロントマター（title, labels）を 読み取って gh issue create に 渡す
#   - 使用される ラベル を 事前 スキャン し、 リポジトリ に 無ければ 自動作成
#   - --dry-run で 試運転、 --one <file> で 1件だけ 登録、 --no-bootstrap で ラベル 自動作成 を スキップ
#
# 前提:
#   - gh CLI が インストール 済み（https://cli.github.com/）
#   - gh auth login 済み
#   - このリポジトリ の ルート から 実行
#
# 使い方:
#   ./.github/issues-to-create/create-all.sh                       # 全 .md を 登録
#   ./.github/issues-to-create/create-all.sh --dry-run             # 試運転
#   ./.github/issues-to-create/create-all.sh --one 01-demo-videos.md
#   ./.github/issues-to-create/create-all.sh --no-bootstrap        # ラベル 自動作成 を skip

set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DRY_RUN=false
ONE=""
BOOTSTRAP_LABELS=true

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run)      DRY_RUN=true; shift ;;
    --one)          ONE="$2"; shift 2 ;;
    --no-bootstrap) BOOTSTRAP_LABELS=false; shift ;;
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

# ────────────────────────────────────────────────
# 既知 ラベル の デフォルト 色 / 説明
# （bootstrap 時 に 新規作成 する 際 に 使用）
# ────────────────────────────────────────────────
get_label_color() {
  case "$1" in
    bug)              echo "D73A4A" ;;
    enhancement)      echo "A2EEEF" ;;
    documentation)    echo "0075CA" ;;
    "ai-assisted")    echo "C5DEF5" ;;
    i18n)             echo "5319E7" ;;
    infrastructure)   echo "FBCA04" ;;
    design)           echo "F9D0C4" ;;
    accessibility)    echo "008672" ;;
    "nice-to-have")   echo "C2E0C6" ;;
    "priority/low")   echo "BFDADC" ;;
    "priority/medium") echo "FBCA04" ;;
    "priority/high")  echo "D93F0B" ;;
    triage)           echo "EDEDED" ;;
    "good first issue") echo "7057FF" ;;
    "help wanted")    echo "008672" ;;
    duplicate)        echo "CFD3D7" ;;
    invalid)          echo "E4E669" ;;
    question)         echo "D876E3" ;;
    wontfix)          echo "FFFFFF" ;;
    *)                echo "CCCCCC" ;;
  esac
}
get_label_desc() {
  case "$1" in
    bug)              echo "バグ報告" ;;
    enhancement)      echo "新機能・改善提案" ;;
    documentation)    echo "ドキュメント関連" ;;
    "ai-assisted")    echo "生成 AI が単独で着手しやすい形式のタスク" ;;
    i18n)             echo "国際化 / 多言語対応" ;;
    infrastructure)   echo "CI / CD / ビルド / リリース" ;;
    design)           echo "UI / ビジュアル" ;;
    accessibility)    echo "WCAG / A11Y" ;;
    "nice-to-have")   echo "あったら嬉しい（優先度: 低）" ;;
    "priority/low")   echo "優先度: 低" ;;
    "priority/medium") echo "優先度: 中" ;;
    "priority/high")  echo "優先度: 高" ;;
    triage)           echo "分類待ち" ;;
    *)                echo "" ;;
  esac
}

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

# ────────────────────────────────────────────────
# Pass 1: 使用 ラベル を 全件 スキャン
# ────────────────────────────────────────────────
declare -a all_labels=()
for f in "${files[@]}"; do
  if [[ ! -f "$f" ]]; then continue; fi
  labels_raw=$(awk '/^labels:/{sub(/^labels:[[:space:]]*\[?/,""); sub(/\]?$/,""); gsub(/"/,""); gsub(/,[[:space:]]*/,","); print; exit}' "$f")
  IFS=',' read -ra LARR <<< "$labels_raw"
  for l in "${LARR[@]}"; do
    l_trim=$(echo "$l" | awk '{$1=$1;print}')
    [[ -n "$l_trim" ]] && all_labels+=("$l_trim")
  done
done

# 一意化
declare -a unique_labels=()
declare -A seen=()
for l in "${all_labels[@]}"; do
  if [[ -z "${seen[$l]+x}" ]]; then
    unique_labels+=("$l")
    seen[$l]=1
  fi
done

# ────────────────────────────────────────────────
# Pass 2: 不在 ラベル を 自動作成
# ────────────────────────────────────────────────
if $BOOTSTRAP_LABELS && ! $DRY_RUN && [[ ${#unique_labels[@]} -gt 0 ]]; then
  echo "🏷  ラベル チェック中…"
  # 既存 ラベル 一覧 を 取得
  existing_labels=$(gh label list --limit 200 --json name -q '.[].name' 2>/dev/null || true)

  created=0
  for l in "${unique_labels[@]}"; do
    if echo "$existing_labels" | grep -Fxq "$l"; then
      continue
    fi
    color=$(get_label_color "$l")
    desc=$(get_label_desc "$l")
    if [[ -n "$desc" ]]; then
      if gh label create "$l" --color "$color" --description "$desc" >/dev/null 2>&1; then
        echo "   ✅ ラベル 作成: $l (#$color)"
        created=$((created + 1))
      else
        echo "   ⚠️  ラベル 作成 失敗: $l（既存 の 可能性）"
      fi
    else
      if gh label create "$l" --color "$color" >/dev/null 2>&1; then
        echo "   ✅ ラベル 作成: $l (#$color)"
        created=$((created + 1))
      else
        echo "   ⚠️  ラベル 作成 失敗: $l（既存 の 可能性）"
      fi
    fi
  done
  echo "🏷  新規ラベル: $created 件 ／ 既存: $((${#unique_labels[@]} - created)) 件"
  echo ""
elif $BOOTSTRAP_LABELS && $DRY_RUN; then
  echo "🏷  使用予定 ラベル（${#unique_labels[@]} 件）: ${unique_labels[*]}"
  echo "    DRY RUN なので 作成 しません"
  echo ""
fi

# ────────────────────────────────────────────────
# Pass 3: Issue を 一件ずつ 登録
# ────────────────────────────────────────────────
echo "📋 登録対象 Issue: ${#files[@]} 件"
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

  title=$(awk '/^title:/{sub(/^title:[[:space:]]*"?/,""); sub(/"?$/,""); print; exit}' "$f")
  labels=$(awk '/^labels:/{sub(/^labels:[[:space:]]*\[?/,""); sub(/\]?$/,""); gsub(/"/,""); gsub(/,[[:space:]]*/,","); print; exit}' "$f")
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
