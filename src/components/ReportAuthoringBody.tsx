import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

/** Bundled asset URL — works in dev/build without relying on `/public` being served for direct navigation. */
import journeyMapBundledUrl from '../assets/journey-map.png?url';

/** Edit strings here as you finalize copy; swap placeholders for real images when ready. */
export const reportAuthoringCopy = {
  problem: {
    title: 'The Starting Point',
    intro:
      "Report authoring in Workday is clunky and complex. It's a task that lives across two screens and hasn't been updated in twenty years.",
    mid:
      "I was assigned to two projects in this space — Data Source Findability, an AI feature to help users identify the right business objects and fields for a new report, and Report Authoring 2.0, a broader initiative to revamp the authoring experience. To ramp up fast, I enrolled in Workday's official three-day Report Writer certification and ran a lightweight audit of the two most common report types: Matrix and Advanced.",
    closing:
      'The further I got into both projects, the more the overlap became impossible to ignore. Two teams, two roadmaps, different scopes — one user. Nobody had mapped the experience end to end.\n\nIt felt like a gap that needed to be filled before either project could move forward confidently. So I recruited internal users, ran my own interviews, and built a journey map to surface the distinct personas, flows, and pain points across the full authoring experience. The goal was simple: make sure both teams were solving the right problems.',
  },
  compareTop: {
    leftTitle: 'Data Source Findability',
    rightTitle: 'Report Authoring 2.0',
  },
  research: {
    title: 'The Research',
    intro:
      'I interviewed internal users across multiple roles — report builders, data modelers, administrators, and consumers — to understand how the authoring experience actually worked in practice versus how it was designed to work.',
    body:
      'What emerged painted a clear picture — users were hitting the most friction early, during the initial data modeling and setup phases, and again with the basic layout, form flow, and some misleading UI labels. I pulled the findings together into an end-to-end journey map spanning five phases, with pain points called out along the way.',
  },
  journeyMap: {
    title: 'Journey Map',
    participantsHeading: 'Participants: 3 Internal Workday Analysts & 7 Implementer',
  },
  compareBottom: {
    leftTitle: 'Data Source Findability',
    rightTitle: 'Report Authoring 2.0',
  },
};

/** Circle fills match journey-map legend / portfolio mock (multicolor implementers, blue analysts). */
const JOURNEY_MAP_PARTICIPANTS: { initials: string; label: string; bg: string }[] = [
  { initials: 'CE', label: 'Implementer', bg: '#2D6383' },
  { initials: 'ZG', label: 'Implementer', bg: '#2D6383' },
  { initials: 'SK', label: 'Implementer', bg: '#2D6383' },
  { initials: 'SH', label: 'Implementer', bg: '#2D6383' },
  { initials: 'MH', label: 'Implementer', bg: '#2D6383' },
  { initials: 'JC', label: 'Implementer', bg: '#2D6383' },
  { initials: 'CV', label: 'Implementer', bg: '#2D6383' },
  { initials: 'BV', label: 'WOW Analyst', bg: '#BBe1f7' },
  { initials: 'KM', label: 'WOW Analyst', bg: '#BBe1f7' },
  { initials: 'JY', label: 'WOW Analyst', bg: '#BBe1f7' },
];

const sectionTitleClass =
  "font-['Roboto_Slab',serif] text-[40px] tracking-[0.8px] case-study-h3-pad-hero text-[#2d6383] leading-[1.2]";

/** Matches “The Starting Point” / case-study section `h3` (Roboto Slab 28px, dark). */
const caseStudyH3SectionClass =
  "font-['Roboto_Slab',serif] text-[28px] tracking-[0.4px] case-study-h3-pad-5 text-[#2e2e2e] leading-[1.2]";

/**
 * Cursor / embedded previews often use a non-http `location.origin`, so root-relative `/assets/...`
 * URLs from Vite resolve to the wrong host. Optional `VITE_PREVIEW_ASSET_ORIGIN` (e.g. http://localhost:3000)
 * overrides; in dev we fall back to localhost:3000 when origin is not a normal http(s) URL.
 */
function absoluteAssetUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (!url.startsWith('/')) return url;

  const fromEnv = import.meta.env.VITE_PREVIEW_ASSET_ORIGIN;
  if (typeof fromEnv === 'string' && fromEnv.length > 0) {
    return `${fromEnv.replace(/\/$/, '')}${url}`;
  }

  if (typeof window !== 'undefined') {
    const { origin } = window.location;
    if (origin.startsWith('http://') || origin.startsWith('https://')) {
      return `${origin}${url}`;
    }
  }

  if (import.meta.env.DEV) {
    return `http://localhost:3000${url}`;
  }

  return url;
}

export type ReportAuthoringImageSlot = { src: string; alt: string };

function ImageSlotStack({
  count,
  minHeightsPx,
  label,
  images,
  onOpenImage,
}: {
  count: number;
  minHeightsPx?: number[];
  label: string;
  /** When provided per index, renders an image; otherwise a grey placeholder. */
  images?: ReportAuthoringImageSlot[];
  /** Optional lightbox trigger for image slots. */
  onOpenImage?: (image: ReportAuthoringImageSlot) => void;
}) {
  return (
    <div className="flex h-full min-h-0 w-full flex-col gap-4" role="group" aria-label={label}>
      {Array.from({ length: count }).map((_, i) => {
        const img = images?.[i];
        const slotMin = Math.max(minHeightsPx?.[i] ?? 320, 280);
        if (img) {
          return (
            <button
              key={i}
              type="button"
              onClick={() => onOpenImage?.(img)}
              className="group flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-[2px] border border-[#d8e0e6] bg-white p-0 text-left shadow-[0_1px_3px_rgba(15,23,42,0.08)] transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3e6b89]"
              aria-label={`Open full size image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt=""
                className="h-auto w-full object-contain object-top transition-opacity group-hover:opacity-95"
                draggable={false}
              />
            </button>
          );
        }
        return (
          <div
            key={i}
            className="w-full rounded-md border border-[#d1d5db] bg-[#e8eaed] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
            style={{ minHeight: slotMin }}
            aria-hidden="true"
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
  /** Optional images for the first section: two side-by-side rows — index 0 = first row, 1 = second row. */
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
  const [selectedImage, setSelectedImage] = useState<ReportAuthoringImageSlot | null>(null);
  const wowAnalystParticipants = JOURNEY_MAP_PARTICIPANTS.filter((p) => p.label === 'WOW Analyst');
  const implementerParticipants = JOURNEY_MAP_PARTICIPANTS.filter((p) => p.label === 'Implementer');
  const journeyMapResolvedSrc = useMemo(
    () => absoluteAssetUrl(journeyMapImageSrc || journeyMapBundledUrl),
    [journeyMapImageSrc],
  );

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 md:mb-14"
      >
        <h3 className={`${caseStudyH3SectionClass} mb-4 md:mb-5`}>{c.problem.title}</h3>
        <p className="mb-8 w-full max-w-none font-['Inter',sans-serif] text-[14px] leading-[1.5] text-black md:leading-[1.45]">
          {c.problem.intro}
        </p>

        <div className="mb-8 grid grid-cols-1 items-stretch gap-8 px-[40px] md:grid-cols-2 md:gap-10 lg:gap-12">
          <div className="min-h-0 min-w-0">
            <ImageSlotStack
              count={1}
              minHeightsPx={[360]}
              images={
                problemTopImages?.left?.[0] ? [problemTopImages.left[0]] : undefined
              }
              label={`${c.compareTop.leftTitle} — image 1`}
              onOpenImage={setSelectedImage}
            />
          </div>
          <div className="min-h-0 min-w-0">
            <ImageSlotStack
              count={1}
              minHeightsPx={[360]}
              images={
                problemTopImages?.right?.[0] ? [problemTopImages.right[0]] : undefined
              }
              label={`${c.compareTop.rightTitle} — image 1`}
              onOpenImage={setSelectedImage}
            />
          </div>
        </div>

        <p className="mb-8 w-full max-w-none font-['Inter',sans-serif] text-[14px] leading-[1.5] text-black md:leading-[1.45]">
          I was assigned to two projects in this space — <strong>Data Source Findability</strong>, an AI feature to
          help users identify the right business objects and fields for a new report, and{' '}
          <strong>Report Authoring 2.0</strong>, a broader initiative to revamp the authoring experience. To ramp up
          fast, I enrolled in Workday&apos;s official three-day Report Writer certification and ran a lightweight audit
          of the two most common report types: Matrix and Advanced.
        </p>

        <div className="mb-8 px-[40px] md:px-[80px]">
          <div className="flex flex-col items-stretch gap-8 md:gap-10 lg:gap-12">
            <div className="min-h-0 min-w-0">
              <ImageSlotStack
                count={1}
                minHeightsPx={[360]}
                images={problemTopImages?.left?.[1] ? [problemTopImages.left[1]] : undefined}
                label={`${c.compareTop.leftTitle} — image 2`}
                onOpenImage={setSelectedImage}
              />
              {problemTopImages?.left?.[1] ? (
                <p className="mt-2 font-['Inter',sans-serif] text-[12px] italic leading-[1.4] text-[rgba(0,0,0,0.7)]">
                  Anatomy of Matrix Report
                </p>
              ) : null}
            </div>
            <div className="min-h-0 min-w-0">
              <ImageSlotStack
                count={1}
                minHeightsPx={[360]}
                images={problemTopImages?.right?.[1] ? [problemTopImages.right[1]] : undefined}
                label={`${c.compareTop.rightTitle} — image 2`}
                onOpenImage={setSelectedImage}
              />
              {problemTopImages?.right?.[1] ? (
                <p className="mt-2 font-['Inter',sans-serif] text-[12px] italic leading-[1.4] text-[rgba(0,0,0,0.7)]">
                  Anatomy of an Advance Report
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {c.problem.closing.split('\n\n').map((paragraph, index, arr) => (
          <p
            key={`problem-closing-${index}`}
            className={`w-full max-w-none font-['Inter',sans-serif] text-[14px] leading-[1.5] text-black md:leading-[1.45] ${
              index < arr.length - 1 ? 'mb-4' : ''
            }`}
          >
            {paragraph}
          </p>
        ))}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20"
      >
        <h3 className={`${caseStudyH3SectionClass} mb-4 md:mb-5`}>{c.research.title}</h3>
        <p className="mb-6 max-w-none font-['Inter',sans-serif] text-[14px] leading-[1.55] text-black md:leading-[1.5]">
          {c.research.intro}
        </p>

        <div className="mb-8 md:mb-10">
          <h4 className="mb-5 font-['Inter',sans-serif] text-[16px] font-bold leading-[1.35] text-black">
            {c.journeyMap.participantsHeading}
          </h4>
          <div className="space-y-4" aria-label="Research participants">
            <ul className="flex w-full list-none flex-wrap justify-start gap-x-4 gap-y-2 p-0">
              {wowAnalystParticipants.map((p) => (
                <li key={p.initials} className="flex min-w-0 flex-col items-center gap-1 text-center">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-['Inter',sans-serif] text-[18px] font-semibold shadow-none"
                    style={{ backgroundColor: p.bg, color: '#1b455e' }}
                    aria-hidden="true"
                  >
                    {p.initials}
                  </div>
                  <span className="font-['Inter',sans-serif] text-[12px] font-medium leading-[1.2] text-[#2e2e2e]">
                    {p.label}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="flex w-full list-none flex-wrap justify-start gap-x-4 gap-y-2 p-0">
              {implementerParticipants.map((p) => (
                <li key={p.initials} className="flex min-w-0 flex-col items-center gap-1 text-center">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-['Inter',sans-serif] text-[18px] font-semibold shadow-none"
                    style={{ backgroundColor: p.bg, color: '#ffffff' }}
                    aria-hidden="true"
                  >
                    {p.initials}
                  </div>
                  <span className="font-['Inter',sans-serif] text-[12px] font-medium leading-[1.2] text-[#2e2e2e]">
                    {p.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mb-8 max-w-none font-['Inter',sans-serif] text-[14px] leading-[1.55] text-black md:mb-10 md:leading-[1.5]">
          {c.research.body}
        </p>

        <h4 id="report-authoring-journey-map-heading" className="sr-only">
          {c.journeyMap.title}
        </h4>
        <div
          className="journey-map-scroll mb-8 w-full max-w-full rounded-none border border-[#d1d5db] bg-white"
          role="region"
          aria-labelledby="report-authoring-journey-map-heading"
        >
          <div className="inline-block w-max min-w-full text-left">
            <img
              src={journeyMapResolvedSrc}
              alt={journeyMapImageAlt}
              width={1024}
              height={223}
              className="block h-[640px] min-h-[640px] w-auto max-w-none select-none [image-rendering:auto]"
              draggable={false}
              decoding="async"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <h3 className={`${caseStudyH3SectionClass} mb-6 md:mb-7`}>Parallel Projects</h3>
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
              onOpenImage={setSelectedImage}
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
              label="Additional images for Report Authoring 2.0"
              onOpenImage={setSelectedImage}
            />
          </div>
        </div>
      </motion.section>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 cursor-pointer bg-black/90"
        >
          <div
            className="flex h-full w-full items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              className="relative h-full w-full"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-[60] text-white transition-colors hover:text-gray-300"
                aria-label="Close modal"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="block h-full w-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
