import styled from "styled-components";

export default function Headline ({headline}) {

    return (
        <StyledContainer>
        <HeadlinerWrapper>
            <StyledHeadline>{headline}</StyledHeadline>
        </HeadlinerWrapper>
        </StyledContainer>
    );
};



const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadlinerWrapper = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

const StyledHeadline = styled.h2`
  font-size: 1.5rem;
  color: var(--white);
  text-decoration: underline 0.3rem var(--yellow);
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;