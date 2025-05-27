import styled from "styled-components";
import DropDown from "./DropDown";
import Headline from "@/components/Headline/Headline";
import { useState, useRef, useEffect} from "react";

export default function CV() {
  const [isActiveSection, setIsActiveSection] = useState(null);
  const headlineRef = useRef(null);

  function handleToggleSection(section) {
    setIsActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  }

  useEffect(() => {
    if (!isActiveSection) {
      const timeout = setTimeout(() => {
        headlineRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [isActiveSection]);
  
  function handleClose() {
    setIsActiveSection(null);
  }

  function handleScrollToHeadline() {
    if (headlineRef.current) {
      headlineRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <>
      <CVSection id="cv" ref={headlineRef}>
        <StyledContainer>
          <Headline headline={"cv"} />

          <DropDown
            onToggleSection={handleToggleSection}
            isActiveSection={isActiveSection}
            isOverlayActive={!!isActiveSection}
            onSectionClose={handleScrollToHeadline}
          />
          {isActiveSection && (
            <Overlay
              onClick={handleClose}
              aria-label="Close Section"
              role="button"
            />
          )}
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
  padding-top: 40px;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 5;
  cursor: pointer;
  pointer-events: all;
  background-color: var(--white);
  opacity: 0.25;
`;