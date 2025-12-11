import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ChartingPalettesProject } from './ChartingPalettesProject';

const projectDetails = {
  'analytics-agent': {
    title: 'Analytics Agent',
    category: 'AI',
    tags: ['AI', 'Reporting'],
    backgroundColor: '#f2e1cd',
    overview: 'An intelligent analytics agent that helps users explore data through natural language conversations.',
    challenge: 'Users struggled to extract meaningful insights from complex datasets without technical SQL knowledge.',
    solution: 'We designed an AI-powered conversational interface that translates natural language questions into data queries and visualizations.',
    impact: [
      'Reduced time to insight by 65%',
      'Increased user engagement by 120%',
      'Enabled non-technical users to perform advanced analytics'
    ],
    features: [
      'Natural language query processing',
      'Auto-generated visualizations',
      'Contextual follow-up suggestions',
      'Export and sharing capabilities'
    ]
  },
  'charting-palettes': {
    title: 'Charting Palettes',
    category: 'Design System',
    tags: ['Data Viz', 'Design System'],
    backgroundColor: '#fbdee0',
    overview: 'A comprehensive color palette system designed to ensure accessible, meaningful data visualization across enterprise products.',
    challenge: 'Creating consistent, accessible chart colors that work across different chart types, data densities, and use cases.',
    solution: 'Developed three specialized palettes with rigorous testing for accessibility, perceptual uniformity, and cross-product consistency.',
    impact: [
      'WCAG AA compliance across all palettes',
      '12+ distinct colors with perceptual uniformity',
      'Adopted by 8 product teams'
    ],
    features: [
      'Sequential palette for ordered data',
      'Categorical palette for distinct groups',
      'Diverging palette for comparative analysis',
      'Built-in accessibility testing'
    ],
    isCustomLayout: true
  },
  'report-authoring': {
    title: 'Report Authoring',
    category: 'Reporting',
    tags: ['Reporting', 'Analytics'],
    backgroundColor: '#dfebeb',
    overview: 'A collaborative platform for creating, editing, and sharing data-driven reports with intelligent automation.',
    challenge: 'Creating professional reports was time-consuming and required jumping between multiple tools.',
    solution: 'We built an integrated authoring experience with AI-assisted writing, automatic data updates, and real-time collaboration.',
    impact: [
      'Report creation time reduced by 50%',
      'Collaboration efficiency improved by 80%',
      'Template reuse increased by 200%'
    ],
    features: [
      'Drag-and-drop report builder',
      'AI-powered content suggestions',
      'Real-time collaboration',
      'Automated data refresh'
    ]
  },
  'data-visualization': {
    title: 'Data Visualization',
    category: 'Data Viz',
    tags: ['Data Viz', 'Analytics'],
    backgroundColor: '#fbdee0',
    overview: 'A comprehensive visualization toolkit that transforms complex data into clear, actionable insights.',
    challenge: 'Users needed to create compelling visualizations quickly without extensive design or technical skills.',
    solution: 'We designed an intuitive visualization builder with smart defaults, AI-powered chart recommendations, and interactive customization.',
    impact: [
      'Chart creation speed increased by 70%',
      'Visualization quality scores improved by 45%',
      'User satisfaction rating: 4.8/5'
    ],
    features: [
      'AI-powered chart type recommendations',
      'Interactive data exploration',
      'Custom color palettes and themes',
      'Responsive design for all devices'
    ]
  },
  'data-management': {
    title: 'Data Management',
    category: 'Analytics',
    tags: ['Analytics', 'Data Viz'],
    backgroundColor: '#dfebeb',
    overview: 'A centralized platform for organizing, governing, and managing enterprise data assets.',
    challenge: 'Organizations struggled with data silos, inconsistent governance, and lack of data discoverability.',
    solution: 'We created a unified data management system with automated cataloging, lineage tracking, and intelligent search.',
    impact: [
      'Data discovery time reduced by 75%',
      'Compliance audit time decreased by 60%',
      'Cross-team collaboration improved by 90%'
    ],
    features: [
      'Automated data cataloging',
      'Visual lineage tracking',
      'Role-based access control',
      'AI-powered data quality monitoring'
    ]
  },
  'debugging': {
    title: 'Debugging',
    category: 'Analytics',
    tags: ['Analytics', 'AI'],
    backgroundColor: '#f2f2f7',
    overview: 'An intelligent debugging interface that helps developers identify and resolve issues faster.',
    challenge: 'Developers spent hours debugging complex systems with limited visibility into root causes.',
    solution: 'We designed a diagnostic dashboard that uses AI to surface relevant logs, suggest fixes, and visualize system behavior.',
    impact: [
      'Debug time reduced by 55%',
      'Mean time to resolution decreased by 40%',
      'Developer satisfaction increased by 85%'
    ],
    features: [
      'AI-powered error diagnosis',
      'Interactive stack trace visualization',
      'Suggested fix recommendations',
      'Real-time performance monitoring'
    ]
  }
};

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projectId ? projectDetails[projectId as keyof typeof projectDetails] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="mb-4">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-black text-white px-6 py-3 rounded-[12px]"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Use custom layout for charting palettes project
  if (projectId === 'charting-palettes') {
    return <ChartingPalettesProject />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      style={{ backgroundColor: project.backgroundColor }}
    >
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-8 lg:px-22 max-w-7xl mx-auto">
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-8 text-black hover:underline"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ArrowLeft className="size-5" />
          <span className="font-['Inter',sans-serif] text-[16px]">Back to Projects</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <p key={index} className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase bg-[#c76129] text-white px-4 py-1.5 rounded-[12px] inline-block">
                {tag}
              </p>
            ))}
          </div>
          <h1 className="font-['Roboto_Slab',serif] text-[64px] tracking-[1.6px] mb-6 text-[#2e2e2e]">
            {project.title}
          </h1>
          <p className="font-['Inter',sans-serif] text-[24px] leading-[1.5] text-[rgba(0,0,0,0.7)] max-w-3xl">
            {project.overview}
          </p>
        </motion.div>
      </div>

      {/* Project Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-7xl mx-auto px-8 lg:px-22 mb-20"
      >
        <div className="bg-white h-[500px] rounded-[24px] shadow-[0px_4px_20px_4px_rgba(0,0,0,0.15)] w-full" />
      </motion.div>

      {/* Content Sections */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-8 py-20">
          {/* Challenge */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] mb-6 text-[#2d6383]">
              The Challenge
            </h2>
            <p className="font-['Inter',sans-serif] text-[18px] leading-[1.6] text-[rgba(0,0,0,0.7)]">
              {project.challenge}
            </p>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] mb-6 text-[#2d6383]">
              The Solution
            </h2>
            <p className="font-['Inter',sans-serif] text-[18px] leading-[1.6] text-[rgba(0,0,0,0.7)] mb-8">
              {project.solution}
            </p>
            
            <h3 className="font-['Roboto_Slab',serif] text-[24px] tracking-[1.2px] mb-4 text-[#2e2e2e]">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="font-['Inter',sans-serif] text-[18px] leading-[1.6] text-[rgba(0,0,0,0.7)] flex items-start gap-3">
                  <span className="text-[#2d6383] mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Impact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] mb-6 text-[#2d6383]">
              The Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.impact.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border-2 border-[#2d6383] rounded-[16px] p-6 text-center"
                >
                  <p className="font-['Roboto_Slab',serif] text-[18px] leading-[1.4] text-[#2e2e2e]">
                    {stat}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center pt-12 border-t border-gray-200"
          >
            <h3 className="font-['Roboto_Slab',serif] text-[32px] tracking-[1.6px] mb-6 text-[#2e2e2e]">
              Interested in learning more?
            </h3>
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-[#2d6383] text-white px-8 py-4 rounded-[12px] font-['Inter',sans-serif] text-[18px] hover:bg-[#3d7393] transition-colors"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}