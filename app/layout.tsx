import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Midhun – Tech-Driven Growth Consultant',
  description: 'Midhun, a top consultant in India, specializes in innovative software solutions and business growth strategies.',
  keywords: [
    'Midhun',
    'best consultant in India',
    'software solutions expert',
    'business growth strategies',
    'digital transformation',
    'strategic partnerships',
    'business consultant India',
    'tech entrepreneur',
  ],
  authors: [{ name: 'Midhun S' }],
  openGraph: {
    title: 'Midhun – Tech-Driven Growth Consultant',
    description:
      'Midhun, a top consultant in India, specializes in innovative software solutions and business growth strategies.',
    url: 'https://www.midhuns.com',
    type: 'website',
    images: [{url: 'https://www.midhuns.com/myimage.jpg',},
    ],
  },
};

export default function RootLayout({
children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="9xvf2m08d3Mx88Bi0OX9bypznQydTGs4kcY6cKoN3xk"
        />
      </head>
      <body className={`${inter.className} dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}