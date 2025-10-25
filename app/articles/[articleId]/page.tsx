// app/articles/[articleId]/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Contact } from "lucide-react";
import { Footer } from "react-day-picker";

const articles = [
  {
    id: "power-of-digital-strategy",
    title: "The Power of Digital Strategy in Modern Businesses",
    excerpt: "Learn how digital strategy helps modern businesses scale, automate, and stay ahead of competition.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop",
    date: "Oct 2025",
  },
  {
    id: "building-software-partnerships",
    title: "Building Strong Software Partnerships for Growth",
    excerpt: "Partnerships play a key role in scaling tech companies globally. Here's how to build effective ones.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1974&auto=format&fit=crop",
    date: "Sep 2025",
  },
  {
    id: "nextjs-performance-guide",
    title: "Next.js Performance Guide: Speed Up Your Website",
    excerpt: "Simple optimizations to make your Next.js website faster, smoother, and SEO-friendly.",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1974&auto=format&fit=crop",
    date: "Aug 2025",
  },
];

// Tell Next.js all dynamic routes for static export
export function generateStaticParams() {
  return articles.map((article) => ({
    articleId: article.id,
  }));
}

export default function ArticleDetail() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find((a) => a.id === articleId);

  if (!article) return <p className="text-center py-20">Article not found.</p>;

  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">{article.date}</p>

          <div className="relative w-full h-72 mb-8 rounded-lg overflow-hidden">
            <Image src={article.image} alt={article.title} fill className="object-cover" />
          </div>

          <div className="prose prose-invert max-w-none">
            <p>{article.excerpt}</p>
          </div>

          <div className="mt-12">
            <Link href="/#articles" className="text-purple-500 hover:underline">
              ← Back to Articles
            </Link>
          </div>
        </div>
      </main>

      <Contact />
      <Footer />
    </>
  );
}
