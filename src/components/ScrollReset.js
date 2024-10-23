import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollReset() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScrollResetOnReload = () => {
      window.scrollTo(0, 0);
    };

    // 'popstate' (triggered during refresh and back/forward navigation)
    window.addEventListener("popstate", handleScrollResetOnReload);

    handleScrollResetOnReload();

    return () => {
      window.removeEventListener("popstate", handleScrollResetOnReload);
    };
  }, []);

  return null;
}
