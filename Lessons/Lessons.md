# Lessons

このドキュメントは、`frontend-study` のレッスン全体計画です。

README.md は、リポジトリの目的、セットアップ、日常的に使うコマンドを書く場所です。

`Lessons.md` は、教材をどの順番で進めるか、各レッスンの開始地点と完成地点をどう管理するか、参加者の作業ブランチやPRをどう扱うかを整理する場所です。

## 現在の前提

このリポジトリでは、参加者がReact / Next.jsの学習に集中できるように、開発環境と品質チェックの基盤は管理者が先に用意します。

すでに `main` に入っている前提:

- Next.js App Router 初期構成
- React
- TypeScript
- `src` ディレクトリ
- Tailwind CSS
- ESLint
- Prettier
- `.gitignore`
- Dockerfile
- `compose.yaml`
- `.dockerignore`
- GitHub Actions
- GitHub labels
- GitHub ruleset
- required status check

参加者に、Dockerfile、GitHub Actions、formatter設定、ignore設定を作らせるレッスンは作りません。

## 実行環境

標準の実行環境は、macOS + nvm + npm です。

```text
macOS
nvm
Node.js 25.8.2
npm 11
```

Node.js のバージョンは `.nvmrc` を正とします。

```bash
nvm install
nvm use
npm ci
npm run dev
```

Dockerは任意の実行環境です。Dockerを使いたい参加者は、管理者が用意した `Dockerfile` と `compose.yaml` を使います。

```bash
docker compose up --build
```

Docker自体の構築や詳しい解説は、このカリキュラムのスコープ外です。

## 品質チェック

このリポジトリでは、次のコマンドを標準の確認コマンドにします。

```bash
npm run format:check
npm run lint
npm run build
```

GitHub Actions では、Pull Request 作成時に次を実行します。

```bash
npm ci
npm run format:check
npm run lint
npm run build
```

`main` の ruleset では、`Format, lint, and build` を required status check にします。

## レッスン運用

このリポジトリでは、管理者が教材を `main` に少しずつ積み上げます。

各レッスンには、開始地点と完成地点のタグを用意します。

```text
main
  最新の完成版

start/<lesson>
  そのレッスンを始める地点
  教材mdとスターターコードはあるが、完成実装はまだない

end/<lesson>
  そのレッスンの完成見本
  教材mdと完成実装が両方ある

<username>/<lesson>
  参加者ごとの作業ブランチ
```

タグはブランチではありません。特定のコミットに付ける固定の目印です。

参加者に案内済みのタグは動かしません。タグは参加者が学習開始地点や完成見本として使うためです。

ただし、参加者に案内する前に誤ったタグを付けた場合は、最終的に使うタグだけが残るように整理します。

このリポジトリでは、Lesson 1 から順番に最終タグへ整理します。

```text
start/001-project-foundation
end/001-project-foundation
```

## レッスンタグの前提

`start/...` は、前のレッスンの完成直後ではありません。

`start/...` は、そのレッスンの教材mdとスターターコードが `main` に入ったあとに付けます。

つまり、参加者が `start/...` からブランチを作った時点で、次のファイルを確認できる必要があります。

```text
Lessons/<lesson>.md
```

また、受講者が編集するためのスターターコードと、ブラウザで開く学習ページも入っている必要があります。

例:

```text
src/app/(pages)/react-basics/list-key/page.tsx
src/app/page.tsx
```

一方で、`start/...` には完成実装を入れません。

参加者が自分で作る対象は、TODOや仮表示を含む未完成の状態にします。

```text
start/<lesson>
  Lessons/<lesson>.md はある
  スターターコードはある
  完成実装はまだない

end/<lesson>
  Lessons/<lesson>.md がある
  完成実装がある
```

参加者に案内済みの `start/...` に学習ページやスターターコードが入っていない場合は、そのタグを動かしません。

まだ参加者に案内していない場合は、誤ったタグを削除し、同じタグ名で正しいコミットに付け直します。

例:

```text
start/003-react-list-key
  教材mdとスターターコードが入った開始地点。
```

Lesson 4 以降の `start/...` では、`Lessons/<lesson>.md` は補足資料として残します。

受講者が最初に見るのは、ブラウザで開く学習ページです。

## 教材作成方針

Lesson 4 以降は、学習ページを主教材にします。

受講者が `Lessons/*.md` とブラウザを行き来しないと進められない状態にはしません。

役割は次のように分けます。

```text
学習ページ
  受講者が最初に見るメイン教材
  何を学ぶか、今何が表示されているか、どのTODOを直すかを画面で説明する

TSX
  受講者が実際に編集する場所
  TODOコメントと仮表示を残す

Lessons/*.md
  タグ、開始方法、完成条件、補足説明、復習用チェックリストを書く場所
  先生・運営側がレッスン設計を確認する場所

README.md
  リポジトリの目的、環境構築、日常コマンドを書く場所
```

Lesson 1 から Lesson 3 までは、mdを読みながら進める前提で作りました。

Lesson 4 以降は、ページだけ見ても学習と実装を進められるようにします。

`Lessons/*.md` は残しますが、受講者に必読として扱わせません。

ページ内には、最低限次を入れます。

- このレッスンで学ぶ言葉の短い説明
- 前レッスンとのつながり
- 画面に出ているものとコードの対応
- 直すTODOの順番
- 練習問題
- 完了条件

スターターコードは、完成実装ではなく、ページ内の説明と対応したTODOや仮表示を含む状態にします。

## 名前のルール

### タグ

```text
start/001-project-foundation
end/001-project-foundation
```

`start/...` は開始地点です。

`end/...` は完成見本です。

### 参加者ブランチ

```text
<username>/<lesson>
```

例:

```text
sirotyuke/001-project-foundation
taro/002-react-jsx
hanako/006-hooks-use-state
```

参加者は、必ず自分の名前を先頭に付けたブランチで作業します。

## 参加者の進め方

まず、タグを取得します。

```bash
git fetch --all --tags
```

次に、レッスンの開始タグから自分用ブランチを作ります。

```bash
git switch -c <username>/001-project-foundation start/001-project-foundation
```

例:

```bash
git switch -c taro/001-project-foundation start/001-project-foundation
```

Lesson 1 から Lesson 3 までは、ブランチを作ったら最初にそのレッスンのmdを読みます。

```text
Lessons/001-project-foundation.md
```

Lesson 4 以降は、まず学習ページをブラウザで開きます。

例:

```text
/react-basics/props-children
```

mdは補足、復習、運営用として使います。

mdには、タグ、開始方法、補足説明、練習問題、確認方法を書きます。

スターターコードには、完成実装ではなく、受講者が編集するためのTODOや仮表示を残します。

作業後は、自分のブランチをpushします。

```bash
git push -u origin taro/001-project-foundation
```

完成見本を見たい場合は、`end/...` タグを確認します。

```bash
git switch --detach end/001-project-foundation
```

自分の作業と完成見本を比べたい場合は、作業ブランチに戻ってからdiffを見ます。

```bash
git switch taro/001-project-foundation
git diff end/001-project-foundation
```

参加者のPRはレビュー用です。原則として `main` にはmergeしません。

PRはcloseせず、学習ログとして残します。

```text
taro/001-project-foundation
  mainへPRを作る
  レビューを受ける
  必要なら修正する
  学習が終わったらdoneラベルを付ける
```

`main` にmergeするのは、管理者が作る教材PRだけです。

## 参加者PRラベル

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

ラベルは管理者が付けます。参加者が付けても問題ありませんが、最終的な状態管理は管理者が確認します。

## 管理者の進め方

管理者は、レッスンを2段階で作ります。

### 1. 開始教材を用意する

まず、学習ページ、補足md、スターターコードを入れるPRを作ります。

```bash
git switch main
git pull
git switch -c prepare/001-project-foundation
```

このPRでは、原則として次を変更します。

```text
Lessons/<lesson>.md
src/app/(pages)/.../<lesson>/page.tsx
```

必要に応じて、トップページからスターターページへ移動する導線、`Lessons/Lessons.md`、README.md の運用説明も更新します。

このPRに入れるページやコンポーネントは、完成実装ではなくスターターコードにします。

Lesson 4 以降の学習ページは、受講者がページだけ見ても進められる内容にします。

スターターコードには、次を残します。

```text
TODO
仮表示
受講者が編集する配列や関数
```

開始教材のPRを `main` にmergeしたあと、開始タグを付けます。

```bash
git switch main
git pull
git tag start/001-project-foundation
git push origin start/001-project-foundation
```

### 2. 完成見本を作る

開始タグから、完成見本用の作業ブランチを作ります。

```bash
git switch -c lesson/001-project-foundation start/001-project-foundation
```

このPRでは、開始教材に対応する完成実装を作ります。

スターターコードのTODOや仮表示を、完成見本の実装に置き換えます。

例:

```text
src/app/(pages)/react-basics/list-key/page.tsx
src/app/page.tsx
```

完成見本PRを作成し、GitHub Actions と review を通して、`main` に squash merge します。

merge後の `main` に完成タグを付けます。

```bash
git switch main
git pull
git tag end/001-project-foundation
git push origin end/001-project-foundation
```

### タグを付けるタイミング

タグを付けるタイミングは次で固定します。

```text
prepare PR merge後
  start/<lesson>
  学習ページ、補足md、スターターコードが入っている

完成見本PR merge後
  end/<lesson>
  学習ページ、補足md、完成実装が入っている
```

`start/...` を、学習ページやスターターコードがないコミットに付けてはいけません。

`end/...` を、完成実装がないコミットに付けてはいけません。

## 個別レッスンファイル

`Lessons.md` は全体計画です。各レッスンの詳しい手順は、別ファイルに書きます。

```text
Lessons/
  Lessons.md
  001-project-foundation.md
  002-react-jsx.md
  003-react-list-key.md
  004-react-props-children.md
  005-react-use-state-event.md
  006-hooks-use-state.md
  007-react-forms-controlled-component.md
  008-next-app-router-routing.md
```

個別レッスンファイルには、次の内容を書きます。

```text
# 001-project-foundation

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

## レッスン設計の考え方

初学者向けなので、1レッスンで学ぶことを詰め込みすぎません。

TypeScript / TSX は独立した巨大レッスンにはせず、各レッスンの中で少しずつ扱います。

例:

- 001で生成済みのNext.js構成と `.ts` / `.tsx` の違いを見る
- 004でpropsの型を書く
- 005でeventの型を書く
- 006以降でstateやhooksの型を確認する

Hooks は、最初に `useState` / `useEffect` / `useRef` をしっかり画面で確認します。

その後、全てのReact Hooksを「実務でよく使うもの」「使いどころを知るもの」「ライブラリ寄り・発展寄りのもの」に分けて扱います。

## レッスン一覧

### 001-project-foundation

管理者が用意したNext.js App Routerの初期構成を読みます。

参加者は `create-next-app` を実行しません。生成済みのプロジェクトをcloneして、構成を読み、起動します。

学ぶこと:

- `.nvmrc`
- `package.json`
- `package-lock.json`
- `src` ディレクトリ
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `next.config.ts`
- `tsconfig.json`
- `.ts` と `.tsx` の違い
- `npm ci`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run format:check`

タグ:

```text
start/001-project-foundation
end/001-project-foundation
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

### 005-react-use-state-event

`useState` とイベント処理を学ぶページを作ります。

Lesson 4 では、propsで外から値を渡しました。

Lesson 5 では、ユーザーの操作でstateを更新し、画面が変わる流れを確認します。

学ぶこと:

- `useState`
- `onClick`
- `onChange`
- event handler
- stateによる再レンダー
- inputの値をstateで管理する最初の形
- stateを直接書き換えないこと

タグ:

```text
start/005-react-use-state-event
end/005-react-use-state-event
```

### 006-hooks-use-state

Lesson 5で触れた `useState` を、さらに詳しく学ぶページを作ります。

学ぶこと:

- `setState((current) => next)` の形
- Reactが覚えている最新のstateを使った更新
- 引数として渡される `current` の読み方
- オブジェクトは関係する値を1つにまとめるものだと理解する
- オブジェクトstateを直接書き換えず、新しいオブジェクトで更新する
- 配列stateを直接書き換えず、新しい配列で更新する
- 学習用にstateの型を明示する書き方

タグ:

```text
start/006-hooks-use-state
end/006-hooks-use-state
```

### 007-react-forms-controlled-component

フォーム入力と controlled component を学ぶページを作ります。

学ぶこと:

- フォームは入力欄をまとめるものだと理解する
- inputの値をstateで管理する
- controlled component
- `onChange`
- form submit
- eventの型

タグ:

```text
start/007-react-forms-controlled-component
end/007-react-forms-controlled-component
```

### 008-next-app-router-routing

Next.js App Router の基本ルーティングを学びます。

Route Handler や SSR / CSR より前に、まず画面の置き場所とURLの関係を理解します。

学ぶこと:

- `src/app`
- `layout.tsx`
- `page.tsx`
- Route Group
- nested routes
- dynamic routes
- `src/app/(pages)/users/[userId]/page.tsx`
- `:user_id` ではなく `[userId]` で書くこと

タグ:

```text
start/008-next-app-router-routing
end/008-next-app-router-routing
```

### 009-hooks-use-effect

`useEffect` を学ぶページを作ります。

学ぶこと:

- `useEffect`
- 依存配列
- cleanup
- ブラウザ側でのデータ取得
- 使いすぎないための考え方

タグ:

```text
start/009-hooks-use-effect
end/009-hooks-use-effect
```

### 010-hooks-use-ref

`useRef` を学ぶページを作ります。

学ぶこと:

- `useRef`
- DOM参照
- 再レンダーされない値
- inputへのfocus

タグ:

```text
start/010-hooks-use-ref
end/010-hooks-use-ref
```

### 011-hooks-rules

Hookのルールを学ぶページを作ります。

学ぶこと:

- Hooksはトップレベルで呼ぶ
- 条件分岐やループの中でHooksを呼ばない
- Reactコンポーネントかcustom hookからHooksを呼ぶ
- custom hookは `use` で始める
- ESLintがHookのルール違反を検出する理由

タグ:

```text
start/011-hooks-rules
end/011-hooks-rules
```

### 012-custom-hooks

custom hooks を学ぶページを作ります。

学ぶこと:

- custom hook
- `use` で始まる命名
- ロジックの再利用
- `src/hooks` に置くケース
- ページ近くの `_hooks` に置くケース

タグ:

```text
start/012-custom-hooks
end/012-custom-hooks
```

### 013-hooks-reducer-context

状態管理と共有値を学びます。

学ぶこと:

- `useReducer`
- reducer
- action
- `useContext`
- `createContext`
- props drillingとの違い

タグ:

```text
start/013-hooks-reducer-context
end/013-hooks-reducer-context
```

### 014-hooks-memo-callback

メモ化の基本を学びます。

React Compiler は最初の教材では無効にしています。まずは手動のメモ化が何をしているかを観察します。

学ぶこと:

- `useMemo`
- `useCallback`
- 再計算を避ける
- 子コンポーネントへ渡す関数
- 使いすぎないための考え方

タグ:

```text
start/014-hooks-memo-callback
end/014-hooks-memo-callback
```

### 015-hooks-transition-deferred-id

入力や重いUI更新を見ながら、非同期UIに近いHooksを学びます。

学ぶこと:

- `useTransition`
- `useDeferredValue`
- `useId`
- pending表示
- accessibility用のid

タグ:

```text
start/015-hooks-transition-deferred-id
end/015-hooks-transition-deferred-id
```

### 016-hooks-escape-hatches

発展的なHooksを、使いどころがわかる小さい例で確認します。

学ぶこと:

- `useLayoutEffect`
- `useImperativeHandle`
- `useSyncExternalStore`
- `useDebugValue`
- `useInsertionEffect`
- `useEffectEvent`

タグ:

```text
start/016-hooks-escape-hatches
end/016-hooks-escape-hatches
```

### 017-server-client-components

Server Component と Client Component を比較するページを作ります。

学ぶこと:

- Server Component
- Client Component
- `'use client'`
- propsの受け渡し
- Client Componentの境界を小さくする考え方

タグ:

```text
start/017-server-client-components
end/017-server-client-components
```

### 018-route-handler

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
start/018-route-handler
end/018-route-handler
```

### 019-rendering-static-dynamic-ssr-csr

Next.js App Router の rendering を比較します。

SSR / CSR だけでなく、App Router で混乱しやすい Static Rendering、Dynamic Rendering、fetch cache も一緒に扱います。

学ぶこと:

- SSR
- CSR
- Static Rendering
- Dynamic Rendering
- Streaming
- Server Componentでのデータ取得
- Client Componentでのデータ取得
- `fetch` cache
- `cache: 'no-store'`
- `revalidate`

タグ:

```text
start/019-rendering-static-dynamic-ssr-csr
end/019-rendering-static-dynamic-ssr-csr
```

### 020-next-navigation

App Router の画面遷移を学ぶページを作ります。

学ぶこと:

- `Link`
- `useRouter`
- `usePathname`
- `useSearchParams`
- dynamic routes
- query string

タグ:

```text
start/020-next-navigation
end/020-next-navigation
```

### 021-forms-actions-optimistic-ui

React 19 と Next.js のフォーム周りを学びます。

学ぶこと:

- `useActionState`
- `useOptimistic`
- `useFormStatus`
- form action
- pending表示
- optimistic UI
- Server Actions
- `'use server'`

タグ:

```text
start/021-forms-actions-optimistic-ui
end/021-forms-actions-optimistic-ui
```

### 022-suspense-use-loading-error

非同期UIとエラー境界の基本を学びます。

`use` はReactのAPIですが、通常のHooksとはルールが少し違う特別なAPIとして扱います。

学ぶこと:

- Suspense
- `use`
- `loading.tsx`
- `error.tsx`
- `not-found.tsx`
- Server Componentと非同期データ

タグ:

```text
start/022-suspense-use-loading-error
end/022-suspense-use-loading-error
```

## Hooksカバー範囲

React 19.2 / React DOM 19.2 のHooksを、次のレッスンで扱います。

| Hook                   | 扱うレッスン |
| ---------------------- | ------------ |
| `useState`             | 006          |
| `useEffect`            | 009          |
| `useRef`               | 010          |
| `useReducer`           | 013          |
| `useContext`           | 013          |
| `useMemo`              | 014          |
| `useCallback`          | 014          |
| `useTransition`        | 015          |
| `useDeferredValue`     | 015          |
| `useId`                | 015          |
| `useLayoutEffect`      | 016          |
| `useImperativeHandle`  | 016          |
| `useSyncExternalStore` | 016          |
| `useDebugValue`        | 016          |
| `useInsertionEffect`   | 016          |
| `useEffectEvent`       | 016          |
| `useActionState`       | 021          |
| `useOptimistic`        | 021          |
| `useFormStatus`        | 021          |

`use` はHooks一覧とは別に、022で特別なReact APIとして扱います。

## スコープ外

このカリキュラムでは、React / Next.js App Router の基礎理解を優先します。

次の内容は、必要になったタイミングで使いますが、詳しい解説はメインのレッスン対象にしません。

- Tailwind CSSの詳しい書き方
- デザインシステム
- CSS設計
- バックエンド実装
- DB設計
- 認証
- 決済
- 本番デプロイ運用
- Dockerそのものの構築

Tailwind CSS は UI を見やすくするために使いますが、Tailwind CSS自体の詳しい書き方は扱いません。

## 後続候補

基本レッスンが終わったあとに、必要に応じて追加します。

- `generateMetadata`
- metadata設計
- 画像最適化
- フォームバリデーション
- テスト
- アクセシビリティ
- パフォーマンス計測
