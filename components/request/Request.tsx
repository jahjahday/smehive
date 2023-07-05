import { Card } from "../card";

export const Request = () => {
  return (
    <>
      <div className="flex gap-6 ">
        <Card
          title="Total Requests"
          number={389}
          percentage=""
          colors="primary"
        />
        <Card title="SMEs" number={180} percentage="" colors="danger" />
        <Card title="Partner" number={200} percentage="" colors="primary" />
      </div>

      <div className="flex gap-4 my-8">
        <div className="border-[1px] border-solid rounded-[48px] w-[8%] p-[10px]">
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
        <div className="border-[1px] border-solid rounded-[48px] w-[8%]  p-[10px]">
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
        <div className="border-[1px] border-solid rounded-[48px] w-[8%] p-[10px]">
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
        <div className="border-[1px] border-solid rounded-[48px] w-[8%]  p-[10px]">
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
    </>
  );
};
