import { FC } from "react";

import { appSlice } from "@/entities/app/model/slice";
import { THEME } from "@/shared/const/theme";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { Switch } from "@/shared/ui/";

import { IPageHeaderProps } from "./types";

export const PageHeader: FC<IPageHeaderProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const theme = useAppSelector((state) => state.app.theme);

  const changeTheme = () => {
    if (theme === THEME.LIGHT) {
      dispatch(appSlice.actions.changeTheme(THEME.DARK));
      localStorage.setItem("theme", THEME.DARK);
    } else {
      dispatch(appSlice.actions.changeTheme(THEME.LIGHT));
      localStorage.setItem("theme", THEME.LIGHT);
    }
  };

  const isChecked = theme === THEME.DARK;

  return (
    <div className="flex justify-between pr-10 px-3 py-4 pl-5">
      <div>{children}</div>
      <Switch checked={isChecked} onChange={changeTheme} />
    </div>
  );
};
