"use client";

// components/Articles.tsx

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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

const Articles = () => {
  return (
    <section id="articles" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, stories, and strategies from my experiences in tech, partnerships, and digital innovation.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex overflow-x-auto space-x-6 pb-4 no-scrollbar snap-x snap-mandatory"
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="snap-center shrink-0 w-80"
            >
              <Link href={`/articles/${article.id}`}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 w-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-xs text-purple-500 mb-2">{article.date}</p>
                    <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
