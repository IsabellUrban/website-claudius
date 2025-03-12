import { motion, AnimatePresence } from "motion/react";
import styled from "styled-components";
import { projects } from "@/lib/data-projects";
import { useState } from "react";
import { useEffect } from "react";

export default function Slideshow () {

const [index, setIndex] = useState(0);

useEffect (() => {
const interval = setInterval(() => {
setIndex((prevIndex) => (prevIndex + 1) % projects.length);
}, 3000);
return () => clearInterval(interval);
}, []);


    return (
      <SlideshowContainer>
        <AnimatePresence mode="easeIn">
          {projects.length > 0 && projects[index].still && (
            <StyledImage
              key={projects[index].id}
              src={projects[index].still}
              alt={projects[index].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          )}
          ;
        </AnimatePresence>
      </SlideshowContainer>
    );
};

const SlideshowContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background-color: var(--black);
  padding-top: 8vh;

  @media (min-width: 768px) {
    height: 500px;
  }
`;

const StyledImage = styled(motion.img)`
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
`;
