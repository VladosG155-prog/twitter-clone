import { IconNames } from "@/shared/const/icons";

export const links: {
  iconName: keyof typeof IconNames;
  name: string;
}[] = [
  { iconName: "home", name: "Home" },
  { iconName: "explore", name: "Explore" },
  { iconName: "notification", name: "Notification" },
  { iconName: "messages", name: "Messages" },
  { iconName: "bookmarks", name: "Bookmarks" },
  { iconName: "lists", name: "Lists" },
  { iconName: "profile", name: "Profile" },
  { iconName: "more", name: "More" },
];
