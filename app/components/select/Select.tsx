interface selectProps {
  opt1: string;
  opt2: string;
  opt3: string;
  opt4: string;
}

export const Select = ({ opt1, opt2, opt3, opt4 }: selectProps) => {
  return (
    <div className="border-[1px] border-solid rounded-[48px] w-[13%] p-[10px]">
      <select>
        <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
          {opt1}
        </option>
        <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
          {opt2}
        </option>
        <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
          {opt3}
        </option>
        <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
          {opt4}
        </option>
      </select>
    </div>
  );
};
