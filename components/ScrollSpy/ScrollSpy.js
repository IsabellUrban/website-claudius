import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    function onScroll() {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= offset) {
            setActiveId(`#${sectionIds[i]}`);
            break;
          }
        }
      }
    }

    // Sicherstellen, dass window verfügbar ist
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
      onScroll();

      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [sectionIds, offset]);

  return activeId;
}
