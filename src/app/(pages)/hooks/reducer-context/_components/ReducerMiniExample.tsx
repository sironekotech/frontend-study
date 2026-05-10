'use client';

import { useReducer } from 'react';

type CounterAction = {
  type: 'increment' | 'decrement' | 'reset';
};

function counterReducer(count: number, action: CounterAction) {
  if (action.type === 'increment') {
    return count + 1;
  }

  if (action.type === 'decrement') {
    return count - 1;
  }

  return 0;
}

export function ReducerMiniExample() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">完成例を1つだけ見る</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            <code>dispatch</code> でactionを送り、<code>counterReducer</code>{' '}
            が次のcountを返します。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-2 text-sm font-semibold text-[#2f6848]">
          完成例
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-md bg-[#f7f7f2] p-5">
          <p className="text-4xl font-bold text-[#15191f]">{count}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <button
              type="button"
              onClick={() => dispatch({ type: 'decrement' })}
              className="rounded-md border border-[#d8d6c8] bg-white px-4 py-2 text-sm font-semibold text-[#15191f]"
            >
              -1
            </button>
            <button
              type="button"
              onClick={() => dispatch({ type: 'increment' })}
              className="rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white"
            >
              +1
            </button>
            <button
              type="button"
              onClick={() => dispatch({ type: 'reset' })}
              className="rounded-md border border-[#d8d6c8] bg-white px-4 py-2 text-sm font-semibold text-[#15191f]"
            >
              reset
            </button>
          </div>
        </div>

        <div className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">対応するコード</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`function counterReducer(count, action) {
  if (action.type === 'increment') {
    return count + 1;
  }

  if (action.type === 'decrement') {
    return count - 1;
  }

  return 0;
}`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
