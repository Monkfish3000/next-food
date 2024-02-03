import { ReactNode } from 'react';

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
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
