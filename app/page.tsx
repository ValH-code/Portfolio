import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import ParticleBackground from '@/components/ui/particle-background';

export default function Home() {
  return (
    <div className="relative overflow-hidden flex flex-col items-center">
      <ParticleBackground />
      
      <section id="accueil" className="relative w-full min-h-screen flex items-center justify-center">
        <Hero />
      </section>
      
      <section id="a-propos" className="py-24 relative w-full flex items-center justify-center">
        <About />
      </section>
      
      <section id="competences" className="py-24 relative w-full flex items-center justify-center bg-muted/30">
        <Skills />
      </section>
      
      <section id="projets" className="py-24 relative w-full flex items-center justify-center">
        <Projects />
      </section>
      
      <section id="contact" className="py-24 relative w-full flex items-center justify-center bg-muted/30">
        <Contact />
      </section>
    </div>
  );
}