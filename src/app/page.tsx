import Link from 'next/link';

const lessonLinks = [
  {
    id: '001-project-foundation',
    title: '001-project-foundation',
    href: '/project-foundation',
    description: 'nvm、Node.js、npm、起動、品質チェックの流れを読むだけで確認します。',
  },
  {
    id: '002-react-jsx',
    title: '002-react-jsx',
    href: '/react-basics/jsx',
    description: 'JSX、波かっこ、className、条件分岐を画面で確認します。',
  },
  {
    id: '003-react-list-key',
    title: '003-react-list-key',
    href: '/react-basics/list-key',
    description: '配列、map、key、filterを画面で確認します。',
  },
  {
    id: '004-react-props-children',
    title: '004-react-props-children',
    href: '/react-basics/props-children',
    description: 'props、propsの型、childrenを画面で確認します。',
  },
  {
    id: '005-react-use-state-event',
    title: '005-react-use-state-event',
    href: '/react-basics/use-state-event',
    description: 'useState、onClick、onChange、画面の再表示を確認します。',
  },
  {
    id: '006-hooks-use-state',
    title: '006-hooks-use-state',
    href: '/hooks/use-state',
    description: '最新のstate、配列・オブジェクトstate、stateの型を確認します。',
  },
  {
    id: '007-react-forms-controlled-component',
    title: '007-react-forms-controlled-component',
    href: '/react-basics/forms-controlled-component',
    description: 'フォーム、controlled component、onSubmit、eventの型を確認します。',
  },
  {
    id: '008-next-app-router-routing',
    title: '008-next-app-router-routing',
    href: '/next-basics/app-router-routing',
    description: 'App Routerのpage.tsx、Route Group、nested route、dynamic routeを確認します。',
  },
  {
    id: '009-hooks-use-effect',
    title: '009-hooks-use-effect',
    href: '/hooks/use-effect',
    description: 'useEffectで、画面を出したあとにやること、いつやるか、片付けを確認します。',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-4 py-8 text-[#1f2933] sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <section className="grid gap-6 border-b border-[#d8d6c8] pb-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3f7d58]">
              React / Next.js Study
            </p>
            <h1 className="text-4xl font-bold leading-tight text-[#15191f] sm:text-5xl">
              frontend-study
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[#425466]">
              App Router を使って React の基礎、Hooks、Server Component、Client Component、SSR /
              CSR、Route Handler を順番に学ぶ教材サイトです。
            </p>
          </div>

          <div className="grid content-start gap-3 rounded-md border border-[#d8d6c8] bg-white p-5">
            <p className="text-sm font-semibold text-[#15191f]">Project Foundation</p>
            <dl className="grid gap-3 text-sm text-[#425466]">
              <div className="flex items-center justify-between gap-4">
                <dt>Node.js</dt>
                <dd className="font-mono text-[#15191f]">25.8.2</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt>Framework</dt>
                <dd className="font-mono text-[#15191f]">Next.js 16</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt>Package manager</dt>
                <dd className="font-mono text-[#15191f]">npm</dd>
              </div>
            </dl>
            <Link
              href="/project-foundation"
              className="mt-2 inline-flex w-full justify-center rounded-md border border-[#d8d6c8] px-4 py-2 text-sm font-semibold text-[#15191f] sm:w-fit"
            >
              環境構築を読む
            </Link>
          </div>
        </section>

        <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#3f7d58]">Available Lessons</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#15191f]">公開済みレッスン</h2>
            </div>
            <p className="text-sm leading-6 text-[#425466]">上から順番に進めます。</p>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {lessonLinks.map((lesson) => (
              <article key={lesson.id} className="rounded-md border border-[#d8d6c8] p-4">
                <h2 className="break-words text-lg font-semibold text-[#15191f]">{lesson.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#425466]">{lesson.description}</p>
                <Link
                  href={lesson.href}
                  className="mt-5 inline-flex w-full justify-center rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white sm:w-fit"
                >
                  ページを開く
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
