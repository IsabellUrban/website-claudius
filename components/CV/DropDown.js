import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data-projects-02";
import { experience } from "@/lib/data-experience";
import ExperienceSection from "./ExperienceSection";
import PosterModal from "./PosterModal";
import EducationSection from "./EducationSection";
import AdditionalInfoSection from "./AdditionalInfoSection";

export default function DropDown({ onToggleSection, isActiveSection, isOverlayActive, onSectionClose }) {
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

        <AnimatePresence
          initial={false}
          mode="sync"
          onExitComplete={() => {
            onSectionClose();
          }}
        >
          {isActiveSection === "Professional Experience" && (
            <StyledBackground
              key="professional"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7 }}
            >
              <ExperienceSection
                experience={experience}
                onProjectClick={handleProjectClick}
              />
            </StyledBackground>
          )}
        </AnimatePresence>

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
        <AnimatePresence
          initial={false}
          mode="sync"
          onExitComplete={() => {
            onSectionClose();
          }}
        >
          {isActiveSection === "Education" && (
            <StyledBackground
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <EducationSection />
            </StyledBackground>
          )}
        </AnimatePresence>
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
        <AnimatePresence
          initial={false}
          mode="sync"
          onExitComplete={() => {
            onSectionClose();
          }}
        >
          {isActiveSection === "Additional Information" && (
            <StyledBackground
              key="additional"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <AdditionalInfoSection />
            </StyledBackground>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  width: 80%;
  background-color: var(--black);
  z-index: 10;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
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
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StyledBackground = styled(motion.div)`
  position: relative;
  left: 0;
  width: 100%;
  overflow: hidden;
  background-color: var(--black);
  opacity: 0;
  z-index: 10;
  padding: 0rem 2rem;
  max-height: 60vh;
  overflow-y: auto;
`;