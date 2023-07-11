import Image from "next/image";

export const Manage = () => {
  return (
    <div className="bg-[url('/img/ewdsds.png')] bg-cover bg-center max-[412px]:w-[22em] rounded-2xl h-[25em] p-8">
      <section className="w-[70%] max-[412px]:w-full ml-4 max-[412px]:ml-0">
        <div className="mt-8">
          <h2 className="text-[1.8rem] w-[90%] max-[412px]:w-full font-Archivo font-[700] leading-[32px] text-[#fff]">
            Manage and update SME hive website and content
          </h2>
          <p className="text-[1.1rem] mt-6 font-Archivo leading-[20px] text-[#9cb5be]">
            You can edit the homepage content as well as gallery content
          </p>
        </div>
        <div className="flex gap-2 w-[45%] max-lg:w-[60%] p-[10px] h-[20%] border-[1px] mt-[7em] border-solid bg-[#fff] rounded-[42px] border-[#dbee0]">
          <button className="text-[1rem] font-Archivo font-[500] leading-[20px] text-[#083545]">
            Manage Website
          </button>
          <Image src="/svg/buttonarrow.svg" alt="" width={18} height={18} />
        </div>
      </section>
    </div>
  );
};
