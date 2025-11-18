"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, LineChart, Users } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = glowRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      glowRef.current.style.setProperty("--x", `${x}px`);
      glowRef.current.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
      
      {/* Glow effect container */}
      <div 
        ref={glowRef}
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background: "radial-gradient(600px circle at var(--x) var(--y), rgba(120, 0, 255, 0.15), transparent 40%)",
        }}
      ></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-400 mb-4">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering Businesses with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Custom Software Solutions
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Software consultant with 7+ years of experience in Software Sales, 
              Brand Strategist, Software Devlopment and Global Partnerships. Specializing in transformative 
              digital solutions that drive growth.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://calendly.com/midhun-s/30min" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg shadow-purple-500/20"
                >
                  Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href= "#projects">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-purple-500/20 hover:bg-purple-500/10 hover:text-purple-400"
                >
                  View Projects
                </Button>
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center"
                  >
                    <span className="text-xs font-medium">C{i}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Trusted by <span className="font-medium text-foreground">20+</span> companies worldwide
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>
              <div className="relative bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-1 shadow-2xl shadow-purple-500/20">
                <div className="bg-background/95 backdrop-blur-sm rounded-3xl p-6 h-full">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="space-y-4">
                      <div className="bg-muted rounded-xl p-4 h-1/2 flex flex-col justify-between group hover:bg-purple-500/10 transition-colors">
                        <Code className="h-8 w-8 text-purple-500" />
                        <div>
                          <h3 className="font-medium">Development</h3>
                          <p className="text-xs text-muted-foreground">Custom software solutions</p>
                        </div>
                      </div>
                      <div className="bg-muted rounded-xl p-4 h-1/2 flex flex-col justify-between group hover:bg-blue-500/10 transition-colors">
                        <LineChart className="h-8 w-8 text-blue-500" />
                        <div>
                          <h3 className="font-medium">Strategy</h3>
                          <p className="text-xs text-muted-foreground">Business growth planning</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-muted rounded-xl p-4 h-2/3 flex flex-col justify-between group hover:bg-indigo-500/10 transition-colors">
                        <Users className="h-8 w-8 text-indigo-500" />
                        <div>
                          <h3 className="font-medium">Partnerships</h3>
                          <p className="text-xs text-muted-foreground">Global alliance building</p>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-4 h-1/3 flex items-center justify-center">
                        <Link href="#contact" className="text-white font-medium">
                          Let's Talk
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;