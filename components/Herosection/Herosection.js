import styled from "styled-components";
import Slideshow from "./Slideshow";
import Textanimation from "./Textanimation";


export default function Herosection() {
  return (
    <HeroContainer>
      <Slideshow />
      <TextWrapper>
        <Textanimation />
      </TextWrapper>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
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

const TextWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;