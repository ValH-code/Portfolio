"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/theme-toggle';
import { Menu, X, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À Propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md py-2 shadow-md'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="pl-8 md:pl-16"
        >
          <Link 
            href="#accueil" 
            className="flex items-center gap-2 font-bold text-xl group"
          >
            <div className="relative">
              <Code className="h-6 w-6 transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Valh-Code
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all relative py-2",
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Menu"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : "100%"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden',
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : 50 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className={cn(
                  "text-2xl font-medium transition-colors",
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}