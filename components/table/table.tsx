import logo from "../../assets/svg/more-vertical.svg"
import avater from "../../assets/img/Avatars.png"
import Image from "next/image"

interface tabelProps {
  input: boolean | string
  row1: string
  row2: string
  row3: string
  row4: string
  row5: string
  row6: string
}

export const Table = ({input, row1, row2, row3, row4, row5, row6 } : tabelProps) => {
  return (
    <div className="bg-white">
    <table className="w-full mt-10 text-[1.3rem] font-Archivo font-[400] leading-[24px] text-[#576d75]">
      <thead>
        <tr className="border-b h-24 flex justify-between items-center">
          <div className="flex items-center gap-2">
          {
            input ? <th> <input type="checkbox" className="w-[20px]" /> </th> : null
          }
          <div className="flex items-center gap-2">
          <th>{row1}</th>
          <Image src="/svg/arrowDown.svg" alt="" width={20} height={10}/>
          </div>
          </div>
          <th>{row2}</th>
          <div className="flex  items-center gap-2">
          <th>{row3}</th>
          <Image src="/svg/arrowDown.svg" alt="" width={20} height={10} />
          
          </div>
          <div className="flex  items-center gap-2">
          <th>{row4}</th>
          <Image src="/svg/arrowDown.svg" alt="" width={20} height={10} />
          </div>

          <th>{row5}</th>
          <div className="flex items-center gap-2">
          <th>{row6}</th>
          <Image src="/svg/arrowDown.svg" alt="" height={10} width={20} />
          </div>
        </tr>
      </thead>
      {/* <tbody>
        <tr className="border">
          <Image src={avater} alt="" width={30} />
        <td>Sisphys</td>
        <td>www.sisphys.com</td>
        <td>Nigeria</td>
        <td>28</td>
        <td>hr@sysphys.com</td>
        <td>20/02/2022  <br /> 10:38am</td>
        </tr>
      </tbody> */}
      <tbody></tbody>
    </table>
    </div>
  )
}