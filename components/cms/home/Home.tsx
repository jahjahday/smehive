import { CmsAccess } from "./CmsAccess";
import { Editable } from "./Editable";
import { CmsNav } from "./CmsNav";

export const Home = () => {
  return (
    <div className="mt-[2em]">
      <CmsNav />
      <div className="flex gap-10 ">
        <CmsAccess />
        <Editable />
      </div>
    </div>
  );
};
