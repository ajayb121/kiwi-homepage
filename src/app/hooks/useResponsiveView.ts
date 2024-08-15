import { useState, useEffect } from "react";

function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const useResponsiveView = (
  breakpoint: number = 600,
  throttleTime: number = 200
): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsMobile(window.innerWidth <= breakpoint);
    }, throttleTime);

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint, throttleTime]);

  return isMobile;
};

export default useResponsiveView;
