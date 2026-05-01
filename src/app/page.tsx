export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-6 py-10 text-[#1f2933] sm:px-10">
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
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            ['01', 'React 基礎', 'JSX、props、children、state、イベントを画面で確認します。'],
            ['02', 'Hooks', 'useState、useEffect、useRef から custom hooks へ進みます。'],
            ['03', 'Next.js', 'App Router、Route Handler、SSR / CSR の違いを比較します。'],
          ].map(([number, title, description]) => (
            <article key={number} className="rounded-md border border-[#d8d6c8] bg-white p-5">
              <p className="font-mono text-sm font-semibold text-[#3f7d58]">{number}</p>
              <h2 className="mt-4 text-lg font-semibold text-[#15191f]">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#425466]">{description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
