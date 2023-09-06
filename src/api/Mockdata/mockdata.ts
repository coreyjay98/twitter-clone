import { Tweet, User } from "@/src/common/types";

export const mockTweets: Tweet[] = [
  {
    id: "12345",
    username: "Corey123", // Matched with user Corey123
    post: {
      username: "Corey123", // Matched with user Corey123
      timestamp: {
        toDate: () => new Date(),
        date: "2023-05-29T13:47:58.000Z",
      },
      text: "Test Post by Corey123",
      image: "post-image-url-1",
    },
    likes: {
      number: 1,
      likedBy: ["Alice123", "Bob456"],
    },
    postPage: false,
  },
  {
    id: "67890",
    username: "Alice123", // Matched with user Alice123
    post: {
      username: "Alice123", // Matched with user Alice123
      timestamp: {
        toDate: () => new Date(),
        date: "2023-05-29T13:47:58.000Z",
      },
      text: "Mock post by Alice123!",
      image: "post-image-url-2",
    },
    likes: {
      number: 1,
      likedBy: ["Alice123"],
    },
    postPage: false,
  },
  {
    id: "13579",
    username: "Bob456", // Matched with user Bob456
    post: {
      username: "Bob456", // Matched with user Bob456
      timestamp: {
        toDate: () => new Date(),
        date: "2023-05-29T13:47:58.000Z",
      },
      text: "A different mock post by Bob456!",
      image: "post-image-url-3",
    },
    likes: {
      number: 1,
      likedBy: ["Alice123"],
    },
    postPage: false,
  },
  {
    id: "24680",
    username: "David789", // Matched with user David789
    post: {
      username: "David789", // Matched with user David789
      timestamp: {
        toDate: () => new Date(),
        date: "2023-05-29T13:47:58.000Z",
      },
      text: "One more mock post by David789!",
      image: "post-image-url-4",
    },
    likes: {
      number: 1,
      likedBy: ["Alice123"],
    },
    postPage: false,
  },
];

export const mockUsers: User[] = [
  {
    email: "corey@gmail.com",
    password: "GGG",
    username: "Corey123",
    id: "user-8382173173mock",
    userColour: "text-purple-500",
    likedTweets: ["24680", "13579"],
  },
  {
    email: "alice@gmail.com",
    password: "AAA",
    username: "Alice123",
    id: "user-1234567890",
    userColour: "text-twitterBlue",
    likedTweets: ["24680"],
  },
  {
    email: "bob@gmail.com",
    password: "BBB",
    username: "Bob456",
    id: "user-9876543210",
    userColour: "text-twitterBlue",
    likedTweets: [],
  },
  {
    email: "david@gmail.com",
    password: "DDD",
    username: "David789",
    id: "user-2468135790",
    userColour: "text-twitterBlue",
    likedTweets: [],
  },
];
