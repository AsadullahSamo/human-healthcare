import type { Metadata } from 'next';
import { Inter, Montserrat, Poppins, DM_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from '../components/Providers';
import { Header } from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Human Healthcare',
  description: 'Professional healthcare services at your doorstep',
  icons: {
    icon: '/images/favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${montserrat.variable} ${poppins.variable} ${dmSans.variable}`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
