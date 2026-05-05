type Topic = {
  id: string;
  title: string;
  status: 'done' | 'learning' | 'next';
  description: string;
};

const topics: Topic[] = [
  {
    id: 'jsx',
    title: 'JSX',
    status: 'done',
    description: 'HTMLに近い見た目でUIを書く記法',
  },
  {
    id: 'map',
    title: 'map',
    status: 'learning',
    description: '配列の1件ずつをJSXに変える書き方',
  },
  {
    id: 'key',
    title: 'key',
    status: 'learning',
    description: 'Reactがリストの項目を見分けるための目印',
  },
  {
    id: 'props',
    title: 'props',
    status: 'next',
    description: '次のレッスンで扱う、コンポーネントへ値を渡す仕組み',
  },
];

const learningTopics = topics.filter((topic) => topic.status === 'learning');

const statusLabels: Record<Topic['status'], string> = {
  done: '完了',
  learning: '学習中',
  next: '次に学ぶ',
};

const statusStyles: Record<Topic['status'], string> = {
  done: 'border-[#b7d8bf] bg-[#e8f5ec] text-[#23533a]',
  learning: 'border-[#c8b26a] bg-[#fff4c7] text-[#6f5615]',
  next: 'border-[#c9ced6] bg-[#eef1f5] text-[#425466]',
};

function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 3 / map + key
    </p>
  );
}

function StatusBadge({ status }: { status: Topic['status'] }) {
  return (
    <span className={`rounded-md border px-2 py-1 text-xs font-semibold ${statusStyles[status]}`}>
      {statusLabels[status]}
    </span>
  );
}

function ManualCardsExample() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">まずは手書きカードを見る</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        同じ形のカードを手で何枚も書くと、項目が増えたときに直す場所も増えます。
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
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

function TopicCardsExample() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">topics.mapでカード一覧を作る</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            <code>topics</code> の1件が、画面のカード1枚になります。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#f7f7f2] px-3 py-2 text-sm font-semibold text-[#425466]">
          topics: {topics.length}件
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {topics.map((topic) => (
          <article key={topic.id} className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-[#6b7280]">id: {topic.id}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#15191f]">{topic.title}</h3>
              </div>
              <StatusBadge status={topic.status} />
            </div>
            <p className="mt-3 text-sm leading-6 text-[#425466]">{topic.description}</p>
          </article>
        ))}
      </div>

      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`{topics.map((topic) => (
  <article key={topic.id}>
    <h3>{topic.title}</h3>
    <p>{topic.description}</p>
  </article>
))}`}</code>
      </pre>
    </section>
  );
}

function DataFlowExample() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">データと画面の対応を見る</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        <code>map</code> の中では、<code>topic</code> 1件からカード1枚を作っています。
        <code>key</code> は画面に出ませんが、Reactが項目を見分けるために使います。
      </p>
      <div className="mt-4 grid gap-3">
        {topics.map((topic, index) => (
          <div
            key={topic.id}
            className="grid gap-2 rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4 text-sm text-[#425466] sm:grid-cols-[120px_1fr]"
          >
            <p className="font-mono font-semibold text-[#15191f]">topics[{index}]</p>
            <p>
              <span className="font-mono">topic.id = &quot;{topic.id}&quot;</span> を{' '}
              <code>key</code> に使い、
              <span className="font-semibold text-[#15191f]"> {topic.title}</span>{' '}
              のカードを表示しています。
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-[#425466]">
        <code>key</code> はReactに渡す目印です。画面に出したい場合は、別で{' '}
        <code>{'{topic.id}'}</code> のように書きます。
      </p>
    </section>
  );
}

function LearningTopicsExample() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">filterで学習中だけを表示する</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            <code>status</code> が <code>learning</code> のデータだけを取り出してから、 もう一度{' '}
            <code>map</code> で一覧にします。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#fff4c7] px-3 py-2 text-sm font-semibold text-[#6f5615]">
          learning: {learningTopics.length}件
        </p>
      </div>

      <ul className="mt-5 grid gap-3">
        {learningTopics.map((topic) => (
          <li key={topic.id} className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
            <p className="text-xs font-semibold uppercase text-[#6f5615]">status: {topic.status}</p>
            <p className="mt-2 text-lg font-semibold text-[#15191f]">{topic.title}</p>
            <p className="mt-2 text-sm leading-6 text-[#425466]">{topic.description}</p>
          </li>
        ))}
      </ul>

      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`const learningTopics = topics.filter(
  (topic) => topic.status === 'learning',
);`}</code>
      </pre>
    </section>
  );
}

function PracticeExample() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">練習問題で確認すること</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        <code>topics</code> に次のデータを追加すると、全トピックのカードが1枚増えます。
        <code>status</code> を <code>learning</code> に変えると、学習中だけの一覧にも表示されます。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`{
  id: 'state',
  title: 'state',
  status: 'next',
  description: '画面の状態を持つためのデータ',
}`}</code>
      </pre>
      <div className="mt-5 rounded-md bg-[#fff8df] p-4 text-sm leading-6 text-[#6f5615]">
        <p className="font-semibold">見るポイント</p>
        <p className="mt-2">
          配列のデータを変えると、<code>map</code> と <code>filter</code>{' '}
          で作っている画面も一緒に変わります。
        </p>
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
            表示したい内容を配列にまとめ、<code>map</code> でカードへ変えます。 繰り返し表示では{' '}
            <code>key</code> を付け、必要なデータだけを出すときは <code>filter</code> を使います。
          </p>
        </header>

        <ManualCardsExample />
        <TopicCardsExample />
        <DataFlowExample />
        <LearningTopicsExample />
        <PracticeExample />
      </div>
    </main>
  );
}
