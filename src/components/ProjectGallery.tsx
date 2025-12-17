import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Redesign',
    category: 'Data Viz',
    description: 'A complete overhaul of an online fashion retailer, increasing conversion by 45%',
    image: 'ecommerce fashion',
    aiInsight: 'This project showcases my data-driven approach to UX. I analyzed user behavior patterns to optimize the checkout flow.',
    tags: ['Mobile First', 'Conversion Optimization', 'User Research']
  },
  {
    id: 2,
    title: 'AI Writing Assistant',
    category: 'AI',
    description: 'Designing an intuitive interface for an AI-powered content creation tool',
    image: 'writing workspace',
    aiInsight: 'Meta! I designed the UX for an AI tool. The challenge was making AI feel helpful, not overwhelming - just like this portfolio.',
    tags: ['AI/ML', 'SaaS', 'Interaction Design']
  },
  {
    id: 3,
    title: 'Health Tracking App',
    category: 'Analytics',
    description: 'A wellness app that helps users build sustainable healthy habits',
    image: 'fitness health',
    aiInsight: 'This design emphasizes empathy and motivation. I conducted 30+ user interviews to understand what actually drives behavior change.',
    tags: ['Mobile', 'Wellness', 'Gamification']
  },
  {
    id: 4,
    title: 'Finance Dashboard',
    category: 'Data Viz',
    description: 'Making complex financial data accessible and actionable for everyday users',
    image: 'finance data',
    aiInsight: 'The key insight: people don\'t want more data, they want clarity. I simplified 50+ metrics into 3 actionable insights.',
    tags: ['Data Viz', 'FinTech', 'Dashboard']
  },
  {
    id: 5,
    title: 'Smart Home Control',
    category: 'Reporting',
    description: 'A unified interface for controlling all your smart home devices',
    image: 'smart home',
    aiInsight: 'This project taught me the importance of contextual automation. The best smart home doesn\'t make you think.',
    tags: ['IoT', 'Voice UI', 'Automation']
  },
  {
    id: 6,
    title: 'Learning Platform',
    category: 'Analytics',
    description: 'An adaptive learning platform that personalizes education for each student',
    image: 'online learning',
    aiInsight: 'I designed AI-powered personalization that adapts to learning styles. Every student\'s journey is unique.',
    tags: ['Education', 'Adaptive Learning', 'Accessibility']
  }
];

export function ProjectGallery() {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  const categories = ['All', 'Data Viz', 'Reporting', 'Analytics', 'AI'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="pt-10 pb-20 bg-[#f2e1cd]">
      <div className="w-full mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-[#2d6383] font-['Roboto_Slab',serif] text-[40px] font-bold">Featured Projects</h2>
          <p className="font-['Roboto',sans-serif] text-[16px] tracking-[-0.48px] text-[#2e2e2e] whitespace-nowrap mx-auto text-center" style={{ fontVariationSettings: "'wdth' 100" }}>Each project is a story of problem-solving and creativity. Click the AI icon to hear the story behind the work.</p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col w-full">
          {/* Analytics Agent */}
          <div className="bg-[#f2e1cd] w-full">
            <div className="flex flex-col lg:flex-row gap-16 items-center max-w-7xl mx-auto px-8 lg:px-22 py-12 lg:py-20">
              <div className="bg-white h-[360px] rounded-[24px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.4)] shrink-0 w-full lg:w-[530px]" />
              <div className="flex flex-col gap-12 flex-1">
                <div className="flex flex-col gap-6">
                  <h4 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px]\">Analytics Agent</h4>
                  <p className="font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] text-[rgba(0,0,0,0.55)] leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
                  <div className="flex gap-2">
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#Analytics</p>
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#DataViz</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/project/analytics-agent')}
                  className="bg-black text-white px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] leading-[1.45] self-start hover:bg-gray-800 transition-colors"
                >
                  Call to action
                </button>
              </div>
            </div>
          </div>

          {/* Report Authoring */}
          <div className="bg-[#dfebeb] w-full">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center max-w-7xl mx-auto px-8 lg:px-22 py-12 lg:py-20">
              <div className="bg-white h-[360px] rounded-[24px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.4)] shrink-0 w-full lg:w-[530px]" />
              <div className="flex flex-col gap-12 flex-1">
                <div className="flex flex-col gap-6">
                  <h4 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px]\">Report Authoring</h4>
                  <p className="font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] text-[rgba(0,0,0,0.55)] leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
                  <div className="flex gap-2">
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#Reporting</p>
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#Analytics</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/project/report-authoring')}
                  className="bg-black text-white px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] leading-[1.45] self-start hover:bg-gray-800 transition-colors"
                >
                  Call to action
                </button>
              </div>
            </div>
          </div>

          {/* Data Visualization */}
          <div className="bg-[#fbdee0] w-full">
            <div className="flex flex-col lg:flex-row gap-16 items-center max-w-7xl mx-auto px-8 lg:px-22 py-12 lg:py-20">
              <div className="bg-white h-[360px] rounded-[24px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.4)] shrink-0 w-full lg:w-[530px]" />
              <div className="flex flex-col gap-12 flex-1">
                <div className="flex flex-col gap-6">
                  <h4 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] text-[#2e2e2e]">Data Visualization</h4>
                  <p className="font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] text-[rgba(0,0,0,0.55)] leading-[1.45]">A comprehensive color palette system for accessible, meaningful data visualization across enterprise products.</p>
                  <div className="flex gap-2">
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#DataViz</p>
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#DesignSystem</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/project/charting-palettes')}
                  className="bg-black text-white px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] leading-[1.45] self-start hover:bg-gray-800 transition-colors"
                >
                  View Case Study
                </button>
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="bg-[#dfebeb] w-full">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center max-w-7xl mx-auto px-8 lg:px-22 py-12 lg:py-20">
              <div className="bg-white h-[360px] rounded-[24px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.4)] shrink-0 w-full lg:w-[530px]" />
              <div className="flex flex-col gap-12 flex-1">
                <div className="flex flex-col gap-6">
                  <h4 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] text-[#2e2e2e]\">Data Management</h4>
                  <p className="font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] text-[rgba(0,0,0,0.55)] leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
                  <div className="flex gap-2">
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#Analytics</p>
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#DataViz</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/project/data-management')}
                  className="bg-black text-white px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] leading-[1.45] self-start hover:bg-gray-800 transition-colors"
                >
                  Call to action
                </button>
              </div>
            </div>
          </div>

          {/* Debugging */}
          <div className="bg-[#f2f2f7] w-full">
            <div className="flex flex-col lg:flex-row gap-16 items-center max-w-7xl mx-auto px-8 lg:px-22 py-12 lg:py-20">
              <div className="bg-white h-[360px] rounded-[24px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.4)] shrink-0 w-full lg:w-[530px]" />
              <div className="flex flex-col gap-12 flex-1">
                <div className="flex flex-col gap-6">
                  <h4 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px]\">Debugging</h4>
                  <p className="font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] text-[rgba(0,0,0,0.55)] leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
                  <div className="flex gap-2">
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#Analytics</p>
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#AI</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/project/debugging')}
                  className="bg-black text-white px-4 py-3 rounded-[12px] font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] leading-[1.45] self-start hover:bg-gray-800 transition-colors"
                >
                  Call to action
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}