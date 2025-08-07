import { throttle } from "lodash";
import { useEffect, useState } from "react";

const useScrollStart = () => {
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsStart(window.pageYOffset > 10);

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      removeEventListener("scroll", throttledHandleScroll);
    };
  });

  return isStart;
};
export default useScrollStart;
