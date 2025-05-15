"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ExternalLink } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      ref.current.style.setProperty('--mouse-x', `${x}`);
      ref.current.style.setProperty('--mouse-y', `${y}`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(
          circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), 
          hsl(var(--primary) / 0.15), 
          transparent 40%
        )`
      }}
    >
      <div className="container px-4 py-32 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
            Valentin
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-primary/50"></div>
            <h2 className="text-xl md:text-2xl font-medium">Développeur Full Stack</h2>
            <div className="h-[1px] w-12 bg-primary/50"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-lg md:text-xl text-muted-foreground">
            Je crée des expériences web et mobiles modernes, innovantes et performantes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button asChild size="lg">
            <Link href="#projets">
              Voir mes projets
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://bibliotracker.fr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              BiblioTracker <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#a-propos" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
        </Link>
      </div>
    </div>
  );
}