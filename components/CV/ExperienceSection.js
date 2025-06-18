import styled from "styled-components";
import { CVGrid, StyledList, StyledYear } from "@/styledComponents";
import { motion } from "framer-motion";

export default function ExperienceSection({ experience, onProjectClick }) {
  const listVariants = {
    visible: { transition: { staggerChildren: 0.15 } },
    hidden: {},
  };

  return (
    <CVGrid>
      {experience.map((experienceItem, experienceIndex) => {
        const isRightColumn = experienceIndex % 2 === 1;
        return (
          <ExperienceItem key={experienceIndex} $isRightColumn={isRightColumn}>
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
                <li key={detailIndex}>
                  {detail}
                </li>
              ))}
            </StyledList>
          </ExperienceItem>
        );
      })}
    </CVGrid>
  );
}

const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    grid-column: ${({ $isRightColumn }) => ($isRightColumn ? "2" : "1")};
    margin-top: ${({ $isRightColumn }) => ($isRightColumn ? "4rem" : "0")};
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
