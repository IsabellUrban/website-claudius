import styled from "styled-components";
import Slideshow from "./Slideshow";
import Textanimation from "./Textanimation";


export default function Herosection() {
  return (
    <HeroContainer>
      <Slideshow />
      <Textanimation />
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
    height: 80vh;
  }
`;