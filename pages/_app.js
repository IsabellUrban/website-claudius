import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import { useState } from "react";

export default function App({ Component, pageProps }) {

const [isActiveSection, setIsActiveSection] = useState(null);

function handleToggleSection(section) {
  setIsActiveSection((prevSection) => {
    const newSection = prevSection === section ? null : section;
    return newSection;
  });
}

function handleCloseActiveSection() {
  console.log("Closing active section:", isActiveSection);
  setIsActiveSection(null);
}



  return (
    <>
      <Layout
        handleCloseActiveSection={handleCloseActiveSection}
        isActiveSection={isActiveSection}
      >
        <GlobalStyle />
        <Component
          {...pageProps}
          handleToggleSection={handleToggleSection}
          handleCloseActiveSection={handleCloseActiveSection}
          isActiveSection={isActiveSection}
        />
      </Layout>
    </>
  );
}
