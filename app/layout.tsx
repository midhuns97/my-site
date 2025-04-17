import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Midhun – Tech-Driven Growth Consultant',
  description: 'Midhun, a top consultant in India, specializes in innovative software solutions and business growth strategies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        {/* ✅ Required Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Midhun, a top consultant in India, specializes in innovative software solutions and business growth strategies." />

        {/* ✅ Google Site Verification */}
        <meta name="google-site-verification" content="9xvf2m08d3Mx88Bi0OX9bypznQydTGs4kcY6cKoN3xk" />

        {/* ✅ Open Graph Meta */}
        <meta property="og:title" content="Midhun – Tech-Driven Growth Consultant" />
        <meta property="og:description" content="Midhun, a top consultant in India, specializes in innovative software solutions and business growth strategies." />
        <meta property="og:image" content="https://www.midhuns.com/myimage.jpg" />
        <meta property="og:url" content="https://www.midhuns.com" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Midhun – Tech-Driven Growth Consultant" />
        <meta name="twitter:description" content="Midhun, a top consultant in India, specializes in innovative software solutions and business growth strategies." />
        <meta name="twitter:image" content="https://www.midhuns.com/myimage.jpg" />

        {/* ✅ Title Tag */}
        <title>Midhun – Tech-Driven Growth Consultant</title>
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