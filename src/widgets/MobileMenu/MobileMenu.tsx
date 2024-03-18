import { FC } from "react";
import { Link } from "react-router-dom";

import { LOGOUT } from "@/entities/session/model/actions";
import { ROUTES } from "@/shared/const/routes";
import { useAppDispatch } from "@/shared/model/hooks";
import { Icon } from "@/shared/ui/Icon/Icon";

import { IMobileMenu } from "./types";

export const MobileMenu: FC<IMobileMenu> = ({
  handleClickMenu,
  handleClickSearch,
  handleClickAddTweet,
}) => {
  const dispatch = useAppDispatch();
  const handleClickLogout = () => {
    dispatch(LOGOUT());
  };

  return (
    <div className="fixed bottom-0 w-full flex border-t-gray-500 border-t-2 dark:bg-white bg-black p-8 pb-8 items-center z-40 justify-center gap-8 h-[30px]">
      <Link to={ROUTES.HOME}>
        <Icon name="home" className="text-white dark:text-black" />
      </Link>
      <button onClick={handleClickSearch}>
        <Icon name="search" className="text-white dark:text-black" />
      </button>
      <button
        onClick={handleClickAddTweet}
        className="bg-primary p-3 rounded-full -mt-5"
      >
        <Icon
          name="addTweet"
          width={20}
          height={20}
          className="text-white dark:text-black"
        />
      </button>

      <button
        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
        onClick={handleClickMenu}
      >
        <span className="block w-6 h-1 bg-white mb-1 dark:bg-black"></span>
        <span className="block w-6 h-1 bg-white mb-1  dark:bg-black"></span>
        <span className="block w-6 h-1 bg-white  dark:bg-black"></span>
      </button>
      <button onClick={handleClickLogout}>
        <Icon
          name="logout"
          width={30}
          height={30}
          className="text-white dark:text-black fill-transparent"
        />
      </button>
    </div>
  );
};
