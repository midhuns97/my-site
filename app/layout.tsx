import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Midhun S | Software Consultant',
  description: 'Empowering Businesses with Custom Software Solutions & Strategic Partnerships',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Midhun S | Software Consultant India | Business Strategist</title>
        <meta name="title" content="Midhun S | Software Consultant India | Business Strategist" />
        <meta name="description" content="Empowering Businesses with Custom Software Solutions & Strategic Partnerships" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.midhuns.com/" />
        <meta property="og:title" content="Midhun S | Software Consultant India | Business Strategist" />
        <meta property="og:description" content="Empowering Businesses with Custom Software Solutions & Strategic Partnerships" />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.midhuns.com/" />
        <meta property="twitter:title" content="Midhun S | Software Consultant India | Business Strategist" />
        <meta property="twitter:description" content="Empowering Businesses with Custom Software Solutions & Strategic Partnerships" />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

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