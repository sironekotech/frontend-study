# 003-react-list-key

## Goal

このレッスンでは、学習トピックのカード一覧を作ります。

最初は同じようなカードを何枚も手で書けます。

ただし、カードが増えるたびに同じHTMLをコピーすると、直す場所が増えてつらくなります。

そこで、表示したい内容を配列にまとめて、`map` でカードに変えます。

このレッスンで作るものは、次です。

- 全トピックのカード一覧
- `learning` のトピックだけを表示する一覧
- どのデータがどのカードになったか分かる表示
- 受講者が自分でデータを1件追加する練習問題

このレッスンでは、次を学びます。

- 配列のデータを画面表示に使うこと
- `map` で配列の1件ずつをJSXに変えること
- `key` がReact用の目印であること
- `filter` で表示するデータを絞ること
- 同じUIを手書きせず、データから作る考え方

## Start

```text
start/003-react-list-key
```

## End

```text
end/003-react-list-key
```

`start/003-react-list-key` は、この問題文とスターターコードが `main` に入ったあとで管理者が付けます。

`end/003-react-list-key` は、完成見本の実装が `main` に入ったあとで管理者が付けます。

## Build

`start/003-react-list-key` には、次のスターターページが入っています。

```text
src/app/(pages)/react-basics/list-key/page.tsx
```

トップページからスターターページへ移動する導線も入っています。

```text
src/app/page.tsx
```

URLは次です。

```text
/react-basics/list-key
```

トップページからも、この学習ページへ移動できます。

このスターターページは未完成です。

受講者は、TODOや仮表示を置き換えながら完成させます。

## Before You Start

タグを取得します。

```bash
git fetch --all --tags
```

Lesson 3 の開始タグから、自分用のブランチを作ります。

```bash
git switch -c <username>/003-react-list-key start/003-react-list-key
```

例:

```bash
git switch -c taro/003-react-list-key start/003-react-list-key
```

## What You Will Build

受講者は、このレッスンでスターターページを編集して、次を作ります。

```text
React topics board
  全トピック
    JSX
    map
    key
    props

  学習中だけ
    map
    key
```

`topics` 配列に4件のデータを用意します。

その4件を `map` でカードに変えます。

さらに、`status` が `'learning'` のデータだけを `filter` で取り出して、別の一覧に表示します。

## Steps

### 1. スターターページを開く

まず、次のファイルを開きます。

```text
src/app/(pages)/react-basics/list-key/page.tsx
```

App Routerでは、`page.tsx` がURLに対応するページになります。

`(pages)` はURLには出ません。

そのため、このファイルは次のURLになります。

```text
/react-basics/list-key
```

このファイルには、最初から次が入っています。

```text
手書きカードの例
TODO付きの topics 配列
TODO付きのカード一覧エリア
TODO付きの learning 一覧エリア
```

このレッスンでは、ファイルを新規作成するのではなく、スターターコードを編集します。

### 2. まずはカードを手で書いてみる

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

ただし、このままだと項目が増えるたびに同じ形のJSXをコピーします。

スターターコードには、この手書きカードの例が表示されています。

このレッスンでは、この手書きの繰り返しを配列と `map` に置き換えます。

### 3. 表示したい内容を配列にする

スターターコードの `topics` 配列を探します。

最初は空の配列か、TODOだけが入っています。

そこに、表示したい情報をデータとして追加します。

```tsx
const topics = [
  {
    id: 'jsx',
    title: 'JSX',
    status: 'done',
    description: 'HTMLに近い見た目でUIを書く記法',
  },
  {
    id: 'map',
    title: 'map',
    status: 'learning',
    description: '配列の1件ずつをJSXに変える書き方',
  },
  {
    id: 'key',
    title: 'key',
    status: 'learning',
    description: 'Reactがリストの項目を見分けるための目印',
  },
  {
    id: 'props',
    title: 'props',
    status: 'next',
    description: '次のレッスンで扱う、コンポーネントへ値を渡す仕組み',
  },
];
```

`title` は画面に表示するタイトルです。

`description` は画面に表示する説明です。

`status` はあとで絞り込みに使います。

`id` は `key` に使います。

### 4. `map` でカードに変える

`map` は、配列の1件ずつを別の形に変える書き方です。

ここでは、`topic` 1件を `article` 1枚に変えます。

スターターコードにある仮表示を、次のような `topics.map(...)` に置き換えます。

```tsx
return (
  <div>
    {topics.map((topic) => (
      <article key={topic.id}>
        <h2>{topic.title}</h2>
        <p>{topic.description}</p>
      </article>
    ))}
  </div>
);
```

読むときは、次のように考えます。

```text
topics の1件目 -> 1枚目のカード
topics の2件目 -> 2枚目のカード
topics の3件目 -> 3枚目のカード
```

### 5. `key` を付ける

配列をJSXで表示するときは、繰り返しで作る一番外側の要素に `key` を付けます。

```tsx
<article key={topic.id}>
```

`key` は画面に表示されません。

Reactが「どの項目がどの項目なのか」を見分けるための目印です。

このレッスンでは、データの `id` を使って `key={topic.id}` と書きます。

### 6. `filter` で学習中だけに絞る

`filter` は、条件に合うデータだけを残す書き方です。

スターターコードにある `learningTopics` を探します。

最初は空の配列です。

それを、次のように `filter` へ置き換えます。

```tsx
const learningTopics = topics.filter((topic) => topic.status === 'learning');
```

このコードでは、`status` が `'learning'` のデータだけが `learningTopics` に入ります。

その後、`learningTopics.map(...)` で学習中の一覧を表示します。

```tsx
return (
  <ul>
    {learningTopics.map((topic) => (
      <li key={topic.id}>{topic.title}</li>
    ))}
  </ul>
);
```

### 7. 練習問題をやる

受講者は、自分のブランチで次を試します。

#### 問題1

`topics` に5件目のデータを追加します。

```tsx
{
  id: 'state',
  title: 'state',
  status: 'next',
  description: '画面の状態を持つためのデータ',
}
```

全トピックのカードが1枚増えればOKです。

#### 問題2

追加した `state` の `status` を `'learning'` に変えます。

```tsx
status: 'learning',
```

学習中だけの一覧にも `state` が表示されればOKです。

#### 問題3

`key={topic.id}` をどこに書いているか確認します。

`key` が画面に表示されていないことも確認します。

### 8. トップページから移動する

スターターコードには、トップページから Lesson 3 のページへ移動するリンクも入っています。

まずトップページを開いて、Lesson 3 のページへ移動できることを確認します。

このレッスンでは、前回と同じく通常の `a` タグで移動できればOKです。

## Check

次を確認できれば、このレッスンは完了です。

- `/react-basics/list-key` をブラウザで開ける
- `topics` の1件が、画面のカード1枚になると説明できる
- `map` は配列の1件ずつをJSXに変えるために使うと説明できる
- 繰り返し表示では `key={topic.id}` を付けると説明できる
- `key` は画面に表示されないと説明できる
- `filter` で `learning` のデータだけを取り出せると説明できる
- 問題1でカードを1枚増やせる
- 問題2で学習中だけの一覧を変えられる
- `npm run format:check` が通る
- `npm run lint` が通る
- `npm run build` が通る

## Common Mistakes

### コードと画面の対応を見失う

まずは、この対応だけを見ます。

```text
topics の1件 -> 画面のカード1枚
```

`map` の中で返している `article` が、実際に画面へ表示されるカードです。

### `key` を付け忘れる

配列を `map` してJSXを返すときは、繰り返しで作る一番外側の要素に `key` を付けます。

```tsx
return (
  <div>
    {topics.map((topic) => (
      <article key={topic.id}>
        <h2>{topic.title}</h2>
      </article>
    ))}
  </div>
);
```

### `key` を画面に表示するものだと思ってしまう

`key` はReactが内部で使う目印です。

画面に表示したい場合は、別で `{topic.id}` のように書きます。

### いきなり `index` を `key` に使う

```tsx
return (
  <div>
    {topics.map((topic, index) => (
      <article key={index}>
        <h2>{topic.title}</h2>
      </article>
    ))}
  </div>
);
```

この書き方は動くこともありますが、並び替えや削除がある画面では問題になりやすいです。

まずは、データに安定した `id` を用意して `key={topic.id}` を使います。

### `filter` しただけで画面が変わると思ってしまう

`filter` は配列を絞るだけです。

絞った配列を画面に出すには、もう一度 `map` します。

```tsx
const learningTopics = topics.filter((topic) => topic.status === 'learning');

return (
  <ul>
    {learningTopics.map((topic) => (
      <li key={topic.id}>{topic.title}</li>
    ))}
  </ul>
);
```

## Review

自分の言葉で、次を説明してみます。

- このページでは、受講者が何を作ったのか
- `topics` の1件は、画面のどこに表示されるのか
- `map` は何をしているのか
- `key` は何のために使うのか
- `filter` は何をしているのか
- 問題1と問題2で、なぜ表示が変わるのか

## Next

次は `004-react-props-children` で、props と children を学びます。
