import Image from "next/image";
import { Card } from "./components";
import { Applications } from "./components/applications/Applications";
import { BlogContainer } from "./components";
import { Navbar } from "./components/navbar/navbar";
import { Users } from "./components/users/Users";
import arrow from "./assets/svg/Button arrow.svg";

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className=" ml-[3em]">
        <Navbar />
        <h3 className="text-[rgba(3, 20, 19, 0.70)] mt-[60px] text-[16px] font-Archivo">
          Dashboard Overview
        </h3>
        <h1 className="text-[#072025] text-[40px] mt-3 font-[600] leading-[32px] tracking-[-0.4px]">
          Hi, Natasha
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-6">
          <Card
            title="All Users"
            number={2000}
            percentage=""
            colors="primary"
          />
          <Card
            title="All Users"
            number={2000}
            percentage="+11%"
            colors="primary"
          />
          <Card
            title="All Users"
            number={2000}
            percentage="+11%"
            colors="primary"
          />

          <Card
            title="All Users"
            number={2000}
            percentage=""
            colors="primary"
          />
          <Card title="All Users" number={2000} percentage="" colors="danger" />
          <Card
            title="All Users"
            number={2000}
            percentage=""
            colors="secondary"
          />
          <Card
            title="All Users"
            number={2000}
            percentage=""
            colors="primary"
          />
          <button className="flex h-[115px] mt-4 border-[1px] border-solid justify-center items-center gap-[30px] rounded-[70px] border-[#dbdee0]">
            <h4 className="w-[50%] text-[1b3938] text-[16px] font-Archivo font-[500] leading-20px">
              View all activities
            </h4>
            <Image src={arrow} alt="" width={20} />
          </button>
        </div>
        <div>
          <Applications />
          <Users />
          <BlogContainer />
        </div>
      </div>
    </div>
  );
}
