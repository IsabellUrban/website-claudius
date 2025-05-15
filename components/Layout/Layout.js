import styled from "styled-components";
import ParallaxBackground from "../ParallaxBackground/ParallaxBackground";
import Image from "next/image";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children, activeLink, handleSetActiveLink }) {
  return (
    <LayoutWrapper>
      <Header
        activeLink={activeLink}
        handleSetActiveLink={handleSetActiveLink}
      />
      <StyledBackgroundImage
        src="/images/background2.jpg"
        alt="Background Image"
        fill
        priority
      />
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

const StyledBackgroundImage = styled(Image)`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: contain; 
background-repeat: repeat;
z-index: -1; 
`;

