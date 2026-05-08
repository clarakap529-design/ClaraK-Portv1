import imgClarakProfile3 from "figma:asset/ef54086b5aa301178f7e14564626f3e8237bb488.png";
import { imgClarakProfile2 } from "./svg-tjgki";

function Intro() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[611px]" data-name="Intro">
      <p className="font-['Caveat:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#2d6383] text-[40px] tracking-[1.6px] w-full">Hi, my name is Clara. I’m good at making complex data feel friendly.</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 611 1">
            <path d="M0 0.5H611" id="Vector 1" stroke="var(--stroke-0, #6B96AC)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function UserResponse() {
  return (
    <div className="bg-white content-stretch flex items-center justify-end px-[16px] py-[8px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] shrink-0" data-name="User response">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2e2e2e] text-[16px] text-nowrap text-right tracking-[-0.48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.25] whitespace-pre">Why is she a great candidate?</p>
      </div>
    </div>
  );
}

function Intro1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-end justify-center left-[524px] top-[81px] w-[611px]" data-name="intro">
      <Intro />
      <UserResponse />
      <div className="font-['Roboto_Slab:Regular',sans-serif] font-normal h-[120px] leading-[1.25] relative shrink-0 text-[#2d6383] text-[16px] tracking-[-0.48px] w-full">
        <p className="mb-0">{`With over 12 years in UX design, Clara has extensive experience crafting enterprise solutions and AI-driven products at scale. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`She specializes in Reporting & Analytics with a strong focus on Data Visualization. She excels at untangling complex problems and creating intuitive designs that serve real human needs.`}</p>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[160px] top-[88px]" data-name="Mask group">
      <div className="absolute h-[340.355px] left-[98.44px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[61.56px_11.495px] mask-size-[320px_320px] top-[76.5px] w-[498.96px]" data-name="Clarak-profile 2" style={{ maskImage: `url('${imgClarakProfile2}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClarakProfile3} />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#E0E8F0] h-[517px] relative shrink-0 w-[1280px]" data-name="7">
      <Intro1 />
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[98px] leading-[1.65] left-[24px] not-italic text-[14px] text-black top-[39px] tracking-[-0.42px] w-[62px]">
        <p className="mb-0">Clara K.</p>
        <p className="mb-0">Portfolio</p>
        <p>Contact</p>
      </div>
      <MaskGroup />
    </div>
  );
}

function Frame() {
  return <div className="bg-white h-[360px] rounded-[24px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.4)] shrink-0 w-[530px]" />;
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Roboto_Slab:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[40px] text-black tracking-[1.6px] w-full">
        <h4 className="block leading-[1.25]">Analytics Agent</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <button className="bg-black content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px]">
        <p className="leading-[1.45] whitespace-pre">Call to action</p>
      </div>
    </button>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text />
      <Button />
    </div>
  );
}

function Project4() {
  return (
    <div className="bg-[#f2e1cd] max-w-[1500px] relative shrink-0 w-full" data-name="Project 7">
      <div aria-hidden="true" className="absolute border-[#0034ad] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[64px] items-center max-w-[inherit] pb-[80px] pl-[88px] pr-[98px] pt-[48px] relative w-full">
          <Frame />
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <button className="bg-black content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px]">
        <p className="leading-[1.45] whitespace-pre">Call to action</p>
      </div>
    </button>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[19px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto_Slab:Bold',sans-serif] font-bold leading-[1.25] min-w-full relative shrink-0 text-[#2e2e2e] text-[40px] tracking-[1.6px] w-[min-content]">Data Visualization</p>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[min-content]">
        <p className="leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
      </div>
      <Button1 />
    </div>
  );
}

function Frame2() {
  return <div className="bg-white h-[360px] rounded-[24px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.4)] shrink-0 w-[530px]" />;
}

function Project() {
  return (
    <div className="bg-[#fbdee0] max-w-[1500px] relative shrink-0 w-full" data-name="Project 2">
      <div aria-hidden="true" className="absolute border-[#0034ad] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[64px] items-center max-w-[inherit] pb-[80px] pl-[88px] pr-[98px] pt-[48px] relative w-full">
          <Text1 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return <div className="bg-white h-[360px] rounded-[24px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.4)] shrink-0 w-[530px]" />;
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Roboto_Slab:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[40px] text-black tracking-[1.6px] w-full">
        <h4 className="block leading-[1.25]">Debugging</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <button className="bg-black content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px]">
        <p className="leading-[1.45] whitespace-pre">Call to action</p>
      </div>
    </button>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text2 />
      <Button2 />
    </div>
  );
}

function Project1() {
  return (
    <div className="bg-[#f2f2f7] max-w-[1500px] relative shrink-0 w-full" data-name="Project 3">
      <div aria-hidden="true" className="absolute border-[#0034ad] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[64px] items-center max-w-[inherit] pb-[80px] pl-[88px] pr-[98px] pt-[48px] relative w-full">
          <Frame3 />
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Content1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <button className="bg-black content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px]">
        <p className="leading-[1.45] whitespace-pre">Call to action</p>
      </div>
    </button>
  );
}

function Text3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[19px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto_Slab:Bold',sans-serif] font-bold leading-[1.25] min-w-full relative shrink-0 text-[#0034ad] text-[40px] tracking-[1.6px] w-[min-content]">Data Management</p>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[min-content]">
        <p className="leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
      </div>
      <Button3 />
    </div>
  );
}

function Frame4() {
  return <div className="bg-white h-[360px] rounded-[24px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.4)] shrink-0 w-[530px]" />;
}

function Project5() {
  return (
    <div className="bg-[#dfebeb] max-w-[1500px] relative shrink-0 w-full" data-name="Project 8">
      <div aria-hidden="true" className="absolute border-[#0034ad] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[64px] items-center max-w-[inherit] pb-[80px] pl-[88px] pr-[98px] pt-[48px] relative w-full">
          <Text3 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1280px]" data-name="Main">
      <Component />
      <Project4 />
      <Project />
      <Project1 />
      <Project5 />
    </div>
  );
}

function Frame5() {
  return <div className="bg-white h-[360px] rounded-[24px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.4)] shrink-0 w-[530px]" />;
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Roboto_Slab:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[40px] text-black tracking-[1.6px] w-full">
        <h4 className="block leading-[1.25]">Analytics Agent</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <button className="bg-black content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px]">
        <p className="leading-[1.45] whitespace-pre">Call to action</p>
      </div>
    </button>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text4 />
      <Button4 />
    </div>
  );
}

function AnalyticsAgent() {
  return (
    <div className="bg-[#f2e1cd] content-stretch flex gap-[64px] items-center max-w-[1500px] pb-[80px] pl-[88px] pr-[98px] pt-[48px] relative shrink-0 w-[1280px]" data-name="Analytics Agent">
      <div aria-hidden="true" className="absolute border-[#0034ad] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame5 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Content2 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Roboto_Slab:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[40px] text-black tracking-[1.6px] w-full">
        <h4 className="block leading-[1.25]">Report Authoring</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <button className="bg-black content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px]">
        <p className="leading-[1.45] whitespace-pre">Call to action</p>
      </div>
    </button>
  );
}

function Content3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] h-full items-start justify-center px-[40px] py-0 relative shrink-0 w-[620px]" data-name="Content">
      <Text5 />
      <Button5 />
    </div>
  );
}

function Content4() {
  return <div className="absolute h-[419px] left-0 top-0 w-[640px]" data-name="Content" />;
}

function Frame6() {
  return <div className="absolute bg-white h-[360px] left-[73px] rounded-[24px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.4)] top-[69px] w-[530px]" />;
}

function Frame1() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[745px]">
      <Content4 />
      <Frame6 />
    </div>
  );
}

function Project3() {
  return (
    <div className="bg-[#dfebeb] content-stretch flex h-[498px] items-center max-w-[1500px] relative shrink-0 w-[1280px]" data-name="Project 6">
      <Content3 />
      <Frame1 />
    </div>
  );
}

function Frame7() {
  return <div className="bg-white h-[360px] rounded-[24px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.4)] shrink-0 w-[530px]" />;
}

function Button6() {
  return (
    <button className="bg-black content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px]">
        <p className="leading-[1.45] whitespace-pre">Call to action</p>
      </div>
    </button>
  );
}

function Text6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[19px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto_Slab:Bold',sans-serif] font-bold leading-[1.25] min-w-full relative shrink-0 text-[#2e2e2e] text-[40px] tracking-[1.6px] w-[min-content]">Data Visualization</p>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[min-content]">
        <p className="leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
      </div>
      <Button6 />
    </div>
  );
}

function DataViz() {
  return (
    <div className="bg-[#fbdee0] content-stretch flex gap-[64px] items-center max-w-[1500px] pb-[80px] pl-[88px] pr-[98px] pt-[48px] relative shrink-0 w-[1280px]" data-name="data viz">
      <Frame7 />
      <Text6 />
    </div>
  );
}

function Button7() {
  return (
    <button className="bg-black content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px]">
        <p className="leading-[1.45] whitespace-pre">Call to action</p>
      </div>
    </button>
  );
}

function Text7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[19px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto_Slab:Bold',sans-serif] font-bold leading-[1.25] min-w-full relative shrink-0 text-[#2e2e2e] text-[40px] tracking-[1.6px] w-[min-content]">Data Management</p>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[min-content]">
        <p className="leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
      </div>
      <Button7 />
    </div>
  );
}

function Frame8() {
  return <div className="bg-white h-[360px] rounded-[24px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.4)] shrink-0 w-[530px]" />;
}

function Project6() {
  return (
    <div className="bg-[#dfebeb] max-w-[1500px] relative shrink-0 w-full" data-name="Project 8">
      <div aria-hidden="true" className="absolute border-[#0034ad] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[64px] items-center max-w-[inherit] pb-[80px] pl-[88px] pr-[98px] pt-[48px] relative w-full">
          <Text7 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return <div className="bg-white h-[360px] rounded-[24px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.4)] shrink-0 w-[530px]" />;
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Roboto_Slab:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[40px] text-black tracking-[1.6px] w-full">
        <h4 className="block leading-[1.25]">Debugging</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <button className="bg-black content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px]">
        <p className="leading-[1.45] whitespace-pre">Call to action</p>
      </div>
    </button>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text8 />
      <Button8 />
    </div>
  );
}

function Project2() {
  return (
    <div className="bg-[#f2f2f7] max-w-[1500px] relative shrink-0 w-full" data-name="Project 3">
      <div aria-hidden="true" className="absolute border-[#0034ad] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[64px] items-center max-w-[inherit] pb-[80px] pl-[88px] pr-[98px] pt-[48px] relative w-full">
          <Frame9 />
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Content5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Main1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1280px]" data-name="Main">
      <AnalyticsAgent />
      <Project3 />
      <DataViz />
      <Project6 />
      <Project2 />
    </div>
  );
}

export default function Component1() {
  return (
    <div className="bg-white relative size-full" data-name="1280">
      <Main />
      <Main1 />
    </div>
  );
}