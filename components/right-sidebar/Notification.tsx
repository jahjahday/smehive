import Image from "next/image";
import user from "../../app/assets/svg/User.svg";
import pending from "../../app/assets/svg/Broadcast.svg";
import person from "../../app/assets/svg/BugBeetle.svg";

export const Notification = () => {
  return (
    <div className="bg-white rounded-[20px] p-3 pb-5">
      <ul className="flex justify-between">
        <li className="text-[#1b3938] text-[1.2rem] font-Archivo font-[600] leading-[24px]">
          Notifications
        </li>
        <li className="text-[0.95rem] font-Archivo  leading-[16px] tracking-[0.4px] mt-1 opacity-60">
          See all
        </li>
      </ul>
      <div className="mt-8 grid gap-4">
        <div className="flex gap-3 px-2">
          <Image src={person} alt="" width={20} className="mt-[-17px]" />
          <div>
            <h4 className="text-[0.975rem] w-[230] overflow-hidden whitespace-nowrap font-Archivo leading-[20px] text-ellipsis">
              You have a pending approval
            </h4>
            <p className="text-[0.85rem] opacity-50 font-Archivo leading-[20px] text-[rgba(0, 0, 0, 0.4)]">
              Just now
            </p>
          </div>
        </div>
        <div className="flex gap-3 px-2">
          <Image src={user} alt="" width={15} className="mt-[-17px]" />
          <div>
            <h4 className="text-[0.975rem] overflow-hidden  w-[230px] truncate whitespace-nowrap font-Archivo leading-[20px] text-ellipsis">
              New SME registered
            </h4>
            <p className="text-[0.85rem] opacity-50 font-Archivo leading-[20px] text-[rgba(0, 0, 0, 0.4)]">
              59 minutes ago
            </p>
          </div>
        </div>
        <div className="flex  gap-3 px-2">
          <Image src={person} alt="" width={15} className="mt-[-17px]" />
          <div className="truncate">
            <h4 className="text-[0.975rem]  w-[230px] truncate whitespace-nowrap font-Archivo leading-[20px]">
              You have a request that needs to be fixed.
            </h4>
            <p className="text-[0.85rem] opacity-50 font-Archivo leading-[20px] text-[rgba(0, 0, 0, 0.4)]">
              12 hours ago
            </p>
          </div>
        </div>
        <div className="flex  gap-3 px-2">
          <Image src={pending} alt="" width={15} className="mt-[-17px]" />
          <div>
            <h4 className="text-[.95rem]  w-[230px] truncate overflow-hidden whitespace-nowrap font-Archivo leading-[20px] text-ellipsis">
              Andi Lane subscribed to you
            </h4>
            <p className="text-[0.85rem] opacity-50 font-Archivo leading-[20px] text-[rgba(0, 0, 0, 0.4)]">
              Today, 11:59 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
