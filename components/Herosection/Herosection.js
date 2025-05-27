import styled from "styled-components";
import Slideshow from "./Slideshow";
import { motion } from "framer-motion";

export default function Herosection() {
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
  height: 50vh;
  overflow: hidden;
  background-color: var(--black);
  padding-top: 12vh;

  @media (min-width: 768px) {
    height: 100vh;
  }
`;