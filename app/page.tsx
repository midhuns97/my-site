import Head from 'next/head';
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq"
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Articles from '@/components/articles';
import { homeFaq } from '@/const/faq';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Articles/>
      <Faq Faq={homeFaq}/>
      <Contact />
      <Footer />
    </main>
  );
}
