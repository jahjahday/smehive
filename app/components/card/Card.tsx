import Image from "next/image";
import logo from "../../assets/svg/ArrowRise-s.svg";

interface cardProps {
  title: string;
  number: number;
  percentage: string;
  colors: "primary" | "danger" | "secondary";
  // onClick: {}
}

const colorsMap = {
  primary: "bg-[#F5FCFF]",
  danger: "bg-[#FFF7F4]",
  secondary: "bg-[#FAF4FF]",
};

export const Card: React.FC<cardProps> = ({
  title,
  number,
  percentage,
  colors,
  // onClick
}) => {
  return (
    <div
      className={`border-[1px] border-[#DBDEE0] mt-4 rounded-[14.464px] w-[210px] h-[115px] flex flex-col justify-center pl-[24px] ${colorsMap[colors]}`}
    >
      <h1 className="text-[14px] font-Archivo font-[500] leading-[20px] text-[#1b3938]">
        {title}
      </h1>
      <section className="flex mt-2 gap-4">
        <h1 className="text-[30px] text-[#1b3938] font-Archivo font-[500] leading-[36px]">
          {number}
        </h1>
        {percentage ? (
          <div className="relative bg-white border-[1px] pl-2 h-[70%] w-[4.5em] rounded-3xl ml-4">
            <h1 className=" text-[14px] font-[500] text-[#545151] font-Archivo leading-[21.696px]">
              {percentage}
            </h1>
            <Image
              src={logo}
              alt=""
              width={19.286}
              className="absolute bottom-1 right-1"
            />
          </div>
        ) : null}
      </section>
    </div>
  );
};
