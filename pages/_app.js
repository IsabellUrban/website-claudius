import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {

const [isActiveSection, setIsActiveSection] = useState(null);

function handleToggleSection(section) {
  setIsActiveSection((prevSection) => {
    const newSection = prevSection === section ? null : section;
    console.log("Neuer Zustand:", newSection);
    return newSection;
  });
}


  return (
    <>
    <Layout>
      <GlobalStyle />
      <Component {...pageProps}
      onToggleSection={handleToggleSection}
      isActiveSection={isActiveSection} />
    </Layout>
    </>
  );
}
