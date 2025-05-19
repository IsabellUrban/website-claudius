import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import { useState, useEffect } from "react";


export default function App({ Component, pageProps }) {
  const [activeLink, setActiveLink] = useState("/#home");

  useEffect(() => {
    const sections = document.querySelectorAll("[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const id = visible.target.getAttribute("id");
          setActiveLink(`/${id ? `#${id}` : ""}`);
        }
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  function handleSetActiveLink(link) {
    setActiveLink(link);
  }

  return (
    <>
      <Layout activeLink={activeLink} handleSetActiveLink={handleSetActiveLink}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
