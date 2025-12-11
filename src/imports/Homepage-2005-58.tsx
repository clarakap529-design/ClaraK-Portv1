import svgPaths from "./svg-iuobnxdkdx";
import imgClarakProfile3 from "figma:asset/ef54086b5aa301178f7e14564626f3e8237bb488.png";
import { imgClarakProfile2 } from "./svg-ggwls";

function MaskGroup() {
  return (
    <div className="absolute contents left-[160px] top-[88px]" data-name="Mask group">
      <div className="absolute h-[340.355px] left-[98.44px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[61.56px_11.495px] mask-size-[320px_320px] top-[76.5px] w-[498.96px]" data-name="Clarak-profile 2" style={{ maskImage: `url('${imgClarakProfile2}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClarakProfile3} />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Intro">
      <p className="font-['Noteworthy:Bold',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#2d6383] text-[36px] tracking-[0.72px] w-full">Hi, my name is Clara. I’m good at making complex data feel friendly.</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 561 1">
            <path d="M0 0.5H561" id="Vector 1" stroke="var(--stroke-0, #6B96AC)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#2d6383] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.42px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.25] whitespace-pre">Why is she a great candidate?</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Roboto:Italic',sans-serif] font-normal h-full italic justify-center leading-[0] relative shrink-0 text-[#2e2e2e] text-[14px] tracking-[-0.42px] w-[113px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.25]">Suggested prompt:</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[27px] items-start left-[524px] top-[188px] w-[561px]">
      <Intro />
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#c76129] box-border content-stretch flex gap-[10px] items-center justify-center left-[904px] px-[8px] py-[4px] rounded-[4px] top-[382px]">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.42px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.25] whitespace-pre">Click here</p>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-[#e8eef5] relative size-full" data-name="Homepage">
      <MaskGroup />
      <Frame />
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[98px] leading-[1.65] left-[24px] not-italic text-[14px] text-black top-[39px] tracking-[-0.42px] w-[62px]">
        <p className="mb-0">Clara K.</p>
        <p className="mb-0">Portfolio</p>
        <p>Contact</p>
      </div>
      <Frame1 />
      <div className="absolute h-[30px] left-[860px] top-[348px] w-[82px]">
        <div className="absolute bottom-[-2.48%] left-0 right-[-0.81%] top-[-18.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 37">
            <path d={svgPaths.p3f926c00} fill="var(--stroke-0, #C76129)" id="Vector 2" />
          </svg>
        </div>
      </div>
    </div>
  );
}