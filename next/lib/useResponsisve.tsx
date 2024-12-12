import { useState, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";

const breakpointMobile = 910;
const breakpointTablet = 1200;

function useResponsive() {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: breakpointMobile,
  });

  const isTablet = useMediaQuery({
    minWidth: breakpointMobile,
    maxWidth: breakpointTablet,
  });

  const isDesktop = useMediaQuery({
    minWidth: breakpointTablet,
  });

  useLayoutEffect(() => {
    if (typeof window !== "undefined") setIsClient(true);
  }, []);

  return {
    isDesktop: isClient ? isDesktop : false,
    isTablet: isClient ? isTablet : false,
    isMobile: isClient ? isMobile : true, // default render on server
    isClient,
    isServer: !isClient,
  };
}

export default useResponsive;
