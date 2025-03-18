import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

export default function DropDown() {
  const [isActiveSection, setIsActiveSection] = useState(null);

  function handleToggleSection(section) {
    setIsActiveSection(isActiveSection === section ? null : section);
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
          <StyledText>
            Current <br /> Head of Animation Trixter Film GmbH, Berlin, Germany
          </StyledText>
          <StyledList>
            <li>Animation Team Management</li>
            <li>Bidding</li>
            <li>
              Leading animators, Leads and Supervisors, providing creative input
              and technical support
            </li>
            <li>Rig, Tool and Pipeline Development</li>
            <li>Animation Training</li>
            <li>Animation Training</li>
            <li>Recruitment</li>
            <li>
              Character animation, Previs and Supervision for Feature Films and
              Series
            </li>
            <li>Client Calls</li>
          </StyledList>

          <StyledText>
            2018-22 <br /> Animation Supervisor Trixter Film GmbH, Berlin,
            Germany
          </StyledText>
          <StyledList>
            <li>
              Leading animators, providing creative input and technical support
            </li>
            <li>Rig, Tool and Pipeline Development</li>
            <li>Animation Training</li>
            <li>Recruitment</li>
            <li>
              Character animation and Previs for Feature Films, Series and
              Commercials
            </li>
            <li>Client Calls</li>
          </StyledList>

          <StyledText>
            2017-18 <br /> Lead Animator Trixter Film GmbH, Berlin, Germany
          </StyledText>
          <StyledList>
            <li>Leading animators</li>
            <li>Rig, Tool and Pipeline Development</li>
            <li>Character animation for Feature Films</li>
            <li>Client Calls</li>
          </StyledList>

          <StyledText>
            2016-17 <br /> Senior Character Animator Method Studios, Vancouver
            BC, Canada
          </StyledText>
          <StyledList>
            <li>Character animation for Feature Films</li>
          </StyledList>

          <StyledText>
            2013-16 <br /> Character Animator and Previs Artist Weta Digital,
            Wellington, NZ
          </StyledText>
          <StyledList>
            <li>Character animation for Feature Films</li>
          </StyledList>

          <StyledText>
            2013 <br /> Senior Character Animator Yager Productions GmbH,
            Berlin, Germany
          </StyledText>
          <StyledList>
            <li>Cinematic character animation for the game “Dead Island 2”</li>
            <li>Working with MOCAP-data</li>
          </StyledList>

          <TextWrapper style={{ borderTop: "2px solid var(--yellow)", marginLeft: "-2rem", width: "calc(100% + 4rem)" }}> 
            <StyledButton
              onClick={() => handleToggleSection("Education")}
              aria-label="Open Section"
              role="button"
              /* style={{ marginLeft: "-2rem" }} */
            >
              Education
            </StyledButton>
          </TextWrapper>
        </StyledBackground>
      </Container>
      <Container>
        <TextWrapper>
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
          <StyledText>
            2018-22 <br /> Animation Supervisor Trixter Film GmbH, Berlin,
            Germany
          </StyledText>
          <StyledList>
            <li>
              Leading animators, providing creative input and technical support
            </li>
            <li>Rig, Tool and Pipeline Development</li>
            <li>Animation Training</li>
            <li>Recruitment</li>
            <li>
              Character animation and Previs for Feature Films, Series and
              Commercials
            </li>
            <li>Client Calls</li>
          </StyledList>

          <StyledText>
            2017-18 <br /> Lead Animator Trixter Film GmbH, Berlin, Germany
          </StyledText>
          <StyledList>
            <li>Leading animators</li>
            <li>Rig, Tool and Pipeline Development</li>
            <li>Character animation for Feature Films</li>
            <li>Client Calls</li>
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

const StyledText = styled.p`
  font: var(--subheadline);
  color: var(--white);
  line-height: 1.5;
  text-align: left;
  padding-top: 1rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding-top: 2rem;
  }
`;

const StyledList = styled.ul`
  font: var(--bodytext);
  color: var(--white);
  line-height: 1.5;
  text-align: left;
  padding: 1rem 0rem;
  list-style-type: disc;
  margin-left: 1rem;
  
  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 0rem;
  }
  `;

