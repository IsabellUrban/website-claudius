import styled from "styled-components";
import Headline from "@/components/Headline/Headline";

export default function Filmography() {
    return (
        <FilmographySection>
            <StyledContainer>
                <Headline headline={"filmography"} />
            </StyledContainer>
        </FilmographySection>
    );
};

const FilmographySection = styled.section`
  background-color: transparent;
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
`;
