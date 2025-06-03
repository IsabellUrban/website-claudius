import styled from "styled-components";
import { education } from "@/lib/data-education";

export default function EducationSection() {
  return (
    <EducationGrid>
      {education.map((educationItem, index) => {
        const isRightColumn = index % 2 === 1;
        return (
          <EducationItem
            key={index}
            style={{
              gridColumn: isRightColumn ? "2" : "1",
              marginTop: isRightColumn ? "4rem" : "0",
            }}
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
    </EducationGrid>
  );
}

const EducationGrid = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 5rem;
  }
`;

const EducationItem = styled.div`
  display: flex;
  flex-direction: column;
`;

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
    
    const StyledText = styled.p`
      font: var(--subheadline);
      color: var(--white);
      line-height: 1.5;
      text-align: left;
    
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