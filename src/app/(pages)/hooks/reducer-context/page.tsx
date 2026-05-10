'use client';

import { HomeLink } from '@/app/_components/HomeLink';
import { ReducerMiniExample } from './_components/ReducerMiniExample';
import { LearningSessionProvider, useLearningSession } from './_context/LearningSessionContext';

function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 13 / useReducer and useContext
    </p>
  );
}

function ConceptOverview() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで出てくる言葉</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">useReducer</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            stateの更新ルールをreducerにまとめて使うHookです。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">reducer</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            今のstateとactionを受け取り、次のstateを返す関数です。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">action</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            「1分増やす」「完了する」など、何をしたいかを表す命令です。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">Context</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            複数のコンポーネントで同じ値を使うための仕組みです。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">Provider</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            値を配る範囲を作る部品です。Providerで囲んだ内側だけが値を読めます。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">useContext</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            Providerから配られた値を、内側のコンポーネントで読むHookです。
          </p>
        </article>
      </div>
    </section>
  );
}

function ReducerRoleGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">reducerは更新ルールをまとめる場所</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        stateの項目が増えたり、更新の種類が増えたりすると、イベントハンドラの中が長くなりやすいです。
        reducerにまとめると、「どのactionで、stateがどう変わるか」を1か所で読めます。
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">1. actionを送る</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            ボタンから <code>dispatch({'{ type: ... }'})</code> を呼びます。
          </p>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">2. reducerが読む</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            reducerは、actionの <code>type</code> を見て処理を分けます。
          </p>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">3. 次のstateを返す</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            今のstateを書き換えず、新しいstateを返します。
          </p>
        </article>
      </div>
    </section>
  );
}

function ContextRoleGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">Providerは値を配る範囲</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        Providerは、画面に何かを表示するための部品ではありません。「この内側のコンポーネントは、同じ値を読めます」と範囲を作るための部品です。
      </p>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">1. Contextを作る</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            まず、共有する値の置き場所を作ります。この時点では、まだ値は配っていません。
          </p>
          <pre className="mt-3 overflow-x-auto rounded-md bg-[#15191f] p-3 text-sm leading-6 text-[#f7f7f2]">
            <code>{`const Context = createContext(null);`}</code>
          </pre>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">2. Providerで配る</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            <code>value</code> に配りたい値を入れます。<code>children</code>{' '}
            はProviderで囲まれた中身です。
          </p>
          <pre className="mt-3 overflow-x-auto rounded-md bg-[#15191f] p-3 text-sm leading-6 text-[#f7f7f2]">
            <code>{`<Context.Provider value={value}>
  {children}
</Context.Provider>`}</code>
          </pre>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">3. useContextで読む</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            Providerの内側にいるコンポーネントだけが、配られた値を読めます。
          </p>
          <pre className="mt-3 overflow-x-auto rounded-md bg-[#15191f] p-3 text-sm leading-6 text-[#f7f7f2]">
            <code>{`const value = useContext(Context);`}</code>
          </pre>
        </article>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <article className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">このページで囲んでいる範囲</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`<LearningSessionProvider>
  <SessionDashboard />
  <SessionActions />
</LearningSessionProvider>`}</code>
          </pre>
          <p className="mt-3 text-sm leading-6 text-[#cbd5df]">
            この2つのコンポーネントは、同じ学習セッションの値を読めます。
          </p>
        </article>
        <article className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">Providerの内側で読む</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`const {
  state,
  handleAddMinute,
} = useLearningSession();`}</code>
          </pre>
          <p className="mt-3 text-sm leading-6 text-[#cbd5df]">
            <code>useLearningSession</code> の中で <code>useContext</code> を使っています。
          </p>
        </article>
      </div>

      <div className="mt-5 rounded-md border border-dashed border-[#c8b26a] bg-[#fff8df] p-4">
        <p className="text-sm leading-6 text-[#6f5615]">
          <code>LearningSessionProvider</code> は、この教材で作ったコンポーネント名です。中では
          <code>LearningSessionContext.Provider</code> を使い、<code>value</code>{' '}
          に入れた値を内側のコンポーネントへ配っています。
        </p>
      </div>
    </section>
  );
}

function PropsDrillingGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">props drillingとは</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        props
        drillingは、途中のコンポーネントが使わない値までpropsで受け取り、さらに子へ渡し続ける状態です。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`<Parent session={session}>
  <Middle session={session}>
    <Child session={session} />
  </Middle>
</Parent>`}</code>
      </pre>
      <p className="mt-4 rounded-md border border-dashed border-[#c8b26a] bg-[#fff8df] p-4 text-sm leading-6 text-[#6f5615]">
        Contextは、propsを全部なくす道具ではありません。多くの場所で同じ値を読むときに使うと読みやすくなります。
      </p>
    </section>
  );
}

function TodoOrder() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">TODOの順番</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        startページでは、Contextの枠と固定値だけ先に用意しています。TODOでは、固定値を
        <code>useReducer</code> に置き換え、Providerの内側から同じstateを操作できるようにします。
      </p>
      <div className="mt-4 grid gap-3">
        {[
          'LearningSessionContext.tsxで、ReactからuseReducerをimportする',
          'SessionAction型を作り、使えるactionを決める',
          'learningSessionReducerを作り、actionごとに次のstateを返す',
          'fixedStateをuseReducer(learningSessionReducer, fixedState)へ置き換える',
          'handleAddMinute、handleCompleteTask、handleResetSessionからdispatchを呼ぶ',
          'Providerのvalueで、state、totalScore、handlerを配る',
          'page.tsxで、useLearningSessionから同じ値を読めることを確認する',
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

function SessionDashboard() {
  const { state, totalScore } = useLearningSession();

  return (
    <article className="rounded-md bg-white p-4">
      <p className="text-sm font-semibold text-[#6f5615]">学習セッション</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-md bg-[#f7f7f2] p-3">
          <p className="text-sm text-[#425466]">集中時間</p>
          <p className="mt-1 text-2xl font-bold text-[#15191f]">{state.focusMinutes}分</p>
        </div>
        <div className="rounded-md bg-[#f7f7f2] p-3">
          <p className="text-sm text-[#425466]">完了タスク</p>
          <p className="mt-1 text-2xl font-bold text-[#15191f]">{state.completedTasks}個</p>
        </div>
        <div className="rounded-md bg-[#f7f7f2] p-3">
          <p className="text-sm text-[#425466]">score</p>
          <p className="mt-1 text-2xl font-bold text-[#15191f]">{totalScore}</p>
        </div>
      </div>
      <p className="mt-4 rounded-md bg-[#f7f7f2] p-3 text-sm leading-6 text-[#425466]">
        {state.statusText}
      </p>
    </article>
  );
}

function SessionActions() {
  const { handleAddMinute, handleCompleteTask, handleResetSession } = useLearningSession();

  return (
    <article className="rounded-md bg-white p-4">
      <p className="text-sm font-semibold text-[#6f5615]">別のコンポーネントから操作する</p>
      <p className="mt-2 text-sm leading-6 text-[#425466]">
        ここはSessionDashboardとは別のコンポーネントです。同じContextから操作関数を読んでいます。
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <button
          type="button"
          onClick={handleAddMinute}
          className="rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white"
        >
          1分増やす
        </button>
        <button
          type="button"
          onClick={handleCompleteTask}
          className="rounded-md border border-[#d8d6c8] bg-white px-4 py-2 text-sm font-semibold text-[#15191f]"
        >
          タスク完了
        </button>
        <button
          type="button"
          onClick={handleResetSession}
          className="rounded-md border border-[#d8d6c8] bg-white px-4 py-2 text-sm font-semibold text-[#15191f]"
        >
          reset
        </button>
      </div>
    </article>
  );
}

function ReducerContextStarter() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">
            Providerの内側から同じstateを使う
          </h2>
          <p className="mt-3 leading-7 text-[#425466]">
            このstartページでは、ボタンを押してもまだ値が変わりません。TODOを直すと、
            reducerでstateを更新し、Contextで複数のコンポーネントへ共有できます。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#fff4c7] px-3 py-2 text-sm font-semibold text-[#6f5615]">
          TODO
        </p>
      </div>

      <LearningSessionProvider>
        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <SessionDashboard />
          <SessionActions />
        </div>
      </LearningSessionProvider>
    </section>
  );
}

function CodeHint() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで目指すコードの形</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        完成版では、reducerがactionごとの更新ルールを持ち、Providerがstateと操作関数を配ります。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`const [state, dispatch] = useReducer(reducer, initialState);

function handleAddMinute() {
  dispatch({ type: 'add-minute' });
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
        <p className="rounded-md bg-white p-3">useReducerが何をするHookか説明できる</p>
        <p className="rounded-md bg-white p-3">reducerが次のstateを返す関数だと説明できる</p>
        <p className="rounded-md bg-white p-3">actionとdispatchの関係を説明できる</p>
        <p className="rounded-md bg-white p-3">ボタンで学習時間と完了タスクを更新できる</p>
        <p className="rounded-md bg-white p-3">Providerで値を配る理由を説明できる</p>
        <p className="rounded-md bg-white p-3">props drillingとの違いを説明できる</p>
      </div>
    </section>
  );
}

export default function ReducerContextPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-4 py-8 text-[#1f2933] sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="border-b border-[#d8d6c8] pb-8">
          <HomeLink />
          <LessonBadge />
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#15191f] sm:text-5xl">
            reducerとContextで状態を整理する
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#425466]">
            Lesson 12では、custom hookで処理をまとめました。Lesson 13では、state更新のルールを
            <code>useReducer</code> にまとめ、<code>useContext</code>{' '}
            で複数のコンポーネントから同じ値を使う流れを確認します。
          </p>
        </header>

        <ConceptOverview />
        <ReducerRoleGuide />
        <ReducerMiniExample />
        <ContextRoleGuide />
        <PropsDrillingGuide />
        <TodoOrder />
        <ReducerContextStarter />
        <CodeHint />
        <CompletionCheck />
      </div>
    </main>
  );
}
