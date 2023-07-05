import Image from "next/image";
import avater from "../../app/assets/img/Avatar.png";
import arrow from "../../app/assets/svg/Button arrow (1).svg";

export const Blog = () => {
  return (
    <div className="bg-[#fbf7f4] p-12 w-[100%] max-lg:w-[35em]  h-[397px] border-[1px] rounded-[16px]">
      <p className="text-[#576D75] text-[1rem] font-Archivo leading-20px tracking-[0.24px]">
        Latest Blog Article
      </p>
      <h2 className="text-[1.8rem] font-Archivo font-[700] leading-[32px] w-[80%] text-[#083545] ">
        Why you should infuse AI into your business workflow in 2023
      </h2>
      <div className="flex gap-4 mt-5">
        <Image src={avater} alt="" width={50} className="h-[30px] mt-4" />
        <div>
          <h4>
            <span className="text-[10px] font-Archivo leading-[20px] tracking-[0.2px] w-[120px]">
              Updated By <br />
            </span>
            <span className="text-[1rem] font-Archivo font-[700] leading-[28px]">
              Ayomide Gabriel
            </span>{" "}
          </h4>
        </div>
      </div>
      <div className="border-[1px] w-[50%] h-[48px] p-4 bg-[#fff]  mt-12 flex justify-between items-center rounded-[42px]">
        <button className="text-[1rem] font-Archivo font-[500] text-[#083545] leading-[20px]  ">
          View all Blogs
        </button>
        <Image src={arrow} alt="" width={20} />
      </div>
    </div>
  );
};
