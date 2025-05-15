import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [activeLink, setActiveLink] = useState("#");
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath.split("#")[0];
    setActiveLink(
      path +
        (router.asPath.includes("#") ? `#${router.asPath.split("#")[1]}` : "")
    );
  }, [router.asPath]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveLink(`/${id ? `#${id}` : ""}`);
          }
        });
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
