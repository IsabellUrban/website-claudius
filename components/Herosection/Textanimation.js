import styled from "styled-components";
import { motion } from "framer-motion";



export default function Textanimation () {
return (
  <>
    <TextContainer>
        <TextWrapper>
      <StyledHeadline
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 4, ease: "easeInOut" }}
        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
      >
        award winning
      </StyledHeadline>
      <StyledText
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 4, ease: "easeInOut" }}
        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
      >
        Animator I Lead I Supervisor I Head of Animation
      </StyledText>
      </TextWrapper>
    </TextContainer>
  </>
);
};

const TextContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled.div`
text-align: left;
`;

const StyledText = styled(motion.h3)`
  font-size: 1.2rem;
  font-weight: 200;
  color: var(--white);
  text-transform: uppercase;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const StyledHeadline = styled(motion.h2)`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--yellow);
  text-transform: uppercase;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;