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
