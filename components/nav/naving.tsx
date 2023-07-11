import Link from "next/link";
import Image from "next/image";

export const Naving = async () => {
  return (
    <div className="flex justify-between relative left-8 max-[412px]:block max-w-[92%] mx-auto mt-12">
      <Link href="/">
        <section className="flex gap-3 ">
          <h2 className="text-[#083545] text-[1.7rem] font-[600] max-[412px]:ml-[7em] tracking-[-1.08px]">
            smehive
          </h2>
          <Image
            src="/svg/logo.svg"
            alt=""
            width={10}
            height={10}
            className="w-[21.189px] h-[26.853px] mt-2"
          />
        </section>
      </Link>
      <div className="flex gap-7 max-[412px]:justify-between">
        <div className="flex gap-7">
          <Image
            src="/svg/searchIcon.svg"
            alt=""
            width={30}
            height={30}
            className="w-[20.001x] mt-3 h-[19.999px] cursor-pointer opacity-60"
          />
          <Image
            src="/svg/bellIcon.svg"
            alt=""
            width={30}
            height={30}
            className="w-[24px] h-[34px] opacity-60 cursor-pointer"
          />
        </div>
        <section className="flex gap-10 ">
          <div className=" max-md:hidden text-[1.8rem] mx-3 opacity-10 bg-[rgba(121, 122, 122, 0.40)]">
            |
          </div>
          <div className="flex gap-4 cursor-pointer">
            <div className="cursor-pointer">
              <h2 className="text-[#0c323e] text-[1.2rem] font-[500] font-Archivo leading-[20px]">
                Natasha Abubakar
              </h2>
              <p className="text-[#03141399] font-[500] text-[.80rem] leading-[16px] font-Archivo leading-16px">
                natasiabunny@gmail.com
              </p>
            </div>
            <Image
              src="/img/girl.png"
              alt=""
              width={50}
              height={50}
              className="rounded-3xl h-10"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
