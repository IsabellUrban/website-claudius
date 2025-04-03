
import Header from "@/components/Header/Header.js";
import Herosection from "@/components/Herosection/Herosection.js";
import Aboutsection from "@/components/Aboutsection/Aboutsection.js";
import CV from "@/components/CV/CV";
import ReelsSection from "@/components/ReelsSection/ReelsSection";

export default function HomePage({onToggleSection, isActiveSection}) {
  return (
    <>
      <Header />
      <Herosection />
      <Aboutsection />
      <CV onToggleSection={onToggleSection} isActiveSection={isActiveSection} />
      <ReelsSection
        onToggleSection={onToggleSection}
        isActiveSection={isActiveSection}
      />
    </>
  );
};


