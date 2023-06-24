export const Nav = () => {
  return (
    <div className="d-block p-[10px] ">
      <div className="flex justify-between my-2 px-4">
        <div>
          <h3 className="text-[#1b3938] text-[14px] font-Archivo font-[500] leading-[20px] trackin-[0.28px]">
            Total Applications
          </h3>
          <p className="text-[12px] text-[rgba(0, 0, 0, 0.40)] font-Archivo leading-[20px]">
            Requests from SMEs and Partners
          </p>
        </div>
        <select className="border items-center rounded-[48px] w-[25%] p-2 h-[38px] border-[#dbdee0]">
          <option className="text-[14px] font-Archivo font-[600] leading-[20px] text-[#083545]">
            Today
          </option>
          <option className="text-[14px] font-Archivo font-[600] leading-[20px] text-[#083545]">
            Week
          </option>
          <option className="text-[14px] font-Archivo font-[600] leading-[20px] text-[#083545]">
            Month
          </option>
          <option className="text-[14px] font-Archivo font-[600] leading-[20px] text-[#083545]">
            Year
          </option>
        </select>
      </div>
      <div className="border-b-[1px] border-[#f4f4f4] w-full"></div>
    </div>
  );
};
