'use client';

import { useState } from 'react';

export function TopLevelHookExample() {
  const [showDetails, setShowDetails] = useState(false);

  function handleToggleDetails() {
    setShowDetails((currentShowDetails) => !currentShowDetails);
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">完成例を1つだけ見る</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            <code>useState</code>{' '}
            はコンポーネントのトップレベルで呼びます。条件によって変えるのは、Hookを呼ぶ場所ではなく、表示するJSXです。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-2 text-sm font-semibold text-[#2f6848]">
          完成例
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-md bg-[#f7f7f2] p-5">
          <button
            type="button"
            onClick={handleToggleDetails}
            className="rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white"
          >
            表示を切り替える
          </button>
          <p className="mt-4 rounded-md bg-white p-3 text-sm leading-6 text-[#425466]">
            {showDetails
              ? 'Hookは同じ場所で呼んだまま、JSXの表示だけを切り替えています。'
              : '詳細はまだ非表示です。'}
          </p>
        </div>

        <div className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">対応するコード</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`const [showDetails, setShowDetails] = useState(false);

return (
  <p>{showDetails ? '詳細を表示' : '詳細は非表示'}</p>
);`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
