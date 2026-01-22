import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Midhun – Software Consultant & Tech Solution Architect in UAE",
  description:
    "Midhun, the best consultant in UAE, specializes in innovative software solutions and business growth strategies.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Midhun – Software Sales Consultant & Brand Strategist in UAE",
    description:
      "Midhun, a top consultant in GCC, specializes in innovative software solutions and business growth strategies.",
    url: "https://www.midhuns.com",
    type: "website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/6b288456-d3d5-4584-b2d1-6722c781d941.jpg",
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Midhun – Best Software Consultant: Tech Solution Architect",
    description:
      "Midhun, a top consultant in India, specializes in innovative software solutions and business growth strategies.",
    images:
      "https://opengraph.b-cdn.net/production/images/6b288456-d3d5-4584-b2d1-6722c781d941.jpg",
  },
  verification: {
    google: "9xvf2m08d3Mx88Bi0OX9bypznQydTGs4kcY6cKoN3xk",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-gramm="false">
      <body className={`${inter.className} dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
