import Link from "next/link";
import Image from "next/image";
import logo from "../../app/assets/svg/Layer_1-2.svg";
import search from "../../app/assets/svg/🦆 icon _search normal 1_ (1).svg"
import bell from "../../app/assets/svg/Group 1000004466.svg"
import girl from "../../app/assets/img/she-loves-her-work-beautiful-african-woman-sittin-2021-12-09-15-28-03-utc 1.png";
import { register } from "@/app/services";

export const Naving = async () => {
  //  const res = await fetch("https://jsonplaceholder.typicode.com/users")

  //  if (!res.ok) {
  //   throw new Error
  //  }
  //  return res.json()
  // const data = await register("https://jsonplaceholder.typicode.com/users") 

  return (
      <div className="flex justify-between min-w-[98%] mt-12 max-lg:w-[]">
            <Link href="/">
          <section className="flex gap-3">
            <h2 className="text-[#083545] text-[1.7rem] font-[600] tracking-[-1.08px]">
              smehive
            </h2>
            <Image
              src={logo}
              alt=""
              className="w-[19.189px] h-[24.853px] mt-1"
            />
          </section>
            </Link>
          <div className="flex gap-7">
          <div className="flex gap-7">
            <Image src={search} alt="" width={30} height={30} className="w-[20.001x] mt-3 h-[19.999px] opacity-60" />
            <Image src={bell} alt="" width={30} height={30}  className="w-[24px] h-[34px] opacity-60"/>
          </div>
        <section className="flex gap-10 ">
          <div className=" max-md:hidden text-[1.8rem] mx-3 opacity-10 bg-[rgba(121, 122, 122, 0.40)]">
            |
          </div>
          <div className="flex gap-4">
            <div>
            <h2 className="#0c323e text-[1.2rem] font-Archivo leading-[20px]">
              Natasha Abubakar
            </h2>
            <p className="text-[rgba(3, 20, 19, 0.60] text-[.80rem] leading-[16px] font-Archivo leading-16px">
              natasiabunny@gmail.com
            </p>
            </div>
          <Image src={girl} alt="" width={50} className="rounded-3xl h-10" />
          </div>
        </section>
          </div>
      </div>
  );
};
