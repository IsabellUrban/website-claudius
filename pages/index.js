
import Header from "@/components/Header/Header.js";
import Herosection from "@/components/Herosection/Herosection.js";
import Aboutsection from "@/components/Aboutsection/Aboutsection.js";
import CV from "@/components/CV/CV";
import ReelsSection from "@/components/ReelsSection/ReelsSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <Herosection />
      <Aboutsection />
      <CV />
      <ReelsSection />
    </>
  );
};


