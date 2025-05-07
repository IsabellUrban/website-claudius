import styled from "styled-components";
import Image from "next/image";

export default function PosterGrid({sortedProjects}) {

    return (
      <PosterWrapper $posterCount={sortedProjects.length}>
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
            <StyledJobtitle>{project.jobrole.role}</StyledJobtitle>
          </StyledGallery>
        ))}
      </PosterWrapper>
    );

};

const PosterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: start;
  padding-top: 2rem;
  width: 100%;
  min-height: 30vh;

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
        : "repeat(6, 1fr)"};
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

const StyledJobtitle = styled.p`
  font: var(--subheadline);
  color: var(--white);
  font-size: 0.75rem;
  line-height: 1.5;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 0.85rem;
  }
`;