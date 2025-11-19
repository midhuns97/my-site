"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  LineChart, 
  Users, 
  Smartphone, 
  Globe, 
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Contact from "./contact";


const Services = () => {
  const [activeTab, setActiveTab] = useState("development");

  const services = [
    {
      id: "development",
      title: "Software Services",
      description: "Custom software solutions tailored to your business needs",
      icon: <Code className="h-6 w-6" />,
      color: "purple",
      items: [
        {
          title: "Website Development",
          description: "Crafting high-performance websites from exclusive custom designs, eCommerce and Shopify builds that align with your brand and drive conversions.",
          icon: <Globe className="h-5 w-5" />,
        },
        {
          title: "Software Development",
          description: "Building scalable web and mobile applications tailored to unique business needs, combining functionality with user-focused design.",
          icon: <Smartphone className="h-5 w-5" />,
        },
        {
          title: "ERP Implementation",
          description: "Streamlining operations through seamless Odoo and ERPNext implementations designed for efficiency, transparency, and data-driven decision-making.",
          icon: <Code className="h-5 w-5" />,
        },
      ],
    },
    {
      id: "strategy",
      title: "Brand Strategist",
      description: "Strategic planning and growth consulting for SME businesses",
      icon: <LineChart className="h-6 w-6" />,
      color: "blue",
      items: [
        {
          title: "Digital Transformation",
          description: "Helping businesses evolve digitally with modern tools and strategies that optimize processes, customer engagement, and growth.",
          icon: <Lightbulb className="h-5 w-5" />,
        },
        {
          title: "Growth Strategy",
          description: "Turning insights into action through focused SEM, SEO, and marketing plans that strengthen your brand presence and accelerate expansion.",
          icon: <LineChart className="h-5 w-5" />,
        },
        {
          title: "Sales Enhancements",
          description: "Empowering sales teams with SMM, GMB optimization, and traditional campaigns that convert awareness into measurable results.",
          icon: <ArrowRight className="h-5 w-5" />,
        },
      ],
    },
    {
      id: "partnerships",
      title: "Partnership Development",
      description: "Building strategic alliances and collaborative ventures",
      icon: <Users className="h-6 w-6" />,
      color: "indigo",
      items: [
        {
          title: "Strategic Alliance Formation",
          description: "Building high-value alliances that enhance market reach, technological strength, and mutual business growth.",
          icon: <Users className="h-5 w-5" />,
        },
        {
          title: "Partnership Management",
          description: "Managing ongoing collaborations with precision and transparency to ensure long-term success and strategic alignment.",
          icon: <Globe className="h-5 w-5" />,
        },
        {
          title: "Joint Venture Development",
          description: "Structuring and guiding joint ventures that combine shared expertise, resources, and vision for sustainable global expansion.",
          icon: <Lightbulb className="h-5 w-5" />,
        },
      ],
    },
  ];

  const getColorClass = (color: string, type: string) => {
    const colorMap: Record<string, Record<string, string>> = {
      purple: {
        bg: "bg-purple-500",
        bgLight: "bg-purple-500/10",
        text: "text-purple-500",
        border: "border-purple-500/20",
        hover: "hover:bg-purple-500/10",
        gradient: "from-purple-500 to-purple-600",
      },
      blue: {
        bg: "bg-blue-500",
        bgLight: "bg-blue-500/10",
        text: "text-blue-500",
        border: "border-blue-500/20",
        hover: "hover:bg-blue-500/10",
        gradient: "from-blue-500 to-blue-600",
      },
      indigo: {
        bg: "bg-indigo-500",
        bgLight: "bg-indigo-500/10",
        text: "text-indigo-500",
        border: "border-indigo-500/20",
        hover: "hover:bg-indigo-500/10",
        gradient: "from-indigo-500 to-indigo-600",
      },
    };

    return colorMap[color][type] || "";
  };

  return (
    <section id="services" className="scroll-mt-12 py-20 relative">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to help businesses grow through technology, strategy, and partnerships.
          </p>
        </div>

        <Tabs defaultValue="development" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center  mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-3xl">
              {services.map((service) => (
                <TabsTrigger 
                  key={service.id} 
                  value={service.id}
                  className={`flex items-center pb-1 gap-2 justify-center ${activeTab === service.id ? getColorClass(service.color, "text") : ""}`}
                >
                  <div className="sm:hidden md:inline">
                  {service.icon}
                  </div>
                  <span className="hidden sm:inline">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="relative overflow-hidden h-full border-border/50 group">
                      <div className={`absolute top-0 left-0 w-1 h-full ${getColorClass(service.color, "bg")}`}></div>
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg ${getColorClass(service.color, "bgLight")} flex items-center justify-center mb-4`}>
                          <div className={getColorClass(service.color, "text")}>{item.icon}</div>
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button 
                          variant="ghost" 
                          className={`p-0 ${getColorClass(service.color, "text")} ${getColorClass(service.color, "hover")}`}
                          onClick={() => {
                          const section = document.getElementById("contact");
                          if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        >
                          Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button 
                  className={`bg-gradient-to-r ${getColorClass(service.color, "gradient")} text-white shadow-lg`}
                  size="lg"
                >
                  Explore {service.title} Services
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;