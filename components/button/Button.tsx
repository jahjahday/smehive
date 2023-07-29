import Image from "next/image";
interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <div className="flex items-center custom-background rounded-[40px] p-3 w-[18%] gap-4">
      <button className=" text-[1.1rem] mx-auto font-[600]">{title}</button>
      <Image
        src="/svg/buttonarrow.svg"
        alt=""
        width={22}
        height={1}
        className=""
      />
    </div>
  );
};
