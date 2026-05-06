# 005-react-use-state-event

## Goal

このレッスンでは、Reactの `useState` とイベント処理を画面で確認します。

Lesson 4 では、propsで外から値を渡しました。

Lesson 5 では、ユーザーの操作を受け取り、stateを更新して、画面が変わる流れを学びます。

このレッスンでは、次を学びます。

- `useState` で画面の状態を持つこと
- `onClick` でボタン操作を受け取ること
- `onChange` で入力欄の変更を受け取ること
- stateを更新すると画面が表示し直されること
- 配列やオブジェクトのstateを直接書き換えないこと

## Start

```text
start/005-react-use-state-event
```

このタグには、Lesson 5 の補足mdとスターターページが入っています。

スターターページにはTODOと仮表示が残っています。

Lesson 5 では、学習ページを主教材にします。

このmdは、タグ、開始方法、補足説明、復習用チェックリストを確認するための資料です。

## End

```text
end/005-react-use-state-event
```

このタグは、Lesson 5 の完成見本です。

## Build

`start/005-react-use-state-event` には、次のスターターページが入っています。

```text
src/app/(pages)/react-basics/use-state-event/page.tsx
```

URLは次です。

```text
/react-basics/use-state-event
```

トップページからも、この学習ページへ移動できます。

このレッスンでは、ファイルを新規作成するのではなく、スターターページのTODOや仮表示を置き換えます。

## Before You Start

タグを取得します。

```bash
git fetch --all --tags
```

Lesson 5 の開始タグから、自分用のブランチを作ります。

```bash
git switch -c <username>/005-react-use-state-event start/005-react-use-state-event
```

例:

```bash
git switch -c taro/005-react-use-state-event start/005-react-use-state-event
```

ブランチを作ったら、まず学習ページをブラウザで開きます。

```text
/react-basics/use-state-event
```

このレッスンは、ページを見ながらスターターコードのTODOを順番に直す前提です。

このmdは補足として使います。

## What You Will Build

受講者は、このレッスンでスターターページを編集して、次を作ります。

```text
useState and event lab
  count
    +1する
    0に戻す

  hint
    true / falseで表示を切り替える

  input
    入力した名前を画面に表示する

  todo
    完了状態を切り替える
```

最初は、ボタンや入力欄があっても値が固定されている状態を確認します。

ページの上部には、カウントボタンの完成例を1つだけ置いています。

完成例で、ボタンを押すと数字が増える流れを見てから、下のTODO付きスターターを直します。

次に、固定値を `useState` に置き換えます。

最後に、ボタンや入力欄のイベントでstateを更新し、画面が変わることを確認します。

## Steps

### 1. スターターページを開く

まず、次のファイルを開きます。

```text
src/app/(pages)/react-basics/use-state-event/page.tsx
```

App Routerでは、`page.tsx` がURLに対応するページになります。

`(pages)` はURLには出ません。

そのため、このファイルは次のURLになります。

```text
/react-basics/use-state-event
```

このページには、最初から次が入っています。

```text
useStateとeventの説明
カウントボタンの完成例
TODOの順番
countの仮表示
ヒント表示の仮表示
入力欄の仮表示
TODOリストの仮表示
```

### 2. useStateをimportする

スターターコードの先頭を確認します。

完成版では、Reactから `useState` をimportします。

```tsx
import { useState } from 'react';
```

`useState` は、Reactが用意しているHookです。

Hookは、Reactコンポーネントの中でReactの機能を使うための関数です。

### 3. カウントボタンの完成例を見る

ページの「完成例を1つだけ見る」セクションでは、すでに動くカウントボタンを確認できます。

ここは読むための完成例です。

受講者が編集する対象は、その下にあるTODO付きのスターターコードです。

完成例では、次の流れを見ます。

```text
ボタンを押す
setCount が呼ばれる
count が新しい値になる
画面の数字が変わる
```

この流れを確認してから、同じ考え方でスターターコードを直します。

### 4. countをstateにする

スターターコードでは、`count` が固定値になっています。

```tsx
const count = 0;
```

このままだと、ボタンを押しても画面は変わりません。

完成版では、次の形に置き換えます。

```tsx
const [count, setCount] = useState(0);
```

読むときは、次のように考えます。

```text
count     今の値
setCount  値を変えるための関数
0         最初の値
```

### 5. onClickでstateを更新する

ボタンには `onClick` を書けます。

`onClick` には、ボタンを押したときに動かす関数を渡します。

```tsx
<button onClick={handleIncrease}>+1する</button>
```

`handleIncrease` の中で `setCount` を呼ぶと、stateが更新されます。

### 6. true / falseで表示を切り替える

表示するかどうかもstateで持てます。

```tsx
const [isHintOpen, setIsHintOpen] = useState(false);
```

前のstateを使って反対に切り替えるときは、次の形を使います。

```tsx
setIsHintOpen((current) => !current);
```

### 7. onChangeで入力値を受け取る

入力欄には `onChange` を書けます。

`onChange` では、eventから入力欄の値を取り出します。

```tsx
function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
  setLearnerName(event.target.value);
}
```

初学者は、まず次だけ読めれば十分です。

```text
event.target.value
  今入力されている文字
```

### 8. 配列のstateを更新する

配列やオブジェクトのstateは、直接書き換えません。

次のように、新しい配列を作って更新します。

```tsx
setTodos((currentTodos) =>
  currentTodos.map((todo) => (todo.id === targetId ? { ...todo, done: !todo.done } : todo)),
);
```

最初から全部暗記する必要はありません。

このレッスンでは、直接書き換えずに新しい配列を返す、という考え方を押さえます。

## Check

ローカルで次を確認します。

```bash
npm run format:check
npm run lint
npm run build
```

画面では、次を確認します。

```text
+1ボタンでcountが増える
0に戻すボタンでcountが0になる
ヒント表示を開閉できる
入力した名前が画面に表示される
TODOリストの完了状態を切り替えられる
```

## Review

このレッスンの復習では、次を説明できるか確認します。

- `useState` は何のために使うか
- `count` と `setCount` の違い
- `onClick` はいつ動くか
- `onChange` はいつ動くか
- stateを更新すると画面が変わる理由
- 配列やオブジェクトのstateを直接書き換えない理由
