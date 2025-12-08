// app/services/brand/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Target,
  BarChart3,
  Lightbulb,
  Users,
  Brain,
  Globe2,
  Sparkles,
  Rocket,
  CheckCircle2,
  Share2,
  MessageCircle,
  PlayCircle,
  MousePointerClick,
  BriefcaseBusiness
} from "lucide-react";

import Navbar from "@/components/navbar";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Faq from "@/components/faq";
import { brandFaq } from "@/const/faq";
// Optional: if you already created this helper, you can use it in some places
// import { SocialIcon } from "@/components/social-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function BrandBuildingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background grid + gradients + subtle "social" hints */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:28px_28px]" />
          <div className="absolute -top-32 left-0 w-80 h-80 bg-purple-500/25 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl" />
          <MessageCircle className="absolute top-24 right-10 w-10 h-10 text-purple-400/40" />
          <Share2 className="absolute bottom-20 left-10 w-9 h-9 text-blue-400/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-background/40 backdrop-blur text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              <Megaphone className="w-3.5 h-3.5 text-purple-400" />
              Brand Strategy • Performance • O2O
            </span>

            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Build a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
                Powerful Brand Identity & 
              </span>{" "}
            Brand Strategy & Growth Tools
            </h1>

            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-8">
                Enable B2B brands and luxury B2C businesses across India and the UAE to
                scalable brand and growth framework — powered by brand strategy, performance marketing, revenue genration, and integrated O2O journeys.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/midhun-s/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg shadow-purple-500/25 transition"
              >
                Book a Brand Strategy Call
                <Rocket className="w-4 h-4" />
              </a>
              <a
                href="/#projects"
                className="text-sm text-muted-foreground hover:text-primary transition"
              >
                Explore brands & campaigns I&apos;ve worked on →
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm text-muted-foreground">
              <div className="rounded-xl border border-border/50 bg-background/40 px-3 py-3">
                <div className="font-semibold text-foreground mb-1">
                  B2B + Luxury B2C
                </div>
                Tech companies & premium interior / lifestyle brands
              </div>
              <div className="rounded-xl border border-border/50 bg-background/40 px-3 py-3">
                <div className="font-semibold text-foreground mb-1">
                  Brand + Performance
                </div>
                Positioning, messaging, funnels & always-on campaigns
              </div>
              <div className="rounded-xl border border-border/50 bg-background/40 px-3 py-3">
                <div className="font-semibold text-foreground mb-1">
                  O2O / O20 Journeys
                </div>
                Online → showroom visits & offline → digital audiences
              </div>
              <div className="rounded-xl border border-border/50 bg-background/40 px-3 py-3">
                <div className="font-semibold text-foreground mb-1">
                  Platforms
                </div>
                Meta, Google, YouTube, LinkedIn, plus content & SEO
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BRAND FOUNDATIONS */}
      <section className="py-16 relative">
        {/* subtle background elements */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
          <Sparkles className="absolute top-10 right-10 w-8 h-8 text-purple-300/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Brand Building that starts with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                clarity, not creatives
              </span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Before we talk about campaigns, we align your positioning,
              perception and promise — so every ad, reel, landing page and
              salesperson tells the same story.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "Brand Positioning & Narrative",
                desc: "What you stand for, who you serve, why they should care — simplified into a story your team can actually use.",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Customer Psychology & Differentiation",
                desc: "Mapping how your ideal buyers think, compare and decide — then shaping offers and messaging around that.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Brand Systems & Consistency",
                desc: "Tone, content pillars, proof, visuals and journeys connected into one repeatable system—not random posts.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                variants={fadeUp}
                className="relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/18 to-blue-500/12 flex items-center justify-center text-primary mb-3">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* BRAND CLARITY PYRAMID */}
        <section className="py-20 border-t border-border/60 bg-background/60 relative">
        {/* Background subtle pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff16_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">

            {/* Header */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-12"
            >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                The{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Brand Clarity Pyramid
                </span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
                A structured framework I use so founders, sales teams & marketing teams
                speak the same language — creating stronger ads, clearer messaging, and better conversions.
            </p>
            </motion.div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* LEFT: PYRAMID VISUAL */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="flex flex-col items-center space-y-4"
            >
                {/* LEVEL 4 */}
                <div className="w-[95%] pyramid-block">
                <h3>LEVEL 4 — Campaigns & Creatives</h3>
                <p>Ads, reels, landing pages, sales scripts & content execution.</p>
                </div>

                {/* LEVEL 3 */}
                <div className="w-[80%] pyramid-block">
                <h3>LEVEL 3 — Messaging & Offers</h3>
                <p>Your hooks, value proposition, proof & communication angle.</p>
                </div>

                {/* LEVEL 2 */}
                <div className="w-[65%] pyramid-block">
                <h3>LEVEL 2 — Ideal Customer & Problems</h3>
                <p>Who you target and the core problems/desires you solve.</p>
                </div>

                {/* LEVEL 1 */}
                <div className="w-[50%] pyramid-block">
                <h3>LEVEL 1 — Brand Foundation</h3>
                <p>Positioning, category, promise, differentiators & narrative.</p>
                </div>
            </motion.div>

            {/* RIGHT: TEXT EXPLANATION */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="space-y-5"
            >
                <h3 className="text-lg font-semibold text-foreground">
                Why the Pyramid Matters
                </h3>

                <p className="text-sm md:text-base text-muted-foreground">
                Most campaigns fail not because of targeting or budget — but because the foundation is unclear.
                When this pyramid is aligned, marketing, sales and content all reinforce the same story.
                </p>

                <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>• Messaging becomes sharper & instantly memorable</li>
                <li>• Creative approvals become faster and more consistent</li>
                <li>• Funnels convert higher with fewer drop-offs</li>
                <li>• Sales teams communicate value more confidently</li>
                <li>• Agencies & designers get clearer direction</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-6">
                How This Framework Helps Your Brand
                </h3>

                <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>• Removes confusion across marketing + sales</li>
                <li>• Ensures audiences understand your real value</li>
                <li>• Helps position your brand above competitors</li>
                <li>• Creates consistency across all digital channels</li>
                </ul>
            </motion.div>

            </div>
        </div>
        </section>

      {/* STRATEGY + O2O / O20 JOURNEY MAP */}
      <section className="py-16 relative">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff12_1px,transparent_1px)] bg-[size:26px_26px]" />
          <PlayCircle className="absolute top-14 right-16 w-9 h-9 text-blue-300/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-4xl mx-auto mb-10 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Brand Strategy Development &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                O2O Journeys
              </span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              I design the journey from first impression to enquiry, visit and
              repeat purchases — whether your buyer discovers you online or
              offline first.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1.1fr] gap-10">
            {/* Steps / process */}
            <div className="space-y-6">
              {[
                {
                  title: "1. Brand & Growth Objectives",
                  desc: "Define what matters most right now: awareness, qualified leads, showroom walk-ins, pipeline velocity or repeat purchases.",
                },
                {
                  title: "2. Funnel & Journey Design",
                  desc: "Map out your ideal buyer’s journey across Meta, Google, YouTube, LinkedIn, website, WhatsApp and showroom touchpoints.",
                },
                {
                  title: "3. O2O (Online → Offline) Strategy",
                  desc: "Use content, ads and automation to drive booking requests, calls and store visits — especially important for high-ticket B2B and luxury products.",
                },
                {
                  title: "4. O20 (Offline → Online) Strategy",
                  desc: "Convert offline visitors into long-term digital audiences using QR journeys, follow-up campaigns, retargeting pools and CRM workflows.",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={i}
                  variants={fadeUp}
                  className="relative pl-8"
                >
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-background" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Journey map card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeUp}
              className="relative mt-4 md:mt-8"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/25 via-blue-500/15 to-transparent blur-xl opacity-70" />
              <div className="relative rounded-2xl bg-card/90 border border-border/70 p-6 flex flex-col gap-4">
                <h3 className="text-sm font-semibold mb-1">
                  O2O Journey Map Overview
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  A visual snapshot of how strangers become visitors, buyers and
                  eventually loyal promoters of your brand.
                </p>

                <div className="grid grid-cols-3 gap-3 text-[11px] text-muted-foreground">
                  <div className="rounded-xl border border-border/60 bg-background/70 p-3">
                    <h4 className="font-semibold text-foreground mb-1 text-xs">
                      ONLINE TOUCHPOINTS
                    </h4>
                    <ul className="space-y-1">
                      <li>• Meta & Google Ads</li>
                      <li>• YouTube videos</li>
                      <li>• Instagram / LinkedIn content</li>
                      <li>• Website & landing pages</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/80 p-3 flex flex-col items-center justify-center gap-2">
                    <MousePointerClick className="w-5 h-5 text-purple-400" />
                    <p className="text-center">
                      Tracking, lead capture, nurturing & follow-up journeys
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/70 p-3">
                    <h4 className="font-semibold text-foreground mb-1 text-xs">
                      OFFLINE TOUCHPOINTS
                    </h4>
                    <ul className="space-y-1">
                      <li>• Showroom visits</li>
                      <li>• Sales calls & demos</li>
                      <li>• Events & pop-ups</li>
                      <li>• After-sales experiences</li>
                    </ul>
                  </div>
                </div>

                <p className="text-[11px] text-muted-foreground mt-2">
                  Each project includes a customized journey map so your internal
                  team and any agency partners work from the same blueprint.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE MARKETING PLATFORMS */}
      <section className="py-16 relative">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Performance Marketing on{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Meta, Google, YouTube & LinkedIn
              </span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              I blend brand thinking with performance execution — so your
              campaigns don&apos;t just get clicks, they create demand, walk-ins
              and qualified conversations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Megaphone className="w-5 h-5" />,
                title: "Meta & Social Ads",
                desc: "Full-funnel campaigns using Facebook & Instagram to drive awareness, leads, and remarketing journeys.",
              },
              {
                icon: <Globe2 className="w-5 h-5" />,
                title: "Google Ads & Search",
                desc: "Search, Display & Performance Max — mapped tightly to real buyer intent and high-value queries.",
              },
              {
                icon: <PlayCircle className="w-5 h-5" />,
                title: "YouTube Ads",
                desc: "Video storytelling that introduces, educates and nurtures — especially for high-ticket and complex offers.",
              },
              {
                icon: <BriefcaseBusiness className="w-5 h-5" />,
                title: "LinkedIn Campaigns",
                desc: "B2B-focused campaigns targeting decision makers and influencers in niche industries & roles.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                variants={fadeUp}
                className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur p-5 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-500/18 to-blue-500/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PLATFORM BEHAVIOUR MATRIX */}
      <section className="py-16 border-t border-border/60 bg-background/70 relative">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:22px_22px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Social Platform Behaviour{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Matrix
              </span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Facebook, Instagram, Pinterest, YouTube, LinkedIn — people behave
              differently on each. I plan content, creatives and campaigns
              around that behaviour, not in isolation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs md:text-sm">
            {[
              {
                label: "Instagram",
                role: "Inspiration & social proof",
                details:
                  "Reels, carousels and stories showcasing transformations, behind-the-scenes and lifestyle context.",
              },
              {
                label: "Facebook",
                role: "Community & discovery",
                details:
                  "Local discovery, social sharing, reviews and retargeting of cold traffic at scale.",
              },
              {
                label: "YouTube",
                role: "Depth & education",
                details:
                  "Explainer videos, tours, case stories and comparisons for serious buyers doing research.",
              },
              {
                label: "LinkedIn",
                role: "Authority & B2B trust",
                details:
                  "Thought leadership, POV content, case snippets and targeted campaigns for decision makers.",
              },
            ].map((row, i) => (
              <motion.div
                key={row.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                variants={fadeUp}
                className="rounded-2xl bg-card/80 border border-border/60 p-4"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold">{row.label}</h3>
                  <BarChart3 className="w-4 h-4 text-purple-300" />
                </div>
                <p className="text-[11px] text-muted-foreground mb-1">
                  Role: <span className="text-foreground">{row.role}</span>
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {row.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B / LUXURY B2C EXPERTISE */}
      <section className="py-16 relative">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff14_1px,transparent_1px)] bg-[size:18px_18px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold text-center mb-4"
          >
            B2B Technology & Luxury Showrooms —{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              different playbooks, same depth of thinking
            </span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-sm md:text-base text-muted-foreground text-center max-w-3xl mx-auto mb-10"
          >
            I&apos;ve worked with software & automation companies, and premium
            interior / sanitaryware / lifestyle showrooms. The audiences and
            cycles differ, but the principles of brand, demand and trust stay
            the same.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              variants={fadeUp}
              className="rounded-2xl border border-border/60 bg-card/80 p-6"
            >
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-purple-400" />
                B2B & Technology Brands
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Positioning SaaS, services & automation in simple language</li>
                <li>• Supporting longer sales cycles with content & nurture flows</li>
                <li>• LinkedIn + search + retargeting strategies for pipelines</li>
                <li>• Aligning brand story with sales decks & demos</li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeUp}
              className="rounded-2xl border border-border/60 bg-card/80 p-6"
            >
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                Luxury B2C Showrooms & Brands
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• High-intent lead generation & walk-in strategies</li>
                <li>• Showcasing experience & trust, not just product catalogues</li>
                <li>• O2O journeys from ad → visit → repeat purchase</li>
                <li>• Blending aspiration with realistic offers & pricing</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MINI CASE SNAPSHOTS (NOT TYPICAL CASE STUDIES) */}
      <section className="py-16 border-t border-border/60 bg-background/70 relative">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
               Brand & Growth Outcomes
              </span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Instead of lengthy case studies, here are quick, high-clarity examples showing how brand strategy, performance marketing and O2O systems worked together to drive measurable outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm text-muted-foreground">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              variants={fadeUp}
              className="rounded-2xl bg-card/80 border border-border/60 p-5 flex flex-col gap-2"
            >
              <h3 className="text-sm font-semibold text-foreground mb-1">
                Luxury B2C Showroom
              </h3>
              <p>Objective: Boost qualified walk-ins & high-ticket enquiries.</p>
              <p>
                Approach: Meta + Google demand generation → lead capture → showroom journey mapping → WhatsApp nurturing + retargeting loops.
              </p>
              <p>Outcome: Increase in high-quality visits and improved closing rate across premium categories.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeUp}
              className="rounded-2xl bg-card/80 border border-border/60 p-5 flex flex-col gap-2"
            >
              <h3 className="text-sm font-semibold text-foreground mb-1">
                Home Improvement Brand Development
              </h3>
              <p>Objective: Strengthen brand awareness and market positioning.</p>
              <p>
                Approach: Brand narrative refinement → POV-led content → problem-solution landing pages → intent-based campaigns + retargeting.
              </p>
              <p>Outcome: Stronger brand credibility, higher organic engagement and shorter sales conversations.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
              variants={fadeUp}
              className="rounded-2xl bg-card/80 border border-border/60 p-5 flex flex-col gap-2"
            >
              <h3 className="text-sm font-semibold text-foreground mb-1">
                Website Experience Audit
              </h3>
              <p>Objective: Redesign digital presence for better visibility, engagement and traffic growth.</p>
              <p>
                Approach: UX + messaging audit → O2O conversion pathways → optimized CTAs → Meta & Google remarketing sequences.
              </p>
              <p>Outcome: Higher repeat visits, faster discovery, and improved lead quality.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WEBSITE & DIGITAL BRAND EXPERIENCE AUDIT */}
      <section className="py-16 relative">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff14_1px,transparent_1px)] bg-[size:18px_18px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Website & Digital{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Brand Experience Audit
              </span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              One of my core strengths is auditing websites and key digital
              touchpoints from a brand, communication and conversion angle —
              not just from a design or SEO checklist.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Messaging & Clarity",
                points: [
                  "Is it obvious who you are and what you solve?",
                  "Is your promise and next step clear within a few seconds?",
                ],
              },
              {
                title: "UX, Trust & Flow",
                points: [
                  "Do visitors feel guided, safe and understood?",
                  "Is it easy to enquire, call or visit without confusion?",
                ],
              },
              {
                title: "SEO & Conversion Basics",
                points: [
                  "Are key pages structured correctly for search?",
                  "Are CTAs, forms, tracking & retargeting set up right?",
                ],
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                variants={fadeUp}
                className="rounded-2xl bg-card/80 border border-border/60 p-6"
              >
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {card.title}
                </h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {card.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center bg-background/70 border-t border-border/60">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to align your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            brand, marketing & sales
          </span>
          ?
        </h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-8">
          Whether you&apos;re a B2B tech company, a growing SME or a luxury
          showroom in the UAE, I can help you move from scattered activities to
          a clear, measurable brand & growth system that your team understands.
        </p>
        <a
          href="https://calendly.com/midhun-s/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium shadow-lg hover:opacity-90 transition"
        >
          Book a Brand Strategy Call
          <Rocket className="w-4 h-4" />
        </a>
      </section>

      <Faq Faq={brandFaq} />
      <Contact />
      <Footer />
    </main>
  );
}
