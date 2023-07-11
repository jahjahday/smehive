"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Articles } from "@/components";
import { Feedback } from "@/components";
import { Overall } from "../../components/overall/Overall";
import { Request } from "../../components/request/Request";
import { Events } from "../../components/events/events";
import { Comments } from "../../components/comments/Comments";

const tabs = [
  { id: 1, name: "Overall Stats" },
  { id: 2, name: "Requests" },
  { id: 3, name: "Events" },
  { id: 4, name: "Articles" },
  { id: 5, name: "Feedback" },
  { id: 6, name: "Comments" },
  { id: 7, name: "Community Posts" },
];

const page = () => {
  const [active, setActive] = useState(1);

  const servicesTabs = tabs.map((item) => (
    <div key={item.id}>
      <span
        className={`${
          item.id === active
            ? " cursor-pointer border-b-[3px] border-[#0c648d] ease-in duration-200 px-[2rem] py-[14px] font-[600] text-[1.2rem] text-[#0e2829]"
            : "cursor-pointer px-[2rem] text-[1.3rem] ease-out duration-200 text-[#9aadb2]"
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
    <div className="w-[88%] mx-auto">
      <div className="mt-[3.5em] ">
        <ul className="flex gap-3 text-[rgba(3, 20, 19, 0.70)] text-[12px] font-[Archivo] uppercase">
          <Link href="/">
            <li className="cursor-pointer text-[.95rem] font-Archivo font-[400] text-[#031413] opacity-70">
              Home
            </li>
          </Link>
          <Image
            src="/svg/forwardRight.svg"
            alt=""
            width={8}
            height={1}
            className=""
          />
          <li className="cursor-pointer text-[.95rem] font-Archivo font-[400] text-[#031413] opacity-70">
            {" "}
            stats{" "}
          </li>
        </ul>
        <div className="text-[#072025] text-[40px] font-Archivo font-[600] mt-5 leading-[32px] tracking-[-0.4px]">
          <h1>Stats and Activities</h1>
        </div>
      </div>
      <div className="mt-[3em]">
        <div className="relative flex gap-4 border-b-[1px] py-3">
          {servicesTabs}
        </div>
        <div className="mt-8">
          {active === 1 && <Overall />}
          {active === 2 && <Request />}
          {active === 3 && <Events />}
          {active === 4 && <Articles />}
          {active === 5 && <Feedback />}
          {active === 6 && <Comments />}
        </div>
      </div>
    </div>
  );
};

export default page;
