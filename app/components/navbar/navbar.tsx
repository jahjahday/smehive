import Image from "next/image";
import logo from "../../assets/svg/Layer_1-2.svg";
import { FaRegBell, FaSearch } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="relative">
      <div className="lg:flex lg:absolute gap-[41em] top-[3em] left-[8em]">
        <div className="flex gap-2 ">
          <h2 className="text-[#083545] text-[24px] font-[600] tracking-[-1.08px]">
            smehive
          </h2>
          <Image src={logo} alt="" className="w-[19.189px] h-[24.853px] mt-1" />
        </div>
        <div className="flex gap-7">
          {/* <input /> */}
          <FaSearch color="#031413" className="opacity-30 w-[24px] h-[34px]" />
          <FaRegBell color="#031413" className="opacity-30 w-[24px] h-[34px]" />
        </div>
      </div>
    </div>
  );
};
