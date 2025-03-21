import styled from "styled-components";
import Image from "next/image";
import X from "@/public/icons/X.svg";

export default function PosterModal({ project, onClose, isOpen }) {
if (!isOpen || !project) return null;

    return (
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(event) => event.stopPropagation()}>
          <IconWrapper onClick={onClose}>
            <StyledCloseIcon />
          </IconWrapper>
          <StyledGallery>
            {project.map((project) => (
              <ImageWrapper key={project.id}>
                <StyledPoster
                  src={project.poster}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </ImageWrapper>
            ))}
          </StyledGallery>
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
  width: 50%;
  height: auto;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  @media (min-width: 768px) {
    top: 9vh;
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

const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
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

   &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;

const StyledPoster = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
  
`;