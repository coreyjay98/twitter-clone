export enum Pages {
  Home = "Home",
  Explore = "Explore",
  Notifications = "Notifications",
  Messages = "Messages",
  Profile = "Profile",
  Bookmarks = "Bookmarks",
}

export interface User {
  email: string;
  password: string;
  username: string;
  id?: string;
  userColour?: string;
  likedTweets: string[];
}

export interface NewUser {
  username: string;
  password: string;
  email: string;
}

export interface Tweet {
  id: string;
  username: string;
  post: {
    username: string;
    timestamp: {
      toDate: () => Date;
      date: string;
    };
    text: string;
    image?: string;
  };
  likes: {
    number: number;
    likedBy: string[];
  };
  postPage?: boolean;
  postpage?: boolean;
}

export const enum Breakpoints {
  Small = 640,
  Medium = 768,
  Large = 1024,
  XLarge = 1280,
  XXLarge = 1440,
}

export interface TrendingResult {
  heading: string;
  description: string;
  img?: string;
  tags?: string[];
}
