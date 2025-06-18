import { motion } from "framer-motion";
import Headline from "@/components/Headline/Headline";
import Modal from "../Modal/Modal";
import { ModalContainer, IconWrapper, StyledCloseIcon, StyledSubheadlineModal, StyledTextModal, TextWrapperModal } from "@/styledComponents";

export default function PrivacyPolicyModal({ onClose, isOpen }) {
  

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ModalContainer onClick={(event) => event.stopPropagation()}>
          <IconWrapper onClick={onClose}>
            <StyledCloseIcon />
          </IconWrapper>

          <Headline headline={"privacy policy"} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TextWrapperModal>
              <StyledSubheadlineModal>1. Overview</StyledSubheadlineModal>
              <StyledTextModal>
                This Privacy Policy provides information about the collection,
                use, and processing of your personal data when you visit this
                website. Personal data includes all information that can
                identify you personally, such as your name, email address, or IP
                address.
              </StyledTextModal>
              <StyledSubheadlineModal>2. Data Collection</StyledSubheadlineModal>
              <StyledTextModal>
                Responsible Party:
                <br /> The responsible party for data processing on this website
                is: <br />
                <br /> Claudius Urban <br />
                Kopenhagener Straße 48
                <br /> 10437 Berlin, Germany <br />
                <br /> Email: mail@claudiusurban.com
                <br />
                <br />
                How Data is Collected: Data may be collected directly, such as
                through contact forms, or automatically via IT systems when
                visiting the website (e.g., browser type, operating system, time
                of access).
              </StyledTextModal>
              <StyledSubheadlineModal>
                3. Purpose of Data Collection
              </StyledSubheadlineModal>
              <StyledTextModal>
                Ensuring proper functionality of the website.
                <br /> Analyzing user behavior for website improvement.
                <br /> Processing inquiries, orders, or contracts submitted
                through the website.
              </StyledTextModal>
              <StyledSubheadlineModal>4. Your Rights</StyledSubheadlineModal>
              <StyledTextModal>
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
              </StyledTextModal>
              <StyledSubheadlineModal>5. Hosting</StyledSubheadlineModal>
              <StyledTextModal>
                This website is hosted externally by DOMAINUNION, located at
                Baldurstr. 12, 68305 Mannheim, Germany. Personal data processed
                by the hosting provider includes IP addresses, website access
                data, and other information necessary for website operation.
              </StyledTextModal>
              <StyledSubheadlineModal>
                6. Legal Basis for Data Processing
              </StyledSubheadlineModal>
              <StyledTextModal>
                Data is processed based on your consent (Art. 6(1)(a) GDPR), for
                the fulfillment of contracts (Art. 6(1)(b) GDPR), compliance
                with legal obligations (Art. 6(1)(c) GDPR), or legitimate
                interests (Art. 6(1)(f) GDPR).
              </StyledTextModal>
              <StyledSubheadlineModal>
                7. Use of Cookies and Third-Party Tools
              </StyledSubheadlineModal>
              <StyledTextModal>
                This website may use cookies or third-party tools like Google
                Fonts and Vimeo. Where necessary, your explicit consent will be
                obtained before utilizing such services. You may revoke consent
                at any time.
              </StyledTextModal>
              <StyledSubheadlineModal>8. Security</StyledSubheadlineModal>
              <StyledTextModal>
                We take the protection of your data seriously and implement
                appropriate measures to safeguard your personal information.
                However, we cannot guarantee absolute security, particularly
                when data is transmitted over the internet (e.g., via email).
              </StyledTextModal>
              <StyledSubheadlineModal>9. Contact</StyledSubheadlineModal>
              <StyledTextModal>
                If you have questions about this Privacy Policy or the
                processing of your data, please contact: <br /> <br /> Claudius
                Urban <br />
                Kopenhagener Straße 48, <br /> 10437 Berlin, Germany <br />{" "}
                Email: mail@claudiusurban.com
              </StyledTextModal>
            </TextWrapperModal>
          </motion.div>
        </ModalContainer>
      </motion.div>
    </Modal>
  );
}


