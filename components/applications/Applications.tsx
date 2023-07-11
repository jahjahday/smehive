"use client";

import Link from "next/link";
import { Chart } from "../charts/Chart";
import { Body } from "./Body";
import { Nav } from "./Nav";
import { FaArrowRight } from "react-icons/fa";

export const Applications = () => {
  return (
    <div className="flex justify-between mt-[48px] max-xl:block max-xl:w-[50em] gap-6 max-sm:w-[20em]">
      <div className="border-[1px] border-solid rounded-[16px] w-full h-full px-4">
        <Nav />
        <div>
          <main className="flex gap-10  max-sm:block">
            <div className="h-[40%] w-[40%] mx-auto relative">
              <h1 className="absolute left-[3em] top-[3.2em] text-[1.8rem] font-Archivo font-[700] leading-[2rem]  max-xl:left-[2.2em] max-xl:top-[2.3em] max-sm:left-[1.8em] max-sm:top-[1.8em] max-sm:text-[1.5rem] ">
                98
              </h1>
              <Chart />
            </div>
            <Body />
          </main>
          <div className="border-b-[1px] mt-4 border-[#f4f4f4] w-full"></div>
          <div className="flex mt-4 gap-2 pb-6">
            <Link href="../request">
              <h3 className="text-[#083545] text-[1rem] font-Archivo font-[500] leading-[20px] tracking-[0.28px]">
                See all Request
              </h3>
            </Link>
            <FaArrowRight size={14} color="#083545" className="mt-[4px]" />
          </div>
        </div>
      </div>
      <div className="border-[1px] border-solid rounded-[16px] w-full h-full max-xl:mt-4 px-4">
        <Nav />
        <div>
          <div className="flex  gap-10  max-sm:block">
            <div className="h-[40%] w-[40%] mx-auto relative ">
              <h1 className="absolute left-[2.7em] top-[3.2em] text-[1.8rem] font-Archivo font-[700] leading-[2rem] max-xl:left-[1.7em] max-xl:top-[2.3em] max-sm:left-[1.5em] max-sm:top-[1.8em] max-sm:text-[1.5rem] ">
                120
              </h1>
              <Chart />
            </div>
            <Body />
          </div>
          <div className="border-b-[1px] mt-4 border-[#f4f4f4] w-full"></div>
          <div className="flex mt-4 gap-2 pb-6">
            <h3 className="text-[#083545] text-[1rem] font-Archivo font-[500] leading-[20px] tracking-[0.28px]">
              See all Request
            </h3>
            <FaArrowRight size={14} color="#083545" className="mt-[4px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
