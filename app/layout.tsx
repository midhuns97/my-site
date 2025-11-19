import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Midhun – Software Consultant & Tech Solution Architect in UAE',
  description: 'Midhun, a top consultant in GCC, specializes in innovative software solutions and business growth strategies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-gramm="false">

       <head>
        {/* ✅ Required Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Midhun, a top consultant in UAE, specializes in innovative software solutions and brand growth strategies." />

        {/* ✅ Google Site Verification */}
        <meta name="google-site-verification" content="9xvf2m08d3Mx88Bi0OX9bypznQydTGs4kcY6cKoN3xk" />

        {/* ✅ Open Graph Meta */}
        <meta property="og:title" content="Midhun – Software Sales Consultant & Brand Strategist in UAE" />
        <meta property="og:description" content="Midhun, a top consultant in GCC, specializes in innovative software solutions and business growth strategies." />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/6b288456-d3d5-4584-b2d1-6722c781d941.jpg?token=qVW3JyhpiP8zehViINtjO9RQqJu-2CQ-R_vA13umBus&height=675&width=1200&expires=33280895158" />
        <meta property="og:url" content="https://www.midhuns.com" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Midhun – Best Software Consultant : Tech Solution Architect" />
        <meta name="twitter:description" content="Midhun, a top consultant in India, specializes in innovative software solutions and business growth strategies." />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/6b288456-d3d5-4584-b2d1-6722c781d941.jpg?token=qVW3JyhpiP8zehViINtjO9RQqJu-2CQ-R_vA13umBus&height=675&width=1200&expires=33280895158" />

        {/* ✅ Title Tag */}
        <title>Midhun – Software Sales Consultant & Brand Strategist in UAE</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
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