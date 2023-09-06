"use client";
import SidebarButtons from "../../_atoms/SidebarButtons/SidebarButtons";
import { HomeIcon, PlusIcon } from "@heroicons/react/24/solid";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Pages } from "@/src/common/types";

import { useSelectedPage } from "@/src/hooks/useSelectedPage";
import CreateTweet from "../../_atoms/CreateTweet/CreateTweet";
import { useUser } from "@/src/api/Context/UserContext";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const { retrieveUser } = useUser();
  const [active, setActive] = useState<Pages>();
  const [isModalActive, setIsModalActive] = useState(false);

  const { setSelectedPage } = useSelectedPage();

  const handleButtonClick = (page: Pages) => {
    switch (page) {
      case Pages.Home:
        router.push("/");
        setActive(Pages.Home);
    }
    setSelectedPage(page);
  };

  return (
    retrieveUser() && (
      <div
        className="sm:flex flex-col items-center xl:items-start
    xl:w-[340px] p-2 fixed h-full"
      >
        <div
          className="flex items-center justify-center w-14 h-14
      hoverAnimation p-0 xl:ml-24"
        >
          {/* <Image src={twitterIcon} width={30} height={30} alt={""} /> */}
        </div>
        <div className="space-y-4 mt-2 mb-2.5 xl:ml-24 flex flex-col justify-center hidden md:inline">
          <SidebarButtons
            text="Home"
            Icon={HomeIcon}
            active={active === Pages.Home}
            onClick={() => handleButtonClick(Pages.Home)}
          />
          <SidebarButtons
            text="Explore"
            Icon={HashtagIcon}
            active={active === Pages.Explore}
            onClick={() => setActive(Pages.Explore)}
          />
          <button
            className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white mt-5 rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]"
            onClick={() => setIsModalActive(!isModalActive)}
          >
            Tweet
          </button>
          <button
            className="xl:hidden w-auto h-auto p-3 bg-[#1d9bf0] text-white mt-5 flex items-center justify-center rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]"
            onClick={() => setIsModalActive(!isModalActive)}
          >
            <PlusIcon className="h-5 text-white" />
          </button>
        </div>
        {isModalActive && <CreateTweet setIsModalActive={setIsModalActive} />}
        <div className="mt-auto xl:ml-auto"></div>
      </div>
    )
  );
};

export default Sidebar;
