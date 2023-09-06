import { Tweet } from "@/src/common/types";

export const hasUserLikedTweet = (username: string, tweet: Tweet): boolean => {
  return tweet.likes?.likedBy.includes(username);
};
