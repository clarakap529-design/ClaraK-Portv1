import { Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

// Import thumbnail images
import imgScreenshot20260216At105144Am2 from "figma:asset/a4b3ac0215db4332e80b6fc41e9c7d95900e2edb.png";
import imgScreenshot20251006At93728Am11 from "figma:asset/8ff3ae8c343c0d4519aadf5ddb26ab21ffb959de.png";
import imgOverviewAllCountries11 from "figma:asset/b5735599f29d6f021c8acc9c1efb3a1f4ad3300f.png";
import imgOverview1 from "figma:asset/16e60006a6c1b9acd0113394b3380d6003257856.png";
import imgImage81 from "figma:asset/98f8b9e0eb3f5c99fbda50d01a688b338c6a64de.png";
import imgInfinitytsQaVndlyComDashboardsSummary11 from "figma:asset/f078c6646da0e293a7666e77db6436b508c416af.png";
import imgScreenshot20260216At112702Am1 from "figma:asset/7f33f782ae2536f97c96e7627e052086238b1ba6.png";
import imgImage110 from "figma:asset/e9f67eaa1eff5d1c086b71bd07ef85f37e28da35.png";
import imgPrototype1 from "figma:asset/2006a35b6ad8684f507a82f5696b4da1fe2d0fd4.png";
import imgPrototype2 from "figma:asset/6b16a97db5138230ea1cd167ee6298756ed73ec8.png";
import imgPrototype3 from "figma:asset/1c505bcd09fa2fdba79689871f7d803991e803f8.png";
import imgStyleGuide1 from "figma:asset/0a1f2a2958c6af4c4a008abdea5cee549423cf4a.png";
import imgStyleGuide2 from "figma:asset/f76886f468de54e23802bbe7ffba5ea153e570ad.png";
import imgStyleGuide3 from "figma:asset/4d90570911f5ab8aaa2e2ce6a20d9529d03ffc0a.png";
import imgStyleGuide4 from "figma:asset/94ecc8fa1f6af706bb0e99effd21b65d919343c7.png";
import imgStyleGuide5 from "figma:asset/b01417eabc578061d5cf994a801fad6688f6b260.png";
import imgStyleGuide6 from "figma:asset/c682a85a2dce35feca78064de68613e6ba1d4a44.png";
import imgStyleGuide7 from "figma:asset/1dfbf21b2e60153c245d237d352bde9d98e7f057.png";
import imgDefaultTypography from "figma:asset/555db8680678882a74f287b815eaa07c21085add.png";
import imgDecisionTree from "figma:asset/f75671d87c70410e87ebf83f11ede032613a9e83.png";

const chartData = [
  { id: 'jan', month: 'Jan', sales: 4200, costs: 2800, profit: 1400 },
  { id: 'feb', month: 'Feb', sales: 3800, costs: 2600, profit: 1200 },
  { id: 'mar', month: 'Mar', sales: 5100, costs: 3200, profit: 1900 },
  { id: 'apr', month: 'Apr', sales: 4600, costs: 2900, profit: 1700 },
  { id: 'may', month: 'May', sales: 5800, costs: 3500, profit: 2300 },
  { id: 'jun', month: 'Jun', sales: 6200, costs: 3800, profit: 2400 },
];

const categoricalColors = [
  { color: '#1BADB9', label: 'Teal 500' },
  { color: '#1C3A8E', label: 'Blue 800' },
  { color: '#E8622A', label: 'Orange 500' },
  { color: '#45A8DC', label: 'Azure 500' },
  { color: '#B82878', label: 'Magneta 600' },
  { color: '#1A7840', label: 'Green 600' },
  { color: '#8B7ED4', label: 'Purple 500' },
  { color: '#D49010', label: 'Amber 500' },
  { color: '#1A6E6E', label: 'Teal 700' },
  { color: '#3D3DAA', label: 'Indigo 700' },
  { color: '#9C3C1A', label: 'Orange 700' },
  { color: '#1A5C8A', label: 'Azure 700' },
  { color: '#6040A0', label: 'Purple 700' },
  { color: '#D44040', label: 'Coral 600' },
  { color: '#1A4A28', label: 'Green 800' },
  { color: '#9C6A1A', label: 'Amber 700' },
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [userReply, setUserReply] = useState<string | null>(null);

  const auroraCharts = [
    { src: imgScreenshot20260216At105144Am2, title: 'Aurora thru GWT (RW)', subtitle: 'eg. Report Writer, Dashboards' },
    { src: imgScreenshot20251006At93728Am11, title: 'Directly to Aurora', subtitle: 'Discovery Boards' },
    { src: imgOverviewAllCountries11, title: 'Aurora thru Cards Framework', subtitle: 'EG. any Hub, Strategic Sourcing' }
  ];

  const bespokeCharts = [
    { src: imgOverview1, title: 'D3', subtitle: 'eg. Prism' },
    { src: imgImage81, title: 'reCharts', subtitle: 'eg. Peakon' },
    { src: imgInfinitytsQaVndlyComDashboardsSummary11, title: 'Nivo', subtitle: 'eg. Vindly' },
    { src: imgScreenshot20260216At112702Am1, title: 'Plotly', subtitle: 'eg. Sana' },
    { src: imgImage110, title: 'Highcharts', subtitle: 'Resource Scheduling' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-[#fdf0e8]">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex gap-2 mb-4">
              <p className="font-['Roboto_Slab',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383]">
                #DataViz
              </p>
              <p className="font-['Roboto_Slab',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383]">
                #DesignSystem
              </p>
            </div>
            <h1 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] mb-6 text-[#2e2e2e] leading-[60px]">
              Data Visualizations
            </h1>
            <div className="font-['Inter',sans-serif] font-medium text-[22px] leading-[32px] text-[rgba(0,0,0,0.7)] max-w-3xl">
              <p className="mb-4">Workday's data visualization had grown organically across product lines, leaving behind a fragmented ecosystem of mismatched styles, conflicting interactions, and no central ownership.</p>
              <p>
                As a designer on the Reporting team — one of the teams maintaining a charting library — I recognized it early on this wasn't a design debt problem. It was a platform risk.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-8 py-20">
          
          {/* Problem Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] mb-6 text-[#2d6383] leading-[60px]">
              Problem
            </h2>
            <div className="font-['Inter',sans-serif] text-[16px] leading-[22px] text-black mb-8 space-y-4">
              <p>
                The challenge ran deeper than visual inconsistency. Workday's decentralized approach meant every product team was making independent decisions — about components, interactions, and implementation — with no shared foundation to build from. Charts looked different, behaved differently, and were built differently depending on the application and data source.
              </p>
              <p>
                For designers, it was a constant time sink — no centralized source of truth meant recreating charts from scratch, draining time and compromising the polish.
              </p>
              <p>
                For end-users, the cost was trust. When data looks and behaves unpredictably, confidence in what it's telling you erodes.
              </p>
            </div>

            {/* Goals Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
              <div className="bg-[#f8fafb] border border-[#e1e8ed] rounded-[16px] p-6">
                <h3 className="font-['Roboto_Slab',serif] text-[20px] tracking-[1px] mb-3 text-[#2e2e2e] leading-[30px]">
                  Product-level Goals
                </h3>
                <ul className="space-y-2 list-disc ml-6">
                  <li className="font-['Inter',sans-serif] text-[16px] text-black leading-[22px]">
                    Define a visual style guide to unify data visualization across products
                  </li>
                  <li className="font-['Inter',sans-serif] text-[16px] text-black leading-[22px]">
                    Modernize the default color palette with accessible colors
                  </li>
                  <li className="font-['Inter',sans-serif] text-[16px] text-black leading-[22px]">
                    Provide clear usage guidelines around library adoption
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#f8fafb] border border-[#e1e8ed] rounded-[16px] p-6">
                <h3 className="font-['Roboto_Slab',serif] text-[20px] tracking-[1px] mb-3 text-[#2e2e2e] leading-[30px]">
                  Platform-level Goals
                </h3>
                <ul className="space-y-2 list-disc ml-6">
                  <li className="font-['Inter',sans-serif] text-[16px] text-black leading-[22px]">
                    Define clear guidelines for chart selection and library implementation across design, product, and engineering
                  </li>
                  <li className="font-['Inter',sans-serif] text-[16px] text-black leading-[22px]">
                    Audit cross-product chart portability — library limitations, data source compatibility, and auditing risks
                  </li>
                  <li className="font-['Inter',sans-serif] text-[16px] text-black leading-[22px]">
                    Build a sustainable ownership & governance model
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] mb-6 text-[#2d6383] leading-[60px]">The Product-Level</h2>

            {/* Updated Color Palette Section */}
            <div className="mb-12">
              <p className="font-['Inter',sans-serif] text-[16px] leading-[22px] text-black mb-4">One of the first deliverables was a modernized, accessible color palette for data visualization — replacing the legacy defaults with a system designed around perceptual clarity, color-blindness simulation, and WCAG AA compliance.</p>
              <h3 className="font-['Roboto_Slab',serif] text-[26px] tracking-[1px] mb-1 text-[#2e2e2e]">Colors</h3>
              <h4 className="text-[18px] font-bold py-2">
                Original color palette (2016)
              </h4>

              {/* Legacy palette swatches */}
              <div className="flex gap-2 mb-6 pb-4">
                {[
                  { color: '#b2e0d4', label: 'viz 01' },
                  { color: '#6dbfaa', label: 'viz 02' },
                  { color: '#b8d4f0', label: 'viz 03' },
                  { color: '#5b7fd4', label: 'viz 04' },
                  { color: '#f8c8d4', label: 'viz 05' },
                  { color: '#f04080', label: 'viz 06' },
                  { color: '#fad8b0', label: 'viz 07' },
                  { color: '#f0a050', label: 'viz 08' },
                  { color: '#b8eef4', label: 'viz 09' },
                  { color: '#20b8cc', label: 'viz 10' },
                  { color: '#fef4b0', label: 'viz 11' },
                  { color: '#f0c020', label: 'viz 12' },
                  { color: '#ddd0f0', label: 'viz 15' },
                  { color: '#7050b8', label: 'viz 16' },
                ].map(({ color, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <div
                      className="w-12 h-12 rounded-[8px] border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                    <span className="font-['Inter',sans-serif] text-[10px] text-[rgba(0,0,0,0.55)] text-center">{label}</span>
                  </div>
                ))}
              </div>

              <p className="font-['Inter',sans-serif] text-[16px] leading-[22px] text-black mb-4">To ensure alignment, I organized a selection committee comprised of designers each&nbsp;&nbsp;representing a product pillar.</p>
              <p className="font-['Inter',sans-serif] text-[16px] leading-[22px] text-black mb-8">To support the decision-making process, I created several Loveable prototypes to evaluate palette options, simulate color blindness conditions, and preview them across common chart types.</p>

              {/* Prototype Thumbnails */}
              <div className="flex gap-4 mb-8 py-3">
                {[imgPrototype1, imgPrototype2, imgPrototype3].map((img, i) => (
                  <div
                    key={i}
                    className="flex-1 overflow-hidden rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`Prototype ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Updated Palette - Categorical only */}
              <h4 className="text-[18px] font-bold py-2">Updated accessible color palette</h4>
              <div className="flex justify-center">
                <div className="flex gap-2">
                  {categoricalColors.map((color, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className="w-12 h-12 rounded-[8px] border border-gray-200"
                        style={{ backgroundColor: color.color }}
                      />
                      <span className="font-['Inter',sans-serif] text-[10px] text-[rgba(0,0,0,0.55)] text-center whitespace-nowrap">{color.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="font-['Roboto_Slab',serif] text-[26px] tracking-[1px] mb-1 text-[#2e2e2e] mt-8">Style Guide (for Aurora Library)</h3>
              <p className="font-['Inter',sans-serif] text-[16px] leading-[22px] text-black mt-2 mb-4">During my charting audit, I discovered three distinct implementations of the Workday charting library — each with its own styles and patterns. Rather than defaulting to one over the others, I synthesized the common ground across all three to propose a standardized style guide that could work for everyone.</p>

              {/* Aurora Charts - Official Library */}
              <div className="my-8">
                <h4 className="text-[18px] font-bold py-2">
                  Aurora (Workday's official charting library)
                </h4>
                <div className="flex gap-6 items-center justify-center">
                  {auroraCharts.map((chart, index) => (
                    <div key={index} className="flex flex-col gap-2 items-start w-[320px]">
                      <div 
                        className="w-full h-[220px] overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity border border-gray-300 shadow-md"
                        onClick={() => setSelectedImage(chart.src)}
                      >
                        <img src={chart.src} alt={chart.title} className="w-full h-full object-cover" />
                      </div>
                      <p className="font-['Inter',sans-serif] font-bold text-[12px] leading-[15px] text-black text-center w-full">
                        {chart.title}
                      </p>
                      <p className="font-['Inter',sans-serif] font-medium text-[10px] leading-[15px] text-black text-center w-full">
                        {chart.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Style Guide Carousel */}
              <h4 className="text-[18px] font-bold py-2">
                Font & Style guide
              </h4>
              {(() => {
                const styleGuideSlides = [
                  { src: imgDefaultTypography, caption: 'Default Typography Styles and Border lines', sub: 'Font specs, divider lines, base line styling' },
                  { src: imgStyleGuide2, caption: 'Hover on Chart Element (Marker)', sub: 'Highlights measure in legend. Shows the category item and metric.' },
                  { src: imgStyleGuide3, caption: 'Hover on Legend (Measure)', sub: 'Dims other legend items and their corresponding graphics. It is not a transparency, rather it adjusts the lightness.' },
                  { src: imgStyleGuide4, caption: 'Hover on a Category (Dimension Members)', sub: 'Dims other items' },
                  { src: imgStyleGuide5, caption: 'Click on Chart element (Marker)', sub: 'All other items lighten. Measure in legend is selected. Tooltip shows the category item and metric.' },
                  { src: imgStyleGuide7, caption: 'Click on Category (Dimension Members)', sub: 'All chart elements are individually highlighted' },
                  { src: imgStyleGuide6, caption: 'Click on Legend (Measure)', sub: 'Corresponding chart items are highlighted' },
                ];
                const slide = styleGuideSlides[Math.min(carouselIndex, styleGuideSlides.length - 1)];
                return (
                  <div className="mt-4 mb-4">
                    <div className="relative flex items-center gap-3">
                      <button
                        onClick={() => setCarouselIndex((carouselIndex - 1 + styleGuideSlides.length) % styleGuideSlides.length)}
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                        aria-label="Previous"
                      >
                        <ChevronLeft size={18} className="text-[#2d6383]" />
                      </button>
                      <div
                        className="flex-1 overflow-hidden border-b border-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ height: '500px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                        onClick={() => setSelectedImage(slide.src)}
                      >
                        <img src={slide.src} alt={slide.caption} className="w-full h-full object-contain object-center bg-white py-6" />
                      </div>
                      <button
                        onClick={() => setCarouselIndex((carouselIndex + 1) % styleGuideSlides.length)}
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                        aria-label="Next"
                      >
                        <ChevronRight size={18} className="text-[#2d6383]" />
                      </button>
                    </div>
                    <div className="text-center mt-2">
                      <p className="font-['Inter',sans-serif] font-bold text-[14px] leading-[15px] text-black">{slide.caption}</p>
                      <p className="font-['Inter',sans-serif] text-[14px] leading-[15px] text-[rgba(0,0,0,0.55)]">{slide.sub}</p>
                    </div>
                    <div className="flex justify-center gap-1.5 mt-3">
                      {styleGuideSlides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCarouselIndex(i)}
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${i === carouselIndex ? 'bg-[#2d6383]' : 'bg-gray-300'}`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}

              <h3 className="font-['Roboto_Slab',serif] text-[26px] tracking-[1px] mb-1 text-[#2e2e2e] mt-12">How to Choose a Chart</h3>
              <p className="font-['Inter',sans-serif] text-[16px] leading-[22px] text-black mt-2">Through my audit and conversations with the seven other designers in the selection committee, a recurring theme emerged that app teams had no clear guidance on which charting library to use or when.</p>
              <h4 className="text-[18px] font-bold py-2 mt-4">Other charting libraries</h4>
              <div className="grid grid-cols-3 gap-6">
                {bespokeCharts.map((chart, index) => (
                  <div key={index} className="flex flex-col gap-2 items-start">
                    <div 
                      className="w-full h-[220px] overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity border border-gray-300 shadow-md"
                      onClick={() => setSelectedImage(chart.src)}
                    >
                      <img src={chart.src} alt={chart.title} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-['Inter',sans-serif] font-bold text-[12px] leading-[15px] text-black text-center w-full">
                      {chart.title}
                    </p>
                    <p className="font-['Inter',sans-serif] font-medium text-[10px] leading-[15px] text-black text-center w-full">
                      {chart.subtitle}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-['Inter',sans-serif] text-[16px] leading-[22px] text-black mt-4 mb-10">I designed a decision tree to give designers and engineers a simple, opinionated framework for selecting the right library for their use case.</p>
              <div
                className="w-full rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity mb-6"
                onClick={() => setSelectedImage(imgDecisionTree)}
              >
                <img src={imgDecisionTree} alt="Decision tree for choosing a charting library" className="w-full h-auto object-contain" />
              </div>

              <h3 className="font-['Roboto_Slab',serif] text-[40px] tracking-[1.6px] mb-2 mt-20 text-[#2d6383]">The Platform-Level</h3>
              <p className="font-['Inter',sans-serif] text-[16px] leading-[22px] text-black mb-8 mt-3">My diagram revealed that a truly unified charting library wasn't just a design problem — it was an organizational and architectural one. The scope raised hard questions across every layer.</p>

              {/* Usage Guidelines */}
              <div className="space-y-6 mt-8">
                {[
                  {
                    borderColor: '#1BADB9',
                    title: 'Look & Feel vs Interactions',
                    body: 'Were we solving for visual consistency only, or interactions too? Because interactions implied shared implementation — a much bigger lift.',
                    example: 'Examples: Bar charts, pie charts, scatter plots with categories',
                  },
                  {
                    borderColor: '#45A8DC',
                    title: 'Library migration',
                    body: 'The accessibility team was pushing to move from Aurora to Highcharts, adding a competing priority to an already complex landscape.',
                    example: 'Examples: Heat maps, choropleth maps, density plots',
                  },
                  {
                    borderColor: '#1A7840',
                    title: 'Governance & Ownership',
                    body: 'No single team was accountable for the charting ecosystem, leaving critical decisions unresolved and misaligned.',
                    example: 'Examples: Variance from target, sentiment analysis, temperature anomalies',
                  },
                  {
                    borderColor: '#C4521A',
                    title: 'Data Architecture',
                    body: 'The data powering charts is defined differently across apps — making portability a significant infrastructure challenge, not just a design one.',
                    example: '',
                  },
                ].map(({ borderColor, title, body, example }) => (
                  <div key={title} className="pl-4 py-1" style={{ borderLeft: `3px solid ${borderColor}` }}>
                    <h4 className="font-['Inter',sans-serif] text-[16px] text-black mb-1">{title}</h4>
                    <p className="font-['Inter',sans-serif] text-[14px] leading-[22px] text-black mb-1">{body}</p>
                  </div>
                ))}
              </div>
            </div>

          </motion.section>

          {/* Divider */}
          <hr className="border-t border-gray-200 mb-6" />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left pt-6 inline-flex flex-col"
          >
            <h3 className="font-['Roboto_Slab',serif] text-[32px] tracking-[1.6px] mb-6 text-[#2e2e2e]">Interested in hearing what happened?</h3>
            {!userReply ? (
              <div className="flex flex-col gap-3 items-start">
                <button
                  onClick={() => setUserReply('Yes, tell me more.')}
                  className="bg-white text-[#2d6383] border border-[#2d6383] px-8 py-3 rounded-[12px] font-['Inter',sans-serif] text-[18px] hover:bg-[#2d6383]/10 transition-colors"
                >
                  Yes, tell me more.
                </button>
                <button
                  onClick={() => setUserReply('No thanks')}
                  className="bg-white text-[#2d6383] border border-[#2d6383] px-8 py-3 rounded-[12px] font-['Inter',sans-serif] text-[18px] hover:bg-[#2d6383]/10 transition-colors"
                >
                  No thanks
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-4 w-full"
              >
                {/* User bubble */}
                <div className="flex justify-end w-full">
                  <div className="bg-[#e8eaed] content-stretch flex items-center justify-end px-[16px] py-[8px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] shrink-0">
                    <p className="font-['Inter',sans-serif] font-normal text-[#2e2e2e] text-[16px] tracking-[-0.48px] leading-[1.25] whitespace-pre">{userReply}</p>
                  </div>
                </div>

                {/* AI response — only shown for "Yes" reply */}
                {userReply === 'Yes, tell me more.' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.45 }}
                    className="flex justify-start w-full"
                  >
                    <p className="font-['Roboto_Slab',serif] font-normal text-[#2d6383] text-[16px] tracking-[-0.48px] leading-[1.25]">
                      Great, let's chat! Here's my{' '}
                      <a
                        href="mailto:clarakap529@gmail.com"
                        className="underline hover:opacity-70 transition-opacity"
                      >
                        email
                      </a>
                      .
                    </p>
                  </motion.div>
                )}
                {userReply === 'No thanks' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.45 }}
                    className="flex justify-start w-full"
                  >
                    <p className="font-['Roboto_Slab',serif] font-normal text-[#2d6383] text-[16px] tracking-[-0.48px] leading-[1.25]">
                      No problem! Thanks for visiting my site.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Full size chart"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}