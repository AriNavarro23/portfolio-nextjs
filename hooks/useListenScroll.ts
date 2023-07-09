"use client";

import { useEffect, useState } from "react";

const useScrollListener = () => {
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);

    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  return { showShadow };
};

export default useScrollListener;
