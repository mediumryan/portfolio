'use client';

import { useState } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Noto_Sans_JP } from 'next/font/google';
import GoTop from '@/components/GoTop';

const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  return (
    <html lang="en">
      <body className={`${notoSansJp.className} relative antialiased`}>
        {showAnimation ? (
          <IntroAnimation onAnimationComplete={handleAnimationComplete} />
        ) : (
          <>
            <Header />
            {children}
            <Footer />
            <GoTop />
          </>
        )}
      </body>
    </html>
  );
}
