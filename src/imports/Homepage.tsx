import svgPaths from "./svg-tftonh4sv5";
import imgClarakProfile3 from "figma:asset/ef54086b5aa301178f7e14564626f3e8237bb488.png";
import { imgClarakProfile2 } from "./svg-qrwzr";

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
    <div className="relative shrink-0 w-full" data-name="Intro">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pl-0 pr-[48px] py-0 relative w-full">
          <p className="font-['Source_Serif_Pro:SemiBold',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[36px] text-black tracking-[-1.08px] w-full">Hi, my name is Clara. I’m good at making complex data feel friendly.</p>
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
    <div className="bg-white box-border content-stretch flex gap-[36px] h-[40px] items-center pl-[16px] pr-[12px] py-[8px] relative rounded-[12px] shadow-[0px_2px_8px_0px_rgba(35,41,48,0.12),0px_4px_16px_0px_rgba(35,41,48,0.08)] shrink-0 w-[515px]" data-name="input box">
      <div className="basis-0 flex flex-col font-['Inter:Italic',sans-serif] font-normal grow h-[24px] italic justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#7b858f] text-[14px]">
        <p className="leading-[normal]">Lets get started...</p>
      </div>
      <CoreSend />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[27px] items-start left-[524px] top-[188px] w-[710px]">
      <Intro />
      <InputBox />
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-[#e8eef5] relative size-full" data-name="Homepage">
      <MaskGroup />
      <Frame />
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[98px] leading-[1.25] left-[24px] not-italic text-[14px] text-black top-[24px] tracking-[-0.42px] w-[62px]">
        <p className="mb-0">Top</p>
        <p className="mb-0">Portfolio</p>
        <p>Contact</p>
      </div>
    </div>
  );
}