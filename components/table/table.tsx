import logo from "../../assets/svg/more-vertical.svg";
import avater from "../../assets/img/Avatars.png";
import Image from "next/image";

interface tabelProps {
  input: boolean | string;
  row1: string;
  row2: string;
  row3: string;
  row4: string;
  row5: string;
  row6: string;
}

export const Table = ({
  input,
  row1,
  row2,
  row3,
  row4,
  row5,
  row6,
}: tabelProps) => {
  return (
    <div className="bg-white">
      <table className="w-full mt-10 text-[1.3rem] font-Archivo font-[400] leading-[24px] text-[#576d75]">
        <thead className="">
          <tr className="border-b h-24 flex justify-between items-center">
            <span className="flex items-center gap-2">
              {input ? (
                <th>
                  {" "}
                  <input type="checkbox" className="w-[20px]" />{" "}
                </th>
              ) : null}
              <span className="flex items-center gap-2">
                <th>{row1}</th>
                <Image src="/svg/arrowDown.svg" alt="" width={20} height={10} />
              </span>
            </span>
            <th>{row2}</th>
            <span className="flex  items-center gap-2">
              <th>{row3}</th>
              <Image src="/svg/arrowDown.svg" alt="" width={20} height={10} />
            </span>
            <span className="flex  items-center gap-2">
              <th>{row4}</th>
              <Image src="/svg/arrowDown.svg" alt="" width={20} height={10} />
            </span>

            <th>{row5}</th>
            <span className="flex items-center gap-2">
              <th>{row6}</th>
              <Image src="/svg/arrowDown.svg" alt="" height={10} width={20} />
            </span>
          </tr>
        </thead>
      </table>
      {/* <table className="w-full">
        <tbody>
          <tr className="">
            <td className="flex gap-4">
              <input type="checkbox" />
              <Image src="/img/gallery1.png" alt="" width={50} height={55} />
            </td>
            <td className="font-Archivo">Market Support Forum</td>
            <td className="w-[23%]">
              Generally, you can visit the official website of the bank from
              whom you wish to ..
            </td>
            <td>
              Abimbola Fernandez <br /> name@company.com
            </td>
            <td>
              20/02/2022 <br /> 10:38am
            </td>
            <td>
              <button>Accept</button>
              <button>Reject</button>
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};
