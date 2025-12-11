export default function Text() {
  return (
    <div className="bg-white leading-[1.25] relative size-full" data-name="Text">
      <p className="absolute font-['Cherry_Swash:Bold',sans-serif] left-[187px] not-italic text-[#2e2e2e] text-[36px] top-[43px] tracking-[0.72px] w-[662px]">This is an H1 tag</p>
      <p className="absolute font-['Cherry_Swash:Regular',sans-serif] left-[187px] not-italic text-[#2e2e2e] text-[28px] top-[102px] tracking-[-0.84px] w-[662px]">This is an H2 tag</p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal left-[187px] text-[#2e2e2e] text-[14px] top-[241px] tracking-[-0.42px] w-[662px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        This is an example of body text
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium left-[187px] text-[#2e2e2e] text-[16px] top-[287px] tracking-[-0.48px] w-[662px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        This is an example of body text (user input)
      </p>
      <p className="absolute font-['Roboto_Slab:Medium',sans-serif] font-medium left-[187px] text-[#2e2e2e] text-[16px] top-[341px] tracking-[-0.48px] w-[662px]">This is an example of an H3 tag (voice of the AI?)</p>
      <p className="absolute font-['Hepta_Slab:Regular',sans-serif] font-normal h-[25px] left-[19px] text-[20px] text-black top-[53px] tracking-[-0.6px] w-[72px]">H1</p>
      <p className="absolute font-['Hepta_Slab:Regular',sans-serif] font-normal h-[25px] left-[19px] text-[20px] text-black top-[112px] tracking-[-0.6px] w-[72px]">H2</p>
      <p className="absolute font-['Hepta_Slab:Regular',sans-serif] font-normal h-[32px] left-[19px] text-[20px] text-black top-[236px] tracking-[-0.6px] w-[125px]">Body Text</p>
      <p className="absolute font-['Hepta_Slab:Regular',sans-serif] font-normal h-[32px] left-[19px] text-[20px] text-black top-[286px] tracking-[-0.6px] w-[125px]">Body Text 2</p>
      <p className="absolute font-['Hepta_Slab:Regular',sans-serif] font-normal h-[32px] left-[19px] text-[20px] text-black top-[336px] tracking-[-0.6px] w-[125px]">Body Text 3 (AI)</p>
    </div>
  );
}