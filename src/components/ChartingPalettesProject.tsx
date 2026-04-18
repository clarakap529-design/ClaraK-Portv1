import { Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, type ReactNode } from 'react';

// Import thumbnail images
import imgScreenshot20260216At105144Am2 from "figma:asset/a4b3ac0215db4332e80b6fc41e9c7d95900e2edb.png";
import imgScreenshot20251006At93728Am11 from "figma:asset/8ff3ae8c343c0d4519aadf5ddb26ab21ffb959de.png";
import imgOverviewAllCountries11 from "figma:asset/b5735599f29d6f021c8acc9c1efb3a1f4ad3300f.png";
import imgPrototype1 from "figma:asset/2006a35b6ad8684f507a82f5696b4da1fe2d0fd4.png";
import imgPrototype2 from "figma:asset/6b16a97db5138230ea1cd167ee6298756ed73ec8.png";
import imgPrototype3 from "figma:asset/1c505bcd09fa2fdba79689871f7d803991e803f8.png";
import imgHowItPlaysOut from '../assets/how-it-plays-out.png';
import imgChartPluginDesignSupport from '../assets/chart-plugin-design-support.png';
import imgClosingCarouselSlide2 from '../assets/carousel-slide-2-sana-show-steps.png';
import imgClosingCarouselSlide3 from '../assets/carousel-slide-3-platform-framework.png';
import imgTrack2Basic from '../assets/track2-basic.png';
import imgTrack2Dashboard from '../assets/track2-dashboard.png';
import imgTrack2AiCanvas from '../assets/track2-ai-canvas.png';
import imgTrack2BasicCarousel1Con from '../assets/track2-basic-carousel-1-con.png';
import imgTrack2BasicCarousel2 from '../assets/track2-basic-carousel-2.png';
import imgTrack2BasicCarousel3 from '../assets/track2-basic-carousel-3.png';
import imgTrack2BasicCarousel4 from '../assets/track2-basic-carousel-4.png';
import imgTrack2BasicCarousel5 from '../assets/track2-basic-carousel-5.png';
import imgTrack2DashboardCarousel1 from '../assets/track2-dashboard-carousel-1.png';
import imgTrack2DashboardCarousel2 from '../assets/track2-dashboard-carousel-2.png';
import imgTrack2DashboardCarousel3 from '../assets/track2-dashboard-carousel-3.png';
import imgTrack2DashboardCarousel4 from '../assets/track2-dashboard-carousel-4.png';
import imgTrack2DashboardCarousel5 from '../assets/track2-dashboard-carousel-5.png';
import imgTrack2AiCanvasCarousel1ProCon from '../assets/track2-ai-canvas-carousel-1-pro-con.png';
import imgTrack2AiCanvasCarousel2 from '../assets/track2-ai-canvas-carousel-2.png';
import imgTrack2AiCanvasCarousel3 from '../assets/track2-ai-canvas-carousel-3.png';
import imgTrack2AiCanvasCarousel4 from '../assets/track2-ai-canvas-carousel-4.png';
import imgTrack2AiCanvasCarousel5 from '../assets/track2-ai-canvas-carousel-5.png';
import imgDatavizMainChart1 from '../assets/dataviz-main-chart-1.png';
import imgDirectToAuroraDiscoveryBoard from '../assets/directtoaurora-discovery-board.png';
import imgDatavizFunnel3 from '../assets/dataviz-funnel-3.png';
import imgDatavizHover4 from '../assets/dataviz-hover-4.png';
import imgDatavizHover5 from '../assets/dataviz-hover-5.png';
import imgDatavizPadding6 from '../assets/dataviz-padding-6.png';
import imgDatavizClick7 from '../assets/dataviz-click-7.png';
import imgDatavizClick8 from '../assets/dataviz-click-8.png';

type ClosingUseCaseCarouselSlide = {
  src: string;
  caption: string;
  sub: string;
};

const CLOSING_USE_CASE_CAROUSEL_SLIDES: ClosingUseCaseCarouselSlide[] = [
  {
    src: imgHowItPlaysOut,
    caption: 'How It Plays Out',
    sub: 'Platform logic vs. product logic for report context',
  },
  {
    src: imgClosingCarouselSlide2,
    caption: 'Platform Template',
    sub: '"Show Steps" opens platform reasoning panel',
  },
  {
    src: imgClosingCarouselSlide3,
    caption: 'Platform Framework → Product Customization',
    sub: 'Report-scoped search and an explanation step for answer transparency',
  },
];

/** Shown under the Style Guide intro on the Data Viz case study; swap slides when you export final Figma frames. */
const DEFAULT_STYLE_GUIDE_CAROUSEL_SLIDES: ClosingUseCaseCarouselSlide[] = [
  {
    src: imgChartPluginDesignSupport,
    caption: 'Style Guide',
    sub: 'Typography, axes, legend, and annotation specs for grouped charts',
  },
  {
    src: imgHowItPlaysOut,
    caption: 'How it plays out',
    sub: 'Divider lines, baselines, and type ramp on chart chrome',
  },
  {
    src: imgClosingCarouselSlide3,
    caption: 'Platform framework',
    sub: 'How tokens map to product surfaces',
  },
];

const TRACK2_BASIC_CAROUSEL_IMAGES = [
  imgTrack2BasicCarousel1Con,
  imgTrack2BasicCarousel2,
  imgTrack2BasicCarousel3,
  imgTrack2BasicCarousel4,
  imgTrack2BasicCarousel5,
];

const TRACK2_DASHBOARD_CAROUSEL_IMAGES = [
  imgTrack2DashboardCarousel5,
  imgTrack2DashboardCarousel2,
  imgTrack2DashboardCarousel4,
  imgTrack2DashboardCarousel3,
  imgTrack2DashboardCarousel1,
];

const TRACK2_AI_CANVAS_CAROUSEL_IMAGES = [
  imgTrack2AiCanvasCarousel1ProCon,
  imgTrack2AiCanvasCarousel2,
  imgTrack2AiCanvasCarousel3,
  imgTrack2AiCanvasCarousel4,
  imgTrack2AiCanvasCarousel5,
];

function ClosingUseCaseCarouselSection({
  title,
  titleClassName = 'mt-0 text-[18px] font-semibold text-[#2e2e2e] text-left w-full',
  introAfterTitle,
  slides,
  onOpenLightbox,
}: {
  /** Omit to render only the carousel (e.g. under Style Guide intro). */
  title?: string;
  titleClassName?: string;
  /** Optional body copy rendered below the title, above the thumbnail grid. */
  introAfterTitle?: string;
  slides: ClosingUseCaseCarouselSlide[];
  onOpenLightbox: (src: string) => void;
}) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = slides[Math.min(activeSlideIndex, Math.max(slides.length - 1, 0))];

  return (
    <>
      {title ? <h4 className={titleClassName}>{title}</h4> : null}

      {introAfterTitle ? (
        <p className="mt-2 mb-5 md:mb-6 w-full text-pretty font-['Inter',sans-serif] text-[14px] leading-[1.5] md:leading-[1.45] text-black">
          {introAfterTitle}
        </p>
      ) : null}

      <div className="py-3">
        <div className="mx-auto w-full max-w-4xl md:max-w-5xl">
          <div className="relative flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setActiveSlideIndex((activeSlideIndex - 1 + slides.length) % slides.length)}
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-50"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} className="text-[#2d6383]" />
            </button>
            <button
              type="button"
              onClick={() => onOpenLightbox(activeSlide.src)}
              className="min-w-0 flex-1 cursor-pointer overflow-hidden rounded-lg border border-gray-200 shadow-md transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6383] focus-visible:ring-offset-2"
              aria-label={`Open full size: ${activeSlide.caption}`}
            >
              {/*
                Fixed aspect matches the tallest slide at full width (920×526) so slides 2–3
                (wider/shorter ratios) don’t shrink the carousel frame when swapping slides.
              */}
              <div className="relative aspect-[920/526] w-full overflow-hidden bg-[#f8fafb]">
                <img
                  src={activeSlide.src}
                  alt={activeSlide.caption}
                  className="absolute inset-0 h-full w-full object-contain object-center"
                />
              </div>
            </button>
            <button
              type="button"
              onClick={() => setActiveSlideIndex((activeSlideIndex + 1) % slides.length)}
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-50"
              aria-label="Next slide"
            >
              <ChevronRight size={18} className="text-[#2d6383]" />
            </button>
          </div>
          <div className="mt-2 text-center">
            <p className="font-['Inter',sans-serif] text-[14px] font-bold leading-[1.35] text-black">
              {activeSlide.caption}
            </p>
            <p className="mt-1 font-['Inter',sans-serif] text-[13px] leading-[1.4] text-[rgba(0,0,0,0.55)]">
              {activeSlide.sub}
            </p>
          </div>
          <div className="mt-3 flex justify-center gap-1.5">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveSlideIndex(index)}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  index === activeSlideIndex ? 'bg-[#2d6383]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export interface PersonaCardData {
  name: string;
  imageSrc: string;
  imageAlt: string;
  goals: string;
  painPoints: string;
}

/** Staggered research quote row: optional screenshot, quote copy, and two category tags. */
export interface ResearchQuoteRowData {
  quote: string;
  tags: { label: string; tone: 'orange' | 'green' }[];
  /** Optional screenshot; omit for a grey placeholder until you add assets. */
  imageSrc?: string;
  imageAlt?: string;
  /**
   * Tailwind `object-position` helpers with `object-cover` (e.g. `object-right-top`)
   * when the focal point isn’t centered.
   */
  imageObjectPositionClass?: string;
}

/** Avg aspect of research quote PNGs (1024×569, 1024×710, 1024×577) → ~1024×619. */
const RESEARCH_QUOTE_THUMB_ASPECT_CLASS = 'aspect-[1024/619]';

/** Width of one column in the 3-up research quote grid (`max-w` 68rem, `gap-x-14`). */
const RESEARCH_QUOTE_COLUMN_WIDTH_CLASS =
  'w-full max-w-[min(100%,calc((68rem-7rem)/3))]';

/** Row for the optional “Summary Insights” block (Reporting Insights case study). */
export interface SummaryInsightRowData {
  borderColor: string;
  title: string;
  body: string;
  /** Optional small image on the right. */
  imageSrc?: string;
  imageAlt?: string;
}

/** One cell in the Data Viz “fragmentation audit” screenshot grid (top of case study). */
export interface FragmentationAuditCellData {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
}

const CASE_STUDY_HERO_BLUE_TITLE_CLASS =
  "font-['Roboto_Slab',serif] text-[40px] tracking-[0.8px] case-study-h3-pad-hero text-[#2d6383] leading-[1.2]";

const DEFAULT_UNIFIED_STYLE_GUIDE_LEAD_TITLE = 'Unified Style Guide & Usage Guidelines';
const DEFAULT_UNIFIED_STYLE_GUIDE_LEAD_SUBTITLE = 'Updated accessible color palette';
const DEFAULT_UNIFIED_STYLE_GUIDE_LEAD_BODY =
  'We developed three specialized palettes, each optimized for different data visualization scenarios. Each palette underwent rigorous testing for contrast ratios, color blindness simulation, and perceptual uniformity.';

const DEFAULT_FRAGMENTATION_PROBLEM_INTRO =
  'Workday has a fragmented implementation of data visualization throughout our product. The data vizes are inconsistent with their styles & interactions. Additionally, there’s no central owner to manage the libraries or provide guidance in usage';

const DEFAULT_STARTING_POINT_GOALS: string[] = [
  'Style guide',
  'Usage guidelines',
  'Recommendations for design library',
  'Clear ownership and governance plan',
];

const DEFAULT_STARTING_POINT_OUTCOMES: string[] = [
  'Cohesive platform-level plan',
  'Reduce confusion and complexity in data visualization implementations',
];

/** Default 8-up grid: first three match Aurora audit; remaining cells use representative thumbnails until you swap assets. */
const DEFAULT_FRAGMENTATION_AUDIT_CELLS: FragmentationAuditCellData[] = [
  {
    title: 'Aurora thru GWT (RW)',
    subtitle: 'eg. Report Writer, Dashboards',
    imageSrc: imgScreenshot20260216At105144Am2,
    imageAlt: 'Aurora charting via GWT in Report Writer',
  },
  {
    title: 'Directly to Aurora',
    subtitle: 'Discovery Boards',
    imageSrc: imgScreenshot20251006At93728Am11,
    imageAlt: 'Discovery Boards charting',
  },
  {
    title: 'Aurora thru Cards Framework',
    subtitle: 'EG. any Hub, Strategic Sourcing',
    imageSrc: imgOverviewAllCountries11,
    imageAlt: 'Aurora via Cards Framework',
  },
  {
    title: 'D3',
    subtitle: 'eg. Prism',
    imageSrc: imgPrototype1,
    imageAlt: 'D3 chart example',
  },
  {
    title: 'reCharts',
    subtitle: 'eg. Peakon',
    imageSrc: imgPrototype2,
    imageAlt: 'reCharts example',
  },
  {
    title: 'Nivo',
    subtitle: 'eg. Vindly',
    imageSrc: imgPrototype3,
    imageAlt: 'Nivo chart example',
  },
  {
    title: 'Plotly',
    subtitle: 'eg. Sana',
    imageSrc: imgClosingCarouselSlide2,
    imageAlt: 'Plotly / Sana visualization',
  },
  {
    title: 'Highcharts',
    subtitle: 'Resource Scheduling',
    imageSrc: imgTrack2Dashboard,
    imageAlt: 'Highcharts scheduling visualization',
  },
];

/**
 * Portfolio route (`/project/charting-palettes`): eight audit screenshots + captions
 * matching the case study hero (“Problem” through Goals/Outcomes).
 */
export const chartingPalettesRouteFragmentationCells: FragmentationAuditCellData[] = [
  {
    title: 'Aurora thru GWT (RW)',
    subtitle: 'eg. Report Writer, Dashboards',
    imageSrc: imgDatavizMainChart1,
    imageAlt: 'Aurora charting via GWT in Report Writer',
  },
  {
    title: 'Directly to Aurora',
    subtitle: 'Discovery Boards',
    imageSrc: imgDirectToAuroraDiscoveryBoard,
    imageAlt:
      'BI Discovery Board with dual axis and combo charts: builder panel, viz grid, and controls',
  },
  {
    title: 'Aurora thru Cards Framework',
    subtitle: 'EG. any Hub, Strategic Sourcing',
    imageSrc: imgDatavizFunnel3,
    imageAlt: 'Aurora via Cards Framework',
  },
  {
    title: 'D3',
    subtitle: 'eg. Prism',
    imageSrc: imgDatavizHover4,
    imageAlt: 'D3 chart example',
  },
  {
    title: 'reCharts',
    subtitle: 'eg. Peakon',
    imageSrc: imgDatavizHover5,
    imageAlt: 'reCharts example',
  },
  {
    title: 'Nivo',
    subtitle: 'eg. Vindly',
    imageSrc: imgDatavizPadding6,
    imageAlt: 'Nivo chart example',
  },
  {
    title: 'Plotly',
    subtitle: 'eg. Sana',
    imageSrc: imgDatavizClick7,
    imageAlt: 'Plotly / Sana visualization',
  },
  {
    title: 'Highcharts',
    subtitle: 'Resource Scheduling',
    imageSrc: imgDatavizClick8,
    imageAlt: 'Highcharts scheduling visualization',
  },
];

function FragmentationAuditCard({ cell }: { cell: FragmentationAuditCellData }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="flex h-[min(220px,42vw)] min-h-[168px] w-full items-center justify-center overflow-hidden rounded-2xl bg-white p-3 shadow-[0_4px_14px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06] sm:h-[200px] sm:min-h-[180px] md:h-[220px]">
        <img
          src={cell.imageSrc}
          alt={cell.imageAlt ?? cell.title}
          draggable={false}
          className="max-h-full max-w-full object-contain object-center"
        />
      </div>
      <p className="w-full text-center font-['Inter',sans-serif] text-[14px] font-bold leading-[1.35] text-[#333333]">
        {cell.title}
      </p>
      <p className="w-full text-center font-['Inter',sans-serif] text-[12px] leading-[1.45] text-[rgba(0,0,0,0.62)]">
        {cell.subtitle}
      </p>
    </div>
  );
}

function parseVimeoVideoId(input: string): string {
  const trimmed = input.trim();
  const fromUrl = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (fromUrl) return fromUrl[1];
  if (/^\d+$/.test(trimmed)) return trimmed;
  return trimmed;
}

interface ChartingPalettesProjectProps {
  heroTitle?: string;
  heroTags?: string[];
  heroParagraphs?: string[];
  /** Hero strip background (e.g. reporting case study header) */
  heroBgClass?: string;
  /** Body copy under “The Starting Point” — one `<p>` per string (when `showFragmentationAuditGrid` is false). */
  startingPointParagraphs?: string[];
  /**
   * When true (default), shows the Data Viz “fragmentation audit”: blue hero title, intro, 8-cell screenshot grid, Goals/Outcomes cards.
   * Set false for case studies that use the simpler Starting Point (e.g. Reporting Insights).
   */
  showFragmentationAuditGrid?: boolean;
  /** Blue hero title when `showFragmentationAuditGrid` is true (default: “The Starting Point”). */
  startingPointHeroTitle?: string;
  /** Intro paragraph under the hero title when the audit grid is shown. */
  fragmentationProblemIntro?: string;
  /** Optional override for the 8-cell audit grid. */
  fragmentationAuditCells?: FragmentationAuditCellData[];
  /** Goals card bullets when the audit grid is shown. */
  startingPointGoals?: string[];
  /** Outcomes card bullets when the audit grid is shown. */
  startingPointOutcomes?: string[];
  /** Optional persona cards shown after “The Starting Point” */
  personas?: PersonaCardData[];
  /** Intro paragraph below “Main User Personas” (shown when `personas` is non-empty) */
  personasIntro?: string;
  /** Heading above the color-palette section (default: “Colors”) */
  colorPaletteSectionTitle?: string;
  /** Optional parent `<h2>` above `colorPaletteSectionTitle` (same typography as “The Starting Point”). */
  colorPaletteParentSectionTitle?: string;
  /** Intro copy under that heading — one `<p>` per string */
  colorPaletteIntroParagraphs?: string[];
  /**
   * When true (default), shows the blue “Unified Style Guide & Usage Guidelines” lead block above the Colors heading.
   * Set false when the Colors section uses a different parent title (e.g. Reporting Insights “The MVP”).
   */
  showUnifiedStyleGuideLead?: boolean;
  /** Main title for that lead block (Roboto Slab hero blue). */
  unifiedStyleGuideLeadTitle?: string;
  /** Subtitle under the main title (Roboto Slab, dark). */
  unifiedStyleGuideLeadSubtitle?: string;
  /** Body paragraph under the subtitle. */
  unifiedStyleGuideLeadBody?: string;
  /**
   * When false, hides the Colors heading, intro, prototype media, and accessible swatches.
   * Default true (e.g. Data Visualization). Reporting Insights keeps it on and overrides titles / Vimeo embeds.
   */
  showColorPaletteSection?: boolean;
  /**
   * When set, replaces the three prototype image thumbnails with Vimeo embeds.
   * Pass numeric IDs or full vimeo.com URLs (up to two videos).
   */
  mvpPrototypeVimeoIds?: string[];
  /** Optional `<h4>` title above the MVP prototype videos (when Vimeo embeds are used). */
  mvpPrototypeSectionTitle?: string;
  /** Captions under each embedded video, in order (e.g. left / right). */
  mvpPrototypeVideoCaptions?: string[];
  /** When false, hides the “Updated accessible color palette” heading and swatch row (default: true). */
  showAccessiblePaletteSwatches?: boolean;
  /** Heading above the style-guide intro (default: “Style Guide (for Aurora Library)”). */
  styleGuideSectionTitle?: string;
  /** Body copy under that heading. */
  styleGuideSectionIntro?: string;
  /**
   * When true (default), shows a carousel of annotated style-guide frames under `styleGuideSectionIntro`.
   * Set false when that section is repurposed (e.g. Reporting “Research Findings”).
   */
  showStyleGuideCarousel?: boolean;
  /** Optional slides for the style-guide carousel; defaults to bundled thumbnails. */
  styleGuideCarouselSlides?: ClosingUseCaseCarouselSlide[];
  /** Optional `<h4>` directly under the style-guide intro paragraph. */
  styleGuideAfterIntroHeading?: string;
  /** Optional staggered quote rows (screenshot + quote + tags) below the intro heading; grey band section. */
  styleGuideIssuePatternCards?: ResearchQuoteRowData[];
  /**
   * When false, hides Aurora library grid (default: true).
   */
  showAuroraThroughChartSelection?: boolean;
  /** Heading above the platform / usage section (default: “The Platform-Level Problem”). */
  platformSectionTitle?: string;
  /** When true, renders that heading as a centered `<h4>` instead of `<h3>`. */
  platformSectionTitleAsH4?: boolean;
  /** When set, replaces the platform section heading with this body paragraph (e.g. Summary Insights lead-in). */
  platformSectionLead?: string;
  /**
   * When non-empty, replaces the default platform paragraph + usage rows with this layout
   * (left accent + title + body, small image area on the right).
   */
  summaryInsightRows?: SummaryInsightRowData[];
  /** Optional intro under the platform / Summary Insights title when `summaryInsightRows` is set. */
  summaryInsightIntro?: string;
  /**
   * Optional note below the divider above the closing CTA — full-width muted band, Noteworthy (same as homepage hero).
   */
  closingInterstitialNote?: string;
  /** Optional `<h2>` directly under the closing interstitial band (same typography as other case-study hero `<h2>`s). */
  closingInterstitialHeading?: string;
  /** Body copy under `closingInterstitialHeading` — one `<p>` per string (Inter 16px, same as “The Starting Point”). */
  closingInterstitialHeadingParagraphs?: string[];
  /** Optional `<h3>` after that body copy (same typography as “The Starting Point” and other section `<h3>`s). */
  closingInterstitialSubheading?: string;
  /**
   * When true, shows the “Interested in hearing what happened?” CTA with animated reply (Data Viz case study only).
   */
  showEndCta?: boolean;
  /**
   * When set, replaces the entire main column below the hero (Starting Point through closing sections).
   * Use for case studies that need a different IA while keeping the same hero strip (e.g. Report Authoring).
   */
  replaceMainContent?: ReactNode;
}

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

export function ChartingPalettesProject({
  heroTitle = 'Data Visualizations',
  heroTags = ['#DataViz', '#DesignSystem'],
  heroParagraphs = [
    "Workday's data visualization had grown organically across product lines, leaving behind a fragmented ecosystem of mismatched styles, conflicting interactions, and no central ownership.",
    "As a designer on the Reporting team - one of the teams maintaining a charting library - I recognized it early on this wasn't a design debt problem. It was a platform risk.",
  ],
  heroBgClass = 'bg-[#fdf0e8]',
  startingPointParagraphs = [
    "Workday's data visualization had grown organically across product lines, leaving behind a fragmented ecosystem of mismatched styles, conflicting interactions, and no central ownership.",
    "As a designer on the Reporting team - one of the teams maintaining a charting library - I recognized it early on this wasn't a design debt problem. It was a platform risk.",
  ],
  showFragmentationAuditGrid = true,
  startingPointHeroTitle = 'The Starting Point',
  fragmentationProblemIntro = DEFAULT_FRAGMENTATION_PROBLEM_INTRO,
  fragmentationAuditCells,
  startingPointGoals = DEFAULT_STARTING_POINT_GOALS,
  startingPointOutcomes = DEFAULT_STARTING_POINT_OUTCOMES,
  personas,
  personasIntro,
  colorPaletteSectionTitle = 'Colors',
  colorPaletteParentSectionTitle,
  colorPaletteIntroParagraphs = [
    'To ensure alignment, I organized a selection committee comprised of designers each representing a product pillar.',
    'To support the decision-making process, I created several Loveable prototypes to evaluate palette options, simulate color blindness conditions, and preview them across common chart types.',
  ],
  showUnifiedStyleGuideLead = true,
  unifiedStyleGuideLeadTitle = DEFAULT_UNIFIED_STYLE_GUIDE_LEAD_TITLE,
  unifiedStyleGuideLeadSubtitle = DEFAULT_UNIFIED_STYLE_GUIDE_LEAD_SUBTITLE,
  unifiedStyleGuideLeadBody = DEFAULT_UNIFIED_STYLE_GUIDE_LEAD_BODY,
  showColorPaletteSection = true,
  mvpPrototypeVimeoIds,
  mvpPrototypeSectionTitle,
  mvpPrototypeVideoCaptions,
  showAccessiblePaletteSwatches = true,
  styleGuideSectionTitle = 'Style Guide (for Aurora Library)',
  styleGuideSectionIntro = 'During my charting audit, I discovered three distinct implementations of the Workday charting library — each with its own styles and patterns. Rather than defaulting to one over the others, I synthesized the common ground across all three to propose a standardized style guide that could work for everyone.',
  showStyleGuideCarousel = true,
  styleGuideCarouselSlides,
  styleGuideAfterIntroHeading,
  styleGuideIssuePatternCards,
  showAuroraThroughChartSelection = true,
  platformSectionTitle = 'The Platform-Level Problem',
  platformSectionTitleAsH4 = false,
  platformSectionLead,
  summaryInsightRows,
  summaryInsightIntro,
  closingInterstitialNote,
  closingInterstitialHeading,
  closingInterstitialHeadingParagraphs,
  closingInterstitialSubheading,
  showEndCta = false,
  replaceMainContent,
}: ChartingPalettesProjectProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [track2BasicCarouselIndex, setTrack2BasicCarouselIndex] = useState<number | null>(null);
  const [track2DashboardCarouselIndex, setTrack2DashboardCarouselIndex] = useState<number | null>(null);
  const [track2AiCanvasCarouselIndex, setTrack2AiCanvasCarouselIndex] = useState<number | null>(null);
  const mvpVimeoIds = (mvpPrototypeVimeoIds ?? []).map((s) => s.trim()).filter(Boolean);
  const [userReply, setUserReply] = useState<string | null>(null);
  const isTrack2ZoomImage =
    selectedImage === imgTrack2Basic ||
    selectedImage === imgTrack2Dashboard ||
    selectedImage === imgTrack2AiCanvas;

  const fragmentationCells = fragmentationAuditCells ?? DEFAULT_FRAGMENTATION_AUDIT_CELLS;
  const styleGuideCarouselSlidesResolved =
    styleGuideCarouselSlides ?? DEFAULT_STYLE_GUIDE_CAROUSEL_SLIDES;

  const auroraCharts = [
    { src: imgScreenshot20260216At105144Am2, title: 'Aurora thru GWT (RW)', subtitle: 'eg. Report Writer, Dashboards' },
    { src: imgScreenshot20251006At93728Am11, title: 'Directly to Aurora', subtitle: 'Discovery Boards' },
    { src: imgOverviewAllCountries11, title: 'Aurora thru Cards Framework', subtitle: 'EG. any Hub, Strategic Sourcing' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <div className={`pt-14 pb-10 md:pt-16 md:pb-12 ${heroBgClass}`}>
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              {heroTags.map((tag) => (
                <p key={tag} className="font-['Roboto_Slab',sans-serif] text-[14px] tracking-[2px] uppercase text-[#2d6383]">
                  {tag}
                </p>
              ))}
            </div>
            <h1 className="font-['Roboto_Slab',serif] text-[34px] md:text-[40px] tracking-[0.6px] md:tracking-[1px] mb-4 md:mb-5 text-[#2e2e2e] leading-[1.2]">
              {heroTitle}
            </h1>
            <div className="font-['Inter',sans-serif] font-medium text-[18px] md:text-[20px] leading-[1.45] text-[rgba(0,0,0,0.72)] max-w-3xl">
              {heroParagraphs.map((paragraph, idx) => (
                <p key={idx} className={idx < heroParagraphs.length - 1 ? 'mb-3' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-white">
        <div className="mx-auto max-w-5xl px-4 md:px-8 py-12 md:py-16">
          {replaceMainContent !== undefined ? (
            replaceMainContent
          ) : (
          <>
          {/* Problem Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            {showFragmentationAuditGrid ? (
              <>
                <h3 className="case-study-h3-pad-hero mb-4 font-['Roboto_Slab',serif] text-[34px] leading-[1.2] tracking-[0.6px] text-[#3e6b89] md:mb-5 md:text-[40px] md:tracking-[0.8px]">
                  {startingPointHeroTitle}
                </h3>
                <p className="mb-10 max-w-4xl font-['Inter',sans-serif] text-[16px] font-normal leading-[1.55] text-[#333333] md:mb-11 md:text-[17px] md:leading-[1.5]">
                  {fragmentationProblemIntro}
                </p>
                <div
                  className="mb-12 space-y-10 md:mb-14 md:space-y-12"
                  role="region"
                  aria-label="Fragmented data visualization implementations"
                >
                  {(() => {
                    const splitAfter = 6;
                    const topRowCells =
                      fragmentationCells.length > splitAfter
                        ? fragmentationCells.slice(0, splitAfter)
                        : fragmentationCells;
                    const bottomRowCells =
                      fragmentationCells.length > splitAfter ? fragmentationCells.slice(splitAfter) : [];
                    return (
                      <>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-9 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
                          {topRowCells.map((cell) => (
                            <FragmentationAuditCard key={cell.title} cell={cell} />
                          ))}
                        </div>
                        {bottomRowCells.length > 0 ? (
                          <div className="mx-auto grid w-full max-w-[820px] grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10">
                            {bottomRowCells.map((cell) => (
                              <FragmentationAuditCard key={cell.title} cell={cell} />
                            ))}
                          </div>
                        ) : null}
                      </>
                    );
                  })()}
                </div>
                <div className="mb-12 grid grid-cols-1 gap-6 md:mb-14 md:grid-cols-2 md:gap-8">
                  <div className="rounded-2xl bg-[#f8f9fa] px-6 py-6 md:px-8 md:py-7">
                    <h4 className="mb-4 font-['Roboto_Slab',serif] text-[20px] font-semibold leading-[1.25] text-[#2e2e2e] md:text-[22px]">
                      Goals
                    </h4>
                    <ul className="list-disc space-y-2.5 pl-5 font-['Inter',sans-serif] text-[14px] leading-[1.5] text-[#333333] marker:text-[#333333]">
                      {startingPointGoals.map((g) => (
                        <li key={g}>{g}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-[#f8f9fa] px-6 py-6 md:px-8 md:py-7">
                    <h4 className="mb-4 font-['Roboto_Slab',serif] text-[20px] font-semibold leading-[1.25] text-[#2e2e2e] md:text-[22px]">
                      Outcomes
                    </h4>
                    <ul className="list-disc space-y-2.5 pl-5 font-['Inter',sans-serif] text-[14px] leading-[1.5] text-[#333333] marker:text-[#333333]">
                      {startingPointOutcomes.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-['Roboto_Slab',serif] text-[28px] tracking-[0.4px] case-study-h3-pad-5 text-[#2e2e2e] leading-[1.2]">
                  The Starting Point
                </h3>
                <div className="mb-6 space-y-3 font-['Inter',sans-serif] text-[14px] leading-[1.5] text-black md:mb-7 md:leading-[1.45]">
                  {startingPointParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </>
            )}

            {personas && personas.length > 0 && (
              <div className="mb-12 md:mb-14">
                <h3 className="font-['Roboto_Slab',serif] text-[28px] tracking-[0.4px] case-study-h3-pad-4 text-[#2e2e2e] leading-[1.2]">
                  Main User Personas
                </h3>
                {personasIntro && (
                  <p className="font-['Inter',sans-serif] text-[14px] leading-[1.5] md:leading-[1.45] text-black mb-6">
                    {personasIntro}
                  </p>
                )}
                <div className="mx-auto grid w-full max-w-[min(100%,68rem)] grid-cols-1 gap-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                  {personas.map((persona) => (
                    <div
                      key={persona.name}
                      className="flex min-w-0 w-full cursor-default flex-col overflow-hidden rounded-[2px] border border-gray-200 bg-white md:flex-row md:items-stretch"
                    >
                      <div className="flex shrink-0 flex-row items-center gap-4 bg-gray-100 px-4 py-4 sm:gap-5 sm:px-5 md:w-52 md:flex-col md:justify-center md:gap-3 md:py-6">
                        <img
                          src={persona.imageSrc}
                          alt={persona.imageAlt}
                          className="h-14 w-14 shrink-0 rounded-full object-cover sm:h-16 sm:w-16 md:h-20 md:w-20"
                        />
                        <p className="text-left font-['Inter',sans-serif] text-[12px] font-semibold leading-snug text-gray-900 sm:text-[13px] md:text-center md:text-[14px]">
                          {persona.name}
                        </p>
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col gap-4 px-3 py-4 sm:px-5 sm:py-5">
                        <div>
                          <p className="mb-1 font-['Inter',sans-serif] text-[12px] font-bold text-gray-900">
                            Goals:
                          </p>
                          <p className="font-['Inter',sans-serif] text-[12px] font-normal leading-[1.55] text-[rgba(0,0,0,0.72)]">
                            {persona.goals}
                          </p>
                        </div>
                        <div>
                          <p className="mb-1 font-['Inter',sans-serif] text-[12px] font-bold text-gray-900">
                            Pain points:
                          </p>
                          <p className="font-['Inter',sans-serif] text-[12px] font-normal leading-[1.55] text-[rgba(0,0,0,0.72)]">
                            {persona.painPoints}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-10">
              {showColorPaletteSection ? (
                <>
                  {showUnifiedStyleGuideLead ? (
                    <div
                      className={
                        showFragmentationAuditGrid
                          ? 'mb-8 mt-10 border-t border-[#e8eaed] pt-10 md:mb-10 md:mt-14 md:pt-12'
                          : 'mb-8 md:mb-10'
                      }
                    >
                      <h2
                        className={
                          showFragmentationAuditGrid
                            ? "case-study-h3-pad-hero mb-3 font-['Roboto_Slab',serif] text-[34px] leading-[1.2] tracking-[0.6px] text-[#3e6b89] md:mb-4 md:text-[40px] md:tracking-[0.8px]"
                            : `${CASE_STUDY_HERO_BLUE_TITLE_CLASS} mb-3 md:mb-4`
                        }
                      >
                        {unifiedStyleGuideLeadTitle}
                      </h2>
                      <h3 className="mb-3 font-['Roboto_Slab',serif] text-[20px] font-semibold leading-[1.3] tracking-[0.3px] text-[#2e2e2e] md:mb-4 md:text-[22px]">
                        {unifiedStyleGuideLeadSubtitle}
                      </h3>
                      <p
                        className={`max-w-4xl font-['Inter',sans-serif] leading-[1.55] md:leading-[1.5] ${
                          showFragmentationAuditGrid
                            ? 'text-[16px] text-[#333333] md:text-[17px]'
                            : 'w-full max-w-none text-[14px] text-[rgba(0,0,0,0.72)]'
                        }`}
                      >
                        {unifiedStyleGuideLeadBody}
                      </p>
                    </div>
                  ) : null}
                  {colorPaletteParentSectionTitle ? (
                    <h2 className="font-['Roboto_Slab',serif] text-[40px] tracking-[0.8px] case-study-h3-pad-hero text-[#2d6383] leading-[1.2] mt-8 md:mt-10">
                      {colorPaletteParentSectionTitle}
                    </h2>
                  ) : null}
                  <h3
                    className={`font-['Roboto_Slab',serif] text-[28px] tracking-[0.4px] case-study-h3-pad-5 text-[#2e2e2e] leading-[1.2] ${
                      colorPaletteParentSectionTitle ? 'mt-2' : showUnifiedStyleGuideLead ? 'mt-2 md:mt-3' : ''
                    }`}
                  >
                    {colorPaletteSectionTitle}
                  </h3>

                  {colorPaletteIntroParagraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`font-['Inter',sans-serif] text-[14px] leading-[1.45] text-black ${
                        index < colorPaletteIntroParagraphs.length - 1 ? 'mb-3' : 'mb-6'
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}

                  {/* Prototype media: Vimeo embeds (Reporting) or image thumbnails (default) */}
                  {mvpVimeoIds.length > 0 ? (
                    <div className="mt-4 mb-4 py-2">
                      {mvpPrototypeSectionTitle ? (
                        <h4 className="text-[18px] font-medium text-[#2e2e2e] mb-4">
                          {mvpPrototypeSectionTitle}
                        </h4>
                      ) : null}
                      <div
                        className={`grid gap-4 ${
                          mvpVimeoIds.length === 1
                            ? 'grid-cols-1 max-w-4xl mx-auto'
                            : 'grid-cols-1 md:grid-cols-2'
                        }`}
                      >
                        {mvpVimeoIds.map((rawId, i) => {
                          const id = parseVimeoVideoId(rawId);
                          const caption = mvpPrototypeVideoCaptions?.[i];
                          return (
                            <div key={`${id}-${i}`} className="flex flex-col gap-2">
                              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm bg-black aspect-video">
                                <iframe
                                  src={`https://player.vimeo.com/video/${id}`}
                                  title={`Prototype video ${i + 1}`}
                                  className="h-full w-full"
                                  allow="autoplay; fullscreen; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                              {caption ? (
                                <p className="font-['Inter',sans-serif] text-sm text-center text-[#2e2e2e] leading-snug">
                                  {caption}
                                </p>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 mb-4 grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
                      {[imgPrototype1, imgPrototype2, imgPrototype3].map((img, i) => (
                        <div
                          key={i}
                          className="flex-1 cursor-default overflow-hidden rounded-[2px] border border-gray-200"
                        >
                          <img
                            src={img}
                            alt={`Prototype ${i + 1}`}
                            draggable={false}
                            className="pointer-events-none h-full w-full object-cover select-none"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {showAccessiblePaletteSwatches ? (
                    <>
                      <h4 className="mt-4 py-2 text-[18px] font-medium text-[#2e2e2e]">
                        {showUnifiedStyleGuideLead ? 'Categorical palette' : 'Updated accessible color palette'}
                      </h4>
                      <div className="overflow-x-auto pb-2 mb-8">
                        <div className="flex gap-2 min-w-max mx-auto">
                          {categoricalColors.map((color, i) => (
                            <div key={i} className="flex flex-col items-center">
                              <div
                                className="w-10 h-10 md:w-12 md:h-12 rounded-[8px] border border-gray-200"
                                style={{ backgroundColor: color.color }}
                              />
                              <span className="font-['Inter',sans-serif] text-[10px] text-[rgba(0,0,0,0.55)] text-center whitespace-nowrap">{color.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : null}
                </>
              ) : null}

              <h3
                className={`font-['Roboto_Slab',serif] text-[28px] tracking-[0.4px] case-study-h3-pad-1 text-[#2e2e2e] leading-[1.2] ${
                  showColorPaletteSection ? 'mt-10 md:mt-12' : 'mt-8 md:mt-10'
                }`}
              >
                {styleGuideSectionTitle}
              </h3>
              <p className="font-['Inter',sans-serif] text-[14px] leading-[1.45] text-black mt-2 mb-4">{styleGuideSectionIntro}</p>
              {showStyleGuideCarousel && styleGuideCarouselSlidesResolved.length > 0 ? (
                <div className="mb-8 md:mb-10">
                  <ClosingUseCaseCarouselSection
                    slides={styleGuideCarouselSlidesResolved}
                    onOpenLightbox={setSelectedImage}
                  />
                </div>
              ) : null}
              {styleGuideAfterIntroHeading &&
              !(styleGuideIssuePatternCards && styleGuideIssuePatternCards.length > 0) ? (
                <h4 className="text-center text-[18px] font-medium text-[#2e2e2e] mb-4">
                  {styleGuideAfterIntroHeading}
                </h4>
              ) : null}

              {styleGuideIssuePatternCards && styleGuideIssuePatternCards.length > 0 ? (
                <div className="my-8 md:my-12">
                  <div className="mx-auto grid w-full max-w-[min(100%,68rem)] grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-8">
                    {styleGuideIssuePatternCards.map((row, index) => {
                      const primaryTag = row.tags[0]?.label ?? `Pattern ${index + 1}`;
                      const summaryTagTone = {
                        orange: 'bg-[#fff1e6] text-[#8a4a28] border border-[#f0d4bc]',
                        green: 'bg-[#e8f5ec] text-[#1a5c3a] border border-[#c8e6d4]',
                      } as const;

                      return (
                        <div key={`research-card-${index}`} className="flex h-full flex-col">
                          <div className="w-full shrink-0 cursor-default overflow-hidden rounded-[2px] border border-gray-200 bg-gray-100">
                            {row.imageSrc ? (
                              <div
                                className={`${RESEARCH_QUOTE_THUMB_ASPECT_CLASS} w-full overflow-hidden rounded-[2px]`}
                              >
                                <img
                                  src={row.imageSrc}
                                  alt={row.imageAlt ?? primaryTag}
                                  draggable={false}
                                  className={`h-full w-full object-cover select-none pointer-events-none ${row.imageObjectPositionClass ?? ''}`}
                                />
                              </div>
                            ) : (
                              <div
                                className={`flex ${RESEARCH_QUOTE_THUMB_ASPECT_CLASS} w-full items-center justify-center rounded-[2px] bg-gray-300 font-['Inter',sans-serif] text-[12px] text-gray-500`}
                              >
                                Shot
                              </div>
                            )}
                          </div>
                          <div className="flex min-h-0 flex-1 flex-col gap-4 pt-4">
                            <p className="font-['Inter',sans-serif] text-[12px] font-normal leading-[1.55] italic text-[rgba(0,0,0,0.72)]">
                              {row.quote}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {row.tags.map((tag) => (
                                <span
                                  key={`${tag.label}-${tag.tone}`}
                                  className={`inline-flex cursor-default pointer-events-none rounded-[2px] px-[10px] py-[3px] font-['Inter',sans-serif] text-[12px] font-medium ${summaryTagTone[tag.tone]}`}
                                >
                                  {tag.label}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              {showAuroraThroughChartSelection ? (
                <>
                  {/* Aurora Charts - Official Library */}
                  <div className="my-6">
                    <h4 className="mt-4 text-[18px] font-medium py-2">
                      Aurora (Workday's official charting library)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                      {auroraCharts.map((chart, index) => (
                        <div key={index} className="flex flex-col gap-2 items-start w-full">
                          <div 
                            className="w-full h-[200px] md:h-[220px] overflow-hidden rounded-lg cursor-pointer border border-gray-200 shadow-md transition-opacity hover:opacity-90"
                            onClick={() => setSelectedImage(chart.src)}
                          >
                            <img src={chart.src} alt={chart.title} className="h-full w-full object-cover" />
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
                </>
              ) : null}

              {platformSectionLead ? (
                <p
                  className={`w-full font-['Inter',sans-serif] text-[14px] leading-[1.45] text-black ${
                    showAuroraThroughChartSelection ? 'my-14 md:my-16' : 'my-8 md:my-10'
                  }`}
                >
                  {platformSectionLead}
                </p>
              ) : platformSectionTitleAsH4 ? (
                <h4
                  className={`text-[18px] font-medium text-[#2e2e2e] mb-4 ${
                    showAuroraThroughChartSelection ? 'mt-14 md:mt-16' : 'mt-8 md:mt-10'
                  }`}
                >
                  {platformSectionTitle}
                </h4>
              ) : (
                <h3
                  className={`font-['Roboto_Slab',serif] text-[28px] tracking-[0.4px] case-study-h3-pad-2 text-[#2e2e2e] leading-[1.2] ${
                    showAuroraThroughChartSelection ? 'mt-14 md:mt-16' : 'mt-8 md:mt-10'
                  }`}
                >
                  {platformSectionTitle}
                </h3>
              )}
              {summaryInsightRows && summaryInsightRows.length > 0 ? (
                <>
                  {summaryInsightIntro ? (
                    <p className="font-['Inter',sans-serif] text-[14px] leading-[1.45] text-black mb-6 mt-2">
                      {summaryInsightIntro}
                    </p>
                  ) : null}
                  <div className="mx-auto mt-2 w-full max-w-[min(100%,68rem)] space-y-8 md:space-y-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    {summaryInsightRows.map((row) => (
                      <div
                        key={row.title}
                        className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-6 lg:gap-8"
                      >
                        <div
                          className="min-w-0 flex-1 pl-3 py-1"
                          style={{ borderLeft: `3px solid ${row.borderColor}` }}
                        >
                          <h4 className="font-['Roboto_Slab',serif] text-[18px] md:text-[19px] leading-[1.3] text-[#2e2e2e] mb-2">
                            {row.title}
                          </h4>
                          <p className="font-['Inter',sans-serif] text-[14px] md:text-[15px] leading-[1.55] text-[rgba(0,0,0,0.78)]">
                            {row.body}
                          </p>
                        </div>
                        {row.imageSrc ? (
                          <div className="flex min-h-[88px] w-full shrink-0 flex-col md:h-full md:min-h-0 md:w-[min(100%,168px)] lg:w-[184px]">
                            <img
                              src={row.imageSrc}
                              alt={row.imageAlt ?? row.title}
                              className="min-h-[88px] w-full rounded-lg border border-gray-200 bg-gray-50 object-cover md:h-full md:min-h-0"
                            />
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p className="font-['Inter',sans-serif] text-[14px] leading-[1.45] text-black mb-7 mt-2">
                    My diagram revealed that a truly unified charting library wasn&apos;t just a design problem — it was
                    an organizational and architectural one. The scope raised hard questions across every layer.
                  </p>

                  {/* Usage Guidelines */}
                  <div className="mx-auto mt-6 w-full max-w-[min(100%,68rem)] space-y-5 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
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
                    ].map(({ borderColor, title, body }) => (
                      <div key={title} className="pl-3 py-1" style={{ borderLeft: `3px solid ${borderColor}` }}>
                        <h4 className="font-['Inter',sans-serif] text-[16px] leading-[1.35] text-black mb-1">{title}</h4>
                        <p className="font-['Inter',sans-serif] text-[14px] leading-[1.45] text-black mb-1">{body}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

          </motion.section>

          {showEndCta ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 md:mt-12 inline-flex flex-col pt-2 text-left"
            >
              <h3 className="font-['Roboto_Slab',serif] text-[28px] tracking-[0.4px] case-study-h3-pad-6 text-[#2e2e2e] leading-[1.2]">
                Interested in hearing what happened?
              </h3>
              {!userReply ? (
                <div className="mt-3 flex flex-col items-start gap-3">
                  <button
                    type="button"
                    onClick={() => setUserReply('Yes, tell me more.')}
                    className="rounded-[12px] border border-[#2d6383] bg-white px-8 py-3 font-['Inter',sans-serif] text-[18px] text-[#2d6383] transition-colors hover:bg-[#2d6383]/10"
                  >
                    Yes, tell me more.
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserReply('No thanks')}
                    className="rounded-[12px] border border-[#2d6383] bg-white px-8 py-3 font-['Inter',sans-serif] text-[18px] text-[#2d6383] transition-colors hover:bg-[#2d6383]/10"
                  >
                    No thanks
                  </button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="mt-3 flex w-full flex-col gap-4"
                >
                  <div className="flex w-full justify-end">
                    <div className="relative flex shrink-0 items-center justify-end rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] bg-[#e8eaed] px-4 py-2">
                      <p className="whitespace-pre font-['Inter',sans-serif] text-[14px] font-normal leading-[1.25] tracking-[-0.48px] text-[#2e2e2e]">
                        {userReply}
                      </p>
                    </div>
                  </div>
                  {userReply === 'Yes, tell me more.' ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.45 }}
                      className="flex w-full justify-start"
                    >
                      <p className="font-['Roboto_Slab',serif] text-[14px] font-normal leading-[1.25] tracking-[-0.48px] text-[#2d6383]">
                        Great, let&apos;s chat! Here&apos;s my{' '}
                        <a
                          href="mailto:clarakap529@gmail.com"
                          className="underline transition-opacity hover:opacity-70"
                        >
                          email
                        </a>
                        .
                      </p>
                    </motion.div>
                  ) : null}
                  {userReply === 'No thanks' ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.45 }}
                      className="flex w-full justify-start"
                    >
                      <p className="font-['Roboto_Slab',serif] text-[14px] font-normal leading-[1.25] tracking-[-0.48px] text-[#2d6383]">
                        No problem! Thanks for visiting my site.
                      </p>
                    </motion.div>
                  ) : null}
                </motion.div>
              )}
            </motion.div>
          ) : null}

          {closingInterstitialNote ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="-mx-4 md:-mx-8 mb-8 bg-[#f0f7f7] px-8 py-10 md:px-12 md:py-12 lg:px-16"
                role="note"
              >
                <p className="w-full max-w-none text-pretty font-['Noteworthy',serif] text-[14px] font-bold leading-[1.45] tracking-[0.44px] text-[#2d6383]">
                  {closingInterstitialNote}
                </p>
              </motion.div>
              {closingInterstitialHeading ? (
                <h2
                  className={`font-['Roboto_Slab',serif] text-[40px] tracking-[0.8px] case-study-h3-pad-hero text-[#2d6383] leading-[1.2] ${
                    closingInterstitialHeadingParagraphs?.length || closingInterstitialSubheading
                      ? 'mb-3 md:mb-4'
                      : 'mb-6 md:mb-8'
                  }`}
                >
                  {closingInterstitialHeading}
                </h2>
              ) : null}
              {closingInterstitialHeadingParagraphs && closingInterstitialHeadingParagraphs.length > 0 ? (
                <div
                  className={`font-['Inter',sans-serif] text-[14px] leading-[1.5] md:leading-[1.45] text-black space-y-3 ${
                    closingInterstitialSubheading ? 'mb-3 md:mb-4' : 'mb-6 md:mb-8'
                  }`}
                >
                  {closingInterstitialHeadingParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {closingInterstitialSubheading ? (
                <>
                  <h3 className="font-['Roboto_Slab',serif] text-[28px] tracking-[0.4px] case-study-h3-pad-5 text-[#2e2e2e] leading-[1.2]">
                    {closingInterstitialSubheading}
                  </h3>
                  <p className="mb-4 font-['Inter',sans-serif] text-[14px] leading-[1.45] text-black">
                    The platform direction was changing week to week, with next-gen UI components and framework
                    patterns still in flux, so I had to align our product direction to a moving target while keeping
                    momentum on delivery.
                  </p>
                  <ul className="mb-4 ml-6 list-disc space-y-2 pl-6 font-['Inter',sans-serif] text-[14px] leading-[1.45] text-black marker:text-[#2e2e2e]">
                    <li>Designing response patterns that make long-form AI outputs scannable and trustworthy.</li>
                    <li>Designing for long tabular data in the response without breaking readability or context.</li>
                    <li>
                      Defining new admin controls for more granular enablements and permission management at the
                      report level.
                    </li>
                    <li>Making report context legible inside a stateless framework so users understand data scope.</li>
                  </ul>

                  <ClosingUseCaseCarouselSection
                    title="Adjusting the Show Steps template to provide context of the report"
                    introAfterTitle="Our agent can only query what's visible in the report — not external sources, not related reports, not broader Workday data. But the platform's default stateless pattern gives no indication of that boundary. For an analytics agent, that ambiguity is dangerous. Users come in with mixed expectations — assuming the agent will eventually traverse across reports or pull from a wider dataset. If the interface doesn't clearly communicate what data is actually being queried, users can't trust the answer and a misunderstanding becomes a liability."
                    slides={CLOSING_USE_CASE_CAROUSEL_SLIDES}
                    onOpenLightbox={setSelectedImage}
                  />

                  <h3 className="font-['Roboto_Slab',serif] text-[28px] tracking-[0.4px] case-study-h3-pad-5 text-[#2e2e2e] leading-[1.2] mt-6">
                    Track 2: Scaling for the Vision State
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[14px] leading-[1.45] text-black mb-4">
                    The next phase requires a future-state model that closes the gap between what users asked for and
                    what the first release could support. These are the core capabilities needed to address those unmet
                    analysis needs.
                  </p>
                  <ul className="mb-2 ml-6 list-disc space-y-2 pl-6 font-['Inter',sans-serif] text-[14px] leading-[1.45] text-black marker:text-[#2e2e2e]">
                    <li>
                      AI-driven breadth traversal that can query outside the current report and pull in relevant
                      connected context.
                    </li>
                    <li>
                      User-directed multi-report analysis that combines data from separate reporting sources into one
                      analysis flow.
                    </li>
                    <li>
                      Prompt-driven data manipulation that lets users filter, shape, and iterate without leaving
                      Workday.
                    </li>
                    <li>
                      Recurring analysis automation for monthly/quarterly cycles, including proactive summaries and
                      narrative insights.
                    </li>
                  </ul>
                  <h4 className="mt-6 font-['Inter',sans-serif] text-[18px] font-semibold text-[#2e2e2e]">
                    Design exploration to support recurring analysis
                  </h4>
                  <div className="mt-4 space-y-6">
                    <div className="space-y-2">
                      <p className="font-['Inter',sans-serif] text-[14px] font-bold text-[#2e2e2e]">Basic</p>
                      <button
                        type="button"
                        onClick={() => setTrack2BasicCarouselIndex(0)}
                        className="w-full cursor-pointer overflow-hidden rounded-[2px] border border-gray-200 bg-[#f0f7f7] text-left shadow-md transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6383] focus-visible:ring-offset-2"
                        aria-label="Open Basic flow image carousel"
                      >
                        <img
                          src={imgTrack2Basic}
                          alt="Track 2 Basic flow"
                          draggable={false}
                          className="block h-auto w-full select-none object-contain"
                        />
                      </button>
                    </div>
                    <div className="space-y-2">
                      <p className="font-['Inter',sans-serif] text-[14px] font-bold text-[#2e2e2e]">Redirect to create a report-backed Dashboard</p>
                      <button
                        type="button"
                        onClick={() => setTrack2DashboardCarouselIndex(0)}
                        className="w-full cursor-pointer overflow-hidden rounded-[2px] border border-gray-200 bg-[#f0f7f7] text-left shadow-md transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6383] focus-visible:ring-offset-2"
                        aria-label="Open dashboard-backed flow image carousel"
                      >
                        <img
                          src={imgTrack2Dashboard}
                          alt="Track 2 dashboard-backed report flow"
                          draggable={false}
                          className="block h-auto w-full select-none object-contain"
                        />
                      </button>
                    </div>
                    <div className="space-y-2">
                      <p className="font-['Inter',sans-serif] text-[14px] font-bold text-[#2e2e2e]">Leverage experimental 'AI canvas' concept</p>
                      <button
                        type="button"
                        onClick={() => setTrack2AiCanvasCarouselIndex(0)}
                        className="w-full cursor-pointer overflow-hidden rounded-[2px] border border-gray-200 bg-[#f0f7f7] text-left shadow-md transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6383] focus-visible:ring-offset-2"
                        aria-label="Open AI canvas flow image carousel"
                      >
                        <img
                          src={imgTrack2AiCanvas}
                          alt="Track 2 AI-Canvas pattern flow"
                          draggable={false}
                          className="block h-auto w-full select-none object-contain"
                        />
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
            </>
          ) : null}

          </>
          )}
        </div>
      </div>

      {track2BasicCarouselIndex !== null ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setTrack2BasicCarouselIndex(null)}
          className="fixed inset-0 z-50 cursor-pointer overflow-y-auto bg-black/80 p-4 sm:p-8"
        >
          <div
            className="flex min-h-full items-center justify-center py-8 sm:py-12"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              className="relative inline-block w-full max-w-[98vw]"
            >
              <button
                type="button"
                onClick={() => setTrack2BasicCarouselIndex(null)}
                className="absolute -right-1 -top-10 z-[60] text-white transition-colors hover:text-gray-300 sm:-top-12"
                aria-label="Close basic carousel modal"
              >
                <X size={32} />
              </button>
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setTrack2BasicCarouselIndex(
                      (track2BasicCarouselIndex - 1 + TRACK2_BASIC_CAROUSEL_IMAGES.length) %
                        TRACK2_BASIC_CAROUSEL_IMAGES.length,
                    )
                  }
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white/95 shadow-sm transition-colors hover:bg-white"
                  aria-label="Previous basic slide"
                >
                  <ChevronLeft size={18} className="text-[#2d6383]" />
                </button>
                <div className="max-h-[96vh] flex-1 overflow-auto rounded-lg">
                  <img
                    src={TRACK2_BASIC_CAROUSEL_IMAGES[track2BasicCarouselIndex]}
                    alt={`Basic flow step ${track2BasicCarouselIndex + 1}`}
                    className="mx-auto block h-auto w-auto max-w-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setTrack2BasicCarouselIndex(
                      (track2BasicCarouselIndex + 1) % TRACK2_BASIC_CAROUSEL_IMAGES.length,
                    )
                  }
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white/95 shadow-sm transition-colors hover:bg-white"
                  aria-label="Next basic slide"
                >
                  <ChevronRight size={18} className="text-[#2d6383]" />
                </button>
              </div>
              <div className="mt-3 flex justify-center gap-1.5">
                {TRACK2_BASIC_CAROUSEL_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setTrack2BasicCarouselIndex(index)}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      index === track2BasicCarouselIndex ? 'bg-white' : 'bg-white/45'
                    }`}
                    aria-label={`Go to basic slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}

      {track2DashboardCarouselIndex !== null ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setTrack2DashboardCarouselIndex(null)}
          className="fixed inset-0 z-50 cursor-pointer overflow-y-auto bg-black/80 p-4 sm:p-8"
        >
          <div
            className="flex min-h-full items-center justify-center py-8 sm:py-12"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              className="relative inline-block w-full max-w-[98vw]"
            >
              <button
                type="button"
                onClick={() => setTrack2DashboardCarouselIndex(null)}
                className="absolute -right-1 -top-10 z-[60] text-white transition-colors hover:text-gray-300 sm:-top-12"
                aria-label="Close dashboard carousel modal"
              >
                <X size={32} />
              </button>
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setTrack2DashboardCarouselIndex(
                      (track2DashboardCarouselIndex - 1 + TRACK2_DASHBOARD_CAROUSEL_IMAGES.length) %
                        TRACK2_DASHBOARD_CAROUSEL_IMAGES.length,
                    )
                  }
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white/95 shadow-sm transition-colors hover:bg-white"
                  aria-label="Previous dashboard slide"
                >
                  <ChevronLeft size={18} className="text-[#2d6383]" />
                </button>
                <div className="max-h-[96vh] flex-1 overflow-auto rounded-lg">
                  <img
                    src={TRACK2_DASHBOARD_CAROUSEL_IMAGES[track2DashboardCarouselIndex]}
                    alt={`Dashboard flow step ${track2DashboardCarouselIndex + 1}`}
                    className="mx-auto block h-auto w-auto max-w-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setTrack2DashboardCarouselIndex(
                      (track2DashboardCarouselIndex + 1) % TRACK2_DASHBOARD_CAROUSEL_IMAGES.length,
                    )
                  }
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white/95 shadow-sm transition-colors hover:bg-white"
                  aria-label="Next dashboard slide"
                >
                  <ChevronRight size={18} className="text-[#2d6383]" />
                </button>
              </div>
              <div className="mt-3 flex justify-center gap-1.5">
                {TRACK2_DASHBOARD_CAROUSEL_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setTrack2DashboardCarouselIndex(index)}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      index === track2DashboardCarouselIndex ? 'bg-white' : 'bg-white/45'
                    }`}
                    aria-label={`Go to dashboard slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}

      {track2AiCanvasCarouselIndex !== null ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setTrack2AiCanvasCarouselIndex(null)}
          className="fixed inset-0 z-50 cursor-pointer overflow-y-auto bg-black/80 p-4 sm:p-8"
        >
          <div
            className="flex min-h-full items-center justify-center py-8 sm:py-12"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              className="relative inline-block w-full max-w-[98vw]"
            >
              <button
                type="button"
                onClick={() => setTrack2AiCanvasCarouselIndex(null)}
                className="absolute -right-1 -top-10 z-[60] text-white transition-colors hover:text-gray-300 sm:-top-12"
                aria-label="Close AI canvas carousel modal"
              >
                <X size={32} />
              </button>
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setTrack2AiCanvasCarouselIndex(
                      (track2AiCanvasCarouselIndex - 1 + TRACK2_AI_CANVAS_CAROUSEL_IMAGES.length) %
                        TRACK2_AI_CANVAS_CAROUSEL_IMAGES.length,
                    )
                  }
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white/95 shadow-sm transition-colors hover:bg-white"
                  aria-label="Previous AI canvas slide"
                >
                  <ChevronLeft size={18} className="text-[#2d6383]" />
                </button>
                <div className="max-h-[96vh] flex-1 overflow-auto rounded-lg">
                  <img
                    src={TRACK2_AI_CANVAS_CAROUSEL_IMAGES[track2AiCanvasCarouselIndex]}
                    alt={`AI canvas flow step ${track2AiCanvasCarouselIndex + 1}`}
                    className="mx-auto block h-auto w-auto max-w-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setTrack2AiCanvasCarouselIndex(
                      (track2AiCanvasCarouselIndex + 1) % TRACK2_AI_CANVAS_CAROUSEL_IMAGES.length,
                    )
                  }
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white/95 shadow-sm transition-colors hover:bg-white"
                  aria-label="Next AI canvas slide"
                >
                  <ChevronRight size={18} className="text-[#2d6383]" />
                </button>
              </div>
              <div className="mt-3 flex justify-center gap-1.5">
                {TRACK2_AI_CANVAS_CAROUSEL_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setTrack2AiCanvasCarouselIndex(index)}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      index === track2AiCanvasCarouselIndex ? 'bg-white' : 'bg-white/45'
                    }`}
                    aria-label={`Go to AI canvas slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 cursor-pointer overflow-y-auto bg-black/80 p-4 sm:p-8"
        >
          <div
            className="flex min-h-full items-center justify-center py-8 sm:py-12"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              className="relative inline-block max-w-full"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute -right-1 -top-10 z-[60] text-white hover:text-gray-300 transition-colors sm:-top-12"
                aria-label="Close modal"
              >
                <X size={32} />
              </button>
              {isTrack2ZoomImage ? (
                <div className="max-h-[96vh] max-w-[98vw] overflow-auto rounded-lg shadow-2xl">
                  <img
                    src={selectedImage}
                    alt="Full size image"
                    className="mx-auto block h-auto w-auto max-w-none"
                  />
                </div>
              ) : (
                <img
                  src={selectedImage}
                  alt="Full size image"
                  className="block h-auto w-auto max-h-[96vh] max-w-[98vw] rounded-lg object-contain shadow-2xl"
                />
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}