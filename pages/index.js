
import Header from "@/components/Header/Header.js";
import Herosection from "@/components/Herosection/Herosection.js";
import Aboutsection from "@/components/Aboutsection/Aboutsection.js";
import CV from "@/components/CV/CV";
import ReelsSection from "@/components/ReelsSection/ReelsSection";

export default function HomePage({handleToggleSection, isActiveSection, handleCloseActiveSection}) {
  return (
    <>
      <Header />
      <Herosection />
      <Aboutsection />
      <CV
        handleToggleSection={handleToggleSection}
        isActiveSection={isActiveSection}
        handleCloseActiveSection={handleCloseActiveSection}
      />
      <ReelsSection
        handleToggleSection={handleToggleSection}
        isActiveSection={isActiveSection}
      />
    </>
  );
};


