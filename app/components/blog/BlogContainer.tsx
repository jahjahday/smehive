import { Blog } from "./Blog";
import Manage from "./Manage";

export const BlogContainer = () => {
  return (
    <div className="flex">
      <Blog />
      <Manage />
    </div>
  );
};
