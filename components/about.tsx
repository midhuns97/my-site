"use client";

import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { 
  Code, 
  LineChart, 
  Users, 
  Briefcase, 
  Globe, 
  Smartphone 
} from "lucide-react";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const timelineItems = [
    {
      year: "2018-2019",
      role: "Python Developer",
      description: "Started career building web applications and data analysis tools using Python, Django, and Flask.",
      icon: <Code className="h-5 w-5 text-purple-500" />,
    },
    {
      year: "2019-2023",
      role: "Business Development",
      description: "Transitioned to sales, closing high-value deals and developing client relationships in the tech sector.",
      icon: <Briefcase className="h-5 w-5 text-blue-500" />,
    },
    {
      year: "2023-2024",
      role: "Sales Manager",
      description: "Led business strategy initiatives, focusing on market expansion and digital transformation projects.",
      icon: <LineChart className="h-5 w-5 text-indigo-500" />,
    },
    {
      year: "2024-Present",
      role: "VP of Global Partnerships",
      description: "Currently managing strategic partnerships and collaborations with technology providers worldwide.",
      icon: <Users className="h-5 w-5 text-purple-500" />,
    },
  ];

  return (
    <section id="about" className="scroll-mt-12 py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">Midhun</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm Midhun, a passionate software strategist, and one of the best solution consultants in India, helping businesses grow through digital transformation, and smart strategies.<br/>With a keen understanding of the Indian and global markets</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-card rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                
                <div className="space-y-8">
                  {timelineItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={variants}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{item.year}</div>
                        <h4 className="text-lg font-medium mb-1">{item.role}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div ref={ref}>
            <h3 className="text-2xl font-bold mb-6">Expertise & Specialization</h3>
            
            <div className="space-y-6">
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-purple-500/0 rounded-xl blur-sm opacity-20"></div>
                <div className="relative bg-card rounded-xl p-6 border border-border/50">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <Code className="h-6 w-6 text-purple-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Software Development</h4>
                      <p className="text-muted-foreground">
                        Expert in Python, JavaScript, and modern frameworks. Specialized in creating custom web and mobile applications that solve complex business problems.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-500/0 rounded-xl blur-sm opacity-20"></div>
                <div className="relative bg-card rounded-xl p-6 border border-border/50">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <LineChart className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Brand Strategist</h4>
                      <p className="text-muted-foreground">
                        Developing growth strategies, market analysis, and digital transformation roadmaps that align technology with business objectives.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-indigo-500/0 rounded-xl blur-sm opacity-20"></div>
                <div className="relative bg-card rounded-xl p-6 border border-border/50">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-indigo-500" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Global Partnerships</h4>
                      <p className="text-muted-foreground">
                        Building and managing strategic alliances, joint ventures, and technology partnerships across international markets.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;