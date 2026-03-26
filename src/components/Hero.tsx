import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../imports/svg-vfavi83d5q';
import arrowPaths from '../imports/svg-xh95ytaewt';
import sparklePaths from '../imports/svg-hmqide8qyf';
import arrowGraphic from '../imports/svg-7be7ktdsr5';
import imgClarakProfile3 from "figma:asset/ef54086b5aa301178f7e14564626f3e8237bb488.png";
import { imgClarakProfile2 } from "../imports/svg-6jk4k";
import { useState } from 'react';

function CoreSend() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Core/Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Core/Send">
          <path clipRule="evenodd" d={arrowPaths.pf134000} fill="var(--fill-0, #022043)" fillRule="evenodd" id="Fill" />
        </g>
      </svg>
    </div>
  );
}

function Sparkle({ opacity = 0.4, pathKey }: { opacity?: number; pathKey: 'p2fd58080' | 'p1bbfb500' | 'p13c57b00' }) {
  return (
    <motion.div
      className="relative shrink-0 size-[12px]"
      animate={{ scale: [1, 1.2, 1], opacity: [opacity, opacity * 1.5, opacity] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <path clipRule="evenodd" d={sparklePaths[pathKey]} fill="var(--fill-0, #022043)" fillRule="evenodd" opacity={opacity} />
      </svg>
    </motion.div>
  );
}

function LoadingSparkle() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <Sparkle opacity={0.4} pathKey="p2fd58080" />
      <Sparkle opacity={0.6} pathKey="p1bbfb500" />
      <Sparkle opacity={1} pathKey="p13c57b00" />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[160px] top-[88px]" data-name="Mask group">
      <div className="absolute h-[340.355px] left-[98.44px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[61.56px_11.495px] mask-size-[320px_320px] top-[76.5px] w-[498.96px]" data-name="Clarak-profile 2" style={{ maskImage: `url('${imgClarakProfile2}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClarakProfile3} />
      </div>
    </div>
  );
}

export function Hero() {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  
  const handlePromptClick = () => {
    setIsClicked(true);
    setIsLoading(true);
    console.log('Prompt clicked');
    
    // Show loading for 2 seconds, then show response
    setTimeout(() => {
      setIsLoading(false);
      setShowResponse(true);
    }, 2000);
  };

  return (
    <motion.section 
      id="hero" 
      className="bg-[#e8eef5] relative w-full overflow-hidden flex items-center justify-center min-h-[480px] py-8 -mt-[40px]"
    >
      {/* Centered content container */}
      <div className="hidden lg:flex items-center gap-[56px] max-w-[1440px] mx-auto px-[160px]" style={{ width: '1050px', marginLeft: 'calc(50% - 525px - 164px)' }}>
        {/* Profile Image */}
        <div className="relative shrink-0" data-name="Mask group">
          <div className="h-[340.355px] w-[382px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[61.56px_11.495px] mask-size-[320px_320px]" data-name="Clarak-profile 2" style={{ maskImage: `url('${imgClarakProfile2}')` }}>
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" style={{ objectPosition: '30% 30%' }} src={imgClarakProfile3} />
          </div>
        </div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: showResponse ? -40 : 0
          }}
          transition={{ duration: 0.8 }}
          className="content-stretch flex flex-col"
          style={{ 
            gap: isClicked ? '24px' : '27px',
            alignItems: isClicked ? 'end' : 'start',
            width: isClicked ? 611 : 561
          }}
        >
          {/* Intro Text */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Intro">
            <h1 className="relative w-full font-['Noteworthy',serif] text-[36px] font-bold leading-[1.25] tracking-[0.72px] text-[#2d6383]">
              Hi, my name is Clara. I'm good at making complex data feel friendly.
            </h1>
            
            {/* Divider line */}
            <motion.div 
              className="h-0 relative shrink-0 w-full"
              animate={{ width: isClicked ? 611 : 561 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isClicked ? "0 0 611 1" : "0 0 561 1"}>
                  <path d={isClicked ? "M0 0.5H611" : "M0 0.5H561"} stroke="var(--stroke-0, #6B96AC)" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Suggested Prompt - fades out when clicked */}
          <AnimatePresence>
            {!isClicked && (
              <motion.div 
                className="content-stretch flex gap-[8px] items-center relative shrink-0"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <motion.button
                    onClick={handlePromptClick}
                    className="bg-[#2d6383] box-border content-stretch flex gap-[10px] items-center justify-center px-8 py-3 relative rounded-[12px] shrink-0 hover:bg-[#2d6383]/90 transition-colors cursor-pointer"
                    animate={{
                      boxShadow: [
                        '0 0 0 0px rgba(199, 97, 41, 0)',
                        '0 0 0 4px rgba(199, 97, 41, 0.4)',
                        '0 0 0 0px rgba(199, 97, 41, 0)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.42px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.25] whitespace-pre font-['Inter',sans-serif] text-[18px]">Why is she a great candidate?</p>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* User Response - appears when clicked */}
          <AnimatePresence>
            {isClicked && (
              <motion.div 
                className="bg-white content-stretch flex items-center justify-end px-[16px] py-[8px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] shrink-0"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2e2e2e] text-[16px] text-nowrap text-right tracking-[-0.48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[1.25] whitespace-pre">Why is she a great candidate?</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading Sparkle - appears after user response */}
          <AnimatePresence>
            {isLoading && (
              <motion.div 
                className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <LoadingSparkle />
              </motion.div>
            )}
          </AnimatePresence>

          {/* AI Response - appears after loading */}
          <AnimatePresence>
            {showResponse && (
              <motion.div 
                className="basis-0 font-['Roboto_Slab:Regular',sans-serif] font-normal grow leading-[1.25] min-h-px min-w-full relative shrink-0 text-[#2d6383] text-[16px] tracking-[-0.48px] w-[min-content]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p className="mb-0">{`With over 12 years in UX design, Clara has extensive experience crafting enterprise solutions and AI-driven products at scale. `}</p>
                <p className="mb-0">&nbsp;</p>
                <p>{`She specializes in Reporting & Analytics with a strong focus on Data Visualization. She excels at untangling complex problems and creating intuitive designs that serve real human needs.`}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Responsive version for smaller screens */}
      <div className="lg:hidden flex flex-col items-center justify-start min-h-[520px] px-6 pt-3 pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div 
            className="w-[220px] h-[220px] md:w-[240px] md:h-[240px] mx-auto mask-alpha mask-intersect mask-no-clip mask-no-repeat" 
            style={{ 
              maskImage: `url('${imgClarakProfile2}')`,
              maskSize: 'contain',
              maskPosition: 'center'
            }}
          >
            <img 
              alt="Profile" 
              className="w-full h-full object-cover" 
              style={{ objectPosition: '40% 30%' }}
              src={imgClarakProfile3} 
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-xl flex flex-col items-center text-center"
        >
          <h1 className="font-['Noteworthy',serif] text-[30px] md:text-[34px] font-bold leading-[1.25] tracking-[0.72px] text-[#2d6383] mb-6">
            Hi, my name is Clara. I'm good at making complex data feel friendly.
          </h1>

          <AnimatePresence>
            {!isClicked && (
              <motion.div
                className="flex flex-wrap justify-center gap-[8px] items-center"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <p className="font-['Roboto:Italic',sans-serif] italic text-[#2e2e2e] text-[14px] tracking-[-0.42px]">
                  Suggested prompt:
                </p>
                <button
                  onClick={handlePromptClick}
                  className="bg-[#2d6383] px-8 py-3 rounded-[12px] text-white font-['Inter',sans-serif] text-[18px] hover:bg-[#2d6383]/90 transition-colors"
                >
                  Why is she a great candidate?
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isClicked && (
              <motion.div
                className="mt-1 self-end bg-white px-4 py-2 rounded-[12px] w-fit max-w-full text-right"
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-['Inter',sans-serif] text-[15px] text-[#2e2e2e]">
                  Why is she a great candidate?
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isLoading && (
              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <LoadingSparkle />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showResponse && (
              <motion.div
                className="mt-4 text-left w-full"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-['Roboto_Slab',serif] text-[16px] leading-[1.45] text-[#2d6383]">
                  With over 12 years in UX design, Clara has extensive experience crafting enterprise solutions and
                  AI-driven products at scale.
                </p>
                <p className="mt-2 font-['Roboto_Slab',serif] text-[16px] leading-[1.45] text-[#2d6383]">
                  She specializes in Reporting & Analytics with a strong focus on Data Visualization and excels at
                  making complex systems approachable.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}