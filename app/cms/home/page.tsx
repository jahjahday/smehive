import { CmsAccess } from "@/components";
import { Editable } from "@/components";
import { CmsNav } from "@/components";

const page = () => {
  return (
    <div className="mt-[3em] ">
      <CmsNav title="Home" />
      <div className="flex w-[90%] ml-[6em] gap-10">
        <CmsAccess />
        <Editable number={8} />
      </div>
    </div>
  );
};

export default page;
