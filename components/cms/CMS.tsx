"use client";

import Image from "next/image";
import { Header } from "../smes/Header";
import Link from "next/link";

const CMS = () => {
  return (
    <div className=" mx-auto w-[88%]">
      <div className=" mt-[1em]">
        <Header
          sme="CMS"
          title="Page Management"
          opt1="Any Author"
          opt2="Any Status"
          opt3="Any date"
          opt4="Anywhere"
        />
      </div>

      <table className="w-[100%] mx-auto mt-5">
        <thead className="border-b-2">
          <tr className="text-[1.1rem] h-[4em] text-[#576d75] font-Archivo font-[400] leading-[24px]">
            <td className="">
              <span>Page Name</span>
              {/* <Image src="/svg/arrowDown.svg" alt="" width={18} height={20} /> */}
            </td>
            <td className="">
              <span>Author</span>
              {/* <Image src="/svg/arrowDown.svg" alt="" width={18} height={20} /> */}
            </td>
            <td className="">
              <span>Created on</span>
              {/* <Image src="/svg/arrowDown.svg" alt="" width={18} height={20} /> */}
            </td>
            <td className="">
              <span>Updated on</span>
              {/* <Image src="/svg/arrowDown.svg" alt="" width={18} height={20} /> */}
            </td>
            <td className="">
              <span>Status</span>
              {/* <Image src="/svg/arrowDown.svg" alt="" width={18} height={20} /> */}
            </td>
          </tr>
        </thead>
        <tbody className="h-[7em]">
          <tr className="text-[#083545] border-b-2 text-[1.1rem] font-[500] h-[6em]">
            <td className=" cursor-pointer">
              <Link href="../../cms/home">
                Home <br />{" "}
                <span className="text-[#829399]">All section of the page </span>
              </Link>
            </td>
            <td>
              Natashia <br /> <span className="text-[#829399]">admin</span>{" "}
            </td>
            <td>20/02/2023</td>
            <td>
              5 days ago <br /> <span className="text-[#829399]">25/02/23</span>{" "}
            </td>
            <td className=" rounded-[100px]">
              <button className="bg-[#37bb70] font-Archivo font-[400] leading-[20px] text-[#fff] text-[.9rem] px-5 py-2 rounded-[100px] ">
                Published
              </button>{" "}
            </td>
            <td>
              <Image
                src="/svg/morevertical.svg"
                alt=""
                width={20}
                height={20}
              />
            </td>
          </tr>
          <tr className="text-[#083545] border-b-2 text-[1.1rem] font-[500] h-[6em]">
            <td className="cursor-pointer">
              <Link href="../../cms/gallery">
                Our Gallery <br />{" "}
                <span className="text-[#829399]">
                  {" "}
                  All 4 sections of the page{" "}
                </span>
              </Link>
            </td>
            <td>
              Natashia <br /> <span className="text-[#829399]">admin</span>{" "}
            </td>
            <td>20/02/2023</td>
            <td>-</td>
            <td className=" rounded-[100px]">
              <button className="bg-[#37bb70] font-Archivo font-[400] leading-[20px] text-[#fff] text-[.9rem] px-5 py-2 rounded-[100px] ">
                Published
              </button>{" "}
            </td>
            <td>
              <Image
                src="/svg/morevertical.svg"
                alt=""
                width={20}
                height={20}
              />
            </td>
          </tr>
          <tr className="text-[#083545] border-b-2 text-[1.1rem] font-[500] h-[6em]">
            <td className="cursor-pointer">
              <Link href="../../cms/contact-us">
                Contacts Us <br />{" "}
                <span className="text-[#829399]">Content related page</span>
              </Link>
            </td>
            <td>
              Ibrahim <br /> <span className="text-[#829399]">admin</span>{" "}
            </td>
            <td>20/02/2023</td>
            <td>
              2 days ago <br /> <span className="text-[#829399]">23/02/23</span>
            </td>
            <td className=" rounded-[100px]">
              <button className="bg-[#37bb70] font-Archivo font-[400] leading-[20px] text-[#fff] text-[.9rem] px-5 py-2 rounded-[100px] ">
                Published
              </button>{" "}
            </td>
            <td>
              <Image
                src="/svg/morevertical.svg"
                alt=""
                width={20}
                height={20}
              />
            </td>
          </tr>
          <tr className="text-[#083545]  bg-[#f9f9f9] border-b-2 text-[1.1rem] font-[500] h-[6em]">
            <td className="cursor-pointer">
              <Link href="">
                About Us <br />{" "}
                <span className="text-[#829399]">All page content</span>
              </Link>
            </td>
            <td>
              Ibrahim <br /> <span className="text-[#829399]">admin</span>{" "}
            </td>
            <td>20/02/2023</td>
            <td>
              2 days ago <br /> <span className="text-[#829399]">23/02/23</span>
            </td>
            <td className=" ">
              <button className="bg-[#cddff0] font-Archivo font-[400] leading-[20px] text-[#083545] text-[.9rem] px-5 py-2 rounded-[100px] ">
                Unpublished
              </button>{" "}
            </td>
            <td>
              <Image
                src="/svg/morevertical.svg"
                alt=""
                width={20}
                height={20}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CMS;
