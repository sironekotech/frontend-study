'use client';

import { HomeLink } from '@/app/_components/HomeLink';
import { useLearningChecklist } from '@/hooks/useLearningChecklist';
import { ToggleMiniExample } from './_components/ToggleMiniExample';
import { useLessonTimer } from './_hooks/useLessonTimer';

function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 12 / custom hooks
    </p>
  );
}

function ConceptOverview() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで出てくる言葉</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">custom hook</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            Hookを使う処理をまとめる関数です。名前は <code>use</code> で始めます。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">ロジック</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            stateを持つ、値を更新する、数えるなど、画面を動かすための処理です。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">返す値</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            custom hookからコンポーネントへ渡す値や関数です。オブジェクトで返すことが多いです。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">置き場所</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            ページ専用なら近くの <code>_hooks</code>、共通なら <code>src/hooks</code> に置きます。
          </p>
        </article>
      </div>
    </section>
  );
}

function RoleGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">画面と処理を分けて考える</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        custom
        hookは、難しい書き方をするためのものではありません。コンポーネントが長くなってきたときに、stateや更新処理を外へ出して読みやすくするための道具です。
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">Reactコンポーネント</p>
          <h3 className="mt-2 text-lg font-semibold text-[#15191f]">画面を担当する</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            JSXを返します。button、input、表示する文章などをここで組み立てます。
          </p>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">custom hook</p>
          <h3 className="mt-2 text-lg font-semibold text-[#15191f]">処理を担当する</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            state、更新関数、計算した値をまとめます。JSXは返しません。
          </p>
        </article>
      </div>
    </section>
  );
}

function FilePlacementGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">custom hookの置き場所</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        どこに置くかは、どこから使うかで決めます。このレッスンでは、ページ専用と共通用の両方を見ます。
      </p>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <article className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">ページ専用</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`src/app/(pages)/hooks/custom-hooks/_hooks/useLessonTimer.ts`}</code>
          </pre>
          <p className="mt-3 text-sm leading-6 text-[#cbd5df]">
            このページだけで使う学習時間の処理を置きます。
          </p>
        </article>
        <article className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">共通用</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`src/hooks/useLearningChecklist.ts`}</code>
          </pre>
          <p className="mt-3 text-sm leading-6 text-[#cbd5df]">
            他のページでも使えるチェックリストの処理を置きます。
          </p>
        </article>
      </div>
    </section>
  );
}

function TodoOrder() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">TODOの順番</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        startページでは、custom hookのファイルと画面だけ先に用意しています。TODOでは、固定値を
        <code>useState</code> に置き換え、画面から使えるcustom hookにしていきます。
      </p>
      <div className="mt-4 grid gap-3">
        {[
          'hookファイルで、ReactからuseStateをimportする',
          'useLessonTimerで、固定のelapsedMinutesをuseState<number>(0)へ置き換える',
          'handleAddMinuteで、学習時間を1分増やす',
          'handleResetTimerで、学習時間を0分へ戻す',
          'useLearningChecklistで、固定配列をuseState<LearningChecklistItem[]>へ置き換える',
          'handleToggleItemで、クリックした項目のisDoneを切り替える',
          'page.tsxで、custom hookから返された値と関数が画面に反映されることを確認する',
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

function CustomHooksStarter() {
  const { elapsedMinutes, handleAddMinute, handleResetTimer } = useLessonTimer();
  const { items, completedCount, handleToggleItem } = useLearningChecklist();

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">custom hookをページから使う</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            このstartページでは、ボタンを押してもまだ値が変わりません。TODOを直すと、custom
            hookの中のstateが画面へ反映されます。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#fff4c7] px-3 py-2 text-sm font-semibold text-[#6f5615]">
          TODO
        </p>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid content-start gap-4 rounded-md bg-[#f7f7f2] p-5">
          <article className="rounded-md bg-white p-4">
            <p className="text-sm font-semibold text-[#6f5615]">useLessonTimer</p>
            <p className="mt-2 text-4xl font-bold text-[#15191f]">{elapsedMinutes}分</p>
            <p className="mt-2 text-sm leading-6 text-[#425466]">
              今は固定値です。TODOを直すと、ボタンで時間を増やせます。
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleAddMinute}
                className="rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white"
              >
                1分進める
              </button>
              <button
                type="button"
                onClick={handleResetTimer}
                className="rounded-md border border-[#d8d6c8] bg-white px-4 py-2 text-sm font-semibold text-[#15191f]"
              >
                0分に戻す
              </button>
            </div>
          </article>

          <article className="rounded-md bg-white p-4">
            <p className="text-sm font-semibold text-[#6f5615]">useLearningChecklist</p>
            <p className="mt-2 text-sm leading-6 text-[#425466]">
              完了: {completedCount} / {items.length}
            </p>
            <div className="mt-3 grid gap-2">
              {items.map((item) => (
                <label
                  key={item.id}
                  className="flex items-start gap-3 rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-3 text-sm leading-6 text-[#425466]"
                >
                  <input
                    type="checkbox"
                    checked={item.isDone}
                    onChange={() => handleToggleItem(item.id)}
                    className="mt-1 h-4 w-4"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </article>
        </div>

        <div className="grid gap-4">
          <article className="rounded-md bg-[#15191f] p-4">
            <p className="text-sm font-semibold text-[#82d39b]">ページ側の使い方</p>
            <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
              <code>{`const {
  elapsedMinutes,
  handleAddMinute,
  handleResetTimer,
} = useLessonTimer();

const {
  items,
  completedCount,
  handleToggleItem,
} = useLearningChecklist();`}</code>
            </pre>
          </article>

          <article className="rounded-md border border-dashed border-[#c8b26a] bg-[#fff8df] p-4">
            <h3 className="text-sm font-semibold text-[#6f5615]">見るポイント</h3>
            <p className="mt-3 text-sm leading-6 text-[#6f5615]">
              page.tsxは、custom hookから返された値と関数を使います。stateの持ち方や更新処理は、
              hookファイルのTODOで直します。
            </p>
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
        完成版では、custom
        hookの中でstateを持ち、更新関数も一緒に返します。コンポーネントは、その返り値を使って画面を表示します。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`function useLessonTimer() {
  const [elapsedMinutes, setElapsedMinutes] = useState<number>(0);

  function handleAddMinute() {
    setElapsedMinutes((currentMinutes) => currentMinutes + 1);
  }

  return { elapsedMinutes, handleAddMinute };
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
        <p className="rounded-md bg-white p-3">custom hookが何をまとめる関数か説明できる</p>
        <p className="rounded-md bg-white p-3">custom hookをuseで始める理由を説明できる</p>
        <p className="rounded-md bg-white p-3">useLessonTimerで学習時間を増やせる</p>
        <p className="rounded-md bg-white p-3">useLessonTimerで学習時間を0へ戻せる</p>
        <p className="rounded-md bg-white p-3">
          useLearningChecklistでチェック状態を切り替えられる
        </p>
        <p className="rounded-md bg-white p-3">_hooks と src/hooks の使い分けを説明できる</p>
      </div>
    </section>
  );
}

export default function CustomHooksPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-4 py-8 text-[#1f2933] sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="border-b border-[#d8d6c8] pb-8">
          <HomeLink />
          <LessonBadge />
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#15191f] sm:text-5xl">
            custom hookで処理をまとめる
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#425466]">
            Lesson 11では、Hookを呼んでよい場所を確認しました。Lesson 12では、Hookを使う処理を
            <code>use</code> で始まる関数へ切り出し、ページから使う流れを確認します。
          </p>
        </header>

        <ConceptOverview />
        <RoleGuide />
        <ToggleMiniExample />
        <FilePlacementGuide />
        <TodoOrder />
        <CustomHooksStarter />
        <CodeHint />
        <CompletionCheck />
      </div>
    </main>
  );
}
