import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data-projects";
import { experience } from "@/lib/data-experience";
import Link from "next/link";
import ExperienceSection from "./ExperienceSection";
import PosterModal from "./PosterModal";

export default function DropDown() {
const [isActiveSection, setIsActiveSection] = useState(null);
const [selectedProject, setSelectedProject] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);



  function handleToggleSection(section) {
    setIsActiveSection(isActiveSection === section ? null : section);
  }

function handleProjectClick(company, role) {
  const rolesToMatch = role.split(", ").map((role) => role.trim());

  const filteredProjects = projects.filter((project) => {
  const projectRoles = project.jobrole.role.split(", ").map((role) => role.trim());

    return (
      project.company === company &&
      rolesToMatch.some((role) => projectRoles.includes(role))
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
          <StyledYear>2004-2007</StyledYear>
          <StyledText>
            Institute for Animation, Visual Effects and Digital Postproduction,
            <br />
            Ludwigsburg, Germany
          </StyledText>
          <StyledList>
            <li>Graduate, Degree in Animation and VFX</li>
            <li>
              I worked independently as well as in groups on several short film
              projects and commercials
            </li>
            <li>
              Courses in character animation (Kyle Balda, Florian Wagner), VFX
              (Andrew Daffy) and acting (Ed Hooks)
            </li>
          </StyledList>

          <StyledYear>2002-2004</StyledYear>
          <StyledText>
            Filmakademie Baden-Württemberg
            <br />
            Ludwigsburg, Germany
          </StyledText>
          <StyledList>
            <li>Intermediate Diploma</li>
            <li>
              Foundation courses in film and media: scriptwriting,
              cinematography, editing, directing, production
            </li>
            <li>working on set (lighting, grip, assistent VFX-supervisor)</li>
          </StyledList>

          <StyledYear>1999-2000</StyledYear>
          <StyledText style={{ marginBottom: "1.75rem" }}>
            Social Service
            <br />
            Cath. Church St. Michael SZ-Lebenstedt, Germany
          </StyledText>

          <StyledYear>1988-1999</StyledYear>
          <StyledText>
            Bischöfliches Gymnasium Josephinum
            <br />
            Hildesheim, Germany
          </StyledText>
          <StyledList>
            <li>Graduate, Abitur</li>
          </StyledList>
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
          <StyledYear>PUBLIC RELATION</StyledYear>

          <TextWrapperLink href="https://www.trixter.de/the-3-working-lives-of-claudius-urban/">
            <StyledList style={{ marginBottom: "0" }}>
              <li>Article &quot;The 3 Working Lives of Claudius Urban&quot;</li>
            </StyledList>
          </TextWrapperLink>

          <TextWrapperLink href="https://projektzukunft.berlin.de/blog/news-detail/claudius-urban-animation-supervisor-bei-trixter-film-gmbh/">
            <StyledList style={{ paddingTop: "0" }}>
              <li> Short interview with Claudius Urban</li>
            </StyledList>
          </TextWrapperLink>

          <StyledText>2024</StyledText>
          <StyledList>
            <li>
              Speaker at FMX Stuttgart, Germany: Animation & Mocap Pipeline
              Secrets by Xsens
            </li>
          </StyledList>

          <StyledText>2023</StyledText>
          <StyledList>
            <li>
              Speaker at FMX Stuttgart, Germany: The Marsupial, The Myth, The
              Legend
            </li>
          </StyledList>

          <StyledText>2021</StyledText>
          <StyledList>
            <li>
              Speaker at FMX Stuttgart, Germany: Hopping for the Best: Die
              Känguru-Chroniken
            </li>
          </StyledList>

          <StyledText>2021</StyledText>
          <StyledList>
            <li>
              VES Award Nominee in the categorie Outstanding Animated Character
              in a Photoreal Feature for &quot;Die Känguru Chroniken&quot;
            </li>
          </StyledList>

          <StyledText>2020</StyledText>
          <StyledList>
            <li>
              Winner{" "}
              <span style={{ color: "gold" }}>German Film Award in Gold</span>{" "}
              in the categorie Best Visual Effects and Animation for &quot;Die
              Känguru Chroniken&quot;
            </li>
          </StyledList>

          <StyledText>2004-2006</StyledText>
          <StyledList>
            <li>
              Teaching children at the Kinderfilmhaus Ludwigsburg in animation
              and vfx
            </li>
          </StyledList>

          <StyledText>2001</StyledText>
          <StyledList>
            <li>
              Visiting lecture at the HFF Potsdam Babelsberg about interactive
              animation in games
            </li>
          </StyledList>

          <StyledYear>SKILLS</StyledYear>
          <StyledList>
            <li>ability to work collaboratively in a team environment</li>
            <li>ability to work under pressure</li>
            <li>
              professional experience in Life Action Features, Animated
              Features, Commercials and Games
            </li>
            <li>strong communication and time management skills</li>
            <li>
              huge variety in animation: digital doubles, characters and
              creatures, cartoony and photorealistic, keyframe and Motion
              Capture, acting as well as action movements including facial
              animation and lipsync
            </li>
          </StyledList>

          <StyledYear>SOFTWARE</StyledYear>
          <StyledList>
            <li>Maya</li>
            <li>3D Studio Max</li>
            <li>Motionbuilder</li>
            <li>Softimage XSI</li>
            <li>Photoshop</li>
            <li>Premiere</li>
          </StyledList>

          <StyledYear>LANGUAGES</StyledYear>
          <StyledList>
            <li>German (native)</li>
            <li>English (fluent)</li>
          </StyledList>

          <StyledYear>INTERESTS</StyledYear>
          <StyledList>
            <li>Film</li>
            <li>Sports: martial arts, soccer, basketball </li>
            <li>Music: drums, guitar</li>
          </StyledList>
        </StyledBackground>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  width: 80%;
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

const StyledYear = styled.p`
  font: var(--subheadline);
  color: var(--yellow);
  font-size: 0.85rem;
  line-height: 1.5;
  text-align: left;
  padding-top: 1rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledText = styled.p`
  font: var(--subheadline);
  color: var(--white);
  line-height: 1.5;
  text-align: left;
  

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledList = styled.ul`
  font: var(--bodytext);
  color: var(--white);
  font-size: 0.75rem;
  line-height: 1.5;
  text-align: left;
  padding-top: 1rem;
  list-style-type: disc;
  margin-left: 1rem;
  margin-bottom: 1.75rem;
  
  @media (min-width: 768px) {
    font-size: 0.8rem;
    padding-top: 0.5rem;
  }
`;

const TextWrapperLink = styled(Link)`
  text-decoration: underline var(--yellow);

  &:hover {
    cursor: pointer;
    color: var(--yellow);
  }
`;

