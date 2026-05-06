'use client';

import { useState } from 'react';

export function FunctionalUpdateExample() {
  const [count, setCount] = useState<number>(0);

  function handleIncrease() {
    setCount((currentCount) => {
      const nextCount = currentCount + 1;
      return nextCount;
    });
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">完成例を1つだけ見る</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            ここだけは完成形です。Reactが今覚えている最新のcountを受け取り、次に表示するcountを返しています。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-2 text-sm font-semibold text-[#2f6848]">
          完成例
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-md bg-[#f7f7f2] p-5">
          <p className="text-sm font-semibold text-[#425466]">動くcount</p>
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
        </div>

        <div className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">対応するコード</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`const [count, setCount] = useState<number>(0);

function handleIncrease() {
  setCount((currentCount) => {
    const nextCount = currentCount + 1;
    return nextCount;
  });
}`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
