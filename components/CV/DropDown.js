import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data-projects-02";
import { experience } from "@/lib/data-experience";
import ExperienceSection from "./ExperienceSection";
import PosterModal from "./PosterModal";
import EducationSection from "./EducationSection";
import AdditionalInfoSection from "./AdditionalInfoSection";

export default function DropDown({ onToggleSection, isActiveSection, isOverlayActive }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setSelectedProject(filteredProjects);
    setIsModalOpen(true);
  }

  return (
    <>
      <Container>
        <TextWrapper>
          <StyledButton
            onClick={() => onToggleSection("Professional Experience")}
            aria-label="Open Section"
            role="button"
            $isOverlayActive={isOverlayActive}
          >
            Professional experience
          </StyledButton>
        </TextWrapper>
        <StyledBackground
          
          initial={{ height: 0, opacity: 0 }}
          animate={
            isActiveSection === "Professional Experience"
              ? { height: 4100, opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ExperienceSection
            experience={experience}
            onProjectClick={handleProjectClick}
          />
        </StyledBackground>
        <PosterModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      </Container>

      <Container>
        <TextWrapper style={{ borderTop: "2px solid var(--yellow)" }}>
          <StyledButton
            onClick={() => onToggleSection("Education")}
            aria-label="Open Section"
            role="button"
            $isOverlayActive={isOverlayActive}
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
        </StyledBackground>
      </Container>

      <Container>
        <TextWrapper style={{ borderTop: "2px solid var(--yellow)" }}>
          <StyledButton
            onClick={() => onToggleSection("Additional Information")}
            aria-label="Open Section"
            role="button"
            $isOverlayActive={isOverlayActive}
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
  width: 50%;
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
  pointer-events: ${({ $isOverlayActive }) =>
    $isOverlayActive ? "none" : "auto"};

  &:hover {
    cursor: pointer;
    color: var(--yellow);
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StyledBackground = styled(motion.div)`
  position: relative;
  top: 100%;
  left: 0;
  width: 100%;
  overflow: hidden;
  background-color: var(--black);
  opacity: 0;
  z-index: 10;
  padding: 0rem 2rem;
`;

