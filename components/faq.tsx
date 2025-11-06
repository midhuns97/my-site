"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Faq = [ 
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

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-blue-950/10 to-transparent"></div>

      <div className="relative container mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto space-y-4">
          {Faq.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  backgroundColor: isOpen ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
                  borderColor: isOpen ? "rgba(168,85,247,0.4)" : "rgba(255,255,255,0.05)",
                }}
                transition={{ duration: 0.3 }}
                className="backdrop-blur-sm border rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="font-medium text-base md:text-lg text-foreground">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="px-6 pb-5 text-sm md:text-base text-muted-foreground"
                    >
                      <div className="pt-1 leading-relaxed">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}