import styled from "styled-components";
import { motion } from "framer-motion";



export default function Textanimation () {
return (
  <>
    <TextContainer>
      <StyledHeadline
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
      >
        award winning
      </StyledHeadline>
    </TextContainer>
    <TextContainer>
      <StyledText
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 4, ease: "easeInOut" }}
        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
      >
        Animator I Lead I Supervisor I Head of Animation
      </StyledText>
    </TextContainer>
  </>
);
};

const TextContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const StyledText = styled(motion.h3)`
  font-size: 2.5vh;
  font-weight: 400;
  color: var(--white);
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 4vh;
  }
`;

const StyledHeadline = styled(motion.h2)`
  font-size: 2vh;
  font-weight: 400;
  color: var(--yellow);
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 3vh;
  }
`;