'use client';

import { useEffect, useState, type ChangeEvent } from 'react';

const titleLabels = {
  basic: 'useEffectの基本',
  dependency: 'いつやるかリスト',
  cleanup: '片付け',
};

type TitleKey = keyof typeof titleLabels;

export function EffectTitleExample() {
  const [titleKey, setTitleKey] = useState<TitleKey>('basic');
  const nextTitle = `Lesson 9 - ${titleLabels[titleKey]}`;

  useEffect(() => {
    document.title = nextTitle;
  }, [nextTitle]);

  function handleTitleChange(event: ChangeEvent<HTMLSelectElement>) {
    setTitleKey(event.target.value as TitleKey);
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">完成例を1つだけ見る</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            selectの値が変わるとstateが変わり、その後に <code>useEffect</code>{' '}
            が動いてブラウザのタブタイトルを変更します。画面を出したあとにやることの小さい例です。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-2 text-sm font-semibold text-[#2f6848]">
          完成例
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-md bg-[#f7f7f2] p-5">
          <label className="grid gap-2 text-sm font-semibold text-[#425466]">
            タブタイトルに入れる言葉
            <select
              value={titleKey}
              onChange={handleTitleChange}
              className="min-h-11 rounded-md border border-[#d8d6c8] bg-white px-3 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
            >
              {Object.entries(titleLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <p className="mt-4 rounded-md bg-white p-4 text-sm leading-6 text-[#425466]">
            effectの結果:{' '}
            <span className="font-semibold text-[#15191f]">
              ブラウザのタブタイトルを「{nextTitle}」に変更します
            </span>
          </p>
        </div>

        <div className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">対応するコード</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`useEffect(() => {
  document.title = nextTitle;
}, [nextTitle]);`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
