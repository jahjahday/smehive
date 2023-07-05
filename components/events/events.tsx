// import { Card } from "@/app/components";
// import { Select } from "@/app/components/select/select";

import { Card } from "@/components";
import { Select } from "@/components/select/select";

export const Events = () => {
  return (
    <div className="w-[68%] mt-[20px]">
      <Card title="Total Events" number={1800} percentage="" colors="danger" />
      <div className="flex gap-4 my-[2em]">
        <Select
          opt1="Any User"
          opt2="Any User"
          opt3="Any User"
          opt4="Any User"
        />
        <Select
          opt1="Any date"
          opt2="Any date"
          opt3="Any date"
          opt4="Any date"
        />
        <Select
          opt1="Any Status"
          opt2="Any Status"
          opt3="Any Status"
          opt4="Any Status"
        />
        <Select
          opt1="Anywhere"
          opt2="Anywhere"
          opt3="Anywhere"
          opt4="Anywhere"
        />
      </div>
    </div>
  );
};

