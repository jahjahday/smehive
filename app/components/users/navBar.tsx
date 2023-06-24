// import { useState } from "react";

export const NavBar = () => {
  // const [active, setActive] = useState({
  //   backgroundColor: "#1B3938",
  //   color: "#fff"
  // })

  return (
    <nav className="flex justify-between p-8 border-[1px] h-[25em] border-solid border-[#DBDEE0] mt-8 rounded-[12px]">
      <ul className="flex gap-6">
        <li className="text-[#1b3938] text-[14px] font-Archivo font-[500] leading-[20px]">
          Total Users
        </li>
        <li className="text-[14px] text-[#91a3a5] leading-[20px] font-[Archivo]">
          Total Users
        </li>
        <li className="text-[14px] text-[#91a3a5] leading-[20px] font-[Archivo]">
          Total Users
        </li>
        <li className="text-[14px] text-[#91a3a5] leading-[20px] font-[Archivo]">
          Total Users
        </li>
      </ul>
      {/* <ul className="flex gap-6">
        <button>Monthly</button>
        <button>Annual</button>
      </ul> */}
    </nav>
  );
};
