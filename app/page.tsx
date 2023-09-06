"use client";
import React from "react";
import "./globals.css";
import Feed from "@/src/components/_molecules/Feed/Feed";
import { useUser } from "@/src/api/Context/UserContext";
import HomePageLogin from "@/src/components/_molecules/HomePageLogin/HomePageLogin";

const Home: React.FC = () => {
  const { retrieveUser } = useUser();

  return retrieveUser() ? <Feed /> : <HomePageLogin />;
};

export default Home;
