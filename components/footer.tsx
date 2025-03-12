"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/midhuns-" },
    { name: "Facebook", icon: <FaFacebook className="h-5 w-5" />, url: "https://www.facebook.com/midhun.santhakumar/" },
    { name: "Instagram", icon: <FaInstagram className="h-5 w-5" />, url: "https://www.instagram.com/___midhun_s/" },
    { name: "Email", icon: <FaEnvelope className="h-5 w-5" />, url: "mailto:hello@midhuns.com" },
  ];

  return (
    <footer className="relative bg-background border-t border-border/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Midhun S
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering businesses with custom software solutions and strategic partnerships. Let's build something amazing together.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ name, icon, url }) => (
                <Button
                  key={name}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                  asChild
                >
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                    {icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <Link 
                    href={`#${link.toLowerCase()}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Software Development",
                "Business Strategy",
                "Partnership Development",
                "Digital Transformation",
                "Mobile App Development"
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href="#services" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-border/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Midhun S. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-primary"
              onClick={scrollToTop}
            >
              Back to top <ArrowUp className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
