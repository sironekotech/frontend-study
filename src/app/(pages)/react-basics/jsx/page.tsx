function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      TODO: Lesson 2 のバッジを書く
    </p>
  );
}

function ValuePractice() {
  const learnerName = 'React learner';
  const lessonNumber = 2;

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">1. 値を画面に埋め込む</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        下の「今の表示」を、`learnerName` と `lessonNumber` を使った文章に変えます。
      </p>
      <div className="mt-4 rounded-md bg-[#f7f7f2] p-4">
        <p className="text-sm text-[#425466]">今の表示</p>
        <p className="mt-2 text-lg font-semibold text-[#15191f]">
          TODO: {learnerName} と Lesson {lessonNumber} を使って文章を書く
        </p>
      </div>
    </section>
  );
}

function ClassNamePractice() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">2. classNameで見た目を付ける</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        JSXでは `class` ではなく `className` を使います。下の表示の見た目を変えます。
      </p>
      <div className="mt-4 rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4 text-[#425466]">
        TODO: classNameを編集して、背景色、枠線、余白、文字色の変化を確認する
      </div>
    </section>
  );
}

function ConditionalPractice() {
  const isReady = false;

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">3. 条件で表示を変える</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        `isReady` の値を見て、表示する文章が変わることを確認します。
      </p>
      <div className="mt-4 rounded-md bg-[#f7f7f2] p-4">
        <p className="text-sm text-[#425466]">今の表示</p>
        <p className="mt-2 text-lg font-semibold text-[#15191f]">
          {isReady ? 'TODO: trueのときの文章を書く' : 'TODO: falseのときの文章を書く'}
        </p>
      </div>
    </section>
  );
}

function ComponentPractice() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">4. UIを関数に分ける</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        `LessonBadge`
        は、このページ上部でも下でも使われています。関数を直すと両方の表示が変わります。
      </p>
      <div className="mt-4 rounded-md bg-[#f7f7f2] p-4">
        <LessonBadge />
      </div>
    </section>
  );
}

export default function ReactJsxPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-6 py-10 text-[#1f2933] sm:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="border-b border-[#d8d6c8] pb-8">
          <LessonBadge />
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#15191f] sm:text-5xl">
            JSXの基本を画面で確認する
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#425466]">
            このスターターページにはTODOが残っています。`Lessons/002-react-jsx.md`
            を読みながら、JSXの表示を少しずつ完成させます。
          </p>
        </header>

        <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
          <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで編集すること</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-[#425466] sm:grid-cols-2">
            <li className="rounded-md bg-[#f7f7f2] p-3">JSXで文字を表示する</li>
            <li className="rounded-md bg-[#f7f7f2] p-3">波かっこでTypeScriptの値を埋め込む</li>
            <li className="rounded-md bg-[#f7f7f2] p-3">`className` で見た目を変える</li>
            <li className="rounded-md bg-[#f7f7f2] p-3">条件によって表示を変える</li>
          </ul>
        </section>

        <ValuePractice />
        <ClassNamePractice />
        <ConditionalPractice />
        <ComponentPractice />
      </div>
    </main>
  );
}
