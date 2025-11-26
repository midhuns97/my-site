// app/services/software/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Globe2,
  Workflow,
  Rocket,
  ShieldCheck,
  Server,
  Cloud,
} from "lucide-react";

import Navbar from "@/components/navbar";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Faq from "@/components/faq";
import { homeFaq } from "@/const/faq";

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

export default function SoftwareServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* soft gradient background shapes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-[480px] h-[480px] -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-background/40 backdrop-blur text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
              Software Services
            </span>

            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Custom Software that{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
                actually fits your business
              </span>
              , not the other way around.
            </h1>

            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-8">
              From web applications and mobile apps to internal tools and
              automation—every solution is designed to reduce manual work,
              improve customer experience, and support long-term growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/midhun-s/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg shadow-purple-500/25 transition"
              >
                Book a Software Strategy Call
                <Rocket className="w-4 h-4" />
              </a>
              <a
                href="/#projects"
                className="text-sm text-muted-foreground hover:text-primary transition"
              >
                View real projects I’ve worked on →
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm text-muted-foreground">
              <div className="rounded-xl border border-border/50 bg-background/40 px-3 py-3">
                <div className="font-semibold text-foreground mb-1">
                  7+ Years
                </div>
                In software & IT services
              </div>
              <div className="rounded-xl border border-border/50 bg-background/40 px-3 py-3">
                <div className="font-semibold text-foreground mb-1">
                  Web & Mobile
                </div>
                JavaScript, Flutter, Python, Node, WP
              </div>
              <div className="rounded-xl border border-border/50 bg-background/40 px-3 py-3">
                <div className="font-semibold text-foreground mb-1">
                  Strategy-first
                </div>
                Tech mapped to business goals
              </div>
              <div className="rounded-xl border border-border/50 bg-background/40 px-3 py-3">
                <div className="font-semibold text-foreground mb-1">
                  Across Globe
                </div>
                Experience with cross-market needs
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Software that supports{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                real business workflows
              </span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Not “just another app”. Every project starts from understanding
              how your team works today and what needs to be improved—not from a
              template.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "Website Development",
                desc: "Websites portals, dashboards, and internal tools that centralize operations and reduce manual work.",
                badge: "Next.js • WordPress • Strapi",
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Something",
                desc: "Flutter-based cross-platform apps for Android & iOS that keep customers, sales teams, or partners connected.",
                badge: "Flutter • APIs • Push",
              },
              {
                icon: <Globe2 className="w-6 h-6" />,
                title: "ERP Implementations",
                desc: "Scalable ERP, consist of features like Finance, Sales, CRM & Inventory that runs your business to successfull",
                badge: "Odoo • SAP • ERP Next",
              },
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "Web Applications",
                desc: "Custom web portals, dashboards, and internal tools that centralize operations and reduce manual work.",
                badge: "Node.js • React • Python",
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Mobile Apps",
                desc: "Flutter-based cross-platform apps for Android & iOS that keep customers, sales teams, or partners connected.",
                badge: "Flutter • React Native • Native",
              },
              {
                icon: <Globe2 className="w-6 h-6" />,
                title: "Ecommerce & Platforms",
                desc: "Scalable ecommerce, booking, or marketplace platforms that connect your products, services, and logistics.",
                badge: "Custom • Shopify • WooCommerce",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i + 1}
                variants={fadeUp}
                className="relative group"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/0 via-purple-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 blur transition" />
                <div className="relative h-full rounded-2xl border border-border/60 bg-card/80 backdrop-blur p-6 flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xxl bg-gradient-to-br from-purple-500/15 to-blue-500/10 flex items-center justify-center text-primary mb-2">
                    {item.icon}
                  </div>
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    {item.title}
                  </h2>
                  <p className="text-sm text-muted-foreground flex-1">
                    {item.desc}
                  </p>
                  <span className="inline-flex text-[11px] px-3 py-1 rounded-full bg-background/60 border border-border text-muted-foreground mt-1">
                    {item.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-16 border-t border-border/60 bg-background/60">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeUp}
            className="flex flex-col items-center gap-6 mb-10 text-center"
          >
            <div className="max-w-xxl">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Business Automation, ERP Implementation &{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  Product Development
                </span>{" "}
                
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                From the first call to launch and beyond, everything is structured so you
                always know what is happening, & what’s pending.
              </p>
            </div>

            {/* <div className="text-xs md:text-sm text-muted-foreground">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-border bg-card/70">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Transparent scope, timeline & communication</span>
              </div>
            </div> */}
          </motion.div>


          <div className="grid md:grid-cols-[1.3fr,1fr] gap-10">
            {/* Timeline */}
            <div className="space-y-6">
              {[
                {
                  title: "1. Discovery & Strategy",
                  desc: "Understand your business model, current tools, pain points, and what ‘success’ looks like for this project.",
                },
                {
                  title: "2. Architecture & UX Flow",
                  desc: "Define user journeys, data flow, and system architecture so development starts with clarity—not guesswork.",
                },
                {
                  title: "3. Development & Iterations",
                  desc: "Agile sprints with regular demos. We move in small, visible steps instead of a black-box for months.",
                },
                {
                  title: "4. Testing, Launch & Handover",
                  desc: "UAT, performance checks, security considerations, and proper handover so your team can run the system confidently.",
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
                  {/* vertical line & dot */}
                  <div className="absolute left-0 top-0 h-full flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mt-1" />
                    {i !== 3 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-purple-500/40 to-transparent mt-1" />
                    )}
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
            {/* Side Card */}
            {/* Side Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeUp}

              className="relative mt-12"   // ⭐ ADD THIS → moves the whole side card down

              // You can increase/decrease:
              // mt-8  (small shift)
              // mt-12 (recommended)
              // mt-16 (bigger shift)
              // mt-20 (large shift, aligns with center usually)
            >

              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent blur-lg opacity-70" />
              
              <div className="relative rounded-2xl bg-card/90 border border-border/70 p-6 flex flex-col gap-4">
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center">
                    <Workflow className="w-5 h-5 text-purple-400" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Ideal for growing businesses
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Not just MVPs that break in 6 months.
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Clear documentation for both business & dev teams</li>
                  <li>• Designed for future integrations & scaling</li>
                  <li>• Aligned with marketing, sales & operations workflows</li>
                  <li>• Option to connect with existing ERPs/CRMs later</li>
                </ul>

                <div className="mt-2 grid grid-cols-2 gap-2 text-[11px]">
                  <div className="rounded-xl border border-border bg-background/70 p-2 flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-blue-400" />
                    <span>Cloud-ready deployment</span>
                  </div>
                  <div className="rounded-xl border border-border bg-background/70 p-2 flex items-center gap-2">
                    <Cloud className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Backup & security aware</span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Tech Stack / Capabilities */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Technologies I'm Familiar with'
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              You don’t need to choose the tech stack—I help you decide based on
              your use case, timeline, and budget. But it’s good to know what’s
              possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
            {[
              "Next.js & React.js",
              "Node.js & Express",
              "Django & FastAPI",
              "Flutter & React Native",
              "PostgreSQL / MySQL",
              "REST & GraphQL APIs",
              "WordPress / Shopify / Strapi",
              "AWS & Azure",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                variants={fadeUp}
                className="rounded-xl border border-border bg-card/70 px-3 py-3 flex items-center"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-2" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse same FAQ & Contact & Footer as homepage */}
      <Faq Faq={homeFaq} />
      <Contact />
      <Footer />
    </main>
  );
}
