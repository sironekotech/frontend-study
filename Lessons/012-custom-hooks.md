# 012-custom-hooks

## Goal

このレッスンでは、custom hook を学びます。

Lesson 11 では、Hooksを呼んでよい場所を確認しました。

Lesson 12 では、`useState` などを使う処理を、コンポーネントの外へ切り出す方法を確認します。

このレッスンでは、次を学びます。

- custom hookは、Hookを使う処理をまとめる関数であること
- custom hookの名前は `use` で始めること
- コンポーネントは画面、custom hookは処理を担当すること
- 1つのページだけで使うhookはページ近くの `_hooks` に置けること
- 複数の場所で使うhookは `src/hooks` に置けること

## Start

```text
start/012-custom-hooks
```

このタグには、Lesson 12 の補足md、スターターページ、starter hook が入っています。

スターターページにはTODOと仮表示が残っています。

Lesson 12 でも、学習ページを主教材にします。

このmdは、タグ、開始方法、補足説明、復習用チェックリストを確認するための資料です。

## End

```text
end/012-custom-hooks
```

このタグは、Lesson 12 の完成見本です。

完成見本では、スターターにあった固定値やTODOが、custom hookを使う実装に置き換わっています。

## Build

`start/012-custom-hooks` には、次のスターターページが入っています。

```text
src/app/(pages)/hooks/custom-hooks/page.tsx
```

URLは次です。

```text
/hooks/custom-hooks
```

このレッスンでは、次のhookファイルも使います。

```text
src/app/(pages)/hooks/custom-hooks/_hooks/useLessonTimer.ts
src/hooks/useLearningChecklist.ts
```

## Before You Start

タグを取得します。

```bash
git fetch --all --tags
```

Lesson 12 の開始タグから、自分用のブランチを作ります。

```bash
git switch -c <username>/012-custom-hooks start/012-custom-hooks
```

例:

```bash
git switch -c taro/012-custom-hooks start/012-custom-hooks
```

ブランチを作ったら、まず学習ページをブラウザで開きます。

```text
/hooks/custom-hooks
```

このレッスンは、ページを見ながらスターターコードのTODOを順番に直す前提です。

## What You Will Build

受講者は、このレッスンでスターターコードを編集して、次を作ります。

```text
custom hooks lab
  complete mini example
    useToggleの完成例を見る

  local hook
    useLessonTimerを完成させる
    ページ専用の処理を _hooks に置く

  shared hook
    useLearningChecklistを完成させる
    複数ページで使える処理を src/hooks に置く

  page
    custom hookから返された値と関数を画面で使う
```

custom hookは、画面を返す関数ではありません。

画面を返すのはReactコンポーネントです。

custom hookは、state、更新関数、計算した値などを返します。

## Steps

### 1. スターターページを開く

まず、次のファイルを開きます。

```text
src/app/(pages)/hooks/custom-hooks/page.tsx
```

App Routerでは、`page.tsx` がURLに対応するページになります。

`(pages)` はURLには出ません。

そのため、このファイルは次のURLになります。

```text
/hooks/custom-hooks
```

### 2. custom hookは処理をまとめる関数

custom hookは、Hookを使う処理をまとめる関数です。

名前は必ず `use` で始めます。

```tsx
function useToggle() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  return { isOpen, handleToggle };
}
```

この関数はJSXを返していません。

`isOpen` と `handleToggle` を返しています。

### 3. コンポーネントは画面を担当する

Reactコンポーネントは、custom hookから返された値と関数を使って、JSXを返します。

```tsx
function TogglePanel() {
  const { isOpen, handleToggle } = useToggle();

  return (
    <button type="button" onClick={handleToggle}>
      {isOpen ? '開いています' : '閉じています'}
    </button>
  );
}
```

custom hookが処理を担当し、コンポーネントが画面を担当します。

### 4. 近くに置くhookを見る

1つのページだけで使うhookは、ページ近くの `_hooks` に置けます。

```text
src/app/(pages)/hooks/custom-hooks/_hooks/useLessonTimer.ts
```

このレッスンでは、学習時間を扱う `useLessonTimer` を完成させます。

### 5. 共通で使うhookを見る

複数のページで使う可能性があるhookは、`src/hooks` に置けます。

```text
src/hooks/useLearningChecklist.ts
```

このレッスンでは、チェックリストを扱う `useLearningChecklist` を完成させます。

### 6. 返す値を決める

custom hookは、コンポーネントが使いやすい形で値を返します。

```tsx
return {
  elapsedMinutes,
  handleAddMinute,
  handleResetTimer,
};
```

返す値が増えたら、オブジェクトで返すと読みやすいです。

### 7. TODOを直す

このレッスンでは、次の順番でTODOを直します。

```text
1. hookファイルでReactからuseStateをimportする
2. useLessonTimerの固定値をuseStateへ置き換える
3. handleAddMinuteで時間を増やす
4. handleResetTimerで時間を0へ戻す
5. useLearningChecklistの固定値をuseStateへ置き換える
6. handleToggleItemでチェック状態を切り替える
7. page.tsxでcustom hookから返された値を使う
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
custom hookが何をまとめる関数か説明できる
custom hookがJSXを返さない理由を説明できる
useLessonTimerで時間を増やせる
useLessonTimerで時間をリセットできる
useLearningChecklistでチェック状態を切り替えられる
_hooks と src/hooks の使い分けを説明できる
```

## Review

このレッスンの復習では、次を説明できるか確認します。

- custom hookとは何か
- custom hookの名前を `use` で始める理由
- Reactコンポーネントとcustom hookの役割の違い
- custom hookから何を返すか
- ページ近くの `_hooks` に置くケース
- `src/hooks` に置くケース
