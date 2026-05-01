# 001-project-foundation

## Goal

このレッスンでは、すでに用意されている Next.js / React プロジェクトの土台を読み、起動し、品質チェックを実行できるようにします。

この時点で、React、Next.js、TypeScript、JSXをすべて理解している必要はありません。

まずは「どのファイルが何のためにあるのか」をざっくり知ることを目標にします。

参加者は `create-next-app` を実行しません。

このリポジトリは、管理者があらかじめ Next.js App Router、TypeScript、ESLint、Prettier、Docker、GitHub Actions を用意した状態から学習を始めます。

## Start

```text
start/001-project-foundation
```

このタグは、Lesson 1 を始めるためのコード状態です。

## End

```text
end/001-project-foundation
```

このタグは、Lesson 1 の教材ファイルが `main` に入ったあとで管理者が付けます。

## Build

このレッスンでは、アプリの機能はまだ作りません。

代わりに、次のことができる状態を目指します。

- リポジトリをcloneできる
- `.nvmrc` の Node.js バージョンを使える
- 依存関係をインストールできる
- 開発サーバーを起動できる
- `format:check` / `lint` / `build` を実行できる
- 主要な設定ファイルの役割をざっくり説明できる
- `.ts` と `.tsx` の違いをざっくり説明できる

## First Words

このレッスンで出てくる言葉を、先に短く整理します。

最初から全部覚えなくて大丈夫です。迷ったときに戻って確認するためのメモです。

| 言葉           | ざっくりした意味                                           |
| -------------- | ---------------------------------------------------------- |
| React          | 画面を部品として作るためのライブラリ                       |
| Next.js        | ReactでWebサイトやWebアプリを作りやすくするフレームワーク  |
| Node.js        | JavaScript / TypeScript の開発ツールを動かすための実行環境 |
| npm            | パッケージのインストールやコマンド実行に使うツール         |
| TypeScript     | JavaScriptに型を足した言語                                 |
| JSX            | HTMLっぽい見た目で画面を書ける記法                         |
| App Router     | Next.jsでページやURLを作る仕組み                           |
| ESLint         | コードの問題を見つけるツール                               |
| Prettier       | コードの見た目を整えるツール                               |
| GitHub Actions | Pull Request時に自動で確認コマンドを実行する仕組み         |

JSX は Lesson 2 で学びます。

このレッスンでは、JSXを「HTMLっぽい見た目の画面の書き方」くらいに捉えておけばOKです。

## Before You Start

この教材ファイルは、GitHub上の `main` や別ウィンドウで開いたまま進めます。

開始タグから作った作業ブランチには、この教材ファイル自体が含まれない場合があります。

タグを取得します。

```bash
git fetch --all --tags
```

Lesson 1 の開始タグから、自分用のブランチを作ります。

```bash
git switch -c <username>/001-project-foundation start/001-project-foundation
```

例:

```bash
git switch -c taro/001-project-foundation start/001-project-foundation
```

`<username>` には、自分のGitHubユーザー名やチーム内で識別しやすい名前を入れます。

## Steps

### 1. Node.js のバージョンを合わせる

このリポジトリでは、Node.js のバージョンを `.nvmrc` に固定しています。

```bash
nvm install
nvm use
node -v
npm -v
```

`node -v` が `.nvmrc` と同じバージョンになっていればOKです。

### 2. 依存関係をインストールする

```bash
npm ci
```

`npm ci` は `package-lock.json` を元に依存関係を再現します。

学習リポジトリでは、参加者ごとの差分を減らすために `npm install` ではなく `npm ci` を基本にします。

### 3. 開発サーバーを起動する

```bash
npm run dev
```

ブラウザで開きます。

```text
http://localhost:3000
```

`3000` 番ポートが使われている場合、Next.js が別のポートを提案することがあります。その場合は、表示されたURLを開きます。

### 4. 品質チェックを実行する

別のターミナルで、次を実行します。

```bash
npm run format:check
npm run lint
npm run build
```

この3つが通れば、ローカルで最低限の確認ができています。

GitHub Actions でも Pull Request 作成時に同じ確認を実行します。

### 5. ファイルの役割を読む

次のファイルを開いて、役割を確認します。

この段階では、ファイルの中身を全部理解しなくて大丈夫です。

まずは「このファイルは何のためにあるのか」を一言で言える状態を目指します。

| ファイル                   | 役割                               |
| -------------------------- | ---------------------------------- |
| `.nvmrc`                   | Node.js の固定バージョン           |
| `package.json`             | npm scripts と依存パッケージ       |
| `package-lock.json`        | 依存パッケージの固定結果           |
| `tsconfig.json`            | TypeScript の設定                  |
| `next.config.ts`           | Next.js の設定                     |
| `eslint.config.mjs`        | ESLint の設定                      |
| `.prettierrc`              | Prettier の設定                    |
| `.prettierignore`          | Prettier の対象外                  |
| `.gitignore`               | Git に含めないファイル             |
| `.dockerignore`            | Docker build に含めないファイル    |
| `Dockerfile`               | Dockerで起動するためのイメージ定義 |
| `compose.yaml`             | Docker Compose の起動設定          |
| `.github/workflows/ci.yml` | Pull Request時に走るCI             |
| `src/app/layout.tsx`       | App Router 全体のレイアウト        |
| `src/app/page.tsx`         | `/` に対応するトップページ         |
| `src/app/globals.css`      | 全体に効くCSS                      |

### 6. `.ts` と `.tsx` の違いをざっくり確認する

TypeScript を使うファイルは、主に `.ts` と `.tsx` に分かれます。

| 拡張子 | 使いどころ                      |
| ------ | ------------------------------- |
| `.ts`  | JSXを書かないTypeScriptファイル |
| `.tsx` | JSXを書くTypeScriptファイル     |

JSXは、HTMLのような見た目で画面を書くための記法です。

たとえば、次の `<main>` や `<h1>` のような部分がJSXです。

```tsx
export default function Page() {
  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}
```

このコードを今すぐ全部理解する必要はありません。

「`.tsx` は、画面っぽいものを書くファイルなんだな」と分かれば、このレッスンでは十分です。

画面を返す React コンポーネントや Next.js の `page.tsx` / `layout.tsx` は、JSXを書くため `.tsx` です。

設定や関数だけを書くファイルは、基本的に `.ts` です。

例:

```text
src/app/page.tsx
src/app/layout.tsx
next.config.ts
```

### 7. App Router の入口を確認する

このリポジトリは Next.js App Router を使います。

まず見る場所は `src/app` です。

```text
src/app/
  layout.tsx
  page.tsx
  globals.css
```

`src/app/page.tsx` は `/` の画面です。

`src/app/layout.tsx` は、その配下のページに共通するレイアウトです。

`page.tsx` の中にある JSX は、まだ細かく読めなくて大丈夫です。

この時点では細かいルーティングは覚えなくて大丈夫です。`008-next-app-router-routing` で App Router のURL設計を詳しく扱います。

### 8. Dockerで起動する場合

Dockerを使う場合は、Docker Desktop などを起動してから実行します。

```bash
docker compose up --build
```

ブラウザで開きます。

```text
http://localhost:3000
```

Docker自体の構築や詳しい解説は、このカリキュラムのスコープ外です。

## Check

次を確認できれば、このレッスンは完了です。

- `nvm use` で `.nvmrc` の Node.js を使えている
- `npm ci` が完了する
- `npm run dev` で画面を開ける
- `npm run format:check` が通る
- `npm run lint` が通る
- `npm run build` が通る
- `src/app/page.tsx` が `/` の画面だと説明できる
- `src/app/layout.tsx` が共通レイアウトだと説明できる
- `.ts` と `.tsx` の違いをざっくり説明できる
- JSXは「HTMLっぽい見た目で画面を書く記法」だと説明できる

## Common Mistakes

### `create-next-app` を実行してしまう

このレッスンでは `create-next-app` を実行しません。

すでに Next.js の土台はリポジトリに入っています。

### `npm install` を使ってしまう

学習では `npm ci` を基本にします。

`npm install` は依存パッケージを追加・更新したいときに使います。

### `nvm: command not found` と表示される

nvm が入っていないか、shellの設定が読み込まれていません。

macOSでは、nvmをインストールしたあとにターミナルを開き直してから確認します。

```bash
nvm --version
```

### `.next` や `node_modules` をcommitしそうになる

`.next` や `node_modules` はGitに含めません。

`.gitignore` によって除外されています。

### `npm ci` で audit の注意が出る

依存パッケージの注意が表示されることがあります。

このレッスンでは `npm audit fix --force` を実行しません。`--force` は依存関係を大きく変える可能性があるため、管理者が別PRで判断します。

### わからない言葉を全部調べようとして止まってしまう

このレッスンでは、細かい仕組みを全部覚える必要はありません。

まずは起動できること、確認コマンドを実行できること、主要なファイルの役割をざっくり言えることを優先します。

## Review

自分の言葉で、次を説明してみます。

- なぜ `.nvmrc` があるのか
- なぜ `npm ci` を使うのか
- `package.json` の `scripts` は何をしているのか
- `src/app/page.tsx` はどのURLに対応しているのか
- JSXとは何か
- GitHub Actions は何を確認しているのか

ここまで説明できれば、次のレッスンに進めます。

## Next

次は `002-react-jsx` で、ReactのJSXを画面で確認します。
