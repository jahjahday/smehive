import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface HeaderProps {
  sme: string;
  title: string;
  opt1: string;
  opt2: string;
  opt3: string;
  opt4: string;
}

export const Header = ({ sme, title, opt1, opt2, opt3, opt4 }: HeaderProps) => {
  return (
    <div className="mt-[4em]">
      <nav>
        <ul className="flex gap-3 text-[rgba(3, 20, 19, 0.70)] text-[12px] font-[Archivo] uppercase">
          <Link href="/">
            <li className="cursor-pointer">Home</li>
          </Link>
          <FaArrowRight className="mt-[2px] uppercase" />
          <li> {sme} </li>
        </ul>
      </nav>
      <div className="text-[#072025] text-[40px] font-Archivo font-[600] mt-3 leading-[32px] tracking-[-0.4px]">
        <h1>{title}</h1>
      </div>
      <div className="flex gap-3 mt-10 ">
        <select className="bg-[#fafafa] p-2 border-[1px] border-solid rounded-[48px] border-[#dbdee0] text-[14px] font-Archivo font-[600] leading-[20px]">
          <option>{opt1}</option>
          <option>{opt1}</option>
          <option>{opt1}</option>
          <option>{opt1}</option>
        </select>
        <select className="bg-[#fafafa] p-2 border-[1px] border-solid rounded-[48px] border-[#dbdee0] text-[14px] font-Archivo font-[600] leading-[20px]">
          <option>{opt2}</option>
          <option>{opt2}</option>
          <option>{opt2}</option>
          <option>{opt2}</option>
        </select>
        <select className="bg-[#fafafa] p-2 border-[1px] border-solid rounded-[48px] border-[#dbdee0] text-[14px] font-Archivo font-[600] leading-[20px]">
          <option>{opt3}</option>
          <option>{opt3}</option>
          <option>{opt3}</option>
          <option>{opt3}</option>
        </select>
        <select className="bg-[#fafafa] p-2 border-[1px] border-solid rounded-[48px] border-[#dbdee0] text-[14px] font-Archivo font-[600] leading-[20px]">
          <option>{opt4}</option>
          <option>{opt4}</option>
          <option>{opt4}</option>
          <option>{opt4}</option>
        </select>
      </div>
    </div>
  );
};
