# 004-react-props-children

## Goal

このレッスンでは、Reactの `props` と `children` を画面で確認します。

Lesson 3 では、配列の1件ずつを `map` でカードに変えました。

Lesson 4 では、そのカードの形を小さなコンポーネントに分けて、外から値を渡せるようにします。

このレッスンでは、次を学びます。

- propsとは何か
- propsで子コンポーネントへ値を渡すこと
- propsの型を書くこと
- childrenで内側の表示を渡すこと
- 同じUIをコピーせず、コンポーネントとして使い回すこと

## Start

```text
start/004-react-props-children
```

このタグには、Lesson 4 の補足mdとスターターページが入っています。

スターターページにはTODOと仮表示が残っています。

Lesson 4 からは、学習ページを主教材にします。

このmdは、タグ、開始方法、補足説明、復習用チェックリストを確認するための資料です。

## End

```text
end/004-react-props-children
```

このタグは、Lesson 4 の完成見本です。

## Build

`start/004-react-props-children` には、次のスターターページが入っています。

```text
src/app/(pages)/react-basics/props-children/page.tsx
```

URLは次です。

```text
/react-basics/props-children
```

トップページからも、この学習ページへ移動できます。

このレッスンでは、ファイルを新規作成するのではなく、スターターページのTODOや仮表示を置き換えます。

## Before You Start

タグを取得します。

```bash
git fetch --all --tags
```

Lesson 4 の開始タグから、自分用のブランチを作ります。

```bash
git switch -c <username>/004-react-props-children start/004-react-props-children
```

例:

```bash
git switch -c taro/004-react-props-children start/004-react-props-children
```

ブランチを作ったら、まず学習ページをブラウザで開きます。

```text
/react-basics/props-children
```

このレッスンは、ページを見ながらスターターコードのTODOを順番に直す前提です。

このmdは補足として使います。

## What You Will Build

受講者は、このレッスンでスターターページを編集して、次を作ります。

```text
Props and children lab
  手書きカード
    JSX
    map

  propsで作るカード
    JSX
    map
    key

  childrenで作る説明枠
    propsは外から値を渡す
    childrenはタグの内側を渡す
```

最初は同じようなカードを手で書いた例を見ます。

次に、`LessonCard` コンポーネントを作り、`title`、`description`、`status` を props で渡します。

最後に、`NoteBox` コンポーネントを使い、タグの内側に書いた内容が `children` として表示されることを確認します。

## Steps

### 1. スターターページを開く

まず、次のファイルを開きます。

```text
src/app/(pages)/react-basics/props-children/page.tsx
```

App Routerでは、`page.tsx` がURLに対応するページになります。

`(pages)` はURLには出ません。

そのため、このファイルは次のURLになります。

```text
/react-basics/props-children
```

このページには、最初から次が入っています。

```text
このレッスンで出てくる言葉
手書きカードの例
TODO付きの LessonCardProps 型
TODO付きの LessonCard コンポーネント
TODO付きの NoteBox コンポーネント
```

このレッスンでは、ファイルを新規作成するのではなく、スターターコードを編集します。

### 2. 手書きカードを見る

最初は、次のようにカードを手で書いても画面は作れます。

```tsx
<article>
  <h2>JSX</h2>
  <p>HTMLに近い見た目でUIを書く記法</p>
</article>

<article>
  <h2>map</h2>
  <p>配列の1件ずつをJSXに変える書き方</p>
</article>
```

ただし、このままだと、カードの形を変えたいときに全部のカードを直す必要があります。

このレッスンでは、同じ形を `LessonCard` コンポーネントにまとめます。

### 3. propsの型を書く

スターターコードの `LessonCardProps` を探します。

propsは、親から子へ渡す値です。

TypeScriptでは、どんなpropsを受け取るかを型で書きます。

```tsx
type LessonCardProps = {
  title: string;
  description: string;
  status: 'done' | 'learning' | 'next';
};
```

この型は、次の意味です。

```text
title       文字列
description 文字列
status      done / learning / next のどれか
```

### 4. propsを受け取る

`LessonCard` コンポーネントで props を受け取ります。

```tsx
function LessonCard(props: LessonCardProps) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </article>
  );
}
```

読むときは、次のように考えます。

```text
props.title       親から渡されたタイトル
props.description 親から渡された説明文
props.status      親から渡された状態
```

### 5. propsを渡す

親側では、コンポーネントをタグのように使い、属性として値を渡します。

```tsx
<LessonCard title="JSX" description="HTMLに近い見た目でUIを書く記法" status="done" />
```

このとき、`title`、`description`、`status` が `LessonCard` の props になります。

### 6. 同じコンポーネントを使い回す

propsを使うと、同じ `LessonCard` でも中身だけ変えられます。

```tsx
<LessonCard title="map" description="配列の1件ずつをJSXに変える書き方" status="learning" />
```

カードの見た目は `LessonCard` に集めます。

カードごとの違いは props として渡します。

### 7. childrenを受け取る

`children` は、コンポーネントのタグの内側に書いた内容です。

```tsx
<NoteBox title="props">
  <p>propsは親から子へ値を渡す仕組みです。</p>
</NoteBox>
```

`NoteBox` 側では、`children` を受け取って表示します。

```tsx
type NoteBoxProps = {
  title: string;
  children: React.ReactNode;
};

function NoteBox({ title, children }: NoteBoxProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
```

`React.ReactNode` は、Reactで表示できるものを表す型です。

最初から完全に覚えなくて大丈夫です。

このレッスンでは、「childrenはタグの内側を渡す」と読めればOKです。

### 8. 練習問題をやる

受講者は、自分のブランチで次を試します。

#### 問題1

`LessonCard` のTODOを直して、`props.title`、`props.description`、`props.status` が画面に出るようにします。

#### 問題2

`LessonCard` を1つ追加して、`props` のカードを表示します。

```tsx
<LessonCard
  title="props"
  description="親コンポーネントから子コンポーネントへ値を渡す仕組み"
  status="learning"
/>
```

#### 問題3

`NoteBox` のTODOを直して、`children` が表示されるようにします。

#### 問題4

`NoteBox` を1つ追加して、自分の言葉で `children` の説明を書きます。

### 9. トップページから移動する

スターターコードには、トップページから Lesson 4 のページへ移動するリンクも入っています。

まずトップページを開いて、Lesson 4 のページへ移動できることを確認します。

このレッスンでは、前回と同じく通常の `a` タグで移動できればOKです。

## Check

次を確認できれば、このレッスンは完了です。

- `/react-basics/props-children` をブラウザで開ける
- propsは親から子へ値を渡す仕組みだと説明できる
- propsの型を書ける
- `props.title` のように、受け取った値を画面に出せる
- 同じコンポーネントをpropsだけ変えて使い回せる
- childrenはタグの内側を渡す仕組みだと説明できる
- `React.ReactNode` はchildrenの型として使えると説明できる
- `npm run format:check` が通る
- `npm run lint` が通る
- `npm run build` が通る

## Common Mistakes

### propsを文字列として表示してしまう

propsの値を表示したいときは、波かっこで囲みます。

```tsx
<h2>{props.title}</h2>
```

次のように書くと、文字として `props.title` が表示されます。

```tsx
<h2>props.title</h2>
```

### propsの名前を親と子でずらしてしまう

親が `title` を渡すなら、子も `props.title` で読みます。

```tsx
<LessonCard title="JSX" />
```

```tsx
function LessonCard(props: LessonCardProps) {
  return <h2>{props.title}</h2>;
}
```

### childrenをpropsと別物だと思いすぎる

`children` もpropsの一種です。

ただし、渡し方が少し特別です。

```tsx
<NoteBox title="props">
  <p>この内側がchildrenです。</p>
</NoteBox>
```

### `React.ReactNode` を全部理解しようとする

この時点で `React.ReactNode` の細かい中身まで覚える必要はありません。

まずは「Reactで表示できるものを受け取る型」くらいでOKです。

## Review

自分の言葉で、次を説明してみます。

- このページでは、受講者が何を作ったのか
- propsは何のために使うのか
- propsの型は何のために書くのか
- 親コンポーネントから子コンポーネントへ値を渡すとはどういうことか
- childrenは何のために使うのか
- propsとchildrenはどう違うのか

## Next

次は `005-react-events` で、イベント処理を学びます。
