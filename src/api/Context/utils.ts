import { Tweet, User } from "@/src/common/types";

export const findUserWithEmail = (email: string, data: User[]) =>
  data.find((user) => user.email === email);

export const findUserWithUsername = (username: string, data: User[]) =>
  data.find((user) => user.username?.toLowerCase() === username.toLowerCase());

export const filterTweetsByUsername = (username: string, data: Tweet[]) =>
  data.filter(
    (tweet) => tweet.post.username.toLowerCase() === username.toLowerCase()
  );
