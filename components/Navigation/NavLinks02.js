import styled from "styled-components";
import useScrollSpy from "@/hooks/useScrollSpy.js";
import { useEffect, useState } from "react";

export default function NavLinks({ isMenuOpen, handleLinkClick }) {
  const sectionIds = ["home", "about", "cv", "reels", "filmography", "contact"];
  const scrollOffset =
    typeof window !== "undefined" ? window.innerHeight / 2 : 0;

  const spyActiveId = useScrollSpy(sectionIds, scrollOffset);

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(spyActiveId);
  }, [spyActiveId]);

  function onLinkClick(id) {
    handleLinkClick();
    setActiveLink(`#${id}`);
  }

  return (
    <>
      <StyledBackground
        $isMenuOpen={isMenuOpen}
        onClick={handleLinkClick}
        aria-hidden="true"
      />
      <StyledOpacityContainer
        $isVisible={isMenuOpen}
        onClick={handleLinkClick}
        aria-hidden="true"
      />
      <StyledNavLinks
        $isMenuOpen={isMenuOpen}
        role="navigation"
        aria-label="Main navigation"
      >
        {sectionIds.map((id) => (
          <StyledLink
          key={id}
            as="a"
            href="#"
            onClick={(event) => {
              event.preventDefault();
              const section = document.getElementById(id);
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
                history.replaceState(null, "", window.location.pathname);
              }
              onLinkClick(id);
            }}
            role="menuitem"
            $isActive={activeLink === `#${id}`}
          >
            {id.toUpperCase()}
          </StyledLink>
        ))}
      </StyledNavLinks>
    </>
  );
}

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 150px;
  height: 350px;
  background-color: var(--black);
  opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? 0.95 : 0)};
  transform: ${({ $isMenuOpen }) =>
    $isMenuOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.75s ease, opacity 0.5s ease;
  z-index: 3;
`;

const StyledNavLinks = styled.nav`
  display: ${({ $isMenuOpen }) => ($isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  top: 90px;
  right: 38px;
  z-index: 4;
  

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    gap: 2rem;
    right: 10px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: var(--white);
  text-align: center;
  font-size: 0.9rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
    color: var(--white);
  }

  @media (min-width: 768px) {
    font-size: 1rem;

    &:hover {
      text-decoration: underline 0.2rem var(--yellow);
      transform: scale(1.02);
    }

    ${({ $isActive }) =>
      $isActive &&
      `
    text-decoration: underline 0.2rem var(--yellow); 
    font-weight: bold;
  `}
  }
`;

const StyledOpacityContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #fff;
  opacity: 0.75;
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
`;
