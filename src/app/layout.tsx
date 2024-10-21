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
  return (
    <html lang="en">
      <body className={`${notoSansJp.className} relative antialiased`}>
        <Header />
        {children}
        <Footer />
        <GoTop />
      </body>
    </html>
  );
}
