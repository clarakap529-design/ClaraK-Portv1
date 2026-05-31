import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../imports/svg-vfavi83d5q';
import arrowPaths from '../imports/svg-xh95ytaewt';
import sparklePaths from '../imports/svg-hmqide8qyf';
import arrowGraphic from '../imports/svg-7be7ktdsr5';
import claraHeroProfile from '../assets/clara-hero-profile.png';
import { useState } from 'react';

/** Ease-out curve for UI fades and layout — reads smoother than default easeOut. */
const smoothOut = [0.22, 1, 0.36, 1] as const;

const fadeQuick = { duration: 0.28, ease: smoothOut };

/** Artificial “thinking” pause before AI copy (was 2s; sparkles carry the motion). */
const THINK_MS = 900;

/** Desktop text column sits slightly above vertical center (px as translateY). */
const HERO_DESKTOP_TEXT_LIFT = -18;

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
      transition={{ duration: 0.72, repeat: Infinity, ease: 'easeInOut' }}
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

export function Hero() {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  
  const handlePromptClick = () => {
    setIsClicked(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowResponse(true);
    }, THINK_MS);
  };

  return (
    <motion.section 
      id="hero" 
      className="bg-[#E0E8F0] relative flex min-h-[480px] w-full items-start justify-center overflow-hidden py-8"
    >
      {/* Centered content container */}
      <div className="mx-auto hidden max-w-[1440px] items-start gap-[56px] px-[160px] lg:flex" style={{ width: '1050px', marginLeft: 'calc(50% - 525px - 164px)' }}>
        {/* Profile Image */}
        <div className="relative size-[320px] shrink-0 overflow-hidden rounded-full" data-name="Mask group">
          <img
            alt=""
            className="pointer-events-none size-full object-cover object-center"
            src={claraHeroProfile}
          />
        </div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 26 }}
          animate={{ 
            opacity: 1, 
            y: HERO_DESKTOP_TEXT_LIFT,
            width: isClicked ? 611 : 561,
            gap: 0,
          }}
          transition={{
            opacity: { duration: 0.75, ease: smoothOut },
            y: { duration: 0.75, ease: smoothOut },
            width: { duration: 0.55, ease: smoothOut },
          }}
          className="content-stretch flex flex-col"
          style={{ 
            alignItems: isClicked ? 'end' : 'start',
          }}
        >
          <motion.div
            className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full pb-6"
            data-name="Intro"
            initial={{ opacity: 0, y: 72 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: smoothOut, delay: 0.06 }}
          >
            <h1 className="relative w-full font-['Noteworthy',serif] text-[36px] font-bold leading-[1.25] tracking-[0.72px] text-[#2d6383]">
              Hi, my name is Clara. I'm good at making complex data feel friendly.
            </h1>

            {/* In-flow 1px rule so flex gap below is real space (h-0 + absolute SVG painted into the gap). */}
            <motion.div
              className="relative h-px shrink-0 self-start bg-[#6B96AC]"
              animate={{ width: isClicked ? 611 : 561 }}
              transition={{ duration: 0.55, ease: smoothOut }}
            />
          </motion.div>

          {/* Suggested prompt → user bubble: wait avoids overlap jank; spring softens the bubble. */}
          <AnimatePresence mode="wait">
            {!isClicked ? (
              <motion.div
                key="hero-suggested-prompt"
                className="flex w-full shrink-0 items-start justify-start"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.24, ease: smoothOut }}
              >
                <motion.button
                  type="button"
                  onClick={handlePromptClick}
                  className="bg-[#2d6383] box-border flex w-fit max-w-full cursor-pointer items-center justify-center rounded-[12px] px-[16px] py-[8px] text-left hover:bg-[#2d6383]/90"
                  animate={{
                    boxShadow: [
                      '0px 4px 10px 2px rgba(0,0,0,0.08), 0 0 0 0px rgba(199, 97, 41, 0)',
                      '0px 4px 10px 2px rgba(0,0,0,0.08), 0 0 0 4px rgba(199, 97, 41, 0.4)',
                      '0px 4px 10px 2px rgba(0,0,0,0.08), 0 0 0 0px rgba(199, 97, 41, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div
                    className="flex flex-col justify-center font-['Roboto:Regular',sans-serif] text-[16px] font-normal leading-[0] tracking-[-0.48px] text-nowrap text-white"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[1.25] whitespace-pre">Why is she a great candidate?</p>
                  </div>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="hero-user-reply"
                layout={false}
                className="box-border flex w-fit max-w-full shrink-0 items-center justify-end rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] bg-white px-[16px] py-[8px] shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={fadeQuick}
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
                className="content-stretch mt-6 flex min-h-[20px] flex-col gap-[10px] items-start justify-center relative shrink-0 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: smoothOut }}
              >
                <LoadingSparkle />
              </motion.div>
            )}
          </AnimatePresence>

          {/* AI Response - appears after loading */}
          <AnimatePresence>
            {showResponse && (
              <motion.div 
                className="relative mt-6 w-full min-w-0 shrink-0 font-['Roboto_Slab:Regular',sans-serif] text-[16px] font-normal leading-[1.25] tracking-[-0.48px] text-[#2d6383]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: smoothOut }}
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
          <div className="mx-auto size-[220px] overflow-hidden rounded-full md:size-[240px]">
            <img
              alt="Profile"
              className="size-full object-cover object-center"
              src={claraHeroProfile}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, gap: 44 }}
          animate={{
            opacity: 1,
            y: 0,
            gap: 44,
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2, ease: smoothOut },
            y: { duration: 0.8, delay: 0.2, ease: smoothOut },
          }}
          className="w-full max-w-xl flex flex-col items-center text-center"
        >
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 56 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: smoothOut, delay: 0.14 }}
          >
            <h1 className="font-['Noteworthy',serif] text-[30px] md:text-[34px] font-bold leading-[1.25] tracking-[0.72px] text-[#2d6383]">
              Hi, my name is Clara. I'm good at making complex data feel friendly.
            </h1>
          </motion.div>

          <AnimatePresence mode="wait">
            {!isClicked ? (
              <motion.div
                key="hero-mobile-prompt"
                className="flex flex-wrap justify-center gap-[8px] items-center"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.24, ease: smoothOut }}
              >
                <p className="font-['Roboto:Italic',sans-serif] italic text-[#2e2e2e] text-[14px] tracking-[-0.42px]">
                  Suggested prompt:
                </p>
                <button
                  type="button"
                  onClick={handlePromptClick}
                  className="w-fit max-w-full rounded-[12px] bg-[#2d6383] px-4 py-2 text-left font-['Roboto:Regular',sans-serif] text-[16px] font-normal tracking-[-0.48px] text-white hover:bg-[#2d6383]/90"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Why is she a great candidate?
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="hero-mobile-reply"
                layout={false}
                className="self-end bg-white px-4 py-2 rounded-[12px] w-fit max-w-full text-right shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={fadeQuick}
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
                className="mt-4 flex min-h-[20px] items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: smoothOut }}
              >
                <LoadingSparkle />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showResponse && (
              <motion.div
                className="mt-4 text-left w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: smoothOut }}
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
}
