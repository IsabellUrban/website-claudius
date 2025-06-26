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
  padding: 1rem 0rem 1rem 0rem;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 4rem 0rem 4rem 0rem;
  }
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

export const CVGrid = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem 5rem;
  }
`;

export const StyledList = styled.ul`
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

export const StyledYear = styled.p`
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

export const StyledSubheadlineModal = styled.h3`
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

export const StyledTextModal = styled.p`
  font: var(--bodytext);
  color: var(--white);
  text-align: left;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const TextWrapperModal = styled.div`
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

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: transparent;
  z-index: 2;
  cursor: pointer;
  pointer-events: all;
`;