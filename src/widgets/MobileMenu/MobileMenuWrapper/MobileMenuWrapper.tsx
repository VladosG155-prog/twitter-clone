import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { TweetInput } from "@/features/tweet/addTweet/ui/TweetInput";
import { Modal } from "@/shared/ui";
import { Drawer } from "@/shared/ui/Drawer/Drawer";
import { SearchBar } from "@/widgets/SearchBar/ui/SearchBar";
import { SideBar } from "@/widgets/Sidebar/ui/SideBar/SideBar";

import { MobileMenu } from "../MobileMenu";

export const MobileMenuWrapper = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isShowAddTweet, setIsShowAddTweet] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsSearchOpen(false);
    setIsSideBarOpen(false);
  }, [location]);

  return (
    <>
      <Modal isOpen={isShowAddTweet} onClose={() => setIsShowAddTweet(false)}>
        <TweetInput />
      </Modal>

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
        handleClickAddTweet={() => setIsShowAddTweet(true)}
        handleClickMenu={() => setIsSideBarOpen(true)}
        handleClickSearch={() => setIsSearchOpen(true)}
      />
    </>
  );
};
