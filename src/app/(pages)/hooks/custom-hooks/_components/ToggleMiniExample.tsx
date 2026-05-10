'use client';

import { useState } from 'react';

function useToggle() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  return {
    isOpen,
    handleToggle,
  };
}

export function ToggleMiniExample() {
  const { isOpen, handleToggle } = useToggle();

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">完成例を1つだけ見る</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            <code>useToggle</code> は、開いているかどうかのstateと、切り替える関数をまとめたcustom
            hookです。
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
            onClick={handleToggle}
            className="rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white"
          >
            表示を切り替える
          </button>
          <p className="mt-4 rounded-md bg-white p-3 text-sm leading-6 text-[#425466]">
            {isOpen ? 'custom hookから返されたisOpenがtrueです。' : '今は閉じています。'}
          </p>
        </div>

        <div className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">対応するコード</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`function useToggle() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }

  return { isOpen, handleToggle };
}`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
