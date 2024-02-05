import { ReactNode } from 'react';
import Head from 'next/head';

import '../styles/globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Monkfish Food',
  description: 'All Monkfish restaurant.',
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Monkfish Food</title>
        <meta name="description" content="All Monkfish restaurant." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
    </>
  );
}
