import styled from "styled-components";
import Image from "next/image";
import X from "@/public/icons/X.svg";

export default function PosterModal({ project, onClose, isOpen }) {
if (!isOpen || !project) return null;

const filteredProjects = project.filter((project) => !project.studentShow);
const sortedProjects = [...filteredProjects].sort(
  (a, b) => new Date(b.releasedate) - new Date(a.releasedate)
);

    return (
      <ModalOverlay onClick={onClose}>
        <ModalContent
          onClick={(event) => event.stopPropagation()}
          $postersCount={sortedProjects.length}
        >
          <IconWrapper onClick={onClose}>
            <StyledCloseIcon />
          </IconWrapper>
          <Wrapper>
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
        </ModalContent>
      </ModalOverlay>
    );
    };

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--black);
  padding: 20px;
  top: 9vh;
  min-width: 40%;
  max-width: 80%;
  width: ${({ $postersCount }) => ($postersCount === 1 ? "50%" : "70%")};
  height: auto;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  @media (min-width: 768px) {
    top: 9vh;
    width: ${({ $postersCount }) => ($postersCount === 1 ? "40%" : "80%")};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  z-index: 35;
`;

const StyledCloseIcon = styled(X)`
  display: flex;
  margin-right: 8px;
  width: 20px;
  height: 20px;
  fill: var(--yellow);
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
  flex-wrap: wrap;
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