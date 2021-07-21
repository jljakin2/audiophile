// third-party
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // if the pathname changes, the component will scroll the user back up to the top of the page
  // without this, the components would just mount and the window would stay the same so you might change pages and stay at the bottom of the page
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
