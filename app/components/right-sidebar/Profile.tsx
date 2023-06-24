import Image from "next/image";
import girl from "../../assets/img/she-loves-her-work-beautiful-african-woman-sittin-2021-12-09-15-28-03-utc 1.png";
import line from "../../assets/img/Line 30.png";

export const Profile = () => {
  return (
    <div className="flex gap-2">
      <div className="mr-16 w-[1px] opacity-50 bg-[rgba(121, 122, 122, 0.40)]">
        <Image src={line} alt="" width={100} />
      </div>
      <div>
        <h2 className="#0c323e text-[17px] font-Archivo leading-[20px]">
          Natasha Abubakar
        </h2>
        <p className="text-[rgba(3, 20, 19, 0.60] text-[12px] leading-[16px] font-Archivo leading-16px">
          natasiabunny@gmail.com
        </p>
      </div>
      <Image src={girl} alt="" width={50} height={50} className="rounded-3xl" />
    </div>
  );
};
