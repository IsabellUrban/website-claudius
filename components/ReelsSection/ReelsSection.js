import styled from "styled-components";
import Headline from "@/components/Headline/Headline";
import Shotbreakdown from "@/components/ReelsSection/Shotbreakdown";
import VideoPlayer from "./VideoPlayer";
import { useState, useRef } from "react";
import { StyledContainer } from "@/styledComponents";
import { Overlay } from "@/styledComponents";
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

  return (
    <>
      <SectionWrapper id="reels">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <StyledContainer ref={containerRef}>
            <Headline headline={"reels"} />
            <ReelsContent>
              <ContentContainer>
                <VideoPlayer
                  src="https://videos.claudiusurban.com/claudius_urban_showreel.mp4"
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
                  onClick={() => handleToggleSection(null)}
                  aria-label="Close Section"
                  role="button"
                />
              )}
            </ReelsContent>

            <ReelsContent>
              <ContentContainer>
                <VideoPlayer src="https://videos.claudiusurban.com/claudius_urban_animation_supervisor_reel.mp4" />
              </ContentContainer>
            </ReelsContent>
          </StyledContainer>
        </motion.div>
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
  border-width: 2px 2px 12px 2px;
  border-color: var(--yellow);
  border-radius: 0px;

  @media (min-width: 768px) {
    width: 60%;
    border-width: 6px 6px 18px 6px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
    border-width: 6px 6px 18px 6px;
  }
`;