import { motion } from 'motion/react';

/** Edit strings here as you finalize copy; swap placeholders for real images when ready. */
export const reportAuthoringCopy = {
  problem: {
    title: 'Problem',
    body:
      'Data Source Findability and Report Writer 2.0 addressed the same report-authoring journey, but teams planned and shipped them in isolation. Without a shared map, we missed handoff dependencies and couldn’t see where friction compounded for writers and analysts.',
  },
  compareTop: {
    leftTitle: 'Data Source Findability',
    rightTitle: 'Report Writer 2.0',
  },
  research: {
    kicker: 'THE RESEARCH',
    body:
      'I interviewed builders, modelers, administrators, and report authors across the journey. The map that emerged follows five phases: (1) requirements gathering & intake, (2) data modeling & report design, (3) report building, (4) testing, validation & handoff, and (5) consumption. The journey isn’t only steps—it’s where pain points and friction accumulate.',
  },
  journeyMap: {
    title: 'Journey Map',
  },
  discovery: {
    title: 'The Discovery',
    body:
      'Data Source Findability surfaced as a primary pain point: authors struggle to know which of hundreds of data sources contain the fields they need, often relying on trial and error or asking colleagues instead of self-serve discovery.',
  },
  compareBottom: {
    leftTitle: 'Data Source Findability',
    rightTitle: 'Report Writer 2.0',
  },
};

const sectionTitleClass =
  "font-['Roboto_Slab',serif] text-[40px] tracking-[0.8px] case-study-h3-pad-hero text-[#2d6383] leading-[1.2]";

/** Matches “The Starting Point” / case-study section `h3` (Roboto Slab 28px, dark). */
const caseStudyH3SectionClass =
  "font-['Roboto_Slab',serif] text-[28px] tracking-[0.4px] case-study-h3-pad-5 text-[#2e2e2e] leading-[1.2]";

export type ReportAuthoringImageSlot = { src: string; alt: string };

function ImageSlotStack({
  count,
  minHeightsPx,
  label,
  images,
}: {
  count: number;
  minHeightsPx?: number[];
  label: string;
  /** When provided per index, renders an image; otherwise a grey placeholder. */
  images?: ReportAuthoringImageSlot[];
}) {
  return (
    <div className="flex flex-col gap-4" role="group" aria-label={label}>
      {Array.from({ length: count }).map((_, i) => {
        const img = images?.[i];
        if (img) {
          return (
            <div
              key={i}
              className="overflow-hidden rounded-md border border-[#d1d5db] bg-[#f8fafb]"
            >
              <img src={img.src} alt={img.alt} className="block h-auto w-full object-contain" />
            </div>
          );
        }
        return (
          <div
            key={i}
            className="w-full rounded-md border border-[#d1d5db] bg-[#e8eaed]"
            style={{ minHeight: minHeightsPx?.[i] ?? 260 }}
          />
        );
      })}
    </div>
  );
}

export type ReportAuthoringBodyProps = {
  /** Full-width journey map asset; grey placeholder when omitted. */
  journeyMapImageSrc?: string;
  journeyMapImageAlt?: string;
  /** Optional images for the first two-column block (2 slots each). */
  problemTopImages?: { left?: ReportAuthoringImageSlot[]; right?: ReportAuthoringImageSlot[] };
  /** Optional images for the final two-column block (3 left, 2 right). */
  compareBottomImages?: { left?: ReportAuthoringImageSlot[]; right?: ReportAuthoringImageSlot[] };
};

export function ReportAuthoringBody({
  journeyMapImageSrc,
  journeyMapImageAlt = 'Journey map diagram',
  problemTopImages,
  compareBottomImages,
}: ReportAuthoringBodyProps) {
  const c = reportAuthoringCopy;

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20"
      >
        <h2 className={`${sectionTitleClass} mb-4 md:mb-5`}>{c.problem.title}</h2>
        <p className="mb-8 max-w-3xl font-['Inter',sans-serif] text-[14px] leading-[1.5] text-black md:leading-[1.45]">
          {c.problem.body}
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="mb-4 font-['Inter',sans-serif] text-[16px] font-bold leading-[1.3] text-[#2e2e2e]">
              {c.compareTop.leftTitle}
            </h3>
            <ImageSlotStack
              count={2}
              minHeightsPx={[280, 280]}
              images={problemTopImages?.left}
              label="Images for Data Source Findability"
            />
          </div>
          <div>
            <h3 className="mb-4 font-['Inter',sans-serif] text-[16px] font-bold leading-[1.3] text-[#2e2e2e]">
              {c.compareTop.rightTitle}
            </h3>
            <ImageSlotStack
              count={2}
              minHeightsPx={[280, 280]}
              images={problemTopImages?.right}
              label="Images for Report Writer 2.0"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20"
      >
        <h3 className={`${caseStudyH3SectionClass} mb-4 md:mb-5`}>{c.research.kicker}</h3>
        <p className="mb-10 max-w-none font-['Inter',sans-serif] text-[14px] leading-[1.55] text-black md:mb-14 md:leading-[1.5]">
          {c.research.body}
        </p>

        <h3 className={`${sectionTitleClass} mb-6 md:mb-8`}>{c.journeyMap.title}</h3>

        <div className="mb-8 w-full overflow-hidden rounded-lg border border-[#d1d5db] bg-[#f3f4f6]">
          {journeyMapImageSrc ? (
            <img
              src={journeyMapImageSrc}
              alt={journeyMapImageAlt}
              className="block h-auto w-full object-contain"
            />
          ) : (
            <div
              className="flex min-h-[min(52vh,420px)] w-full items-center justify-center bg-[#e8eaed]"
              role="img"
              aria-label="Placeholder for journey map images"
            />
          )}
        </div>

        <h4 className="mb-3 font-['Inter',sans-serif] text-[16px] font-bold leading-[1.35] text-black">
          {c.discovery.title}
        </h4>
        <p className="max-w-3xl font-['Inter',sans-serif] text-[14px] leading-[1.5] text-black md:leading-[1.45]">
          {c.discovery.body}
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="mb-4 font-['Inter',sans-serif] text-[16px] font-bold leading-[1.3] text-[#2e2e2e]">
              {c.compareBottom.leftTitle}
            </h3>
            <ImageSlotStack
              count={3}
              minHeightsPx={[300, 300, 300]}
              images={compareBottomImages?.left}
              label="Additional images for Data Source Findability"
            />
          </div>
          <div>
            <h3 className="mb-4 font-['Inter',sans-serif] text-[16px] font-bold leading-[1.3] text-[#2e2e2e]">
              {c.compareBottom.rightTitle}
            </h3>
            <ImageSlotStack
              count={2}
              minHeightsPx={[200, 200]}
              images={compareBottomImages?.right}
              label="Additional images for Report Writer 2.0"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}
