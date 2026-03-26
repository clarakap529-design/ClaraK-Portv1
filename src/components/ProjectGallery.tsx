import dataVizImg from 'figma:asset/a6198fb6ffaebbaa65a0b7943591db25673c727c.png';
import reportingInsightsImg from 'figma:asset/10a69fecb80ac4b1c361d6f9d6079c8f3917f3fa.png';
import reportAuthoringImg from 'figma:asset/85a431214830fbf245e9c6aad3f30e337322bef0.png';
import { useNavigate } from 'react-router-dom';

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
    tags: ['#reporting', '#research'],
    description:
      'Self-initiated effort to map the unmapped report authoring experience - surfacing critical friction points that validated and shaped our AI workstreams',
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

export function ProjectGallery() {
  const navigate = useNavigate();

  return (
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
                className={`mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 md:gap-12 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-[88px] lg:py-16 ${
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
                    onClick={() => navigate(project.path)}
                    className="self-start rounded-[12px] bg-[#2d6383] px-8 py-3 font-['Inter',sans-serif] text-[18px] leading-[1.45] tracking-[-0.09px] text-white transition-colors hover:bg-[#2d6383]/90"
                  >
                    View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}