import Image from "next/image";
import person from "../../app/assets/img/3D05.png";

export const Activities = () => {
  return (
    <div className="bg-white rounded-[20px] p-4 mt-6 py-5">
      <ul className="flex justify-between">
        <li className="text-[#1b3938]  cursor-pointer text-[1.2rem] font-Archivo font-[700] leading-[24px]">
          Activities
        </li>
        <li className="text-[0.95rem] cursor-pointer font-Archivo font-[500] leading-[16px] tracking-[0.4px] mt-1 opacity-60">
          Manage
        </li>
      </ul>
      <div className="mt-8 grid gap-4">
        <div className="flex gap-4 px-2">
          <Image src={person} alt="" width={40} />
          <div>
            <h4 className="text-[1.075rem] font-[500] text-[#083545]  overflow-hidden whitespace-nowrap font-Archivo leading-[20px] text-ellipsis">
              Edited the details of Market
            </h4>
            <p className="text-[0.95rem] font-[500]  opacity-50 font-Archivo leading-[20px] text-[rgba(0, 0, 0, 0.4)]">
              Just now
            </p>
          </div>
        </div>
        <div className="flex gap-4 px-2">
          <Image src={person} alt="" width={40} />
          <div>
            <h4 className="text-[1.075rem] font-[500] text-[#083545] overflow-hidden whitespace-nowrap font-Archivo leading-[20px] text-ellipsis">
              Updated content
            </h4>
            <p className="text-[0.95rem] font-[500] opacity-50 font-Archivo leading-[20px] text-[rgba(0, 0, 0, 0.4)]">
              Just now
            </p>
          </div>
        </div>
        <div className="flex gap-4 px-2">
          <Image src={person} alt="" width={40} />
          <div>
            <h4 className="text-[1.075rem] font-[500] text-[#083545] overflow-hidden whitespace-nowrap font-Archivo leading-[20px] text-ellipsis">
              Submitted a approval
            </h4>
            <p className="text-[0.95rem] font-[500] opacity-50 font-Archivo leading-[20px] text-[rgba(0, 0, 0, 0.4)]">
              12 hours ago
            </p>
          </div>
        </div>
        <div className="flex gap-4 px-2">
          <Image src={person} alt="" width={40} />
          <div>
            <h4 className="text-[1.075rem] font-[500] text-[#083545] overflow-hidden whitespace-nowrap font-Archivo leading-[20px] text-ellipsis">
              Modified a category
            </h4>
            <p className="text-[0.95rem] font-[500]  opacity-50 font-Archivo leading-[20px] text-[rgba(0, 0, 0, 0.4)]">
              Today, 11:59 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
