import { Button } from "../button";

export const CmsAccess = () => {
  return (
    <div className=" flex-1 mt-[1.5em] bg-[#0000001a] rounded-lg p-5 ">
      <section className="bg-[url('/img/herobg.png')] bg-center bg-cover h-[30em] rounded-2xl p-[3em] ">
        <h1 className="text-[2.4rem] max-w-[30%] font-Archivo mt-[2em]  font-[700] leading-[35px] tracking-[-1.411px] text-[#EBFFFB] ">
          Access Opportunities on Everything SME!
        </h1>
        <p className="text-[#ffffffeb] text-[.988rem] font-EuclidCircular-A font-[400] leading-[130%] tracking-[0.126px] mt-10 w-[33%]">
          Empowering MSMEs with access to funding, information, infrastructure,
          and new markets
        </p>
        <div className=" mt-[3em]">
          <Button title="Get Started" />
        </div>
      </section>
      <section className="mt-10 mx-auto">
        <h1 className="text-[#103c4c] mx-auto w-[35%] text-center text-[2.4rem] font-Archivo font-[700] leading-[94%] tracking-[-1.588px] ">
          Take your business where it needs to go
        </h1>
        <p className="text-[#969090] w-[43%] mx-auto text-center mt-5 text-[0.988rem] font-[Euclid Circular A] font-[400] leading-[17px]">
          Partnered with industry associations and government agencies to
          provide MSMEs with a supportive environment for growth.
        </p>
      </section>
      <section className="flex justify-between w-[73%] mx-auto mt-4">
        <div className="bg-[url('/img/herobg.png')] bg-center bg-cover h-[16em] w-[12em] rounded-xl">
          <h3 className="text-[#fff] pt-[8em] text-[1.4rem]">Get Funding</h3>
        </div>
        <div className="bg-[url('/img/herobg.png')] bg-center bg-cover h-[16em] w-[12em] rounded-xl">
          <h3 className="text-[#fff]  pt-[8em] text-[1.4rem]">Get Funding</h3>
        </div>
        <div className="bg-[url('/img/herobg.png')] bg-center bg-cover h-[16em] w-[12em] rounded-xl">
          <h3 className="text-[#fff]  pt-[8em] text-[1.4rem]">Get Funding</h3>
        </div>
        <div className="bg-[url('/img/herobg.png')] bg-center bg-cover h-[16em] w-[12em] rounded-xl">
          <h3 className="text-[#fff]  pt-[8em] text-[1.4rem]">Get Funding</h3>
        </div>
      </section>
    </div>
  );
};
