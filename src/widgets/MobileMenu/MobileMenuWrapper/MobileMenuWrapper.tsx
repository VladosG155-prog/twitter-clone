import { useState } from "react";

import { Drawer } from "@/shared/ui/Drawer/Drawer";
import { SearchBar } from "@/widgets/SearchBar/ui/SearchBar";
import { SideBar } from "@/widgets/Sidebar/ui/SideBar/SideBar";

import { MobileMenu } from "../MobileMenu";

export const MobileMenuWrapper = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <>
      {isSearchOpen && (
        <Drawer onClose={() => setIsSearchOpen(false)} title="Search">
          <SearchBar />
        </Drawer>
      )}
      {isSideBarOpen && (
        <Drawer onClose={() => setIsSideBarOpen(false)} title="Menu">
          <SideBar />
        </Drawer>
      )}

      <MobileMenu
        handleClickMenu={() => setIsSideBarOpen(true)}
        handleClickSearch={() => setIsSearchOpen(true)}
      />
    </>
  );
};
