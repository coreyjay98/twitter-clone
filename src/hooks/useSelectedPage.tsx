import { useState } from "react";
import { Pages } from "../common/types";

export interface SelectedPageHook {
  selectedPage: Pages;
  setSelectedPage: React.Dispatch<React.SetStateAction<Pages>>;
}

export const useSelectedPage = (page?: Pages) => {
  const [selectedPage, setSelectedPage] = useState<Pages>();
  if (page) {
    setSelectedPage(page);
  }
  return { selectedPage, setSelectedPage };
};
