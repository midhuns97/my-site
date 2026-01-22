// const/faq.ts

export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaq: FaqItem[] = [
  {
    question: "What services do you provide?",
    answer:
      "We specialize in custom software solutions, mobile and web app development, and complete digital strategy — designed to help brands scale efficiently.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on scope. Typically, small apps take 4–6 weeks, while complex enterprise platforms take 10–14 weeks with defined milestones.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes. We provide long-term maintenance, updates, and optimization to ensure your product stays secure and performs at its best.",
  },
  {
    question: "How can I start a project with you?",
    answer:
      "You can reach out through our contact form or email. We'll set up a short discovery call to understand your goals and prepare a proposal.",
  },
];

export const brandFaq: FaqItem[] = [
  {
    question: "What does a Brand Strategist in UAE do?",
    answer:
      "A Brand Strategist in UAE helps businesses align their marketing, messaging, and growth planning with clear business goals. They guide freelancers or agencies, create data-driven strategies, and ensure brand consistency across all digital channels.",
  },
  {
    question: "How much does a Brand Strategist cost in UAE?",
    answer:
      "The pricing of a Brand Strategist in UAE varies depending on experience and involvement. On average, monthly retainers range from AED 3,000 to AED 15,000 for small to mid-sized businesses, while senior strategists charge higher for full-scale brand leadership.",
  },
  {
    question: "What is the salary of a Brand Strategist in UAE?",
    answer:
      "The salary of a Brand Strategist in UAE typically ranges between AED 12,000 to AED 30,000 per month. Senior brand consultants working with enterprise companies may earn even more depending on expertise and industry demand.",
  },
  {
    question: "How do I identify the best Brand Strategist for my business?",
    answer:
      "The best Brand Strategist is someone who understands your industry, can translate business goals into measurable marketing plans, and provides clear direction to your marketing team. Look for strategists with proven case studies, strong communication skills, and experience in digital transformation.",
  },
  {
    question: "Do I need a Brand Strategist if I already have a marketing agency?",
    answer:
      "Yes, a Brand Strategist complements your marketing agency by ensuring every campaign aligns with your business goals. They provide strategic direction, performance analysis, and guidance that most agencies or freelancers may not cover deeply.",
  },
  {
    question: "Is a Brand Consultant different from a Brand Strategist?",
    answer:
      "A Brand Consultant typically provides advisory support, while a Brand Strategist in UAE takes a more involved role in planning, supervising, and optimizing marketing execution. Many professionals, however, serve as both depending on project needs.",
  },
];

export const ecomFaq: FaqItem[] = [
  {
    question: "How much does it cost to build an ecommerce website in the UAE?",
    answer:
      "Building an ecommerce platform in the UAE typically ranges from AED 5,000 for a basic website to AED 150,000+ for a custom marketplace. Costs depend on features like automation, ERP integration, payment gateways, mobile apps, and scalability.",
  },
  {
    question: "Do I need a mobile app for my ecommerce business in the UAE?",
    answer:
      "A mobile app is not always required. If customers purchase occasionally, a fast web application is sufficient. Apps are ideal for high-frequency use cases like groceries, food delivery, and daily essentials where users engage multiple times per week.",
  },
  {
    question: "Is an Ecommerce Manager necessary to run an online store in the UAE?",
    answer:
      "Yes, an Ecommerce Manager becomes essential as your operations grow. They manage coordination between tech, marketing, logistics, customer support, and product uploads. Without one, ecommerce businesses often face catalog issues, delays, and reduced conversions.",
  },
  {
    question: "What is the best platform to build an ecommerce site in the UAE?",
    answer:
      "Shopify and WooCommerce are ideal for smaller brands. For custom workflows, ERP integrations, multi-vendor systems, or advanced features, custom development using Next.js or Laravel is recommended. Marketplaces almost always require fully custom solutions.",
  },
  {
    question: "How long does it take to build a complete ecommerce platform?",
    answer:
      "A simple ecommerce website takes 3–6 weeks. Complex platforms with apps, ERP/POS integrations, automation, and multi-vendor features typically take 3–6 months depending on requirements, content readiness, and approval timelines.",
  },
  {
    question: "How can I drive traffic to my ecommerce store in the UAE?",
    answer:
      "Traffic comes from a combination of Google Ads, Meta Ads, SEO, WhatsApp automation, TikTok content, and influencer marketing. Strong branding—clear messaging, visual identity, and product presentation—greatly improves conversion and long-term growth.",
  },
];

export const softwareFaq: FaqItem[] = [
  {
    question: "What does a custom website development package cost in Dubai / UAE?",
    answer:
      "Website costs depend on scope: basic business sites often start from AED 5,000–15,000, while custom corporate or e-commerce websites with advanced features can cost AED 40,000–100,000+. Final price depends on design complexity, features (like CMS, payment gateways), responsiveness and integrations. :contentReference[oaicite:0]{index=0}",
  },
  {
    question: "How much does it cost to build a mobile app or ecommerce app in Dubai / UAE?",
    answer:
      "Mobile or e-commerce app development typically ranges from AED 25,000 to AED 80,000+, depending on complexity, number of platforms (iOS/Android), backend integrations, and custom features. :contentReference[oaicite:1]{index=1}",
  },
  {
    question: "How long does it take to launch a website or mobile app for UAE businesses?",
    answer:
      "A simple website can be launched in 1–3 weeks; ecommerce platforms may take 3–5 weeks; mobile apps generally take 4–10 weeks — depending on design complexity, integrations and revisions required. :contentReference[oaicite:2]{index=2}",
  },
  {
    question: "Can you build an ecommerce store compatible with UAE payment gateways, VAT, and shipping?",
    answer:
      "Yes — we build ecommerce platforms fully compliant with UAE requirements including local payment gateway integration, shipping logistics, multi-currency support, and VAT compliance. This ensures usability and compliance for UAE businesses. :contentReference[oaicite:3]{index=3}",
  },
  {
    question: "Do you provide ERP / business software implementation for companies in Dubai / UAE?",
    answer:
      "Yes — we implement ERP systems (like finance, sales, CRM, inventory, operations) tailored for UAE businesses, ensuring compliance with local business practices, multi-branch support, and integration with web/mobile interfaces. :contentReference[oaicite:4]{index=4}",
  },
  {
    question: "What is the typical cost range for ERP implementation in UAE?",
    answer:
      "For SMEs, a basic ERP implementation typically starts around AED 36,000; for larger or fully custom ERP systems, costs depend on number of modules, users, and custom workflows. :contentReference[oaicite:5]{index=5}",
  },
  {
    question: "Do you offer post-launch support, maintenance and updates for websites/apps in UAE?",
    answer:
      "Yes — we provide long-term maintenance, security updates, bug fixes, and optimizations to ensure your website, app or ERP remains secure, up-to-date and performs at its best in UAE’s evolving digital environment.",
  },
  {
    question: "How can I start a project with you if I’m based in Dubai / Sharjah / UAE?",
    answer:
      "You can reach out through our contact form or book a strategy call. After a short discovery call to understand your needs and business goals, we will provide a clear proposal with scope, timeline, and estimated costs adapted for UAE market.",
  },
];

export const partnershipFaq = [
  {
    question: "What makes a successful strategic partnership?",
    answer:
      "Successful partnerships are built on aligned goals, complementary strengths, clear communication, accountability, and a structure that promotes mutual success.",
  },
  {
    question: "How long does it take to establish a strategic alliance?",
    answer:
      "Most alliances take 3–9 months depending on complexity, due diligence, negotiations, legal processes, and integration planning.",
  },
  {
    question: "Do you support cross-border or international partnerships?",
    answer:
      "Yes. I help navigate cultural differences, compliance challenges, legal restrictions, and international business frameworks.",
  },
  {
    question: "How is success measured in partnerships?",
    answer:
      "We track revenue impact, cost savings, innovation throughput, partner engagement, market expansion, and customer influence.",
  },
  {
    question: "Do you help manage partnerships after they go live?",
    answer:
      "Yes. Partnership governance, conflict resolution, quarterly reviews, performance dashboards, and optimization are all included.",
  },
];

export const salesaiFaq = [
  {
    question: "How do I automate my entire sales process without hiring more people?",
    answer:
      "Automate repetitive tasks first—lead capture, follow-ups, reminders, and CRM updates. Tools like n8n, HubSpot AI, and Zapier can run these tasks automatically in the background.",
  },
  {
    question: "Which AI tools should I use for sales automation if I'm just getting started?",
    answer:
      "Begin with ChatGPT for content, Apollo, Clay & APIfy for lead data, and n8n for workflows. These three cover writing, lead generation, and automation without heavy setup.",
  },
  {
    question: "How do I know if AI-generated leads are accurate or relevant to my business?",
    answer:
      "Use enrichment tools like Clay or Apollo to verify company size, industry, activity, and decision-maker details before adding them to your sales pipeline.",
  },
  {
    question: "Can AI handle follow-ups better than my sales team?",
    answer:
      "AI ensures no follow-up is missed by triggering messages based on customer activity—email opens, website visits, or WhatsApp replies—keeping prospects engaged automatically.",
  },
  {
    question: "Will AI responses sound robotic to my customers?",
    answer:
      "No. Modern AI tools like ChatGPT and DeepSeek generate natural, personalized responses based on your tone guide. You can review and adjust the style anytime.",
  },
  {
    question: "How do I build a 24/7 chatbot that answers customer questions instantly?",
    answer:
      "Use Botpress, Tidio AI, or ChatGPT Assistants. They can answer common queries, qualify leads, and collect customer details even outside business hours.",
  },
  {
    question: "How do I track which part of my sales process needs automation?",
    answer:
      "Check for time-consuming tasks—manual data entry, delayed follow-ups, repetitive emails, and proposal creation. These are usually the first areas to automate.",
  },
];
