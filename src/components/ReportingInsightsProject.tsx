import { ChartingPalettesProject, type PersonaCardData } from './ChartingPalettesProject';

const personas: PersonaCardData[] = [
  {
    name: 'HR Business Partner',
    subtitle: '"Kitchen Sink" reports',
    imageSrc:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    imageAlt: 'HR Business Partner persona',
    goals: 'Find the right subset of data and filter it down to a manageable, actionable view.',
    painPoints:
      'Forced to export massive datasets to Excel just to answer basic questions — a manual, time-consuming process that gets in the way of the actual work.',
  },
  {
    name: 'Fin Professional',
    subtitle: 'Crawling detailed reports',
    imageSrc:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80',
    imageAlt: 'Fin Professional persona',
    goals: 'Quickly identify variances, reconcile data across reports, and surface discrepancies.',
    painPoints:
      "Every anomaly requires a manual investigation — cross-referencing multiple reports with no intelligent support to flag what's wrong or explain why.",
  },
];

export function ReportingInsightsProject() {
  return (
    <ChartingPalettesProject
      heroBgClass="bg-[#ecf1f1]"
      heroTitle="Reporting Insights"
      heroTags={['#REPORTING', '#AGENTIC', '#ANALYTICS']}
      heroParagraphs={[
        'It started as a technical experiment to use a chat interface to query report data to help Finance and HCM users answer their most critical business questions faster.',
      ]}
      personas={personas}
    />
  );
}
