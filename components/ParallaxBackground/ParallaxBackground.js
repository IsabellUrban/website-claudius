import styled from "styled-components";
import {motion, useScroll, useTransform} from "framer-motion";

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  return (
    <BackgroundContainer>
      <ParallaxImage
        style={{ y: y1 }}
        src="/images/background2.jpg"
        zIndex={1}
      />
      <ParallaxImage
        style={{ y: y2 }}
        src="/images/background-texture.jpg"
        zIndex={2}
      />
      <ParallaxImage
        style={{ y: y3 }}
        src="/images/background1.jpg"
        zIndex={3}
      />
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
z-index: -1; 
`;

const ParallaxImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300vh;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.src});
  z-index: ${(props) => props.zIndex || 0};
`;