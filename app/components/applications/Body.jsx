export const Body = () => {
  return (
    <>
      <div className="grid grid-cols-3 mt-8">
        <div className="flex gap-2">
          <ul className="flex flex-col justify-between gap-4">
            <li className="bg-[#baedbd] w-[8px] h-[8px] rounded-full"></li>
            <li className="bg-[#3B6D6C]  w-[8px] h-[8px] rounded-full"></li>
            <li className="bg-[#f5dc9b] w-[8px] h-[8px] rounded-full"></li>
            <li className="bg-[#d25050]  w-[8px] h-[8px] rounded-full"></li>
          </ul>
          <ul className="flex flex-col justify-between gap-4">
            <li className="text-[#1c1c1c] text-[12px] font-Archivo font-[500] leading-[18px]">
              In-line
            </li>
            <li className="text-[#1c1c1c] text-[12px] font-Archivo font-[500] leading-[18px]">
              Approved
            </li>
            <li className="text-[#1c1c1c] text-[12px] font-Archivo font-[500] leading-[18px]">
              Pending
            </li>
            <li className="text-[#1c1c1c] text-[12px] font-Archivo font-[500] leading-[18px]">
              Rejected
            </li>
          </ul>
        </div>
        <ul className="flex flex-col justify-between gap-4">
          <li className="text-[#1c1c1c] text-[16px] text-right font-Archivo leading-[18px]">
            23
          </li>
          <li className="text-[#1c1c1c] text-[16px] text-right font-Archivo leading-[18px]">
            23
          </li>
          <li className="text-[#1c1c1c] text-[16px] text-right font-Archivo leading-[18px]">
            23
          </li>
          <li className="text-[#1c1c1c] text-[16px] text-right font-Archivo leading-[18px]">
            23
          </li>
        </ul>
      </div>
    </>
  );
};
