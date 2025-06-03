import styled from "styled-components";
import Slideshow from "./Slideshow";
import { useEffect, useRef } from "react";

export default function Herosection() {


  //NEU: funktioniert aber nicht wie gewünscht
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current && typeof window !== "undefined") {
      
      setTimeout(() => {
      
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }, 50);
    }
  }, []);

  return (
    <HeroContainer id="home">
      <Slideshow />
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--black);
  padding-top: 12vh;

  @media (min-width: 768px) {
    height: 100vh;
  }
`;