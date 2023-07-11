import { Table } from "@/components/table/table";

export const Articles = () => {
  return (
    <div>
      <Table
        input
        row1="Image"
        row2="Heading"
        row3="Description"
        row4="Create by"
        row5="Date/time"
        row6="Action"
      />
    </div>
  );
};
