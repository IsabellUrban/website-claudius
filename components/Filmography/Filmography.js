import styled from "styled-components";
import Headline from "@/components/Headline/Headline";
import { projects } from "@/lib/data-projects-02";
import { useState } from "react";
import Image from "next/image";

export default function Filmography() {
  const [selectedJobRole, setSelectedJobRole] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);

  /* function handleToggleFilter(filter, setFilterState, isAll = false) {
    setFilterState((prevFilters) => {
      if (isAll) {
        // "All"-Button: Setze den Filter auf leer
        return [];
      } else {
        // Toggle-Logik für andere Buttons
        const isActive = prevFilters.includes(filter);
        if (isActive) {
          return prevFilters.filter((item) => item !== filter);
        } else {
          return [...prevFilters, filter];
        }
      }
    });
  } */

function handleToggleFilter(filter, setFilterState, isAll = false) {
  if (isAll) {
    // "All"-Button: Setze den Filter auf leer
    setFilterState([]);
  } else {
    // Setze den Filter auf den neuen Wert (nur ein Wert erlaubt)
    setFilterState([filter]);
  }
}

  const filteredProjects = projects.filter((project) => {
    const matchesJobRole =
      selectedJobRole.length === 0 ||
      selectedJobRole.includes(project.jobrole.category);
    const matchesGenre =
      selectedGenre.length === 0 ||
      selectedGenre.includes(project.genre.category);
    return matchesJobRole && matchesGenre;
  });

  const sortedProjects = [...filteredProjects].sort(
    (a, b) => new Date(b.releasedate) - new Date(a.releasedate)
  );

  return (
    <FilmographySection>
      <StyledContainer>
        <Headline headline={"filmography"} />
        {/* Job Role Buttons */}
        <ButtonWrapper>
          <ButtonWrapperJobRole>
            <TextWrapper>
              <StyledHeadline>JOB ROLE</StyledHeadline>
            </TextWrapper>
            <ButtonWrapper>
              <StyledButton
                onClick={() =>
                  handleToggleFilter("Animator", setSelectedJobRole)
                }
                $isActive={selectedJobRole.includes("Animator")}
                aria-label="Button Animator"
              >
                Animator
              </StyledButton>
              <StyledButton
                onClick={() => handleToggleFilter("Lead", setSelectedJobRole)}
                $isActive={selectedJobRole.includes("Lead")}
                aria-label="Button Lead"
              >
                Lead
              </StyledButton>
              <StyledButton
                onClick={() =>
                  handleToggleFilter("Supervisor", setSelectedJobRole)
                }
                $isActive={selectedJobRole.includes("Supervisor")}
                aria-label="Button Supervisor"
              >
                Supervisor
              </StyledButton>
              <StyledButton
                onClick={() => handleToggleFilter("HOD", setSelectedJobRole)}
                $isActive={selectedJobRole.includes("HOD")}
                aria-label="Button HOD"
              >
                HOD
              </StyledButton>
              <StyledButton
                onClick={() => handleToggleFilter("Misc", setSelectedJobRole)}
                $isActive={selectedJobRole.includes("Misc")}
                aria-label="Button Misc"
              >
                Misc
              </StyledButton>
              <StyledButton
                onClick={() =>
                  handleToggleFilter("All", setSelectedJobRole, true)
                }
                $isActive={selectedJobRole.length === 0}
                aria-label="Button All Job Roles"
              >
                All
              </StyledButton>
            </ButtonWrapper>
          </ButtonWrapperJobRole>
          {/* Genre Buttons */}
          <ButtonWrapperGenre>
            <TextWrapper>
              <StyledHeadline>GENRE</StyledHeadline>
            </TextWrapper>
            <ButtonWrapper>
              <StyledButton
                onClick={() => handleToggleFilter("Film", setSelectedGenre)}
                $isActive={selectedGenre.includes("Film")}
                aria-label="Button Film"
              >
                Film
              </StyledButton>
              <StyledButton
                onClick={() =>
                  handleToggleFilter("Commercial", setSelectedGenre)
                }
                $isActive={selectedGenre.includes("Commercial")}
                aria-label="Button Commercial"
              >
                Commercial
              </StyledButton>
              <StyledButton
                onClick={() => handleToggleFilter("Game", setSelectedGenre)}
                $isActive={selectedGenre.includes("Game")}
                aria-label="Button Games"
              >
                Games
              </StyledButton>
              <StyledButton
                onClick={() => handleToggleFilter("Series", setSelectedGenre)}
                $isActive={selectedGenre.includes("Series")}
                aria-label="Button Series"
              >
                Series
              </StyledButton>
              <StyledButton
                onClick={() => handleToggleFilter("Misc", setSelectedGenre)}
                $isActive={selectedGenre.includes("Misc")}
                aria-label="Button Misc"
              >
                Misc
              </StyledButton>
              <StyledButton
                onClick={() =>
                  handleToggleFilter("All", setSelectedGenre, true)
                }
                $isActive={selectedGenre.length === 0}
                aria-label="Button All Genres"
              >
                All
              </StyledButton>
            </ButtonWrapper>
          </ButtonWrapperGenre>
        </ButtonWrapper>

        {/* Poster Display */}
        <PosterWrapper $posterCount={sortedProjects.length}>
          {sortedProjects.length > 0 ? (
            sortedProjects.map((project) => (
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
            ))
          ) : (
            <NoPosterMessage>N/A</NoPosterMessage>
          )}
        </PosterWrapper>
      </StyledContainer>
    </FilmographySection>
  );
}

const FilmographySection = styled.section`
  padding: 4rem 0rem;
  width: 100%;
  position: relative;
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
`;


const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  background-color: var(--yellow);
  padding: 0.25rem;
`;

const StyledHeadline = styled.p`
  font-weight: 900;
  color: var(--black);
  font-size: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
  padding: 0 1rem;
  justify-content: space-between;
  }
`;

const ButtonWrapperJobRole = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const ButtonWrapperGenre = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  color: var(--white);
  border: none;
  text-transform: uppercase;
  padding: 0.75rem;
  font-size: 0.9rem;
  transition: transform 0.2s ease;
  text-decoration: ${({ $isActive }) =>
    $isActive ? "underline 0.2rem var(--yellow)" : "none"};

  &:hover {
    text-decoration: underline 0.2rem var(--yellow);
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const PosterWrapper = styled.div`
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

const NoPosterMessage = styled.p`
  font: var(--subheadline);
  color: var(--yellow);
  font-size: 1.25rem;
  text-align: center;
  margin-top: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;