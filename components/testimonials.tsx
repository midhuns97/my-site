"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO, TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      content: "Midhun transformed our software development process. The custom solution he built increased our team's productivity by 35% and significantly improved our product delivery timelines.",
      company: "TechVision Inc.",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, GlobalConnect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      content: "The partnership strategy Midhun developed for us opened doors to international markets we hadn't considered. Within a year, we established key alliances in 5 new countries.",
      company: "GlobalConnect",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Director of Innovation, FutureTech",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      content: "Alex's business strategy consultation was exactly what our startup needed. His insights helped us pivot our approach, resulting in 200% revenue growth and successful Series A funding.",
      company: "FutureTech",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">Testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear what my clients and partners have to say about working together.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-30"></div>
              <Card className="relative bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="absolute top-6 right-6 text-purple-500 opacity-20">
                    <Quote size={80} />
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 flex flex-col items-center text-center">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-purple-500/30">
                        <Image
                          src={testimonials[current].image}
                          alt={testimonials[current].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-bold">{testimonials[current].name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
                      <div className="mt-4 relative h-8 w-24">
                        <div className="absolute inset-0 bg-white/5 rounded-md"></div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <p className="text-lg md:text-xl italic mb-6">
                        "{testimonials[current].content}"
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="w-5 h-5 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                        <span className="text-muted-foreground text-sm">Exceptional service</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-purple-500/20 hover:bg-purple-500/10 hover:text-purple-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrent(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-purple-500 w-6"
                      : "bg-purple-500/30 hover:bg-purple-500/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-purple-500/20 hover:bg-purple-500/10 hover:text-purple-400"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-bold text-center mb-8">Trusted by Companies Worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="relative h-12 w-32 opacity-50 hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-white/5 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;