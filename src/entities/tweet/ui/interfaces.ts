import { ReactNode } from "react";

import { IUser } from "@/entities/session/interfaces";

export interface ITweetCardProps {
  user: IUser;
  text: string;
  userLikesIds: string[];
  createdAt: Date;
  image: string;
  slotLike: ReactNode;
}
