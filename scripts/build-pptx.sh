#!/usr/bin/env bash
# build-pptx.sh
#   Marpマークダウン (`lesson.md`) から PowerPoint (.pptx) を `_generated/` 配下に
#   出力するスクリプト。原本は Markdown のままに保ち、必要なときだけ生成します。
#
# 使い方:
#   ./scripts/build-pptx.sh                  # 見つかった全 lesson.md を変換
#   ./scripts/build-pptx.sh 小学生_初級      # 対象を絞る（フォルダ名の部分一致）
#   ./scripts/build-pptx.sh --list           # 対象ファイル一覧の確認のみ
#   ./scripts/build-pptx.sh --pdf            # PPTXに加えPDFも出力
#   ./scripts/build-pptx.sh --help           # このヘルプ
#
# 出力先:
#   _generated/<対象者_レベル>/<回フォルダ名>.pptx
#   例) _generated/小学生_初級/01_パソコンってなんだろう.pptx
#
# 必要なもの:
#   - Node.js / npx ( https://nodejs.org/ja/download )
#   - インターネット接続（初回 marp-cli を npx 経由でダウンロード）
#
# 備考:
#   _generated/ は .gitignore で除外済み。再生成自由、コミット不要。

set -euo pipefail

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT="$(dirname "$SCRIPT_DIR")"
OUT_ROOT="$ROOT/_generated"

LIST_ONLY=false
ALSO_PDF=false
FILTER=""

for arg in "$@"; do
  case "$arg" in
    --list|-l) LIST_ONLY=true ;;
    --pdf)     ALSO_PDF=true ;;
    --help|-h)
      awk 'NR==1{next} /^#/{sub(/^# ?/,""); print; next} {exit}' "$0"
      exit 0
      ;;
    --*)
      echo "❌ 未知のオプション: $arg"; exit 1 ;;
    *) FILTER="$arg" ;;
  esac
done

# lesson.md を収集（_templates/、隠しフォルダ、_generated/ は除外）
mapfile -t mds < <(
  find "$ROOT" -name "lesson.md" \
    -not -path "*/.git/*" \
    -not -path "*/_templates/*" \
    -not -path "*/_generated/*" \
    -not -path "*/node_modules/*" \
  | sort
)

if [ "${#mds[@]}" -eq 0 ]; then
  echo "❌ lesson.md が見つかりませんでした (ROOT: $ROOT)"
  exit 1
fi

# フィルター適用
if [ -n "$FILTER" ]; then
  filtered=()
  for f in "${mds[@]}"; do
    if [[ "$f" == *"/$FILTER/"* || "$f" == *"$FILTER"* ]]; then
      filtered+=("$f")
    fi
  done
  if [ "${#filtered[@]}" -eq 0 ]; then
    echo "❌ '$FILTER' に一致する lesson.md が見つかりませんでした"
    echo "ヒント: フォルダ名（小学生_初級 など）の部分文字列で指定してください"
    exit 1
  fi
  mds=("${filtered[@]}")
fi

echo "🔎 対象ファイル: ${#mds[@]} 件"
for f in "${mds[@]}"; do
  echo "  - ${f#$ROOT/}"
done

if $LIST_ONLY; then exit 0; fi

# Node.js 確認
if ! command -v npx >/dev/null 2>&1; then
  cat <<'EOF'

❌ npx (Node.js) が見つかりません。
   Mac:     brew install node
   または公式: https://nodejs.org/ja/download
EOF
  exit 1
fi

echo ""
echo "🚀 PPTX生成を開始します（初回はmarp-cliのダウンロードに数分）"
echo ""

mkdir -p "$OUT_ROOT"

success=0
failed=0
declare -a failed_files=()

for md in "${mds[@]}"; do
  rel="${md#$ROOT/}"
  audience_dir="$(dirname "$(dirname "$rel")")"
  lesson_dir="$(basename "$(dirname "$rel")")"
  out_dir="$OUT_ROOT/$audience_dir"
  mkdir -p "$out_dir"
  out_pptx="$out_dir/${lesson_dir}.pptx"

  echo "▶ $rel"
  echo "  → $out_dir/${lesson_dir}.pptx"
  if npx -y --package=@marp-team/marp-cli marp \
       --pptx --allow-local-files \
       -o "$out_pptx" "$md" 2>&1 | sed 's/^/    /'; then
    success=$((success+1))
    if $ALSO_PDF; then
      out_pdf="$out_dir/${lesson_dir}.pdf"
      echo "  → $out_dir/${lesson_dir}.pdf"
      npx -y --package=@marp-team/marp-cli marp \
        --pdf --allow-local-files \
        -o "$out_pdf" "$md" 2>&1 | sed 's/^/    /' || true
    fi
  else
    failed=$((failed+1))
    failed_files+=("$rel")
  fi
  echo ""
done

echo "==============================="
echo "✅ 成功: $success 件"
if [ $failed -gt 0 ]; then
  echo "❌ 失敗: $failed 件"
  for f in "${failed_files[@]}"; do
    echo "   - $f"
  done
fi
echo "📁 出力先: $OUT_ROOT/"
echo ""
echo "ヒント: 出力したPPTXはGit管理されません（.gitignore済み）"
