import Link from 'next/link';

export function HomeLink() {
  return (
    <Link
      href="/"
      className="mb-5 inline-flex w-full justify-center rounded-md border border-[#d8d6c8] bg-white px-4 py-2 text-sm font-semibold text-[#15191f] sm:w-fit"
    >
      トップに戻る
    </Link>
  );
}
