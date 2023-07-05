import Image from "next/image"
import Link from "next/link"

export const CmsNav = () => {
  return (
    <nav className="flex justify-between w-[80%]">
        <ul className="flex gap-5">
            <Link href="../cms">
          <div className="flex justify-center py-[6px] px-[16px] items-center gap-2 rounded-[36px] bg-[#dbdee0]">
          <li> <Image src="/svg/vector.svg" alt="" width={8} height={10} />  </li>
          <li>Go Back</li>
          </div>
            </Link>
          <li className="text-[#072025] text-[1.875rem] font-[600] font-Archivo leading-32px tracking-[-0.3px]">Home</li>
        </ul>
        <ul className="flex gap-3 text-[#829399] text-center text-[0.75rem] font-normal font-Archivo leading-[20px] justify-center">
          <div className="flex items-center border gap-3 border-[#9cb5b3] rounded-[30px] px-[18px] ">
            <Image src="/svg/fullscreenicon.svg" alt="" width={15} height={10} />
          <li>Full screen</li>
          </div>
          <div className="flex  items-center border gap-3 border-[#9cb5b3] rounded-[30px] px-[18px] ">
          <Image src="/svg/undoicon.svg" alt="" width={18} height={15} />
          <li>Undo</li>
          </div>
          <div  className="flex border  items-center gap-3 border-[#9cb5b3] rounded-[30px] px-[18px] ">
            <Image src="/svg/redoicon.svg" alt="" width={18} height={15} />
          <li>Redo</li>
          </div>
        </ul>
      </nav>
  )
}
