type LessonStatus = 'done' | 'learning' | 'next';

type LessonCardProps = {
  // TODO 1: 下の「propsの型」セクションを見て、この型が何を表すか確認する。
  title: string;
  description: string;
  status: LessonStatus;
};

type NoteBoxProps = {
  title: string;
  children: React.ReactNode;
};

function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 4 / Starter
    </p>
  );
}

function PageGuide() {
  return (
    <section className="rounded-md border border-[#c8b26a] bg-[#fff8df] p-5 text-[#6f5615]">
      <h2 className="text-xl font-semibold">このページの順番に進める</h2>
      <p className="mt-3 leading-7">
        このレッスンからは、ページを見ながら進めます。画面の説明を読んで、表示されているTODOを上から順番に直します。
      </p>
    </section>
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
            親コンポーネントから子コンポーネントへ渡す値です。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">children</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            コンポーネントのタグの内側に書いた表示内容です。
          </p>
        </article>
      </div>
    </section>
  );
}

function ManualCardsExample() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">まずは手書きカードを見る</h2>
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

function LessonCard(props: LessonCardProps) {
  return (
    <article className="rounded-md border border-dashed border-[#b9b49f] bg-[#f7f7f2] p-4">
      <p className="text-xs font-semibold text-[#6f5615]">
        TODO 2: statusを見やすく表示する / 今の値: {props.status}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-[#15191f]">
        TODO 3: titleを表示する / 今の値: {props.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[#425466]">
        TODO 4: descriptionを表示する / 今の値: {props.description}
      </p>
    </article>
  );
}

function PropsPracticeStarter() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">propsでカードを作る</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        <code>LessonCard</code> に <code>title</code>、<code>description</code>、{' '}
        <code>status</code> を渡します。カードの形は1つにまとめ、値だけをpropsで変えます。
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <LessonCard title="JSX" description="HTMLに近い見た目でUIを書く記法" status="done" />
        <LessonCard title="map" description="配列の1件ずつをJSXに変える書き方" status="learning" />
        <LessonCard
          title="key"
          description="Reactがリストの項目を見分けるための目印"
          status="learning"
        />
        <div className="rounded-md border border-dashed border-[#b9b49f] bg-[#fff8df] p-4 text-sm leading-6 text-[#6f5615]">
          TODO 5: ここに <code>props</code> の <code>LessonCard</code> を1枚追加する
        </div>
      </div>
    </section>
  );
}

function NoteBox(props: NoteBoxProps) {
  return (
    <section className="rounded-md border border-dashed border-[#b9b49f] bg-[#f7f7f2] p-4">
      <h3 className="text-lg font-semibold text-[#15191f]">{props.title}</h3>
      <div className="mt-3 rounded-md bg-white p-4 text-sm leading-6 text-[#425466]">
        TODO 6: ここに <code>props.children</code> を表示する
      </div>
    </section>
  );
}

function ChildrenPracticeStarter() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">childrenで内側の表示を渡す</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        <code>children</code> は、コンポーネントのタグの内側に書いた内容です。
        スターターでは、まだ内側の内容が表示されません。
      </p>
      <div className="mt-4 grid gap-3">
        <NoteBox title="props">
          <p>propsは、親コンポーネントから子コンポーネントへ値を渡す仕組みです。</p>
        </NoteBox>
        <NoteBox title="children">
          <p>childrenは、コンポーネントのタグの内側に書いた内容です。</p>
        </NoteBox>
      </div>
    </section>
  );
}

function PracticeStarter() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで直すTODO</h2>
      <ol className="mt-4 grid gap-3 text-sm leading-6 text-[#425466]">
        <li className="rounded-md bg-[#f7f7f2] p-3">
          1. このページで props と children の意味を見る
        </li>
        <li className="rounded-md bg-[#f7f7f2] p-3">2. LessonCardでpropsの値を表示する</li>
        <li className="rounded-md bg-[#f7f7f2] p-3">3. propsのLessonCardを1枚追加する</li>
        <li className="rounded-md bg-[#f7f7f2] p-3">4. NoteBoxでprops.childrenを表示する</li>
        <li className="rounded-md bg-[#f7f7f2] p-3">5. 自分の言葉でchildrenの説明を追加する</li>
      </ol>
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
            このページはスターターコードです。説明を上から読みながら、画面に出ているTODOを1つずつ完成させます。
          </p>
        </header>

        <PageGuide />
        <ConceptOverview />
        <ManualCardsExample />
        <PropsTypeGuide />
        <PropsPracticeStarter />
        <ChildrenPracticeStarter />
        <PracticeStarter />
      </div>
    </main>
  );
}
