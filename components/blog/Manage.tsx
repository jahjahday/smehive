import Image from "next/image";

export const Manage = () => {
  return (
    <div className="relative">
      <Image
        src="/ewdsds.png"
        alt=""
        width={680}
        height={680}
        className="h-[25em] rounded-3xl"
      />
      <section className="absolute left-[4em] bottom-[3em] w-[60%]">
        <div>
          <h2 className="text-[1.8rem] w-[90%] font-Archivo font-[700] leading-[32px] text-[#fff]">
            Manage and update SME hive website and content
          </h2>
          <p className="text-[1.1rem] mt-6 font-Archivo leading-[20px] text-[#9cb5be]">
            You can edit the homepage content as well as gallery content
          </p>
        </div>
        <div className="flex gap-2 w-[45%] max-lg:w-[60%] p-[10px] h-[20%] border-[1px] mt-[8em] border-solid bg-[#fff] rounded-[42px] border-[#dbee0]">
          <button className="text-[1rem] font-Archivo font-[500] leading-[20px]">
            Manage Website
          </button>
          <Image src="/svg/buttonarrow.svg" alt="" width={18} height={18} />
        </div>
      </section>
    </div>
  );
};

