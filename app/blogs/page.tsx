"use client";

import { useState } from "react";
import Link from "next/link";

import { FaSearch, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/svg/🦆 icon _search normal 1_.svg";
import { Table } from "@/components/table/table";
import { Articles } from "./Articles";
import { Posts } from "./Posts";
import { Authors } from "./Authors";

const tabs = [
  { id: 1, name: "ARTICLES (12)" },
  { id: 2, name: "POSTS" },
  { id: 3, name: "AUTHORS" },
];

const page = () => {
  const [active, setActive] = useState(1);

  const serviceTabs = tabs.map((item, i) => (
    <div key={item.id}>
      <span
        className={`${
          item.id === active
            ? " cursor-pointer border bg-[#0C323E] text-[#fff] rounded-[60px] border-[#0c648d] px-[2rem] py-[14px] font-[600] text-[1.2rem]"
            : "cursor-pointer py-3 px-[30px] rounded-[60px] border-[#b3bdc0] text-[#0c323e] font-[500] border text-[1.3rem]"
        }`}
        onClick={() => handleSetActive(item.id)}
      >
        {item.name}
      </span>
    </div>
  ));

  const handleSetActive = (id: number) => {
    setActive(id);
  };

  return (
    <div className=" mt-[2em]">
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
      <section className="flex justify-between">
        <div></div>
        <div className="border flex justify-center mt-7 w-[40px] h-[40px] rounded-[40px]">
          <Image src={logo} alt="" width={15} className="" />
        </div>
      </section>
      <div className="flex gap-10">{serviceTabs}</div>

      { active === 1 && <Articles /> }
      {active === 2 && <Posts />}
      { active === 3 && <Authors /> }
    </div>
  );
};

export default page;
