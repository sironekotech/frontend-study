# frontend-study

React と Next.js を学ぶための公開学習リポジトリです。

このリポジトリでは、React の基礎、TypeScript / TSX の読み方、Next.js App Router、React Hooks、Server Component / Client Component、SSR / CSR、Route Handler を画面で確認できる教材サイトを作っていきます。

## このリポジトリで学ぶこと

- React の基本
- TypeScript と TSX の基本
- Next.js App Router の基本
- React Hooks の使い方
- React Hooks の全体像
- Server Component と Client Component の違い
- SSR / CSR / Static Rendering / Streaming の違い
- `app/api` の Route Handler
- 実務で迷いやすいディレクトリ構成

## 方針

- 新規開発の前提として App Router を使う
- Pages Router は扱わない
- API は `app/api` の Route Handler で作る
- SSR / CSR の違いを同じUIで比較できるようにする
- 学習ページは `app/(pages)` にまとめる
- 再利用する custom hooks は `src/hooks` に置く
- ページ専用の部品はページの近くに `_components` や `_hooks` として置く
- `'use client'` は必要な場所だけに置く

## 前提環境

- Node.js
- npm
- Git
- インターネット接続

バージョン確認:

```bash
node -v
npm -v
git --version
```

Next.js の必要な Node.js バージョンは変わることがあります。エラーが出た場合は、Next.js の公式ドキュメントで現在の必要バージョンを確認します。

## セットアップ

Next.js を展開したあとの通常利用では、cloneして依存関係をインストールします。

### 1. リポジトリをcloneする

```bash
git clone https://github.com/sironekotech/frontend-study.git
cd frontend-study
```

### 2. 依存関係をインストールする

```bash
npm install
```

### 3. 開発サーバーを起動する

```bash
npm run dev
```

ブラウザで次のURLを開きます。

```text
http://localhost:3000
```

### 4. ビルド確認

```bash
npm run build
```

## 初回だけ: Next.js をリポジトリ直下に展開する

このリポジトリでは、`frontend-study` 配下にさらに `frontend-study` や `my-app` のようなフォルダを作りません。

プロジェクト名に `.` を指定して、現在のディレクトリに Next.js のファイルを展開します。

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*" --use-npm --disable-git --no-react-compiler --no-agents-md
```

`--disable-git` は、このリポジトリがすでに Git 管理されているため指定しています。Next.js の初期化時に別の Git 初期化を走らせないための指定です。

`--no-react-compiler` は、まずReactの再レンダーや `useMemo` / `useCallback` の意味を手で観察しやすくするために指定しています。

`--no-agents-md` は、この学習リポジトリではまずReact / Next.js本体の理解を優先するために指定しています。

`create-next-app@latest` は時期によって生成されるファイルや質問内容が変わることがあります。このREADMEでは、App Router を使う学習リポジトリとしての推奨選択を書いています。

すでに `README.md` がある状態で `create-next-app` を実行すると、READMEの衝突で止まることがあります。その場合は、READMEを一時退避してから展開し、あとで戻します。

```bash
mv README.md README.frontend-study.md
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*" --use-npm --disable-git --no-react-compiler --no-agents-md
mv README.frontend-study.md README.md
```

## create-next-app の選択肢

対話形式で実行すると、いくつか質問されます。このリポジトリでは次の選択にします。

| 質問 | 選択 | 理由 |
| --- | --- | --- |
| What is your project named? | `.` | 現在の `frontend-study` 直下に展開するため |
| Would you like to use TypeScript? | Yes | React / Next.js の props、API、Hooks の型を学べるため |
| Which linter would you like to use? | ESLint | Next.js / React の基本的な書き方をチェックできるため |
| Would you like to use React Compiler? | No | まずは再レンダーやメモ化の挙動を手で観察しやすくするため |
| Would you like to use Tailwind CSS? | Yes | UIを素早く作り、Hooks の動きを見える化しやすいため |
| Would you like your code inside a `src/` directory? | Yes | アプリケーションコードと設定ファイルを分けやすいため |
| Would you like to use App Router? | Yes | 新規Next.js開発の基本として学ぶため |
| Would you like to use Turbopack? | Yes | 開発サーバーを高速に起動・更新しやすいため |
| Would you like to customize the import alias? | No | デフォルトの `@/*` で十分わかりやすいため |
| Would you like to include AGENTS.md? | No | 初学者向けには、まずReact / Next.js本体の理解を優先するため |

バージョンによっては、次のような質問や選択肢が追加されることがあります。

| 質問・選択肢 | このリポジトリでの考え方 |
| --- | --- |
| Biome | まずは ESLint を選ぶ。Next.js / React の一般的な学習資料と合わせやすいため |
| Webpack | まずは Turbopack を選ぶ。古い構成との差分を学ぶ段階になったら比較する |
| package manager | npm を使う。最初の学習では前提を増やさないため |

## ファイル拡張子の基本

React / Next.js / TypeScript では、ファイル拡張子を見るだけで、そのファイルの役割をある程度判断できます。

| 拡張子 | 使いどころ |
| --- | --- |
| `.ts` | TypeScriptファイル。関数、型定義、設定、hooks、ユーティリティなど |
| `.tsx` | JSXを書けるTypeScriptファイル。ReactコンポーネントやNext.jsのページなど |
| `.js` | JavaScriptファイル。TypeScriptを使わない場合の通常ファイル |
| `.jsx` | JSXを書けるJavaScriptファイル。TypeScriptを使わないReactコンポーネント |
| `.css` | CSSファイル。グローバルCSSやスタイル定義 |
| `.json` | 設定やデータを表すファイル |

このリポジトリでは TypeScript を使うため、基本は `.ts` と `.tsx` を使います。

### `.ts` を使う例

画面を返さないファイルは `.ts` にします。

```text
src/hooks/useCounter.ts
src/lib/formatDate.ts
src/app/api/hello/route.ts
```

### `.tsx` を使う例

JSXを書くファイルは `.tsx` にします。

```text
src/app/page.tsx
src/app/(pages)/hooks/use-state/page.tsx
src/app/(pages)/hooks/use-state/_components/UseStateDemo.tsx
```

### JSXとは

JSXは、JavaScript / TypeScript の中にHTMLのような見た目でUIを書ける構文です。

```tsx
export function Greeting({ name }: { name: string }) {
  return <p>Hello, {name}</p>;
}
```

`{name}` のように波かっこを書くと、JavaScript / TypeScript の値を画面に埋め込めます。

## 推奨ディレクトリ構成

```text
src/
  app/
    layout.tsx
    page.tsx
    (pages)/
      react-basics/
        jsx/
          page.tsx
        props/
          page.tsx
        events/
          page.tsx
        forms/
          page.tsx
        list-key/
          page.tsx
      hooks/
        use-state/
          page.tsx
          _components/
            UseStateDemo.tsx
        use-ref/
          page.tsx
          _components/
            UseRefDemo.tsx
      client-server/
        page.tsx
        _components/
          ClientCounter.tsx
      rendering/
        ssr/
          page.tsx
        csr/
          page.tsx
          _components/
            CsrDataDemo.tsx
    api/
      hello/
        route.ts
  components/
    ui/
  hooks/
    useCounter.ts
  lib/
    formatDate.ts
```

### `src/app/(pages)`

学習ページをまとめる場所です。

`(pages)` は Route Group です。URLには出ません。たとえば次のファイルは、URLでは `/hooks/use-state` になります。

```text
src/app/(pages)/hooks/use-state/page.tsx
```

`(pages)` はこのリポジトリの整理ルールです。Next.jsが必ず要求する名前ではありません。

### `src/app/api`

API を置く場所です。

App Router では `app/api/**/route.ts` に Route Handler を作ります。

```text
src/app/api/hello/route.ts
```

Route Handler では、HTTPメソッドに対応する関数をexportします。

```ts
export function GET() {
  return Response.json({ message: 'Hello from Route Handler' });
}
```

### `src/hooks`

複数のページやコンポーネントから再利用する custom hooks を置く場所です。

```text
src/hooks/useCounter.ts
```

1つのページでしか使わない hooks は、無理に `src/hooks` へ出さず、ページの近くに置きます。

```text
src/app/(pages)/hooks/use-counter/_hooks/useCounterDemo.ts
```

### `_components` と `_hooks`

`_components` や `_hooks` は、そのルート専用の実装を置くための private folder として使います。

`app` 配下に置いたファイルがすべてURLになるわけではありません。URLになるのは主に `page.tsx` や `route.ts` などの特別なファイルです。

それでも `_components` や `_hooks` を使うと、ページ専用のコードだと分かりやすくなります。

## 学習ロードマップ

### 1. React基礎

- JSX
- コンポーネント
- props
- children
- 条件分岐
- list と `key`
- イベント処理
- フォーム入力
- controlled component
- stateの基本
- 配列とオブジェクトのstate更新

### 2. TypeScript / TSX基礎

- `.ts` と `.tsx` の違い
- propsの型
- eventの型
- stateの型推論
- 配列・オブジェクトの型
- 関数の引数と戻り値の型

### 3. Hooks基礎

- `useState`
- `useEffect`
- `useRef`
- custom hooks

### 4. Hooks応用

- `useReducer`
- `useContext`
- `useMemo`
- `useCallback`
- `useId`
- `useTransition`
- `useDeferredValue`

### 5. Hooks発展

- `useLayoutEffect`
- `useInsertionEffect`
- `useImperativeHandle`
- `useSyncExternalStore`
- `useDebugValue`
- `useEffectEvent`
- `useOptimistic`
- `useActionState`
- `useFormStatus`

### 6. Next.js App Router基礎

- `layout.tsx`
- `page.tsx`
- Route Group
- nested routes
- dynamic routes
- `loading.tsx`
- `error.tsx`
- `not-found.tsx`
- `generateMetadata`

### 7. Server / Client / Rendering

- Server Component
- Client Component
- SSR
- CSR
- Static Rendering
- Streaming
- Suspense

### 8. APIとデータ取得

- Route Handler
- `GET`
- `POST`
- Server Componentでのデータ取得
- Client Componentでのデータ取得
- Server Actions
- `'use server'`

## React Hooks の全体像

React Hooks は、初学者が最初からすべて覚える必要はありません。

まずは `useState`、`useEffect`、`useRef` を使って、画面がどう更新されるかを理解します。その後、状態管理、Context、メモ化、非同期UI、外部ストア連携の順で広げます。

| 分類 | Hooks |
| --- | --- |
| State | `useState`, `useReducer`, `useActionState`, `useOptimistic` |
| Context | `useContext` |
| Ref | `useRef`, `useImperativeHandle` |
| Effect | `useEffect`, `useLayoutEffect`, `useInsertionEffect`, `useEffectEvent` |
| Performance | `useMemo`, `useCallback`, `useTransition`, `useDeferredValue` |
| Other | `useId`, `useSyncExternalStore`, `useDebugValue` |
| React DOM | `useFormStatus` |

このリポジトリでは、基礎Hooksは必ず画面で動かして確認します。発展Hooksは、実アプリで使う場面が分かる小さい例を用意します。

## React基礎で大事なこと

Hooksを覚える前に、まずはReactの基本を押さえます。

### props

propsは、親コンポーネントから子コンポーネントへ渡す値です。

```tsx
type UserNameProps = {
  name: string;
};

export function UserName({ name }: UserNameProps) {
  return <p>{name}</p>;
}
```

### children

childrenは、コンポーネントの中に書いた要素を受け取るためのpropsです。

```tsx
type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return <section>{children}</section>;
}
```

### state更新

前のstateを使って更新する場合は、関数で更新します。

```tsx
setCount((prevCount) => prevCount + 1);
```

配列やオブジェクトのstateは直接変更せず、新しい値を作って更新します。

```tsx
setItems((prevItems) => [...prevItems, newItem]);
```

## Client Component の考え方

App Router では、コンポーネントはデフォルトで Server Component です。

`useState`、`useEffect`、`useRef`、イベントハンドラ、ブラウザAPIを使うコンポーネントは Client Component にする必要があります。

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

`'use client'` は、そのファイルを Client Component の入口にする指定です。必要以上に大きなファイルへ付けず、動きが必要な小さいコンポーネントに付けます。

学習ページでは、`page.tsx` はできるだけ Server Component のままにして、動きが必要な部分だけを `_components` の Client Component に分けます。

```text
src/app/(pages)/hooks/use-state/
  page.tsx
  _components/
    UseStateDemo.tsx
```

Server Component から Client Component に渡すpropsは、JSONとして表現できる値にします。関数やクラスインスタンスは基本的に渡せません。

## Server Component / SSR / CSR の考え方

Server Component、SSR、CSRは関連していますが、同じ意味ではありません。

| 用語 | 意味 |
| --- | --- |
| Server Component | サーバー側で実行されるコンポーネント |
| Client Component | ブラウザ側で操作や状態を扱えるコンポーネント |
| SSR | リクエスト時にサーバーでHTMLを生成する rendering |
| CSR | ブラウザ側のJavaScriptでデータ取得や画面更新をする rendering |
| Static Rendering | ビルド時などにHTMLを事前生成する rendering |
| Streaming | UIを分割して、準備できた部分から順に送る rendering |

App Routerでは、Server Componentを使っていても、必ず毎回SSRになるわけではありません。データ取得のキャッシュ設定やDynamic APIの利用によって、static rendering、dynamic rendering、streaming などに分かれます。

Client Componentも、初回表示ではサーバーでHTMLが事前生成され、その後ブラウザでhydrateされます。このREADMEでいうCSRは、主に `useEffect` でブラウザ側からデータ取得するパターンを指します。

## SSR と CSR の比較

このリポジトリでは、SSR と CSR を別ページで比較します。

```text
src/app/(pages)/rendering/ssr/page.tsx
src/app/(pages)/rendering/csr/page.tsx
```

### SSR

SSR はサーバー側でデータを取得し、HTMLを生成してからブラウザへ返す考え方です。

学習用の比較として、Server Component の `page.tsx` で Route Handler を呼ぶ例を作ります。

```tsx
export default async function SsrPage() {
  const response = await fetch('http://localhost:3000/api/hello', {
    cache: 'no-store',
  });
  const data = await response.json();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

この例は、SSR と Route Handler の動きを見比べるための学習用です。実アプリで同じサーバー内の処理を使う場合は、HTTP経由で自分自身のAPIを呼ぶより、`src/lib` の関数を Server Component と Route Handler から共有するほうが自然です。

### CSR

CSR はブラウザ側で JavaScript を実行してからデータを取得し、画面を更新する考え方です。

App Router では、`'use client'` を付けた Client Component の中で `useEffect` を使う例を作ります。

```tsx
'use client';

import { useEffect, useState } from 'react';

export function CsrDataDemo() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <p>{message}</p>;
}
```

SSR / CSR のページでは、表示される結果だけでなく、どこでデータ取得が起きているかも画面上で分かるようにします。

## よくある失敗

### `my-app` フォルダができてしまった

`create-next-app` のプロジェクト名に `my-app` を指定すると、現在の場所に `my-app` フォルダが作られます。

このリポジトリでは、現在のディレクトリに展開したいので `.` を指定します。

### 違うディレクトリでコマンドを実行した

`npx create-next-app@latest .` は、今いるディレクトリにファイルを展開します。実行前に `pwd` で場所を確認します。

```bash
pwd
```

### port 3000 が使われている

すでに別のアプリが `3000` 番ポートを使っている場合、Next.js が別のポートを提案することがあります。

### Node.js のバージョンが古い

Next.js の起動やインストールでエラーが出る場合、Node.js のバージョンを確認します。

```bash
node -v
```

## 参考

- React Learn: https://react.dev/learn
- React Built-in Hooks: https://react.dev/reference/react/hooks
- Next.js Project Structure: https://nextjs.org/docs/app/getting-started/project-structure
- Next.js Server and Client Components: https://nextjs.org/docs/app/getting-started/server-and-client-components
- Next.js Route Handlers: https://nextjs.org/docs/app/getting-started/route-handlers
- Next.js create-next-app CLI: https://nextjs.org/docs/app/api-reference/cli/create-next-app
- Next.js Installation: https://nextjs.org/docs/app/getting-started/installation
