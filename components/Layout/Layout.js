import styled from "styled-components";
import ParallaxBackground from "../ParallaxBackground/ParallaxBackground";
import Image from "next/image";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children}) {
  return (
    <LayoutWrapper>
      <Header />
      <MobileBackground />
      <ParallaxBackground />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
display: flex;
position: relative;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
z-index: auto;
`;

const MainContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
position: relative;
z-index: 1;
`;

const MobileBackground = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url("/images/background-texture.jpg");
    background-repeat: repeat;
    background-size: auto;
    z-index: -1;
  }
`;

