import Image from "next/image";
import { Card, RightSidebar } from "./components";
import { Applications } from "./components/applications/Applications";
import { BlogContainer } from "./components";
// import { Navbar } from "./components/navbar/navbar";
import { Users } from "./components/users/Users";
import arrow from "./assets/svg/Button arrow.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className=" ml-[5em] mt-[6em]">
        {/* <Navbar /> */}
        <h3 className="text-[rgba(3, 20, 19, 0.70)] mt-[6|em] text-[16px] font-Archivo">
          Dashboard Overview
        </h3>
        <h1 className="text-[#072025] font-Archivo text-[40px] mt-3 font-[600] leading-[32px] tracking-[-0.4px]">
          Hi, Natasha
        </h1>
        <div className=" flex relative gap-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-14">
            <Card
              title="All Users"
              number={2000}
              percentage=""
              colors="primary"
            />
            <Link href="./partners">
              <Card
                title="All Partners"
                number={1800}
                percentage="+11%"
                colors="primary"
              />
            </Link>
            <Link href="./partners">
              <Card
                title="All SME's"
                number={420}
                percentage="+11%"
                colors="primary"
              />
            </Link>
            <Link href="./partners">
              <Card
                title="All Products"
                number={190}
                percentage=""
                colors="primary"
              />
            </Link>
            <Link href="./events">
              <Card
                title="Active Events"
                number={18}
                percentage=""
                colors="danger"
              />
            </Link>
            <Link href="./feedback">
              <Card
                title="Feedbacks"
                number={39}
                percentage=""
                colors="secondary"
              />
            </Link>
            <Link href="./enquire">
              <Card
                title="Enquiries"
                number={39}
                percentage=""
                colors="primary"
              />
            </Link>
            <Link href="./stats/overall">
              <div className=" flex h-[115px] mt-4 border-[1px] border-solid justify-center items-center lg:gap-[30px] rounded-[80px] border-[#dbdee0]">
                <button className="w-[50%] text-[1b3938] text-[16px] font-Archivo font-[500] leading-20px">
                  View all activities
                </button>
                <Image src={arrow} alt="" width={20} />
              </div>
            </Link>
          </div>
          <div className="mt-[-90px] absolute left-[56.5em]">
            <RightSidebar />
          </div>
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
