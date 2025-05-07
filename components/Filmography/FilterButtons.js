import styled from "styled-components";

export default function FilterButtons({selectedJobRole, setSelectedJobRole, selectedGenre, setSelectedGenre}) {

  const jobRoles = ["Animator", "Lead", "Supervisor", "HOD", "Misc", "All"];
  const genres = ["Film", "Commercial", "Game", "Series", "Misc", "All"];

function handleToggleFilter(filter, setFilterState, isAll = false) {
  if (isAll) {
    setFilterState([]);
  } else {
    setFilterState([filter]);
  }
};   

return (
  <ButtonWrapper>
    <ButtonWrapperJobRole>
      <TextWrapper>
        <StyledHeadline>JOB ROLE</StyledHeadline>
      </TextWrapper>
      <ButtonWrapper>
        {jobRoles.map((role) => (
            <StyledButton
              key={role}
              onClick={() =>
                handleToggleFilter(role, setSelectedJobRole, role === "All")
              }
              $isActive={
                role === "All"
                  ? selectedJobRole.length === 0
                  : selectedJobRole.includes(role)
              }
              aria-label={`Button ${role}`}
            >
              {role}
            </StyledButton>
          )
        )}
      </ButtonWrapper>
    </ButtonWrapperJobRole>
    <ButtonWrapperGenre>
      <TextWrapper>
        <StyledHeadline>GENRE</StyledHeadline>
      </TextWrapper>
      <ButtonWrapper>
        {genres.map((genre) => (
            <StyledButton
              key={genre}
              onClick={() =>
                handleToggleFilter(genre, setSelectedGenre, genre === "All")
              }
              $isActive={
                genre === "All"
                  ? selectedGenre.length === 0
                  : selectedGenre.includes(genre)
              }
              aria-label={`Button ${genre}`}
            >
              {genre}
            </StyledButton>
          )
        )}
      </ButtonWrapper>
    </ButtonWrapperGenre>
  </ButtonWrapper>
);

};

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