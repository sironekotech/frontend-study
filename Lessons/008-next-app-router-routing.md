# 008-next-app-router-routing

## Goal

このレッスンでは、Next.js App Router の基本ルーティングを学びます。

Lesson 7 では、フォーム入力をReact stateで管理しました。

Lesson 8 では、画面を増やす前に、ファイルの場所とURLの関係を確認します。

このレッスンでは、次を学びます。

- `src/app` の役割
- `page.tsx` がURLになること
- `layout.tsx` が共通レイアウトになること
- Route Group
- nested routes
- dynamic routes
- Next.jsでは `:user_id` ではなく `[userId]` と書くこと

## Start

```text
start/008-next-app-router-routing
```

このタグには、Lesson 8 の補足mdとスターターページが入っています。

スターターページには、これから作るページのTODOが残っています。

Lesson 8 では、学習ページを主教材にします。

このmdは、タグ、開始方法、補足説明、復習用チェックリストを確認するための資料です。

## End

```text
end/008-next-app-router-routing
```

このタグは、Lesson 8 の完成見本です。

完成見本では、nested route と dynamic route のページが作成され、スターターページのTODO表示が実際のリンクに置き換わっています。

## Build

`start/008-next-app-router-routing` には、次のスターターページが入っています。

```text
src/app/(pages)/next-basics/app-router-routing/page.tsx
```

URLは次です。

```text
/next-basics/app-router-routing
```

トップページからも、この学習ページへ移動できます。

このレッスンでは、スターターページを読みながら、次のページを追加します。

```text
src/app/(pages)/next-basics/app-router-routing/profile/page.tsx
src/app/(pages)/users/[userId]/page.tsx
```

## Before You Start

タグを取得します。

```bash
git fetch --all --tags
```

Lesson 8 の開始タグから、自分用のブランチを作ります。

```bash
git switch -c <username>/008-next-app-router-routing start/008-next-app-router-routing
```

例:

```bash
git switch -c taro/008-next-app-router-routing start/008-next-app-router-routing
```

ブランチを作ったら、まず学習ページをブラウザで開きます。

```text
/next-basics/app-router-routing
```

このレッスンは、ページを見ながらスターターコードのTODOを順番に直す前提です。

このmdは補足として使います。

## What You Will Build

受講者は、このレッスンでスターターページを見ながら、次を作ります。

```text
app router routing lab
  current page
    /next-basics/app-router-routing が開けることを確認する

  nested route
    /next-basics/app-router-routing/profile を作る

  dynamic route
    /users/taro を作る
    /users/hanako でも同じpage.tsxが使われることを確認する

  route map
    未作成の表示を、開けるリンクに置き換える
```

最初は、このレッスンページだけが作成済みです。

`profile/page.tsx` と `users/[userId]/page.tsx` は、このレッスンで作成します。

## Steps

### 1. スターターページを開く

まず、次のファイルを開きます。

```text
src/app/(pages)/next-basics/app-router-routing/page.tsx
```

App Routerでは、`page.tsx` がURLに対応するページになります。

`(pages)` はRoute Groupなので、URLには出ません。

そのため、このファイルは次のURLになります。

```text
/next-basics/app-router-routing
```

### 2. page.tsx とURLの関係を見る

App Routerでは、`src/app` の中のフォルダ構成がURLになります。

```text
src/app
  (pages)
    next-basics
      app-router-routing
        page.tsx
```

このファイルは、次のURLになります。

```text
/next-basics/app-router-routing
```

読むときは、次のように考えます。

```text
src/app
  App Routerの入口

(pages)
  URLには出ない整理用フォルダ

next-basics/app-router-routing
  URLに出るフォルダ

page.tsx
  そのURLで表示するページ
```

### 3. nested routeを作る

フォルダを1つ深くすると、URLも1つ深くなります。

```text
src/app/(pages)/next-basics/app-router-routing/profile/page.tsx
```

URLは次です。

```text
/next-basics/app-router-routing/profile
```

### 4. dynamic routeを作る

URLの一部を変数のように扱うときは、角かっこのフォルダを作ります。

```text
src/app/(pages)/users/[userId]/page.tsx
```

URLは次のように変わります。

```text
/users/taro
/users/hanako
/users/sirotyuke
```

Next.js App Routerでは、`:user_id` ではなく `[userId]` と書きます。

## Check

ローカルで次を確認します。

```bash
npm run format:check
npm run lint
npm run build
```

画面では、次を確認します。

```text
/next-basics/app-router-routing が開ける
/next-basics/app-router-routing/profile が開ける
/users/taro が開ける
/users/hanako が開ける
ルート対応表で、未作成だった2つのページが「開ける」リンクに変わっている
```

## Review

このレッスンの復習では、次を説明できるか確認します。

- `src/app` は何のためのフォルダか
- `page.tsx` は何をするファイルか
- `layout.tsx` は何をするファイルか
- `(pages)` がURLに出ない理由
- nested routeとは何か
- dynamic routeとは何か
- Next.jsでは `:user_id` ではなく `[userId]` と書くこと
