import { IUser } from "@/entities/session/interfaces";

export interface ITweetCardProps {
  user: IUser;
  text: string;
  likesCount: number;
  createdAt: Date;
  image: string;
}
