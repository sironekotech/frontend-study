'use client';

import { useRef, useState } from 'react';

export function FocusMiniExample() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('まだfocusしていません');

  function handleFocusEmailInput() {
    emailInputRef.current?.focus();
    setMessage('email入力欄にfocusしました');
  }

  return (
    <section className="rounded-md border border-[#d8d6c8] bg-white p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#15191f]">完成例を1つだけ見る</h2>
          <p className="mt-3 leading-7 text-[#425466]">
            ボタンを押すと、<code>useRef</code> で覚えているinputへfocusします。
            まずは小さい完成例で、refとDOMがつながる流れを見ます。
          </p>
        </div>
        <p className="w-fit rounded-md bg-[#e3f0e8] px-3 py-2 text-sm font-semibold text-[#2f6848]">
          完成例
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-md bg-[#f7f7f2] p-5">
          <label className="grid gap-2 text-sm font-semibold text-[#425466]">
            email
            <input
              ref={emailInputRef}
              type="email"
              placeholder="react@example.com"
              className="min-h-11 rounded-md border border-[#d8d6c8] bg-white px-3 text-base text-[#15191f] outline-none focus:border-[#3f7d58]"
            />
          </label>
          <button
            type="button"
            onClick={handleFocusEmailInput}
            className="mt-4 rounded-md bg-[#15191f] px-4 py-2 text-sm font-semibold text-white"
          >
            email入力欄にfocusする
          </button>
          <p className="mt-4 rounded-md bg-white p-3 text-sm leading-6 text-[#425466]">{message}</p>
        </div>

        <div className="rounded-md bg-[#15191f] p-4">
          <p className="text-sm font-semibold text-[#82d39b]">対応するコード</p>
          <pre className="mt-3 overflow-x-auto text-sm leading-6 text-[#f7f7f2]">
            <code>{`const emailInputRef = useRef<HTMLInputElement>(null);

function handleFocusEmailInput() {
  emailInputRef.current?.focus();
}`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
