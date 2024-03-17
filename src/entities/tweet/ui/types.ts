import { IUser } from "@/entities/session/types";

export interface ITweetCardProps {
  user: IUser;
  text: string;
  userLikesIds: string[];
  createdAt: Date;
  image: string;
}
