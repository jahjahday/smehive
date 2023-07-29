"use client";

import { useState } from "react";
import Image from "next/image";
import { CmsNav, Editable } from "@/components";
import { CmsGallery } from "@/components/cms/CmsGallery";

const page = () => {
  const [active, setActive] = useState(true);
  const [activeNav, setActiveNav] = useState(1);

  const clickHandler = () => {
    setActive(false);
  };

  const tabSwitcher = (id: number) => {
    setActiveNav(id);
  };

  const tabs = [
    { id: 1, name: "All categories" },
    { id: 2, name: "Finance" },
    { id: 3, name: "Market Place" },
    { id: 4, name: "Infrastructure Technology" },
    { id: 5, name: "Others" },
    { id: 6, name: "Information & Resources" },
  ];
  const tabsBar = tabs.map((tab) => (
    <div key={tab.id}>
      <span
        className={`${
          tab.id === activeNav
            ? "cursor-pointer border rounded-full ease-in duration-300 px-6 py-3 bg-[#0c323e] font-[700] text-[#f2e4d8]"
            : " cursor-pointer border px-6 py-3 rounded-full  ease-in duration-300 text-[#0c323e] font-[400]"
        }`}
        onClick={() => tabSwitcher(tab.id)}
      >
        {tab.name}
      </span>
    </div>
  ));

  return (
    <div className="mt-8">
      <CmsNav title="Our Gallery" />
      <div className="flex mx-auto justify-between w-[90%] gap-20 mt-8">
        <section className="bg-[#fafafa] p-6">
          <main className="bg-[url('/img/herobg.png')] h-[18em] bg-center w-[68em] mx-auto bg-cover rounded-2xl ">
            <div className="text-[#e7e7e7] pt-20 pl-20 ">
              <h1 className="font-Archivo text-[2.25rem] font-[700] leading-[35px] tracking-[-1.408px]">
                Our Gallery
              </h1>
              <p className="text-[0.9rem] mt-3 leading-[130%] tracking-[0.12] w-[25%]">
                This project is created in order to help business
              </p>
            </div>
          </main>
          <div
            className=" flex justify-center relative mt-[-1.8em]"
            onClick={clickHandler}
          >
            {active ? (
              <Image
                src="/svg/searchIcon.svg"
                alt=""
                width={17}
                height={10}
                className="absolute left-[8em] top-5 opacity-30"
              />
            ) : null}
            <input
              placeholder="Search by..."
              className=" w-[55em] h-[3.5em] text-[#113c4c] font-[Euclid circular A] text-[1rem] font-[500] tracking-[-0.125px] rounded-3xl focus:outline-none pl-14"
            />
          </div>
          <div className="mx-auto w-[80%] ">
            <div className="flex justify-between gap-10 mt-[4em]">
              <p className="text-[#103c4c] font-Archivo text-[2rem] w-[75%] font-[700] leading-[94%] tracking-[-1.4px]">
                Assessing current market conditions and business{" "}
                <span className="text-[#e3b794]"> growth prospects </span> of
                Nigerian SMEs
              </p>
              <p className="text-[#829399] font-[Euclid Circular A] w-[80%] text-[0.875rem] font-[400] leading-[17px]">
                At SMEHive This is the second in our series of surveys that
                provide insights into a range of issues concerning MSMEs in
                Nigeria, and the challenges impacting business growth,
                particularly financing, taxation issues; and other factors -
                through the eyes of their CEO's. Leverage our range of
                connectivity solutions to unlock opportunities and drive value
                for your customers and your business.
              </p>
            </div>
            <nav className="mt-16 flex text-[.8rem] justify-between">
              {tabsBar}
            </nav>
          </div>
          <CmsGallery />
        </section>
        <Editable number={6} />
      </div>
    </div>
  );
};

export default page;
