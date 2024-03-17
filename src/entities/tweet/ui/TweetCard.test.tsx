import { render, screen } from "@testing-library/react";

import { TweetCard } from "./TweetCard";

const mockProps = {
  user: {
    name: "Test User",
    avatar: "avatar.jpg",
    profileId: "@testuser",
    phone: "375297684465",
    email: "testtest@gmail.com",
    id: "gagmaimgaigm-mama",
    bio: "infoinfo@@mgamm",
  },
  createdAt: new Date("2022-01-01"),
  text: "Test tweet",
  image: "test.jpg",
  userLikesIds: [],
};

describe("TweetCard component", () => {
  it("renders user info correctly", () => {
    render(<TweetCard {...mockProps} />);
    const nameElement = screen.getByText(mockProps.user.name);
    const profileIdElement = screen.getByText(mockProps.user.profileId);
    const dateElement = screen.getByText("1/1/2022");
    expect(nameElement).toBeInTheDocument();
    expect(profileIdElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });

  it("renders tweet text correctly", () => {
    render(<TweetCard {...mockProps} />);
    const textElement = screen.getByText(mockProps.text);
    expect(textElement).toBeInTheDocument();
  });

  it("renders tweet image correctly", () => {
    render(<TweetCard {...mockProps} />);
    const imageElement = screen.getByAltText("Tweet Image");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockProps.image);
  });

  it("does not render image if image prop is not provided", () => {
    const propsWithoutImage = { ...mockProps, image: "" };
    render(<TweetCard {...propsWithoutImage} />);
    const imageElement = screen.queryByAltText("Tweet Image");
    expect(imageElement).not.toBeInTheDocument();
  });
});
