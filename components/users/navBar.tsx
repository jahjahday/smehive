"use client";

import { useState } from "react";

import { AreaChart } from "../charts/AreaChart";

const items = [
  { id: 1, name: "Total Users" },
  { id: 2, name: "Total Partners" },
  { id: 3, name: "Total SME's" },
  { id: 4, name: "Total Requests" },
];

const buttons = [
  { id: 1, name: "Monthly" },
  { id: 2, name: "Annually" },
];

export const NavBar = () => {
  const [active, setActive] = useState(1);

  const [activeButton, setActiveButton] = useState(1);

  const handleSetActive = (id: number) => {
    setActive(id);
  };

  const buttonActive = (id: number) => {
    setActiveButton(id);
  };

  const servicesTabs = items.map((item) => (
    <div key={item.id}>
      <span
        className={`${
          item.id === active
            ? " cursor-pointer px-[1em] py-[1rem] font-[500] text-[#1b3938] font-Archivo"
            : "cursor-pointer px-[1em] font-[400] text-[#91a3a5]"
        }`}
        onClick={() => handleSetActive(item.id)}
      >
        {item.name}
      </span>
    </div>
  ));

  const buttonTabs = buttons.map((button) => (
    <div key={button.id}>
      <button
        className={`${
          button.id === activeButton
            ?  "bg-[#1b3938] font-[400] rounded-[40px] mt-2 px-8 py-3 text-[#fff] text-center text-[.9rem] leading-[9.9px]"
             : " text-[#91a3a5] text-[.9rem] font-[500] mt-2 px-3 py-3 text-center leading-[9.9px]"
        }`}
        onClick={() => setActiveButton(button.id)}
      >
        {" "}
        {button.name}{" "}
      </button>
    </div>
  ));

  return (
    <nav className=" p-8 border-[1px] h-[40em] border-solid border-[#DBDEE0] mt-8 rounded-[12px] max-lg:w-[35em] max-xl:w-[50em]">
      <div className="flex justify-between">

      <ul>
        <li className="flex text-[1rem] font-Archivo leading-[20px]">
          {servicesTabs}
        </li>
      </ul>
      <div className=" flex justify-around w-[14em] h-[3em] bg-[#F4F6F6] rounded-[40px] font-Archivo">

      {buttonTabs}
      </div>
      </div>
      <div className="w-[]">
        <AreaChart />
      </div>
    </nav>
  );
};
