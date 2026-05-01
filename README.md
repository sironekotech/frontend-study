# frontend-study

React と Next.js を学ぶための公開学習リポジトリです。

このリポジトリでは、Next.js App Router を使って React の基礎、TypeScript / TSX、Hooks、Server Component / Client Component、SSR / CSR、Route Handler を順番に学びます。

## 前提

- macOS
- nvm
- Node.js `25.8.2`
- npm `11`
- Git

Node.js のバージョンは `.nvmrc` に固定しています。`latest` は時期によって変わるため、このリポジトリでは `.nvmrc` の値を正とします。

## セットアップ

```bash
git clone https://github.com/sironekotech/frontend-study.git
cd frontend-study
nvm install
nvm use
npm ci
npm run dev
```

ブラウザで開きます。

```text
http://localhost:3000
```

## Dockerで起動する場合

Docker 環境は参加者に作らせず、リポジトリ側で用意します。

事前に Docker Desktop などを起動し、`docker compose` が使える状態にします。

```bash
docker compose up --build
```

ブラウザで開きます。

```text
http://localhost:3000
```

止める場合は `Ctrl + C` を押します。

## よく使うコマンド

| コマンド               | 目的                       |
| ---------------------- | -------------------------- |
| `npm run dev`          | 開発サーバーを起動する     |
| `npm run build`        | 本番ビルドが通るか確認する |
| `npm run lint`         | ESLintでコードを確認する   |
| `npm run format`       | Prettierで整形する         |
| `npm run format:check` | 整形済みか確認する         |

## 品質チェック

このリポジトリでは次を使います。

- Formatter: Prettier
- Linter: ESLint
- CI: GitHub Actions
- Package manager: npm
- Runtime: Node.js `25.8.2`

Pull Request では GitHub Actions が次を実行します。

```bash
npm ci
npm run format:check
npm run lint
npm run build
```

CI が安定したら、GitHub ruleset で required status checks に追加します。

## 学習対象

- React の基本
- TypeScript と TSX の基本
- JSX
- props / children
- state
- event
- form
- list / key
- React Hooks
- custom hooks
- App Router
- dynamic routes
- Server Component
- Client Component
- SSR / CSR
- Route Handler
- `app/api`

## スコープ外

このリポジトリは React / Next.js の初学者向け教材です。次は最初のスコープから外します。

- Tailwind CSS の詳細学習
- デザインシステム構築
- 認証
- DB
- 決済
- 本番デプロイ設計
- Dockerそのものの構築レッスン

Tailwind CSS と Docker は、学習を進めやすくするための土台として用意します。

## ディレクトリ方針

```text
src/
  app/
    layout.tsx
    page.tsx
    (pages)/
      react-basics/
      hooks/
      rendering/
      users/
    api/
      hello/
        route.ts
  components/
  hooks/
  lib/
```

### `src/app/(pages)`

学習ページをまとめる場所です。

`(pages)` は Route Group です。URLには出ません。

```text
src/app/(pages)/hooks/use-state/page.tsx
```

このファイルは URL では `/hooks/use-state` になります。

### `src/app/api`

API を置く場所です。

App Router では `app/api/**/route.ts` に Route Handler を作ります。

```text
src/app/api/hello/route.ts
```

### 動的ルーティング

Next.js では `:user_id` ではなく、角かっこで動的な値を表します。

```text
src/app/(pages)/users/[userId]/page.tsx
```

このページは `/users/1` や `/users/taro` のような URL に対応します。

## ファイル拡張子

| 拡張子  | 使いどころ                                                      |
| ------- | --------------------------------------------------------------- |
| `.ts`   | TypeScript。関数、型、hooks、Route Handler、ユーティリティなど  |
| `.tsx`  | JSXを書けるTypeScript。Reactコンポーネント、Next.jsのページなど |
| `.js`   | JavaScript                                                      |
| `.jsx`  | JSXを書けるJavaScript                                           |
| `.css`  | CSS                                                             |
| `.json` | 設定やデータ                                                    |

このリポジトリでは TypeScript を使うため、基本は `.ts` と `.tsx` を使います。

## Client Component の考え方

App Router では、コンポーネントはデフォルトで Server Component です。

`useState`、`useEffect`、`useRef`、イベントハンドラ、ブラウザAPIを使うコンポーネントは Client Component にします。

```tsx
'use client';

import { useState } from 'react';

export function UseStateDemo() {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
      count: {count}
    </button>
  );
}
```

`'use client'` は、動きが必要な小さいコンポーネントに付けます。学習ページの `page.tsx` はできるだけ Server Component のままにして、動く部分だけ `_components` に分けます。

```text
src/app/(pages)/hooks/use-state/
  page.tsx
  _components/
    UseStateDemo.tsx
```

## Server Component / SSR / CSR

Server Component、SSR、CSRは似ていますが、同じ意味ではありません。

| 用語             | 意味                                                         |
| ---------------- | ------------------------------------------------------------ |
| Server Component | サーバー側で実行されるコンポーネント                         |
| Client Component | ブラウザ側で操作や状態を扱えるコンポーネント                 |
| SSR              | リクエスト時にサーバーでHTMLを生成する rendering             |
| CSR              | ブラウザ側のJavaScriptでデータ取得や画面更新をする rendering |
| Static Rendering | ビルド時などにHTMLを事前生成する rendering                   |
| Streaming        | UIを分割して、準備できた部分から順に送る rendering           |

SSR / CSR は、同じ表示結果を別の実装で比較できるページを作ります。

## レッスン運用

参加者の作業ブランチは次の形にします。

```text
<username>/<lesson>
```

例:

```text
taro/002-react-jsx
```

レッスンの開始地点と完成地点は tag で管理します。

```text
start/002-react-jsx
end/002-react-jsx
```

参加者の Pull Request は学習ログとして扱います。基本的に main へ merge せず、label で状態を管理します。

使う label:

- `learning`
- `needs-review`
- `needs-fix`
- `reviewed`
- `done`

main に merge するのは、管理者が作る教材・土台・修正用の Pull Request だけにします。

## 初期生成メモ

このリポジトリの Next.js 土台は、リポジトリ直下で次のコマンドを実行して作りました。

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*" --use-npm --disable-git --no-react-compiler --no-agents-md
```

通常の参加者はこのコマンドを実行しません。参加者は `git clone` 後に `npm ci` します。

### create-next-app の選択肢

| 質問                                                | 選択   | 理由                                                   |
| --------------------------------------------------- | ------ | ------------------------------------------------------ |
| What is your project named?                         | `.`    | 現在の `frontend-study` 直下に展開するため             |
| Would you like to use TypeScript?                   | Yes    | props、API、Hooks の型を学べるため                     |
| Which linter would you like to use?                 | ESLint | Next.js / React の基本的な書き方を確認できるため       |
| Would you like to use React Compiler?               | No     | まず再レンダーやメモ化の挙動を手で観察しやすくするため |
| Would you like to use Tailwind CSS?                 | Yes    | UIを素早く作り、Hooks の動きを見える化しやすいため     |
| Would you like your code inside a `src/` directory? | Yes    | アプリケーションコードと設定ファイルを分けやすいため   |
| Would you like to use App Router?                   | Yes    | 新規Next.js開発の基本として学ぶため                    |
| Would you like to customize the import alias?       | No     | デフォルトの `@/*` で十分わかりやすいため              |
| Would you like to include AGENTS.md?                | No     | 初学者向けにはReact / Next.js本体の理解を優先するため  |

## 参考

- nvm: https://github.com/nvm-sh/nvm
- React Learn: https://react.dev/learn
- React Hooks: https://react.dev/reference/react/hooks
- Next.js App Router: https://nextjs.org/docs/app
- Next.js Route Handlers: https://nextjs.org/docs/app/getting-started/route-handlers
- Next.js create-next-app: https://nextjs.org/docs/app/api-reference/cli/create-next-app
