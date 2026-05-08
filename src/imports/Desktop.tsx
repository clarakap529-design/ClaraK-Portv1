import svgPaths from "./svg-dlwaci8ljv";
import imgLineage2 from "figma:asset/ce7b9d9fdb9f2d058383f92ad930c1382017cff7.png";
import imgScreenshot20241008At35946Pm1 from "figma:asset/150944f4a29ca5630873f2f6789c568508774473.png";
import imgScreenshot20251111At10921Pm1 from "figma:asset/784887bc0d1dad4db13e8de9b2da60a6ad409b20.png";
import imgTimesByStage1 from "figma:asset/0773ac89427f068f5e1f3ef2c1e19ff7c5ba0171.png";
import imgLineageSideBtySide2 from "figma:asset/86d002be85922e3132651edd15ef7f1d7e535f1a.png";
import imgSidebysideTabular2 from "figma:asset/d5fb2f7043e117ce188888dd3fadb9fd0c4cc03c.png";
import imgViz1View2 from "figma:asset/7d7af87e85f262f461226eb88ae33330de4a6902.png";
import imgGrid2 from "figma:asset/c639ea7a9cf7f2e0441e9c9b44e4aff55afca607.png";
import imgSnapshot1 from "figma:asset/444217d9cd0b373b3b16f0ca8f9012cc6b1e6f85.png";
import { imgLineageSideBtySide1, imgSidebysideTabular1, imgViz1View1, imgGrid1 } from "./svg-k10yt";

function Padding() {
  return (
    <div className="relative shrink-0 w-full" data-name="padding">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[19px] items-start px-[192px] py-0 relative text-[#dfebeb] w-full">
          <p className="font-['Source_Serif_Pro:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[36px] tracking-[-1.62px] w-full">Debugging Pipelines</p>
          <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0">{`When customers ask 'Why is my dataset taking forever?', the answer is usually found by auditing changes made between p publishes.`}</p>
            <p className="mb-0">&nbsp;</p>
            <p>Our solution is a debugging tool that allows customers compare pipeline snapshots to pinpoint exact changes and fix performance bottlenecks fast.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioHeader() {
  return (
    <header className="bg-[#2d6383] content-stretch flex flex-col items-start max-w-[1500px] px-0 py-[64px] relative shrink-0 w-full" data-name="Portfolio Header">
      <Padding />
    </header>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="text">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[40px] pt-0 px-[128px] relative text-[#4d686b] text-center w-full">
          <p className="font-['Roboto_Slab:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[32px] text-nowrap tracking-[-0.96px]">Design Complexity is rooted in the Product Complexity</p>
          <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.3] min-w-full relative shrink-0 text-[20px] tracking-[-0.9px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0">{`Complexity arises from the hierarchical data model, large-scale pipelines, and `}</p>
            <p>hidden or ambiguous changes within the downstream impacts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center px-[4px] py-0 relative shrink-0 w-[200px]" data-name="tab">
      <div aria-hidden="true" className="absolute border-[#4d686b] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.4] text-[#4d686b] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Level 1
        </p>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center px-[4px] py-0 relative shrink-0 w-[200px]" data-name="tab">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[#4d686b] text-[24px]">
          <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.4]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Level 2
          </span>
          <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.52]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {" "}
          </span>
        </p>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center px-[4px] py-0 relative shrink-0 w-[200px]" data-name="tab">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.4] text-[#4d686b] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Level 3
        </p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[48px] items-end justify-center left-0 px-[32px] py-0 right-0 top-0" data-name="tabs">
      <Tab />
      <Tab1 />
      <Tab2 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute bg-[#f6f7f8] bottom-0 left-1/2 overflow-clip top-[48px] translate-x-[-50%] w-[1280px]" data-name="image">
      <div className="absolute aspect-[1344/688] bottom-[27px] left-[40px] top-[8px]" data-name="lineage 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLineage2} />
      </div>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[116px] leading-[0] right-[167.5px] text-[#4d686b] text-[0px] text-[20px] text-center top-[calc(50%-169px)] tracking-[-0.9px] translate-x-[50%] w-[255px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.3]">{`Every published dataset has a `}</span>
        <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.52]" style={{ fontVariationSettings: "'wdth' 100" }}>
          lineage
        </span>
        <span className="leading-[1.3]">{` that shows upstream datasets and tables.`}</span>
      </p>
    </div>
  );
}

function BubbleCircle2StreamlineBeveledScribbles() {
  return (
    <div className="absolute left-[896px] size-[110.58px] top-[244px]" data-name="Bubble-Circle-2--Streamline-Beveled-Scribbles">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111 111">
        <g id="Bubble-Circle-2--Streamline-Beveled-Scribbles">
          <path clipRule="evenodd" d={svgPaths.p5721900} fill="var(--fill-0, #4D686B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LevelsTab() {
  return (
    <div className="h-[588px] relative shrink-0 w-[1280px]" data-name="levels tab">
      <Tabs />
      <Image />
      <BubbleCircle2StreamlineBeveledScribbles />
    </div>
  );
}

function ComplexityOfPipeline() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[1500px] pb-0 pt-[40px] px-0 relative shrink-0 w-full" data-name="Complexity of pipeline">
      <div aria-hidden="true" className="absolute border-[#4f4f4f] border-[0.75px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Text />
      <LevelsTab />
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#dfebeb] max-w-[1500px] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pb-0 pt-[40px] px-[48px] relative w-full">
          <div className="font-['Roboto_Slab:Medium',sans-serif] font-medium h-[64px] leading-[1.25] relative shrink-0 text-[#2d6383] text-[32px] text-center tracking-[-0.96px] w-full">
            <p className="mb-0">Known Technical Constraints</p>
            <p className="mb-0">&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Constraint() {
  return (
    <div className="content-stretch flex flex-col h-[235px] items-start relative shrink-0 w-[261px]" data-name="constraint 1">
      <div className="font-['Roboto_Slab:Regular',sans-serif] font-normal h-[179px] leading-[1.25] relative shrink-0 text-[#2d6383] text-[22px] tracking-[-0.66px] w-full">
        <p className="font-['Roboto_Slab:Bold',sans-serif] font-bold mb-0">Constraint 1</p>
        <p className="mb-0">&nbsp;</p>
        <p>It’s “too much” to render two lineages. Due to size of many lineages, it would effect in rendering times.</p>
      </div>
    </div>
  );
}

function CannnotRender() {
  return (
    <div className="bg-white h-[400px] overflow-clip relative shrink-0 w-[872px]" data-name="cannnot render 2">
      <div className="absolute bottom-0 left-0 pointer-events-none top-0 w-[436px]" data-name="Screenshot 2024-10-08 at 3.59.46 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgScreenshot20241008At35946Pm1} />
        <div aria-hidden="true" className="absolute border border-[#8ab5af] border-solid inset-0" />
      </div>
      <div className="absolute bottom-0 pointer-events-none right-0 top-0 w-[436px]" data-name="Screenshot 2024-10-08 at 3.59.46 PM 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgScreenshot20241008At35946Pm1} />
        <div aria-hidden="true" className="absolute border border-[#8ab5af] border-solid inset-0" />
      </div>
    </div>
  );
}

function DesignConstraint() {
  return (
    <div className="bg-[#dfebeb] max-w-[1500px] relative shrink-0 w-full" data-name="design constraint 1">
      <div className="flex flex-row items-center justify-end max-w-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-[24px] items-center justify-end max-w-[inherit] pb-0 pt-[40px] px-[32px] relative w-full">
          <Constraint />
          <CannnotRender />
        </div>
      </div>
    </div>
  );
}

function ConstraintBlock() {
  return (
    <div className="basis-0 content-stretch flex gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="constraint block 2">
      <div className="h-[261px] pointer-events-none relative shrink-0 w-[552px]" data-name="Screenshot 2025-11-11 at 1.09.21 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgScreenshot20251111At10921Pm1} />
        <div aria-hidden="true" className="absolute border border-[#6b96ac] border-solid inset-0" />
      </div>
      <div className="flex flex-col font-['Roboto_Slab:Regular',sans-serif] font-normal h-[196px] justify-center leading-[1.25] relative shrink-0 text-[#2d6383] text-[22px] tracking-[-0.66px] w-[476px]">
        <p className="font-['Roboto_Slab:Bold',sans-serif] font-bold mb-0">Constraint 2</p>
        <p className="mb-0">&nbsp;</p>
        <p>We don’t have any highlighting or drawing functionality in the lineage view. This would be a new feature and out of scope.</p>
      </div>
    </div>
  );
}

function DesignConstraint1() {
  return (
    <div className="bg-[#dfebeb] max-w-[1500px] relative shrink-0 w-full" data-name="design constraint 2">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-[40px] items-center max-w-[inherit] pb-0 pt-[72px] px-[32px] relative w-full">
          <ConstraintBlock />
        </div>
      </div>
    </div>
  );
}

function Constraint1() {
  return (
    <div className="content-stretch flex flex-col h-[289px] items-start relative shrink-0 w-[437px]" data-name="constraint 1">
      <div className="font-['Roboto_Slab:Regular',sans-serif] font-normal h-[120px] leading-[1.25] relative shrink-0 text-[#2d6383] text-[22px] tracking-[-0.66px] w-full">
        <p className="font-['Roboto_Slab:Bold',sans-serif] font-bold mb-0">Constraint 3</p>
        <p className="mb-0">&nbsp;</p>
        <p>We technically cannot break down the run times or row counts per stage or dataset so we cannot pinpoint the stage responsible for the increase in run times.</p>
      </div>
    </div>
  );
}

function DesignConstraint2() {
  return (
    <div className="bg-[#dfebeb] max-w-[1500px] relative shrink-0 w-full" data-name="design constraint 4">
      <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-[40px] items-center justify-center max-w-[inherit] pl-[32px] pr-[110px] py-[72px] relative w-full">
          <Constraint1 />
          <div className="h-[428px] pointer-events-none relative shrink-0 w-[413px]" data-name="times by stage 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgTimesByStage1} />
            <div aria-hidden="true" className="absolute border border-[#6b96ac] border-solid inset-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-white max-w-[1500px] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] pb-[32px] pt-[48px] px-[48px] relative w-full">
          <div className="flex flex-col font-['Roboto_Slab:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[32px] text-black text-center tracking-[-0.96px] w-full">
            <p className="leading-[1.25]">Considerations for UX Patterns</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebySideViz() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[57px] place-items-start relative" data-name="sideby side /viz">
      <div className="[grid-area:1_/_1] h-[572.313px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-123px_-10px] mask-size-[616px_610px] ml-[123px] mt-[10px] relative w-[470.621px]" data-name="lineage- side bty side 1" style={{ maskImage: `url('${imgLineageSideBtySide1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLineageSideBtySide2} />
      </div>
    </div>
  );
}

function Topaxis() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[10px] h-[667px] items-center ml-[580px] mt-0 relative w-[120px]" data-name="Topaxis">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[40px] justify-center leading-[0] relative shrink-0 text-[#4d686b] text-[20px] text-center tracking-[-0.9px] w-[153px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3]">Side by Side</p>
      </div>
      <div className="flex h-[589px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[589px]">
            <div className="absolute inset-[-5.77px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 589 12">
                <path d={svgPaths.p2f4d2700} fill="var(--stroke-0, #4D686B)" id="Vector 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[666px] mt-[50px] place-items-start relative">
      <div className="[grid-area:1_/_1] h-[424px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7px_-83px] mask-size-[614px_617px] ml-[7px] mt-[83px] relative w-[476px]" data-name="sidebyside tabular 1" style={{ maskImage: `url('${imgSidebysideTabular1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSidebysideTabular2} />
      </div>
      <p className="[grid-area:1_/_1] font-['Roboto:Italic',sans-serif] font-normal h-[32px] italic leading-[1.09] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-51px_-39px] mask-size-[614px_617px] ml-[276.49px] mt-[39px] relative text-[#4d686b] text-[16px] text-center tracking-[-0.72px] translate-x-[-50%] w-[450.973px]" style={{ fontVariationSettings: "'wdth' 100", maskImage: `url('${imgSidebysideTabular1}')` }}>
        Concerns over number of nested pipelines
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <SidebySideViz />
      <Topaxis />
      <Group />
    </div>
  );
}

function HorzAxis() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="horz axis">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4d686b] text-[20px] text-right tracking-[-0.9px] w-[89px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3]">Visual</p>
      </div>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-[-5.77px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1050 12">
            <path d={svgPaths.p3983cff0} fill="var(--stroke-0, #4D686B)" id="Vector 1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[40px] justify-center leading-[0] relative shrink-0 text-[#4d686b] text-[20px] tracking-[-0.9px] w-[109px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3]">Tabular</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] h-[470px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-118px_-31px] mask-size-[616px_531px] ml-[118px] mt-[31px] relative w-[497.664px]" data-name="viz, 1 view 1" style={{ maskImage: `url('${imgViz1View1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgViz1View2} />
      </div>
      <p className="[grid-area:1_/_1] font-['Roboto:Italic',sans-serif] font-normal h-[104px] italic leading-[1.09] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-292.864px_-61px] mask-size-[616px_531px] ml-[439.3px] mt-[61px] relative text-[#4d686b] text-[16px] text-center tracking-[-0.72px] translate-x-[-50%] w-[292.864px]" style={{ fontVariationSettings: "'wdth' 100", maskImage: `url('${imgViz1View1}')` }}>{`Internal users & our product team hands-down prefer the pipeline visualization over a tabular format.`}</p>
    </div>
  );
}

function Topaxis1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[10px] h-[660px] items-center ml-[579px] mt-0 relative w-[122.88px]" data-name="Topaxis">
      <div className="flex h-[558px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[558px]">
            <div className="absolute inset-[-5.77px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 558 12">
                <path d={svgPaths.p33627300} fill="var(--stroke-0, #4D686B)" id="Vector 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[40px] justify-center leading-[0] relative shrink-0 text-[#4d686b] text-[20px] text-center tracking-[-0.9px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3]">Single View</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[666px] mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] h-[454px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-20px_-39px] mask-size-[614px_549px] ml-[20px] mt-[39px] relative w-[442px]" data-name="grid 1" style={{ maskImage: `url('${imgGrid1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGrid2} />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Group1 />
      <Topaxis1 />
      <Group2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#E0E8F0] max-w-[1500px] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] p-[48px] relative w-full">
          <div className="flex flex-col font-['Roboto_Slab:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[32px] text-black text-center tracking-[-0.96px] w-full">
            <p className="leading-[1.25]">Accessibility</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center px-[4px] py-0 relative shrink-0 w-[200px]" data-name="tab">
      <div aria-hidden="true" className="absolute border-[#4d686b] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.4] text-[#4d686b] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Icons & Labels`}</p>
      </div>
    </div>
  );
}

function Tab4() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center px-[4px] py-0 relative shrink-0 w-[200px]" data-name="tab">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[#4d686b] text-[24px]">
          <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.4]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Level 2
          </span>
          <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.52]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {" "}
          </span>
        </p>
      </div>
    </div>
  );
}

function Tab5() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center px-[4px] py-0 relative shrink-0 w-[200px]" data-name="tab">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.4] text-[#4d686b] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Level 3
        </p>
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[48px] items-end justify-center left-0 px-[32px] py-0 right-0 top-0" data-name="tabs">
      <Tab3 />
      <Tab4 />
      <Tab5 />
    </div>
  );
}

function DebugAccessibilityTabs() {
  return (
    <div className="bg-[#E0E8F0] h-[700px] relative shrink-0 w-[1280px]" data-name="debug accessibility tabs">
      <Tabs1 />
      <div className="absolute aspect-[948/613.237] bottom-[16px] left-[calc(50%-4px)] top-[50px] translate-x-[-50%]" data-name="Snapshot 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSnapshot1} />
      </div>
      <div className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[94px] leading-[0] right-[578px] text-[20px] text-black top-[500px] tracking-[-0.9px] translate-x-[100%] w-[219px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3] mb-0">Accessibility expert:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.3]">Icons need labels</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[1.3]">Prefer as a row header than a cell value in the middle of the table (better for screen readers)</span>
          </li>
        </ul>
      </div>
      <div className="absolute flex h-[77.111px] items-center justify-center left-[724.07px] top-[414px] w-[37.527px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[352.133deg]">
          <div className="h-[74.022px] relative w-[27.655px]">
            <div className="absolute inset-[-0.57%_-0.97%_0_-9.57%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 75">
                <path d={svgPaths.p36bd3b00} fill="var(--stroke-0, black)" id="Vector 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Accessibility() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="accessibility">
      <Text3 />
      <DebugAccessibilityTabs />
    </div>
  );
}

function FinalVid() {
  return (
    <div className="bg-white max-w-[1500px] relative shrink-0 w-full" data-name="final vid">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] p-[48px] relative w-full">
          <div className="flex flex-col font-['Roboto_Slab:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[32px] text-black text-center tracking-[-0.96px] w-full">
            <p className="leading-[1.25]">{`Final Deliverable & Implemented Designs`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <main className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 pb-[64px] pt-0 px-0 top-0 w-[1280px]" data-name="Main" tabIndex="-1">
      <PortfolioHeader />
      <ComplexityOfPipeline />
      <Text1 />
      <DesignConstraint />
      <DesignConstraint1 />
      <DesignConstraint2 />
      <Text2 />
      <Group3 />
      <HorzAxis />
      <Group4 />
      <Accessibility />
      <FinalVid />
      <div className="h-[627px] relative shrink-0 w-[940px]" data-name="Embed 1">
        <div className="embed overflow-clip size-full" />
      </div>
    </main>
  );
}

export default function Desktop() {
  return (
    <div className="relative size-full" data-name="desktop">
      <Main />
    </div>
  );
}