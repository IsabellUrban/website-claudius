import { styled, css } from "styled-components";
import X from "@/public/icons/X.svg";
import { motion } from "framer-motion";


export const IconWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  z-index: 10;
`;

export const StyledCloseIcon = styled(X)`
  display: flex;
  margin-right: 8px;
  width: 20px;
  height: 20px;
  fill: var(--yellow);
`;

export const StyledSubheadline = styled.h3`
  font: var(--bodytext);
  font-weight: 700;
  color: var(--white);
  margin: 0;
  margin-top: 0.75rem;
  flex-grow: 1;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const StyledText = styled.p`
  font: var(--bodytext);
  text-align: left;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 2rem;

  @media (min-width: 768px) {
    max-width: 800px;
    padding: 1.5rem 3rem;
  }
`;

export const StyledSection = styled.section`
  background-color: transparent;
  padding: 4rem 0rem 4rem 0rem;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const StyledContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-top: 40px;
`;

export const ModalContainer = styled.div`
  background: var(--black);
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  margin-top: 10rem;
  margin-bottom: 5rem;
  padding: 2rem 1rem;
  z-index: 10000;
`;