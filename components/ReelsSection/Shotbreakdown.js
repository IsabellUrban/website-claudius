import styled from "styled-components";
import { motion } from "framer-motion";
import { animation } from "@/lib/data-shotbreakdown";
import Link from "next/link";

export default function Shotbreakdown({onToggleSection, isActiveSection, handleJumpToTime}) {

  return (
    <>
      <Container>
        <TextWrapper style={{ borderTop: "2px solid var(--yellow)" }}>
          <StyledButton
            onClick={() => onToggleSection("Shot Breakdown")}
            aria-label="Open Section"
            role="button"
          >
            Shot Breakdown
          </StyledButton>
        </TextWrapper>
        <StyledBackground
          initial={{ height: 0, opacity: 0 }}
          animate={
            isActiveSection === "Shot Breakdown"
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Content>
            {animation.map((animationItem, animationIndex) => (
              <div key={animationIndex}>
                <TimecodeLink
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    handleJumpToTime(animationItem.timecode);
                  }}
                >
                  <StyledList>
                    <li>{animationItem.owntask}</li>
                  </StyledList>
                </TimecodeLink>
              </div>
            ))}
          </Content>
        </StyledBackground>
      </Container>
    </>
  );
}

const Container = styled.div`
position: relative;
width: 100%;
background-color: var(--black);
margin-top: -2px;
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
  top: 100%;
  left: 0;
  width: 100%;
  overflow: hidden;
  background-color: var(--black);
  opacity: 0;
  z-index: 3;
  /* padding: 0rem 0.5rem; */

  @media (min-width: 768px) {
    padding: 0rem 1rem;
  }
`;

const Content = styled.div`
  color: var(--white);
  padding-bottom: 1rem;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const TimecodeLink = styled(Link)`
  text-decoration: none;
  color: var(--white);

  :hover {
    color: var(--yellow);
    font-weight: 900;
  }
`;
const StyledList = styled.ul`
font: var(--bodytext);
color: var(--white);
font-size: 0.75rem;
line-height: 1.5;
text-align: left;
padding: 0.5rem 1.5rem;
list-style-type: disc;


@media (min-width: 768px) {
font-size: 0.8rem;
padding: 0.5rem 2rem;
}
`;
