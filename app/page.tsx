import Head from 'next/head';
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Midhun S, one of the best consultants in India" />
        <meta name="keywords" content="Midhun, best consultant in India, software solutions expert, business growth strategies, digital transformation, strategic partnerships, business consultant India, tech entrepreneur"/>
        <meta name="author" content="Midhun S" />
        <meta name="google-site-verification" content="9xvf2m08d3Mx88Bi0OX9bypznQydTGs4kcY6cKoN3xk" />
        
        {/* Open Graph Tags (for social media sharing) */}
        <meta property="og:title" content="Midhun - Best Consultant in India" />
        <meta property="og:description" content="Midhun, a top consultant in India, specializes in innovative software solutions and business growth strategies." />
        <meta property="og:image" content="https://www.midhuns.com/myimage.jpg" />
        <meta property="og:url" content="https://www.midhuns.com" />
        <meta property="og:type" content="website" />

        {/* Title Tag */}
        <title>Midhun – Tech-Driven Growth Consultant</title>
      </Head>
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
    </>

  );
}
