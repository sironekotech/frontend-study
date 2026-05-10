# 013-hooks-reducer-context

## Goal

このレッスンでは、`useReducer` と `useContext` を学びます。

Lesson 12 では、custom hookで処理をまとめる方法を確認しました。

Lesson 13 では、stateの更新ルールをreducerにまとめ、複数のコンポーネントから同じ値を使う流れを確認します。

このレッスンでは、次を学びます。

- `useReducer` は、state更新の種類が増えたときに使えるHookであること
- reducerは、今のstateとactionから次のstateを作る関数であること
- actionは、何をしたいかを表す命令であること
- `createContext` と `useContext` で値を共有できること
- props drillingは、途中のコンポーネントへpropsを渡し続ける状態であること

## Start

```text
start/013-hooks-reducer-context
```

このタグには、Lesson 13 の補足md、スターターページ、starter context が入っています。

スターターページにはTODOと仮表示が残っています。

Lesson 13 でも、学習ページを主教材にします。

このmdは、タグ、開始方法、補足説明、復習用チェックリストを確認するための資料です。

## End

```text
end/013-hooks-reducer-context
```

このタグは、Lesson 13 の完成見本です。

完成見本では、スターターにあった固定値やTODOが、`useReducer` と `useContext` を使う実装に置き換わっています。

## Build

`start/013-hooks-reducer-context` には、次のスターターページが入っています。

```text
src/app/(pages)/hooks/reducer-context/page.tsx
```

URLは次です。

```text
/hooks/reducer-context
```

このレッスンでは、次のcontextファイルも使います。

```text
src/app/(pages)/hooks/reducer-context/_context/LearningSessionContext.tsx
```

## Before You Start

タグを取得します。

```bash
git fetch --all --tags
```

Lesson 13 の開始タグから、自分用のブランチを作ります。

```bash
git switch -c <username>/013-hooks-reducer-context start/013-hooks-reducer-context
```

例:

```bash
git switch -c taro/013-hooks-reducer-context start/013-hooks-reducer-context
```

ブランチを作ったら、まず学習ページをブラウザで開きます。

```text
/hooks/reducer-context
```

このレッスンは、ページを見ながらスターターコードのTODOを順番に直す前提です。

## What You Will Build

受講者は、このレッスンでスターターコードを編集して、次を作ります。

```text
reducer and context lab
  reducer
    学習時間、完了数、状態メモを1つのstateとして管理する
    actionごとに次のstateを返す

  context
    Providerでstateと操作関数を配る
    useContextで子コンポーネントから同じ値を読む

  page
    複数のカードから同じ学習セッションを操作する
```

`useReducer` は、単純なカウントだけなら必須ではありません。

ただし、stateの項目や更新の種類が増えたときは、更新ルールをreducerへまとめると読みやすくなります。

## Steps

### 1. スターターページを開く

まず、次のファイルを開きます。

```text
src/app/(pages)/hooks/reducer-context/page.tsx
```

App Routerでは、`page.tsx` がURLに対応するページになります。

`(pages)` はURLには出ません。

そのため、このファイルは次のURLになります。

```text
/hooks/reducer-context
```

### 2. reducerは「次のstateを作る関数」

reducerは、今のstateとactionから、次のstateを返す関数です。

```tsx
function reducer(state: State, action: Action): State {
  if (action.type === 'add-minute') {
    return {
      ...state,
      focusMinutes: state.focusMinutes + 1,
    };
  }

  return state;
}
```

stateを直接書き換えず、新しいstateを返します。

### 3. actionは「何をしたいか」

actionは、画面で起きたことや、やりたい更新を表す命令です。

```tsx
dispatch({ type: 'add-minute' });
dispatch({ type: 'complete-task' });
dispatch({ type: 'reset' });
```

`dispatch` は、actionをreducerへ送る関数です。

### 4. Contextは「値を配る仕組み」

Contextを使うと、深い場所にあるコンポーネントでも同じ値を読めます。

```tsx
const LearningSessionContext = createContext<ContextValue | null>(null);
```

Providerで値を配ります。

```tsx
<LearningSessionContext.Provider value={value}>{children}</LearningSessionContext.Provider>
```

受け取る側は `useContext` を使います。

```tsx
const session = useContext(LearningSessionContext);
```

### 5. props drillingを避ける

props drillingは、途中のコンポーネントが使わない値までpropsで受け取り、さらに子へ渡し続ける状態です。

```tsx
<Parent session={session}>
  <Middle session={session}>
    <Child session={session} />
  </Middle>
</Parent>
```

途中のコンポーネントが値を使わないなら、Contextの方が読みやすいことがあります。

### 6. TODOを直す

このレッスンでは、次の順番でTODOを直します。

```text
1. useReducerをimportする
2. SessionAction型を定義する
3. learningSessionReducerを作る
4. fixedStateをuseReducerへ置き換える
5. handlerからdispatchを呼ぶ
6. Providerでstate、score、handlerを配る
7. useLearningSessionで子コンポーネントから同じ値を読む
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
useReducerが何をするHookか説明できる
reducerが何を返す関数か説明できる
actionが何を表すか説明できる
dispatchでstateを更新できる
Providerで値を配れる
useContextで同じ値を読める
props drillingとの違いを説明できる
```

## Review

このレッスンの復習では、次を説明できるか確認します。

- `useReducer` と `useState` の使い分け
- reducerの引数と戻り値
- actionの役割
- `dispatch({ type: '...' })` の意味
- Context Providerの役割
- `useContext` の役割
- props drillingが起きる状況
