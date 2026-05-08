import svgPaths from "./svg-rxam3pn5kx";
import imgClarakProfile3 from "figma:asset/ef54086b5aa301178f7e14564626f3e8237bb488.png";
import { imgClarakProfile2 } from "./svg-n695p";

function Intro() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[611px]" data-name="Intro">
      <p className="font-['Roboto_Slab:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[#2d6383] text-[16px] tracking-[-0.48px] w-full">Hi, my name is Clara. I’m good at making complex data feel friendly.</p>
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
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-end p-[10px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] shrink-0" data-name="User response">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e2e2e] text-[16px] text-nowrap text-right tracking-[-0.48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.25] whitespace-pre">Why is she a great candidate?</p>
      </div>
    </div>
  );
}

function Sparkle() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name=".Sparkle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id=".Sparkle">
          <path clipRule="evenodd" d={svgPaths.p2fd58080} fill="var(--fill-0, #022043)" fillRule="evenodd" id="Fill" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function Sparkle1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name=".Sparkle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id=".Sparkle">
          <path clipRule="evenodd" d={svgPaths.p1bbfb500} fill="var(--fill-0, #022043)" fillRule="evenodd" id="Fill" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

function Sparkle2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name=".Sparkle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id=".Sparkle">
          <path clipRule="evenodd" d={svgPaths.p13c57b00} fill="var(--fill-0, #022043)" fillRule="evenodd" id="Fill" />
        </g>
      </svg>
    </div>
  );
}

function LoadingSparkle() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Loading Sparkle">
      <Sparkle />
      <Sparkle1 />
      <Sparkle2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
      <LoadingSparkle />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[27px] items-end justify-center left-[524px] top-[188px] w-[611px]">
      <Intro />
      <UserResponse />
      <Frame1 />
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

export default function Component() {
  return (
    <div className="bg-[#E0E8F0] relative size-full" data-name="6">
      <Frame />
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[98px] leading-[1.65] left-[24px] not-italic text-[14px] text-black top-[39px] tracking-[-0.42px] w-[62px]">
        <p className="mb-0">Clara K.</p>
        <p className="mb-0">Portfolio</p>
        <p>Contact</p>
      </div>
      <MaskGroup />
    </div>
  );
}