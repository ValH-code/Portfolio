"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Computer, 
  Globe, 
  Database, 
  Workflow, 
  Smartphone,
  CheckCircle2
} from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <Globe className="h-5 w-5" />,
    skills: [
      { name: 'HTML', level: 100 },
      { name: 'CSS', level: 100 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind', level: 90 },
      { name: 'MaterialUI', level: 90 }
    ]
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <Computer className="h-5 w-5" />,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'REST API', level: 90 },
      { name: 'GraphQL', level: 70 }
    ]
  },
  {
    id: 'database',
    label: 'Base de données',
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'NoSQL', level: 70 },
      { name: 'SQL', level: 70 },
      { name: 'Firebase', level: 80 }
    ]
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: <Smartphone className="h-5 w-5" />,
    skills: [
      { name: 'React Native', level: 90 },
      { name: 'Expo', level: 90 },
      { name: 'iOS', level: 80 },
      { name: 'Android', level: 80 }
    ]
  },
  {
    id: 'tools',
    label: 'Outils',
    icon: <Workflow className="h-5 w-5" />,
    skills: [
      { name: 'Git', level: 100 },
      { name: 'GitHub', level: 100 },
      { name: 'VSCode', level: 100 },
      { name: 'Webpack', level: 100 },
      { name: 'Vite', level: 100 },
      { name: 'npm', level: 100 },
      { name: 'Yarn', level: 100 }
    ]
  }
];

const additionalSkills = [
  'TypeScript',
  'Redux',
  'SASS',
  'Jest',
  'Docker',
  'CI/CD',
  'AWS',
  'SEO'
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="container px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Compétences</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Un aperçu des technologies et outils que j'utilise pour créer des applications web et mobiles modernes.
        </p>
      </motion.div>

      <Tabs 
        defaultValue="frontend" 
        className="mx-auto max-w-4xl"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-12">
          {skillCategories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="flex items-center gap-2 py-3 transition-all duration-300 data-[state=active]:scale-105"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: activeTab === category.id ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {category.icon}
              </motion.div>
              <span className="hidden md:inline">{category.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <AnimatePresence mode="wait">
          {skillCategories.map((category) => (
            <TabsContent 
              key={category.id} 
              value={category.id}
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    <div className="bg-card hover:bg-card/80 transition-all duration-300 rounded-lg p-6 h-full flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg border border-border/50 hover:scale-105">
                      <div className="relative">
                        <span className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        {hoveredSkill === skill.name && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm whitespace-nowrap"
                          >
                            {skill.level}%
                          </motion.div>
                        )}
                      </div>
                      <div className="mt-2 w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div 
                          className="bg-primary h-full rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                      {skill.level >= 90 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                          className="absolute -top-2 -right-2"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </AnimatePresence>
      </Tabs>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <h3 className="text-xl font-semibold mb-6">Autres compétences</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <Badge 
                variant="secondary" 
                className="text-sm py-1 px-3 cursor-default transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}