import Link from "next/link";
import { Blog } from "./Blog";
import Manage from "./Manage";

export const BlogContainer = () => {
  return (
    <div className="lg:flex gap-6 mt-[3em] sm:block">
      <Link href="../../blogs">
        <Blog />
      </Link>
      <Link href="../../cms">
        <Manage />
      </Link>
    </div>
  );
};
