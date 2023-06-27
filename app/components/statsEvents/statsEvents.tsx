import { Card } from "../card";

export const statsEvents = () => {
  return (
    <div>
      <div className="flex gap-6 ">
        <Card
          title="Total Events"
          number={1800}
          percentage=""
          colors="danger"
        />
      </div>

      <div className="flex gap-4 my-8">
        <div className="border-[1px] border-solid rounded-[48px] w-[13%] p-[10px]">
          <select>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Any User
            </option>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Any User
            </option>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Any User
            </option>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Any User
            </option>
          </select>
        </div>
        <div className="border-[1px] border-solid rounded-[48px] w-[13%]  p-[10px]">
          <select>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Any Status
            </option>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Any Status
            </option>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Any Status
            </option>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Any Status
            </option>
          </select>
        </div>
        <div className="border-[1px] border-solid rounded-[48px] w-[13%] p-[10px]">
          <select>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Any date
            </option>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Any date
            </option>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Any date
            </option>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Any date
            </option>
          </select>
        </div>
        <div className="border-[1px] border-solid rounded-[48px] w-[13%]  p-[10px]">
          <select>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Anywhere
            </option>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Anywhere
            </option>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Anywhere
            </option>
            <option className="text-[14px] text-[#083545] font-[600] font-Archivo leading-[20px]">
              Anywhere
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
