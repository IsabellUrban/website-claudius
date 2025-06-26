import styled from "styled-components";

export default function VideoPlayer({ src, videoRef, controls = true, loop = true }) {
    return (
<VideoWrapper>
 <StyledVideo ref={videoRef} controls={controls} loop={loop}>
   <source src={src} type="video/mp4" />
   Your browser does not support the video tag.
 </StyledVideo>
 </VideoWrapper>
);
}

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
`;