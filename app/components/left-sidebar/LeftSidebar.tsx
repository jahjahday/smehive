import Image from "next/image";
import icon1 from "../../assets/svg/Approval.svg";
import icon2 from "../../assets/svg/Group 1000003906.svg";
import icon3 from "../../assets/svg/Group (1).svg";
import icon4 from "../../assets/svg/Icon (1).svg";
import icon5 from "../../assets/svg/Group.svg";
import icon6 from "../../assets/svg/Icon.svg";

const icons = [icon2, icon5, icon1, icon3, icon6, icon4];

export const LeftSidebar = () => {
  return (
    <nav className="flex flex-col gap-[60px] mt-6 fixed top-10 right-0 left-10">
      {icons.map((icon, idx) => (
        <Image key={idx} src={icon} alt="" width={18} />
      ))}
    </nav>
  );
};
