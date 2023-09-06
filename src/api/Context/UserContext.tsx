"use client";
import { NewUser, Tweet, User } from "@/src/common/types";
import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
} from "react";
import { mockTweets, mockUsers } from "../Mockdata/mockdata";
import { findUserWithEmail, findUserWithUsername } from "./utils";
import { createClient } from "@supabase/supabase-js";
import makeTweet from "../Calls/MakeTweet";

interface UserContextType {
  user: User | null;
  login: (userData: NewUser) => void;
  logout: () => void;
  signUp: (userData: NewUser) => void;
  retrieveUser: () => User | null;
  createTweet: (tweet: Tweet) => void;
  retrieveTweets: () => Tweet[];
  retrieveUsersTweets: (username: string) => Promise<Tweet[]>;
  retrieveUserFromUserName: (username: string) => User | undefined;
  likeTweet?: (username: string, tweetId: string, unlike: boolean) => void;
  retrieveTweetById: (id: string) => Tweet;
  setUsers: (data: User[]) => void;
  setTweets: (data: Tweet[]) => void;
  fetchTweets: () => Tweet[] | Promise<Tweet[]>;
  callRefresh: () => void;
  refreshTweets: boolean;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const UserContext = createContext<UserContextType | undefined>(undefined);

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [allTweets, setAllTweets] = useState<Tweet[]>(mockTweets);
  const [allUsers, setAllUsers] = useState(mockUsers);
  const [refreshTweets, setRefreshTweets] = useState(false);

  const callRefresh = () => {
    setRefreshTweets(!refreshTweets);
  };

  const fetchTweets = async (): Promise<Tweet[]> => {
    const { data, error } = await supabase.from("tweets").select();

    if (error) {
      console.error(error);
      return [];
    }

    return data;
  };

  const setUsers = (data: User[]) => {
    if (data) {
      setAllUsers(data);
    } else {
      setAllUsers(mockUsers);
    }
  };

  const setTweets = (data: Tweet[]) => {
    setAllTweets(data);
  };

  const login = (userData: NewUser) => {
    setUser(findUserWithEmail(userData.email, allUsers) || null);
  };

  const logout = () => {
    setUser(null);
  };

  const signUp = (userData: NewUser) => {
    console.log(userData);
  };

  const retrieveUser = () => {
    return user;
  };

  const retrieveUserFromUserName = (username: string): User | undefined => {
    return findUserWithUsername(username, allUsers);
  };

  const createTweet = async (tweet: Tweet) => {
    await makeTweet(tweet);
  };

  const retrieveTweets = (): Tweet[] => {
    return allTweets;
  };

  const retrieveUsersTweets = async (username: string): Promise<Tweet[]> => {
    const { data: tweets, error } = await supabase
      .from("tweets")
      .select()
      .eq("username", username);

    if (error) {
      console.log(error);
      return [];
    }

    return tweets;
  };

  const retrieveTweetById = (id: string): Tweet => {
    return allTweets.find((tweet) => tweet.id === id)!;
  };

  return (
    <UserContext.Provider
      value={{
        callRefresh,
        refreshTweets,
        setUsers,
        setTweets,
        user,
        login,
        logout,
        signUp,
        retrieveUser,
        createTweet,
        fetchTweets,
        retrieveTweets,
        retrieveUsersTweets,
        retrieveUserFromUserName,
        retrieveTweetById,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
