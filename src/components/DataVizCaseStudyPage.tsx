import { ChartingPalettesProject, chartingPalettesRouteFragmentationCells } from './ChartingPalettesProject';

/**
 * Data Viz case study (`/project/charting-palettes` only).
 * Keeps the end CTA; hides Track 1 / Track 2 and all post-CTA follow-up (no closing interstitial props).
 * `hideCaseStudyTrackFollowUp` blocks the agent Track narrative even if other props change.
 *
 * Color-accessibility prototype row: wide left column + two stacked images on the right. Set
 * `colorAccessibilityPrototypeLeftVimeoId` to a Vimeo URL or numeric ID to replace the left image with an embed.
 */
export function DataVizCaseStudyPage() {
  return (
    <div data-case-study="data-viz" className="contents">
    <ChartingPalettesProject
      showEndCta
      showPostCtaFollowup={false}
      hideCaseStudyTrackFollowUp
      showFragmentationAuditGrid
      showCaseStudyTrack2Closing={false}
      showAuroraThroughChartSelection={false}
      startingPointHeroTitle="Problem"
      fragmentationAuditCells={chartingPalettesRouteFragmentationCells}
      colorAccessibilityPrototypeLeftVimeoId="https://vimeo.com/1184619080/080efdbdd8?share=copy&fl=sv&fe=ci"
    />
    </div>
  );
}
