import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { About } from './About';
import imgClarakProfile3 from "figma:asset/ef54086b5aa301178f7e14564626f3e8237bb488.png";
import { Lock, Unlock } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from './ui/dialog';
import {
  isProjectAccessUnlocked,
  setProjectAccessUnlocked,
  subscribeProjectAccessUnlocked,
} from '../lib/projectAccessSession';

interface LayoutProps {
  children: ReactNode;
}

const PASSWORD_OK = (value: string) => value.trim().toLowerCase() === 'pigment';

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(88);
  const [accessUnlocked, setAccessUnlocked] = useState(() => isProjectAccessUnlocked());
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - navHeight - 8;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - navHeight - 8;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

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

  useEffect(() => {
    return subscribeProjectAccessUnlocked(() => setAccessUnlocked(true));
  }, []);

  const projects = [
    { name: 'Reporting Insights', path: '/project/analytics-agent' },
    { name: 'Report Authoring', path: '/project/report-authoring' },
    { name: 'Data Viz', path: '/project/charting-palettes' },
  ];

  const resetPasswordState = () => {
    setPendingPath(null);
    setPassword('');
    setPasswordError(false);
  };

  const openPasswordModal = (path: string) => {
    if (isProjectAccessUnlocked()) {
      navigate(path);
      return;
    }
    setPendingPath(path);
    setPassword('');
    setPasswordError(false);
    setPasswordModalOpen(true);
  };

  const handleOpenChange = (open: boolean) => {
    setPasswordModalOpen(open);
    if (!open) {
      resetPasswordState();
    }
  };

  const handleEnter = () => {
    if (!pendingPath) return;
    if (PASSWORD_OK(password)) {
      setProjectAccessUnlocked();
      navigate(pendingPath);
      setPasswordModalOpen(false);
      resetPasswordState();
    } else {
      setPasswordError(true);
    }
  };

  const handleProjectClick = (path: string) => {
    setIsProjectsOpen(false);
    openPasswordModal(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-[#E0E8F0]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6 md:px-8">
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
                type="button"
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                aria-expanded={isProjectsOpen}
                className="font-['Inter',sans-serif] font-medium text-[14px] text-black tracking-[-0.42px] transition-opacity hover:opacity-70"
              >
                Projects
              </button>
              {isProjectsOpen && (
                <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                  {projects.map((project) => (
                    <button
                      key={project.path}
                      onClick={() => handleProjectClick(project.path)}
                      aria-label={
                        accessUnlocked
                          ? `${project.name}, unlocked for this session`
                          : `${project.name}, password required`
                      }
                      className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {accessUnlocked ? (
                        <Unlock className="h-4 w-4 shrink-0 text-[#2d6383]" aria-hidden />
                      ) : (
                        <Lock className="h-4 w-4 shrink-0 text-[#2d6383]" aria-hidden />
                      )}
                      <span>{project.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div style={{ paddingTop: `${navHeight}px` }}>
        {children}
      </div>

      <Dialog open={passwordModalOpen} onOpenChange={handleOpenChange}>
        <DialogContent
          className="max-w-md gap-5 border border-gray-200 bg-white p-6 pr-12 sm:max-w-md"
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            const el = document.getElementById('nav-project-password');
            el?.focus();
          }}
        >
          <div className="flex flex-col gap-4 text-left">
            <DialogTitle asChild>
              <h4 className="font-['Roboto_Slab',serif] text-[20px] font-bold leading-tight tracking-[0.02em] text-black">
                Password:
              </h4>
            </DialogTitle>

            <DialogDescription asChild>
              <p
                id="nav-password-hint-text"
                className="font-['Roboto_Slab',serif] text-[15px] font-normal leading-snug text-[#2e2e2e]"
              >
                Hint: the company you&apos;re from
              </p>
            </DialogDescription>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleEnter();
              }}
            >
              <label htmlFor="nav-project-password" className="sr-only">
                Password
              </label>
              <input
                id="nav-project-password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError(false);
                }}
                aria-invalid={passwordError}
                aria-describedby={passwordError ? 'nav-password-hint-text nav-password-error' : 'nav-password-hint-text'}
                className={`w-full rounded-lg border bg-white px-3 py-2.5 font-['Roboto_Slab',serif] text-[15px] text-[#2e2e2e] outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-[#2d6383] ${
                  passwordError ? 'border-red-500' : 'border-[#4d686b]'
                }`}
                placeholder=" "
              />
              {passwordError ? (
                <p id="nav-password-error" className="text-sm text-red-600" role="alert">
                  That didn&apos;t match. Try the company name (lowercase is fine).
                </p>
              ) : null}

              <DialogFooter className="mt-1 flex w-full flex-row items-center justify-end gap-3 sm:justify-end">
                <DialogClose asChild>
                  <button
                    type="button"
                    className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 font-['Inter',sans-serif] text-[15px] font-medium text-[#2e2e2e] transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6383] focus-visible:ring-offset-2"
                  >
                    Cancel
                  </button>
                </DialogClose>
                <button
                  type="submit"
                  className="rounded-2xl bg-black px-6 py-2.5 font-['Inter',sans-serif] text-[15px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                >
                  Enter
                </button>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <About />
    </div>
  );
}
