import { useState, useEffect } from 'react';
import { Lock, Unlock } from 'lucide-react';
import dataVizImg from 'figma:asset/a6198fb6ffaebbaa65a0b7943591db25673c727c.png';
import reportingInsightsImg from 'figma:asset/10a69fecb80ac4b1c361d6f9d6079c8f3917f3fa.png';
import reportAuthoringImg from 'figma:asset/85a431214830fbf245e9c6aad3f30e337322bef0.png';
import { useNavigate } from 'react-router-dom';
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

const featuredProjects = [
  {
    title: 'Reporting Insights',
    tags: ['#Reporting', '#agentic'],
    description: 'Shaped the evolution of a chat interface into a vision for an AI Analysis Agent',
    image: reportingInsightsImg,
    alt: 'Reporting Insights',
    path: '/project/analytics-agent',
    reverse: false,
  },
  {
    title: 'Report Authoring',
    tags: ['#reporting', '#research', '#agentic'],
    description:
      'Data Source Findability and Report Authoring 2.0—same user and workflows, separate teams—until research and an end-to-end journey map made the gap visible.',
    image: reportAuthoringImg,
    alt: 'Report Authoring',
    path: '/project/report-authoring',
    reverse: true,
  },
  {
    title: 'Data Visualization',
    tags: ['#DataViz', '#DesignStrategy'],
    description:
      'A color palette refresh uncovered a fragmented charting ecosystem - sparking platform-level strategic discussions around governance and standardization',
    image: dataVizImg,
    alt: 'Canvas Color and Style Guidelines',
    path: '/project/charting-palettes',
    reverse: false,
  },
];

/** Case-insensitive gate — hint references the company name. */
const PASSWORD_OK = (value: string) => value.trim().toLowerCase() === 'pigment';

export function ProjectGallery() {
  const navigate = useNavigate();
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [accessUnlocked, setAccessUnlocked] = useState(() => isProjectAccessUnlocked());

  useEffect(() => {
    return subscribeProjectAccessUnlocked(() => setAccessUnlocked(true));
  }, []);

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

  return (
    <>
      <section id="projects" className="pt-10 pb-20">
        <div className="mx-auto w-full">
          <div className="mb-12 px-4 text-center md:px-8">
            <h2 className="mb-4">
              Featured Projects
            </h2>
            <p
              className="mx-auto max-w-3xl text-center font-['Roboto',sans-serif] text-[16px] tracking-[-0.48px] text-[#2e2e2e]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              These projects highlight the breadth of my enterprise work - from shaping agentic AI product vision to
              navigating complex platform-level design challenges. Grounded in 12+ years of UX experience, and a
              constant curiosity to learn, adapt, and push the work further.
            </p>
          </div>

          <div className="w-full">
            {featuredProjects.map((project) => (
              <article key={project.title} className="w-full">
                <div
                  className={`mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-4 py-10 md:gap-12 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-[88px] lg:py-16 ${
                    project.reverse ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="w-full overflow-hidden rounded-[8px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.25)]">
                    <img src={project.image} alt={project.alt} className="block h-auto w-full" />
                  </div>

                  <div className="flex flex-1 flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        {project.tags.map((tag) => (
                          <p
                            key={tag}
                            className="font-roboto-slab text-[14px] uppercase tracking-[2px] text-[#2d6383]"
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                      <h4 className="font-roboto-slab text-[34px] md:text-[40px] tracking-[1px] text-[#2e2e2e]">
                        {project.title}
                      </h4>
                      <p className="font-['Inter',sans-serif] text-[17px] leading-[1.45] tracking-[-0.09px] text-[rgba(0,0,0,0.55)] md:text-[18px]">
                        {project.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => openPasswordModal(project.path)}
                      aria-label={
                        accessUnlocked
                          ? `View ${project.title}, unlocked for this session`
                          : `View ${project.title}, password required`
                      }
                      className="inline-flex items-center gap-2 self-start rounded-[12px] bg-[#2d6383] px-8 py-3 font-['Inter',sans-serif] text-[18px] leading-[1.45] tracking-[-0.09px] text-white transition-colors hover:bg-[#2d6383]/90"
                    >
                      {accessUnlocked ? (
                        <Unlock className="h-5 w-5 shrink-0 text-white" aria-hidden />
                      ) : (
                        <Lock className="h-5 w-5 shrink-0 text-white" aria-hidden />
                      )}
                      View
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={passwordModalOpen} onOpenChange={handleOpenChange}>
        <DialogContent
          className="max-w-md gap-5 border border-gray-200 bg-white p-6 pr-12 sm:max-w-md"
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            const el = document.getElementById('project-view-password');
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
                id="password-hint-text"
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
              <label htmlFor="project-view-password" className="sr-only">
                Password
              </label>
              <input
                id="project-view-password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError(false);
                }}
                aria-invalid={passwordError}
                aria-describedby={
                  passwordError ? 'password-hint-text password-error' : 'password-hint-text'
                }
                className={`w-full rounded-lg border bg-white px-3 py-2.5 font-['Roboto_Slab',serif] text-[15px] text-[#2e2e2e] outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-[#2d6383] ${
                  passwordError ? 'border-red-500' : 'border-[#4d686b]'
                }`}
                placeholder=" "
              />
              {passwordError ? (
                <p id="password-error" className="text-sm text-red-600" role="alert">
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
    </>
  );
}
