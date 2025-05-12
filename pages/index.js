
import Header from "@/components/Header/Header.js";
import Herosection from "@/components/Herosection/Herosection.js";
import Aboutsection from "@/components/Aboutsection/Aboutsection.js";
import CV from "@/components/CV/CV";
import ReelsSection from "@/components/ReelsSection/ReelsSection";
import Filmography from "@/components/Filmography/Filmography";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Herosection />
      <Aboutsection />
      <CV />
      <ReelsSection />
      <Filmography />
      <Contact />
      <Footer />
    </>
  );
};


