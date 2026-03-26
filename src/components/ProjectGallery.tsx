import dataVizImg from 'figma:asset/a6198fb6ffaebbaa65a0b7943591db25673c727c.png'
import reportingInsightsImg from 'figma:asset/10a69fecb80ac4b1c361d6f9d6079c8f3917f3fa.png'
import analyticsAgentImg from 'figma:asset/29a840826a5a625d3ee9117076cd0ba7062285d2.png';
import reportAuthoringImg from 'figma:asset/85a431214830fbf245e9c6aad3f30e337322bef0.png';
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
    <section id="projects" className="pt-10 pb-20">
      <div className="w-full mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-roboto-slab mb-4 text-black text-[40px] font-semibold tracking-normal leading-[1.15]">Featured Projects</h2>
          <p className="font-['Roboto',sans-serif] text-[16px] tracking-[-0.48px] text-[#2e2e2e] mx-auto text-center max-w-3xl" style={{ fontVariationSettings: "'wdth' 100" }}>These projects highlight the breadth of my enterprise work — from shaping agentic AI product vision to navigating complex platform-level design challenges. Grounded in 12+ years of UX experience, and a constant curiosity to learn, adapt, and push the work further.</p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col w-full">
          {/* Reporting Insights */}
          <div className="w-full">
            <div className="flex flex-col lg:flex-row gap-16 items-center max-w-7xl mx-auto px-8 lg:px-[88px] py-12 lg:py-20">
              <div className="overflow-hidden rounded-[8px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.25)] shrink-0 w-full lg:w-[600px]">
                <img src={reportingInsightsImg} alt="Reporting Insights" className="w-full h-auto block" />
              </div>
              <div className="flex flex-col gap-6 flex-1">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#Reporting</p>
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#agentic</p>
                  </div>
                  <h4 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px]">Reporting Insights</h4>
                  <p className="font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] text-[rgba(0,0,0,0.55)] leading-[1.45]">Shaped the evolution of a chat interface into a vision for an AI Analysis Agent</p>
                </div>
                <button
                  onClick={() => navigate('/project/analytics-agent')}
                  className="bg-[#2d6383] text-white px-8 py-3 rounded-[12px] font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] leading-[1.45] self-start hover:bg-[#2d6383]/90 transition-colors"
                >View</button>
              </div>
            </div>
          </div>

          {/* Report Authoring */}
          <div className="w-full">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center max-w-7xl mx-auto px-8 lg:px-[88px] py-12 lg:py-20">
              <div className="overflow-hidden rounded-[8px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.25)] shrink-0 w-full lg:w-[600px]">
                <img src={reportAuthoringImg} alt="Report Authoring" className="w-full h-auto block" />
              </div>
              <div className="flex flex-col gap-6 flex-1">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#reporting</p>
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#RESEARCH</p>
                  </div>
                  <h4 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px]">Report Authoring</h4>
                  <p className="font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] text-[rgba(0,0,0,0.55)] leading-[1.45]">Self-initiated effort to map the unmapped report authoring experience — surfacing critical friction points that validated and shaped our AI workstreams</p>
                </div>
                <button
                  onClick={() => navigate('/project/report-authoring')}
                  className="bg-[#2d6383] text-white px-8 py-3 rounded-[12px] font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] leading-[1.45] self-start hover:bg-[#2d6383]/90 transition-colors"
                >View</button>
              </div>
            </div>
          </div>

          {/* Data Visualization */}
          <div className="w-full">
            <div className="flex flex-col lg:flex-row gap-16 items-center max-w-7xl mx-auto px-8 lg:px-[88px] py-12 lg:py-20">
              <div className="overflow-hidden rounded-[8px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.25)] shrink-0 w-full lg:w-[600px]">
                <img src={dataVizImg} alt="Canvas Color & Style Guidelines" className="w-full h-auto block" />
              </div>
              <div className="flex flex-col gap-6 flex-1">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#DataViz</p>
                    <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab]">#DesignStrategy</p>
                  </div>
                  <h4 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] text-[#2e2e2e]">Data Visualization</h4>
                  <p className="font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] text-[rgba(0,0,0,0.55)] leading-[1.45]">A color palette refresh uncovered a fragmented charting ecosystem — sparking platform-level strategic discussions around governance and standardization</p>
                </div>
                <button
                  onClick={() => navigate('/project/charting-palettes')}
                  className="bg-[#2d6383] text-white px-8 py-3 rounded-[12px] font-['Inter',sans-serif] text-[18px] tracking-[-0.09px] leading-[1.45] self-start hover:bg-[#2d6383]/90 transition-colors"
                >View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}