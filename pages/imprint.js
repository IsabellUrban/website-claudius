import styled from "styled-components";
import { motion } from "framer-motion";
import Headline from "@/components/Headline/Headline";

export default function Imprint() {
  return (
    <ImprintSection>
       <StyledContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
            <Headline headline={"imprint"} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
         
            <TextWrapper>
              <StyledSubheadline>Claudius Urban</StyledSubheadline>
              <StyledText>
                Kopenhagener Straße 48, <br />
                10437 Berlin <br />
                Germany <br />
              </StyledText>
              <StyledSubheadline>Contact</StyledSubheadline>
              <StyledText>E-Mail: mail@claudiusurban.com</StyledText>
              <StyledSubheadline>
                EU Online Dispute Resolution
              </StyledSubheadline>
              <StyledText>
                The European Commission provides a platform for online dispute
                resolution (ODR): https://ec.europa.eu/consumers/odr/. Our email
                address can be found above in the imprint.
              </StyledText>
              <StyledSubheadline>
                Consumer Dispute Resolution/Universal Arbitration Body
              </StyledSubheadline>
              <StyledText>
                We are not willing or obliged to participate in dispute
                resolution proceedings before a consumer arbitration body.
              </StyledText>
              <StyledSubheadline>
                Disclaimer: Liability for Content
              </StyledSubheadline>
              <StyledText>
                The content on my website has been created with the utmost care.
                However, I cannot guarantee the accuracy, completeness, or
                timeliness of the information provided. I am responsible for my
                own content on these pages in accordance with § 7 (1) TMG
                (German Telemedia Act) and other applicable laws. Pursuant to §§
                8 to 10 TMG, I am not obligated to monitor third-party
                information that has been transmitted or stored, nor to
                investigate any circumstances that indicate illegal activity. My
                obligations to remove or block the use of information under
                general law remain unaffected by this. Liability for such
                content can only arise once I have knowledge of a specific
                infringement. If I become aware of any such violations, I will
                promptly remove the content in question.
              </StyledText>
            </TextWrapper>
         
        </motion.div>
        </StyledContainer>
      </ImprintSection>
  );
}

const ImprintSection = styled.section`
  background-color: var(--black-transparent);
  padding: 4rem 0rem;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-top: 40px;
`;

const StyledSubheadline = styled.h3`
  font: var(--bodytext);
  font-weight: 700;
  color: var(--white);
  margin: 0;
  margin-top: 0.75rem;
  flex-grow: 1;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledText = styled.p`
  font: var(--bodytext);
  color: var(--white);

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;

  @media (min-width: 768px) {
    max-width: 800px;
    padding: 1.5rem;
  }
`;
