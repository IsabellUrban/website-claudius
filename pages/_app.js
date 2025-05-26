import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import { useState } from "react";


export default function App({ Component, pageProps }) {
/*   const [activeLink, setActiveLink] = useState("/#home");

  function handleSetActiveLink(link) {
    setActiveLink(link);
  } */

  return (
    <>
      <Layout /* activeLink={activeLink} handleSetActiveLink={handleSetActiveLink} */>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
