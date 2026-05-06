'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { HomeLink } from '@/app/_components/HomeLink';
import { ControlledInputExample } from './_components/ControlledInputExample';

type LearningLevel = 'beginner' | 'practicing' | 'ready';

type ContactCategory = 'question' | 'review' | 'pairing';

type FormDraft = {
  name: string;
  email: string;
  category: ContactCategory;
  message: string;
  level: LearningLevel;
};

const starterDraft: FormDraft = {
  name: '',
  email: '',
  category: 'question',
  message: '',
  level: 'beginner',
};

const levelLabels: Record<LearningLevel, string> = {
  beginner: 'これから始める',
  practicing: '練習中',
  ready: '一人で作ってみたい',
};

const categoryLabels: Record<ContactCategory, string> = {
  question: '質問したい',
  review: 'コードレビューしてほしい',
  pairing: '一緒に実装したい',
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
        完成版では、次のTODOがすべて実装済みです。スターターと見比べると、入力欄がどこでstateにつながったか確認できます。
      </p>
      <div className="mt-4 grid gap-3">
        {[
          'ReactからuseStateをimportする',
          'draftをuseState<FormDraft>(starterDraft)で持つ',
          '名前inputのonChangeでdraft.nameを更新する',
          'メールinputのonChangeでdraft.emailを更新する',
          '相談種別selectのonChangeでdraft.categoryを更新する',
          '今の状態selectのonChangeでdraft.levelを更新する',
          'メッセージtextareaのonChangeでdraft.messageを更新する',
          'formのonSubmitでevent.preventDefault()を呼ぶ',
          '送信結果用のstateを追加し、submit時に画面へ表示する',
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

function ControlledFormExample() {
  const [draft, setDraft] = useState<FormDraft>(starterDraft);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [submittedMessage, setSubmittedMessage] = useState<string>('まだ送信されていません');

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setDraft((currentDraft) => ({
      ...currentDraft,
      name: event.target.value,
    }));
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setDraft((currentDraft) => ({
      ...currentDraft,
      email: event.target.value,
    }));
  }

  function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextCategory = event.target.value as ContactCategory;

    setDraft((currentDraft) => ({
      ...currentDraft,
      category: nextCategory,
    }));
  }

  function handleMessageChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setDraft((currentDraft) => ({
      ...currentDraft,
      message: event.target.value,
    }));
  }

  function handleLevelChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLevel = event.target.value as LearningLevel;

    setDraft((currentDraft) => ({
      ...currentDraft,
      level: nextLevel,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const senderName = draft.name || '名前未入力';
    const replyTo = draft.email || 'メール未入力';
    const messageBody = draft.message || 'メッセージ未入力';

    setHasSubmitted(true);
    setSubmittedMessage(
      `${senderName}さんから「${categoryLabels[draft.category]}」として送信されました。返信先は ${replyTo}、今の状態は「${levelLabels[draft.level]}」です。メッセージ: ${messageBody}`,
    );
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">
            フォームをcontrolled componentにする
          </h2>
          <p className="mt-3 leading-7 text-[#425466]">
            <code>draft</code> を <code>useState&lt;FormDraft&gt;</code> で持ち、入力欄の変更をReact
            stateに保存します。送信時はページ遷移を止め、送信内容を画面に表示します。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-2 text-sm font-semibold text-[#2f6848]">
          完成見本
        </p>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <form onSubmit={handleSubmit} className="grid gap-5 rounded-md bg-[#f7f7f2] p-5">
          <div className="border-b border-[#d8d6c8] pb-4">
            <p className="text-sm font-semibold text-[#15191f]">お問い合わせフォーム</p>
            <p className="mt-2 text-sm leading-6 text-[#425466]">
              名前、メール、相談種別、メッセージを入力して送信する、一般的なフォームの形で練習します。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[#425466]">
              <span className="flex items-center justify-between gap-3">
                名前
                <span className="rounded-sm bg-[#fff4c7] px-2 py-1 text-xs text-[#6f5615]">
                  必須
                </span>
              </span>
              <input
                value={draft.name}
                onChange={handleNameChange}
                placeholder="山田 太郎"
                className="min-h-11 rounded-md border border-[#d8d6c8] bg-white px-3 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#425466]">
              <span className="flex items-center justify-between gap-3">
                メールアドレス
                <span className="rounded-sm bg-[#fff4c7] px-2 py-1 text-xs text-[#6f5615]">
                  必須
                </span>
              </span>
              <input
                type="email"
                value={draft.email}
                onChange={handleEmailChange}
                placeholder="taro@example.com"
                className="min-h-11 rounded-md border border-[#d8d6c8] bg-white px-3 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
              />
              <span className="text-xs font-normal leading-5 text-[#66788a]">
                返信先として使う想定の入力欄です。
              </span>
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[#425466]">
              相談種別
              <select
                value={draft.category}
                onChange={handleCategoryChange}
                className="min-h-11 rounded-md border border-[#d8d6c8] bg-white px-3 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
              >
                {Object.entries(categoryLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
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
          </div>

          <label className="grid gap-2 text-sm font-semibold text-[#425466]">
            <span className="flex items-center justify-between gap-3">
              メッセージ
              <span className="rounded-sm bg-[#fff4c7] px-2 py-1 text-xs text-[#6f5615]">必須</span>
            </span>
            <textarea
              value={draft.message}
              onChange={handleMessageChange}
              placeholder="フォームを自分で作れるようになりたいです。どこから直せばよいか相談したいです。"
              className="min-h-32 rounded-md border border-[#d8d6c8] bg-white px-3 py-2 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
            />
            <span className="text-xs font-normal leading-5 text-[#66788a]">
              実際の問い合わせフォームでは、ここに本文や相談内容を入力します。
            </span>
          </label>

          <div className="flex flex-col gap-3 border-t border-[#d8d6c8] pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-[#425466]">
              入力した内容は右側のプレビューに反映され、送信すると結果メッセージが更新されます。
            </p>
            <button
              type="submit"
              className="rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white sm:w-fit"
            >
              送信する
            </button>
          </div>
        </form>

        <aside className="grid content-start gap-4">
          <div className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
            <p className="text-sm font-semibold text-[#425466]">入力内容プレビュー</p>
            <dl className="mt-3 grid gap-3 text-sm leading-6 text-[#425466]">
              <div className="rounded-md bg-white p-3">
                <dt className="font-mono text-xs text-[#6f5615]">name</dt>
                <dd className="mt-1 font-semibold text-[#15191f]">{draft.name || '未入力'}</dd>
              </div>
              <div className="rounded-md bg-white p-3">
                <dt className="font-mono text-xs text-[#6f5615]">email</dt>
                <dd className="mt-1 font-semibold text-[#15191f]">{draft.email || '未入力'}</dd>
              </div>
              <div className="rounded-md bg-white p-3">
                <dt className="font-mono text-xs text-[#6f5615]">category</dt>
                <dd className="mt-1 font-semibold text-[#15191f]">
                  {categoryLabels[draft.category]}
                </dd>
              </div>
              <div className="rounded-md bg-white p-3">
                <dt className="font-mono text-xs text-[#6f5615]">level</dt>
                <dd className="mt-1 font-semibold text-[#15191f]">{levelLabels[draft.level]}</dd>
              </div>
              <div className="rounded-md bg-white p-3">
                <dt className="font-mono text-xs text-[#6f5615]">message</dt>
                <dd className="mt-1 font-semibold text-[#15191f]">{draft.message || '未入力'}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-md border border-dashed border-[#c8b26a] bg-[#fff8df] p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[#6f5615]">送信結果</p>
              <span className="rounded-sm bg-white px-2 py-1 text-xs font-semibold text-[#6f5615]">
                {hasSubmitted ? '送信済み' : '未送信'}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-[#6f5615]">
              送信後は、入力した内容をまとめた文章をここに表示します。
            </p>
            <p className="mt-3 text-sm leading-6 text-[#6f5615]">{submittedMessage}</p>
          </div>
        </aside>
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
        でstateを更新します。送信時は <code>preventDefault</code>{' '}
        でページ遷移を止め、送信結果用のstateを更新します。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`const [draft, setDraft] = useState<FormDraft>(starterDraft);
const [submittedMessage, setSubmittedMessage] = useState<string>('まだ送信されていません');

function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
  setDraft((currentDraft) => ({
    ...currentDraft,
    name: event.target.value,
  }));
}

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setSubmittedMessage(
    \`\${draft.name}さんから送信されました。\`,
  );
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
        <p className="rounded-md bg-white p-3">相談種別を変更するとdraft.categoryが変わる</p>
        <p className="rounded-md bg-white p-3">メッセージを入力するとdraft.messageが変わる</p>
        <p className="rounded-md bg-white p-3">今の状態を変更するとdraft.levelが変わる</p>
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
        <ControlledFormExample />
        <CodeHint />
        <CompletionCheck />
      </div>
    </main>
  );
}
