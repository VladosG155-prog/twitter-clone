import { Outlet } from "react-router-dom";

import { SideBar } from "@/widgets/Sidebar/ui/SideBar";

export const BaseLayout = () => {
  return (
    <div className="grid grid-cols-12 m-auto lg:max-w-screen-xl 2xl:max-w-screen-2xl gap-5">
      <SideBar />
      <div className="col-span-7">
        <Outlet />
      </div>
      <div className="col-span-3">gagag</div>
    </div>
  );
};
