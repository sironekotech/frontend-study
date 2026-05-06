import Link from 'next/link';
import { HomeLink } from '@/app/_components/HomeLink';

type RouteStatus = 'ready' | 'todo';

type RouteExample = {
  id: string;
  title: string;
  filePath: string;
  url: string;
  concept: string;
  status: RouteStatus;
  description: string;
};

const routeExamples: RouteExample[] = [
  {
    id: 'sample-page',
    title: '遷移サンプルページ',
    filePath: 'src/app/(pages)/next-basics/app-router-routing/sample/page.tsx',
    url: '/next-basics/app-router-routing/sample',
    concept: 'page.tsx',
    status: 'ready',
    description: '開けるリンクで実際に別ページへ移動し、戻るボタンでこのページへ戻ります。',
  },
  {
    id: 'nested-profile',
    title: 'ネストしたページ',
    filePath: 'src/app/(pages)/next-basics/app-router-routing/profile/page.tsx',
    url: '/next-basics/app-router-routing/profile',
    concept: 'nested routes',
    status: 'ready',
    description: 'フォルダを1つ深くすると、URLも1つ深くなります。',
  },
  {
    id: 'dynamic-user',
    title: 'ユーザー詳細ページ',
    filePath: 'src/app/(pages)/users/[userId]/page.tsx',
    url: '/users/taro',
    concept: 'dynamic routes',
    status: 'ready',
    description: '[userId] はURLの一部を変数として受け取るフォルダ名です。',
  },
];

function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 8 / Next.js App Router routing
    </p>
  );
}

function ConceptOverview() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで出てくる言葉</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">routing</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            URLに合わせて、どのページを表示するかを決める仕組みです。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">page.tsx</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            App Routerでページを作るためのファイル名です。URLとして開ける画面になります。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">layout.tsx</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            複数のページを包む共通レイアウトです。まずは存在を知れば十分です。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">[userId]</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            動的ルーティングの書き方です。Next.jsでは <code>:user_id</code>{' '}
            ではなく角かっこで書きます。
          </p>
        </article>
      </div>
    </section>
  );
}

function FileToUrlGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">ファイルの場所がURLになる</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        App Routerでは、<code>src/app</code> の中にフォルダを作り、その中に
        <code>page.tsx</code> を置くとページになります。フォルダ名が、そのままURLの一部になります。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`src/app
  (pages)
    next-basics
      app-router-routing
        page.tsx

URL
  /next-basics/app-router-routing`}</code>
      </pre>
      <div className="mt-5 rounded-md border border-dashed border-[#c8b26a] bg-[#fff8df] p-4">
        <p className="text-sm leading-6 text-[#6f5615]">
          <code>(pages)</code> はRoute
          Groupです。フォルダを整理するための名前なので、URLには出ません。
        </p>
      </div>
    </section>
  );
}

function RouteMap() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">ルート対応表</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            完成版では、遷移サンプル、ネストしたページ、動的ルーティングのページをすべて実際に開けます。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-2 text-sm font-semibold text-[#2f6848]">
          完成見本
        </p>
      </div>

      <div className="mt-5 grid gap-4">
        {routeExamples.map((route) => (
          <article
            key={route.id}
            className="grid gap-4 rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4 lg:grid-cols-[1fr_1fr_auto]"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-[#15191f]">{route.title}</h3>
                <span className="rounded-sm bg-white px-2 py-1 text-xs font-semibold text-[#6f5615]">
                  {route.concept}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-[#425466]">{route.description}</p>
            </div>

            <dl className="grid gap-2 text-sm leading-6">
              <div>
                <dt className="font-semibold text-[#425466]">file</dt>
                <dd className="break-words font-mono text-[#15191f]">{route.filePath}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#425466]">url</dt>
                <dd className="font-mono text-[#15191f]">{route.url}</dd>
              </div>
            </dl>

            <div className="flex items-center lg:justify-end">
              {route.status === 'ready' ? (
                <Link
                  href={route.url}
                  className="inline-flex w-full justify-center rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white sm:w-fit"
                >
                  開ける
                </Link>
              ) : (
                <span className="inline-flex w-full justify-center rounded-md border border-[#c8b26a] bg-[#fff8df] px-4 py-2 text-sm font-semibold text-[#6f5615] sm:w-fit">
                  これから作る
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DynamicRouteGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">動的ルーティングの読み方</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        ユーザーIDや記事IDのように、URLの一部が変わるページでは、フォルダ名を角かっこで囲みます。
      </p>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">Next.jsの書き方</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`src/app/(pages)/users/[userId]/page.tsx

/users/taro
/users/hanako
/users/sirotyuke`}</code>
          </pre>
        </div>
        <div className="rounded-md border border-dashed border-[#c8b26a] bg-[#fff8df] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">よくある別表記との違い</p>
          <p className="mt-3 text-sm leading-6 text-[#6f5615]">
            他のフレームワークでは <code>:user_id</code> のように書くことがあります。Next.js App
            Routerでは
            <code>[userId]</code> というフォルダ名で表します。
          </p>
        </div>
      </div>
    </section>
  );
}

function TodoOrder() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">TODOの順番</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        完成版では、次のTODOがすべて実装済みです。スターターと見比べると、どのフォルダに
        <code>page.tsx</code> を追加したか確認できます。
      </p>
      <div className="mt-4 grid gap-3">
        {[
          'nested route用に profile/page.tsx を作成済み',
          'profileページから、このレッスンページへ戻れるリンクを配置済み',
          'dynamic route用に users/[userId]/page.tsx を作成済み',
          '[userId] の値をparamsから受け取り、画面に表示済み',
          'routeExamplesでTODOだった2つをreadyに変更済み',
          '/next-basics/app-router-routing/profile と /users/taro をブラウザで開ける',
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

function CompletionCheck() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-[#fff8df] p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">完成条件</h2>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-[#6f5615] md:grid-cols-2">
        <p className="rounded-md bg-white p-3">page.tsx とURLの関係を説明できる</p>
        <p className="rounded-md bg-white p-3">(pages) がURLに出ない理由を説明できる</p>
        <p className="rounded-md bg-white p-3">nested routeのページを作れる</p>
        <p className="rounded-md bg-white p-3">[userId] を使ったdynamic routeを作れる</p>
        <p className="rounded-md bg-white p-3">:user_id ではなく [userId] と書く理由を説明できる</p>
        <p className="rounded-md bg-white p-3">作ったページへLinkで移動できる</p>
      </div>
    </section>
  );
}

export default function NextAppRouterRoutingPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-4 py-8 text-[#1f2933] sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="border-b border-[#d8d6c8] pb-8">
          <HomeLink />
          <LessonBadge />
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#15191f] sm:text-5xl">
            App RouterでURLとページの関係を見る
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#425466]">
            Lesson 7では、フォーム入力をReact stateで管理しました。Lesson 8では、Next.js App
            Routerでファイルの場所がURLになる仕組みを確認します。
          </p>
        </header>

        <ConceptOverview />
        <FileToUrlGuide />
        <RouteMap />
        <DynamicRouteGuide />
        <TodoOrder />
        <CompletionCheck />
      </div>
    </main>
  );
}
