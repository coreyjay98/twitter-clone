import React, { SetStateAction, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { createTweetContent } from "./utils";
import { useUser } from "@/src/api/Context/UserContext";
import { v4 as uuid } from "uuid";

interface CreateTweetProps {
  setIsModalActive: React.Dispatch<SetStateAction<boolean>>;
}

const CreateTweet: React.FC<CreateTweetProps> = ({ setIsModalActive }) => {
  const { createTweet, retrieveUser, callRefresh } = useUser();
  const [tweetText, setTweetText] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>();

  const user = retrieveUser();

  useEffect(() => {
    if (tweetText.length <= 0 || tweetText.length > 180) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [tweetText]);

  const postTweet = (text: string) => {
    setIsModalActive(false);
    if (user?.username) {
      createTweet({
        id: uuid(),
        username: user.username,
        post: {
          username: user?.username,
          timestamp: {
            toDate: () => new Date(),
            date: new Date().toString(),
          },
          text: text,
        },
        likes: {
          likedBy: [],
          number: 0,
        },
        postpage: false,
      });
    }
    callRefresh();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-slate-800 p-2 rounded w-1/1 h-90 sm:w-3/5">
        <div className="px-5 py-3 flex items-center justify-between text-slate-100 ">
          <button onClick={() => setIsModalActive(false)}>
            <XMarkIcon height={30} width={30} />
          </button>
        </div>
        <div className="flex p-4">
          <div>
            <UserIcon
              className={`h-11 w-11 rounded-full mr-4 ${
                user?.userColour || "text-twitterBlue"
              }`}
            />
          </div>

          <div className="ml-3 flex flex-col w-full">
            <textarea
              placeholder={createTweetContent.placeholder}
              className="w-full text-xl resize-none outline-none h-32"
              onChange={(e) => setTweetText(e.target.value)}
              value={tweetText}
            ></textarea>

            <div className=" text-slate-100 -ml-4">
              <p className="inline px-4 py-3 rounded-full">
                {createTweetContent.warning}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center text-blue-400 justify-between py-6 px-4 ">
          <div className="flex"></div>
          <div>
            <button
              className={`${
                isValid ? "bg-[#1d9bf0]" : "bg-slate-400"
              } inline px-4 py-3 rounded-full font-bold text-white cursor-pointer`}
              onClick={() => isValid && postTweet(tweetText)}
            >
              {createTweetContent.tweet}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
