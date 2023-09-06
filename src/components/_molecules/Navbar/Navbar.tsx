"use client";

import Image from "next/image";
import twitterIcon from "../../../../public/twitter-icon.jpeg";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import { useUser } from "@/src/api/Context/UserContext";
import { useRouter } from "next/navigation";

// import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const { retrieveUser, logout } = useUser();
  const isUserLoggedIn = retrieveUser();
  /* const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []); */

  const pushHome = () => {
    router.push("/");
  };

  return (
    <header>
      <nav className="bg-slate-950 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-x ">
          <a
            onClick={() => pushHome()}
            className="flex items-center hover:cursor-pointer"
          >
            <Image
              src={twitterIcon}
              width={30}
              height={30}
              className="mr-3"
              alt=""
            />
            <span className="text-white self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Twitter
            </span>
          </a>
          {!isUserLoggedIn ? (
            <div className="flex items-center lg:order-2">
              <a
                className="text-gray-800 text-white hover:bg-gray-50 hover:text-slate-900 hover:cursor-pointer focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                onClick={() => setIsModalActive(!isModalActive)}
              >
                Log in
              </a>
            </div>
          ) : (
            <div className="flex items-center lg:order-2">
              <a
                className="text-gray-800 text-white hover:bg-gray-50 hover:text-slate-900 hover:cursor-pointer focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                onClick={() => logout()}
              >
                Log out
              </a>
            </div>
          )}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            {/* <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
      {isModalActive && <LoginModal setIsModalActive={setIsModalActive} />}
    </header>
  );
};

export default Navbar;
