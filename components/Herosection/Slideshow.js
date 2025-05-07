import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { projects } from "@/lib/data-projects-02";
import { useState } from "react";
import { useEffect } from "react";

export default function Slideshow () {

const [index, setIndex] = useState(0);
const projectsWithStills = projects.filter (project => project.still )

useEffect (() => {
const interval = setInterval(() => {
setIndex((prevIndex) => (prevIndex + 1) % projectsWithStills.length);
}, 8000);

return () => 
clearInterval(interval);
}, [projectsWithStills.length]);


    return (
          <AnimatePresence initial={false}>
            {projectsWithStills.length > 0 && (
              <StyledImage
                key={projectsWithStills[index].id}
                src={projectsWithStills[index].still}
                alt={projectsWithStills[index].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            )}
            ;
          </AnimatePresence>
    );
};


const StyledImage = styled(motion.img)`
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
`;

