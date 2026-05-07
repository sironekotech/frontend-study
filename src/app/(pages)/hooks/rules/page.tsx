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
    answer: 'OK',
    description: '画面を返す関数です。Hooksをトップレベルで呼べます。',
  },
  {
    name: 'custom hook',
    answer: 'OK',
    description: 'useで始まる、Hookを使うための共通処理です。',
  },
  {
    name: '普通の関数',
    answer: 'NG',
    description: 'ReactがHookの順番を追えないため、Hookを呼びません。',
  },
  {
    name: 'イベントハンドラ',
    answer: 'NG',
    description: 'クリック後に動く関数です。HookではなくsetStateなどを呼びます。',
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

function CallPlaceMatrix() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">Hookを呼んでよい場所</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {callPlaces.map((place) => (
          <article key={place.name} className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="font-semibold text-[#15191f]">{place.name}</h3>
              <p
                className={`w-fit rounded-md px-3 py-1 text-sm font-semibold ${
                  place.answer === 'OK'
                    ? 'bg-[#e3f0e8] text-[#2f6848]'
                    : 'bg-[#fff4c7] text-[#6f5615]'
                }`}
              >
                {place.answer}
              </p>
            </div>
            <p className="mt-3 text-sm leading-6 text-[#425466]">{place.description}</p>
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
          'resultLabelのTODOをOK / NGの判定に置き換える',
          'reasonのTODOを初学者向けの理由に置き換える',
          'fixedCodeのTODOを安全なコード例に置き換える',
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
