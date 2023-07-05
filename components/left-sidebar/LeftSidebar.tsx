"use client"
import { useState } from 'react'
import Image from "next/image";
import { Events } from '../events/events';

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

  const [ active, setActive ] = useState(1);

  const setActiveHandler = (id: number) => {
    setActive(id)
  }

  return (
    <nav className="flex flex-col gap-[60px] mt-6 fixed top-10 ml-16 max-xl:ml-1">
      {icons.map((icon, idx) => (
        <div  onClick={() => setActiveHandler(icon.id)} className=' cursor-pointer'>
          <Image key={idx} src={icon.name} alt="" width={18} />
        </div>
      ))}
      {/* { active === 1 && "" }
      { active === 4 && <Events /> }
      { active === 1 && "" }
      { active === 1 && "" } */}
    </nav>
  );
};
