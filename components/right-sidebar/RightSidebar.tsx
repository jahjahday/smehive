import { Activities } from "./Activities";
import { Notification } from "./Notification";
// import { Profile } from "./Profile";

export const RightSidebar = () => {
  return (
    <div className="bg-[#FBF7F4] border-[#F0F1F2] border-[14px] border-solid rounded-[20px] w-[21em] max-lg:w-[35em] mt-[5em]">
      <Notification />
      <Activities />
    </div>
  );
};
