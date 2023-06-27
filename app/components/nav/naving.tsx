import Image from "next/image";
import logo from "../../assets/svg/Layer_1-2.svg";
import { FaRegBell, FaSearch } from "react-icons/fa";
import girl from "../../assets/img/she-loves-her-work-beautiful-african-woman-sittin-2021-12-09-15-28-03-utc 1.png";

export const Naving = () => {
  return (
    <div className="relative left-[6em] top-[2.5em]">
      <div className="flex absolute">
        <div className="flex lg:gap-[44em]">
          <div className="flex gap-3">
            <h2 className="text-[#083545] text-[24px] font-[600] tracking-[-1.08px]">
              smehive
            </h2>
            <Image
              src={logo}
              alt=""
              className="w-[19.189px] h-[24.853px] mt-1"
            />
          </div>
          <div className="flex left-[5em] gap-7">
            {/* <input /> */}
            <FaSearch
              color="#031413"
              className="opacity-30 w-[24px] h-[34px]"
            />
            <FaRegBell
              color="#031413"
              className="opacity-30 w-[24px] h-[34px]"
            />
          </div>
        </div>
        <div className="flex gap-[1em]">
          <div className=" text-[1.8rem] mx-3 opacity-10 bg-[rgba(121, 122, 122, 0.40)]">
            |
          </div>
          <div className="">
            <h2 className="#0c323e text-[17px] font-Archivo leading-[20px]">
              Natasha Abubaka
            </h2>
            <p className="text-[rgba(3, 20, 19, 0.60] text-[12px] leading-[16px] font-Archivo leading-16px">
              natasiabunny@gmail.com
            </p>
          </div>
          <Image src={girl} alt="" width={50} className="rounded-3xl h-10" />
        </div>
      </div>
    </div>
  );
};
