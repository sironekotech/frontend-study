type Topic = {
  id: string;
  title: string;
  status: 'done' | 'learning' | 'next';
  description: string;
};

const topics: Topic[] = [
  // TODO 1: Lessons/003-react-list-key.md を見ながら、4件のトピックを追加する。
];

const learningTopics: Topic[] = [
  // TODO 3: この空配列を topics.filter(...) に置き換える。
];

function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 3 / Starter
    </p>
  );
}

function ManualCardsExample() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">まずは手書きカードを見る</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        同じ形のカードを手で何枚も書くと、項目が増えたときに直す場所も増えます。
      </p>
      <div className="mt-4 grid gap-3">
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">JSX</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">HTMLに近い見た目でUIを書く記法</p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">map</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">配列の1件ずつをJSXに変える書き方</p>
        </article>
      </div>
    </section>
  );
}

function TopicCardsStarter() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">TODO 1 / 2: topicsをカードに変える</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        まず <code>topics</code> 配列にデータを追加します。次に、この仮表示を{' '}
        <code>topics.map(...)</code> に置き換えます。
      </p>
      <div className="mt-4 rounded-md border border-dashed border-[#b9b49f] bg-[#f7f7f2] p-4">
        <p className="text-sm font-semibold text-[#6f5615]">ここを置き換える</p>
        <p className="mt-2 text-sm leading-6 text-[#425466]">
          ここに <code>topics.map(...)</code> でカード一覧を表示します。
        </p>
      </div>
      <p className="mt-4 text-sm leading-6 text-[#425466]">
        現在の <code>topics</code> の件数: {topics.length}
      </p>
    </section>
  );
}

function LearningTopicsStarter() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">TODO 3: learningだけを表示する</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        <code>learningTopics</code> を <code>topics.filter(...)</code>{' '}
        に置き換えて、学習中のトピックだけを表示します。
      </p>
      <ul className="mt-4 grid gap-3">
        {learningTopics.length === 0 ? (
          <li className="rounded-md border border-dashed border-[#b9b49f] bg-[#f7f7f2] p-4 text-sm leading-6 text-[#425466]">
            ここに <code>learningTopics.map(...)</code> で学習中の一覧を表示します。
          </li>
        ) : (
          learningTopics.map((topic) => (
            <li key={topic.id} className="rounded-md bg-[#f7f7f2] p-4">
              <p className="text-xs font-semibold uppercase text-[#3f7d58]">
                status: {topic.status}
              </p>
              <p className="mt-2 text-lg font-semibold text-[#15191f]">{topic.title}</p>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

function PracticeStarter() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">TODO 4: 自分で1件追加する</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        最後に <code>state</code>{' '}
        のデータを追加して、カード一覧と学習中一覧がどう変わるか確認します。
      </p>
      <div className="mt-4 rounded-md bg-[#fff8df] p-4 text-sm leading-6 text-[#6f5615]">
        詳しい手順は <code>Lessons/003-react-list-key.md</code> の「練習問題」を見ます。
      </div>
    </section>
  );
}

export default function ReactListKeyPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-6 py-10 text-[#1f2933] sm:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="border-b border-[#d8d6c8] pb-8">
          <LessonBadge />
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#15191f] sm:text-5xl">
            配列データからカード一覧を作る
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#425466]">
            このページはスターターコードです。<code>Lessons/003-react-list-key.md</code>{' '}
            を読みながら、TODOを1つずつ完成させます。
          </p>
        </header>

        <ManualCardsExample />
        <TopicCardsStarter />
        <LearningTopicsStarter />
        <PracticeStarter />
      </div>
    </main>
  );
}
