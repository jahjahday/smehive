import React from "react";
import { Header } from "../components/smes/Header";

const pages = () => {
  return (
    <div className="bg-[#fafafa] h-screen w-[1275px] p-10 ml-10 ">
      <Header
        sme="events"
        title="All Events"
        opt1="All SME's"
        opt2="New Events(15)"
        opt3="Any date"
        opt4="Anywhere"
      />
    </div>
  );
};

export default pages;
