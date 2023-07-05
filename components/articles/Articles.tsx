import { Card } from "../card";
import { Select } from "../select/select";

export const Articles = () => {
  return (
    <div className="w-[68%] mt-[20px]">
      <div className="flex gap-4">
        <Card
          title="Total Articles"
          number={389}
          percentage=""
          colors="danger"
        />
        <Card title="SMEs" number={180} percentage="" colors="secondary" />
        <Card title="Partners" number={200} percentage="" colors="secondary" />
      </div>
      <div className="flex gap-4 my-[2em]">
        <Select
          opt1="Any User"
          opt2="Any User"
          opt3="Any User"
          opt4="Any User"
        />
        <Select
          opt1="Any User"
          opt2="Any User"
          opt3="Any User"
          opt4="Any User"
        />
        <Select
          opt1="Any User"
          opt2="Any User"
          opt3="Any User"
          opt4="Any User"
        />
        <Select
          opt1="Any User"
          opt2="Any User"
          opt3="Any User"
          opt4="Any User"
        />
      </div>
    </div>
  );
};
