'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { HomeLink } from '@/app/_components/HomeLink';
import { ControlledInputExample } from './_components/ControlledInputExample';

type LearningLevel = 'beginner' | 'practicing' | 'ready';

type FormDraft = {
  name: string;
  email: string;
  goal: string;
  level: LearningLevel;
};

const starterDraft: FormDraft = {
  name: '',
  email: '',
  goal: '',
  level: 'beginner',
};

const levelLabels: Record<LearningLevel, string> = {
  beginner: 'これから始める',
  practicing: '練習中',
  ready: '一人で作ってみたい',
};

function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 7 / forms + controlled component
    </p>
  );
}

function ConceptOverview() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで出てくる言葉</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">form</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            入力欄と送信ボタンをまとめるHTML要素です。名前、メール、目標などをまとめて送信できます。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">input</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            1行の文字を入力する要素です。Reactでは、入力された文字をstateに保存して扱います。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">controlled component</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            入力欄の <code>value</code> をReact stateで決め、<code>onChange</code>{' '}
            でstateを更新する形です。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">submit</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            フォームを送信する操作です。この教材ではページ遷移せず、画面上で送信内容を確認します。
          </p>
        </article>
      </div>
    </section>
  );
}

function FormGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">フォームは入力欄のまとまり</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        フォームは、ユーザーに入力してもらうためのまとまりです。1つの入力欄だけでなく、複数の入力欄をまとめて扱えます。
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {[
          ['label', '入力欄が何のためのものかを伝える'],
          ['input / textarea / select', 'ユーザーが値を入力・選択する'],
          ['button type="submit"', 'フォームを送信する'],
        ].map(([name, description]) => (
          <article key={name} className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
            <h3 className="font-mono text-sm font-semibold text-[#15191f]">{name}</h3>
            <p className="mt-2 text-sm leading-6 text-[#425466]">{description}</p>
          </article>
        ))}
      </div>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`<form>
  <label>
    名前
    <input />
  </label>

  <button type="submit">送信する</button>
</form>`}</code>
      </pre>
    </section>
  );
}

function ControlledGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">controlled componentの流れ</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        controlled componentでは、入力欄の表示をReact stateが決めます。入力するたびに
        <code>onChange</code> が動き、stateを新しい値に更新します。
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">1. stateを表示する</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            <code>value=&#123;draft.name&#125;</code> で、stateの値を入力欄に表示します。
          </p>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">2. 入力を受け取る</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            入力されると <code>onChange</code> が動き、<code>event.target.value</code>{' '}
            を取り出します。
          </p>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">3. stateを更新する</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            <code>setDraft</code> で新しい値を保存すると、入力欄の表示も変わります。
          </p>
        </article>
      </div>
    </section>
  );
}

function EventTypeGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">eventの型を見る</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        TypeScriptでは、どのHTML要素のeventかを型で書きます。最初は、入力欄とフォーム送信の2つを覚えます。
      </p>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">入力欄の変更</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`function handleNameChange(
  event: ChangeEvent<HTMLInputElement>,
) {
  event.target.value;
}`}</code>
          </pre>
        </div>
        <div className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">フォーム送信</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`function handleSubmit(
  event: FormEvent<HTMLFormElement>,
) {
  event.preventDefault();
}`}</code>
          </pre>
        </div>
      </div>
      <div className="mt-5 rounded-md border border-dashed border-[#c8b26a] bg-[#fff8df] p-4">
        <p className="text-sm leading-6 text-[#6f5615]">
          <code>preventDefault</code>{' '}
          は、ブラウザ標準の送信動作を止めるために使います。この教材ではページを移動せず、Reactのstateを画面に表示して確認します。
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
        このstartページは、まだ固定値と空の関数が残っています。フォームをcontrolled
        componentに置き換えます。
      </p>
      <div className="mt-4 grid gap-3">
        {[
          'ReactからuseStateをimportする',
          'draftをuseState<FormDraft>で持つ',
          'input / textarea / select のvalueをdraftから表示する',
          'onChangeでevent.target.valueを取り出し、draftを更新する',
          'formのonSubmitでpreventDefaultを呼ぶ',
          '送信した内容を画面に表示する',
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

function FormStarter() {
  // TODO: draftをuseState<FormDraft>で持ちます。
  const draft = starterDraft;
  const submittedMessage = 'まだ送信されていません';

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    // TODO: event.target.valueを使ってdraft.nameを更新します。
    void event;
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    // TODO: event.target.valueを使ってdraft.emailを更新します。
    void event;
  }

  function handleGoalChange(event: ChangeEvent<HTMLTextAreaElement>) {
    // TODO: event.target.valueを使ってdraft.goalを更新します。
    void event;
  }

  function handleLevelChange(event: ChangeEvent<HTMLSelectElement>) {
    // TODO: event.target.valueをLearningLevelとして扱い、draft.levelを更新します。
    void event;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // TODO: preventDefaultを呼び、送信した内容を画面に表示します。
    void event;
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">
            フォームをcontrolled componentにする
          </h2>
          <p className="mt-3 leading-7 text-[#425466]">
            今は <code>draft</code> が固定値なので、入力しても値は保存されません。
            <code>useState&lt;FormDraft&gt;</code> に置き換えて、入力欄の値をReact
            stateで管理します。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#fff4c7] px-3 py-2 text-sm font-semibold text-[#6f5615]">
          TODO
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-4 rounded-md bg-[#f7f7f2] p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-[#425466]">
            名前
            <input
              value={draft.name}
              onChange={handleNameChange}
              placeholder="React learner"
              className="min-h-11 rounded-md border border-[#d8d6c8] bg-white px-3 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-[#425466]">
            メール
            <input
              value={draft.email}
              onChange={handleEmailChange}
              placeholder="learner@example.com"
              className="min-h-11 rounded-md border border-[#d8d6c8] bg-white px-3 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-semibold text-[#425466]">
          学習目標
          <textarea
            value={draft.goal}
            onChange={handleGoalChange}
            placeholder="フォームを自分で作れるようになりたい"
            className="min-h-28 rounded-md border border-[#d8d6c8] bg-white px-3 py-2 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-[#425466]">
          今の状態
          <select
            value={draft.level}
            onChange={handleLevelChange}
            className="min-h-11 rounded-md border border-[#d8d6c8] bg-white px-3 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
          >
            {Object.entries(levelLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          className="rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white sm:w-fit"
        >
          送信する
        </button>
      </form>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-md bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#425466]">今のdraft</p>
          <dl className="mt-3 grid gap-2 text-sm leading-6 text-[#425466]">
            <div className="flex justify-between gap-4">
              <dt>name</dt>
              <dd className="font-semibold text-[#15191f]">{draft.name || '未入力'}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>email</dt>
              <dd className="font-semibold text-[#15191f]">{draft.email || '未入力'}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>level</dt>
              <dd className="font-semibold text-[#15191f]">{levelLabels[draft.level]}</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-md border border-dashed border-[#c8b26a] bg-[#fff8df] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">送信結果</p>
          <p className="mt-3 text-sm leading-6 text-[#6f5615]">{submittedMessage}</p>
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
        完成版では、入力欄の <code>value</code> とstateをつなぎ、<code>onChange</code>{' '}
        でstateを更新します。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`const [draft, setDraft] = useState<FormDraft>(starterDraft);

function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
  setDraft((currentDraft) => ({
    ...currentDraft,
    name: event.target.value,
  }));
}

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

<input value={draft.name} onChange={handleNameChange} />`}</code>
      </pre>
    </section>
  );
}

function CompletionCheck() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-[#fff8df] p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">完成条件</h2>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-[#6f5615] md:grid-cols-2">
        <p className="rounded-md bg-white p-3">名前を入力するとdraft.nameが変わる</p>
        <p className="rounded-md bg-white p-3">メールを入力するとdraft.emailが変わる</p>
        <p className="rounded-md bg-white p-3">学習目標を入力するとdraft.goalが変わる</p>
        <p className="rounded-md bg-white p-3">selectを変更するとdraft.levelが変わる</p>
        <p className="rounded-md bg-white p-3">submitでページ遷移せず送信結果が表示される</p>
        <p className="rounded-md bg-white p-3">eventの型を要素ごとに書けている</p>
      </div>
    </section>
  );
}

export default function ReactFormsControlledComponentPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-4 py-8 text-[#1f2933] sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="border-b border-[#d8d6c8] pb-8">
          <HomeLink />
          <LessonBadge />
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#15191f] sm:text-5xl">
            フォームをReact stateで管理する
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#425466]">
            Lesson 6では、stateの更新パターンを練習しました。Lesson
            7では、入力欄の値をstateで管理し、フォーム送信の流れを確認します。
          </p>
        </header>

        <ConceptOverview />
        <FormGuide />
        <ControlledGuide />
        <EventTypeGuide />
        <ControlledInputExample />
        <TodoOrder />
        <FormStarter />
        <CodeHint />
        <CompletionCheck />
      </div>
    </main>
  );
}
