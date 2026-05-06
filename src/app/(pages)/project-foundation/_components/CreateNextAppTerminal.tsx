'use client';

import { FormEvent, KeyboardEvent, useState } from 'react';

type Answer = {
  question: string;
  answer: string;
  note: string;
};

type TerminalOption = {
  label: string;
  note: string;
  recommended?: boolean;
};

type TerminalPrompt = {
  question: string;
  helper: string;
  options: TerminalOption[];
};

type ProjectTarget = 'current' | 'new-folder';

const exampleCommand = 'npx create-next-app@latest .';

const projectTargetOptions: { label: string; value: ProjectTarget; note: string }[] = [
  { label: '.', value: 'current', note: '今いるフォルダに展開' },
  { label: 'my-app', value: 'new-folder', note: '新しいフォルダを作成' },
];

const terminalPrompts: TerminalPrompt[] = [
  {
    question: 'Would you like to use the recommended defaults?',
    helper:
      'Yesにすると細かい質問が省略されることがあります。教材では中身を知るためにNoを選ぶ想定です。',
    options: [
      { label: 'No', note: '1つずつ選択肢を確認する', recommended: true },
      { label: 'Yes', note: 'Next.jsのおすすめ設定をまとめて使う' },
    ],
  },
  {
    question: 'Would you like to use TypeScript?',
    helper: 'JavaScriptに型を足して、propsや関数の間違いに気づきやすくするかを選びます。',
    options: [
      { label: 'Yes', note: 'この教材と同じ。TSXで画面を作る', recommended: true },
      { label: 'No', note: 'JavaScriptで始める' },
    ],
  },
  {
    question: 'Which linter would you like to use?',
    helper: 'コードの問題を見つける道具を選びます。',
    options: [
      { label: 'ESLint', note: 'この教材と同じ。Next.jsの標準的な検査を使う', recommended: true },
      { label: 'Biome', note: '整形と検査をまとめて扱える別の道具を使う' },
      { label: 'None', note: '最初は検査ツールを入れない' },
    ],
  },
  {
    question: 'Which package manager would you like to use?',
    helper: 'パッケージを入れたり、コマンドを実行したりする道具を選びます。',
    options: [
      { label: 'npm', note: 'この教材と同じ。Node.jsと一緒に入る標準的な道具', recommended: true },
      { label: 'pnpm', note: '高速でディスク使用量を抑えやすい道具' },
      { label: 'yarn', note: 'npmと同じ目的で使われる別の道具' },
      { label: 'bun', note: '実行環境とpackage managerをまとめて扱える道具' },
    ],
  },
  {
    question: 'Would you like to use React Compiler?',
    helper: 'Reactの最適化を助ける機能を使うかを選びます。',
    options: [
      { label: 'No', note: 'この教材と同じ。Reactの基礎を優先する', recommended: true },
      { label: 'Yes', note: '最適化機能も最初から有効にする' },
    ],
  },
  {
    question: 'Would you like to use Tailwind CSS?',
    helper: 'classNameに短いクラスを書いて見た目を付けるCSSの道具を使うかを選びます。',
    options: [
      { label: 'Yes', note: 'この教材と同じ。画面を整えるために使う', recommended: true },
      { label: 'No', note: '通常のCSSなどで見た目を作る' },
    ],
  },
  {
    question: 'Would you like your code inside a src/ directory?',
    helper: 'アプリのコードをsrcフォルダにまとめるかを選びます。',
    options: [
      { label: 'Yes', note: 'この教材と同じ。src/appにページを置く', recommended: true },
      { label: 'No', note: 'appフォルダをプロジェクト直下に置く' },
    ],
  },
  {
    question: 'Would you like to use App Router?',
    helper: 'src/appのフォルダ構成でページを作るNext.jsのルーティング方式を使うかを選びます。',
    options: [
      { label: 'Yes', note: 'この教材と同じ。現在のNext.jsで中心の方式', recommended: true },
      { label: 'No', note: 'Pages Routerで始める' },
    ],
  },
  {
    question: 'Would you like to use Turbopack?',
    helper: '開発サーバーを速く動かす仕組みを使うかを選びます。',
    options: [
      { label: 'Yes', note: 'この教材と同じ。npm run devで使う', recommended: true },
      { label: 'No', note: '従来の開発サーバーで動かす' },
    ],
  },
  {
    question: 'Would you like to customize the import alias?',
    helper: '長い相対パスを短く書くための別名を変えるかを選びます。',
    options: [
      { label: 'No', note: 'この教材と同じ。@/* を使う', recommended: true },
      { label: 'Yes', note: '自分で別のaliasを決める' },
    ],
  },
  {
    question: 'Would you like to include AGENTS.md?',
    helper: 'AI coding agent向けの指示ファイルを入れるかを選びます。',
    options: [
      { label: 'No', note: 'この教材と同じ。必須ではないので入れない', recommended: true },
      { label: 'Yes', note: 'AI agent向けの作業指示も一緒に置く' },
    ],
  },
];

export function CreateNextAppTerminal() {
  const [command, setCommand] = useState('');
  const [submittedCommand, setSubmittedCommand] = useState('');
  const [projectTarget, setProjectTarget] = useState<ProjectTarget | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [promptIndex, setPromptIndex] = useState(0);
  const [selectedProjectTargetIndex, setSelectedProjectTargetIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [error, setError] = useState('');

  const isRunning = submittedCommand.length > 0;
  const needsProjectTarget = isRunning && projectTarget === null;
  const currentPrompt = needsProjectTarget ? null : terminalPrompts[promptIndex];
  const isComplete = isRunning && !needsProjectTarget && promptIndex >= terminalPrompts.length;

  function startSimulation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedCommand = command.trim();

    if (!normalizedCommand.includes('create-next-app')) {
      setError('create-next-appを含むコマンドを入力してください。例: npx create-next-app@latest .');
      return;
    }

    setError('');
    setSubmittedCommand(normalizedCommand);
    setProjectTarget(normalizedCommand.endsWith(' .') ? 'current' : null);
    setAnswers([]);
    setPromptIndex(0);
    setSelectedProjectTargetIndex(0);
    setSelectedOptionIndex(0);
  }

  function chooseProjectTarget(target: ProjectTarget) {
    setProjectTarget(target);
    setSelectedOptionIndex(0);
  }

  function chooseOption(prompt: TerminalPrompt, option: TerminalOption) {
    setAnswers((currentAnswers) => [
      ...currentAnswers,
      {
        question: prompt.question,
        answer: option.label,
        note: option.note,
      },
    ]);
    setPromptIndex((currentIndex) => currentIndex + 1);
    setSelectedOptionIndex(0);
  }

  function resetSimulation() {
    setCommand('');
    setSubmittedCommand('');
    setProjectTarget(null);
    setAnswers([]);
    setPromptIndex(0);
    setSelectedProjectTargetIndex(0);
    setSelectedOptionIndex(0);
    setError('');
  }

  function handleProjectTargetKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      setSelectedProjectTargetIndex((currentIndex) =>
        currentIndex === 0 ? projectTargetOptions.length - 1 : currentIndex - 1,
      );
      return;
    }

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      setSelectedProjectTargetIndex((currentIndex) =>
        currentIndex === projectTargetOptions.length - 1 ? 0 : currentIndex + 1,
      );
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      chooseProjectTarget(projectTargetOptions[selectedProjectTargetIndex].value);
    }
  }

  function handlePromptKeyDown(event: KeyboardEvent<HTMLDivElement>, prompt: TerminalPrompt) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      setSelectedOptionIndex((currentIndex) =>
        currentIndex === 0 ? prompt.options.length - 1 : currentIndex - 1,
      );
      return;
    }

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      setSelectedOptionIndex((currentIndex) =>
        currentIndex === prompt.options.length - 1 ? 0 : currentIndex + 1,
      );
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      chooseOption(prompt, prompt.options[selectedOptionIndex]);
    }
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">疑似ターミナルで流れを試す</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        実際にはインストールしません。<code>create-next-app</code>{' '}
        のコマンドを入れると、初期化時に聞かれる選択肢の流れを画面上で確認できます。
      </p>

      <div className="mt-5 rounded-md bg-[#15191f] p-4 font-mono text-sm leading-6 text-[#f7f7f2]">
        <div className="mb-4 flex items-center gap-2 border-b border-[#34404f] pb-3">
          <span className="h-3 w-3 rounded-full bg-[#d56a6a]" />
          <span className="h-3 w-3 rounded-full bg-[#d9b857]" />
          <span className="h-3 w-3 rounded-full bg-[#6cbf84]" />
          <p className="ml-2 text-xs text-[#b7c0cc]">create-next-app simulator</p>
        </div>

        {isRunning ? (
          <div className="grid gap-4">
            <p>
              <span className="text-[#82d39b]">$</span> {submittedCommand}
            </p>

            {projectTarget === 'current' ? (
              <p>
                <span className="text-[#a9c7ff]">?</span> Project name{' '}
                <span className="text-[#82d39b]">.</span>
                <span className="ml-2 text-[#b7c0cc]">今いるフォルダに展開</span>
              </p>
            ) : null}

            {projectTarget === 'new-folder' ? (
              <p>
                <span className="text-[#a9c7ff]">?</span> Project name{' '}
                <span className="text-[#82d39b]">my-app</span>
                <span className="ml-2 text-[#b7c0cc]">新しいフォルダを作成</span>
              </p>
            ) : null}

            {needsProjectTarget ? (
              <div
                tabIndex={0}
                onKeyDown={handleProjectTargetKeyDown}
                className="rounded-md border border-[#34404f] p-3 outline-none focus:border-[#82d39b]"
              >
                <p>
                  <span className="text-[#a9c7ff]">?</span> Project name{' '}
                  <span className="text-[#b7c0cc]">›</span>
                </p>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                  {projectTargetOptions.map((option, index) => {
                    const isSelected = selectedProjectTargetIndex === index;

                    return (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => chooseProjectTarget(option.value)}
                        onMouseEnter={() => setSelectedProjectTargetIndex(index)}
                        className="inline-flex items-center gap-2 text-left outline-none"
                      >
                        <span className={isSelected ? 'text-[#82d39b]' : 'text-transparent'}>
                          ❯
                        </span>
                        <span className={isSelected ? 'text-[#82d39b]' : 'text-[#b7c0cc]'}>
                          {option.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-xs text-[#b7c0cc]">
                  {projectTargetOptions[selectedProjectTargetIndex].note}
                </p>
                <p className="mt-1 text-xs text-[#707b8c]">←/→で選択、Enterで決定</p>
              </div>
            ) : null}

            {answers.map((answer) => (
              <div key={`${answer.question}-${answer.answer}`}>
                <p>
                  <span className="text-[#a9c7ff]">?</span> {answer.question}{' '}
                  <span className="text-[#82d39b]">{answer.answer}</span>
                </p>
                <p className="text-xs text-[#b7c0cc]">{answer.note}</p>
              </div>
            ))}

            {currentPrompt ? (
              <div
                tabIndex={0}
                onKeyDown={(event) => handlePromptKeyDown(event, currentPrompt)}
                className="rounded-md border border-[#34404f] p-3 outline-none focus:border-[#82d39b]"
              >
                <p>
                  <span className="text-[#a9c7ff]">?</span> {currentPrompt.question}{' '}
                  <span className="text-[#b7c0cc]">›</span>
                </p>
                <p className="mt-1 text-xs text-[#b7c0cc]">{currentPrompt.helper}</p>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                  {currentPrompt.options.map((option, index) => {
                    const isSelected = selectedOptionIndex === index;

                    return (
                      <button
                        type="button"
                        key={option.label}
                        onClick={() => chooseOption(currentPrompt, option)}
                        onMouseEnter={() => setSelectedOptionIndex(index)}
                        className="inline-flex items-center gap-2 text-left outline-none"
                      >
                        <span className={isSelected ? 'text-[#82d39b]' : 'text-transparent'}>
                          ❯
                        </span>
                        <span className={isSelected ? 'text-[#82d39b]' : 'text-[#b7c0cc]'}>
                          {option.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-xs text-[#b7c0cc]">
                  {currentPrompt.options[selectedOptionIndex].note}
                </p>
                <p className="mt-1 text-xs text-[#707b8c]">←/→で選択、Enterで決定</p>
              </div>
            ) : null}

            {isComplete ? (
              <div className="rounded-md border border-[#82d39b] bg-[#22352b] p-3">
                <p className="font-semibold text-[#82d39b]">設定の確認が完了しました。</p>
                <p className="mt-2 text-xs text-[#dce7df]">
                  この教材では、TypeScript、ESLint、npm、Tailwind CSS、src directory、App
                  Router、Turbopack、@/* alias を使う状態でプロジェクトを用意済みです。
                </p>
                <button
                  type="button"
                  onClick={resetSimulation}
                  className="mt-3 rounded-md border border-[#82d39b] px-3 py-2 text-xs font-semibold text-[#f7f7f2]"
                >
                  最初から試す
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <form onSubmit={startSimulation} className="grid gap-3">
            <label className="sr-only" htmlFor="create-next-app-command">
              create-next-app command
            </label>
            <div className="flex min-h-11 items-center gap-2 rounded-md border border-[#34404f] bg-[#101722] px-3">
              <span className="text-[#82d39b]">$</span>
              <input
                id="create-next-app-command"
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                placeholder={exampleCommand}
                className="min-w-0 flex-1 bg-transparent text-[#f7f7f2] outline-none placeholder:text-[#707b8c]"
              />
            </div>
            <div className="grid gap-2 sm:grid-cols-[auto_auto] sm:justify-start">
              <button
                type="button"
                onClick={() => setCommand(exampleCommand)}
                className="min-h-10 rounded-md border border-[#566276] px-4 text-sm font-semibold text-[#f7f7f2]"
              >
                例を入れる
              </button>
              <p className="flex min-h-10 items-center text-xs text-[#b7c0cc]">Enterで実行</p>
            </div>
            {error ? (
              <p className="text-sm font-semibold text-[#ff9f9f]">{error}</p>
            ) : (
              <p className="text-xs text-[#b7c0cc]">
                <code>{exampleCommand}</code> のように、<code>.</code>{' '}
                を付けると今いるフォルダに展開する想定になります。
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
