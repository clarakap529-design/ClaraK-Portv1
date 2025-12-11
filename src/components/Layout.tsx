import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed font-['Inter:Medium',sans-serif] font-medium leading-[1.65] left-[24px] not-italic text-[14px] text-black top-[39px] tracking-[-0.42px] z-50 w-[62px]">
        <button 
          onClick={() => scrollToSection('hero')}
          className="block mb-0 hover:underline cursor-pointer text-left"
        >
          Clara K.
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="block mb-0 hover:underline cursor-pointer text-left"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="block hover:underline cursor-pointer text-left"
        >
          Contact
        </button>
      </nav>

      {/* Page Content */}
      {children}
    </div>
  );
}
