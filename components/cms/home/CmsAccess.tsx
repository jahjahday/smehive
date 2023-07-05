import Image from "next/image";

export const CmsAccess = () => {
  return (
    <div className=" flex-1 mt-[1.5em] bg-[#0000001a] rounded-lg p-4 ">
      <div className="bg-[url('/img/herobg.png')] bg-center bg-cover h-[35em] rounded-2xl p-[3em] ">
        <h1 className="text-[2.4rem] max-w-[28%] font-Archivo mt-[2em]  font-[700] leading-[35px] tracking-[-1.411px] text-[#EBFFFB] ">
          Access Opportunities on Everything SME!
        </h1>
        <p className="text-[#ffffffeb] text-[.988rem] font-EuclidCircular-A font-[400] leading-[130%] tracking-[0.126px] mt-10 w-[30%]">
          Empowering MSMEs with access to funding, information, infrastructure,
          and new markets
        </p>
        <div className="flex items-center custom-background rounded-[40px] mt-[3em] p-3 w-[18%] gap-4">
        <button className=" text-[1.1rem] mx-auto font-[600]">Get Started</button>
        <Image src="/svg/buttonarrow.svg" alt="" width={22} height={1} className="" />
        </div>
      </div>
      <div className="mt-10 mx-auto">
        <h1 className="text-[#103c4c] mx-auto w-[29%] text-center text-[2.4rem] font-Archivo font-[700] leading-[94%] tracking-[-1.588px] ">
          Take your business where it needs to go
        </h1>
        <p className="text-[#969090] w-[37%] mx-auto text-center mt-5 text-[0.988rem] font-[Euclid Circular A] font-[400] leading-[17px]">
          Partnered with industry associations and government agencies to
          provide MSMEs with a supportive environment for growth.
        </p>
      </div>
    </div>
  );
};
