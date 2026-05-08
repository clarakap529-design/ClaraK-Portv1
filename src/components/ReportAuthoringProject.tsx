import { ChartingPalettesProject } from './ChartingPalettesProject';
import { ReportAuthoringBody } from './ReportAuthoringBody';
import imgCreateCustomReport from '../assets/report-authoring-create-custom-report.png';
import imgEditCustomReport from '../assets/report-authoring-edit-custom-report.png';
import imgAnatomyOfMatrixReport from '../assets/report-authoring-anatomy-of-matrix-report.png';
import imgAdvancedReport from '../assets/report-authoring-advanced-report.png';

export function ReportAuthoringProject() {
  return (
    <ChartingPalettesProject
      heroBgClass="bg-[#efe8dc]"
      heroTitle="Report Authoring"
      heroTags={['#reporting', '#research', '#agentic']}
      heroParagraphs={[
        "Data Source Findability and Report Authoring 2.0 were built for the same user, touched the same workflows, but were owned by entirely separate teams with no shared view of either. I was the only person sitting across both — so I made it my job to find the connective tissue.",
      ]}
      replaceMainContent={
        <ReportAuthoringBody
          journeyMapImageAlt="End-to-end report authoring journey map: phases, paths, and pain points across the workflow"
          problemTopImages={{
            left: [
              {
                src: imgCreateCustomReport,
                alt: 'Create Custom Report form showing report details and data source selection.',
              },
              {
                src: imgAnatomyOfMatrixReport,
                alt: 'Anatomy of a matrix report showing linked fields, row/column schemas, and drill-down mapping.',
              },
            ],
            right: [
              {
                src: imgEditCustomReport,
                alt: 'Edit Custom Report page showing matrix setup with row and column grouping fields.',
              },
              {
                src: imgAdvancedReport,
                alt: 'Advanced report flow showing prompts, run-time behavior, and report configuration anatomy.',
              },
            ],
          }}
        />
      }
    />
  );
}
