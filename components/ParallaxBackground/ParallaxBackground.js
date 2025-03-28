import styled from "styled-components";
import {motion, useScroll, useTransform} from "framer-motion";

export default function ParallaxBackground({imageSrc}) {
    const {scrollY} = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, -200]);


return (
    <ParallaxContainer>
      <MotionBackground
        style={{ y }}
        imageSrc={imageSrc}
        aria-hidden="true"
      />
    </ParallaxContainer>
  );
}

const ParallaxContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh; /* Höhe des Parallax-Bereichs */
  width: 100%;
`;

const MotionBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%; /* Größer als der Container für den Parallax-Effekt */
  background-image: url(${(props) => props.imageSrc});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;