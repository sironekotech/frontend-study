# 009-hooks-use-effect

## Goal

このレッスンでは、React Hook の `useEffect` を学びます。

Lesson 8 では、Next.js App Routerでファイルの場所とURLの関係を確認しました。

Lesson 9 では、画面を出したあとやstateが変わったあとに、追加で処理を動かす方法を確認します。

このレッスンでは、次を学びます。

- `useEffect`
- 「いつやるかリスト」
- 片付け
- 表示後のデータ読み込み
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
    最初に画面を出したあとにwindow.innerWidthをstateへ保存する
    画面幅の監視を始める
    片付けで画面幅の監視を止める

  client fetch sample
    最初に画面を出したあとにlessonItemsを読み込んだ想定でstateへ保存する
    読み込み状態をidle / loading / successで表示する
```

最初は、selectのstate更新だけが動く状態です。

ページの上部には、1つだけ動く `useEffect` の完成例を置いています。

完成例で、stateが変わった後にuseEffectが動く流れを見てから、下のTODO付きスターターを直します。

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

### 2. useEffectは「あとでやること」だと考える

`useEffect` は、画面を作るための処理ではありません。

画面を出したあとや、指定したstateが変わったあとに動く処理です。

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

### 3. 「いつやるかリスト」を見る

useEffectの最後に書く配列は、「いつやるかリスト」です。

正式には、依存配列と呼びます。

```tsx
useEffect(() => {
  // 処理
}, [selectedTopic]);
```

`[selectedTopic]` と書くと、`selectedTopic` が変わったあとにuseEffectが動き直します。

`[]` と書くと、最初に画面を出したあとだけ動きます。

配列を書かない形は、画面が表示し直されるたびに動くため、最初は避けます。

### 4. 片付けを見る

画面幅の監視やタイマーを始めた場合は、片付けが必要です。

英語では、この片付けを cleanup と呼びます。

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

`return` している関数が片付けの処理です。

この例では、登録した `resize` イベントを解除しています。

### 5. 使いすぎない考え方を確認する

次のような処理は、最初から `useEffect` に入れない方が読みやすいです。

```text
表示するだけで計算できる値
クリックした瞬間に処理できること
inputのonChangeでそのままstate更新できること
```

例えば、今あるstateからすぐ作れる値は、そのまま変数にします。

```tsx
const selectedLabel = topicLabels[selectedTopic];
```

`useEffect` は、Reactの外側にあるものとつなぐときに使います。

例:

```text
document.title
window.addEventListener
表示後のデータ読み込み
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
最初に画面を出したあと、画面幅が表示される
ブラウザ幅を変えると画面幅の表示が変わる
resizeイベントを片付けで解除している
最初に画面を出したあと、lessonItemsが表示される
```

## Review

このレッスンの復習では、次を説明できるか確認します。

- `useEffect` はいつ動くか
- 「いつやるかリスト」は何のために書くか
- `[]` と `[selectedTopic]` の違い
- 片付けは何のために使うか
- `window.addEventListener` を使うときに片付けが必要な理由
- 表示後のデータ読み込みとは何か
- `useEffect` に入れない方がよい処理の例
