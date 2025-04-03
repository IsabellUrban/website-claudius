import styled from "styled-components";
import DropDown from "./DropDown";
import Headline from "@/components/Headline/Headline";


export default function CV({onToggleSection, isActiveSection}) {
    return (
      <CVSection>
        <StyledContainer>
          <Headline headline={"cv"} />
          <DropDown
            onToggleSection={onToggleSection}
            isActiveSection={isActiveSection}
          />
        </StyledContainer>
      </CVSection>
    );
    }


 const CVSection = styled.section`
 background-color: transparent;
 padding: 4rem 0rem 4rem 0rem;
 width: 100%;
 `;

 const StyledContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;