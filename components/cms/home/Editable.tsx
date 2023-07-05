"use client";

import Image from "next/image";

const tabs = [
  { id: 1, name: "Hero Banner" },
  { id: 2, name: "Main Categories" },
  { id: 3, name: "Our Partner" },
  { id: 4, name: "Our Commuinity" },
  { id: 5, name: "Empower MSEM" },
  { id: 6, name: "Partner & Community" },
  { id: 7, name: "Footer" },
];

export const Editable = () => {
  const sortable = tabs.map((item) => (
    <div
      key={item.id}
      className="flex justify-between cursor-pointer border-b text-[#083545] text-[1rem] font-Archivo font-[400] leading-[28px] py-5"
    >
      {item.name}
      <Image src="/svg/vectordown.svg" alt="" width={10} height={10} />
    </div>
  ));

  return (
    <div>
      <h2 className="text-[#083545] text-[1.2rem] font-[600] leading-[28px] mb-6">
        Home has 8 editable Sections
      </h2>
      <div className="border-b mb-8">
        <div className="mb-10">{sortable}</div>
      </div>
      <div className="flex gap-4 text-[1rem] font-Archivo font-[500] leading-[20px]">
        <button className="text-[#829399] py-3 px-6 border rounded-[30px]">
          Cancel
        </button>
        <button className="bg-[#9cb5be]  py-3 px-8 rounded-[30px]  text-[#fff] border">
          Publish
        </button>
      </div>
    </div>
  );
};
