import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

// Import des favicons
import favicon from '@/public/favicon/favicon.ico';
import favicon16 from '@/public/favicon/favicon-16x16.png';
import favicon32 from '@/public/favicon/favicon-32x32.png';
import appleTouchIcon from '@/public/favicon/apple-touch-icon.png';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Valh-Code | Développeur Full Stack',
  description: 'Portfolio de Valentin, développeur full stack web et mobile.',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#5bbad5'
      },
      {
        rel: 'manifest',
        url: '/favicon/site.webmanifest'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex flex-col">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}