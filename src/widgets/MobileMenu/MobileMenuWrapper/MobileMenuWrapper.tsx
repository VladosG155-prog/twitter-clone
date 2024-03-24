import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { TweetInput } from "@/features/tweet/";
import { Modal } from "@/shared/ui";
import { Drawer } from "@/shared/ui/";
import { SearchBar } from "@/widgets/";
import { SideBar } from "@/widgets/";

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

  const handleClickAddTweet = () => {
    setIsShowAddTweet((prev) => !prev);
  };
  const handleClickSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };
  const handleClickMenu = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <>
      <Modal isOpen={isShowAddTweet} onClose={handleClickAddTweet}>
        <TweetInput />
      </Modal>

      {isSearchOpen && (
        <Drawer onClose={handleClickSearch} title="Search">
          <SearchBar />
        </Drawer>
      )}
      {isSideBarOpen && (
        <Drawer onClose={handleClickMenu} title="Menu">
          <SideBar />
        </Drawer>
      )}

      <MobileMenu
        handleClickAddTweet={handleClickAddTweet}
        handleClickMenu={handleClickMenu}
        handleClickSearch={handleClickSearch}
      />
    </>
  );
};
