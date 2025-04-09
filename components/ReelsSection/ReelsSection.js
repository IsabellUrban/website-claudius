import styled from "styled-components";
import Headline from "@/components/Headline/Headline";
import Shotbreakdown from "@/components/ReelsSection/Shotbreakdown";
import { useState, useRef } from "react";

export default function ReelsSection() {

  const videoRef = useRef(null);

  function handleJumpToTime(time) {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      videoRef.current.play();
    }
  }

    const [isActiveSection, setIsActiveSection] = useState(null);
  
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
      <SectionWrapper>
        <StyledContainer>
          <Headline headline={"reels"} />
          <ReelsContent>
            <ContentContainer>
              <VideoWrapper>
                <StyledVideo ref={videoRef} controls loop>
                  <source
                    src="https://www.claudiusurban.com/reels/claudius_urban_showreel.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </StyledVideo>
              </VideoWrapper>

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

          <ReelsContent>
            <ContentContainer>
              <VideoWrapper>
                <StyledVideo controls loop>
                  <source
                    src="https://www.claudiusurban.com/reels/claudius_urban_animation_supervisor_reel.mp4"
                    type="video/mp4"
                  />
                  Dein Browser unterstützt kein Video-Tag.
                </StyledVideo>
              </VideoWrapper>
            </ContentContainer>
          </ReelsContent>
        </StyledContainer>
      </SectionWrapper>
    </>
  );
}

const SectionWrapper = styled.section`
padding: 4rem 0rem 4rem 0rem;
width: 100%;
`;

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`;

const ReelsContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
padding-top: 1rem;
`;

const ContentContainer = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
max-width: 1200px;

@media (min-width: 1200px) {
width: 1200px;
 }
`;

const VideoWrapper = styled.div`
position: relative;
width: 100%;
height: auto;
margin-bottom: 0;
display: block;
`;

const StyledVideo = styled.video`
  width: 100%;
  display: block;
  border: none;
  aspect-ratio: 16/9;

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1200px) {
    height: 675px;
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