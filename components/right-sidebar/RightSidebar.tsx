import { Activities } from "./Activities";
import { Notification } from "./Notification";

export const RightSidebar = () => {
  return (
    <div className="bg-[#FBF7F4] border-[#F0F1F2] max-[412px]:w-[22em] border-[14px] h-[43em] border-solid rounded-[20px] w-[22em] max-lg:w-[35em] mt-[5em]">
      <Notification />
      <Activities />
    </div>
  );
};
