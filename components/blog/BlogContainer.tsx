import Link from "next/link";
import { Blog } from "./Blog";
import { Manage } from "./Manage";

export const BlogContainer = () => {
  return (
    <div className="lg:flex justify-between gap-6 my-[3em] sm:block">
      <div className="flex-1">
        <Link href="../../blogs">
          <Blog />
        </Link>
      </div>
      <div className="flex-2 w-[57%] max-[412px]:mt-4">
        <Link href="../../cms">
          <Manage />
        </Link>
      </div>
    </div>
  );
};
