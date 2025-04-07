import styled from "styled-components";
import DropDown from "./DropDown";
import Headline from "@/components/Headline/Headline";

export default function CV({ handleToggleSection, isActiveSection, handleCloseActiveSection }) {

  return (
    <>
      <CVSection>
        <StyledContainer>
          <Headline headline={"cv"} />
          {isActiveSection && (
            <Overlay
              onClick={handleCloseActiveSection}
              aria-label="Close Section"
              role="button"
            />
          )}
          <DropDown
            onToggleSection={handleToggleSection}
            isActiveSection={isActiveSection}
          />
        </StyledContainer>
      </CVSection>
    </>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(255, 0, 0, 0.5);
  z-index: 5;
  cursor: pointer;
  pointer-events: all;
`;
