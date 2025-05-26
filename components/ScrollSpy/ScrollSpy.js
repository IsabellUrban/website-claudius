import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    function onScroll() {
      for (let index = sectionIds.length - 1; index >= 0; index--) {
        const section = document.getElementById(sectionIds[index]);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= offset) {
            setActiveId(`#${sectionIds[index]}`);
            break;
          }
        }
      }
    }


    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
      onScroll();

      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [sectionIds, offset]);

  return activeId;
}
