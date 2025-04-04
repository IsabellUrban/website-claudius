import styled from "styled-components";
import DropDown from "./DropDown";
import Headline from "@/components/Headline/Headline";

export default function CV({ onToggleSection, isActiveSection }) {

    function handleCloseActiveSection() {
      onToggleSection(null);
    }

  return (
    <CVSection>
      {isActiveSection && 
      <Overlay onClick={handleCloseActiveSection} />}

      <StyledContainer>
        <Headline headline={"cv"} />
        <DropDown
          onToggleSection={onToggleSection}
          isActiveSection={isActiveSection}
        />
      </StyledContainer>
    </CVSection>
  );
}

const CVSection = styled.section`
  background-color: transparent;
  padding: 4rem 0rem;
  width: 100%;
  position: relative;
`;

const StyledContainer = styled.div`
  position: relative;
  /* z-index: 4; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: transparent;
  z-index: 1;
  cursor: pointer;
  pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};
`;