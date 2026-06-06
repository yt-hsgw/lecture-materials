# 静的LP・教材まとめサイト 設計メモ

## 仕様

このサイトは、公開済みの教材リポジトリを読む人のための入口である。ログイン、DB、決済は持たず、教材カタログ、GitHub導線、問い合わせ導線だけを提供する。

### 対象読者

| 優先 | 読者 | 主な目的 |
|---:|---|---|
| 1 | 講師・教室運営者・学校ICT担当 | 授業で使える教材を対象別に探す |
| 2 | 保護者・学習者 | 学習範囲と安全性を確認する |
| 3 | OSS貢献者・開発者 | 改善対象を見つけてGitHubへ移動する |

### やること

- LPとして教材セットの価値、対象、規模を伝える
- 4対象 × 3レベル × 4回の教材を一覧化する
- 各回またはコース単位で教材ZIPをダウンロードできる
- GitHubリポジトリ、Issue、問い合わせ導線へ移動できる
- 静的HTMLとしてローカルファイルでもGitHub Pagesでも開ける

### やらないこと

- ログイン必須化
- 有料ダウンロード
- ユーザー別の進度管理
- 個人情報の入力・保存
- 未実装の講座ポータルへの強制誘導

## データモデル

```mermaid
erDiagram
    AUDIENCE ||--o{ COURSE : has
    LEVEL ||--o{ COURSE : classifies
    COURSE ||--o{ LESSON : contains
    LESSON ||--o{ MATERIAL : exposes
    COURSE ||--|| DOWNLOAD_ARCHIVE : distributes
    LESSON ||--|| DOWNLOAD_ARCHIVE : distributes
    SITE ||--o{ CONTACT_REQUEST : creates

    AUDIENCE {
      string name
      number sort_order
    }

    LEVEL {
      string name
      number sort_order
    }

    COURSE {
      string directory
      string title
      string goal
      string color
    }

    LESSON {
      number number
      string directory
      string title
      string theme
      string handson
    }

    MATERIAL {
      string kind
      string path
      boolean exists
    }

    DOWNLOAD_ARCHIVE {
      string scope
      string path
      boolean exists
    }

    CONTACT_REQUEST {
      string category
      string subject
      string message
    }
```

## アーキテクチャ

```mermaid
flowchart TD
    A["教材ディレクトリ"] --> B["scripts/generate-downloads.mjs"]
    A --> C["scripts/generate-site-data.mjs"]
    B --> D["downloads/"]
    D --> C
    C --> E["assets/site-data.js"]
    E --> F["index.html"]
    G["assets/site.js"] --> F
    H["assets/site.css"] --> F
    F --> D
    F --> I["GitHub / 問い合わせIssue"]
```

### 境界

| 境界 | 内容 |
|---|---|
| 入力 | リポジトリ内のコースディレクトリ、`00_カリキュラム概要.md`、各回フォルダ |
| 変換 | `scripts/generate-downloads.mjs` が各回・各コースのZIPを生成し、`scripts/generate-site-data.mjs` が教材構造とZIPの存在を静的JSデータへ変換 |
| 表示 | `index.html` と `assets/site.js` がフィルタ可能な教材カタログを描画 |
| 外部副作用 | ZIPダウンロード、GitHubへのリンク遷移、問い合わせ内容を付けた新規Issue画面の表示 |
| トランザクション | サイト利用時はなし。ZIP生成時は一時ディレクトリで全件生成後、`downloads/` を一括差し替え |

## 設計理由

- MIT公開リポジトリでは、ログインや有料DLで教材アクセスを囲い込む実効性が低い。
- 教材の正は既存ディレクトリ構造に置き、LP専用DBを作らないことで更新漏れを減らす。
- Markdownをブラウザで直接開かずZIPとして配布し、サーバーの文字コード判定による文字化けを避ける。
- `index.html` をルートに置くことで、GitHub Pagesでもローカルファイルでも入口として使いやすい。
- 問い合わせはGitHub Issue作成画面へ渡し、静的サイト内では保存・送信しない。
- 個人情報を集めないため、OWASP Top10上の認証、セッション、保存データに関する攻撃面を増やさない。

## トレードオフ

- 静的サイトなので、ユーザーごとの進度、修了証、ログイン後コンテンツは提供しない。
- 生成済みの `downloads/` と `assets/site-data.js` をコミットするため、教材変更時は両方の再生成が必要になる。
- GitHub Pages以外のCMS的な編集体験はないが、レビュー可能性と単純さを優先する。
- 問い合わせにはGitHubアカウントが必要で、非公開の問い合わせには対応できない。

## 代替案

Next.jsなどで講座ポータルを作る案もある。この案は検索、ルーティング、将来の認証追加に強いが、現時点では追加開発なしという方針と逆行し、依存関係、ビルド、ホスティング、脆弱性管理が増える。今回は静的HTMLを採用する。

## セキュリティレビュー

- ユーザー入力は検索語とフィルタのみで、DOMには `textContent` を使って反映する。
- 外部リンクは `target="_blank"` と `rel="noopener noreferrer"` を付ける。
- ZIPの入力元はリポジトリ内の既知の教材ディレクトリに限定し、利用者入力をファイルパスに使用しない。
- 問い合わせフォームは必須項目、文字数、メールアドレス混入を検証する。
- 入力内容はブラウザ内でIssue作成URLへ変換するだけで、サイト内には保存しない。
- 秘密情報、APIキー、個人情報は扱わない。
- GitHub Pagesで公開する場合も、認証境界や管理画面を持たない。

## 危険ケース

- 教材を変更したのに `downloads/` または `assets/site-data.js` を再生成せず、古い教材が配布される。
- 教材を削除したのに古いZIPが残り、意図しない教材へ直接アクセスできる。
- ZIPに日本語ファイル名を含めるため、UTF-8非対応の古い解凍ソフトではファイル名が正しく表示されない。
- 問い合わせが公開Issueになることを読まず、個人情報を入力してしまう。
- GitHubアカウントを持たない利用者は問い合わせを完了できない。
- コース数が大幅に増えた場合、単一ページのDOM量が増えて初期表示が重くなる。
- スクリーンショットが古くなり、実際の教材UIとLP上の見え方がずれる。
