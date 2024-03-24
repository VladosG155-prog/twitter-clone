import { FC, useEffect } from "react";
import classNames from "classnames";

import { globalSlice } from "@/shared/lib/globalSlice";
import { useAppDispatch } from "@/shared/model/hooks";

import { IToastProps } from "./types";

export const Toast: FC<IToastProps> = ({ text, type, id }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(globalSlice.actions.removeToast(id));
    }, 2000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      data-testid="toast"
      className={classNames("py-2 px-4 rounded relative", {
        "bg-green-500 text-white animate-mount transition-all":
          type === "success",
        "bg-yellow-500 text-black animate-mount transition-all":
          type === "warning",
        "bg-red-500 text-white animate-mount transition-all": type === "error",
      })}
    >
      <p>{text}</p>
      <span className="animate-minusWidth bg-white h-1 absolute bottom-0 left-0"></span>
    </div>
  );
};
