import Image from "next/image";
import { Card, RightSidebar } from "../components";
import { Applications } from "../components/applications/Applications";
import { BlogContainer } from "../components";
import { Users } from "../components/users/Users";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between mt-14 ml-[6em] flex-wrap max-lg:ml-4">
      <div className="w-[75%]">
        <h3 className="text-[#031413b3] font-[500] mt-[6|em] text-[1.2rem] font-Archivo">
          Dashboard Overview
        </h3>
        <h1 className="text-[#072025] font-Archivo text-[2.7rem] mt-3 font-[600] leading-[32px] tracking-[-0.4px]">
          Hi, Natasha
        </h1>
        <div className="grid grid-cols-4 max-md:block max-lg:gap-1 max-lg:grid-cols-2 max-lg:w-full max-xl:grid-cols-3 max-xl:w-[55em] max-2xl:grid-cols-3 gap-4 mt-10">
          <Card
            title="All Users"
            number={2200}
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
            <Card title="Enquiries" number={39} percentage="" colors="green" />
          </Link>
          <Link href="./stats">
            <div className="flex h-[9em] mt-4 border-[1px] border-solid justify-center items-center lg:gap-[30px] rounded-[80px] border-[#dbdee0]  max-xl:w-[17em] max-sm:w-[20em]">
              <button className="w-[40%] text-[#1b3938] text-[1.2rem] font-Archivo font-[500] leading-20px">
                View all activities
              </button>
              <Image src="/svg/buttonarrow.svg" alt="" width={30} height={30} />
            </div>
          </Link>
        </div>
        <div>
          <Applications />
          <Users />
          <BlogContainer />
        </div>
      </div>
      <div className="lg:mt-[-3em]">
        <RightSidebar />
      </div>
    </div>
  );
}
