import { IUser } from "../session/interfaces";

export interface ITweet {
  text: string;
  createdAt: Date;
  user: IUser;
  likesCount: number;
  image: string;
}

export interface ICreateTweetRequest {
  text: string;
  user: IUser;
  image?: File;
}
