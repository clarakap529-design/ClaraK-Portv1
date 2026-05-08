import imgScreenshot20260216At105144Am2 from "figma:asset/a4b3ac0215db4332e80b6fc41e9c7d95900e2edb.png";
import imgScreenshot20251006At93728Am11 from "figma:asset/8ff3ae8c343c0d4519aadf5ddb26ab21ffb959de.png";
import imgOverviewAllCountries11 from "figma:asset/b5735599f29d6f021c8acc9c1efb3a1f4ad3300f.png";
import imgOverview1 from "figma:asset/16e60006a6c1b9acd0113394b3380d6003257856.png";
import imgImage81 from "figma:asset/98f8b9e0eb3f5c99fbda50d01a688b338c6a64de.png";
import imgInfinitytsQaVndlyComDashboardsSummary11 from "figma:asset/f078c6646da0e293a7666e77db6436b508c416af.png";
import imgScreenshot20260216At112702Am1 from "figma:asset/7f33f782ae2536f97c96e7627e052086238b1ba6.png";
import imgImage110 from "figma:asset/e9f67eaa1eff5d1c086b71bd07ef85f37e28da35.png";
import { imgScreenshot20260216At105144Am1 } from "./svg-ueyq4";

function Button() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[-0.42px] whitespace-nowrap">Clara K.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[24px] relative shrink-0 w-[133.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[32px] items-center leading-[21px] not-italic relative size-full text-[14px] text-black text-center tracking-[-0.42px] whitespace-nowrap">
        <p className="relative shrink-0">Projects</p>
        <p className="relative shrink-0">Contact</p>
      </div>
    </div>
  );
}

function TopNav({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#E0E8F0] h-[72px] relative shrink-0 w-full"} data-name="top nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[921.492px] items-center px-[40px] relative size-full">
          <Button />
          <Container />
        </div>
      </div>
    </div>
  );
}

function TopTitleCardIntro({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#fbdee0] relative shrink-0 w-full"} data-name="top title card intro">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[40px] py-[32px] relative w-full">
        <div className="content-stretch flex font-['Roboto_Slab:Regular',sans-serif] font-normal gap-[8px] h-[21px] items-start leading-[21px] relative shrink-0 text-[#2d6383] text-[14px] tracking-[2px] uppercase w-full whitespace-nowrap" data-name="TAGS">
          <p className="relative shrink-0">#DataViz</p>
          <p className="relative shrink-0">#DesignSystem</p>
        </div>
        <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-[412px]" data-name="project title">
          <div className="flex flex-col font-['Roboto_Slab:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2e2e2e] text-[40px] tracking-[1.6px] whitespace-nowrap">
            <p className="leading-[60px]">Data Visualizations</p>
          </div>
        </div>
        <div className="content-stretch flex items-center relative shrink-0" data-name="description blurb">
          <div className="font-['Inter:Medium',sans-serif] font-medium leading-[32px] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.7)] w-[920px] whitespace-pre-wrap">
            <p className="mb-0">{`Workday's data visualization had grown organically across product lines, leaving behind a fragmented ecosystem of mismatched styles, conflicting interactions, and no central ownership. Loose guidelines, no guardrails.`}</p>
            <p className="mb-0">&nbsp;</p>
            <p>{`As a designer on the Reporting team — one of the teams maintaining a charting library — I recognized it early on this wasn't a design debt problem. It was a platform risk.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 h-[287px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[320px_160px] ml-0 mt-0 relative row-1 w-[320px]" data-name="Screenshot 2026-02-16 at 10.51.44 AM 1" style={{ maskImage: `url('${imgScreenshot20260216At105144Am1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260216At105144Am2} />
      </div>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]" data-name="thumbnail">
      <MaskGroup />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[12px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">Aurora thru GWT (RW)</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[10px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">eg. Report Writer, Dashboards</p>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 h-[186px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_14px] mask-size-[320px_160px] ml-0 mt-[-14px] relative row-1 w-[319px]" data-name="Screenshot 2025-10-06 at 9.37.28 AM 1 1" style={{ maskImage: `url('${imgScreenshot20260216At105144Am1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20251006At93728Am11} />
      </div>
    </div>
  );
}

function Thumbnail1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]" data-name="thumbnail">
      <MaskGroup1 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[12px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">Directly to Aurora</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[10px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">Discovery Boards</p>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 h-[182px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[320px_160px] ml-0 mt-0 relative row-1 w-[324px]" data-name="Overview All Countries 1 1" style={{ maskImage: `url('${imgScreenshot20260216At105144Am1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOverviewAllCountries11} />
      </div>
    </div>
  );
}

function Thumbnail2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]" data-name="thumbnail">
      <MaskGroup2 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[12px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">Aurora thru Cards Framework</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[10px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">EG. any Hub, Strategic Sourcing</p>
      </div>
    </div>
  );
}

function Aurora() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center leading-[0] relative shrink-0 w-full" data-name="aurora">
      <Thumbnail />
      <Thumbnail1 />
      <Thumbnail2 />
    </div>
  );
}

function FragmentedCharts() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="fragmented charts">
      <p className="font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[14px] relative shrink-0 text-[12px] text-black whitespace-nowrap">Aurora (Workday’s official charting library)</p>
      <Aurora />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 h-[242px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[320px_160px] ml-0 mt-0 relative row-1 w-[320px]" data-name="Overview 1" style={{ maskImage: `url('${imgScreenshot20260216At105144Am1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOverview1} />
      </div>
    </div>
  );
}

function Thumbnail3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[320px]" data-name="thumbnail">
      <MaskGroup3 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[12px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">D3</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[10px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">eg. Prism</p>
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 h-[239px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65px_40px] mask-size-[320px_160px] ml-[-65px] mt-[-40px] relative row-1 w-[386px]" data-name="image 8 1" style={{ maskImage: `url('${imgScreenshot20260216At105144Am1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage81} />
      </div>
    </div>
  );
}

function Thumbnail4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[320px]" data-name="thumbnail">
      <MaskGroup4 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[12px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">reCharts</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[10px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">eg. Peakon</p>
      </div>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 h-[486px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_89px] mask-size-[320px_160px] ml-0 mt-[-89px] relative row-1 w-[320px]" data-name="infinityts.qa.vndly.com_dashboards_summary 1 1" style={{ maskImage: `url('${imgScreenshot20260216At105144Am1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgInfinitytsQaVndlyComDashboardsSummary11} />
      </div>
    </div>
  );
}

function Thumbnail5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[320px]" data-name="thumbnail">
      <MaskGroup5 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[12px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">Nivo</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[10px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">eg. Vindly</p>
      </div>
    </div>
  );
}

function MaskGroup6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 h-[301px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_60px] mask-size-[320px_160px] ml-0 mt-[-60px] relative row-1 w-[320px]" data-name="Screenshot 2026-02-16 at 11.27.02 AM 1" style={{ maskImage: `url('${imgScreenshot20260216At105144Am1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260216At112702Am1} />
      </div>
    </div>
  );
}

function Thumbnail6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[320px]" data-name="thumbnail">
      <MaskGroup6 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[12px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">Plotly</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[10px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">eg. Sana</p>
      </div>
    </div>
  );
}

function MaskGroup7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 h-[202px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[320px_160px] ml-0 mt-0 relative row-1 w-[320px]" data-name="image 1 10" style={{ maskImage: `url('${imgScreenshot20260216At105144Am1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage110} />
      </div>
    </div>
  );
}

function Thumbnail7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[320px]" data-name="thumbnail">
      <MaskGroup7 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[12px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">Highcharts</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center min-w-full not-italic relative shrink-0 text-[10px] text-black text-center w-[min-content]">
        <p className="leading-[1.25]">Resource Scheduling</p>
      </div>
    </div>
  );
}

function Bespoke() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start justify-center leading-[0] relative shrink-0 w-full" data-name="bespoke">
      <Thumbnail3 />
      <Thumbnail4 />
      <Thumbnail5 />
      <Thumbnail6 />
      <Thumbnail7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[22px] relative shrink-0 text-[12px] text-black w-[1088px]">Bespoke libraries</p>
      <Bespoke />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Roboto_Slab:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#2e2e2e] text-[20px] top-[-0.5px] tracking-[1px] whitespace-nowrap">Product-level Goals</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-start relative shrink-0 w-full" data-name="List">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc not-italic relative shrink-0 text-[16px] text-black w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[22px]">Define a visual style guide to unify data visualization across products</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[22px]">Modernize the default color fault palette with accessible colors</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[22px]">Provide clear usage guidelines around library adoption</span>
        </li>
      </ul>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f8fafb] col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e1e8ed] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Heading />
        <List />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Roboto_Slab:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#2e2e2e] text-[20px] top-[-0.5px] tracking-[1px] whitespace-nowrap">Platform-level Goals</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-start relative shrink-0 w-full" data-name="List">
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc not-italic relative shrink-0 text-[16px] text-black w-full">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[22px]">Define clear guidelines for chart selection and library implementation across design, product, and engineering</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[22px]">Audit cross-product chart portability — library limitations, data source compatibility, and auditing risks</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[22px]">{`Build a sustainable ownership & governance model`}</span>
        </li>
      </ul>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f8fafb] col-2 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e1e8ed] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Heading1 />
        <List1 />
      </div>
    </div>
  );
}

function ChartingPalettesProject() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[212px] relative shrink-0 w-full" data-name="ChartingPalettesProject">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Problem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Problem">
      <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] px-[88px] relative w-full">
        <p className="font-['Roboto_Slab:Regular',sans-serif] font-normal leading-[60px] relative shrink-0 text-[#2d6383] text-[40px] tracking-[1.6px] whitespace-nowrap">Problem</p>
        <div className="font-['Inter:Regular',sans-serif] font-normal h-[192px] leading-[22px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content] whitespace-pre-wrap">
          <p className="mb-0">{`The challenge ran deeper than visual inconsistency. Workday's decentralized approach meant every product team was making independent decisions — about components, interactions, and implementation — with no shared foundation to build from. Charts looked different, behaved differently, and were built differently depending on the application and data source.`}</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">{`For designers, it was a constant time sink — no centralized source of truth meant recreating charts from scratch, draining time and compromising the polish. `}</p>
          <p className="mb-0">&nbsp;</p>
          <p>{`For end-users, the cost was trust. When data looks and behaves unpredictably, confidence in what it's telling you erodes.`}</p>
        </div>
        <FragmentedCharts />
        <Frame />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">This was an organizational alignment problem and a trust gap — and without a governance model to rally around, the fragmentation would only compound as Workday scaled.</p>
        <ChartingPalettesProject />
      </div>
    </div>
  );
}

function PageLayout() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[-1px] w-[1280px]" data-name="page layout">
      <TopNav />
      <TopTitleCardIntro />
      <Problem />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[415px] justify-center leading-[78px] not-italic relative shrink-0 text-[56px] text-black text-center w-[998px]">
        <p className="mb-0">PDFs of canvas site</p>
        <p className="mb-0">COLOR</p>
        <p className="mb-0">STYLE</p>
        <p>Usage guidelines</p>
      </div>
      <p className="font-['Roboto_Slab:Regular',sans-serif] font-normal leading-[60px] min-w-full relative shrink-0 text-[#2d6383] text-[40px] tracking-[1.6px] w-[min-content] whitespace-pre-wrap">{`Platform-level conversations with UI  VP and FIN VP`}</p>
    </div>
  );
}

export default function Teaser() {
  return (
    <div className="bg-white relative size-full" data-name="[Teaser]">
      <PageLayout />
    </div>
  );
}