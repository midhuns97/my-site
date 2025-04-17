import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Midhun S | Software Consultant',
  description: 'Empowering Businesses with Custom Software Solutions & Strategic Partnerships',
};

export default function RootLayout({
children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="google-site-verification" content="9xvf2m08d3Mx88Bi0OX9bypznQydTGs4kcY6cKoN3xk" />
      </Head>
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