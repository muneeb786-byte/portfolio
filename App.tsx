import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Work } from './components/Work';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  
  // Smooth scrolling effect helper
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-white text-[#111] min-h-screen w-full relative selection:bg-black selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Skills />
      </main>

      <Footer />
    </div>
  );
};

export default App;