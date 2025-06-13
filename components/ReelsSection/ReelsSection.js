import styled from "styled-components";
import Headline from "@/components/Headline/Headline";
import Shotbreakdown from "@/components/ReelsSection/Shotbreakdown";
import VideoPlayer from "./VideoPlayer";
import { useState, useRef } from "react";
import { StyledContainer } from "@/styledComponents";
import { motion } from "framer-motion";

export default function ReelsSection() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isActiveSection, setIsActiveSection] = useState(null);

  function handleJumpToTime(time) {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      videoRef.current.play();
    }
  }

  function handleToggleSection(section) {
    setIsActiveSection((prevSection) => {
      const newSection = prevSection === section ? null : section;
      return newSection;
    });
  }

  function handleCloseActiveSection() {
    console.log("Closing active section:", isActiveSection);
    setIsActiveSection(null);
  }

  function handleClose() {
    handleCloseActiveSection();
    handleToggleSection(null);
  }

  return (
    <>
      <SectionWrapper id="reels">
        <StyledContainer ref={containerRef}>
          <Headline headline={"reels"} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <ReelsContent>
              <ContentContainer>
                <VideoPlayer
                  src="https://www.claudiusurban.com/reels/claudius_urban_showreel.mp4"
                  videoRef={videoRef}
                />

                <Shotbreakdown
                  onToggleSection={handleToggleSection}
                  isActiveSection={isActiveSection}
                  handleJumpToTime={handleJumpToTime}
                />
              </ContentContainer>
              {isActiveSection && (
                <Overlay
                  onClick={handleClose}
                  aria-label="Close Section"
                  role="button"
                />
              )}
            </ReelsContent>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <ReelsContent>
              <ContentContainer>
                <VideoPlayer src="https://www.claudiusurban.com/reels/claudius_urban_animation_supervisor_reel.mp4" />
              </ContentContainer>
            </ReelsContent>
          </motion.div>
        </StyledContainer>
      </SectionWrapper>
    </>
  );
}

const SectionWrapper = styled.section`
padding: 4rem 0rem 4rem 0rem;
width: 100%;
`;


const ReelsContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
padding: 2rem 0rem 2rem 0rem;

`;

const ContentContainer = styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
border-style: solid;
border-width: 6px 6px 18px 6px;
border-color: var(--yellow);
border-radius: 0px;

@media (min-width: 768px) {
width: 60%;
 }

@media (min-width: 1200px) {
width: 1200px;
 }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: transparent;
  z-index: 2;
  cursor: pointer;
  pointer-events: all;
`;