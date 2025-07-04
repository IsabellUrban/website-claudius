import styled from "styled-components";
import Headline from "@/components/Headline/Headline";
import FilterButtons from "@/components/Filmography/FilterButtons";
import PosterGrid from "@/components/Filmography/PosterGrid";
import { projects } from "@/lib/data-projects-02";
import { useState } from "react";
import { StyledSection } from "@/styledComponents";
import { motion } from "framer-motion";

export default function Filmography() {
  const [selectedJobRole, setSelectedJobRole] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);


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
    <FilmographySection id="filmography">
      <StyledContainer>
        <WrapperHeader
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Headline headline={"filmography"} />
          <FilterButtons
            selectedJobRole={selectedJobRole}
            setSelectedJobRole={setSelectedJobRole}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
        </WrapperHeader>

        {sortedProjects.length > 0 ? (
          <PosterGrid sortedProjects={sortedProjects} />
        ) : (
          <NoPosterMessage>N/A</NoPosterMessage>
        )}
      </StyledContainer>
    </FilmographySection>
  );
}

const FilmographySection = styled(StyledSection)`
  padding: 2rem 0rem;
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background-color: var(--black-transparent);
  min-height: 550px;

`;

const WrapperHeader = styled(motion.div)`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0rem;
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