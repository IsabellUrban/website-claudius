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
          <StyledYear>SINCE 2025</StyledYear>
          <StyledText>
            Animation Supervisor <br />
            Trixter Film GmbH, Berlin, Germany
          </StyledText>
          <StyledList>
            <li>
              Leading animators, providing creative input and technical support
            </li>
            <li>Rig, Tool and Pipeline Development</li>
            <li>Animation Training</li>
            <li>Recruitment</li>
            <li>Character animation and Previs for Feature Films and Series</li>
            <li>Client Calls</li>
          </StyledList>

          <StyledYear>2022-2025</StyledYear>
          <StyledText>
            Head of Animation <br /> Trixter Film GmbH, Berlin, Germany
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
            <li>Recruitment</li>
            <li>
              Character animation, Previs and Supervision for Feature Films and
              Series
            </li>
            <li>Client Calls</li>
          </StyledList>

          <StyledYear>2018-2022</StyledYear>
          <StyledText>
            Animation Supervisor <br /> Trixter Film GmbH, Berlin, Germany
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

          <StyledYear>2017-2018</StyledYear>
          <StyledText>
            Lead Animator <br />
            Trixter Film GmbH, Berlin, Germany
          </StyledText>
          <StyledList>
            <li>Leading animators</li>
            <li>Rig, Tool and Pipeline Development</li>
            <li>Character animation for Feature Films</li>
            <li>Client Calls</li>
          </StyledList>

          <StyledYear>2016-2017</StyledYear>
          <StyledText>
            Senior Character Animator
            <br /> Method Studios, Vancouver BC, Canada
          </StyledText>
          <StyledList>
            <li>Character animation for Feature Films</li>
          </StyledList>

          <StyledYear>2013-2016</StyledYear>
          <StyledText>
            Character Animator and Previs Artist
            <br /> Weta Digital, Wellington, NZ
          </StyledText>
          <StyledList>
            <li>Character animation for Feature Films</li>
          </StyledList>

          <StyledYear>2013</StyledYear>
          <StyledText>
            Senior Character Animator
            <br /> Yager Productions GmbH, Berlin, Germany
          </StyledText>
          <StyledList>
            <li>Cinematic character animation for the game “Dead Island 2”</li>
            <li>Working with MOCAP-data</li>
          </StyledList>

          <StyledYear>2012-2013</StyledYear>
          <StyledText>
            Lead Animator
            <br /> Trixter Film GmbH, Munich, Germany
          </StyledText>
          <StyledList>
            <li>Character animation for the Feature Film “Iron Man 3”</li>
            <li>Leading animators</li>
          </StyledList>

          <StyledYear>2012</StyledYear>
          <StyledText>
            Senior Animator
            <br /> Pixomondo, Berlin, Germany
          </StyledText>
          <StyledList>
            <li>
              Hardsurface animation and Digital Doubles for the Feature Film
              “Star Trek into Darkness”
            </li>
          </StyledList>

          <StyledText>
            Senior Character Animator
            <br /> Pixomondo, Hamburg, Germany
          </StyledText>
          <StyledList>
            <li>Character animation for the commercial “Lidl Sinnesreise”</li>
            <li>Character development</li>
          </StyledList>

          <StyledYear>2011</StyledYear>
          <StyledText>
            Senior Character Animator
            <br /> Yager Development GmbH, Berlin, Germany
          </StyledText>
          <StyledList>
            <li>
              Cinematic character animation for the game “Spec Ops: The Line”
            </li>
            <li>Working with MOCAP-data</li>
          </StyledList>

          <StyledText>
            Character Animator
            <br /> Double Negative, London, UK
          </StyledText>
          <StyledList>
            <li>Character animation for the Feature Film “John Carter” </li>
            <li>Leading animators</li>
            <li>Working with MOCAP-data</li>
          </StyledList>

          <StyledYear>2010</StyledYear>
          <StyledText>
            Senior Character Animator
            <br /> Animationsfabrik GmbH, Hamburg, Germany
          </StyledText>
          <StyledList>
            <li>Character animation for the commercial “DFA Zocken”</li>
            <li>Character animation for the commercial “Ferrero Eieruhr”</li>
            <li>
              Character animation for the commercial “Ferrero
              Basiskommunikation”
            </li>
            <li>
              Character animation for the commercial “Mueller, Der Joghurt mit
              der Ecke, Ecki und Eckhard”
            </li>
          </StyledList>

          <StyledText>
            Senior Character Animator
            <br /> Animal Logic, Sydney, Australia
          </StyledText>
          <StyledList>
            <li>
              Character animation for the animated Feature Film “Legend of the
              Guardians - The Owls of Ga`hoole”
            </li>
          </StyledList>

          <StyledYear>2009-2010</StyledYear>
          <StyledText>
            Senior Character Animator
            <br />
            Yager Development GmbH, Berlin, Germany
          </StyledText>
          <StyledList>
            <li>
              Ingame and sequence character animation for the game “Spec Ops:
              The Line”
            </li>
            <li>Leading animators</li>
            <li>Directing ingame MoCap shots</li>
            <li>Development of sequence production pipeline</li>
            <li>Working with MOCAP-data</li>
          </StyledList>

          <StyledYear>2009</StyledYear>
          <StyledText>
            Character Animator
            <br />
            Kingz Entertainment Gbr, Cologne, Germany
          </StyledText>
          <StyledList>
            <li>
              Character animation for the commercial “Schluss mit billigen
              Tricks”
            </li>
          </StyledList>

          <StyledYear>2008</StyledYear>
          <StyledText>
            Character Animator
            <br />
            Yager Development GmbH, Berlin, Germany
          </StyledText>
          <StyledList>
            <li>
              Ingame character animation for the game “Spec Ops: The Line”
            </li>
            <li>Working with MOCAP-data</li>
          </StyledList>

          <StyledText>
            Character Animator
            <br />
            Unexpected GmbH, Stuttgart, Germany
          </StyledText>
          <StyledList>
            <li>Character animation for the Image Film “Bosch ESP8T&VAF”</li>
            <li>Character animation for the Image Film “Blum-Servodrive”</li>
          </StyledList>

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
              foundation courses in film and media: scriptwriting,
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
          <StyledYear>TEACHING</StyledYear>
          <StyledText>2004-2006</StyledText>
          <StyledList>
            <li>
              Teaching children at the "Kinderfilmhaus Ludwigsburg" in animation
              and vfx
            </li>
          </StyledList>

          <StyledText>2001</StyledText>
          <StyledList>
            <li>
              Visiting lecture at the "HFF Potsdam Babelsberg" about interactive
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

