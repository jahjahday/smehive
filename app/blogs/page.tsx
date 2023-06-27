import Link from "next/link";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/svg/🦆 icon _search normal 1_.svg";

const page = () => {
  return (
    <div className=" ml-[6em] mt-[8em]">
      <ul className="flex gap-3 text-[rgba(3, 20, 19, 0.70)] text-[12px] font-Archivo">
        <Link href="/">
          <li>HOME</li>
        </Link>
        <FaArrowRight className="" />
        <li>BLOGS</li>
      </ul>
      <h1 className="text-[40px] text-[#072025] mt-4 font-Archivo font-[600] leading-[32px] tracking-[-0.4px]">
        Blogs
      </h1>
      <div className="flex">
        <ul className="uppercase flex gap-4 text-[] mt-8 text-[14px] font-Archivo font-[500] tracking-[-0.28px]">
          <li className="border-[1px] w-[10em] flex justify-center border-solid rounded-[60px] border-[#b3bdc0] px-3 py-3">
            Articles (12)
          </li>
          <li className="border-[1px]  w-[7em] flex justify-center border-solid rounded-[60px] border-[#b3bdc0] px-3 py-3">
            Posts
          </li>
          <li className="border-[1px]  w-[8em] flex justify-center border-solid rounded-[60px] border-[#b3bdc0] px-3 py-3">
            Authors
          </li>
          <FaSearch size={35} />
        </ul>
        <div className="border-[1px] flex justify-center mt-7 ml-[33em] w-[40px] h-[40px] rounded-[40px] border-solid">
          <Image src={logo} alt="" width={15} className="" />
        </div>
      </div>
    </div>
  );
};

export default page;
