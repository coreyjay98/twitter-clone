"use client";
import { useUser } from "@/src/api/Context/UserContext";
import { Tweet } from "@/src/common/types";
import NoUser from "@/src/components/_atoms/NoUser/NoUser";
import UserPage from "@/src/components/_molecules/UserPage/UserPage";
import { useEffect, useState } from "react";

const UserLandingPage = ({ params }: { params: { username: string } }) => {
  const { retrieveUserFromUserName, retrieveUsersTweets, retrieveUser } =
    useUser();
  const paramUser = retrieveUserFromUserName(params.username);
  const memoryUser = retrieveUser();

  // Function to fetch user tweets
  const fetchUserTweets = async (username: string) => {
    try {
      const userTweets = await retrieveUsersTweets(username);
      return userTweets;
    } catch (error) {
      console.error("Error fetching user tweets:", error);
      return [];
    }
  };

  useEffect(() => {
    const loadUserTweets = async () => {
      if (paramUser && memoryUser) {
        const userTweets = await fetchUserTweets(paramUser.username!);
        setTweets(userTweets);
      }
    };

    loadUserTweets();
  }, [paramUser]);

  const [tweets, setTweets] = useState<Tweet[]>([]);

  return paramUser && memoryUser ? (
    <UserPage tweets={tweets} user={paramUser} />
  ) : (
    <NoUser />
  );
};

export default UserLandingPage;
