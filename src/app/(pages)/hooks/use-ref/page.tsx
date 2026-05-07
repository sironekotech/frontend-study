'use client';

import { useRef, useState, type ChangeEvent } from 'react';
import { HomeLink } from '@/app/_components/HomeLink';
import { FocusMiniExample } from './_components/FocusMiniExample';

type RefUseCase = {
  id: string;
  title: string;
  description: string;
};

const refUseCases: RefUseCase[] = [
  {
    id: 'dom',
    title: 'DOM参照',
    description: 'inputなど、画面に出たHTML要素をReactから触りたいときに使います。',
  },
  {
    id: 'focus',
    title: 'focus',
    description: 'ボタンを押して、特定のinputへカーソルを移動したいときに使います。',
  },
  {
    id: 'no-render',
    title: '再レンダーされない値',
    description: '画面に表示しなくてよい値を、Reactに覚えさせたいときに使います。',
  },
];

function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 10 / hooks useRef
    </p>
  );
}

function ConceptOverview() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで出てくる言葉</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">useRef</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            Reactに値を覚えさせるHookです。stateと違い、値を変えても画面は自動で再表示されません。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">current</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            refの中身です。<code>nameInputRef.current</code> のように読んだり書いたりします。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">DOM参照</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            inputやbuttonなど、ブラウザ上にあるHTML要素を参照することです。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">focus</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            入力できる場所へカーソルを移動することです。検索欄やフォームでよく使います。
          </p>
        </article>
      </div>
    </section>
  );
}

function StateRefComparison() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">stateとrefの違い</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        <code>useState</code> と <code>useRef</code>{' '}
        は、どちらもReactに値を覚えさせます。違いは、値を変えたあとに画面を作り直すかどうかです。
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">useState</p>
          <h3 className="mt-2 text-lg font-semibold text-[#15191f]">画面に見せたい値</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            値が変わるとReactが画面を作り直します。inputの文字、カウント、表示メッセージなどに使います。
          </p>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">useRef</p>
          <h3 className="mt-2 text-lg font-semibold text-[#15191f]">画面に見せなくてよい値</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            <code>current</code> を書き換えても、Reactは画面を自動で作り直しません。
            DOM参照や内部だけで使う値に向いています。
          </p>
        </article>
      </div>
    </section>
  );
}

function CurrentGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">currentはrefの中身</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        <code>useRef</code> で作った値は、箱のように考えると読みやすいです。 箱そのものが{' '}
        <code>nameInputRef</code> で、箱の中身が <code>nameInputRef.current</code> です。
      </p>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">inputを覚えるref</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`const nameInputRef = useRef<HTMLInputElement>(null);`}</code>
          </pre>
        </div>

        <div className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">回数を覚えるref</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`const saveCountRef = useRef<number>(0);`}</code>
          </pre>
        </div>
      </div>

      <div className="mt-5 rounded-md border border-dashed border-[#c8b26a] bg-[#fff8df] p-4">
        <p className="text-sm leading-6 text-[#6f5615]">
          <code>HTMLInputElement</code> はinput要素用の型です。<code>null</code>{' '}
          は、最初はまだinputが入っていないことを表します。
        </p>
      </div>
    </section>
  );
}

function TodoOrder() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">TODOの順番</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        完成版では、次のTODOがすべて実装済みです。スターターと見比べると、
        <code>useRef</code> をどこに追加したか確認できます。
      </p>
      <div className="mt-4 grid gap-3">
        {[
          'ReactからuseRefをimport済み',
          'nameInputRefをuseRef<HTMLInputElement>(null)で作成済み',
          'inputにref={nameInputRef}を渡してDOM参照を接続済み',
          'ボタンでnameInputRef.current?.focus()を呼ぶ実装済み',
          'saveCountRefをuseRef<number>(0)で作り、保存回数をcurrentへ入れる実装済み',
          'ref.currentを書き換えても、画面用stateを更新しない限り表示は変わらないことを確認済み',
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

function RefExample() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const savedNameRef = useRef('まだ保存されていません');
  const saveCountRef = useRef<number>(0);
  const [learnerName, setLearnerName] = useState('');
  const [statusMessage, setStatusMessage] = useState('まだボタンを押していません');
  const [visibleSavedName, setVisibleSavedName] = useState('まだ保存されていません');
  const [visibleSaveCount, setVisibleSaveCount] = useState(0);

  function handleLearnerNameChange(event: ChangeEvent<HTMLInputElement>) {
    setLearnerName(event.target.value);
  }

  function handleFocusNameInput() {
    nameInputRef.current?.focus();
    setStatusMessage('nameInputRef.current?.focus() で名前入力欄にfocusしました');
  }

  function handleSaveToRef() {
    savedNameRef.current = learnerName || '名前なし';
    saveCountRef.current += 1;
    setVisibleSavedName(savedNameRef.current);
    setVisibleSaveCount(saveCountRef.current);
    setStatusMessage('ref.currentへ保存し、画面に見せるためのstateも更新しました');
  }

  function handleIncreaseRefOnly() {
    saveCountRef.current += 1;
    setStatusMessage(
      `ref.currentだけを${saveCountRef.current}へ増やしました。右側の表示用stateはまだ${visibleSaveCount}のままです。`,
    );
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">
            inputをrefで覚えて、ボタンからfocusする
          </h2>
          <p className="mt-3 leading-7 text-[#425466]">
            入力文字は画面に表示したいのでstateで持っています。inputそのものと保存回数は
            <code>useRef</code> で覚えています。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-2 text-sm font-semibold text-[#2f6848]">
          完成見本
        </p>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid content-start gap-4 rounded-md bg-[#f7f7f2] p-5">
          <label className="grid gap-2 text-sm font-semibold text-[#425466]">
            名前
            <input
              ref={nameInputRef}
              value={learnerName}
              onChange={handleLearnerNameChange}
              placeholder="React learner"
              className="min-h-11 rounded-md border border-[#d8d6c8] bg-white px-3 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
            />
          </label>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleFocusNameInput}
              className="rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white"
            >
              名前入力欄にfocusする
            </button>
            <button
              type="button"
              onClick={handleSaveToRef}
              className="rounded-md border border-[#d8d6c8] bg-white px-4 py-2 text-sm font-semibold text-[#15191f]"
            >
              refに保存して表示する
            </button>
            <button
              type="button"
              onClick={handleIncreaseRefOnly}
              className="rounded-md border border-[#d8d6c8] bg-white px-4 py-2 text-sm font-semibold text-[#15191f] sm:col-span-2"
            >
              ref.currentだけ+1する
            </button>
          </div>

          <p className="rounded-md bg-white p-3 text-sm leading-6 text-[#425466]">
            {statusMessage}
          </p>
        </div>

        <div className="grid gap-4">
          <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
            <h3 className="text-sm font-semibold text-[#15191f]">1. stateで画面に出す値</h3>
            <p className="mt-3 rounded-md bg-white p-3 text-sm leading-6 text-[#425466]">
              今の入力値:{' '}
              <span className="font-semibold text-[#15191f]">
                {learnerName || 'まだ入力されていません'}
              </span>
            </p>
          </article>

          <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
            <h3 className="text-sm font-semibold text-[#15191f]">2. refでDOMを覚える</h3>
            <p className="mt-3 rounded-md bg-white p-3 text-sm leading-6 text-[#425466]">
              inputに <code>{`ref={nameInputRef}`}</code>{' '}
              を渡しているので、ボタンから入力欄へfocusできます。
            </p>
          </article>

          <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
            <h3 className="text-sm font-semibold text-[#15191f]">3. refで内部の値を覚える</h3>
            <div className="mt-3 grid gap-2">
              <p className="rounded-md bg-white p-3 text-sm leading-6 text-[#425466]">
                ref.currentに保存した名前:{' '}
                <span className="font-semibold text-[#15191f]">{visibleSavedName}</span>
              </p>
              <p className="rounded-md bg-white p-3 text-sm leading-6 text-[#425466]">
                画面に表示している保存回数:{' '}
                <span className="font-semibold text-[#15191f]">{visibleSaveCount}</span>
              </p>
              <p className="rounded-md border border-dashed border-[#c8b26a] bg-[#fff8df] p-3 text-sm leading-6 text-[#6f5615]">
                <code>ref.currentだけ+1する</code>{' '}
                を押すと、refの中身は増えます。ただし画面に出しているstateは更新していないため、この保存回数はその場では増えません。
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function UseCaseList() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">useRefを使う場面</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {refUseCases.map((useCase) => (
          <article key={useCase.id} className="rounded-md bg-[#f7f7f2] p-4">
            <h3 className="font-semibold text-[#15191f]">{useCase.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#425466]">{useCase.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CodeHint() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで目指すコードの形</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        完成版では、input用のrefと保存回数用のrefを作ります。input用のrefはDOM参照として使い、
        保存回数用のrefは画面を自動で再表示しない値として使います。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`const nameInputRef = useRef<HTMLInputElement>(null);
const savedNameRef = useRef('まだ保存されていません');
const saveCountRef = useRef<number>(0);

function handleFocusNameInput() {
  nameInputRef.current?.focus();
}

function handleSaveToRef() {
  savedNameRef.current = learnerName || '名前なし';
  saveCountRef.current += 1;
  setVisibleSavedName(savedNameRef.current);
  setVisibleSaveCount(saveCountRef.current);
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
        <p className="rounded-md bg-white p-3">ReactからuseRefをimportしている</p>
        <p className="rounded-md bg-white p-3">inputにrefをつなげている</p>
        <p className="rounded-md bg-white p-3">ボタンからinputへfocusできる</p>
        <p className="rounded-md bg-white p-3">ref.currentに保存回数を入れている</p>
        <p className="rounded-md bg-white p-3">refとstateの違いを説明できる</p>
      </div>
    </section>
  );
}

export default function HooksUseRefPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-4 py-8 text-[#1f2933] sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="border-b border-[#d8d6c8] pb-8">
          <HomeLink />
          <LessonBadge />
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#15191f] sm:text-5xl">
            useRefでDOMと再レンダーされない値を覚える
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#425466]">
            Lesson 9では、画面を出したあとに処理を動かす <code>useEffect</code> を学びました。Lesson
            10では、Reactに値を覚えさせるけれど、画面を自動で再表示しない
            <code>useRef</code> を学びます。
          </p>
        </header>

        <ConceptOverview />
        <StateRefComparison />
        <CurrentGuide />
        <FocusMiniExample />
        <TodoOrder />
        <RefExample />
        <UseCaseList />
        <CodeHint />
        <CompletionCheck />
      </div>
    </main>
  );
}
