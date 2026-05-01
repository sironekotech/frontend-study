# Lessons

このドキュメントは、`frontend-study` のレッスン全体計画です。

README.md はリポジトリの目的やセットアップを書く場所です。

この `Lessons.md` では、どの順番で何を学ぶか、どのタグから始めるか、参加者がどんなブランチを作るかを整理します。

## レッスン運用

このリポジトリでは、`main` に教材を少しずつ積み上げていきます。

各レッスンには、開始地点と完成地点のタグを用意します。

```text
main
  最新の完成版

start/<lesson>
  そのレッスンを始める地点

end/<lesson>
  そのレッスンの完成見本

<username>/<lesson>
  参加者ごとの作業ブランチ
```

タグはブランチではありません。特定のコミットに付ける固定の目印です。

## 名前のルール

### タグ

```text
start/001-create-next-app
end/001-create-next-app
```

`start/...` は開始地点です。

`end/...` は完成見本です。

### 参加者ブランチ

```text
<username>/001-create-next-app
```

例:

```text
sirotyuke/001-create-next-app
taro/001-create-next-app
hanako/001-create-next-app
```

参加者は、必ず自分の名前を先頭に付けたブランチで作業します。

## 参加者の進め方

まず、タグを取得します。

```bash
git fetch --all --tags
```

次に、レッスンの開始タグから自分用ブランチを作ります。

```bash
git switch -c <username>/001-create-next-app start/001-create-next-app
```

例:

```bash
git switch -c taro/001-create-next-app start/001-create-next-app
```

作業後は、自分のブランチをpushします。

```bash
git push -u origin taro/001-create-next-app
```

完成見本を見たい場合は、`end/...` タグを確認します。

```bash
git switch --detach end/001-create-next-app
```

自分の作業と完成見本を比べたい場合は、作業ブランチに戻ってからdiffを見ます。

```bash
git switch taro/001-create-next-app
git diff end/001-create-next-app
```

参加者のPRはレビュー用です。原則として `main` にはmergeしません。

PRはcloseせず、学習ログとして残します。

```text
taro/001-create-next-app
  mainへPRを作る
  レビューを受ける
  必要なら修正する
  学習が終わったらdoneラベルを付ける
```

`main` にmergeするのは、管理者が作る教材PRだけです。

ラベルは管理者が付けます。参加者が付けても問題ありませんが、最終的な状態管理は管理者が確認します。

### 参加者PRラベル

参加者PRは、ラベルで状態を管理します。

```text
learning
  参加者の学習PR

needs-review
  レビュー待ち

needs-fix
  修正待ち

reviewed
  レビュー済み

done
  学習完了
```

## 管理者の進め方

管理者は、レッスンを作る前に開始タグを付けます。

```bash
git switch main
git pull
git tag start/001-create-next-app
git push origin start/001-create-next-app
```

その後、作業ブランチを作ってレッスンを実装します。

```bash
git switch -c feature/202605/create-next-app-lesson
```

レッスンが完成したらPRを作成し、`main` にmergeします。

merge後の `main` に完成タグを付けます。

```bash
git switch main
git pull
git tag end/001-create-next-app
git push origin end/001-create-next-app
```

公開済みのタグは動かしません。タグは参加者が学習開始地点や完成見本として使う固定の目印だからです。

レッスン内容を大きく変える場合は、既存タグを上書きせず、`-v2` のタグを作ります。

```text
start/001-create-next-app-v2
end/001-create-next-app-v2
```

後続レッスンに影響する変更の場合は、影響するレッスンも `-v2` として作り直します。

## プロジェクト基盤方針

React / Next.js の学習に集中できるように、開発環境や品質チェックの基盤は管理者が用意します。

参加者に、Dockerfile、GitHub Actions、formatter設定、ignore設定を作らせるレッスンは作りません。

この基盤は、参加者がLesson 1を始める前に `main` へmergeしておきます。

厳密には、DockerやGitHub Actionsは `package.json` やNext.jsの生成ファイルに依存します。そのため、管理者が先に `create-next-app` を実行し、次の基盤まで整えた状態をLesson 1の開始地点にします。

```text
管理者が先にmainへ入れるもの:

- Next.js App Router 初期構成
- Prettier
- ESLint
- .gitignore
- Dockerfile
- compose.yaml
- .dockerignore
- GitHub Actions
- GitHub labels
- GitHub ruleset
```

この事前準備は参加者向けレッスンではなく、教材を安定して進めるための管理者作業です。

Lesson 1の `start/001-...` タグは、この基盤が `main` に入ったあとで付けます。

この基盤を入れるPRでは、README.md のセットアップ手順も「参加者向けの通常セットアップ」に更新します。

### 標準の実行環境

標準の実行環境は、macOS + nvm + npm です。

```text
macOS
nvm
Node.js 22
npm
```

### 任意の実行環境

Dockerは任意の実行環境として管理者が用意します。

Dockerを使いたい参加者は、用意済みの `Dockerfile` や `compose.yaml` を使います。

Docker自体の構築や詳しい解説は、このカリキュラムのスコープ外です。

### Formatter

Formatterは Prettier を使います。

コードの書き方で迷わないように、管理者がPrettier設定を用意します。

想定するnpm scripts:

```json
{
  "scripts": {
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
```

### Linter

Linterは Next.js / React に合わせた ESLint を使います。

想定するnpm script:

```json
{
  "scripts": {
    "lint": "eslint"
  }
}
```

実際のscript名やコマンドは、`create-next-app` が生成する構成に合わせて管理者が調整します。

### ignore設定

管理者が `.gitignore` と `.dockerignore` を用意します。

`.gitignore` では、主に次を除外します。

```text
node_modules
.next
out
.env*
*.log
DS_Store
```

`.dockerignore` では、主に次を除外します。

```text
node_modules
.next
.git
.env*
*.log
```

### GitHub Actions

GitHub Actions は管理者が用意します。

Pull Request 作成時に、次のチェックを自動実行します。

```text
npm ci
npm run format:check
npm run lint
npm run build
```

CIが安定したら、GitHub rulesetで status check を必須にします。

### Ruleset

`main` は保護します。

参加者はPRを作れますが、`main` へmergeできません。

管理者だけが、教材PRをPR経由で `main` にmergeします。

## 個別レッスンファイル

`Lessons.md` は全体計画です。各レッスンの詳しい手順は、別ファイルに書きます。

```text
Lessons/
  Lessons.md
  001-create-next-app.md
  002-react-jsx.md
  003-react-list-key.md
```

個別レッスンファイルには、次の内容を書きます。

```text
# 001-create-next-app

## Goal
このレッスンで学ぶこと

## Start
開始タグ

## End
完成タグ

## Build
作るもの

## Steps
作業手順

## Check
確認コマンド
```

## レッスン一覧

TypeScript / TSX は独立した大きなレッスンにはせず、各レッスンの中で少しずつ扱います。

例:

- 001で生成済みのNext.js構成と `.ts` / `.tsx` の違いを見る
- 004でpropsの型を書く
- 005でeventの型を書く
- 006以降でstateやhooksの型を確認する

### 001-create-next-app

管理者が用意したNext.js App Routerの初期構成を読みます。

学ぶこと:

- `create-next-app` が生成したファイル
- `.ts` と `.tsx` の違い
- `src` ディレクトリ
- `app/layout.tsx`
- `app/page.tsx`
- `package.json`
- `next.config.ts`
- `tsconfig.json`
- 開発サーバーの起動
- ビルド確認

タグ:

```text
start/001-create-next-app
end/001-create-next-app
```

### 002-react-jsx

ReactのJSXを学ぶページを作ります。

学ぶこと:

- JSX
- `{}` による値の埋め込み
- `className`
- 条件分岐
- コンポーネントとしてUIを返す感覚

タグ:

```text
start/002-react-jsx
end/002-react-jsx
```

### 003-react-list-key

配列の表示と `key` を学ぶページを作ります。

学ぶこと:

- 配列を `map` で表示する
- `key` の役割
- 条件分岐とリスト表示を組み合わせる
- 表示用データとUIの分離

タグ:

```text
start/003-react-list-key
end/003-react-list-key
```

### 004-react-props-children

props と children を学ぶページを作ります。

学ぶこと:

- props
- propsの型
- children
- 親コンポーネントから子コンポーネントへ値を渡す

タグ:

```text
start/004-react-props-children
end/004-react-props-children
```

### 005-react-events-forms

イベント処理とフォーム入力を学ぶページを作ります。

学ぶこと:

- `onClick`
- `onChange`
- controlled component
- inputの値をstateで管理する
- eventの型

タグ:

```text
start/005-react-events-forms
end/005-react-events-forms
```

### 006-hooks-use-state

`useState` を学ぶページを作ります。

学ぶこと:

- `useState`
- stateによる再レンダー
- 前のstateを使った更新
- 配列やオブジェクトのstate更新

タグ:

```text
start/006-hooks-use-state
end/006-hooks-use-state
```

### 007-hooks-use-effect

`useEffect` を学ぶページを作ります。

学ぶこと:

- `useEffect`
- 依存配列
- cleanup
- ブラウザ側でのデータ取得
- 使いすぎないための考え方

タグ:

```text
start/007-hooks-use-effect
end/007-hooks-use-effect
```

### 008-hooks-use-ref

`useRef` を学ぶページを作ります。

学ぶこと:

- `useRef`
- DOM参照
- 再レンダーされない値
- inputへのfocus

タグ:

```text
start/008-hooks-use-ref
end/008-hooks-use-ref
```

### 009-hooks-rules

Hookのルールを学ぶページを作ります。

学ぶこと:

- Hooksはトップレベルで呼ぶ
- 条件分岐やループの中でHooksを呼ばない
- Reactコンポーネントかcustom hookからHooksを呼ぶ
- custom hookは `use` で始める
- ESLintがHookのルール違反を検出する理由

タグ:

```text
start/009-hooks-rules
end/009-hooks-rules
```

### 010-custom-hooks

custom hooks を学ぶページを作ります。

学ぶこと:

- custom hook
- `use` で始まる命名
- ロジックの再利用
- `src/hooks` に置くケース
- ページ近くの `_hooks` に置くケース

タグ:

```text
start/010-custom-hooks
end/010-custom-hooks
```

### 011-server-client-components

Server Component と Client Component を比較するページを作ります。

学ぶこと:

- Server Component
- Client Component
- `'use client'`
- propsの受け渡し
- Client Componentの境界を小さくする考え方

タグ:

```text
start/011-server-client-components
end/011-server-client-components
```

### 012-route-handler

App Router の Route Handler を使ってAPIを作ります。

学ぶこと:

- `app/api/**/route.ts`
- `GET`
- `POST`
- `Request`
- `Response`
- `NextRequest`
- `NextResponse`

タグ:

```text
start/012-route-handler
end/012-route-handler
```

### 013-rendering-ssr-csr

SSR と CSR の違いを比較するページを作ります。

学ぶこと:

- SSR
- CSR
- Static Rendering
- Streaming
- Server Componentでのデータ取得
- Client Componentでのデータ取得

タグ:

```text
start/013-rendering-ssr-csr
end/013-rendering-ssr-csr
```

### 014-next-navigation

App Router の画面遷移を学ぶページを作ります。

学ぶこと:

- `Link`
- `useRouter`
- `usePathname`
- `useSearchParams`
- dynamic routes
- `src/app/users/[userId]/page.tsx`
- `:user_id` ではなく `[userId]` で書くこと
- query string

タグ:

```text
start/014-next-navigation
end/014-next-navigation
```

## スコープ外

このカリキュラムでは、React / Next.js App Router の基礎理解を優先します。

次の内容は、必要になったタイミングで使いますが、詳しい解説はメインのレッスン対象にしません。

Tailwind CSS は `create-next-app` で導入します。UIを見やすくするために使いますが、Tailwind CSS自体の詳しい書き方は扱いません。

- Tailwind CSSの詳しい書き方
- デザインシステム
- CSS設計
- バックエンド実装
- DB設計
- 認証
- 決済
- デプロイ運用

## 後続候補

基本レッスンが終わったあとに、必要に応じて追加します。

- `useMemo`
- `useCallback`
- `useReducer`
- `useContext`
- `useTransition`
- `useDeferredValue`
- `useOptimistic`
- `useActionState`
- Server Actions
- `loading.tsx`
- `error.tsx`
- `not-found.tsx`
- `generateMetadata`
