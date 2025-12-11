import svgPaths from "./svg-xh95ytaewt";
import imgClarakProfile3 from "figma:asset/ef54086b5aa301178f7e14564626f3e8237bb488.png";
import { imgClarakProfile2 } from "./svg-rasnr";

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
      <p className="font-['Source_Serif_Pro:SemiBold',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#2d6383] text-[36px] tracking-[-1.08px] w-full">Hi, my name is Clara. I’m good at making complex data feel friendly.</p>
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

function CoreSend() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Core/Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Core/Send">
          <path clipRule="evenodd" d={svgPaths.pf134000} fill="var(--fill-0, #022043)" fillRule="evenodd" id="Fill" />
        </g>
      </svg>
    </div>
  );
}

function InputBox() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shadow-[0px_2px_8px_0px_rgba(35,41,48,0.12),0px_4px_16px_0px_rgba(35,41,48,0.08)] shrink-0 w-full" data-name="input box">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[36px] h-[40px] items-center pl-[16px] pr-[12px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow h-[24px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#2e2e2e] text-[14px] tracking-[-0.42px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.25]">Why is she a great candidate?</p>
          </div>
          <CoreSend />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[27px] items-start left-[524px] top-[188px] w-[561px]">
      <Intro />
      <InputBox />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#c76129] box-border content-stretch flex gap-[10px] items-center justify-center left-[915px] px-[8px] py-[4px] rounded-[4px] top-[426px]">
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
      <div className="absolute flex h-[66px] items-center justify-center left-[953px] top-[354px] w-[65px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[66px] relative w-[65px]">
            <div className="absolute bottom-0 left-0 right-[-1.54%] top-[-4.94%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 70">
                <path d={svgPaths.p11d44f80} fill="var(--stroke-0, #C76129)" id="Vector 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}