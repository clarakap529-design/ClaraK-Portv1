import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { About } from './About';
import imgClarakProfile3 from "figma:asset/ef54086b5aa301178f7e14564626f3e8237bb488.png";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsOpen(false);
      }
    }

    if (isProjectsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isProjectsOpen]);

  const projects = [
    { name: 'Reporting Insights', path: '/project/analytics-agent' },
    { name: 'Report Authoring', path: '/project/report-authoring' },
    { name: 'Data Viz', path: '/project/charting-palettes' },
  ];

  const handleProjectClick = (path: string) => {
    setIsProjectsOpen(false);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e8eef5]">
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
          {/* Logo/Home Button */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-[8px] font-['Inter',sans-serif] font-medium text-[14px] text-black tracking-[-0.42px] hover:opacity-70 transition-opacity"
          >
            <img
              src={imgClarakProfile3}
              alt="Clara K."
              className="w-[28px] h-[28px] rounded-full object-cover"
              style={{ objectPosition: '40% 20%' }}
            />
            Clara K.
          </button>
          
          {/* Right Navigation */}
          <div className="flex items-center gap-8">
            <div className="relative">
              <button 
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className="font-['Inter',sans-serif] font-medium text-[14px] text-black tracking-[-0.42px] hover:opacity-70 transition-opacity"
              >
                Projects
              </button>
              {isProjectsOpen && (
                <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                  {projects.map((project) => (
                    <button
                      key={project.path}
                      onClick={() => handleProjectClick(project.path)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {project.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-[60px]">
        {children}
      </div>

      {/* Footer */}
      <About />
    </div>
  );
}
