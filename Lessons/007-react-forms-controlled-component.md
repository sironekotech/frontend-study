# 007-react-forms-controlled-component

## Goal

このレッスンでは、Reactのフォーム入力と controlled component を学びます。

Lesson 6 では、`useState` で数字、オブジェクト、配列のstateを更新しました。

Lesson 7 では、入力欄の値をReact stateで管理し、フォーム送信の流れを確認します。

このレッスンでは、次を学びます。

- フォームは入力欄をまとめるものだと理解すること
- 入力欄の `value` をReact stateで決めること
- `onChange` で `event.target.value` を取り出すこと
- controlled component の流れ
- `form` の `onSubmit`
- `event.preventDefault()`
- `ChangeEvent` と `FormEvent` の型

## Start

```text
start/007-react-forms-controlled-component
```

このタグには、Lesson 7 の補足mdとスターターページが入っています。

スターターページにはTODOと仮表示が残っています。

Lesson 7 では、学習ページを主教材にします。

このmdは、タグ、開始方法、補足説明、復習用チェックリストを確認するための資料です。

## End

```text
end/007-react-forms-controlled-component
```

このタグは、Lesson 7 の完成見本です。

完成見本では、スターターページにあったTODOと仮表示が、すべて動く実装に置き換わっています。

## Build

`start/007-react-forms-controlled-component` には、次のスターターページが入っています。

```text
src/app/(pages)/react-basics/forms-controlled-component/page.tsx
```

URLは次です。

```text
/react-basics/forms-controlled-component
```

トップページからも、この学習ページへ移動できます。

このレッスンでは、ファイルを新規作成するのではなく、スターターページのTODOや仮表示を置き換えます。

## Before You Start

タグを取得します。

```bash
git fetch --all --tags
```

Lesson 7 の開始タグから、自分用のブランチを作ります。

```bash
git switch -c <username>/007-react-forms-controlled-component start/007-react-forms-controlled-component
```

例:

```bash
git switch -c taro/007-react-forms-controlled-component start/007-react-forms-controlled-component
```

ブランチを作ったら、まず学習ページをブラウザで開きます。

```text
/react-basics/forms-controlled-component
```

このレッスンは、ページを見ながらスターターコードのTODOを順番に直す前提です。

このmdは補足として使います。

## What You Will Build

受講者は、このレッスンでスターターページを編集して、次を作ります。

```text
controlled form lab
  name
    入力した名前をdraft.nameに保存する

  email
    入力したメールをdraft.emailに保存する

  category
    相談種別のselectをdraft.categoryに保存する

  message
    textareaの入力をdraft.messageに保存する

  level
    selectの選択をdraft.levelに保存する

  submit
    ページ遷移せず、送信内容を画面に表示する
```

最初は、入力欄があっても値が固定されている状態を確認します。

ページの上部には、1つの入力欄だけを使った controlled component の完成例を置いています。

完成例で、`value`、`onChange`、`event.target.value` の関係を見てから、下のTODO付きスターターを直します。

## Steps

### 1. スターターページを開く

まず、次のファイルを開きます。

```text
src/app/(pages)/react-basics/forms-controlled-component/page.tsx
```

App Routerでは、`page.tsx` がURLに対応するページになります。

`(pages)` はURLには出ません。

そのため、このファイルは次のURLになります。

```text
/react-basics/forms-controlled-component
```

このページには、最初から次が入っています。

```text
フォームの説明
controlled componentの説明
eventの型の説明
1つだけ動く入力欄の完成例
TODOの順番
フォームの仮表示
送信結果の仮表示
```

### 2. フォームを確認する

フォームは、ユーザーに入力してもらうためのまとまりです。

1つの入力欄だけでなく、複数の入力欄をまとめて扱えます。

```tsx
<form>
  <label>
    名前
    <input />
  </label>

  <button type="submit">送信する</button>
</form>
```

読むときは、次のように考えます。

```text
form
  入力欄と送信ボタンのまとまり

label
  入力欄が何のためのものかを伝える

input
  ユーザーが値を入力する

button type="submit"
  フォームを送信する
```

### 3. controlled componentを見る

controlled componentでは、入力欄の表示をReact stateが決めます。

```tsx
<input value={draft.name} onChange={handleNameChange} />
```

読むときは、次のように考えます。

```text
value={draft.name}
  入力欄に表示する値はdraft.name

onChange={handleNameChange}
  入力されたらhandleNameChangeを動かす
```

入力された文字は、`event.target.value` から取り出します。

```tsx
function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
  setDraft((currentDraft) => ({
    ...currentDraft,
    name: event.target.value,
  }));
}
```

### 4. draftをstateにする

スターターコードでは、`draft` が固定値になっています。

```tsx
const draft = starterDraft;
```

このままだと、入力しても値は保存されません。

完成版では、次の形に置き換えます。

```tsx
const [draft, setDraft] = useState<FormDraft>(starterDraft);
```

`draft` は、フォーム全体の入力途中の値です。

### 5. 入力欄ごとにonChangeを書く

`input`、`textarea`、`select` は、それぞれeventの型が違います。

```tsx
function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
  event.target.value;
}

function handleMessageChange(event: ChangeEvent<HTMLTextAreaElement>) {
  event.target.value;
}

function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
  event.target.value;
}
```

まずは、どのHTML要素のeventなのかを型で書く、と考えます。

### 6. submitでpreventDefaultする

フォームの送信では、`onSubmit` を使います。

```tsx
<form onSubmit={handleSubmit}>
```

`handleSubmit` では、まず `event.preventDefault()` を呼びます。

```tsx
function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}
```

`preventDefault` は、ブラウザ標準の送信動作を止めるために使います。

この教材では、ページを移動せず、Reactのstateを画面に表示して確認します。

## Check

ローカルで次を確認します。

```bash
npm run format:check
npm run lint
npm run build
```

画面では、次を確認します。

```text
名前を入力するとdraft.nameが変わる
メールを入力するとdraft.emailが変わる
相談種別を変更するとdraft.categoryが変わる
メッセージを入力するとdraft.messageが変わる
今の状態を変更するとdraft.levelが変わる
submitでページ遷移せず送信結果が表示される
```

## Review

このレッスンの復習では、次を説明できるか確認します。

- form は何のために使うか
- controlled component とは何か
- `value={draft.name}` が何をしているか
- `onChange` はいつ動くか
- `event.target.value` で何が取れるか
- `ChangeEvent<HTMLInputElement>` の意味
- `FormEvent<HTMLFormElement>` の意味
- `event.preventDefault()` をなぜ呼ぶか
