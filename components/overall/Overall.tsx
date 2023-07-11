import { Card } from "../card";

export const Overall = () => {
  return (
    <div>
      <div className="grid grid-cols-4 w-[81%]">
        <Card
          title="Submitted Requests"
          number={2220}
          percentage=""
          colors="primary"
        />
        <Card
          title="Events Created"
          number={1800}
          percentage="+11"
          colors="danger"
        />
        <Card
          title="Articles Posted"
          number={420}
          percentage="+9"
          colors="primary"
        />
        <Card
          title="Comments Made"
          number={420}
          percentage="+9"
          colors="primary"
        />
        <Card
          title="Feedback Submitted"
          number={1800}
          percentage="+11"
          colors="secondary"
        />
      </div>
      <h1 className="text-[24px] text-[#083545] mt-[2em] font-Archivo font-[700] leading-[32px]">
        Login Activity
      </h1>
      <div className=" border-b-2 my-8 lg:w-[73em]"></div>
      <div className="flex gap-4">
        <div className="border-[1px] border-solid rounded-[48px] w-[7em] p-[10px]">
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
        <div className="border-[1px] border-solid rounded-[48px] w-[7em] p-[10px]">
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
        <div className="border-[1px] border-solid rounded-[48px] w-[7em] p-[10px]">
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
