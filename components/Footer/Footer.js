import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterWrapper role="contentinfo">
      <WrapperLogoCopywrite>
        <StyledFooterText>© 2025 Claudius Urban</StyledFooterText>
        <StyledLink href="https://www.isabellurban.com/" target="_blank">
          Site Credit
        </StyledLink>
      </WrapperLogoCopywrite>
      <WrapperLinks>
        <StyledLink href="/imprint">Imprint</StyledLink>
        <StyledLink href="/privacypolicy">Privacy Policy</StyledLink>
      </WrapperLinks>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: var(--black);
  padding: 1rem;
  text-align: center;
  height: 7vh;
  width: 100%;
  margin-top: auto;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WrapperLogoCopywrite = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  flex: 0 1 auto;
`;

const WrapperLinks = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  flex: 0 1 auto;
`;

const StyledFooterText = styled.p`
  font: var(--subheadline);
  font-size: 0.75rem;
  margin: 0;
  flex-grow: 1;
  overflow: hidden;
  color: var(--white);

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledLink = styled(Link)`
  font: var(--subheadline);
  font-size: 0.75rem;
  color: var(--white);
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    text-decoration: underline 0.2rem var(--yellow);
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
