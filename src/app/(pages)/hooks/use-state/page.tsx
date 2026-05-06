'use client';

import type { ChangeEvent } from 'react';
import { HomeLink } from '@/app/_components/HomeLink';
import { FunctionalUpdateExample } from './_components/FunctionalUpdateExample';

type Profile = {
  name: string;
  level: number;
  goal: string;
};

type Skill = {
  id: string;
  name: string;
  done: boolean;
};

type SaveStatus = 'idle' | 'saving' | 'done';

const starterProfile: Profile = {
  name: 'React learner',
  level: 1,
  goal: 'stateの更新に慣れる',
};

const starterSkills: Skill[] = [
  {
    id: 'functional-update',
    name: '前のstateを使って更新する',
    done: false,
  },
  {
    id: 'object-state',
    name: 'オブジェクトstateを新しく作る',
    done: false,
  },
  {
    id: 'array-state',
    name: '配列stateを新しく作る',
    done: false,
  },
];

const statusLabels: Record<SaveStatus, string> = {
  idle: '未保存',
  saving: '保存中',
  done: '保存済み',
};

function LessonBadge() {
  return (
    <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-1 text-sm font-semibold text-[#2f6848]">
      Lesson 6 / hooks useState
    </p>
  );
}

function ConceptOverview() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで出てくる言葉</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">前のstate</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            今Reactが持っている最新の値です。次の値を作る材料にします。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">functional update</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            <code>setCount((current) =&gt; current + 1)</code>{' '}
            のように、前のstateから次のstateを返す書き方です。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">spread</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            <code>{`{ ...profile }`}</code> や <code>[...skills]</code>{' '}
            のように、新しいオブジェクトや配列を作る書き方です。
          </p>
        </article>
        <article className="rounded-md bg-[#f7f7f2] p-4">
          <h3 className="text-lg font-semibold text-[#15191f]">stateの型</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            TypeScriptがstateの値の形を判断します。必要なときは自分で型を書きます。
          </p>
        </article>
      </div>
    </section>
  );
}

function LessonFlow() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">Lesson 5との違い</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        Lesson 5では、ボタンや入力欄でstateが変わる流れを確認しました。Lesson
        6では、stateの変え方をもう少し丁寧に見ます。
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">1. 数字</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            前のcountを使って、次のcountを作ります。
          </p>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">2. オブジェクト</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            名前やレベルをまとめたprofileを、新しいprofileとして更新します。
          </p>
        </article>
        <article className="rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4">
          <p className="text-sm font-semibold text-[#6f5615]">3. 配列</p>
          <p className="mt-2 text-sm leading-6 text-[#425466]">
            クリックした項目だけを変えた、新しいskills配列を作ります。
          </p>
        </article>
      </div>
    </section>
  );
}

function TodoOrder() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">TODOの順番</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        このstartページは、まだ固定値と空の関数が残っています。上から順番にstateへ置き換えます。
      </p>
      <div className="mt-4 grid gap-3">
        {[
          'ReactからuseStateをimportする',
          'countをuseStateで持ち、前のstateを使って+1する',
          'profileをオブジェクトstateにして、spreadで新しいprofileを作る',
          'skillsを配列stateにして、mapでクリックした項目だけ更新する',
          '保存状態のstateにTypeScriptの型を付ける',
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

function CounterStarter() {
  // TODO: useStateをimportしたあと、固定値のcountをstateに置き換えます。
  const count = 0;

  function handleIncrease() {
    // TODO: setCount((currentCount) => currentCount + 1) を使います。
  }

  function handleReset() {
    // TODO: countを0に戻します。
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">前のstateを使ってcountを更新する</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            今は <code>count</code> が固定値なので、ボタンを押しても数字は変わりません。
            <code>useState</code> に置き換えて、前のcountから次のcountを作ります。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#fff4c7] px-3 py-2 text-sm font-semibold text-[#6f5615]">
          TODO
        </p>
      </div>

      <div className="mt-5 rounded-md bg-[#f7f7f2] p-5">
        <p className="text-sm font-semibold text-[#425466]">現在のcount</p>
        <p className="mt-2 text-5xl font-bold text-[#15191f]">{count}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleIncrease}
            className="rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white"
          >
            +1する
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-md border border-[#d8d6c8] bg-white px-4 py-2 text-sm font-semibold text-[#15191f]"
          >
            0に戻す
          </button>
        </div>
        <p className="mt-4 rounded-md border border-dashed border-[#c8b26a] bg-white p-3 text-sm leading-6 text-[#6f5615]">
          start状態: ボタンは押せますが、まだstateを更新していないので表示は変わりません。
        </p>
      </div>
    </section>
  );
}

function ProfileStarter() {
  // TODO: profileをuseStateで持ちます。
  const profile = starterProfile;

  function handleLevelUp() {
    // TODO: setProfile((currentProfile) => ({ ...currentProfile, level: currentProfile.level + 1 })) を使います。
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    // TODO: event.target.valueを使って、nameだけを新しい値にします。
    void event;
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">オブジェクトstateを更新する</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            <code>profile</code>{' '}
            は、名前、レベル、目標をまとめたオブジェクトです。1つだけ値を変えるときも、
            元のオブジェクトを直接書き換えず、新しいオブジェクトを作ります。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#fff4c7] px-3 py-2 text-sm font-semibold text-[#6f5615]">
          TODO
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-md bg-[#f7f7f2] p-5">
          <p className="text-sm font-semibold text-[#425466]">profile</p>
          <h3 className="mt-2 text-2xl font-bold text-[#15191f]">{profile.name}</h3>
          <p className="mt-2 text-sm leading-6 text-[#425466]">Level {profile.level}</p>
          <p className="mt-1 text-sm leading-6 text-[#425466]">{profile.goal}</p>

          <div className="mt-5 grid gap-3">
            <label className="grid gap-2 text-sm font-semibold text-[#425466]">
              名前
              <input
                defaultValue={profile.name}
                onChange={handleNameChange}
                className="min-h-11 rounded-md border border-[#d8d6c8] bg-white px-3 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
              />
            </label>
            <button
              type="button"
              onClick={handleLevelUp}
              className="rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white"
            >
              Levelを上げる
            </button>
          </div>
        </div>

        <div className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">目標の形</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`setProfile((currentProfile) => ({
  ...currentProfile,
  level: currentProfile.level + 1,
}));`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

function SkillsStarter() {
  // TODO: skillsをuseStateで持ちます。
  const skills = starterSkills;

  function handleToggleSkill(targetId: string) {
    // TODO: mapでtargetIdと一致する項目だけdoneを反対にします。
    void targetId;
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">配列stateを更新する</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            配列の中の1件だけ変えるときは、<code>map</code>{' '}
            で新しい配列を作ります。クリックした項目だけ、<code>done</code> を反対にします。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#fff4c7] px-3 py-2 text-sm font-semibold text-[#6f5615]">
          TODO
        </p>
      </div>

      <ul className="mt-5 grid gap-3">
        {skills.map((skill) => (
          <li key={skill.id}>
            <button
              type="button"
              onClick={() => handleToggleSkill(skill.id)}
              className="flex w-full items-start gap-3 rounded-md border border-[#d8d6c8] bg-[#f7f7f2] p-4 text-left"
            >
              <span
                className={`mt-1 h-4 w-4 rounded-sm border ${
                  skill.done ? 'border-[#3f7d58] bg-[#3f7d58]' : 'border-[#9ba3af] bg-white'
                }`}
              />
              <span>
                <span className="block font-semibold text-[#15191f]">{skill.name}</span>
                <span className="mt-1 block text-sm text-[#425466]">
                  {skill.done ? '完了' : 'start状態ではクリックしてもまだ変わりません'}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function StateTypeStarter() {
  // TODO: const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle') に置き換えます。
  const saveStatus: SaveStatus = 'idle';

  function handleStartSaving() {
    // TODO: saveStatusをsavingにします。
  }

  function handleDone() {
    // TODO: saveStatusをdoneにします。
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">stateの型を見る</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            <code>saveStatus</code> は、<code>idle</code>、<code>saving</code>、<code>done</code>{' '}
            のどれかだけにしたい値です。こういうときは、stateの型を自分で書くと分かりやすくなります。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#fff4c7] px-3 py-2 text-sm font-semibold text-[#6f5615]">
          TODO
        </p>
      </div>

      <div className="mt-5 grid gap-4 rounded-md bg-[#f7f7f2] p-5">
        <p className="rounded-md bg-white p-4 text-sm leading-6 text-[#425466]">
          現在の保存状態:{' '}
          <span className="font-semibold text-[#15191f]">{statusLabels[saveStatus]}</span>
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleStartSaving}
            className="rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white"
          >
            保存中にする
          </button>
          <button
            type="button"
            onClick={handleDone}
            className="rounded-md border border-[#d8d6c8] bg-white px-4 py-2 text-sm font-semibold text-[#15191f]"
          >
            保存済みにする
          </button>
        </div>
      </div>
    </section>
  );
}

function CodeHint() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">このレッスンで目指すコードの形</h2>
      <p className="mt-3 leading-7 text-[#425466]">
        最初から全部を暗記しなくて大丈夫です。まずは、直接書き換えずに新しい値を返す、という考え方を見ます。
      </p>
      <pre className="mt-5 overflow-x-auto rounded-md bg-[#15191f] p-4 text-sm leading-6 text-[#f7f7f2]">
        <code>{`setCount((currentCount) => currentCount + 1);

setProfile((currentProfile) => ({
  ...currentProfile,
  level: currentProfile.level + 1,
}));

setSkills((currentSkills) =>
  currentSkills.map((skill) =>
    skill.id === targetId ? { ...skill, done: !skill.done } : skill,
  ),
);

const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');`}</code>
      </pre>
    </section>
  );
}

function CompletionCheck() {
  return (
    <section className="rounded-md border border-[#d8d6c8] bg-[#fff8df] p-5">
      <h2 className="text-xl font-semibold text-[#15191f]">完成条件</h2>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-[#6f5615] md:grid-cols-2">
        <p className="rounded-md bg-white p-3">+1ボタンでcountが増える</p>
        <p className="rounded-md bg-white p-3">Levelを上げるボタンでprofile.levelが増える</p>
        <p className="rounded-md bg-white p-3">名前の入力がprofile.nameに反映される</p>
        <p className="rounded-md bg-white p-3">skillをクリックするとdoneが切り替わる</p>
        <p className="rounded-md bg-white p-3">保存状態をsaving / doneに変更できる</p>
        <p className="rounded-md bg-white p-3">オブジェクトや配列を直接書き換えていない</p>
      </div>
    </section>
  );
}

export default function HooksUseStatePage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] px-4 py-8 text-[#1f2933] sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="border-b border-[#d8d6c8] pb-8">
          <HomeLink />
          <LessonBadge />
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#15191f] sm:text-5xl">
            useStateの更新パターンを練習する
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#425466]">
            Lesson 5で、stateを更新すると画面が変わることを確認しました。Lesson
            6では、前のstateを使う更新、オブジェクトstate、配列state、stateの型を順番に練習します。
          </p>
        </header>

        <ConceptOverview />
        <LessonFlow />
        <FunctionalUpdateExample />
        <TodoOrder />
        <CounterStarter />
        <ProfileStarter />
        <SkillsStarter />
        <StateTypeStarter />
        <CodeHint />
        <CompletionCheck />
      </div>
    </main>
  );
}
