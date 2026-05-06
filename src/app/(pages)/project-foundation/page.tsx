import { CreateNextAppTerminal } from './_components/CreateNextAppTerminal';
import { HomeLink } from '@/app/_components/HomeLink';

const setupSteps = [
  {
    command: 'nvm install',
    description:
      '.nvmrc に書かれた Node.js 25.8.2 をインストールします。最初だけ実行すれば大丈夫です。',
  },
  {
    command: 'nvm use',
    description: 'このリポジトリで使う Node.js に切り替えます。作業を始める前に実行します。',
  },
  {
    command: 'npm ci',
    description:
      'package-lock.json の内容どおりにパッケージを入れます。全員が同じ材料で動かすためのコマンドです。',
  },
  {
    command: 'npm run dev',
    description:
      '開発サーバーを起動します。ブラウザで http://localhost:3000 を開くと画面を確認できます。',
  },
];

const qualityCommands = [
  {
    command: 'npm run format',
    description:
      'Prettierを実行して、コードの空白、改行、並び方を自動で揃えます。見た目を手で直す作業を減らします。',
  },
  {
    command: 'npm run format:check',
    description:
      'Prettierの整形ルールから外れていないか確認します。Pull Requestでは確認だけを実行します。',
  },
  {
    command: 'npm run lint',
    description: 'ESLintで、ミスにつながりやすい書き方やNext.jsのルール違反がないか確認します。',
  },
  {
    command: 'npm run build',
    description:
      'Next.jsが本番公開用の形に変換できるか確認します。TypeScriptのエラーもここで見つかります。',
  },
];

const projectStartCommands = [
  {
    command: 'create-next-app',
    description:
      '新しいNext.jsプロジェクトを最初から作るコマンドです。この教材の受講者は実行しません。',
  },
  {
    command: 'git clone',
    description:
      '作成済みの教材リポジトリを自分のパソコンに持ってくるコマンドです。この教材ではこちらを使います。',
  },
  {
    command: 'npm ci',
    description:
      '教材に必要なパッケージを入れるコマンドです。package-lock.jsonに合わせて同じ状態にします。',
  },
  {
    command: 'npm run dev',
    description:
      '教材サイトを開発モードで起動するコマンドです。ブラウザで画面を見ながら学習します。',
  },
];

const createNextAppChoices = [
  {
    question: 'プロジェクト名',
    answer: 'my-app / .',
    description:
      '作成するフォルダ名です。my-appなら新しいmy-appフォルダを作ります。. を指定すると、今いるフォルダにそのまま展開します。',
  },
  {
    question: 'recommended defaults',
    answer: 'Yes / No',
    description:
      'Next.jsのおすすめ設定をまとめて使うかを選びます。初学者は便利ですが、何が選ばれたか見えにくいので、教材では中身を1つずつ理解します。',
  },
  {
    question: 'TypeScript',
    answer: 'Yes',
    description:
      'JavaScriptに型を足して、propsや関数に渡す値の間違いに気づきやすくします。この教材ではTypeScriptを使います。',
  },
  {
    question: 'linter',
    answer: 'ESLint / Biome / None',
    description:
      'コードの問題を見つける道具を選びます。この教材ではESLintを使います。Biomeは整形と検査をまとめて扱える別の道具です。',
  },
  {
    question: 'package manager',
    answer: 'npm',
    description:
      'パッケージを入れたりコマンドを実行したりする道具です。npm、pnpm、yarn、bunなどがあります。この教材ではnpmを使います。',
  },
  {
    question: 'React Compiler',
    answer: 'No',
    description:
      'Reactの最適化を助ける機能です。便利な場面はありますが、Reactの基礎を学ぶ段階では先に覚える必要がないので、この教材では使いません。',
  },
  {
    question: 'Tailwind CSS',
    answer: 'Yes',
    description:
      'classNameに短いクラスを書いて見た目を付けるCSSの道具です。この教材では画面を整えるために使いますが、深掘りの学習テーマにはしません。',
  },
  {
    question: 'src directory',
    answer: 'Yes',
    description:
      'アプリのコードをsrcフォルダの中にまとめるかを選びます。この教材ではsrc/appにページを置きます。',
  },
  {
    question: 'App Router',
    answer: 'Yes',
    description:
      'src/appのフォルダ構成でページを作る、現在のNext.jsで中心になっているルーティング方式です。この教材ではApp Routerを使います。',
  },
  {
    question: 'Turbopack',
    answer: 'Yes',
    description:
      'Next.jsの開発サーバーを速く動かすための仕組みです。最新版ではデフォルトで有効になる扱いです。この教材のnpm run devでも使います。',
  },
  {
    question: 'import alias',
    answer: '@/*',
    description:
      '長い相対パスを書かずにimportするための短縮名です。たとえば @/app/_components/HomeLink のように書けます。',
  },
  {
    question: 'AGENTS.md',
    answer: 'No',
    description:
      'AI coding agent向けの指示ファイルを入れるかを選びます。この教材では必須ではないので入れていません。',
  },
];

const termFlowSteps = [
  {
    number: '01',
    title: '言語',
    terms: 'JavaScript / TypeScript',
    description: '画面の動きやデータの形を書く材料です。',
    className: 'border-[#b9cbe8] bg-[#eef5ff] text-[#24476f]',
  },
  {
    number: '02',
    title: 'UIを書く',
    terms: 'JSX / TSX / React',
    description: '画面を部品に分けて作るための書き方です。',
    className: 'border-[#b7d8bf] bg-[#e8f5ec] text-[#23533a]',
  },
  {
    number: '03',
    title: 'アプリの土台',
    terms: 'Next.js / App Router',
    description: 'ページ、ルーティング、ビルドのルールを用意します。',
    className: 'border-[#c8b26a] bg-[#fff4c7] text-[#6f5615]',
  },
  {
    number: '04',
    title: '動かす・揃える',
    terms: 'Node.js / npm / nvm / lint',
    description: 'ローカル起動とチームの確認基準を揃えます。',
    className: 'border-[#d3bfdb] bg-[#f6eef8] text-[#5d3d68]',
  },
];

const termLabelStyles: Record<string, { badge: string; card: string; dot: string }> = {
  言語: {
    badge: 'bg-[#eef5ff] text-[#24476f]',
    card: 'border-l-[#7b9fca]',
    dot: 'bg-[#7b9fca]',
  },
  書き方: {
    badge: 'bg-[#e8f5ec] text-[#23533a]',
    card: 'border-l-[#75ad84]',
    dot: 'bg-[#75ad84]',
  },
  拡張子: {
    badge: 'bg-[#e8f5ec] text-[#23533a]',
    card: 'border-l-[#75ad84]',
    dot: 'bg-[#75ad84]',
  },
  ライブラリ: {
    badge: 'bg-[#e8f5ec] text-[#23533a]',
    card: 'border-l-[#75ad84]',
    dot: 'bg-[#75ad84]',
  },
  フレームワーク: {
    badge: 'bg-[#fff4c7] text-[#6f5615]',
    card: 'border-l-[#c8a53d]',
    dot: 'bg-[#c8a53d]',
  },
  考え方: {
    badge: 'bg-[#fff4c7] text-[#6f5615]',
    card: 'border-l-[#c8a53d]',
    dot: 'bg-[#c8a53d]',
  },
  実行環境: {
    badge: 'bg-[#f6eef8] text-[#5d3d68]',
    card: 'border-l-[#a575b0]',
    dot: 'bg-[#a575b0]',
  },
  道具: {
    badge: 'bg-[#f6eef8] text-[#5d3d68]',
    card: 'border-l-[#a575b0]',
    dot: 'bg-[#a575b0]',
  },
  整形: {
    badge: 'bg-[#eef1f5] text-[#425466]',
    card: 'border-l-[#8c98a8]',
    dot: 'bg-[#8c98a8]',
  },
  検査: {
    badge: 'bg-[#eef1f5] text-[#425466]',
    card: 'border-l-[#8c98a8]',
    dot: 'bg-[#8c98a8]',
  },
};

const foundationTerms = [
  {
    name: 'JavaScript',
    label: '言語',
    description: 'ブラウザで動くプログラミング言語です。ReactやNext.jsの土台になります。',
  },
  {
    name: 'TypeScript',
    label: '言語',
    description:
      'JavaScriptに型を足した言語です。文字列、数値、propsの形などを先に決めて、間違いに気づきやすくします。',
  },
  {
    name: 'JSX',
    label: '書き方',
    description:
      'JavaScript / TypeScriptの中でUIを書くための記法です。HTMLに似ていますが、Reactが理解する書き方です。',
  },
  {
    name: 'TSX',
    label: '拡張子',
    description:
      'TypeScriptの中にJSXを書けるファイルです。画面を返すReactコンポーネントは page.tsx のように書きます。',
  },
  {
    name: 'React',
    label: 'ライブラリ',
    description:
      '画面をコンポーネントという小さな部品に分けて作るためのライブラリです。この教材の中心です。',
  },
  {
    name: 'Next.js',
    label: 'フレームワーク',
    description:
      'Reactでサイトやアプリを作りやすくするフレームワークです。ページ作成、ルーティング、ビルド、サーバー側の処理をまとめて扱えます。',
  },
  {
    name: 'フレームワーク',
    label: '考え方',
    description:
      'フォルダ構成、ファイル名、コマンド、作り方のルールを用意してくれる道具です。Next.jsでは src/app にページを置きます。',
  },
  {
    name: 'Node.js',
    label: '実行環境',
    description:
      'ブラウザの外でJavaScriptを動かすための実行環境です。Next.jsの開発サーバーやnpmコマンドを動かすために使います。',
  },
  {
    name: 'npm',
    label: '道具',
    description: 'パッケージを入れたり、package.jsonに書いたコマンドを実行したりする道具です。',
  },
  {
    name: 'nvm',
    label: '道具',
    description:
      'Node.jsのバージョンを切り替える道具です。チーム全員が同じNode.jsで動かせるようにします。',
  },
  {
    name: 'Prettier',
    label: '整形',
    description:
      'コードの見た目を自動で揃える道具です。空白や改行でレビューが荒れないようにします。',
  },
  {
    name: 'ESLint',
    label: '検査',
    description:
      'コードの問題を見つける道具です。Next.jsやReactで避けたい書き方を早めに見つけます。',
  },
];

const importantFiles = [
  {
    path: '.nvmrc',
    description: 'この教材で使う Node.js のバージョン',
  },
  {
    path: 'package.json',
    description: 'npm scripts、パッケージ一覧、Node.js / npm の条件',
  },
  {
    path: 'src/app/layout.tsx',
    description: '全ページに共通するHTMLの土台。htmlやbodyを置きます。',
  },
  {
    path: 'src/app/page.tsx',
    description: 'トップページの表示内容。/ にアクセスしたときに表示されます。',
  },
  {
    path: '.github/workflows/ci.yml',
    description: 'Pull Requestで自動実行されるformat、lint、buildのチェック',
  },
  {
    path: 'compose.yaml',
    description: 'Dockerで動かしたい人向けの任意起動設定',
  },
];

function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 1 / Project Foundation
    </p>
  );
}

function CommandList({
  title,
  description,
  commands,
}: {
  title: string;
  description: string;
  commands: { command: string; description: string }[];
}) {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">{title}</h2>
      <p className="mt-3 leading-7 text-[#425466]">{description}</p>
      <div className="mt-5 grid gap-3">
        {commands.map((item) => (
          <article
            key={item.command}
            className="grid gap-3 rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4 sm:grid-cols-[180px_1fr]"
          >
            <code className="overflow-x-auto rounded-md bg-[#15191f] px-3 py-2 text-sm text-[#f7f7f2]">
              {item.command}
            </code>
            <p className="text-sm leading-6 text-[#425466]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectOverview() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">この教材で使うもの</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">画面を書く</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            TypeScript、TSX、Reactを使います。ボタン、カード、一覧などの画面を小さな部品として作ります。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">ページを増やす</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            Next.jsのApp Routerを使います。<code>src/app</code> の中にフォルダと{' '}
            <code>page.tsx</code> を置くとページになります。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">ローカルで動かす</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            nvmでNode.jsのバージョンを揃え、npmで必要なパッケージを入れ、開発サーバーを起動します。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">チームで揃える</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            Prettier、ESLint、build、GitHub Actionsを使って、Pull
            Request前後の確認を同じ基準にします。
          </p>
        </article>
      </div>
    </section>
  );
}

function TermsGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">最初に知っておく言葉</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        この時点で全部を使いこなせる必要はありません。まずは「何のための名前か」だけ分かれば十分です。
      </p>

      <div className="mt-5 grid gap-3 lg:grid-cols-4">
        {termFlowSteps.map((step) => (
          <article key={step.number} className={`rounded-md border p-4 ${step.className}`}>
            <p className="font-mono text-xs font-semibold">{step.number}</p>
            <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm font-semibold">{step.terms}</p>
            <p className="mt-3 text-sm leading-6">{step.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {foundationTerms.map((term) => {
          const styles = termLabelStyles[term.label];

          return (
            <article
              key={term.name}
              className={`rounded-md border border-l-4 border-[#d8d6c8] bg-[#f7f7f2] p-4 ${styles.card}`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-full ${styles.dot}`} />
                  <h3 className="text-lg font-semibold text-[#15191f]">{term.name}</h3>
                </div>
                <p className={`w-fit rounded-md px-2 py-1 text-xs font-semibold ${styles.badge}`}>
                  {term.label}
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#425466]">{term.description}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-5 rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
        <p className="text-sm font-semibold text-[#15191f]">読み方の目安</p>
        <p className="mt-2 text-sm leading-6 text-[#425466]">
          まずは青の「言語」が土台、緑の「UIを書く」がReactで触る中心、
          黄色の「アプリの土台」がNext.js、紫とグレーの「動かす・揃える」が開発環境です。
        </p>
      </div>
    </section>
  );
}

function ProjectStartGuide() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">Next.jsプロジェクトはどう始めるのか</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        Next.jsのようなフレームワークを使うときは、一般的に初期化コマンドを使ってプロジェクトの土台を作ります。
        Next.jsでは <code>create-next-app</code>{' '}
        というコマンドを使うと、画面を作るためのフォルダ、設定ファイル、開発用コマンドがまとめて用意されます。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`npx create-next-app@latest my-app
npx create-next-app@latest .`}</code>
      </pre>
      <p className="mt-3 text-sm leading-6 text-[#425466]">
        <code>my-app</code> は新しいフォルダを作る指定です。<code>.</code>{' '}
        は今いるフォルダに展開する指定です。<code>.</code>{' '}
        を使うときは、既存ファイルとぶつからないように空のフォルダで始めます。
      </p>
      <p className="mt-3 leading-7 text-[#425466]">
        ただし、この教材では全員が同じ状態から学べるように、Next.jsプロジェクトはすでに作成済みです。
        そのため、受講者は <code>create-next-app</code>{' '}
        を実行しません。GitHubからこのリポジトリをcloneして、用意された教材を起動します。
      </p>
      <div className="mt-5 grid gap-3">
        {projectStartCommands.map((item) => (
          <article
            key={item.command}
            className="grid gap-3 rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4 sm:grid-cols-[180px_1fr]"
          >
            <code className="overflow-x-auto rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#15191f]">
              {item.command}
            </code>
            <p className="text-sm leading-6 text-[#425466]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CreateNextAppChoices() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">create-next-appで聞かれる選択肢</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        実際に <code>create-next-app</code>{' '}
        を実行すると、プロジェクトの作り方をいくつか聞かれます。質問の表示はNext.jsのバージョンで変わることがありますが、何を決めているかは押さえておきます。
      </p>
      <div className="mt-5 grid gap-3">
        {createNextAppChoices.map((choice) => (
          <article
            key={choice.question}
            className="grid gap-3 rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4 md:grid-cols-[180px_120px_1fr]"
          >
            <h3 className="text-base font-semibold text-[#15191f]">{choice.question}</h3>
            <p className="w-fit rounded-md bg-white px-2 py-1 text-sm font-semibold text-[#3f7d58]">
              {choice.answer}
            </p>
            <p className="text-sm leading-6 text-[#425466]">{choice.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FirstCommands() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">最初に実行する流れ</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        ここから先が、受講者が実際に実行するコマンドです。すでに用意されたリポジトリをcloneして、
        同じ環境で起動できるところから始めます。cloneは、GitHub上のリポジトリを自分のパソコンに持ってくる作業です。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`git clone https://github.com/sironekotech/frontend-study.git
cd frontend-study
nvm install
nvm use
npm ci
npm run dev`}</code>
      </pre>
    </section>
  );
}

function ImportantFiles() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">最初に見るファイル</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        すべてを暗記する必要はありません。困ったときに、どのファイルを見るのかを知っておくのが目的です。
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {importantFiles.map((file) => (
          <article key={file.path} className="rounded-md bg-[#f7f7f2] p-4">
            <code className="break-words text-sm font-semibold text-[#15191f]">{file.path}</code>
            <p className="mt-2 text-sm leading-6 text-[#425466]">{file.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DockerNote() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-[#fff8df] p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">Dockerは任意です</h2>
      <p className="mt-3 leading-7 text-[#6f5615]">
        Dockerは、同じ開発環境をコンテナとして起動するための道具です。Dockerの構築自体はReact学習のスコープ外です。
        ただし、ローカルのNode.js環境を直接使いたくない人向けに、<code>compose.yaml</code> と{' '}
        <code>Dockerfile</code> は用意されています。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>docker compose up --build</code>
      </pre>
    </section>
  );
}

export default function ProjectFoundationPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-4 py-8 text-[#1f2933] sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="border-b border-[#d8d6c8] pb-8">
          <HomeLink />
          <LessonBadge />
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#15191f] sm:text-5xl">
            環境構築とプロジェクトの土台を確認する
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#425466]">
            Lesson 1は、手を動かしてタグを進める前の読み物です。Macでnvmを使い、
            Node.js、npm、Next.jsのプロジェクトを同じ状態で動かせるようにします。Reactに入る前に、
            言語、ライブラリ、フレームワーク、実行環境、整形ツールの役割を整理します。
          </p>
        </header>

        <ProjectOverview />
        <TermsGuide />
        <ProjectStartGuide />
        <CreateNextAppTerminal />
        <CreateNextAppChoices />
        <FirstCommands />
        <CommandList
          title="環境を揃えるコマンド"
          description="nvmでNode.jsのバージョンを揃え、npmで依存関係を入れてから開発サーバーを起動します。"
          commands={setupSteps}
        />
        <CommandList
          title="Pull Request前に確認するコマンド"
          description="画面が動くだけでなく、チームでレビューできる品質になっているかを確認します。"
          commands={qualityCommands}
        />
        <ImportantFiles />
        <DockerNote />
      </div>
    </main>
  );
}
