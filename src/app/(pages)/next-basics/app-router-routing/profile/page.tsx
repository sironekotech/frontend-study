import Link from 'next/link';

export default function AppRouterRoutingProfilePage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-4 py-8 text-[#1f2933] sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <Link
          href="/next-basics/app-router-routing"
          className="inline-flex w-full justify-center rounded-md border border-[#d8d6c8] bg-white px-4 py-2 text-sm font-semibold text-[#15191f] sm:w-fit"
        >
          Lesson 8に戻る
        </Link>

        <section className="rounded-md border border-[#d8d6c8] bg-white p-6">
          <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
            nested route
          </p>
          <h1 className="mt-5 text-3xl font-bold leading-tight text-[#15191f] sm:text-4xl">
            ネストしたページ
          </h1>
          <p className="mt-5 leading-8 text-[#425466]">
            フォルダを1つ深くすると、URLも1つ深くなります。このページは
            <code>app-router-routing</code> の下に <code>profile</code> フォルダを作り、その中に{' '}
            <code>page.tsx</code> を置いています。
          </p>

          <dl className="mt-6 grid gap-4 rounded-md bg-[#f7f7f2] p-4 text-sm leading-6">
            <div>
              <dt className="font-semibold text-[#425466]">file</dt>
              <dd className="break-words font-mono text-[#15191f]">
                src/app/(pages)/next-basics/app-router-routing/profile/page.tsx
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[#425466]">url</dt>
              <dd className="font-mono text-[#15191f]">/next-basics/app-router-routing/profile</dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  );
}
