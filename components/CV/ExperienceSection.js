import styled from "styled-components";

export default function ExperienceSection({ experience, onProjectClick }) {
  return (
    <>
      {experience.map((experienceItem, experienceIndex) => (
        <div key={experienceIndex}>
          <StyledYear>{experienceItem.year}</StyledYear>
          <StyledPosition
            onClick={() =>
              onProjectClick(experienceItem.company, experienceItem.role)
            }
          >
            {experienceItem.role} <br /> {experienceItem.company}
          </StyledPosition>
          <StyledList>
            {experienceItem.details.map((detail, detailIndex) => (
              <li key={detailIndex}>{detail}</li>
            ))}
          </StyledList>
        </div>
      ))}
    </>
  );
}

const StyledYear = styled.p`
  font: var(--subheadline);
  color: var(--yellow);
  font-size: 0.85rem;
  line-height: 1.5;
  text-align: left;
  padding-top: 1rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledPosition = styled.p`
  font: var(--subheadline);
  color: var(--white);
  line-height: 1.5;
  text-align: left;
  cursor: pointer;

  &:hover {
    color: var(--yellow);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledList = styled.ul`
  font: var(--bodytext);
  color: var(--white);
  font-size: 0.75rem;
  line-height: 1.5;
  text-align: left;
  padding-top: 1rem;
  list-style-type: disc;
  margin-left: 1rem;
  margin-bottom: 1.75rem;

  @media (min-width: 768px) {
    font-size: 0.8rem;
    padding-top: 0.5rem;
  }
`;
