function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 2 / JSX
    </p>
  );
}

function GreetingExample() {
  const learnerName = 'React learner';
  const lessonNumber = 2;

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">値を画面に埋め込む</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        JSXでは、波かっこを使ってTypeScriptの値を画面に出せます。
      </p>
      <div className="mt-4 rounded-md bg-[#f7f7f2] p-4">
        <p className="text-sm text-[#425466]">画面に表示される結果</p>
        <p className="mt-2 text-lg font-semibold text-[#15191f]">
          {learnerName} is learning lesson {lessonNumber}.
        </p>
      </div>
      <pre className="mt-4 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{"const learnerName = 'React learner';\n<p>{learnerName}</p>"}</code>
      </pre>
    </section>
  );
}

function ClassNameExample() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">classNameで見た目を付ける</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        JSXでは、HTMLのclassではなくReactのclassNameを書きます。
      </p>
      <div className="mt-4 rounded-md border border-[#bfd8c7] bg-[#f0f8f3] p-4 text-[#23533a]">
        classNameで背景色、枠線、余白、文字色を付けています。
      </div>
      <pre className="mt-4 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{'<p className="rounded-md bg-green-50 p-4">...</p>'}</code>
      </pre>
    </section>
  );
}

function ConditionalExample() {
  const isReady = false;

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">条件で表示を変える</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        JSXの中では、条件によって表示する文章を変えられます。
      </p>
      <div className="mt-4 rounded-md bg-[#f7f7f2] p-4">
        <p className="text-sm text-[#425466]">今の表示</p>
        <p className="mt-2 text-lg font-semibold text-[#15191f]">
          {isReady ? '準備OK' : 'まだ準備中'}
        </p>
      </div>
      <pre className="mt-4 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{"const isReady = false;\n\n<p>{isReady ? '準備OK' : 'まだ準備中'}</p>"}</code>
      </pre>
    </section>
  );
}

function ComponentExample() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">UIを関数として分ける</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        Reactでは、画面の一部を関数として分けられます。このページの各まとまりも、小さな関数からできています。
      </p>
      <div className="mt-4 rounded-md bg-[#f7f7f2] p-4">
        <LessonBadge />
      </div>
      <pre className="mt-4 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{'function LessonBadge() {\n  return <p>Lesson 2 / JSX</p>;\n}'}</code>
      </pre>
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
            JSXは、TypeScriptの中でUIを書くための記法です。HTMLそのものではありませんが、HTMLに近い見た目で画面を作れます。
          </p>
        </header>

        <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
          <h2 className="text-xl font-semibold text-[#15191f]">このページで見ること</h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-[#425466] sm:grid-cols-2">
            <p className="rounded-md bg-[#f7f7f2] p-3">JSXはHTMLではなく、UIを書くための記法</p>
            <p className="rounded-md bg-[#f7f7f2] p-3">波かっこで値を埋め込める</p>
            <p className="rounded-md bg-[#f7f7f2] p-3">classではなくclassNameを書く</p>
            <p className="rounded-md bg-[#f7f7f2] p-3">条件で表示を変えられる</p>
          </div>
        </section>

        <GreetingExample />
        <ClassNameExample />
        <ConditionalExample />
        <ComponentExample />
      </div>
    </main>
  );
}
