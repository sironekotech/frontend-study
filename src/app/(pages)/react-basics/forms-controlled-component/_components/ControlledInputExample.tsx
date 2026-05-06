'use client';

import { useState, type ChangeEvent } from 'react';

export function ControlledInputExample() {
  const [learnerName, setLearnerName] = useState<string>('');

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setLearnerName(event.target.value);
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">完成例を1つだけ見る</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            ここだけは完成形です。入力欄の値をstateで持ち、入力するたびにstateを更新しています。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-2 text-sm font-semibold text-[#2f6848]">
          完成例
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-md bg-[#f7f7f2] p-5">
          <label className="grid gap-2 text-sm font-semibold text-[#425466]">
            名前
            <input
              value={learnerName}
              onChange={handleNameChange}
              placeholder="React learner"
              className="min-h-11 rounded-md border border-[#d8d6c8] bg-white px-3 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
            />
          </label>
          <p className="mt-4 rounded-md bg-white p-4 text-sm leading-6 text-[#425466]">
            stateの値:{' '}
            <span className="font-semibold text-[#15191f]">
              {learnerName || 'まだ入力されていません'}
            </span>
          </p>
        </div>

        <div className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">対応するコード</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`const [learnerName, setLearnerName] = useState<string>('');

function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
  setLearnerName(event.target.value);
}

<input
  value={learnerName}
  onChange={handleNameChange}
/>`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
