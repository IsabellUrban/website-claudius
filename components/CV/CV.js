import styled from "styled-components";
import DropDown from "./DropDown";
import Headline from "@/components/Headline/Headline";
import { useState, useRef} from "react";

export default function CV() {
  const [isActiveSection, setIsActiveSection] = useState(null);
  const containerRef = useRef(null);

  function handleToggleSection(section) {
    setIsActiveSection((prevSection) => {
      const newSection = prevSection === section ? null : section;
      return newSection;
    });
  }

  function handleCloseActiveSection() {
    console.log("Closing active section:", isActiveSection);
    setIsActiveSection(null);
  }

  function handleClose() {
    handleCloseActiveSection();
    handleToggleSection(null);

    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 600);
  }

  return (
    <>
      <CVSection id="cv">
        <StyledContainer ref={containerRef}>
          <Headline headline={"cv"} />
          {isActiveSection && (
            <Overlay
              onClick={handleClose}
              aria-label="Close Section"
              role="button"
            />
          )}
          <DropDown
            onToggleSection={handleToggleSection}
            isActiveSection={isActiveSection}
            isOverlayActive={!!isActiveSection}
          />
        </StyledContainer>
      </CVSection>
    </>
  );
}

const CVSection = styled.section`
  background-color: transparent;
  padding: 4rem 0rem 4rem 0rem;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (min-width: 768px) {
    padding-top: 105px;
    
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 5;
  cursor: pointer;
  pointer-events: all;
`;