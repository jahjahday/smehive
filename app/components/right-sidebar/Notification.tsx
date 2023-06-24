import Image from "next/image";
import user from "../../assets/svg/User.svg";
import pending from "../../assets/svg/Broadcast.svg";
import person from "../../assets/svg/BugBeetle.svg";

export const Notification = () => {
  return (
    <div className="bg-white rounded-[20px] p-3">
      <ul className="flex justify-between">
        <li className="text-[#1b3938] text-[16px] font-Archivo font-[600] leading-[24px]">
          Notifications
        </li>
        <li className="text-[12px] font-Archivo leading-[16px] tracking-[0.4px] mt-1 opacity-60">
          See all
        </li>
      </ul>
      <div className="mt-4 grid gap-4">
        <div className="flex gap-4 px-2">
          <Image src={person} alt="" width={15} />
          <div>
            <h4 className="text-[14px] overflow-hidden whitespace-nowrap font-Archivo leading-[20px] text-ellipsis">
              You have a pending approval
            </h4>
            <p className="text-[12px] opacity-50 font-Archivo leading-[20px] text-[rgba(0, 0, 0, 0.4)]">
              Just now
            </p>
          </div>
        </div>
        <div className="flex gap-4 px-2">
          <Image src={user} alt="" width={15} />
          <div>
            <h4 className="text-[14px] overflow-hidden whitespace-nowrap font-Archivo leading-[20px] text-ellipsis">
              You have a pending approval
            </h4>
            <p className="text-[12px] opacity-50 font-Archivo leading-[20px] text-[rgba(0, 0, 0, 0.4)]">
              Just now
            </p>
          </div>
        </div>
        <div className="flex  gap-4 px-2">
          <Image src={person} alt="" width={15} />
          <div>
            <h4 className="text-[14px] overflow-hidden whitespace-nowrap font-Archivo leading-[20px] text-ellipsis">
              You have a pending approval
            </h4>
            <p className="text-[12px] opacity-50 font-Archivo leading-[20px] text-[rgba(0, 0, 0, 0.4)]">
              Just now
            </p>
          </div>
        </div>
        <div className="flex  gap-4 px-2">
          <Image src={pending} alt="" width={15} />
          <div>
            <h4 className="text-[14px] overflow-hidden whitespace-nowrap font-Archivo leading-[20px] text-ellipsis">
              You have a pending approval
            </h4>
            <p className="text-[12px] opacity-50 font-Archivo leading-[20px] text-[rgba(0, 0, 0, 0.4)]">
              Just now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
