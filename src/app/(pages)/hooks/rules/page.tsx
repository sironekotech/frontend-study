'use client';

import { useState } from 'react';
import { HomeLink } from '@/app/_components/HomeLink';
import { TopLevelHookExample } from './_components/TopLevelHookExample';

type RuleCase = {
  id: string;
  title: string;
  summary: string;
  badCode: string;
  resultLabel: string;
  reason: string;
  fixedCode: string;
};

const ruleCases: RuleCase[] = [
  {
    id: 'conditional-hook',
    title: '条件分岐の中でHookを呼ぶ',
    summary: 'isReadyがtrueのときだけuseStateを呼んでいます。',
    badCode: `function Counter({ isReady }: { isReady: boolean }) {
  if (isReady) {
    const [count, setCount] = useState(0);
  }

  return <button>+1</button>;
}`,
    resultLabel: 'TODO: OKかNGかを表示します',
    reason: 'TODO: なぜその判定になるかを表示します',
    fixedCode: `TODO: Hookを条件分岐の外へ出したコードを表示します`,
  },
  {
    id: 'event-handler-hook',
    title: 'イベントハンドラの中でHookを呼ぶ',
    summary: 'クリックしたときにuseEffectを呼ぼうとしています。',
    badCode: `function Form() {
  function handleSubmit() {
    useEffect(() => {
      console.log('送信しました');
    }, []);
  }

  return <button onClick={handleSubmit}>送信</button>;
}`,
    resultLabel: 'TODO: OKかNGかを表示します',
    reason: 'TODO: なぜその判定になるかを表示します',
    fixedCode: `TODO: イベントハンドラではHookではなく普通の処理を呼ぶ例を表示します`,
  },
  {
    id: 'custom-hook-name',
    title: 'useで始まらない関数からHookを呼ぶ',
    summary: '普通の関数名に見える関数の中でuseStateを呼んでいます。',
    badCode: `function readWindowWidth() {
  const [width, setWidth] = useState(0);
  return width;
}`,
    resultLabel: 'TODO: OKかNGかを表示します',
    reason: 'TODO: なぜその判定になるかを表示します',
    fixedCode: `TODO: useWindowWidthのようにuseで始める例を表示します`,
  },
];

const callPlaces = [
  {
    name: 'Reactコンポーネント',
    answer: 'Hookを呼んでOK',
    description:
      '画面に出すJSXを返す関数です。関数名は大文字で始めます。Hooksはこの関数のトップレベルで呼びます。',
    code: `function Counter() {
  const [count, setCount] = useState(0);

  return <button>{count}</button>;
}`,
  },
  {
    name: 'custom hook（Lesson 12で詳しく）',
    answer: 'Hookを呼んでOK',
    description:
      'Hookを使う処理をまとめる関数です。ここでは、名前がuseで始まる関数ではHookを呼べる、とだけ覚えます。',
    code: `function useReadyMessage() {
  const [message] = useState('準備OK');

  return message;
}`,
  },
  {
    name: '普通の関数',
    answer: 'Hookを呼ばない',
    description:
      '文字を整える、数値を計算するなど、Reactの画面とは関係なく使う関数です。Hookは呼びません。',
    code: `function formatCount(count: number) {
  return \`\${count}回クリックしました\`;
}`,
  },
  {
    name: 'イベントハンドラ',
    answer: 'Hookを呼ばない',
    description:
      'クリック、入力、送信など、ユーザー操作のあとに動く関数です。HookではなくsetStateなどを呼びます。',
    code: `function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((currentCount) => currentCount + 1);
  }

  return <button onClick={handleClick}>+1</button>;
}`,
  },
];

function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 11 / hooks rules
    </p>
  );
}

function ConceptOverview() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで出てくる言葉</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">Hookのルール</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            <code>useState</code> や <code>useEffect</code> を安全に使うための決まりです。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">トップレベル</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            コンポーネント関数のいちばん上の階層です。<code>if</code> や <code>for</code>{' '}
            の中ではありません。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">custom hook</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            Hookを使う共通処理です。名前は <code>use</code> で始めます。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">ESLint</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            コードの危ない書き方を見つける道具です。Hookのルール違反も検出します。
          </p>
        </article>
      </div>
    </section>
  );
}

function RuleFlowGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">Hookは毎回同じ順番で呼ぶ</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        Reactは、Hookが呼ばれた順番でstateやeffectを管理します。ある表示では1つ目のHookだけ呼び、別の表示では2つ目まで呼ぶ、という形にすると順番がずれます。
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">1. Hookを先に呼ぶ</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            <code>useState</code> や <code>useEffect</code> は関数の上の方で呼びます。
          </p>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">2. 条件はあとで見る</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            条件によって変えるのは、Hookを呼ぶ場所ではなく、表示するJSXです。
          </p>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">3. ESLintで確認する</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            危ない呼び方は <code>npm run lint</code> で早めに検出します。
          </p>
        </article>
      </div>
    </section>
  );
}

function EventHandlerGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">
        イベントハンドラは「操作後に動く関数」
      </h2>
      <p className="mt-3 leading-7 text-[#425466]">
        イベントは、クリック、入力、送信のようなユーザー操作です。イベントハンドラは、その操作が起きたあとに動く関数です。
      </p>
      <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-md bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">読む順番</p>
          <div className="mt-3 grid gap-3 text-sm leading-6 text-[#425466]">
            <p className="rounded-md bg-white p-3">1. 先にuseStateをトップレベルで呼ぶ</p>
            <p className="rounded-md bg-white p-3">2. クリック後に動くhandleClickを作る</p>
            <p className="rounded-md bg-white p-3">3. handleClickの中ではsetCountを呼ぶ</p>
          </div>
        </div>

        <div className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">イベントハンドラの例</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((currentCount) => currentCount + 1);
  }

  return <button onClick={handleClick}>+1</button>;
}`}</code>
          </pre>
        </div>
      </div>
      <div className="mt-5 rounded-md border border-dashed border-[#c8b26a] bg-[#fff8df] p-4">
        <p className="text-sm leading-6 text-[#6f5615]">
          <code>handleClick</code> の中で <code>useState</code>{' '}
          は呼びません。Hookは先に呼んでおき、イベントハンドラでは <code>setCount</code>{' '}
          のような更新関数を使います。
        </p>
      </div>
    </section>
  );
}

function CallPlaceMatrix() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">Hookを呼んでよい場所</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        まずは、Hookを呼ぶ場所と呼ばない場所を、短いコードで見ます。カードのラベルは、その場所でHookを呼んでよいかを表しています。
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {callPlaces.map((place) => (
          <article key={place.name} className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="font-semibold text-[#15191f]">{place.name}</h3>
              <p
                className={`w-fit rounded-md px-3 py-1 text-sm font-semibold ${
                  place.answer.includes('OK')
                    ? 'bg-[#e3f0e8] text-[#2f6848]'
                    : 'bg-[#fff4c7] text-[#6f5615]'
                }`}
              >
                {place.answer}
              </p>
            </div>
            <p className="mt-3 text-sm leading-6 text-[#425466]">{place.description}</p>
            <pre className="mt-4 overflow-x-auto rounded-md bg-[#15191f] p-3 text-sm leading-6 text-[#f7f7f2]">
              <code>{place.code}</code>
            </pre>
          </article>
        ))}
      </div>
    </section>
  );
}

function TodoOrder() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">TODOの順番</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        このstartページは、違反例のコード表示と選択状態だけ先に用意しています。TODOでは、選んだコードが
        OKかNGか、なぜそうなるか、どう直すかを表示します。
      </p>
      <div className="mt-4 grid gap-3">
        {[
          '3つのコード例を読み、Hookを呼んでいる場所を確認する',
          '判定の文章を「NG」などの分かりやすい表示に置き換える',
          '理由の文章を初学者向けの説明に置き換える',
          '直したコード例を安全なコードに置き換える',
          '条件分岐の中でHookを呼ばず、JSX側を条件分岐する考え方を確認する',
          'custom hookはuseで始めることを確認する',
        ].map((todo, index) => (
          <div
            key={todo}
            className="grid gap-3 rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4 text-sm leading-6 text-[#425466] sm:grid-cols-[80px_1fr]"
          >
            <p className="font-mono font-semibold text-[#6f5615]">TODO {index + 1}</p>
            <p>{todo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function RulesStarter() {
  const [selectedCaseId, setSelectedCaseId] = useState(ruleCases[0].id);
  const selectedCase = ruleCases.find((ruleCase) => ruleCase.id === selectedCaseId) ?? ruleCases[0];

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">コードを見てOK / NGを判定する</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            違反するコードは実行せず、文字として表示しています。TODOでは、選んだコードの判定、理由、直し方を表示します。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#fff4c7] px-3 py-2 text-sm font-semibold text-[#6f5615]">
          TODO
        </p>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid content-start gap-3 rounded-md bg-[#f7f7f2] p-5">
          {ruleCases.map((ruleCase) => (
            <button
              key={ruleCase.id}
              type="button"
              onClick={() => setSelectedCaseId(ruleCase.id)}
              className={`rounded-md border p-4 text-left ${
                selectedCaseId === ruleCase.id
                  ? 'border-[#3f7d58] bg-white'
                  : 'border-[#d8d6c8] bg-[#f7f7f2]'
              }`}
            >
              <span className="block text-sm font-semibold text-[#15191f]">{ruleCase.title}</span>
              <span className="mt-2 block text-sm leading-6 text-[#425466]">
                {ruleCase.summary}
              </span>
            </button>
          ))}
        </div>

        <div className="grid gap-4">
          <article className="rounded-md bg-[#15191f] p-4">
            <p className="text-sm font-semibold text-[#82d39b]">表示しているコード</p>
            <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
              <code>{selectedCase.badCode}</code>
            </pre>
          </article>

          <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
            <h3 className="text-sm font-semibold text-[#15191f]">判定</h3>
            <p className="mt-3 rounded-md bg-white p-3 text-sm leading-6 text-[#425466]">
              {selectedCase.resultLabel}
            </p>
            <p className="mt-3 rounded-md bg-white p-3 text-sm leading-6 text-[#425466]">
              {selectedCase.reason}
            </p>
          </article>

          <article className="rounded-md bg-[#15191f] p-4">
            <p className="text-sm font-semibold text-[#82d39b]">直す場合のコード</p>
            <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
              <code>{selectedCase.fixedCode}</code>
            </pre>
          </article>
        </div>
      </div>
    </section>
  );
}

function CodeHint() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで目指すコードの形</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        完成版では、各コード例にOK /
        NG、理由、直し方を入れます。違反例は文字として表示し、実際のコンポーネントではHookのルールを破らないようにします。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`{
  resultLabel: 'NG',
  reason: '条件によってHookを呼ぶ回数が変わるためです。',
  fixedCode: \`const [count, setCount] = useState(0);

if (!isReady) {
  return <p>準備中です</p>;
}\`,
}`}</code>
      </pre>
    </section>
  );
}

function CompletionCheck() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-[#fff8df] p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">完成条件</h2>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-[#6f5615] md:grid-cols-2">
        <p className="rounded-md bg-white p-3">Hooksをトップレベルで呼ぶ理由を説明できる</p>
        <p className="rounded-md bg-white p-3">条件分岐の中でHookを呼ばない理由を説明できる</p>
        <p className="rounded-md bg-white p-3">
          イベントハンドラの中でHookを呼ばない理由を説明できる
        </p>
        <p className="rounded-md bg-white p-3">custom hookをuseで始める理由を説明できる</p>
        <p className="rounded-md bg-white p-3">ESLintがHookのルール違反を止める理由を説明できる</p>
      </div>
    </section>
  );
}

export default function HooksRulesPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-4 py-8 text-[#1f2933] sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="border-b border-[#d8d6c8] pb-8">
          <HomeLink />
          <LessonBadge />
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#15191f] sm:text-5xl">
            Hooksのルールを守って安全に書く
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#425466]">
            Lesson 10では、<code>useRef</code> でDOM参照と再レンダーされない値を学びました。Lesson
            11では、Hooksをどこで呼んでよいか、なぜESLintが止めるのかを確認します。
          </p>
        </header>

        <ConceptOverview />
        <RuleFlowGuide />
        <EventHandlerGuide />
        <CallPlaceMatrix />
        <TopLevelHookExample />
        <TodoOrder />
        <RulesStarter />
        <CodeHint />
        <CompletionCheck />
      </div>
    </main>
  );
}
