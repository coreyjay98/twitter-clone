import {
  ChartBarIcon,
  ChatBubbleLeftIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Tweet } from "@/src/common/types";
import { UserIcon } from "@heroicons/react/24/solid";
import { formatDateString } from "@/src/common/dates";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/api/Context/UserContext";
import likeTweet from "@/src/api/Calls/LikeTweet";

const Post = ({ tweet, isLiked }: { tweet: Tweet; isLiked: boolean }) => {
  const router = useRouter();
  const { retrieveUser } = useUser();
  // const [comments, setComments] = useState<string[]>([]);
  //const [likes, setLikes] = useState<string[]>([]);
  // const [userLikeTweet, setUserLikeTweet] = useState<boolean>();
  // const [userState, setUserState] = useState<User | null>(retrieveUser());
  const [isTweetLiked, setIsTweetLiked] = useState(isLiked);

  const user = retrieveUser();

  useEffect(() => {
    // Set initial like state if tweet is already liked
    if (isLiked) {
      setIsTweetLiked(true);
    }
  }, [isLiked]);

  const handleButtonClick = () => {
    setIsTweetLiked(!isTweetLiked);
    if (user) {
      likeTweet(user.username, tweet.id, isTweetLiked);
    }
  };

  return (
    tweet && (
      <div className="p-3 flex cursor-pointer border-b border-gray-700 bg-slate-950">
        <UserIcon
          className={`h-11 w-11 rounded-full mr-4 ${
            user?.userColour || "text-twitterBlue"
          }`}
        />
        <div className="flex flex-col space-y-2 w-full">
          <div className={`flex ${!tweet.postPage && "justify-between"}`}>
            <div className="text-[#6e767d]">
              <div className="inline-block group">
                <h4
                  className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline ${
                    !tweet.postPage && "inline-block"
                  }`}
                  onClick={() =>
                    router.push(
                      `/user/${tweet.username || tweet.post.username}`
                    )
                  }
                >
                  {tweet.username || tweet.post.username}
                </h4>
                <span
                  className={`text-sm sm:text-[15px] ${
                    !tweet.postPage && "ml-1.5"
                  }`}
                >
                  @{tweet.username || tweet.post.username}
                </span>
              </div>{" "}
              ·{" "}
              <span className="hover:underline text-sm sm:text-[15px]">
                {formatDateString(tweet.post?.timestamp.date)}
              </span>
              {!tweet.postPage && (
                <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
                  {tweet.post?.text}
                </p>
              )}
            </div>
            <div className="icon group flex-shrink-0 ml-auto">
              <ChatBubbleLeftIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
            </div>
          </div>
          {tweet.postPage && (
            <p className="text-[#d9d9d9] mt-0.5 text-xl">hello my first post</p>
          )}
          <div
            className={`text-[#6e767d] flex justify-between w-10/12 ${
              tweet.postPage && "mx-auto"
            }`}
          >
            <div
              className="flex items-center space-x-1 group"
              onClick={() => {}}
            >
              <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
                <ChatBubbleLeftIcon className="h-5 group-hover:text-[#1d9bf0]" />
              </div>
              {/* {comments.length > 0 && (
                <span className="group-hover:text-[#1d9bf0] text-sm">
                  {comments.length}
                </span>
              )} */}
            </div>

            <div
              className="flex items-center space-x-1 group"
              onClick={() => handleButtonClick()}
            >
              <div className="icon group-hover:bg-pink-600/10">
                {isTweetLiked ? (
                  <HeartIconFilled className="h-5 text-pink-600" />
                ) : (
                  <HeartIcon className="h-5 group-hover:text-pink-600" />
                )}
              </div>
              {tweet.likes.likedBy && tweet.likes.likedBy.length > 0 && (
                <span
                  className={`group-hover:text-pink-600 text-sm ${
                    isTweetLiked && "text-pink-600"
                  }`}
                >
                  {(tweet.likes.likedBy.length += isTweetLiked ? 1 : 0)}
                </span>
              )}
            </div>

            <div className="icon group">
              <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
            <div className="icon group">
              <ChartBarIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Post;
