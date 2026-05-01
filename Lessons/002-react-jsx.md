# 002-react-jsx

## Goal

このレッスンでは、ReactのJSXを画面で確認します。

JSXはHTMLそのものではありません。TypeScriptの中で、HTMLに近い見た目でUIを書くための記法です。

このレッスンでは、次を学びます。

- JSXとは何か
- `{}` で値を画面に埋め込むこと
- `className` で見た目を付けること
- 条件によって表示を変えること
- ReactではUIを関数として分けられること

## Start

```text
start/002-react-jsx
```

## End

```text
end/002-react-jsx
```

このタグは、Lesson 2 の教材と実装が `main` に入ったあとで管理者が付けます。

## Build

次のページを作ります。

```text
src/app/(pages)/react-basics/jsx/page.tsx
```

URLは次です。

```text
/react-basics/jsx
```

トップページからも、この学習ページへ移動できるようにします。

## Before You Start

タグを取得します。

```bash
git fetch --all --tags
```

Lesson 2 の開始タグから、自分用のブランチを作ります。

```bash
git switch -c <username>/002-react-jsx start/002-react-jsx
```

例:

```bash
git switch -c taro/002-react-jsx start/002-react-jsx
```

## Steps

### 1. 学習ページのファイルを作る

App Routerでは、`page.tsx` がURLに対応するページになります。

今回は次の場所に作ります。

```text
src/app/(pages)/react-basics/jsx/page.tsx
```

`(pages)` はURLには出ません。

そのため、このファイルは次のURLになります。

```text
/react-basics/jsx
```

### 2. まずは文字を表示する

JSXは、HTMLに近い見た目で書けます。

```tsx
export default function ReactJsxPage() {
  return (
    <main>
      <h1>JSXの基本</h1>
      <p>TypeScriptの中でUIを書きます。</p>
    </main>
  );
}
```

この時点では、`export default` や `function` の細かい意味を全部覚えなくて大丈夫です。

まずは「関数がUIを返している」と捉えます。

### 3. `{}` で値を埋め込む

JSXの中では、波かっこを使ってTypeScriptの値を表示できます。

```tsx
const learnerName = 'React learner';

return <p>{learnerName}</p>;
```

文字列や数値だけでなく、計算結果も表示できます。

```tsx
const lessonNumber = 2;

return <p>Lesson {lessonNumber}</p>;
```

### 4. `className` で見た目を付ける

JSXでは、HTMLの `class` ではなく `className` を使います。

```tsx
return <p className="text-lg font-semibold">Hello JSX</p>;
```

このリポジトリではTailwind CSSを使っています。

ただし、Tailwind CSS自体の詳しい学習は今回のスコープ外です。ここでは「classNameに文字を書くと見た目が変わる」くらいでOKです。

### 5. 条件で表示を変える

JSXでは、条件によって表示する内容を変えられます。

```tsx
const isReady = false;

return <p>{isReady ? '準備OK' : 'まだ準備中'}</p>;
```

これは三項演算子と呼ばれる書き方です。

今は「条件 ? trueのとき : falseのとき」くらいに読めれば十分です。

### 6. UIを小さな関数に分ける

Reactでは、画面の一部を関数として分けられます。

```tsx
function LessonBadge() {
  return <p>Lesson 2 / JSX</p>;
}
```

分けた関数は、JSXの中でタグのように使えます。

```tsx
return <LessonBadge />;
```

propsは次のレッスン以降で扱います。このレッスンでは、まず「UIを関数として分けられる」と覚えます。

### 7. トップページから移動できるようにする

トップページ `src/app/page.tsx` に、JSXページへのリンクを追加します。

```tsx
<a href="/react-basics/jsx">JSXページを開く</a>
```

`next/link` の `Link` は、後のナビゲーションレッスンで扱います。

このレッスンでは、まず通常の `a` タグでページへ移動できればOKです。

## Check

次を確認できれば、このレッスンは完了です。

- `/react-basics/jsx` をブラウザで開ける
- JSXはHTMLそのものではないと説明できる
- `{}` で値を画面に出せると説明できる
- JSXでは `class` ではなく `className` を使うと説明できる
- 条件で表示を変えられると説明できる
- UIを小さな関数に分けられると説明できる
- `npm run format:check` が通る
- `npm run lint` が通る
- `npm run build` が通る

## Common Mistakes

### `class` と書いてしまう

JSXでは `class` ではなく `className` を使います。

```tsx
<p className="text-lg">OK</p>
```

### `{}` を付け忘れる

TypeScriptの値を画面に出したいときは、波かっこで囲みます。

```tsx
const name = 'React learner';

return <p>{name}</p>;
```

### 文字列をそのまま表示したいだけなのに `{}` を使う

普通の文字を表示するだけなら、そのまま書けます。

```tsx
return <p>Hello JSX</p>;
```

### propsまで一気に覚えようとする

propsは `004-react-props-children` で扱います。

このレッスンでは、まずJSXの形に慣れます。

## Review

自分の言葉で、次を説明してみます。

- JSXとは何か
- HTMLとJSXは何が違うのか
- `{}` は何のために使うのか
- `className` は何のために使うのか
- ReactでUIを関数に分けるとはどういうことか

## Next

次は `003-react-list-key` で、配列の表示と `key` を学びます。
