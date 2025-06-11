import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
        setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }, 1);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    }
  }, []);


  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

