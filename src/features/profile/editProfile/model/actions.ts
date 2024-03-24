import { createAction } from "@reduxjs/toolkit";

import { IUser } from "@/entities/session/types";

export const UPDATE_PROFILE = createAction<{
  userData: Partial<IUser>;
  userAvatar?: File;
}>("profile/UPDATE_PROFILE");
