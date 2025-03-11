import styled from "styled-components";
import Link from "next/link";

export default function NavLinks({ isMenuOpen, handleLinkClick }) {
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
        <StyledLink href="" onClick={handleLinkClick} role="menuitem">
          HOME
        </StyledLink>
        <StyledLink href="" onClick={handleLinkClick} role="menuitem">
          ABOUT
        </StyledLink>
        <StyledLink href="" onClick={handleLinkClick} role="menuitem">
          CV
        </StyledLink>
        <StyledLink href="" onClick={handleLinkClick} role="menuitem">
          REELS
        </StyledLink>
        <StyledLink href="" onClick={handleLinkClick} role="menuitem">
          FILOGRAPHY
        </StyledLink>
        <StyledLink href="" onClick={handleLinkClick} role="menuitem">
          CONTACT
        </StyledLink>
      </StyledNavLinks>
    </>
  );
}

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 250px;
  background-color: var(--yellow);
  border-radius: 0 0 50% 50%;
  opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? 0.95 : 0)};
  transform: ${({ $isMenuOpen }) =>
    $isMenuOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.3s ease, opacity 0.5s ease;
  z-index: 3;
`;

const StyledNavLinks = styled.nav`
  display: ${({ $isMenuOpen }) => ($isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  top: 75px;
  right: 23px;
  z-index: 4;
  

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    gap: 2rem;
    right: 10px;
  }
`;

const StyledLink = styled(Link)`
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
      text-decoration: underline 2px var(--yellow);
      text-underline-position: under;
      transform: scale(1.02);
    }
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
