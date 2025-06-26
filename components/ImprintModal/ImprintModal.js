import { motion } from "framer-motion";
import Headline from "@/components/Headline/Headline";
import Modal from "@/components/Modal/Modal";
import {
  ModalContainer,
  IconWrapper,
  StyledCloseIcon,
  StyledSubheadlineModal,
  StyledTextModal,
  TextWrapperModal,
} from "@/styledComponents";

export default function ImprintModal({ onClose, isOpen }) {

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

          <Headline headline={"imprint"} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TextWrapperModal>
              <StyledSubheadlineModal>Claudius Urban</StyledSubheadlineModal>
              <StyledTextModal>
                Kopenhagener Straße 48 <br />
                10437 Berlin <br />
                Germany <br />
              </StyledTextModal>
              <StyledSubheadlineModal>Contact</StyledSubheadlineModal>
              <StyledTextModal>E-Mail: mail@claudiusurban.com</StyledTextModal>
              <StyledSubheadlineModal>
                EU Online Dispute Resolution
              </StyledSubheadlineModal>
              <StyledTextModal>
                The European Commission provides a platform for online dispute
                resolution (ODR): https://ec.europa.eu/consumers/odr/. Our email
                address can be found above in the imprint.
              </StyledTextModal>
              <StyledSubheadlineModal>
                Consumer Dispute Resolution/Universal Arbitration Body
              </StyledSubheadlineModal>
              <StyledTextModal>
                We are not willing or obliged to participate in dispute
                resolution proceedings before a consumer arbitration body.
              </StyledTextModal>
              <StyledSubheadlineModal>
                Disclaimer: Liability for Content
              </StyledSubheadlineModal>
              <StyledTextModal>
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
              </StyledTextModal>
            </TextWrapperModal>
          </motion.div>
        </ModalContainer>
      </motion.div>
    </Modal>
  );
};