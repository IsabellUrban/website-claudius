import styled from "styled-components";
import Image from "next/image";
import X from "@/public/icons/X.svg";
import Modal from "@/components/Modal/Modal.js";
import { motion } from "framer-motion";
import { IconWrapper, StyledCloseIcon } from "@/styledComponents";

export default function PosterModal({ project, onClose, isOpen }) {
if (!isOpen || !project) return null;

const filteredProjects = project.filter((project) => !project.studentShow);
const sortedProjects = [...filteredProjects].sort(
  (a, b) => new Date(b.releasedate) - new Date(a.releasedate)
);

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <PosterModalContent
          $postersCount={sortedProjects.length}
          onClick={(event) => event.stopPropagation()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <IconWrapper onClick={onClose}>
            <StyledCloseIcon />
          </IconWrapper>
          <Wrapper $postersCount={sortedProjects.length}>
            {sortedProjects.map((project) => (
              <StyledGallery key={project.id}>
                <ImageWrapper>
                  <StyledPoster
                    src={project.poster}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </ImageWrapper>
                <StyledTitle>
                  {project.title} ({project.releasedate})
                </StyledTitle>
              </StyledGallery>
            ))}
          </Wrapper>
        </PosterModalContent>
      </Modal>
    );
    };



const PosterModalContent = styled(motion.div)`
  background: var(--black);
  width: 55%;
  height: auto;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  margin-top: 5rem;
  z-index: 10000;

  @media (min-width: 768px) {
    width: ${({ $postersCount }) =>
      $postersCount === 1 ? "20%" : $postersCount === 2 ? "35%" : $postersCount === 3 ? "35%" : $postersCount === 4 ? "60%" : "70%"};
      max-width: 900px;
      padding: 0rem 1rem;
  }

  @media (min-width: 1024px) {
    width: ${({ $postersCount }) =>
      $postersCount === 1 ? "18%" : $postersCount === 2 ? "30%" : $postersCount === 3 ? "45%" : $postersCount === 4 ? "66%" : "80%"};
      max-width: 900px;
      padding: 0rem 1rem;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: start;
  padding-top: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: ${({ $postersCount }) =>
      $postersCount === 1
        ? "1fr"
        : $postersCount === 2
        ? "repeat(2, 1fr)"
        : "repeat(3, 1fr)"};
}

  @media (min-width: 1024px) {
    grid-template-columns: ${({ $postersCount }) =>
      $postersCount === 1
        ? "1fr"
        : $postersCount === 2
        ? "repeat(2, 1fr)"
        : $postersCount === 3
        ? "repeat(3, 1fr)"
        : $postersCount === 4
        ? "repeat(4, 1fr)"
        : "repeat(5, 1fr)"};
  }
`;

const StyledGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  border: 2px solid var(--yellow);
`;

const StyledPoster = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
  
`;

const StyledTitle = styled.p`
  font: var(--subheadline);
  color: var(--white);
  font-size: 0.85rem;
  line-height: 1.5;
  text-align: center;
  padding-top: 1rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;