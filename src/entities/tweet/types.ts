import { IUser } from "../session/types";

export interface ITweet {
  text: string;
  createdAt: Date;
  id: string;
  user: IUser;
  userLikesIds: string[];
  image: string;
}

export interface ICreateTweetRequest {
  text: string;
  user: IUser;
  image?: File;
}
