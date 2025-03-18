import Header from "@/components/Header/Header.js";
import Herosection from "@/components/Herosection/Herosection.js";
import Aboutsection from "@/components/Aboutsection/Aboutsection.js";
import CV from "@/components/CV/CV";

export default function HomePage() {
  return (
    <div>
      
      <Header />
      <Herosection />
      <Aboutsection />
      <CV />
    </div>
  );
}
