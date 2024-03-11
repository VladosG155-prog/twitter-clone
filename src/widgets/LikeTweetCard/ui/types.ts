import { IUser } from "@/entities/session/types";

export interface ILikeTweetCardProps {
  user: IUser;
  text: string;
  userLikesIds: string[];
  createdAt: Date;
  postId: string;
  image: string;
}
