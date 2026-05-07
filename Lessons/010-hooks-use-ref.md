# 010-hooks-use-ref

## Goal

このレッスンでは、React Hook の `useRef` を学びます。

Lesson 9 では、画面を出したあとに処理を動かす `useEffect` を確認しました。

Lesson 10 では、Reactに「値を覚えさせるけれど、画面の再表示には使わない」方法を確認します。

このレッスンでは、次を学びます。

- `useRef`
- `ref.current`
- DOM参照
- inputへのfocus
- 再レンダーされない値
- stateとrefの使い分け

## Start

```text
start/010-hooks-use-ref
```

このタグには、Lesson 10 の補足mdとスターターページが入っています。

スターターページにはTODOと仮表示が残っています。

Lesson 10 では、学習ページを主教材にします。

このmdは、タグ、開始方法、補足説明、復習用チェックリストを確認するための資料です。

## End

```text
end/010-hooks-use-ref
```

このタグは、Lesson 10 の完成見本です。

完成見本では、スターターページにあったTODOと仮表示が、すべて動く実装に置き換わっています。

## Build

`start/010-hooks-use-ref` には、次のスターターページが入っています。

```text
src/app/(pages)/hooks/use-ref/page.tsx
```

URLは次です。

```text
/hooks/use-ref
```

トップページからも、この学習ページへ移動できます。

このレッスンでは、ファイルを新規作成するのではなく、スターターページのTODOや仮表示を置き換えます。

## Before You Start

タグを取得します。

```bash
git fetch --all --tags
```

Lesson 10 の開始タグから、自分用のブランチを作ります。

```bash
git switch -c <username>/010-hooks-use-ref start/010-hooks-use-ref
```

例:

```bash
git switch -c taro/010-hooks-use-ref start/010-hooks-use-ref
```

ブランチを作ったら、まず学習ページをブラウザで開きます。

```text
/hooks/use-ref
```

このレッスンは、ページを見ながらスターターコードのTODOを順番に直す前提です。

このmdは補足として使います。

## What You Will Build

受講者は、このレッスンでスターターページを編集して、次を作ります。

```text
useRef lab
  focus
    inputをrefで覚える
    ボタンを押したらinputへfocusする

  current
    ref.currentに値が入ることを確認する
    currentは自分で読む、または書き換える場所だと理解する

  no render value
    保存回数をref.currentで覚える
    ref.currentを書き換えても、それだけでは画面が再表示されないことを確認する
    画面に見せたい値はstateで持つ
```

最初は、inputのstate更新だけが動く状態です。

ページの上部には、1つだけ動く `useRef` の完成例を置いています。

完成例で、ボタンからinputへfocusする流れを見てから、下のTODO付きスターターを直します。

## Steps

### 1. スターターページを開く

まず、次のファイルを開きます。

```text
src/app/(pages)/hooks/use-ref/page.tsx
```

App Routerでは、`page.tsx` がURLに対応するページになります。

`(pages)` はURLには出ません。

そのため、このファイルは次のURLになります。

```text
/hooks/use-ref
```

### 2. useRefは「Reactが覚えておく箱」だと考える

`useRef` は、Reactに値を覚えさせるためのHookです。

ただし、`useState` と違って、値を変えても画面は自動で再表示されません。

```tsx
const saveCountRef = useRef<number>(0);
```

読むときは、次のように考えます。

```text
saveCountRef という箱を作る
  箱の中身は saveCountRef.current に入る
  current を書き換えても、それだけでは画面は再表示されない
```

### 3. inputをrefでつかむ

inputのようなブラウザ上の要素を、Reactから触りたいときがあります。

たとえば、ボタンを押したらinputへfocusしたい場合です。

```tsx
const nameInputRef = useRef<HTMLInputElement>(null);
```

`HTMLInputElement` は、input要素を参照するrefだとTypeScriptに伝える型です。

最初はまだinputが画面に出ていないため、初期値は `null` にします。

### 4. refをinputにつなぐ

作ったrefは、inputの `ref` 属性へ渡します。

```tsx
<input ref={nameInputRef} />
```

これで、画面に出たinputが `nameInputRef.current` に入ります。

### 5. currentを使ってfocusする

ボタンを押したときに、`current` に入っているinputへfocusします。

```tsx
function handleFocusNameInput() {
  nameInputRef.current?.focus();
}
```

`?.` は、`current` が `null` ではないときだけ `focus()` を呼ぶ書き方です。

まだinputが入っていない可能性があるため、最初はこの書き方にしておくと安全です。

### 6. stateとrefを使い分ける

画面に表示したい値は `useState` で持ちます。

画面に表示しなくてよい値や、DOM要素を覚えるだけなら `useRef` を使います。

```text
画面に出す値
  useState

inputへfocusするためのDOM参照
  useRef

クリック回数を内部で覚えるだけの値
  useRef
```

`ref.current` を書き換えても、Reactは画面を自動で作り直しません。

そのため、画面に見せたいメッセージはstateで更新します。

## Check

ローカルで次を確認します。

```bash
npm run format:check
npm run lint
npm run build
```

画面では、次を確認します。

```text
ボタンを押すと名前入力欄へfocusできる
nameInputRef.current?.focus() の意味を説明できる
ref.currentに保存回数を保存できる
ref.currentを書き換えるだけでは画面が再表示されないことを確認できる
画面に出したい値はstateで持つと説明できる
```

## Review

このレッスンの復習では、次を説明できるか確認します。

- `useRef` は何を覚えるために使うか
- `ref.current` とは何か
- `useRef<HTMLInputElement>(null)` の `HTMLInputElement` と `null` は何を表すか
- inputへfocusする流れ
- `useState` と `useRef` の違い
- `ref.current` を変えても画面が再表示されない理由
- 画面に表示したい値をrefだけで持たない理由
