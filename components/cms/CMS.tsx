"use client"

import { Header } from "../smes/Header";
import Link from "next/link";
import { Home } from "./home/Home";

const CMS = () => {

  return (
    <>
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
    <Link href="../../cms/home">
    <h1>Home</h1>
    </Link>
    </>
  );
};

export default CMS;
