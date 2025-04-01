import styled from "styled-components";
import Headline from "@/components/Headline/Headline";
import Shotbreakdown from "@/components/ReelsSection/Shotbreakdown";

export default function ReelsSection() {
  return (
    <>
     
      <SectionWrapper>
        
        <StyledContainer>
          <Headline headline={"reels"} />
          <ReelsContent>
            
            <ContentContainer>
              
              <VideoWrapper>
                
                <StyledIframe
                  src="https://player.vimeo.com/video/101153912?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&dnt=1&sidedock=0&loop=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                ></StyledIframe>
                
              </VideoWrapper>
             <Shotbreakdown />
            </ContentContainer>
           
          </ReelsContent>
         
          <ReelsContent>
            
            <ContentContainer>
              
              <VideoWrapper>
                
                <StyledIframe
                  src="https://player.vimeo.com/video/768554163?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&dnt=1&sidedock=0&loop=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                ></StyledIframe>
                
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

const StyledIframe = styled.iframe`
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
