# 006-hooks-use-state

## Goal

このレッスンでは、Reactの `useState` をもう少し詳しく学びます。

Lesson 5 では、ボタンや入力欄の操作でstateが変わり、画面が表示し直される流れを確認しました。

Lesson 6 では、次を学びます。

- 前のstateを使って次のstateを作ること
- オブジェクトstateを直接書き換えず、新しいオブジェクトで更新すること
- 配列stateを直接書き換えず、新しい配列で更新すること
- TypeScriptでstateの型を見ること

## Start

```text
start/006-hooks-use-state
```

このタグには、Lesson 6 の補足mdとスターターページが入っています。

スターターページにはTODOと仮表示が残っています。

Lesson 6 では、学習ページを主教材にします。

このmdは、タグ、開始方法、補足説明、復習用チェックリストを確認するための資料です。

## End

```text
end/006-hooks-use-state
```

このタグは、Lesson 6 の完成見本です。

完成見本では、スターターページにあったTODOと仮表示が、すべて動く実装に置き換わっています。

## Build

`start/006-hooks-use-state` には、次のスターターページが入っています。

```text
src/app/(pages)/hooks/use-state/page.tsx
```

URLは次です。

```text
/hooks/use-state
```

トップページからも、この学習ページへ移動できます。

このレッスンでは、ファイルを新規作成するのではなく、スターターページのTODOや仮表示を置き換えます。

## Before You Start

タグを取得します。

```bash
git fetch --all --tags
```

Lesson 6 の開始タグから、自分用のブランチを作ります。

```bash
git switch -c <username>/006-hooks-use-state start/006-hooks-use-state
```

例:

```bash
git switch -c taro/006-hooks-use-state start/006-hooks-use-state
```

ブランチを作ったら、まず学習ページをブラウザで開きます。

```text
/hooks/use-state
```

このレッスンは、ページを見ながらスターターコードのTODOを順番に直す前提です。

このmdは補足として使います。

## What You Will Build

受講者は、このレッスンでスターターページを編集して、次を作ります。

```text
hooks useState lab
  count
    前のcountを使って+1する
    0に戻す

  profile
    nameを入力で変える
    levelをボタンで上げる

  skills
    クリックした項目だけdoneを切り替える

  saveStatus
    idle / saving / done の状態を切り替える
```

最初は、ボタンや入力欄があっても値が固定されている状態を確認します。

ページの上部には、前のstateを使うカウントボタンの完成例を1つだけ置いています。

完成例で、`setCount((currentCount) => currentCount + 1)` の形を見てから、下のTODO付きスターターを直します。

## Steps

### 1. スターターページを開く

まず、次のファイルを開きます。

```text
src/app/(pages)/hooks/use-state/page.tsx
```

App Routerでは、`page.tsx` がURLに対応するページになります。

`(pages)` はURLには出ません。

そのため、このファイルは次のURLになります。

```text
/hooks/use-state
```

このページには、最初から次が入っています。

```text
useState更新パターンの説明
前のstateを使う完成例
TODOの順番
countの仮表示
profileの仮表示
skillsの仮表示
saveStatusの仮表示
```

### 2. useStateをimportする

スターターコードの先頭を確認します。

完成版では、Reactから `useState` をimportします。

```tsx
import { useState } from 'react';
```

Lesson 6のページは、ボタンや入力欄を使うので Client Component です。

そのため、ファイルの先頭に次が入っています。

```tsx
'use client';
```

### 3. 前のstateを使ってcountを更新する

スターターコードでは、`count` が固定値になっています。

```tsx
const count = 0;
```

このままだと、ボタンを押しても画面は変わりません。

完成版では、次の形に置き換えます。

```tsx
const [count, setCount] = useState(0);
```

前のcountを使って次のcountを作るときは、次の形を使います。

```tsx
setCount((currentCount) => currentCount + 1);
```

`currentCount` は、Reactが持っている最新のcountです。

### 4. オブジェクトstateを更新する

スターターコードでは、`profile` が固定値になっています。

```tsx
const profile = starterProfile;
```

完成版では、`profile` をstateにします。

```tsx
const [profile, setProfile] = useState(starterProfile);
```

オブジェクトの一部だけを変えるときも、元のオブジェクトを直接書き換えません。

次のように、新しいオブジェクトを返します。

```tsx
setProfile((currentProfile) => ({
  ...currentProfile,
  level: currentProfile.level + 1,
}));
```

`...currentProfile` は、今のprofileの中身を新しいオブジェクトへコピーする書き方です。

### 5. 配列stateを更新する

スターターコードでは、`skills` が固定値になっています。

```tsx
const skills = starterSkills;
```

完成版では、`skills` をstateにします。

```tsx
const [skills, setSkills] = useState(starterSkills);
```

配列の中の1件だけ変えるときは、`map` で新しい配列を作ります。

```tsx
setSkills((currentSkills) =>
  currentSkills.map((skill) => (skill.id === targetId ? { ...skill, done: !skill.done } : skill)),
);
```

ここでも、元の配列や元のオブジェクトを直接書き換えません。

### 6. stateの型を見る

単純なstateでは、TypeScriptが型を推測してくれます。

```tsx
const [count, setCount] = useState(0);
```

この場合、`count` は number として扱われます。

一方で、決まった文字だけを入れたいstateでは、型を自分で書くと分かりやすくなります。

```tsx
type SaveStatus = 'idle' | 'saving' | 'done';

const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');
```

この形にすると、`saveStatus` には `idle`、`saving`、`done` のどれかだけを入れられます。

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
Levelを上げるボタンでprofile.levelが増える
名前の入力がprofile.nameに反映される
skillをクリックするとdoneが切り替わる
保存状態をsaving / doneに変更できる
```

## Review

このレッスンの復習では、次を説明できるか確認します。

- `setCount(count + 1)` と `setCount((currentCount) => currentCount + 1)` の違い
- 前のstateを使う更新が必要になる場面
- オブジェクトstateを直接書き換えない理由
- 配列stateを直接書き換えない理由
- `...currentProfile` が何をしているか
- `map` でクリックした項目だけ更新する流れ
- `useState<SaveStatus>('idle')` の意味
