import Layout from "@/components/Layout/Layout";
import GlobalStyle from "../styles";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  
  //NEU: funktioniert aber nicht wie gewünscht
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
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

