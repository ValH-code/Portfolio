/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { AtSign, Mail, MapPin, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez saisir une adresse email valide.",
  }),
  subject: z.string().min(5, {
    message: "Le sujet doit contenir au moins 5 caractères.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue lors de l\'envoi du message.');
      }
      
      form.reset();
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
        duration: 5000,
      });
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Me Contacter</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="group"
        >
          <Card className="p-6 h-full flex flex-col justify-between bg-gradient-to-br from-background to-background/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4 group/item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary mt-1 transition-colors duration-300 group-hover:item:bg-primary/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:pro.valentin.hamon@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "mailto:pro.valentin.hamon@gmail.com";
                      }}
                    >
                      pro.valentin.hamon@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 group/item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary mt-1 transition-colors duration-300 group-hover:item:bg-primary/20">
                    <AtSign className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Réseaux Sociaux</h4>
                    <p className="text-muted-foreground">
                      <a 
                        href="https://github.com/ValH-code" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-primary transition-colors"
                      >
                        GitHub
                      </a>
                      {' • '}
                      <a 
                        href="www.linkedin.com/in/valh-code" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-primary transition-colors"
                      >
                        LinkedIn
                      </a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 group/item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary mt-1 transition-colors duration-300 group-hover:item:bg-primary/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Localisation</h4>
                    <p className="text-muted-foreground">
                      France
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-muted-foreground">
                N'hésitez pas à me contacter pour discuter de votre projet ou pour toute autre question.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="group"
        >
          <Card className="p-6 border-border/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Votre nom" 
                            {...field} 
                            className="transition-all duration-300 focus:scale-[1.02]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="votre@email.com" 
                            {...field} 
                            className="transition-all duration-300 focus:scale-[1.02]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sujet</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Sujet de votre message" 
                          {...field} 
                          className="transition-all duration-300 focus:scale-[1.02]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Écrivez votre message ici" 
                          className="min-h-32 resize-y transition-all duration-300 focus:scale-[1.02]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full transition-all duration-300 hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-current border-r-transparent rounded-full animate-spin"></div>
                      Envoi en cours...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Envoyer le message
                    </div>
                  )}
                </Button>
              </form>
            </Form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}