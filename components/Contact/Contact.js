import styled from "styled-components";
import Headline from "../Headline/Headline";

export default function Contact() {
  return (
    <ContactSection>
      <StyledContainer>
        <Headline headline={"contact"} />
        </StyledContainer>
        </ContactSection>
    );
 };   

  const ContactSection = styled.section`
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