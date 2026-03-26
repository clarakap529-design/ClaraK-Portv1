import { useState, useEffect } from 'react';
import { Hero } from './Hero';
import { ProjectGallery } from './ProjectGallery';
import { AICompanion } from './AICompanion';
import { Contact } from './Contact';

export function Home() {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'contact', 'about'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Hero />
      <ProjectGallery />
      <Contact />
      <AICompanion currentSection={currentSection} />
    </>
  );
}