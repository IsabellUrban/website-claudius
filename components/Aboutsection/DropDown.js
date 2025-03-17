import styled from "styled-components";
import { useState } from "react";

export default function DropDown({ handleClick }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleButton() {
    setIsOpen(!isOpen);
  }

  function handleBackgroundClick() {
    setIsOpen(false);
  }

  return (
    <Container>
      <TextWrapper>
        <StyledButton
          onClick={handleToggleButton}
          aria-label="Open Menu"
          role="button"
        >
          SECTION 1
        </StyledButton>
      </TextWrapper>
      <StyledBackground $isOpen={isOpen} onClick={handleBackgroundClick}>
        <StyledText>
          Current Head of Animation Trixter Film GmbH, Berlin, Germany •
          Animation Team Management • Bidding • Leading animators, Leads and
          Supervisors, providing creative input and technical support • Rig,
          Tool and Pipeline Development • Animation Training • Recruitment •
          Character animation, Previs and Supervision for Feature Films and
          Series • Client Calls
        </StyledText>
      </StyledBackground>
      <TextWrapper>
        <StyledButton
          onClick={handleToggleButton}
          aria-label="Open Menu"
          role="button"
        >
          SECTION 2
        </StyledButton>
      </TextWrapper>
      <StyledBackground $isOpen={isOpen} onClick={handleBackgroundClick}>
        <StyledText>
          Current Head of Animation Trixter Film GmbH, Berlin, Germany •
          Animation Team Management • Bidding • Leading animators, Leads and
          Supervisors, providing creative input and technical support • Rig,
          Tool and Pipeline Development • Animation Training • Recruitment •
          Character animation, Previs and Supervision for Feature Films and
          Series • Client Calls
        </StyledText>
      </StyledBackground>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const TextWrapper = styled.div`
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  text-align: left;
  padding: 0.5rem;

  @media (min-width: 768px) {
    height: 4rem;
    padding: 2rem;
  }
`;

const StyledButton = styled.button`
  font-size: 1rem;
  background-color: var(--black);
  color: var(--white);
  border: none;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const StyledBackground = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: ${({ $isOpen }) => ($isOpen ? "350px" : "0")};
  overflow: hidden;
  background-color: var(--black);
  opacity: ${({ $isOpen }) => ($isOpen ? 0.95 : 0)};
  transform: scaleY(${({ $isOpen }) => ($isOpen ? 1 : 0)});
  transform-origin: top;
  transition: transform 0.5s ease, opacity 0.3s ease, max-height 0.5s ease;
  z-index: 3;
`;

const StyledText = styled.p`
  font-size: 0.75rem;
  color: var(--white);
  line-height: 1.5;
  text-align: left;
  padding: 1rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
    padding: 2rem;
  }
`;
