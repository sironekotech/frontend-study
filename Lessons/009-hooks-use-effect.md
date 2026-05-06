# 009-hooks-use-effect

## Goal

このレッスンでは、React Hook の `useEffect` を学びます。

Lesson 8 では、Next.js App Routerでファイルの場所とURLの関係を確認しました。

Lesson 9 では、画面が表示された後やstateが変わった後に、ブラウザの機能や外部のデータとつなぐ方法を確認します。

このレッスンでは、次を学びます。

- `useEffect`
- 依存配列
- cleanup
- ブラウザ側でのデータ取得
- `useEffect` を使いすぎない考え方

## Start

```text
start/009-hooks-use-effect
```

このタグには、Lesson 9 の補足mdとスターターページが入っています。

スターターページにはTODOと仮表示が残っています。

Lesson 9 では、学習ページを主教材にします。

このmdは、タグ、開始方法、補足説明、復習用チェックリストを確認するための資料です。

## End

```text
end/009-hooks-use-effect
```

このタグは、Lesson 9 の完成見本です。

完成見本では、スターターページにあったTODOと仮表示が、すべて動く実装に置き換わっています。

## Build

`start/009-hooks-use-effect` には、次のスターターページが入っています。

```text
src/app/(pages)/hooks/use-effect/page.tsx
```

URLは次です。

```text
/hooks/use-effect
```

トップページからも、この学習ページへ移動できます。

このレッスンでは、ファイルを新規作成するのではなく、スターターページのTODOや仮表示を置き換えます。

## Before You Start

タグを取得します。

```bash
git fetch --all --tags
```

Lesson 9 の開始タグから、自分用のブランチを作ります。

```bash
git switch -c <username>/009-hooks-use-effect start/009-hooks-use-effect
```

例:

```bash
git switch -c taro/009-hooks-use-effect start/009-hooks-use-effect
```

ブランチを作ったら、まず学習ページをブラウザで開きます。

```text
/hooks/use-effect
```

このレッスンは、ページを見ながらスターターコードのTODOを順番に直す前提です。

このmdは補足として使います。

## What You Will Build

受講者は、このレッスンでスターターページを編集して、次を作ります。

```text
useEffect lab
  selectedTopic
    selectで選んだ値をstateに保存する
    selectedTopicに合わせてdocument.titleを更新する

  resize
    windowWidthLabelのsetterを受け取る
    最初の表示後にwindow.innerWidthをstateへ保存する
    resizeイベントを登録する
    cleanupでresizeイベントを解除する

  client fetch sample
    fetchStatusとloadedLessonsのsetterを受け取る
    最初の表示後にlessonItemsを読み込んだ想定でstateへ保存する
    読み込み状態をidle / loading / successで表示する
```

最初は、selectのstate更新だけが動く状態です。

ページの上部には、1つだけ動く `useEffect` の完成例を置いています。

完成例で、stateが変わった後にeffectが動く流れを見てから、下のTODO付きスターターを直します。

## Steps

### 1. スターターページを開く

まず、次のファイルを開きます。

```text
src/app/(pages)/hooks/use-effect/page.tsx
```

App Routerでは、`page.tsx` がURLに対応するページになります。

`(pages)` はURLには出ません。

そのため、このファイルは次のURLになります。

```text
/hooks/use-effect
```

### 2. useEffectのタイミングを確認する

`useEffect` は、画面を作るための処理ではありません。

画面が表示された後や、指定したstateが変わった後に動く処理です。

```tsx
useEffect(() => {
  document.title = `Lesson 9 - ${selectedTopic}`;
}, [selectedTopic]);
```

読むときは、次のように考えます。

```text
selectedTopic が変わる
  Reactが画面を更新する
  その後にuseEffectが動く
  document.titleを更新する
```

### 3. 依存配列を見る

useEffectの最後に書く配列を、依存配列と呼びます。

```tsx
useEffect(() => {
  // 処理
}, [selectedTopic]);
```

`[selectedTopic]` と書くと、`selectedTopic` が変わった後にeffectが動き直します。

`[]` と書くと、最初に表示された後だけ動きます。

配列を書かない形は、表示のたびに動くため、最初は避けます。

### 4. cleanupを見る

イベント監視やタイマーを登録した場合は、片付けが必要です。

```tsx
useEffect(() => {
  function handleResize() {
    setWindowWidthLabel(`現在の横幅: ${window.innerWidth}px`);
  }

  const frameId = requestAnimationFrame(handleResize);

  window.addEventListener('resize', handleResize);

  return () => {
    cancelAnimationFrame(frameId);
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

`return` している関数が cleanup です。

この例では、登録した `resize` イベントを解除しています。

### 5. 使いすぎない考え方を確認する

次のような処理は、最初から `useEffect` に入れない方が読みやすいです。

```text
表示するだけで計算できる値
クリックした瞬間に処理できること
inputのonChangeでそのままstate更新できること
```

`useEffect` は、Reactの外側にあるものとつなぐときに使います。

例:

```text
document.title
window.addEventListener
ブラウザ側でのデータ取得
```

## Check

ローカルで次を確認します。

```bash
npm run format:check
npm run lint
npm run build
```

画面では、次を確認します。

```text
selectedTopicを変えるとタブタイトルが変わる
最初の表示後に画面幅が表示される
ブラウザ幅を変えると画面幅の表示が変わる
resizeイベントをcleanupで解除している
最初の表示後にlessonItemsが表示される
```

## Review

このレッスンの復習では、次を説明できるか確認します。

- `useEffect` はいつ動くか
- 依存配列は何のために書くか
- `[]` と `[selectedTopic]` の違い
- cleanup は何のために使うか
- `window.addEventListener` を使うときにcleanupが必要な理由
- ブラウザ側でのデータ取得とは何か
- `useEffect` に入れない方がよい処理の例
