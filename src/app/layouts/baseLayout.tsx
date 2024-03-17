import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { SCREEN } from "@/shared/const/screens";
import { useMediaQuery } from "@/shared/lib/hooks/useMediaQuery";
import { useAppSelector } from "@/shared/model/hooks";
import { Loader } from "@/shared/ui";
import { MobileMenuWrapper } from "@/widgets/MobileMenu/MobileMenuWrapper/MobileMenuWrapper";
import { SearchBar } from "@/widgets/SearchBar/ui/SearchBar";
import { SideBar } from "@/widgets/Sidebar/ui/SideBar/SideBar";

export const BaseLayout = () => {
  const isLoading = useAppSelector((state) => state.app.showLoader);
  const theme = useAppSelector((state) => state.app.theme);
  const isTablet = useMediaQuery(SCREEN.TABLET);

  useEffect(() => {
    document.body.setAttribute(
      "data-theme",
      localStorage.getItem("theme") || theme
    );
  }, [theme]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="grid grid-cols-12 m-auto max-w-[1600px] gap-5">
        {!isTablet && <SideBar />}
        <div className="col-span-7 md:col-span-12 md:pr-5">
          <Outlet />
        </div>
        {!isTablet && (
          <div className="col-span-3 pr-3">
            <SearchBar />
          </div>
        )}
        {isTablet && <MobileMenuWrapper />}
      </div>
    </>
  );
};
