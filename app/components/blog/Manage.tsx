import Image from "next/image";
import arrow from "../../assets/svg/Button arrow.svg";

const Manage = () => {
  return (
    <div className="relative">
      <Image
        src="/ewdsds.png"
        alt=""
        width={500}
        height={600}
        className="h-[25em] rounded-3xl"
      />
      <section className="absolute left-[3.5em] bottom-[3em] w-[60%]">
        <div>
          <h2 className="text-[24px] font-Archivo font-[700] leading-[32px] text-[#fff]">
            Manage and update SME hive website and content
          </h2>
          <p className="text-[14px] mt-6 font-Archivo leading-[20px] text-[#9cb5be]">
            You can edit the homepage content as well as gallery content
          </p>
        </div>
        <div className="flex gap-2 w-[55%] p-[10px] h-[42px] border-[1px] mt-[8em] border-solid bg-[#fff] rounded-[42px] border-[#dbee0]">
          <button className="text-[14px] font-Archivo font-[500] leading-[20px]">
            Manage Website
          </button>
          <Image src={arrow} alt="" width={18} />
        </div>
      </section>
    </div>
  );
};

export default Manage;
