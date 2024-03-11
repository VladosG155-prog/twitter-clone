import { createAction } from "@reduxjs/toolkit";

import { IUser } from "@/entities/session/types";

export const UPDATE_PROFILE = createAction<{
  userData: IUser;
  userAvatar?: File;
}>("profile/UPDATE_PROFILE");
