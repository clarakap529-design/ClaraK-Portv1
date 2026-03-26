import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-dlwaci8ljv";
import imgLineage2 from "figma:asset/ce7b9d9fdb9f2d058383f92ad930c1382017cff7.png";
import imgScreenshot20241008At35946Pm1 from "figma:asset/150944f4a29ca5630873f2f6789c568508774473.png";
import imgScreenshot20251111At10921Pm1 from "figma:asset/784887bc0d1dad4db13e8de9b2da60a6ad409b20.png";
import imgTimesByStage1 from "figma:asset/0773ac89427f068f5e1f3ef2c1e19ff7c5ba0171.png";
import imgLineageSideBtySide2 from "figma:asset/86d002be85922e3132651edd15ef7f1d7e535f1a.png";
import imgSidebysideTabular2 from "figma:asset/d5fb2f7043e117ce188888dd3fadb9fd0c4cc03c.png";
import imgViz1View2 from "figma:asset/7d7af87e85f262f461226eb88ae33330de4a6902.png";
import imgGrid2 from "figma:asset/c639ea7a9cf7f2e0441e9c9b44e4aff55afca607.png";
import imgSnapshot1 from "figma:asset/444217d9cd0b373b3b16f0ca8f9012cc6b1e6f85.png";
import { imgLineageSideBtySide1, imgSidebysideTabular1, imgViz1View1, imgGrid1 } from "../imports/svg-k10yt";

export function DebuggingProject() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <header className="bg-[#f2f2f7] w-full pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex gap-2 mb-4">
              <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab] inline-block">
                #Analytics
              </p>
              <p className="font-['Inter',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383] font-[Roboto_Slab] inline-block">
                #AI
              </p>
            </div>
            <h1 className="font-['Roboto_Slab',serif] text-[64px] tracking-[1.6px] mb-6 text-[#2e2e2e]">
              Debugging Pipelines
            </h1>
            <p className="font-['Inter',sans-serif] text-[24px] leading-[1.5] text-[rgba(0,0,0,0.7)] max-w-3xl">
              When customers ask 'Why is my dataset taking forever?', the answer is usually found by auditing changes made between publishes. Our solution is a debugging tool that allows customers compare pipeline snapshots to pinpoint exact changes and fix performance bottlenecks fast.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Complexity of Pipeline Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-[#4f4f4f] pt-10"
      >
        <div className="flex flex-col items-center pb-10 px-32 text-[#4d686b] text-center">
          <p className="font-['Roboto_Slab',sans-serif] font-medium text-[32px] tracking-[-0.96px] leading-[1.25] mb-6">
            Design Complexity is rooted in the Product Complexity
          </p>
          <p className="font-['Roboto',sans-serif] text-[20px] tracking-[-0.9px] leading-[1.3]">
            Complexity arises from the hierarchical data model, large-scale pipelines, and hidden or ambiguous changes within the downstream impacts.
          </p>
        </div>

        {/* Lineage Visualization */}
        <div className="relative h-[588px] max-w-[1280px] mx-auto">
          <div className="absolute top-0 left-0 right-0 flex gap-4 justify-center px-8 h-12 items-end">
            <div className="flex items-center justify-center px-1 h-10 w-[200px] border-b-2 border-[#4d686b]">
              <p className="font-['Roboto',sans-serif] font-bold text-[24px] text-[#4d686b] leading-[1.4]">
                Level 1
              </p>
            </div>
            <div className="flex items-center justify-center px-1 h-10 w-[200px]">
              <p className="font-['Roboto',sans-serif] font-bold text-[24px] text-[#4d686b] leading-[1.4]">
                Level 2
              </p>
            </div>
            <div className="flex items-center justify-center px-1 h-10 w-[200px]">
              <p className="font-['Roboto',sans-serif] font-bold text-[24px] text-[#4d686b] leading-[1.4]">
                Level 3
              </p>
            </div>
          </div>
          
          <div className="absolute top-12 bottom-0 left-1/2 -translate-x-1/2 w-[1280px] bg-[#f6f7f8] overflow-hidden">
            <div className="absolute bottom-[27px] left-[40px] top-[8px] w-auto h-auto">
              <img alt="Pipeline lineage diagram showing hierarchical data flow" className="w-full h-full object-cover" src={imgLineage2} />
            </div>
            <p className="absolute top-[169px] right-[167.5px] translate-x-1/2 w-[255px] font-['Roboto',sans-serif] text-[20px] text-[#4d686b] text-center tracking-[-0.9px] leading-[1.3]">
              <span>Every published dataset has a </span>
              <span className="font-semibold">lineage</span>
              <span> that shows upstream datasets and tables.</span>
            </p>
          </div>

          <div className="absolute left-[896px] top-[244px] size-[110.58px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111 111">
              <path clipRule="evenodd" d={svgPaths.p5721900} fill="#4D686B" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </motion.section>

      {/* Known Technical Constraints */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#dfebeb] py-10"
      >
        <div className="max-w-7xl mx-auto px-12">
          <h2 className="font-['Roboto_Slab',sans-serif] font-medium text-[32px] text-[#2d6383] text-center tracking-[-0.96px] leading-[1.25] mb-10">
            Known Technical Constraints
          </h2>

          {/* Constraint 1 */}
          <div className="flex flex-wrap gap-6 items-center justify-end mb-10">
            <div className="flex flex-col w-[261px]">
              <p className="font-['Roboto_Slab',sans-serif] text-[22px] text-[#2d6383] tracking-[-0.66px] leading-[1.25]">
                <span className="font-bold">Constraint 1</span>
                <br /><br />
                It's "too much" to render two lineages. Due to size of many lineages, it would effect in rendering times.
              </p>
            </div>
            <div className="bg-white h-[400px] w-[872px] overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-[436px] border border-[#8ab5af]">
                <img alt="Screenshot showing lineage rendering constraint" className="w-full h-full object-cover" src={imgScreenshot20241008At35946Pm1} />
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-[436px] border border-[#8ab5af]">
                <img alt="Screenshot showing lineage rendering constraint" className="w-full h-full object-cover" src={imgScreenshot20241008At35946Pm1} />
              </div>
            </div>
          </div>

          {/* Constraint 2 */}
          <div className="flex flex-wrap gap-8 items-center justify-start mb-10 pt-8">
            <div className="w-[552px] h-[261px] border border-[#6b96ac]">
              <img alt="Screenshot showing lineage highlighting constraint" className="w-full h-full object-cover" src={imgScreenshot20251111At10921Pm1} />
            </div>
            <div className="w-[476px]">
              <p className="font-['Roboto_Slab',sans-serif] text-[22px] text-[#2d6383] tracking-[-0.66px] leading-[1.25]">
                <span className="font-bold">Constraint 2</span>
                <br /><br />
                We don't have any highlighting or drawing functionality in the lineage view. This would be a new feature and out of scope.
              </p>
            </div>
          </div>

          {/* Constraint 3 */}
          <div className="flex flex-wrap gap-10 items-center justify-center pt-8">
            <div className="w-[437px]">
              <p className="font-['Roboto_Slab',sans-serif] text-[22px] text-[#2d6383] tracking-[-0.66px] leading-[1.25]">
                <span className="font-bold">Constraint 3</span>
                <br /><br />
                We technically cannot break down the run times or row counts per stage or dataset so we cannot pinpoint the stage responsible for the increase in run times.
              </p>
            </div>
            <div className="w-[413px] h-[428px] border border-[#6b96ac]">
              <img alt="Screenshot showing runtime breakdown constraint" className="w-full h-full object-cover" src={imgTimesByStage1} />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Considerations for UX Patterns */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white py-12"
      >
        <div className="max-w-7xl mx-auto px-12">
          <h2 className="font-['Roboto_Slab',sans-serif] font-medium text-[32px] text-center tracking-[-0.96px] leading-[1.25] mb-12">
            Considerations for UX Patterns
          </h2>

          {/* First comparison: Side by Side */}
          <div className="relative mb-8">
            <div className="relative h-[667px] w-full max-w-[1200px] mx-auto">
              {/* Left side - lineage visualization */}
              <div className="absolute left-[123px] top-[57px] w-[470.621px] h-[572.313px]">
                <img alt="Side by side lineage visualization" className="w-full h-full object-cover" src={imgLineageSideBtySide2} />
              </div>
              
              {/* Vertical axis label */}
              <div className="absolute left-[580px] top-0 w-[120px] h-[667px] flex flex-col items-center gap-[10px]">
                <p className="font-['Roboto',sans-serif] font-semibold text-[20px] text-[#4d686b] text-center tracking-[-0.9px] leading-[1.3] h-[40px] flex items-center justify-center w-[153px]">
                  Side by Side
                </p>
                <div className="h-[589px] w-0 relative">
                  <div className="absolute top-0 left-0 w-[589px] h-0 origin-top-left rotate-90">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 589 12">
                      <path d={svgPaths.p2f4d2700} fill="#4D686B" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right side - tabular view */}
              <div className="absolute left-[666px] top-[50px] w-[476px] h-[424px]">
                <img alt="Side by side tabular view" className="w-full h-full object-cover" src={imgSidebysideTabular2} />
                <p className="absolute top-[-11px] left-1/2 -translate-x-1/2 font-['Roboto',sans-serif] italic text-[16px] text-[#4d686b] text-center tracking-[-0.72px] leading-[1.09] w-[450px]">
                  Concerns over number of nested pipelines
                </p>
              </div>
            </div>

            {/* Horizontal axis */}
            <div className="flex gap-4 items-center justify-center mt-4">
              <p className="font-['Roboto',sans-serif] font-semibold text-[20px] text-[#4d686b] text-right tracking-[-0.9px] leading-[1.3] w-[89px]">
                Visual
              </p>
              <div className="flex-1 h-0 relative max-w-[1050px]">
                <svg className="block w-full h-3" fill="none" preserveAspectRatio="none" viewBox="0 0 1050 12">
                  <path d={svgPaths.p3983cff0} fill="#4D686B" />
                </svg>
              </div>
              <p className="font-['Roboto',sans-serif] font-semibold text-[20px] text-[#4d686b] tracking-[-0.9px] leading-[1.3] w-[109px]">
                Tabular
              </p>
            </div>
          </div>

          {/* Second comparison: Single View */}
          <div className="relative mt-16">
            <div className="relative h-[660px] w-full max-w-[1200px] mx-auto">
              {/* Left side - visualization */}
              <div className="absolute left-[118px] top-[31px] w-[497.664px] h-[470px]">
                <img alt="Single view visualization" className="w-full h-full object-cover" src={imgViz1View2} />
                <p className="absolute top-[30px] left-1/2 -translate-x-1/2 font-['Roboto',sans-serif] italic text-[16px] text-[#4d686b] text-center tracking-[-0.72px] leading-[1.09] w-[292px]">
                  Internal users & our product team hands-down prefer the pipeline visualization over a tabular format.
                </p>
              </div>
              
              {/* Vertical axis label */}
              <div className="absolute left-[579px] top-0 w-[122.88px] h-[660px] flex flex-col items-center gap-[10px]">
                <div className="h-[558px] w-0 relative">
                  <div className="absolute top-0 left-0 w-[558px] h-0 origin-top-left rotate-90">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 558 12">
                      <path d={svgPaths.p33627300} fill="#4D686B" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Roboto',sans-serif] font-semibold text-[20px] text-[#4d686b] text-center tracking-[-0.9px] leading-[1.3]">
                  Single View
                </p>
              </div>

              {/* Right side - grid view */}
              <div className="absolute left-[686px] top-[39px] w-[442px] h-[454px]">
                <img alt="Single view grid" className="w-full h-full object-cover" src={imgGrid2} />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Accessibility Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#e8eef5]"
      >
        <div className="py-12 px-12">
          <h2 className="font-['Roboto_Slab',sans-serif] font-medium text-[32px] text-center tracking-[-0.96px] leading-[1.25] mb-8">
            Accessibility
          </h2>

          <div className="relative h-[700px] max-w-[1280px] mx-auto">
            <div className="absolute top-0 left-0 right-0 flex gap-4 justify-center px-8 h-12 items-end">
              <div className="flex items-center justify-center px-1 h-10 w-[200px] border-b-2 border-[#4d686b]">
                <p className="font-['Roboto',sans-serif] font-bold text-[24px] text-[#4d686b] leading-[1.4]">
                  Icons & Labels
                </p>
              </div>
              <div className="flex items-center justify-center px-1 h-10 w-[200px]">
                <p className="font-['Roboto',sans-serif] font-bold text-[24px] text-[#4d686b] leading-[1.4]">
                  Level 2
                </p>
              </div>
              <div className="flex items-center justify-center px-1 h-10 w-[200px]">
                <p className="font-['Roboto',sans-serif] font-bold text-[24px] text-[#4d686b] leading-[1.4]">
                  Level 3
                </p>
              </div>
            </div>
            
            <div className="absolute top-[50px] bottom-4 left-1/2 -translate-x-1/2 w-auto h-auto">
              <img alt="Accessibility considerations for debugging interface" className="w-full h-full object-contain" src={imgSnapshot1} />
            </div>

            <div className="absolute right-[578px] translate-x-full top-[500px] w-[219px] font-['Roboto',sans-serif] text-[20px] tracking-[-0.9px] leading-[1.3]">
              <p className="mb-1">Accessibility expert:</p>
              <ul className="list-disc ml-[30px] space-y-1">
                <li>Icons need labels</li>
                <li>Prefer as a row header than a cell value in the middle of the table (better for screen readers)</li>
              </ul>
            </div>

            <div className="absolute left-[724.07px] top-[414px] w-[37.527px] h-[77.111px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 75" style={{ transform: 'rotate(352.133deg)' }}>
                <path d={svgPaths.p36bd3b00} fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final Deliverable */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white py-12"
      >
        <div className="max-w-7xl mx-auto px-12">
          <h2 className="font-['Roboto_Slab',sans-serif] font-medium text-[32px] text-center tracking-[-0.96px] leading-[1.25] mb-8">
            Final Deliverable & Implemented Designs
          </h2>

          {/* Video Embed Placeholder */}
          <div className="max-w-[940px] mx-auto h-[627px] bg-gray-200 rounded-[16px] flex items-center justify-center">
            <div className="text-center">
              <svg className="w-20 h-20 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
              <p className="font-['Roboto',sans-serif] text-[18px] text-gray-500">
                Video demo placeholder
              </p>
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
        className="bg-white text-center py-16 border-t border-gray-200"
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
          className="bg-[#2d6383] text-white px-8 py-3 rounded-[12px] font-['Inter',sans-serif] text-[18px] hover:bg-[#2d6383]/90 transition-colors"
        >
          Get in Touch
        </button>
      </motion.div>
    </motion.div>
  );
}