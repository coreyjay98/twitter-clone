"use client";
import { SparklesIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Post from "../../_atoms/Post/Post";
import { Tweet, User } from "@/src/common/types";
import CreateTweet from "../../_atoms/CreateTweet/CreateTweet";
import { useUser } from "@/src/api/Context/UserContext";

const Feed = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const { fetchTweets, retrieveUser, refreshTweets } = useUser();

  useEffect(() => {
    const getTweets = async () => {
      const tweets = await fetchTweets();
      if (tweets) {
        setTweets(tweets);
      }
    };
    getTweets();
    setUser(retrieveUser());
  }, []);

  useEffect(() => {
    const getTweets = async () => {
      const tweets = await fetchTweets();
      if (tweets) {
        setTweets(tweets);
      }
    };
    getTweets();
  }, [refreshTweets]); // This will refresh tweets when refreshTweets changes

  return (
    <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div
        className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 
        sticky top-0 z-50 bg-black border-b border-gray-700"
      >
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div
          className="inline md:hidden ml-3 w-auto p-1 h-auto bg-[#1d9bf0] text-white flex align-center justify-center
          rounded-full  text-lg font-bold shadow-md hover:bg-[#1a8cd8] self-center"
          onClick={() => setIsModalActive(!isModalActive)}
        >
          <PlusIcon className="h-5 text-white" />
        </div>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
      <div className="pb-72">
        {tweets.map((tweet: Tweet) => {
          const isLiked = user ? user.likedTweets.includes(tweet.id) : false;
          console.log(isLiked, tweet.likes, user?.likedTweets, tweet.id);
          return <Post key={tweet.id} tweet={tweet} isLiked={isLiked} />;
        })}
      </div>
      {isModalActive && <CreateTweet setIsModalActive={setIsModalActive} />}
    </div>
  );
};

export default Feed;
