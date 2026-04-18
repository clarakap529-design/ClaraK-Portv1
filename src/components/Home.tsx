import { useState, useEffect } from 'react';
import { Hero } from './Hero';
import { ProjectGallery } from './ProjectGallery';
import { AICompanion } from './AICompanion';

export function Home() {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about'];
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
      {import.meta.env.DEV ? (
        <p
          className="mx-auto max-w-5xl px-4 py-1 text-center font-['Inter',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)]"
          data-dev-hmr-check="home"
        >
          Dev: edit and save Home.tsx — this line should update without a full refresh (HMR check).
        </p>
      ) : null}
      <Hero />
      <ProjectGallery />
      <AICompanion currentSection={currentSection} />
    </>
  );
}