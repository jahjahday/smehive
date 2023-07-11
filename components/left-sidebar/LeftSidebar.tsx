"use client";
import { useState } from "react";
import Image from "next/image";
import { Events } from "../events/events";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import icon1 from "../../app/assets/svg/Approval.svg";
import icon2 from "../../app/assets/svg/Group 1000003906.svg";
import icon3 from "../../app/assets/svg/Group (1).svg";
import icon4 from "../../app/assets/svg/Icon (1).svg";
import icon5 from "../../app/assets/svg/Group.svg";
import icon6 from "../../app/assets/svg/Icon.svg";

const icons = [
  { id: 1, name: icon2 },
  { id: 2, name: icon5 },
  { id: 3, name: icon1 },
  { id: 4, name: icon3 },
  { id: 5, name: icon6 },
  { id: 6, name: icon4 },
];

export const LeftSidebar = () => {
  const [active, setActive] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const setActiveHandler = (id: number) => {
    setActive(id);
  };

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="flex flex-col gap-[70px] mt-6 fixed top-10 ml-16 max-xl:ml-1 ">
        {icons.map((icon, idx) => (
          <div
            onClick={() => setActiveHandler(icon.id)}
            className=" cursor-pointer max-md:hidden "
          >
            <Image key={idx} src={icon.name} alt="" width={18} />
          </div>
        ))}
        {/* { active === 1 && "" }
      { active === 4 && <Events /> }
      { active === 1 && "" }
    { active === 1 && "" } */}
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-blue-100 p-10 ease-in duration-500"
              : "fixed left-[100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="flex flex-col gap-[60px] mt-6 fixed top-10 ml-16 max-xl:ml-1">
            {icons.map((icon, idx) => (
              <div
                // onClick={() => setActiveHandler(icon.id)}
                onClick={() => setMenuOpen(false)}
                className=" cursor-pointer "
              >
                <Image key={idx} src={icon.name} alt="" width={18} />
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};
