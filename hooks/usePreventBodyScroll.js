import { useEffect } from "react";

export default function usePreventBodyScroll(isActive) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Get the current scroll position immediately
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (isActive) {
      // Immediately set a style to freeze the scroll position visually
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll"; // Prevent layout shift from scrollbar disappearing

      // Store the position for later restoration
      document.body.dataset.scrollY = scrollY.toString();
    } else {
      // Restore normal scrolling behavior
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";

      // Get stored position
      const storedScrollY = parseInt(document.body.dataset.scrollY || "0", 10);

      // Clean up data attribute
      delete document.body.dataset.scrollY;

      // Use requestAnimationFrame to ensure the position is restored after styles are applied
      window.requestAnimationFrame(() => {
        window.scrollTo(0, storedScrollY);
      });
    }

    return () => {
      // Cleanup in case component unmounts while modal is open
      if (document.body.style.position === "fixed") {
        const storedScrollY = parseInt(
          document.body.dataset.scrollY || "0",
          10
        );

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflowY = "";
        delete document.body.dataset.scrollY;

        window.requestAnimationFrame(() => {
          window.scrollTo(0, storedScrollY);
        });
      }
    };
  }, [isActive]);
}
