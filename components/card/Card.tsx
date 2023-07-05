import Image from "next/image";
import logo from "../../app/assets/svg/ArrowRise-s.svg";

interface cardProps {
  title: string;
  number: number;
  percentage: string;
  colors: "primary" | "danger" | "secondary" | "green";
  // onClick: {}
}

const colorsMap = {
  primary: "bg-[#F5FCFF]",
  danger: "bg-[#FFF7F4]",
  secondary: "bg-[#FAF4FF]",
  green: "bg-[#F4FFFB]"
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
      className={`border-[1px] border-[#DBDEE0] mt-4 rounded-[14.464px] w-[17em] max-lg:w-[16.5em] max-2xl:w-[18em] max-md:w-[10em] h-[9em] flex flex-col justify-center pl-[38px] ${colorsMap[colors]}`}
    >
      <h1 className="text-[1.075rem] font-Archivo font-[500] leading-[20px] text-[#1b3938]">
        {title}
      </h1>
      <section className="flex mt-2 gap-4">
        <h1 className="text-[2.075rem] mt-2 text-[#1b3938] font-Archivo font-[500] leading-[36px]">
          {number}
        </h1>
        {percentage ? (
          <div className="relative bg-white border-[1px] pl-2 h-[75%] w-[5em] rounded-3xl ml-4">
            <h1 className=" text-[.85rem] font-[500] text-[#545151] font-Archivo mt-1 leading-[21.696px]">
              {percentage}
            </h1>
            <Image
              src={logo}
              alt=""
              width={21.286}
              className="absolute bottom-2 right-1"
            />
          </div>
        ) : null}
      </section>
    </div>
  );
};
