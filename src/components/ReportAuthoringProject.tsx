import { ChartingPalettesProject } from './ChartingPalettesProject';
import { ReportAuthoringBody } from './ReportAuthoringBody';

export function ReportAuthoringProject() {
  return (
    <ChartingPalettesProject
      heroTitle="Report Authoring"
      heroTags={['#reporting', '#research', '#agentic']}
      heroParagraphs={[
        'Data Source Findability and Report Writer 2.0 were built for the same user, touched the same workflows, but were owned by entirely separate teams with no shared view of either. I was the only person sitting across both — so I made it my job to find the connective tissue.',
      ]}
      replaceMainContent={<ReportAuthoringBody />}
    />
  );
}
