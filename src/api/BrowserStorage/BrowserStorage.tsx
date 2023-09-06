import { Pages } from "@/src/common/types";

export const savePageNameToLocalStorage = (pageName: Pages) => {
  localStorage.setItem("currentPage", pageName);
};

// Function to retrieve page name from local storage
export const getPageNameFromLocalStorage = () => {
  return localStorage.getItem("currentPage") || ""; // Default to an empty string if not found
};
