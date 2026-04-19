import { ChartingPalettesProject, chartingPalettesRouteFragmentationCells } from './ChartingPalettesProject';

/**
 * Data Viz case study (`/project/charting-palettes` only).
 * Keeps the end CTA; hides Track 1 / Track 2 and all post-CTA follow-up (no closing interstitial props).
 * `hideCaseStudyTrackFollowUp` blocks the agent Track narrative even if other props change.
 */
export function DataVizCaseStudyPage() {
  return (
    <ChartingPalettesProject
      showEndCta
      showPostCtaFollowup={false}
      hideCaseStudyTrackFollowUp
      showFragmentationAuditGrid
      showCaseStudyTrack2Closing={false}
      showAuroraThroughChartSelection={false}
      showStyleGuideLeadSubtitleHeading={false}
      startingPointHeroTitle="Problem"
      fragmentationAuditCells={chartingPalettesRouteFragmentationCells}
    />
  );
}
