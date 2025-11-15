// app/articles/[articleId]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/const/data";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// Required for static export
export function generateStaticParams() {
  return articles.map((article) => ({
    articleId: article.id,
  }));
}

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const { articleId } = await params;
  const article = articles.find((a) => a.id === articleId);

  if (!article) return <p className="text-center py-20">Article not found.</p>;

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16 pt-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">{article.date}</p>

          <div className="relative w-full h-72 mb-8 rounded-lg overflow-hidden">
            <Image src={article.image} alt={article.title} fill className="object-cover" />
          </div>

          <div className="prose prose-invert max-w-none">
            <p>{article.excerpt}</p>
            <div dangerouslySetInnerHTML={{ __html: article.content ?? "" }} />
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