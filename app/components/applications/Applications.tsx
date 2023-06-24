import { Body } from "./Body";
import { Nav } from "./Nav";
import { FaArrowRight } from "react-icons/fa";
// import { Chart } from "./Chart";

export const Applications = () => {
  return (
    <div className="flex justify-between mt-[48px] gap-6">
      <div className="border-[1px] border-solid rounded-[16px] w-full h-[20em]">
        <Nav />
        <div>
          {/* <Chart /> */}
          <div className="flex justify-between">
            <h1>Chart</h1>
            <Body />
          </div>
          <div className="border-b-[1px] mt-4 border-[#f4f4f4] w-full"></div>
          <div className="flex mt-4 gap-2">
            <h3 className="text-[#083545] text-[14px] font-Archivo font-[500] leading-[20px] tracking-[0.28px]">
              See all Request
            </h3>
            <FaArrowRight size={14} color="#083545" className="mt-[4px]" />
          </div>
        </div>
      </div>
      <div className="border-[1px] border-solid rounded-[16px] w-full h-[20em]">
        <Nav />
        <div>
          {/* <Chart /> */}
          <div className="flex justify-between">
            <h1>Chart</h1>
            <Body />
          </div>
          <div className="border-b-[1px] mt-4 border-[#f4f4f4] w-full"></div>
          <div className="flex mt-4 gap-2">
            <h3 className="text-[#083545] text-[14px] font-Archivo font-[500] leading-[20px] tracking-[0.28px]">
              See all Request
            </h3>
            <FaArrowRight size={14} color="#083545" className="mt-[4px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
