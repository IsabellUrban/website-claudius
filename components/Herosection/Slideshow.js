import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { projects } from "@/lib/data-projects-02";
import { useState } from "react";
import { useEffect } from "react";
import ArrowLeft from "@/public/icons/Arrow-left.svg";
import ArrowRight from "@/public/icons/Arrow-right.svg";
import Textanimation from "./Textanimation";

export default function Slideshow () {

const [index, setIndex] = useState(0);
const [isManual, setIsManual] = useState(false);
const projectsWithStills = projects.filter (project => project.still )

useEffect (() => {
const interval = setInterval(() => {
setIsManual(false);  
setIndex((prevIndex) => (prevIndex + 1) % projectsWithStills.length);
}, 8000);

return () => 
clearInterval(interval);
}, [projectsWithStills.length]);

function handleClickNext () {
setIsManual(true);
setIndex((prevIndex) => (prevIndex + 1) % projectsWithStills.length);
};

function handleClickPrev () {
 setIsManual(true);
 setIndex((prevIndex) => prevIndex === 0 ? projectsWithStills.length - 1 : prevIndex - 1);
};


    return (
      <SlideshowContainer>
        <AnimatePresence initial={false}>
          {projectsWithStills.length > 0 && (
            <StyledImage
              key={projectsWithStills[index].id}
              src={projectsWithStills[index].still}
              alt={projectsWithStills[index].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: isManual ? 0.5 : 3, ease: "easeInOut" }}
            />
          )}
          ;
        </AnimatePresence>
        <ButtonContainer>
          <ButtonWrapper onClick={handleClickPrev}>
            <ArrowLeft />
          </ButtonWrapper>
          <Textanimation />
          <ButtonWrapper onClick={handleClickNext}>
            <ArrowRight />
          </ButtonWrapper>
        </ButtonContainer>
      </SlideshowContainer>
    );
};


const SlideshowContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(motion.img)`
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;

  @media (min-width: 768px) {
    padding: 0 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  background-color: var(--grey-transparent);
  color: white;
  cursor: pointer;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  padding: 5px;

  &:hover {
    background-color: var(--yellow);
    color: var(--black);
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
