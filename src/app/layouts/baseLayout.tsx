import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppSelector } from "@/shared/model/hooks";
import { Loader } from "@/shared/ui";
import { SearchBar } from "@/widgets/SearchBar/ui/SearchBar";
import { SideBar } from "@/widgets/Sidebar/ui/SideBar/SideBar";

export const BaseLayout = () => {
  const isLoading = useAppSelector((state) => state.app.showLoader);
  const theme = useAppSelector((state) => state.app.theme);
  useEffect(() => {
    document.body.setAttribute(
      "data-theme",
      localStorage.getItem("theme") || theme
    );
  }, [theme]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="grid grid-cols-12 m-auto lg:max-w-screen-xl 2xl:max-w-screen-2xl gap-5">
        <SideBar />
        <div className="col-span-7 ">
          <Outlet />
        </div>
        <div className="col-span-3">
          <SearchBar />
        </div>
      </div>
    </>
  );
};
