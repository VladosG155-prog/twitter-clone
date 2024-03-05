// TODO: ADD NAMED EXPORT FROM @SHARED/ASSETS/ICONS

import { FC, SVGProps } from "react";

import BookmarksIcon from "@/shared/assets/icons/bookmarks.svg?react";
import ExploreIcon from "@/shared/assets/icons/explore.svg?react";
import HomeIcon from "@/shared/assets/icons/home.svg?react";
import ListsIcon from "@/shared/assets/icons/lists.svg?react";
import MessagesIcon from "@/shared/assets/icons/messages.svg?react";
import MoreIcon from "@/shared/assets/icons/more.svg?react";
import NotificationIcon from "@/shared/assets/icons/notification.svg?react";
import ProfileIcon from "@/shared/assets/icons/profile.svg?react";

export const links: {
  Icon: FC<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  name: string;
}[] = [
  { Icon: HomeIcon, name: "Home" },
  { Icon: ExploreIcon, name: "Explore" },
  { Icon: NotificationIcon, name: "Notification" },
  { Icon: MessagesIcon, name: "Messages" },
  { Icon: BookmarksIcon, name: "Bookmarks" },
  { Icon: ListsIcon, name: "Lists" },
  { Icon: ProfileIcon, name: "Profile" },
  { Icon: MoreIcon, name: "More" },
];
