import styled from "styled-components";
import ParallaxBackground from "../ParallaxBackground/ParallaxBackground";
import Header from "../Header/Header";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <StyledBackgroundImage
        src="/images/background2.jpg"
        alt="Background Image"
        fill
        priority
      />
      <ParallaxBackground />
      <Header />
      <MainContent>{children}</MainContent>
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
