import { SparklesIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import Post from "../../_atoms/Post/Post";
import { Tweet, User } from "@/src/common/types";

interface UserPageProps {
  tweets: Tweet[];
  user: User;
}

const UserPage: React.FC<UserPageProps> = ({ tweets, user }) => {
  const [likedTweetIds, setLikedTweetIds] = useState<string[]>([]);

  useEffect(() => {
    setLikedTweetIds(user.likedTweets);
  }, []);
  return (
    <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div
        className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 
    sticky top-0 z-50 bg-black border-b border-gray-700"
      >
        <h2 className="text-lg sm:text-xl font-bold text-white">
          @{user?.username}
        </h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
      <div className="pb-72">
        {tweets &&
          tweets.map((tweet) => (
            <Post
              key={tweet.id}
              tweet={tweet}
              isLiked={likedTweetIds.includes(tweet.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default UserPage;
