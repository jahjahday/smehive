import Image from "next/image";
import avater from "../../assets/img/Avatar.png";

export const Blog = () => {
  return (
    <div className="bg-[#fbf7f4] w-[347px] h-[397px] border-[1px] rounded-[16px] mt-[2em]">
      <p className="text-[#576D75] text-[12px] font-Archivo leading-20px tracking-[0.24px]">
        Latest Blog Article
      </p>
      <h2 className="text-[24px] font-Archivo font-[700] leading-[32px] text-[#083545] w-[211px]">
        Why you should infuse AI into your business workflow in 2023
      </h2>
      <div className="flex gap-4">
        <Image src={avater} alt="" width={50} className="h-[30px] mt-4" />
        <div>
          <h4>
            <span className="text-[10px] font-Archivo leading-[20px] tracking-[0.2px] w-[120px]">
              Updated By <br />
            </span>
            <span className="text-[12px] font-Archivo font-[700] leading-[28px] w-[167px]">
              Ayomide Gabriel
            </span>{" "}
          </h4>
        </div>
      </div>
      <div>
        <button className="border-[1px] bg-[#fff] rounded-[42px]">
          View all Blogs
        </button>
      </div>
    </div>
  );
};
