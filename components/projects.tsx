"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Contact from "./contact";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "software", label: "Software" },
    { id: "strategy", label: "Strategy" },
    { id: "partnerships", label: "Partnerships" },
  ];

  const projects = [
    {
      id: 1,
      title: "Enterprise SaaS Platform",
      description: "Worked with a comprehensive SaaS solution for cyber security with custom modules for various department in an organization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "software",
      tags: ["Python", "React", "AWS", "Docker"],
      link: "#",
    },
    {
      id: 2,
      title: "Global Partnership Network",
      description: "Established a network of technology partners across multiple countries, resulting in 20% revenue growth through collaborations.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
      category: "partnerships",
      tags: ["Strategic Alliance", "Global Expansion"],
      link: "#",
    },
    {
      id: 3,
      title: "Digital Transformation Strategy",
      description: "Created a comprehensive digital transformation roadmap for a Indian International Tile Brand, increasing overall revenue generation by 30%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      category: "strategy",
      tags: ["Digital Strategy", "Marketing Plan"],
      link: "#",
    },
    {
      id: 4,
      title: "Quick Commerce Application",
      description: "Worked with a deal of secure ecommerce mobile application with inventory integration and real-time transaction processing.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1968&auto=format&fit=crop",
      category: "software",
      tags: ["Flutter", "Node.js", "Quick Commerce", "Security"],
      link: "#",
    },
    {
      id: 5,
      title: "Partnerships from Tech Expo",
      description: "Represented Fegno Technologies at Gitex Global to create an business relationship that are potential collaboration opportunities.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
      category: "partnerships",
      tags: ["Startup Collaborations", "Joint Associations"],
      link: "#",
    },
    {
      id: 6,
      title: "Brand Growth Strategy",
      description: "Developed a market expansion & brand enhancement strategy for an luxury product showroom, resulting in 65% growth in 12 months.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      category: "strategy",
      tags: ["Market Analysis", "Growth Hacking"],
      link: "#",
    },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      software: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      strategy: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      partnerships: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
    };
    return colorMap[category] || "bg-gray-500/10 text-gray-500 border-gray-500/20";
  };

  return (
    <section id="projects" className="scroll-mt-12 py-20 relative">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my most impactful work across software development, business strategy, and partnership initiatives.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-4 w-full max-w-xl">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full border-border/50 group hover:border-purple-500/30 transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader className="relative">
                      <Badge variant="outline" className={`absolute -top-5 ${getCategoryColor(project.category)}`}>
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </Badge>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    {/* <CardFooter>
                      <Button 
                        variant="ghost" 
                        className="p-0 text-purple-500 hover:bg-purple-500/10"
                      >
                       View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter> */}
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <Button 
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg shadow-purple-500/20"
            size="lg"
            onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          >
            Contact for More 
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;