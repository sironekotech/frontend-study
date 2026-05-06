'use client';

import { useState, type ChangeEvent } from 'react';
import { HomeLink } from '@/app/_components/HomeLink';
import { EffectTitleExample } from './_components/EffectTitleExample';

type TopicKey = 'title' | 'resize' | 'fetch';

type FetchStatus = 'idle' | 'loading' | 'success';

type LessonItem = {
  id: string;
  title: string;
  description: string;
};

const topicLabels: Record<TopicKey, string> = {
  title: 'タブタイトルを変える',
  resize: '画面幅を監視する',
  fetch: 'ブラウザ側でデータを読み込む',
};

const lessonItems: LessonItem[] = [
  {
    id: 'effect-basic',
    title: 'useEffectの基本',
    description: '画面が表示された後や、指定したstateが変わった後に処理を動かします。',
  },
  {
    id: 'cleanup',
    title: 'cleanup',
    description: '登録したイベント監視やタイマーを、不要になったタイミングで片付けます。',
  },
  {
    id: 'client-fetch',
    title: 'ブラウザ側データ取得',
    description: 'Client Componentで表示後にデータを読み込み、stateへ保存します。',
  },
];

function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 9 / hooks useEffect
    </p>
  );
}

function ConceptOverview() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで出てくる言葉</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">useEffect</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            画面に表示された後や、stateが変わった後に処理を動かすReact Hookです。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">依存配列</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            <code>[count]</code> のように、effectを動かし直すきっかけを書く配列です。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">cleanup</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            effectで登録した処理を片付ける関数です。イベント監視やタイマーで使います。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">client fetch</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            ブラウザに表示された後、Client Componentの中でデータを読み込む形です。
          </p>
        </article>
      </div>
    </section>
  );
}

function EffectFlowGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">useEffectは表示の後に動く</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        <code>useEffect</code>{' '}
        は、画面の表示を作る処理ではありません。Reactが画面を表示した後に、ブラウザの機能とつなぐために使います。
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">1. 画面を表示する</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            まずReactがJSXから画面を作ります。ここでは副作用を起こしません。
          </p>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">2. effectが動く</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            表示後に <code>useEffect</code> の中の処理が動きます。
          </p>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">3. 必要なら片付ける</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            監視やタイマーを登録した場合は、cleanupで片付けます。
          </p>
        </article>
      </div>
    </section>
  );
}

function DependencyGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">依存配列で動くタイミングを決める</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        useEffectの最後に書く配列で、どの値が変わったときにeffectを動かし直すかを決めます。
      </p>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {[
          ['[]', '最初に表示された後だけ動く'],
          ['[selectedTopic]', 'selectedTopicが変わった後に動く'],
          ['配列なし', '表示のたびに動くため、最初は避ける'],
        ].map(([name, description]) => (
          <article key={name} className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
            <h3 className="font-mono text-sm font-semibold text-[#15191f]">{name}</h3>
            <p className="mt-2 text-sm leading-6 text-[#425466]">{description}</p>
          </article>
        ))}
      </div>
      <div className="mt-5 rounded-md border border-dashed border-[#c8b26a] bg-[#fff8df] p-4">
        <p className="text-sm leading-6 text-[#6f5615]">
          表示するだけで計算できる値や、クリックした瞬間に処理できることは、無理に
          <code>useEffect</code> に入れません。
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
        このstartページは、useStateで動く部分だけ先に用意しています。TODOでは
        <code>useEffect</code> を追加して、表示後の処理をつなぎます。
      </p>
      <div className="mt-4 grid gap-3">
        {[
          'ReactからuseEffectをimportする',
          'selectedTopicに合わせてdocument.titleを更新する',
          'windowWidthLabelのsetterを受け取り、最初の表示後にwindow.innerWidthを保存する',
          'resizeイベントを登録し、cleanupで解除する',
          'fetchStatusとloadedLessonsのsetterを受け取り、lessonItemsを読み込んだ想定で保存する',
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

function EffectStarter() {
  const [selectedTopic, setSelectedTopic] = useState<TopicKey>('title');
  const [windowWidthLabel] = useState('まだ画面幅を計測していません');
  const [fetchStatus] = useState<FetchStatus>('idle');
  const [loadedLessons] = useState<LessonItem[]>([]);
  const nextDocumentTitle = `Lesson 9 - ${topicLabels[selectedTopic]}`;

  function handleTopicChange(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedTopic(event.target.value as TopicKey);
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">useEffectをつなぐスターター</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            selectのstate更新はすでに動きます。ここに <code>useEffect</code>{' '}
            を追加して、stateが変わった後の処理、cleanup、ブラウザ側データ取得を実装します。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#fff4c7] px-3 py-2 text-sm font-semibold text-[#6f5615]">
          TODO
        </p>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid content-start gap-4 rounded-md bg-[#f7f7f2] p-5">
          <label className="grid gap-2 text-sm font-semibold text-[#425466]">
            effectで確認すること
            <select
              value={selectedTopic}
              onChange={handleTopicChange}
              className="min-h-11 rounded-md border border-[#d8d6c8] bg-white px-3 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
            >
              {Object.entries(topicLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <div className="rounded-md bg-white p-4">
            <p className="text-sm font-semibold text-[#425466]">今のselectedTopic</p>
            <p className="mt-2 font-mono text-lg font-bold text-[#15191f]">{selectedTopic}</p>
          </div>
        </div>

        <div className="grid gap-4">
          <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
            <h3 className="text-sm font-semibold text-[#15191f]">1. document.title sync</h3>
            <p className="mt-3 rounded-md bg-white p-3 text-sm leading-6 text-[#425466]">
              完成後は、ブラウザのタブタイトルを「
              <span className="font-semibold text-[#15191f]">{nextDocumentTitle}</span>
              」に変更します。
            </p>
          </article>

          <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
            <h3 className="text-sm font-semibold text-[#15191f]">2. resize cleanup</h3>
            <p className="mt-3 rounded-md bg-white p-3 text-sm leading-6 text-[#425466]">
              {windowWidthLabel}
            </p>
          </article>

          <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
            <h3 className="text-sm font-semibold text-[#15191f]">3. client fetch sample</h3>
            <p className="mt-3 text-sm leading-6 text-[#425466]">
              読み込み状態: <span className="font-semibold text-[#15191f]">{fetchStatus}</span>
            </p>
            <p className="mt-2 text-sm leading-6 text-[#425466]">
              読み込み用のデータは <code>lessonItems</code> に {lessonItems.length}{' '}
              件用意されています。
            </p>
            <div className="mt-3 grid gap-2">
              {loadedLessons.length === 0 ? (
                <p className="rounded-md bg-white p-3 text-sm leading-6 text-[#425466]">
                  まだデータは読み込まれていません。
                </p>
              ) : (
                loadedLessons.map((lesson) => (
                  <article key={lesson.id} className="rounded-md bg-white p-3">
                    <h4 className="font-semibold text-[#15191f]">{lesson.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-[#425466]">{lesson.description}</p>
                  </article>
                ))
              )}
            </div>
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
        完成版では、stateの変化や最初の表示後に <code>useEffect</code>{' '}
        を動かします。イベント監視を登録したら、cleanupで解除します。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`const nextDocumentTitle = \`Lesson 9 - \${topicLabels[selectedTopic]}\`;

useEffect(() => {
  document.title = nextDocumentTitle;
}, [nextDocumentTitle]);

useEffect(() => {
  function handleResize() {
    setWindowWidthLabel(\`現在の横幅: \${window.innerWidth}px\`);
  }

  const frameId = requestAnimationFrame(handleResize);

  window.addEventListener('resize', handleResize);

  return () => {
    cancelAnimationFrame(frameId);
    window.removeEventListener('resize', handleResize);
  };
}, []);`}</code>
      </pre>
    </section>
  );
}

function CompletionCheck() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-[#fff8df] p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">完成条件</h2>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-[#6f5615] md:grid-cols-2">
        <p className="rounded-md bg-white p-3">selectedTopicを変えるとタブタイトルが変わる</p>
        <p className="rounded-md bg-white p-3">最初の表示後に画面幅が表示される</p>
        <p className="rounded-md bg-white p-3">resizeイベントをcleanupで解除している</p>
        <p className="rounded-md bg-white p-3">最初の表示後にlessonItemsが表示される</p>
        <p className="rounded-md bg-white p-3">useEffectを使いすぎない判断を説明できる</p>
      </div>
    </section>
  );
}

export default function HooksUseEffectPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-4 py-8 text-[#1f2933] sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="border-b border-[#d8d6c8] pb-8">
          <HomeLink />
          <LessonBadge />
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#15191f] sm:text-5xl">
            useEffectで表示後の処理をつなぐ
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#425466]">
            Lesson 8では、Next.js App RouterでURLとページの関係を確認しました。Lesson
            9では、画面が表示された後やstateが変わった後に処理を動かす
            <code>useEffect</code> を学びます。
          </p>
        </header>

        <ConceptOverview />
        <EffectFlowGuide />
        <DependencyGuide />
        <EffectTitleExample />
        <TodoOrder />
        <EffectStarter />
        <CodeHint />
        <CompletionCheck />
      </div>
    </main>
  );
}
