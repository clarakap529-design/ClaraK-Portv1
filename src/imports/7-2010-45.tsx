import imgClarakProfile3 from "figma:asset/ef54086b5aa301178f7e14564626f3e8237bb488.png";
import { imgClarakProfile2 } from "./svg-b6wkn";

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
    <div className="bg-white content-stretch flex items-center justify-end p-[10px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] shrink-0" data-name="User response">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2e2e2e] text-[16px] text-nowrap text-right tracking-[-0.48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.25] whitespace-pre">Why is she a great candidate?</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[27px] items-end justify-center left-[524px] top-[102px] w-[611px]">
      <Intro />
      <UserResponse />
      <div className="font-['Roboto_Slab:Regular',sans-serif] font-normal leading-[1.25] min-w-full relative shrink-0 text-[16px] text-black tracking-[-0.48px] w-[min-content]">
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

export default function Component() {
  return (
    <div className="bg-[#e8eef5] relative size-full" data-name="7">
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