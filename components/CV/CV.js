import styled from "styled-components";
import DropDown from "./DropDown";
import Headline from "@/components/Headline/Headline";
import { useState, useRef} from "react";
import { StyledContainer, StyledSection, Overlay } from "@/styledComponents";

export default function CV() {
  const [isActiveSection, setIsActiveSection] = useState(null);
  const headlineRef = useRef(null);

  function handleToggleSection(section) {
    setIsActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  }

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
      <StyledSection id="cv" ref={headlineRef}>
        <StyledContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5}}
        >
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
      </StyledSection>
    </>
  );
}