# 011-hooks-rules

## Goal

このレッスンでは、React Hook のルールを学びます。

Lesson 10 では、`useRef` でDOM参照や再レンダーされない値を扱いました。

Lesson 11 では、`useState`、`useEffect`、`useRef` などのHookを、どこで呼んでよいかを確認します。

このレッスンでは、次を学びます。

- Hooksはトップレベルで呼ぶ
- 条件分岐やループの中でHooksを呼ばない
- イベントハンドラの中でHooksを呼ばない
- Reactコンポーネントかcustom hookからHooksを呼ぶ
- custom hookは `use` で始める
- ESLintがHookのルール違反を検出する理由

## Start

```text
start/011-hooks-rules
```

このタグには、Lesson 11 の補足mdとスターターページが入っています。

スターターページにはTODOと仮表示が残っています。

Lesson 11 では、学習ページを主教材にします。

このmdは、タグ、開始方法、補足説明、復習用チェックリストを確認するための資料です。

## End

```text
end/011-hooks-rules
```

このタグは、Lesson 11 の完成見本です。

完成見本では、スターターページにあったTODOと仮表示が、すべて動く実装に置き換わっています。

## Build

`start/011-hooks-rules` には、次のスターターページが入っています。

```text
src/app/(pages)/hooks/rules/page.tsx
```

URLは次です。

```text
/hooks/rules
```

トップページからも、この学習ページへ移動できます。

このレッスンでは、ファイルを新規作成するのではなく、スターターページのTODOや仮表示を置き換えます。

## Before You Start

タグを取得します。

```bash
git fetch --all --tags
```

Lesson 11 の開始タグから、自分用のブランチを作ります。

```bash
git switch -c <username>/011-hooks-rules start/011-hooks-rules
```

例:

```bash
git switch -c taro/011-hooks-rules start/011-hooks-rules
```

ブランチを作ったら、まず学習ページをブラウザで開きます。

```text
/hooks/rules
```

このレッスンは、ページを見ながらスターターコードのTODOを順番に直す前提です。

このmdは補足として使います。

## What You Will Build

受講者は、このレッスンでスターターページを編集して、次を作ります。

```text
hooks rules lab
  rule cards
    Hookを呼んでよい場所を整理する
    Hookを呼んではいけない場所を整理する

  code judge
    表示されたコードがOKかNGかを判定する
    NGの理由を画面へ表示する
    直す場合のコード例を表示する

  custom hook naming
    Hookを使う共通処理はuseで始める
    普通の関数からHookを呼ばない
```

このレッスンでは、Hookのルールに違反するコードを実行しません。

違反例は、画面上のコードブロックとして表示します。

実際のページは壊れない状態にして、OK / NGの判定と直し方をTODOとして実装します。

## Steps

### 1. スターターページを開く

まず、次のファイルを開きます。

```text
src/app/(pages)/hooks/rules/page.tsx
```

App Routerでは、`page.tsx` がURLに対応するページになります。

`(pages)` はURLには出ません。

そのため、このファイルは次のURLになります。

```text
/hooks/rules
```

### 2. Hooksはトップレベルで呼ぶ

トップレベルとは、コンポーネント関数のいちばん上の階層です。

`if`、`for`、イベントハンドラの中ではありません。

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  if (count === 0) {
    return <p>まだ0です</p>;
  }

  return <p>{count}</p>;
}
```

この例では、`useState` を条件分岐の外で呼んでいます。

そのあとで、表示内容を条件分岐しています。

### 3. Hookを呼んでよい場所を見る

Hookを呼んでよい場所は、まず2つだけ覚えます。

```text
Reactコンポーネント
custom hook
```

Reactコンポーネントは、画面に出すJSXを返す関数です。

関数名は大文字で始めます。

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button>{count}</button>;
}
```

custom hookは、Hookを使う処理をまとめる関数です。

名前は `use` で始めます。

```tsx
function useCounter() {
  const [count, setCount] = useState(0);

  return { count, setCount };
}
```

普通の関数では、Hookを呼びません。

普通の関数は、文字を整える、数値を計算する、配列を並べ替える、というような処理に使います。

```tsx
function formatCount(count: number) {
  return `${count}回クリックしました`;
}
```

### 4. イベントハンドラを見る

イベントは、クリック、入力、送信のようなユーザー操作です。

イベントハンドラは、その操作が起きたあとに動く関数です。

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((currentCount) => currentCount + 1);
  }

  return <button onClick={handleClick}>+1</button>;
}
```

この例では、`handleClick` がイベントハンドラです。

ボタンをクリックしたあとに動きます。

`handleClick` の中で `useState` は呼びません。

`useState` は先にトップレベルで呼んでおき、イベントハンドラの中では `setCount` を呼びます。

### 5. 条件分岐の中でHookを呼ばない

次のような書き方は避けます。

```tsx
function Counter({ isReady }: { isReady: boolean }) {
  if (isReady) {
    const [count, setCount] = useState(0);
  }

  return <button>+1</button>;
}
```

`isReady` が `true` のときだけHookが呼ばれるため、ReactがHookの順番を安定して追えません。

Hookは毎回同じ順番で呼ばれる必要があります。

### 6. イベントハンドラの中でHookを呼ばない

クリックしたときにHookを呼ぶ、という書き方も避けます。

```tsx
function Form() {
  function handleSubmit() {
    useEffect(() => {
      console.log('送信しました');
    }, []);
  }

  return <button onClick={handleSubmit}>送信</button>;
}
```

イベントハンドラの中では、Hookではなく普通の処理を実行します。

stateを変えたいなら、`setState` 関数を呼びます。

### 7. custom hookはuseで始める

Hookを使う共通処理を切り出す場合は、custom hookにします。

custom hookの名前は `use` で始めます。

```tsx
function useWindowWidth() {
  const [width, setWidth] = useState(0);
  return width;
}
```

`use` で始めることで、ReactやESLintが「これはHookのルールで見る関数」だと判断できます。

### 8. ESLintを味方にする

この教材では、Hookのルール違反をESLintで検出します。

```bash
npm run lint
```

Hookのルール違反は、画面でたまたま動いているように見えても、あとから壊れやすいです。

ESLintは、早い段階で危ない書き方を止めるための道具です。

## Check

ローカルで次を確認します。

```bash
npm run format:check
npm run lint
npm run build
```

画面では、次を確認します。

```text
Hooksをトップレベルで呼ぶ理由を説明できる
条件分岐の中でHookを呼んではいけない理由を説明できる
イベントハンドラの中でHookを呼んではいけない理由を説明できる
custom hookをuseで始める理由を説明できる
表示されたコードをOK / NGで判定できる
NGのコードをどう直すか説明できる
```

## Review

このレッスンの復習では、次を説明できるか確認します。

- Hookを呼んでよい場所
- Hookを呼んではいけない場所
- Hooksはなぜ毎回同じ順番で呼ぶ必要があるか
- 条件によって表示を変える場合、HookではなくJSX側を条件分岐すること
- イベントハンドラではHookではなく `setState` などを呼ぶこと
- custom hookの名前を `use` で始める理由
- ESLintがHookのルール違反を検出する理由
