import Header from '@/components/Header';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css';

const font = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Monkfish Food',
  description: 'Great Monkfish themed recipes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
