import { Header } from "../../components/smes/Header";
import { Table } from "@/components";

const page = () => {
  return (
    <div className="">
      <Header
        sme="smes and partners"
        title="SMEs and Partners"
        opt1="All SME's"
        opt2="All New (15)"
        opt3="Any date"
        opt4="Anywhere"
      />
      <Table
        input={true}
        row1="Service Provider"
        row2="Website"
        row3="Location"
        row4="No of Service"
        row5="Email Address"
        row6="Date Joined"
      />
    </div>
  );
};

export default page;
