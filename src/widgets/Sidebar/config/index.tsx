// TODO: ADD NAMED EXPORT FROM @SHARED/ASSETS/ICONS
import BookmarksIcon from "@/shared/assets/icons/bookmarks.svg?react";
import ExploreIcon from "@/shared/assets/icons/explore.svg?react";
import HomeIcon from "@/shared/assets/icons/home.svg?react";
import ListsIcon from "@/shared/assets/icons/lists.svg?react";
import MessagesIcon from "@/shared/assets/icons/messages.svg?react";
import MoreIcon from "@/shared/assets/icons/more.svg?react";
import NotificationIcon from "@/shared/assets/icons/notification.svg?react";
import ProfileIcon from "@/shared/assets/icons/profile.svg?react";

export const links = [
  { icon: <HomeIcon />, name: "Home" },
  { icon: <ExploreIcon />, name: "Explore" },
  { icon: <NotificationIcon />, name: "Notification" },
  { icon: <MessagesIcon />, name: "Messages" },
  { icon: <BookmarksIcon />, name: "Bookmarks" },
  { icon: <ListsIcon />, name: "Lists" },
  { icon: <ProfileIcon />, name: "Profile" },
  { icon: <MoreIcon />, name: "More" },
];
