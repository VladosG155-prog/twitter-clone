import { User } from "firebase/auth";

class Tweet {
  constructor(text: string, likesCount: string, createdAt: Date, user: User) {
    this.text = text;
    this.likesCount = likeCount;
    this.createdAt = createdAt;
    this.user = user;
  }
}

// Firestore data converter
const tweetConverter = {
  toFirestore: ({ text, likesCount, createdAt, user }) => {
    return {
      user,
      text,
      likesCount,
      createdAt,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Tweet(data.text, data.likesCount, data.createdAt, data.user);
  },
};
