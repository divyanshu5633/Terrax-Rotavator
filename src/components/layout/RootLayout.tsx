import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BackToTop } from '../common/BackToTop';

interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }} id="main-content">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
