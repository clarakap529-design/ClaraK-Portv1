import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const chartData = [
  { month: 'Jan', sales: 4200, costs: 2800, profit: 1400 },
  { month: 'Feb', sales: 3800, costs: 2600, profit: 1200 },
  { month: 'Mar', sales: 5100, costs: 3200, profit: 1900 },
  { month: 'Apr', sales: 4600, costs: 2900, profit: 1700 },
  { month: 'May', sales: 5800, costs: 3500, profit: 2300 },
  { month: 'Jun', sales: 6200, costs: 3800, profit: 2400 },
];

const categoricalColors = [
  '#2d6383', '#c76129', '#7fa845', '#d4a02a', '#8e5c9e', 
  '#4a9e9e', '#c85e5e', '#6b8e44', '#9e7c3d', '#5e7aa8',
  '#a85e8e', '#5ea89e'
];

const sequentialColors = [
  '#e8f1f7', '#cbe3ef', '#add4e7', '#8ec5de', '#6eb6d6',
  '#4ea7cd', '#2d97c4', '#2d6383'
];

const divergingColors = [
  '#c85e5e', '#db8e7e', '#edc09f', '#f5e8d8', '#dceee8',
  '#b3dcd1', '#85c9b9', '#4fb5a0'
];

export function ChartingPalettesProject() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#fbdee0]"
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
            <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase bg-[#2d6383] text-white px-4 py-1 rounded-[12px] inline-block">
              Data Viz
            </p>
            <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase bg-[#2d6383] text-white px-4 py-1 rounded-[12px] inline-block">
              Design System
            </p>
          </div>
          <h2 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] mb-6 text-[#2e2e2e]">
            Data Visualizations
          </h2>
          <p className="font-['Inter',sans-serif] text-[24px] leading-[1.5] text-[rgba(0,0,0,0.7)] max-w-3xl">
            A comprehensive color palette system designed to ensure accessible, meaningful data visualization across enterprise products.
          </p>
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-8 py-20">
          
          {/* Section 1: Introduction - Requirements & Goals */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] mb-6 text-[#2d6383]">
              Requirements & Goals
            </h2>
            <p className="font-['Inter',sans-serif] text-[18px] leading-[1.6] text-[rgba(0,0,0,0.7)] mb-8">
              As our analytics platform expanded across multiple product teams, we needed a standardized approach to chart colors. Teams were creating their own palettes, leading to inconsistent user experiences and accessibility issues.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#f8fafb] border border-[#e1e8ed] rounded-[16px] p-6">
                <h3 className="font-['Roboto_Slab',serif] text-[20px] tracking-[1px] mb-3 text-[#2e2e2e]">
                  Core Requirements
                </h3>
                <ul className="space-y-2">
                  {['WCAG AA accessibility compliance', 'Perceptually uniform color progression', 'Distinct colors for categorical data', 'Work across light and dark themes'].map((req, i) => (
                    <li key={i} className="font-['Inter',sans-serif] text-[16px] text-[rgba(0,0,0,0.7)] flex items-start gap-2">
                      <Check className="size-4 text-[#2d6383] mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#f8fafb] border border-[#e1e8ed] rounded-[16px] p-6">
                <h3 className="font-['Roboto_Slab',serif] text-[20px] tracking-[1px] mb-3 text-[#2e2e2e]">
                  Design Goals
                </h3>
                <ul className="space-y-2">
                  {['Support multiple chart types', 'Scale from 2-12+ data series', 'Enable cross-product consistency', 'Easy implementation for developers'].map((goal, i) => (
                    <li key={i} className="font-['Inter',sans-serif] text-[16px] text-[rgba(0,0,0,0.7)] flex items-start gap-2">
                      <Check className="size-4 text-[#2d6383] mt-0.5 flex-shrink-0" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Selecting Colors & Three Palettes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] mb-6 text-[#2d6383]">
              The Three Palette System
            </h2>
            <p className="font-['Inter',sans-serif] text-[18px] leading-[1.6] text-[rgba(0,0,0,0.7)] mb-10">
              We developed three specialized palettes, each optimized for different data visualization scenarios. Each palette underwent rigorous testing for contrast ratios, color blindness simulation, and perceptual uniformity.
            </p>

            {/* Categorical Palette */}
            <div className="mb-12">
              <h3 className="font-['Roboto_Slab',serif] text-[28px] tracking-[1.2px] mb-3 text-[#2e2e2e]">
                Categorical Palette
              </h3>
              <p className="font-['Inter',sans-serif] text-[16px] leading-[1.6] text-[rgba(0,0,0,0.7)] mb-4">
                For distinct, unordered categories. Maximum perceptual distance between adjacent colors.
              </p>
              <div className="flex flex-wrap gap-2">
                {categoricalColors.map((color, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div 
                      className="w-16 h-16 rounded-[8px] shadow-sm border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-['Inter',sans-serif] text-[12px] text-[rgba(0,0,0,0.6)]">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sequential Palette */}
            <div className="mb-12">
              <h3 className="font-['Roboto_Slab',serif] text-[28px] tracking-[1.2px] mb-3 text-[#2e2e2e]">
                Sequential Palette
              </h3>
              <p className="font-['Inter',sans-serif] text-[16px] leading-[1.6] text-[rgba(0,0,0,0.7)] mb-4">
                For ordered data with progressive values. Smooth gradient from light to dark.
              </p>
              <div className="flex flex-wrap gap-2">
                {sequentialColors.map((color, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div 
                      className="w-16 h-16 rounded-[8px] shadow-sm border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-['Inter',sans-serif] text-[12px] text-[rgba(0,0,0,0.6)]">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diverging Palette */}
            <div className="mb-12">
              <h3 className="font-['Roboto_Slab',serif] text-[28px] tracking-[1.2px] mb-3 text-[#2e2e2e]">
                Diverging Palette
              </h3>
              <p className="font-['Inter',sans-serif] text-[16px] leading-[1.6] text-[rgba(0,0,0,0.7)] mb-4">
                For data with a meaningful midpoint. Two distinct hues diverging from a neutral center.
              </p>
              <div className="flex flex-wrap gap-2">
                {divergingColors.map((color, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div 
                      className="w-16 h-16 rounded-[8px] shadow-sm border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-['Inter',sans-serif] text-[12px] text-[rgba(0,0,0,0.6)]">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 3: Example Chart with Labels & Legends */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] mb-6 text-[#2d6383]">
              In Practice
            </h2>
            <p className="font-['Inter',sans-serif] text-[18px] leading-[1.6] text-[rgba(0,0,0,0.7)] mb-8">
              Here's how the categorical palette works in a real-world chart, with properly styled labels, axes, and legend components that maintain visual hierarchy and readability.
            </p>

            <div className="bg-white border-2 border-[#e1e8ed] rounded-[16px] p-8">
              <h3 className="font-['Roboto_Slab',serif] text-[20px] tracking-[1px] mb-6 text-[#2e2e2e]">
                Monthly Revenue Overview
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e1e8ed" />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fill: '#666', fontFamily: 'Inter, sans-serif', fontSize: 14 }}
                    stroke="#999"
                  />
                  <YAxis 
                    tick={{ fill: '#666', fontFamily: 'Inter, sans-serif', fontSize: 14 }}
                    stroke="#999"
                    label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft', style: { fill: '#666', fontFamily: 'Inter, sans-serif', fontSize: 14 } }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: 14,
                      borderRadius: 8,
                      border: '1px solid #e1e8ed',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{ 
                      fontFamily: 'Inter, sans-serif', 
                      fontSize: 14,
                      paddingTop: 20
                    }}
                  />
                  <Bar dataKey="sales" fill={categoricalColors[0]} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="costs" fill={categoricalColors[1]} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="profit" fill={categoricalColors[2]} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-[#f8fafb] border border-[#e1e8ed] rounded-[12px] p-4">
                <p className="font-['Roboto_Slab',serif] text-[16px] mb-2 text-[#2e2e2e]">Typography</p>
                <p className="font-['Inter',sans-serif] text-[14px] text-[rgba(0,0,0,0.7)]">
                  Inter for labels, 14px minimum size for accessibility
                </p>
              </div>
              <div className="bg-[#f8fafb] border border-[#e1e8ed] rounded-[12px] p-4">
                <p className="font-['Roboto_Slab',serif] text-[16px] mb-2 text-[#2e2e2e]">Grid Lines</p>
                <p className="font-['Inter',sans-serif] text-[14px] text-[rgba(0,0,0,0.7)]">
                  Subtle dashed lines (#e1e8ed) for visual structure
                </p>
              </div>
              <div className="bg-[#f8fafb] border border-[#e1e8ed] rounded-[12px] p-4">
                <p className="font-['Roboto_Slab',serif] text-[16px] mb-2 text-[#2e2e2e]">Legend</p>
                <p className="font-['Inter',sans-serif] text-[14px] text-[rgba(0,0,0,0.7)]">
                  Positioned below chart with adequate spacing
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 4: Usage Guidelines */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] mb-6 text-[#2d6383]">
              Usage Guidelines
            </h2>
            <p className="font-['Inter',sans-serif] text-[18px] leading-[1.6] text-[rgba(0,0,0,0.7)] mb-8">
              Clear guidelines ensure consistent implementation across teams and products.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-[#2d6383] pl-6">
                <h3 className="font-['Roboto_Slab',serif] text-[20px] tracking-[1px] mb-2 text-[#2e2e2e]">
                  When to Use Categorical
                </h3>
                <p className="font-['Inter',sans-serif] text-[16px] leading-[1.6] text-[rgba(0,0,0,0.7)] mb-2">
                  Use for distinct, unordered categories like product lines, departments, or regions. Start with the first color and proceed sequentially.
                </p>
                <p className="font-['Inter',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] italic">
                  Examples: Bar charts, pie charts, scatter plots with categories
                </p>
              </div>

              <div className="border-l-4 border-[#6eb6d6] pl-6">
                <h3 className="font-['Roboto_Slab',serif] text-[20px] tracking-[1px] mb-2 text-[#2e2e2e]">
                  When to Use Sequential
                </h3>
                <p className="font-['Inter',sans-serif] text-[16px] leading-[1.6] text-[rgba(0,0,0,0.7)] mb-2">
                  Use for ordered data with a natural progression from low to high. Map data values to color intensity linearly.
                </p>
                <p className="font-['Inter',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] italic">
                  Examples: Heat maps, choropleth maps, density plots
                </p>
              </div>

              <div className="border-l-4 border-[#4fb5a0] pl-6">
                <h3 className="font-['Roboto_Slab',serif] text-[20px] tracking-[1px] mb-2 text-[#2e2e2e]">
                  When to Use Diverging
                </h3>
                <p className="font-['Inter',sans-serif] text-[16px] leading-[1.6] text-[rgba(0,0,0,0.7)] mb-2">
                  Use when data has a meaningful midpoint (like zero, average, or target). Center point should be neutral.
                </p>
                <p className="font-['Inter',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] italic">
                  Examples: Variance from target, sentiment analysis, temperature anomalies
                </p>
              </div>

              <div className="bg-[#fff8f0] border border-[#f5d9b8] rounded-[12px] p-6 mt-8">
                <h3 className="font-['Roboto_Slab',serif] text-[18px] tracking-[1px] mb-3 text-[#2e2e2e]">
                  ⚠️ Important Considerations
                </h3>
                <ul className="space-y-2">
                  <li className="font-['Inter',sans-serif] text-[16px] text-[rgba(0,0,0,0.7)]">
                    • Never use categorical colors for ordered data
                  </li>
                  <li className="font-['Inter',sans-serif] text-[16px] text-[rgba(0,0,0,0.7)]">
                    • Limit categorical palettes to 12 colors maximum
                  </li>
                  <li className="font-['Inter',sans-serif] text-[16px] text-[rgba(0,0,0,0.7)]">
                    • Always test with color blindness simulators
                  </li>
                  <li className="font-['Inter',sans-serif] text-[16px] text-[rgba(0,0,0,0.7)]">
                    • Include redundant encoding (patterns, labels) for critical data
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 5: Complexity in Creating a Unified Library */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] mb-6 text-[#2d6383]">
              Implementation Complexity
            </h2>
            <p className="font-['Inter',sans-serif] text-[18px] leading-[1.6] text-[rgba(0,0,0,0.7)] mb-8">
              Creating a unified color library required more than just selecting colors. We faced technical, organizational, and maintenance challenges throughout the process.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-['Roboto_Slab',serif] text-[24px] tracking-[1.2px] mb-4 text-[#2e2e2e]">
                  Technical Challenges
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#f8fafb] rounded-[12px] p-5">
                    <p className="font-['Roboto_Slab',serif] text-[16px] mb-2 text-[#2e2e2e]">
                      Cross-platform consistency
                    </p>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[rgba(0,0,0,0.7)]">
                      Colors rendered differently across web, iOS, Android, and various charting libraries. Required extensive testing and calibration.
                    </p>
                  </div>
                  <div className="bg-[#f8fafb] rounded-[12px] p-5">
                    <p className="font-['Roboto_Slab',serif] text-[16px] mb-2 text-[#2e2e2e]">
                      Accessibility validation
                    </p>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[rgba(0,0,0,0.7)]">
                      Automated tools for testing all color combinations against backgrounds for WCAG AA compliance at scale.
                    </p>
                  </div>
                  <div className="bg-[#f8fafb] rounded-[12px] p-5">
                    <p className="font-['Roboto_Slab',serif] text-[16px] mb-2 text-[#2e2e2e]">
                      Dark mode adaptation
                    </p>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[rgba(0,0,0,0.7)]">
                      Palettes needed adjustments for dark backgrounds while maintaining relative contrast and perceptual relationships.
                    </p>
                  </div>
                  <div className="bg-[#f8fafb] rounded-[12px] p-5">
                    <p className="font-['Roboto_Slab',serif] text-[16px] mb-2 text-[#2e2e2e]">
                      Token management
                    </p>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[rgba(0,0,0,0.7)]">
                      Building design token infrastructure to sync colors across Figma, code repositories, and documentation.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-['Roboto_Slab',serif] text-[24px] tracking-[1.2px] mb-4 text-[#2e2e2e]">
                  Organizational Challenges
                </h3>
                <ul className="space-y-3">
                  <li className="font-['Inter',sans-serif] text-[16px] leading-[1.6] text-[rgba(0,0,0,0.7)] flex items-start gap-3">
                    <span className="text-[#2d6383] mt-1">•</span>
                    <span><strong>Migration strategy:</strong> Coordinating updates across 8 product teams without breaking existing charts or disrupting user workflows.</span>
                  </li>
                  <li className="font-['Inter',sans-serif] text-[16px] leading-[1.6] text-[rgba(0,0,0,0.7)] flex items-start gap-3">
                    <span className="text-[#2d6383] mt-1">•</span>
                    <span><strong>Documentation:</strong> Creating comprehensive guides, code examples, and decision trees for designers and developers across different skill levels.</span>
                  </li>
                  <li className="font-['Inter',sans-serif] text-[16px] leading-[1.6] text-[rgba(0,0,0,0.7)] flex items-start gap-3">
                    <span className="text-[#2d6383] mt-1">•</span>
                    <span><strong>Governance:</strong> Establishing a review process for exceptions and special cases while maintaining system integrity.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#e8f1f7] border-2 border-[#2d6383] rounded-[16px] p-8">
                <h3 className="font-['Roboto_Slab',serif] text-[24px] tracking-[1.2px] mb-4 text-[#2e2e2e]">
                  Results
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="font-['Roboto_Slab',serif] text-[36px] tracking-[1.2px] text-[#2d6383] mb-1">
                      8
                    </p>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[rgba(0,0,0,0.7)]">
                      Product teams adopted
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-['Roboto_Slab',serif] text-[36px] tracking-[1.2px] text-[#2d6383] mb-1">
                      100%
                    </p>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[rgba(0,0,0,0.7)]">
                      WCAG AA compliant
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-['Roboto_Slab',serif] text-[36px] tracking-[1.2px] text-[#2d6383] mb-1">
                      45%
                    </p>
                    <p className="font-['Inter',sans-serif] text-[14px] text-[rgba(0,0,0,0.7)]">
                      Faster chart creation
                    </p>
                  </div>
                </div>
              </div>
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