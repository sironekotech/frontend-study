import Link from 'next/link';

type UserPageProps = {
  params: Promise<{
    userId: string;
  }>;
};

export default async function UserPage({ params }: UserPageProps) {
  const { userId } = await params;

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
            dynamic route
          </p>
          <h1 className="mt-5 text-3xl font-bold leading-tight text-[#15191f] sm:text-4xl">
            ユーザー詳細ページ
          </h1>
          <p className="mt-5 leading-8 text-[#425466]">
            <code>[userId]</code>{' '}
            というフォルダ名にすると、URLの一部を値として受け取れます。今開いているページでは、
            <code>userId</code> の値が画面に表示されています。
          </p>

          <div className="mt-6 rounded-md bg-[#15191f] p-5 text-[#f7f7f2]">
            <p className="text-sm font-semibold text-[#82d39b]">paramsから受け取った値</p>
            <p className="mt-3 break-words font-mono text-2xl font-bold">{userId}</p>
          </div>

          <dl className="mt-6 grid gap-4 rounded-md bg-[#f7f7f2] p-4 text-sm leading-6">
            <div>
              <dt className="font-semibold text-[#425466]">file</dt>
              <dd className="break-words font-mono text-[#15191f]">
                src/app/(pages)/users/[userId]/page.tsx
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[#425466]">url</dt>
              <dd className="font-mono text-[#15191f]">/users/{userId}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/users/hanako"
              className="inline-flex justify-center rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white"
            >
              /users/hanako を開く
            </Link>
            <Link
              href="/users/sirotyuke"
              className="inline-flex justify-center rounded-md border border-[#d8d6c8] bg-white px-4 py-2 text-sm font-semibold text-[#15191f]"
            >
              /users/sirotyuke を開く
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
