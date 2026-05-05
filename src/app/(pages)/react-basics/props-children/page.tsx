type LessonStatus = 'done' | 'learning' | 'next';

type LessonCardProps = {
  title: string;
  description: string;
  status: LessonStatus;
};

type NoteBoxProps = {
  title: string;
  children: React.ReactNode;
};

const statusLabels: Record<LessonStatus, string> = {
  done: '完了',
  learning: '学習中',
  next: '次に学ぶ',
};

const statusStyles: Record<LessonStatus, string> = {
  done: 'border-[#b7d8bf] bg-[#e8f5ec] text-[#23533a]',
  learning: 'border-[#c8b26a] bg-[#fff4c7] text-[#6f5615]',
  next: 'border-[#c9ced6] bg-[#eef1f5] text-[#425466]',
};

const lessonCards: LessonCardProps[] = [
  {
    title: 'JSX',
    description: 'HTMLに近い見た目でUIを書く記法',
    status: 'done',
  },
  {
    title: 'map',
    description: '配列の1件ずつをJSXに変える書き方',
    status: 'done',
  },
  {
    title: 'key',
    description: 'Reactがリストの項目を見分けるための目印',
    status: 'done',
  },
  {
    title: 'props',
    description: '親コンポーネントから子コンポーネントへ値を渡す仕組み',
    status: 'learning',
  },
];

function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 4 / props + children
    </p>
  );
}

function ConceptOverview() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで出てくる言葉</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">map</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            配列の1件ずつを、カードなどの画面表示に変える書き方です。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">props</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            親コンポーネントから子コンポーネントへ渡す値です。カードごとに違う文字や状態を渡せます。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">children</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            コンポーネントのタグの内側に書いた表示内容です。文章や要素のまとまりを渡せます。
          </p>
        </article>
      </div>
    </section>
  );
}

function ManualCardsExample() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">手書きカードから始める</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        同じ形のカードを手で何枚も書くと、見た目を変えたいときに全部のカードを直す必要があります。
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <p className="text-xs font-semibold text-[#3f7d58]">done</p>
          <h3 className="mt-2 text-lg font-semibold text-[#15191f]">JSX</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">HTMLに近い見た目でUIを書く記法</p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <p className="text-xs font-semibold text-[#6f5615]">learning</p>
          <h3 className="mt-2 text-lg font-semibold text-[#15191f]">map</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">配列の1件ずつをJSXに変える書き方</p>
        </article>
      </div>
    </section>
  );
}

function PropsTypeGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">propsの型を見る</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        <code>LessonCard</code> は、<code>title</code>、<code>description</code>、{' '}
        <code>status</code> を受け取ります。TypeScriptでは、受け取るpropsの形を型で書きます。
      </p>
      <pre className="mt-4 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`type LessonCardProps = {
  title: string;
  description: string;
  status: 'done' | 'learning' | 'next';
};`}</code>
      </pre>
    </section>
  );
}

function LessonCard({ title, description, status }: LessonCardProps) {
  return (
    <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
      <p
        className={`w-fit rounded-md border px-2 py-1 text-xs font-semibold ${statusStyles[status]}`}
      >
        {statusLabels[status]}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-[#15191f]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#425466]">{description}</p>
    </article>
  );
}

function PropsPracticeExample() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">propsでカードを作る</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        カードの形は <code>LessonCard</code> にまとめます。カードごとの違いは props として渡します。
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {lessonCards.map((lesson) => (
          <LessonCard
            key={lesson.title}
            title={lesson.title}
            description={lesson.description}
            status={lesson.status}
          />
        ))}
      </div>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`<LessonCard
  title="props"
  description="親コンポーネントから子コンポーネントへ値を渡す仕組み"
  status="learning"
/>`}</code>
      </pre>
    </section>
  );
}

function PropsFlowExample() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">親から子へ値が渡る流れ</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        親側で書いた属性が、子コンポーネントのpropsになります。
      </p>
      <div className="mt-4 grid gap-3">
        {[
          ['title="props"', 'title', 'props'],
          [
            'description="親コンポーネントから子コンポーネントへ値を渡す仕組み"',
            'description',
            '親コンポーネントから子コンポーネントへ値を渡す仕組み',
          ],
          ['status="learning"', 'status', 'learning'],
        ].map(([parentCode, propName, childValue]) => (
          <div
            key={propName}
            className="grid gap-3 rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4 text-sm leading-6 text-[#425466] md:grid-cols-[1fr_120px_1fr]"
          >
            <p className="font-mono text-[#15191f]">{parentCode}</p>
            <p className="font-semibold text-[#6f5615]">props.{propName}</p>
            <p>{childValue}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function NoteBox({ title, children }: NoteBoxProps) {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
      <h3 className="text-lg font-semibold text-[#15191f]">{title}</h3>
      <div className="mt-3 rounded-md bg-white p-4 text-sm leading-6 text-[#425466]">
        {children}
      </div>
    </section>
  );
}

function ChildrenPracticeExample() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">childrenで内側の表示を渡す</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        <code>children</code> は、コンポーネントのタグの内側に書いた内容です。
        <code>NoteBox</code> はタイトルをpropsで受け取り、説明文をchildrenで受け取っています。
      </p>
      <div className="mt-4 grid gap-3">
        <NoteBox title="props">
          <p>propsは、親コンポーネントから子コンポーネントへ値を渡す仕組みです。</p>
        </NoteBox>
        <NoteBox title="children">
          <p>
            childrenは、コンポーネントのタグの内側に書いた内容です。文章だけでなく、複数の要素も渡せます。
          </p>
          <ul className="mt-3 list-disc pl-5">
            <li>説明文を囲む</li>
            <li>補足のリストを渡す</li>
            <li>中身だけ違う枠を作る</li>
          </ul>
        </NoteBox>
      </div>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`<NoteBox title="children">
  <p>この内側がchildrenです。</p>
</NoteBox>`}</code>
      </pre>
    </section>
  );
}

function ReviewExample() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで確認すること</h2>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-[#425466] md:grid-cols-2">
        <p className="rounded-md bg-[#f7f7f2] p-3">propsは親から子へ渡す値</p>
        <p className="rounded-md bg-[#f7f7f2] p-3">propsの型で受け取る値の形を決める</p>
        <p className="rounded-md bg-[#f7f7f2] p-3">同じコンポーネントをpropsだけ変えて使い回せる</p>
        <p className="rounded-md bg-[#f7f7f2] p-3">childrenはタグの内側に書いた表示内容</p>
      </div>
    </section>
  );
}

export default function ReactPropsChildrenPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-6 py-10 text-[#1f2933] sm:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="border-b border-[#d8d6c8] pb-8">
          <LessonBadge />
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#15191f] sm:text-5xl">
            propsとchildrenを使ってUIを分ける
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#425466]">
            propsは親から子へ値を渡す仕組みです。childrenはコンポーネントの内側に書いた表示内容です。
            同じUIをコピーせず、値や中身だけを変えて使い回します。
          </p>
        </header>

        <ConceptOverview />
        <ManualCardsExample />
        <PropsTypeGuide />
        <PropsPracticeExample />
        <PropsFlowExample />
        <ChildrenPracticeExample />
        <ReviewExample />
      </div>
    </main>
  );
}
