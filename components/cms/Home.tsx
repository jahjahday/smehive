import { CmsAccess } from "./CmsAccess";
import { Editable } from "./Editable";
import { CmsNav } from "./CmsNav";

export const Home = () => {
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
