"use client";
import { useEffect, useMemo } from "react";

interface ScreenProperties {
  width: number;
  height: number;
}

const useScreenResize = (): ScreenProperties => {
  const screenSize = useMemo(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }, []);

  const handleResize = () => {
    screenSize.width = window.innerWidth;
    screenSize.height = window.innerHeight;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenResize;
