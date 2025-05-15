import styled from "styled-components";
import {motion} from "framer-motion";
import Headline from "@/components/Headline/Headline";

export default function PrivacyPolicy() {
    return (
      <PrivacyPolicySection>
        <StyledContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Headline headline={"privacy policy"} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TextWrapper>
              <StyledSubheadline>1. Overview</StyledSubheadline>
              <StyledText>
                This Privacy Policy provides information about the collection,
                use, and processing of your personal data when you visit this
                website. Personal data includes all information that can
                identify you personally, such as your name, email address, or IP
                address.
              </StyledText>
              <StyledSubheadline>2. Data Collection</StyledSubheadline>
              <StyledText>
                Responsible Party:
                <br /> The responsible party for data processing on this website
                is: <br />
                <br /> Claudius Urban <br />
                Kopenhagener Straße 48,
                <br /> 10437 Berlin, Germany <br />
                <br /> Email: mail@claudiusurban.com
                <br />
                <br />
                How Data is Collected: Data may be collected directly, such as
                through contact forms, or automatically via IT systems when
                visiting the website (e.g., browser type, operating system, time
                of access).
              </StyledText>
              <StyledSubheadline>
                3. Purpose of Data Collection
              </StyledSubheadline>
              <StyledText>
                Ensuring proper functionality of the website.
                <br /> Analyzing user behavior for website improvement.
                <br /> Processing inquiries, orders, or contracts submitted
                through the website.
              </StyledText>
              <StyledSubheadline>4. Your Rights</StyledSubheadline>
              <StyledText>
                Access and Rectification:
                <br /> Request information about your stored personal data and
                correct inaccuracies. <br />
                <br />
                Deletion and Restriction:
                <br /> Request deletion or restriction of your data unless
                legally required to retain it. <br />
                <br />
                Data Portability:
                <br /> Receive your data in a machine-readable format or request
                its transfer to another party.
                <br />
                <br /> Withdrawal of Consent:
                <br /> You may withdraw any consent given for data processing at
                any time. <br />
                <br />
                Objection to Processing:
                <br /> Object to data processing based on legitimate interests
                or for direct marketing purposes. Complaint: File a complaint
                with a supervisory authority if you believe your data is being
                mishandled.
              </StyledText>
              <StyledSubheadline>5. Hosting</StyledSubheadline>
              <StyledText>
                This website is hosted externally by DOMAINUNION, located at
                Baldurstr. 12, 68305 Mannheim, Germany. Personal data processed
                by the hosting provider includes IP addresses, website access
                data, and other information necessary for website operation.
              </StyledText>
              <StyledSubheadline>
                6. Legal Basis for Data Processing
              </StyledSubheadline>
              <StyledText>
                Data is processed based on your consent (Art. 6(1)(a) GDPR), for
                the fulfillment of contracts (Art. 6(1)(b) GDPR), compliance
                with legal obligations (Art. 6(1)(c) GDPR), or legitimate
                interests (Art. 6(1)(f) GDPR).
              </StyledText>
              <StyledSubheadline>
                7. Use of Cookies and Third-Party Tools
              </StyledSubheadline>
              <StyledText>
                This website may use cookies or third-party tools like Google
                Fonts and Vimeo. Where necessary, your explicit consent will be
                obtained before utilizing such services. You may revoke consent
                at any time.
              </StyledText>
              <StyledSubheadline>8. Security</StyledSubheadline>
              <StyledText>
                We take the protection of your data seriously and implement
                appropriate measures to safeguard your personal information.
                However, we cannot guarantee absolute security, particularly
                when data is transmitted over the internet (e.g., via email).
              </StyledText>
              <StyledSubheadline>9. Contact</StyledSubheadline>
              <StyledText>
                If you have questions about this Privacy Policy or the
                processing of your data, please contact: <br /> <br /> Claudius
                Urban <br />
                Kopenhagener Straße 48, <br /> 10437 Berlin, Germany <br />{" "}
                Email: mail@claudiusurban.com
              </StyledText>
            </TextWrapper>
          </motion.div>
        </StyledContainer>
      </PrivacyPolicySection>
    );
};    

const PrivacyPolicySection = styled.section`
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
