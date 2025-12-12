"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { partnershipFaq } from "@/const/faq";
import Navbar from "@/components/navbar";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Faq from "@/components/faq";

import {
  Handshake,
  Users,
  Briefcase,
  TrendingUp,
  Globe,
  Zap,
  Network,
  Shield,
  Award,
  ChevronDown,
  ArrowRight,
  Lightbulb,
  BarChart3,
  CheckCircle2
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/* ----------------------------------------------------------
   Animated Counter Component (required for counters)
---------------------------------------------------------- */
function AnimatedCounter({ end, duration = 2000, suffix = "", className = "" }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        start = end;
      }
      setValue(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <div className={className}>{value + suffix}</div>;
}

/* ----------------------------------------------------------
   Motion Animation
---------------------------------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

/* ----------------------------------------------------------
   PAGE STARTS
---------------------------------------------------------- */
export default function PartnershipDevelopmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  /* ------------------------------------------------------
     SERVICES
  ------------------------------------------------------ */
  const services = [
    {
      icon: Handshake,
      title: "Strategic Alliance Formation",
      highlight: "Building Bridges of Growth",
      desc:
        "We help you identify, structure, and launch alliances that unlock new markets, enhance product capabilities, and multiply your business impact.",
      bullets: [
        "Partner Identification & Vetting",
        "Alliance Structuring & Negotiation",
        "Market Co-entry Strategy",
        "Long-term Value Optimization",
      ],
    },
    {
      icon: Users,
      title: "Partnership Management",
      highlight: "Maintaining Strong, Thriving Relationships",
      desc:
        "Great partnerships don’t manage themselves. We create governance systems, relationship models, and performance frameworks to ensure long-term success.",
      bullets: [
        "Performance Dashboards",
        "Executive Alignment Cadence",
        "Conflict Resolution",
        "Joint Value Realization Mapping",
      ],
    },
    {
      icon: Briefcase,
      title: "Joint Venture Development",
      highlight: "Shared Vision → Shared Success",
      desc:
        "We design joint ventures that bring together shared strengths, reduce risks, and accelerate innovation through collaborative execution.",
      bullets: [
        "JV Structure & Governance",
        "Due Diligence Process",
        "Financial & Operational Modeling",
        "Exit & Expansion Planning",
      ],
    },
  ];

  /* ------------------------------------------------------
     BENEFITS
  ------------------------------------------------------ */
  const benefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      desc: "Partnership-driven revenue grows 35% faster in collaborative ecosystems.",
    },
    {
      icon: Globe,
      title: "Market Expansion",
      desc: "Enter new regions and industries without heavy capital expenses.",
    },
    {
      icon: Zap,
      title: "Accelerated Innovation",
      desc: "Co-create faster through shared technologies & product insights.",
    },
    {
      icon: Shield,
      title: "Risk Distribution",
      desc: "Reduce operational, financial, and market risks through shared investment.",
    },
    {
      icon: Network,
      title: "Capability Expansion",
      desc: "Access complementary tech, talent, and infrastructure instantly.",
    },
    {
      icon: Award,
      title: "Competitive Edge",
      desc: "Stand out with alliances that create unique value advantages.",
    },
  ];

  /* ------------------------------------------------------
     PROCESS STEPS
  ------------------------------------------------------ */
  const process = [
    {
      step: "01",
      title: "Insight & Discovery",
      desc:
        "We begin by deeply understanding your goals, business reality, capabilities, and competitive position.",
    },
    {
      step: "02",
      title: "Strategic Fit Analysis",
      desc:
        "We map your strengths to partnership opportunities and highlight where collaboration creates the highest value.",
    },
    {
      step: "03",
      title: "Partner Identification",
      desc:
        "We find and evaluate potential partners whose capabilities, culture, and vision align with yours.",
    },
    {
      step: "04",
      title: "Structuring & Negotiation",
      desc:
        "Craft clear agreements, governance models, and shared KPIs—designed for long-term fairness and clarity.",
    },
    {
      step: "05",
      title: "Activation & Integration",
      desc:
        "Launch the partnership with structured onboarding, alignment processes, and integrated workflows.",
    },
    {
      step: "06",
      title: "Continuous Management",
      desc:
        "Monitor health, optimize collaboration, resolve conflicts, and guide expansion opportunities.",
    },
  ];

  /* ------------------------------------------------------
     PAGE UI START
  ------------------------------------------------------ */
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[480px] h-[480px] bg-purple-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-blue-500/20 blur-3xl rounded-full" />
          <div className="absolute inset-y-0 left-1/3 w-[1px] bg-gradient-to-b from-transparent via-purple-500/15 to-transparent" />
          <div className="absolute inset-y-0 right-1/4 w-[1px] bg-gradient-to-b from-transparent via-blue-500/15 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative text-center max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-6"
          >
            <span className="inline-flex gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-background/40 backdrop-blur text-xs uppercase tracking-widest text-muted-foreground">
              <Lightbulb className="w-3.5 h-3.5" /> Partnership Development
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Partnerships That{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
                Transform Opportunity Into Growth
              </span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              In today’s connected economy, the fastest-growing companies are not the ones
              that stand alone—but those that collaborate strategically.  
              This is where your next chapter begins.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 text-sm rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md hover:opacity-90 transition inline-flex items-center gap-2"
              >
                Start Your Partnership Journey
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="px-4 py-3 text-sm text-muted-foreground hover:text-primary transition inline-flex items-center justify-center rounded-full hover:bg-primary/10"
              >
                Explore services →
              </a>
            </div>
          </motion.div>
        </div>
        <div className="py-8 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
          </div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                { end: 20, label: "Strategic Alliances Formed" },
                { end: 35, suffix: "%", label: "Average Revenue Growth" },
                { end: 15, label: "Successful Joint Ventures" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative group p-6 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm"
                >
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur" />

                  <div className="relative z-10 space-y-2">
                    <AnimatedCounter
                      end={item.end}
                      suffix={item.suffix}
                      className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                    />

                    <p className="text-muted-foreground text-sm md:text-base">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* (Everything below remains EXACTLY as you wrote it — no changes) */}

      {/* SECTION 1 */}
      <section className="py-10 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-2xl md:text-3xl font-bold text-center mb-6"
          >
            Why Partnerships Shape the Future of Business
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed"
          >
            Software companies, SaaS products, digital agencies, and innovation-first brands
            are entering a new era—an era where partnerships replace cold outreach, shared value
            overtakes competition, and rapid expansion becomes possible through aligned ecosystems.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — SERVICES */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Partnership Services Built for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                High-Impact Growth
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A complete lifecycle approach—from discovering possibilities to maintaining
              long-term success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((srv, i) => (
              <motion.div
                key={srv.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
              >
                <div className="relative group h-full">
                  <div className="absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-400/10 rounded-2xl blur transition" />

                  <Card className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur p-6 h-full flex flex-col">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-4">
                      <srv.icon className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="text-lg font-semibold">{srv.title}</h3>
                    <p className="text-xs uppercase text-primary tracking-wide mt-1 mb-3">
                      {srv.highlight}
                    </p>

                    <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
                      {srv.desc}
                    </p>

                    <div className="mt-4 space-y-2">
                      {srv.bullets.map((b, idx) => (
                        <div
                          key={idx}
                          className="flex gap-2 items-start text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                          {b}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — BENEFITS */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-purple-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-blue-500/10 blur-3xl rounded-full" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              What Strategic Partnerships Make Possible
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Collaboration multiplies capabilities. These benefits are not theoretical—they are proven outcomes across industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                className="p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROCESS */}
      <section className="py-20 border-t border-border/60 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              The Partnership Journey, Step by Step
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-3">
              A guided, collaborative and transparent flow that ensures clarity at every stage.
            </p>
          </motion.div>

          <div className="space-y-10">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                custom={i}
                className="relative pl-10 border-l border-border/40"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white shadow">
                  {p.step}
                </div>

                <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10" />
        </div>

        <div className="container mx-auto px-4 max-w-3xl text-center">
          <BarChart3 className="w-16 h-16 mx-auto text-primary mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to scale through high-impact partnerships?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let’s discuss how strategic collaboration can accelerate your business growth.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow hover:opacity-90 inline-flex gap-2 items-center text-sm"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/midhuns/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-border text-sm inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq Faq={partnershipFaq} />

      <Contact />
      <Footer />
    </main>
  );
}
