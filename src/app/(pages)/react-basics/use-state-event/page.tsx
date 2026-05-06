'use client';

import { WorkingCounterExample } from './_components/WorkingCounterExample';
import { HomeLink } from '@/app/_components/HomeLink';

// TODO 1: Reactから useState をimportします。

type StarterTodo = {
  id: string;
  label: string;
  done: boolean;
};

const starterTodos: StarterTodo[] = [
  {
    id: 'import-use-state',
    label: 'useStateをimportする',
    done: false,
  },
  {
    id: 'counter-state',
    label: 'countをstateにする',
    done: false,
  },
  {
    id: 'toggle-state',
    label: '表示切り替えをstateにする',
    done: false,
  },
  {
    id: 'input-state',
    label: '入力欄の値をstateにする',
    done: false,
  },
];

function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 5 / useState + event
    </p>
  );
}

function ConceptOverview() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで出てくる言葉</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">event</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            ボタンを押す、文字を入力するなど、ユーザーの操作で起きる出来事です。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">event handler</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            <code>onClick</code> や <code>onChange</code> に渡す、操作が起きたときに動く関数です。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">useState</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            画面の状態を持つためのReact Hookです。stateを更新すると、画面がもう一度表示されます。
          </p>
        </article>
      </div>
    </section>
  );
}

function BeforeAfterFlow() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">今のスターター状態</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        このページにはボタンや入力欄がありますが、まだ値は固定されています。ボタンを押しても、入力しても、画面は変わりません。
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">1. 操作する</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            ボタンを押す、入力欄に文字を入れる。
          </p>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">2. stateを変える</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            <code>setCount</code> のような関数で値を更新する。
          </p>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">3. 画面が変わる</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            Reactが新しいstateを使って画面を表示し直す。
          </p>
        </article>
      </div>
    </section>
  );
}

function CounterStarter() {
  const count = 0;

  function handleIncrease() {
    // TODO 2: countをuseStateで持ち、setCountで1増やします。
  }

  function handleReset() {
    // TODO 3: countを0に戻します。
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">onClickでカウントを変える</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            今は <code>count</code> が固定値なので、ボタンを押しても数字は変わりません。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#fff4c7] px-3 py-2 text-sm font-semibold text-[#6f5615]">
          TODO 2-3
        </p>
      </div>

      <div className="mt-5 rounded-md bg-[#f7f7f2] p-5">
        <p className="text-sm font-semibold text-[#425466]">現在のcount</p>
        <p className="mt-2 text-5xl font-bold text-[#15191f]">{count}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleIncrease}
            className="rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white"
          >
            +1する
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-md border border-[#d8d6c8] bg-white px-4 py-2 text-sm font-semibold text-[#15191f]"
          >
            0に戻す
          </button>
        </div>
      </div>
    </section>
  );
}

function ToggleStarter() {
  const isHintOpen = false;

  function handleToggleHint() {
    // TODO 4: isHintOpenをuseStateで持ち、true / falseを切り替えます。
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">true / falseで表示を切り替える</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            表示するかどうかもstateで持てます。今は固定値なので、ヒントはまだ開きません。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#fff4c7] px-3 py-2 text-sm font-semibold text-[#6f5615]">
          TODO 4
        </p>
      </div>

      <div className="mt-5 rounded-md bg-[#f7f7f2] p-5">
        <button
          type="button"
          onClick={handleToggleHint}
          className="rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white"
        >
          ヒントを切り替える
        </button>
        <div className="mt-4 rounded-md border border-dashed border-[#c8b26a] bg-white p-4">
          <p className="text-sm font-semibold text-[#6f5615]">
            {isHintOpen ? 'ヒントを表示中' : 'まだヒントは閉じています'}
          </p>
          {isHintOpen ? (
            <p className="mt-2 text-sm leading-6 text-[#425466]">
              前のstateを使うときは、<code>setIsHintOpen((current) =&gt; !current)</code>{' '}
              のように書けます。
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function InputStarter() {
  const learnerName = '';

  function handleNameChange() {
    // TODO 5: eventから入力値を取り出し、learnerNameのstateを更新します。
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">onChangeで入力値を受け取る</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            入力欄の値もstateで管理できます。今は固定値なので、文字を入力しても表示に残りません。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#fff4c7] px-3 py-2 text-sm font-semibold text-[#6f5615]">
          TODO 5
        </p>
      </div>

      <div className="mt-5 grid gap-4 rounded-md bg-[#f7f7f2] p-5">
        <label className="grid gap-2 text-sm font-semibold text-[#425466]">
          名前
          <input
            value={learnerName}
            onChange={handleNameChange}
            placeholder="React learner"
            className="min-h-11 rounded-md border border-[#d8d6c8] bg-white px-3 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
          />
        </label>
        <p className="rounded-md bg-white p-4 text-sm leading-6 text-[#425466]">
          画面に表示する名前:{' '}
          <span className="font-semibold text-[#15191f]">
            {learnerName || 'まだ入力がstateに保存されていません'}
          </span>
        </p>
      </div>
    </section>
  );
}

function TodoStarter() {
  const todos = starterTodos;

  function handleToggleTodo() {
    // TODO 6: クリックしたtodoだけdoneを切り替えます。
    // 配列を直接書き換えず、新しい配列を作ってsetTodosに渡します。
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">配列のstateを更新する準備</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            配列やオブジェクトをstateにするときは、元の配列を直接書き換えません。このスターターではTODOだけ確認します。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#fff4c7] px-3 py-2 text-sm font-semibold text-[#6f5615]">
          TODO 6
        </p>
      </div>

      <ul className="mt-5 grid gap-3">
        {todos.map((todo) => (
          <li key={todo.id}>
            <button
              type="button"
              onClick={handleToggleTodo}
              className="flex w-full items-start gap-3 rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4 text-left"
            >
              <span
                className={`mt-1 h-4 w-4 rounded-sm border ${
                  todo.done ? 'border-[#3f7d58] bg-[#3f7d58]' : 'border-[#9ba3af] bg-white'
                }`}
              />
              <span>
                <span className="block font-semibold text-[#15191f]">{todo.label}</span>
                <span className="mt-1 block text-sm text-[#425466]">
                  {todo.done ? '完了' : 'まだ固定表示です'}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TodoOrder() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">TODOの順番</h2>
      <div className="mt-4 grid gap-3">
        {[
          'ReactからuseStateをimportする',
          'countをuseStateで持ち、+1ボタンで更新する',
          'resetボタンでcountを0に戻す',
          'true / falseのstateでヒント表示を切り替える',
          'inputのonChangeでeventから入力値を取り出す',
          '配列のstateを直接書き換えず、新しい配列で更新する',
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

function CodeHint() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">最初に見るコードの形</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        完成版では、固定値をstateに置き換えます。まずはこの形だけ覚えます。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`import { useState } from 'react';

const [count, setCount] = useState(0);

function handleIncrease() {
  setCount(count + 1);
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
        <p className="rounded-md bg-white p-3">+1ボタンでcountが増える</p>
        <p className="rounded-md bg-white p-3">0に戻すボタンでcountが0になる</p>
        <p className="rounded-md bg-white p-3">ヒント表示を開閉できる</p>
        <p className="rounded-md bg-white p-3">入力した名前が画面に表示される</p>
        <p className="rounded-md bg-white p-3">TODOリストの完了状態を切り替えられる</p>
        <p className="rounded-md bg-white p-3">stateを直接書き換えていない</p>
      </div>
    </section>
  );
}

export default function ReactUseStateEventPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-4 py-8 text-[#1f2933] sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="border-b border-[#d8d6c8] pb-8">
          <HomeLink />
          <LessonBadge />
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#15191f] sm:text-5xl">
            useStateとイベントで画面を動かす
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#425466]">
            Lesson 4ではpropsで外から値を渡しました。Lesson 5では、ユーザーの操作を受け取り、
            stateを更新して、画面が変わる流れを確認します。
          </p>
        </header>

        <ConceptOverview />
        <BeforeAfterFlow />
        <WorkingCounterExample />
        <TodoOrder />
        <CounterStarter />
        <ToggleStarter />
        <InputStarter />
        <TodoStarter />
        <CodeHint />
        <CompletionCheck />
      </div>
    </main>
  );
}
