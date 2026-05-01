import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'frontend-study',
  description: 'React と Next.js を学ぶための教材サイト',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
