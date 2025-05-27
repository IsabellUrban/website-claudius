import styled from "styled-components";
import Headline from "../Headline/Headline";
import { motion } from "framer-motion";
import Mail from "@/public/icons/Mail.svg";
import Linkedin from "@/public/icons/Linkedin.svg";
import Imdb from "@/public/icons/imdb.svg";
import Vimeo from "@/public/icons/vimeo.svg";

export default function Contact() {
  return (
    <ContactSection id="contact">
      <StyledContainer>
        <Headline headline={"contact"} />
        <ContactWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StyledItemWrapper href="mailto:mail@claudiusurban.com">
              <ImageWrapper>
                <Mail alt="Mail Icon" width="100%" height="100%" />
              </ImageWrapper>
            </StyledItemWrapper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StyledItemWrapper
              href="https://www.linkedin.com/in/claudius-urban-30a0011/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageWrapper>
                <Linkedin alt="Linkedin Icon" width="100%" height="100%" />
              </ImageWrapper>
            </StyledItemWrapper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.75 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <StyledItemWrapper
              href="https://www.imdb.com/de/name/nm1381907/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageWrapper>
                <Imdb alt="Imdb Icon" width="100%" height="100%" />
              </ImageWrapper>
            </StyledItemWrapper>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <StyledItemWrapper
              href="https://vimeo.com/user12349902"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageWrapper>
                <Vimeo alt="Vimeo Icon" width="100%" height="100%" />
              </ImageWrapper>
            </StyledItemWrapper>
          </motion.div>
        </ContactWrapper>
      </StyledContainer>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  background-color: transparent;
  padding: 0rem 0rem 4rem 0rem;
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  height: 60vh;
`;

const StyledText = styled.a`
  font: var(--subheadline);
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const StyledItemWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;
  width: 50px;
  height: 50px;
  background-color: var(--yellow);
  color: var(--black);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--black);
    color: var(--yellow);

    ${StyledText} {
      color: var(--yellow);
    }
  }
  @media (min-width: 768px) {
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 20px;
  height: 20px;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;

  @media (min-width: 768px) {
    max-width: 800px;
    padding: 1rem;
  }
`;
