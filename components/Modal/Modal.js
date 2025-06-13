import styled from "styled-components";
import { motion, AnimatePresence, m } from "framer-motion";
import Portal from "../Portal/Portal";

export default function Modal({
  isOpen,
  onClose,
  children,
}) {
  if (!isOpen) return null;

  return (
    <Portal>
      <AnimatePresence>
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {children}
        </ModalOverlay>
      </AnimatePresence>
    </Portal>
  );
}

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--grey-transparent);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
