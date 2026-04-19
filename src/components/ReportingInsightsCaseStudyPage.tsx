import {
  ChartingPalettesProject,
  type PersonaCardData,
  type ResearchQuoteRowData,
  type SummaryInsightRowData,
} from './ChartingPalettesProject';
import hrBusinessPartnerAvatar from '../assets/persona-hr-business-partner.png';
import finProfessionalAvatar from '../assets/persona-fin-professional.png';
import researchQuoteAndrewThumb from '../assets/research-quote-andrew-dunckel.png';
import researchQuoteMelissaThumb from '../assets/research-quote-melissa-bond.png';
import researchQuoteAndrewSetnessNewHire from '../assets/research-quote-andrew-setness-new-hire.png';

const personas: PersonaCardData[] = [
  {
    name: 'HR Business Partner',
    imageSrc: hrBusinessPartnerAvatar,
    imageAlt: 'HR Business Partner persona',
    goals: 'Find the right subset of data and filter it down to a manageable, actionable view.',
    painPoints:
      'Forced to export massive datasets to Excel just to answer basic questions — a manual, time-consuming process that gets in the way of the actual work.',
  },
  {
    name: 'Fin Professional',
    imageSrc: finProfessionalAvatar,
    imageAlt: 'Finance professional persona',
    goals: 'Quickly identify variances, reconcile data across reports, and surface discrepancies.',
    painPoints:
      "Every anomaly requires a manual investigation — cross-referencing multiple reports with no intelligent support to flag what's wrong or explain why.",
  },
];

const personasIntro =
  "These two personas represent Workday's core business domains — Human Capital Management (HCM) and Finance — each with their own workflows and use case-specific pain points.";

const researchQuoteRows: ResearchQuoteRowData[] = [
  {
    quote:
      'I basically would use it more than filtering purposes.. Instead of having to export the data, exporting is kind of a pain, then I have to format it and get it the way I want to see it, whereas Workday Assistant just allows me to very quickly and effectively get straight to the information I want to see without having to do the export',
    tags: [
      { label: 'Kitchen Sink Reports', tone: 'orange' },
      { label: 'New Hires2025', tone: 'green' },
    ],
    imageSrc: researchQuoteMelissaThumb,
    imageAlt:
      'Workday Absence Overview with Workday Assistant sidebar and Melissa Bond video inset',
    imageObjectPositionClass: 'object-right-top',
  },
  {
    quote:
      "I would expect a page like this would tell me things that are related to the data that's being served up, of which I'll then have to go to another report or I have to click on them and then traverse down and try to find it own my own.",
    tags: [
      { label: 'Companion Reports', tone: 'orange' },
      { label: 'Team Bonuses', tone: 'green' },
      { label: 'Individual Performance History', tone: 'green' },
    ],
    imageSrc: researchQuoteAndrewSetnessNewHire,
    imageAlt:
      'Workday New Hire Report with Workday Assistant sidebar and Andrew Setness video inset',
    /** Video inset is top-right; keep that anchor when the thumb is letterboxed. */
    imageObjectPositionClass: 'object-right-top',
  },
  {
    quote:
      "Then you're doing a specific company and a ledger account and then you're kind of switching back and forth between the two and then maybe those aren't even the right things and we got to get to the work tag level. Now I'm troubleshooting on those and then we need to pull a subreport...",
    tags: [
      { label: 'Nested Reports', tone: 'orange' },
      { label: 'Trial Balances', tone: 'green' },
    ],
    imageSrc: researchQuoteAndrewThumb,
    imageAlt: 'Andrew Dunckel speaking during a video call',
  },
];

const summaryInsightRows: SummaryInsightRowData[] = [
  {
    borderColor: '#1BADB9',
    title: 'Traversing Data (Breadth & Depth)',
    body:
      "Users expect the agent to reach beyond what's visible. Depth means traversing nested data without losing matrix context — something our MVP couldn't yet do. Breadth means crawling related reports, which requires the agent to make judgment calls about relevance and data accuracy.",
  },
  {
    borderColor: '#1C3A8E',
    title: 'Prompt-Driven Filtering',
    body:
      "Users would save significant time filtering and narrowing data through natural language rather than manually configuring multi-criteria conditions. Filtering what's already in view is the near-term win — rerunning the report against new parameters wasn't on the table for this release.",
  },
  {
    borderColor: '#E8A090',
    title: 'Recurring Analysis',
    body:
      'Monthly and quarterly reporting cycles mean users are asking the same questions on refreshed data — every time. Rather than re-entering the same prompts each cycle, users want to save and reuse analysis templates that run automatically. Same questions, new data, zero repetition.',
  },
  {
    borderColor: '#45A8DC',
    title: 'Proactive Analysis',
    body:
      "Instead of users driving the insights, they wanted the agent to surface anomalies, trends, and highlights automatically. The value isn't just speed — it's catching what a user wouldn't have thought to look for. This shifts the assistant from reactive tool to analytical partner.",
  },
  {
    borderColor: '#B86A2C',
    title: 'Suggested Next Steps',
    body:
      "Users wanted the agent to anticipate next steps — not just answer questions. Contextual suggestions and actionable chips like rerun, drill down, or view related report kept momentum without breaking flow. The distinction they were drawing wasn't assistant vs. tool. It was assistant vs. collaborator.",
  },
];

/**
 * Reporting Insights / Analyze & Act case study (`/project/analytics-agent` only).
 * Includes closing interstitial and Track 1 → Track 2 follow-up (`closingInterstitialSubheading`, etc.).
 * Does not set `showPostCtaFollowup={false}` — full post-body narrative is shown.
 */
export function ReportingInsightsCaseStudyPage() {
  return (
    <ChartingPalettesProject
      showFragmentationAuditGrid={false}
      showUnifiedStyleGuideLead={false}
      heroBgClass="bg-[#ecf1f1]"
      heroTitle="Reporting Insights"
      heroTags={['#REPORTING', '#AGENTIC', '#ANALYTICS']}
      heroParagraphs={[
        'It started as a technical experiment to use a chat interface to query report data to help Finance and HCM users answer their most critical business questions faster.',
      ]}
      startingPointParagraphs={[
        "In September 2024, Workday launched Analyze & Act — a constrained experiment with limited data sources and a simple chat UI. But internal research and our Early Adopter program told a different story. Users didn't want a chatbot. They expected an intelligent analysis agent. That gap became the real design challenge.",
      ]}
      personas={personas}
      personasIntro={personasIntro}
      colorPaletteParentSectionTitle="The MVP"
      colorPaletteSectionTitle="Getting Early Internal Feedback"
      colorPaletteIntroParagraphs={[
        'Before the formal Early Adopter program, I wanted to pressure-test the MVP with real users. I took the initiative to recruit a mix of internal Finance and HCM WOW (Workday on Workday) users to review what we were building — and worked with my PM to carve out a two-week research sprint to make it happen.',
        'The feedback validated the core concept but exposed a clear ceiling. Users embraced the idea of conversational reporting, but quickly pushed beyond what the MVP could do.',
      ]}
      mvpPrototypeVimeoIds={[
        'https://vimeo.com/1178214127?fl=tl&fe=ec',
        'https://vimeo.com/1178216616?share=copy&fl=sv&fe=ci',
      ]}
      mvpPrototypeSectionTitle="MVP Walkthroughs"
      mvpPrototypeVideoCaptions={['Fin use case', 'HCM use case']}
      showAccessiblePaletteSwatches={false}
      styleGuideSectionTitle="Research Findings"
      styleGuideSectionIntro="The research surfaced three distinct analysis patterns — each reflecting a different way users needed to traverse their data for analysis. These weren't edge cases. They were the core analytical workflows the MVP couldn't support."
      showStyleGuideCarousel={false}
      styleGuideIssuePatternCards={researchQuoteRows}
      showAuroraThroughChartSelection={false}
      platformSectionLead="These notes distill what we heard across interviews and early-adopter sessions — how people wanted to move through data, when they expected the assistant to take the lead, and where the MVP stopped short of real analysis work. The five patterns below are the recurring gaps between what shipped and what Finance and HCM users said they needed day to day."
      summaryInsightRows={summaryInsightRows}
      closingInterstitialNote={`By 2025, every team was building an agent. I shared these findings at Workday's internal design conference, presenting "Practical AI: Evolving Your AI Skill into an Agent" to the full design org. My goal was to help teams recognize the difference between an AI feature and a true agent — grounded in real tech constraints and user needs, not just chasing the hype & vision state.`}
      closingInterstitialHeading="When Product Met Platform"
      closingInterstitialHeadingParagraphs={[
        'Our research was building a case for how to evolve our AI. But the platform was being rebuilt underneath us. I had to move with the platform changes so we could keep our release dates, while keeping the future state in view.',
      ]}
      closingInterstitialSubheading="Track 1: Working Within the Platform Constraints"
    />
  );
}
