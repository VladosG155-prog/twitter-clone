import { render, screen } from "@testing-library/react";

import { UserCard } from "./UserCard";

describe("UserCard component", () => {
  const mockProps = {
    avatar: "avatar.jpg",
    name: "Test User",
    userId: "@testuser",
    isCurrentUser: false,
    isShowFollowBtn: true,
    isSmallCard: false,
  };

  it("renders user information correctly", () => {
    render(<UserCard {...mockProps} />);
    const nameElement = screen.getByText(mockProps.name);
    const userIdElement = screen.getByText(mockProps.userId);
    expect(nameElement).toBeInTheDocument();
    expect(userIdElement).toBeInTheDocument();
  });

  it("renders avatar with correct URL", () => {
    render(<UserCard {...mockProps} />);
    const avatarElement = screen.getByAltText("User Avatar");
    expect(avatarElement).toBeInTheDocument();
  });

  it("renders follow button if user is not current user and showFollowBtn is true", () => {
    render(<UserCard {...mockProps} />);
    const followButton = screen.getByRole("button", { name: /follow/i });
    expect(followButton).toBeInTheDocument();
  });

  it("does not render follow button if user is current user", () => {
    const propsCurrentUser = { ...mockProps, isCurrentUser: true };
    render(<UserCard {...propsCurrentUser} />);
    const followButton = screen.queryByRole("button", { name: /follow/i });
    expect(followButton).not.toBeInTheDocument();
  });

  it("does not render follow button if showFollowBtn is false", () => {
    const propsNoFollowBtn = { ...mockProps, isShowFollowBtn: false };
    render(<UserCard {...propsNoFollowBtn} />);
    const followButton = screen.queryByRole("button", { name: /follow/i });
    expect(followButton).not.toBeInTheDocument();
  });
});
