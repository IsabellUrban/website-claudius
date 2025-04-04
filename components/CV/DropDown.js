import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data-projects-02";
import { experience } from "@/lib/data-experience";
import ExperienceSection from "./ExperienceSection";
import PosterModal from "./PosterModal";
import EducationSection from "./EducationSection";
import AdditionalInfoSection from "./AdditionalInfoSection";

export default function DropDown() {
const [isActiveSection, setIsActiveSection] = useState(null);
const [selectedProject, setSelectedProject] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);



  function handleToggleSection(section) {
    setIsActiveSection(isActiveSection === section ? null : section);
  }

function handleProjectClick(company, cvRole) {
  const rolesToMatch = cvRole.split(", ").map((cvRole) => cvRole.trim());

  const filteredProjects = projects.filter((project) => {
   const projectCvRoles =
     project.jobrole && project.jobrole.cvRole
       ? project.jobrole.cvRole.split(", ").map((cvRole) => cvRole.trim())
       : [];

    return (
      project.company === company &&
      rolesToMatch.some((cvRole) => projectCvRoles.includes(cvRole))
    );
  });
console.log("Filtered Projects:", filteredProjects);
  setSelectedProject(filteredProjects);
  setIsModalOpen(true);
}

  return (
    <>
      <Container>
        <TextWrapper style={{ borderBottom: "2px solid var(--yellow)" }}>
          <StyledButton
            onClick={() => handleToggleSection("Professional experience")}
            aria-label="Open Section"
            role="button"
          >
            Professional experience
          </StyledButton>
        </TextWrapper>
        <StyledBackground
          initial={{ height: 0, opacity: 0 }}
          animate={
            isActiveSection === "Professional experience"
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ExperienceSection
            experience={experience}
            onProjectClick={handleProjectClick}
          />

          <TextWrapper
            style={{
              borderTop: "2px solid var(--yellow)",
              marginLeft: "-2rem",
              width: "calc(100% + 4rem)",
            }}
          >
            <StyledButton
              onClick={() => handleToggleSection("Education")}
              aria-label="Open Section"
              role="button"
            >
              Education
            </StyledButton>
          </TextWrapper>
          <TextWrapper
            style={{
              borderTop: "2px solid var(--yellow)",
              marginLeft: "-2rem",
              width: "calc(100% + 4rem)",
            }}
          >
            <StyledButton
              onClick={() => handleToggleSection("Additional Information")}
              aria-label="Open Section"
              role="button"
            >
              Additional Information
            </StyledButton>
          </TextWrapper>
        </StyledBackground>
        <PosterModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      </Container>
      <Container>
        <TextWrapper style={{ borderBottom: "2px solid var(--yellow)" }}>
          <StyledButton
            onClick={() => handleToggleSection("Education")}
            aria-label="Open Section"
            role="button"
          >
            Education
          </StyledButton>
        </TextWrapper>
        <StyledBackground
          initial={{ height: 0, opacity: 0 }}
          animate={
            isActiveSection === "Education"
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <EducationSection />
        
          <TextWrapper
            style={{
              borderTop: "2px solid var(--yellow)",
              marginLeft: "-2rem",
              width: "calc(100% + 4rem)",
            }}
          >
            <StyledButton
              onClick={() => handleToggleSection("Additional Information")}
              aria-label="Open Section"
              role="button"
            >
              Additional Information
            </StyledButton>
          </TextWrapper>
        </StyledBackground>
      </Container>
      <Container>
        <TextWrapper>
          <StyledButton
            onClick={() => handleToggleSection("Additional Information")}
            aria-label="Open Section"
            role="button"
          >
            Additional Information
          </StyledButton>
        </TextWrapper>
        <StyledBackground
          initial={{ height: 0, opacity: 0 }}
          animate={
            isActiveSection === "Additional Information"
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
<AdditionalInfoSection />
        </StyledBackground>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  width: 60%;
  background-color: var(--black);
`;

const TextWrapper = styled.div`
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
  text-transform: uppercase;

  &:hover {	
    cursor: pointer;	
    color: var(--yellow);	
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StyledBackground = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  overflow: hidden;
  background-color: var(--black);
  opacity: 0;
  z-index: 3;
  padding: 0rem 2rem;
`;

