"use client"

import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {

  return (
    <>
      <div className="mt-[2em]">
        <ul className="flex gap-3 text-[rgba(3, 20, 19, 0.70)] text-[12px] font-[Archivo] uppercase">
          <Link href="/">
            <li className="cursor-pointer">Home</li>
          </Link>
          <FaArrowRight className="mt-[2px] uppercase" />
          <li> stats </li>
        </ul>
        <div className="text-[#072025] text-[40px] font-Archivo font-[600] mt-5 leading-[32px] tracking-[-0.4px]">
          <h1>Stats and Activities</h1>
        </div>
      </div>
      <div className="relative flex gap-4 border-b-[1px] py-3">
      </div>
      <nav className="mt-[3em]">
        <ul className="flex gap-[2.2em] text-[#072025] text-[1.3rem] font-Archivo font-[] leading-[28.91px]">
        <Link href="/stats/overall">
        <li>Overall Stats</li>
        </Link>
        <Link href="../stats/request">
        <li className="">Requests</li>
        </Link>
        <Link href="../stats/event">
        <li className="">Events</li>
        </Link>
        <Link href="../stats/articles">
        <li className="cursor-pointer">Articles</li>
        </Link>
        <Link href="../stats/comments">
        <li className="cursor-pointer">Comments</li>
        </Link>
        <Link href="../stats/feedback">
        <li className="cursor-pointer">Feedback</li>
        </Link>
        <li className="cursor-pointer">Community Posts</li>
        </ul>
      </nav>

      <div className="border-b-[1px] my-6 border-[#DFDFDF] border-solid"></div>
      
    </>
  );
};

export default Navbar;
