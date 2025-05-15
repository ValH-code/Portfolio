import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Code, Rocket } from 'lucide-react';

export default function About() {
  return (
    <div className="container px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">À Propos</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Développeur passionné qui transforme des idées en applications fonctionnelles et élégantes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
          <CardContent className="pt-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-4 rounded-full bg-primary/10 text-primary">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Développement</h3>
              <p className="text-muted-foreground">
                Spécialisé dans la création d'applications web et mobiles modernes, 
                avec une expertise en JavaScript et ses écosystèmes React et Node.js.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
          <CardContent className="pt-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-4 rounded-full bg-primary/10 text-primary">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Approche</h3>
              <p className="text-muted-foreground">
                Je m'engage à créer des solutions innovantes et évolutives qui 
                répondent aux besoins spécifiques de chaque projet et de ses utilisateurs.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
          <CardContent className="pt-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-4 rounded-full bg-primary/10 text-primary">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-muted-foreground">
                Passionné par les technologies émergentes et l'amélioration continue, 
                je reste à jour avec les dernières tendances et meilleures pratiques.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-center">
        <p className="text-lg">
          Développeur full stack avec une expertise en création d'applications web et 
          mobiles modernes. Mes compétences couvrent tant le front-end que le back-end, 
          me permettant de concevoir des solutions complètes et cohérentes.
        </p>
        <p className="text-lg mt-4">
          Mon approche est centrée sur la qualité du code, l'expérience utilisateur
          et la performance. Je suis constamment à la recherche de nouveaux défis pour 
          approfondir mes connaissances et élargir mes compétences.
        </p>
      </div>
    </div>
  );
}