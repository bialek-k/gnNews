import { Sidebar } from "./sidebar/Sidebar";
import { Content } from "./content/Content";

export const Main = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <Content />
    </div>
  );
};
