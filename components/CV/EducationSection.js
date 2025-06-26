import styled from "styled-components";
import { education } from "@/lib/data-education";
import { CVGrid, StyledList, StyledYear } from "@/styledComponents";

export default function EducationSection() {
  return (
    <CVGrid>
      {education.map((educationItem, index) => {
        const isRightColumn = index % 2 === 1;
        return (
          <EducationItem
            key={index}
            $isRightColumn={isRightColumn}
          >
            <StyledYear>{educationItem.year}</StyledYear>
            <StyledText>{educationItem.text}</StyledText>
            <StyledList>
              {educationItem.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </StyledList>
          </EducationItem>
        );
      })}
    </CVGrid>
  );
}


const EducationItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    grid-column: ${({ $isRightColumn }) => ($isRightColumn ? "2" : "1")};
    margin-top: ${({ $isRightColumn }) => ($isRightColumn ? "4rem" : "0")};
  }
`;

  
const StyledText = styled.p`
  font: var(--subheadline);
  color: var(--white);
  line-height: 1.5;
  text-align: left;
    
  @media (min-width: 768px) {
  font-size: 1rem;
  }
 `;