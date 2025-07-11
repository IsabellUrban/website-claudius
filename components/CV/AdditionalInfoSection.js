import styled from "styled-components";
import Link from "next/link";
import { CVGrid, StyledList, StyledYear } from "@/styledComponents";

export default function AdditionalInfoSection() {
  const isRightColumn = true;

  return (
    <CVGrid>
      <InfoItem>
        <StyledYear>PUBLIC RELATION</StyledYear>

          <TextWrapperLink
            href="https://www.trixter.de/the-3-working-lives-of-claudius-urban/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledList style={{ marginBottom: "0" }}>
              <li>Article &quot;The 3 Working Lives of Claudius Urban&quot;</li>
            </StyledList>
          </TextWrapperLink>

          <TextWrapperLink
            href="https://projektzukunft.berlin.de/blog/news-detail/claudius-urban-animation-supervisor-bei-trixter-film-gmbh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledList style={{ paddingTop: "0" }}>
              <li> Short interview with Claudius Urban</li>
            </StyledList>
          </TextWrapperLink>
        </InfoItem>

        <InfoItem $isRightColumn={isRightColumn}>
          <StyledYear>2024</StyledYear>
          <StyledList>
            <li>
              Speaker at FMX Stuttgart, Germany: Animation & Mocap Pipeline
              Secrets by Xsens
            </li>
          </StyledList>
        </InfoItem>

        <InfoItem>
          <StyledYear>2023</StyledYear>
          <StyledList>
            <li>
              Speaker at FMX Stuttgart, Germany: The Marsupial, The Myth, The
              Legend
            </li>
          </StyledList>
        </InfoItem>

        <InfoItem $isRightColumn={isRightColumn}>
          <StyledYear>2021</StyledYear>
          <StyledList>
            <li>
              Speaker at FMX Stuttgart, Germany: Hopping for the Best: Die
              Känguru-Chroniken
            </li>
          </StyledList>
        </InfoItem>

        <InfoItem>
          <StyledYear>2021</StyledYear>
          <StyledList>
            <li>
              VES Award Nominee in the categorie Outstanding Animated Character
              in a Photoreal Feature for &quot;Die Känguru Chroniken&quot;
            </li>
          </StyledList>
        </InfoItem>

        <InfoItem $isRightColumn={isRightColumn}>
          <StyledYear>2020</StyledYear>
          <StyledList>
            <li>
              Winner{" "}
              <span style={{ color: "gold" }}>German Film Award in Gold</span>{" "}
              in the categorie Best Visual Effects and Animation for &quot;Die
              Känguru Chroniken&quot;
            </li>
          </StyledList>
        </InfoItem>

        <InfoItem>
          <StyledYear>2004-2006</StyledYear>
          <StyledList>
            <li>
              Teaching children at the Kinderfilmhaus Ludwigsburg in animation
              and vfx
            </li>
          </StyledList>
        </InfoItem>

        <InfoItem $isRightColumn={isRightColumn}>
          <StyledYear>2001</StyledYear>
          <StyledList>
            <li>
              Visiting lecture at the HFF Potsdam Babelsberg about interactive
              animation in games
            </li>
          </StyledList>
        </InfoItem>

        <InfoItem>
          <StyledYear>SKILLS</StyledYear>
          <StyledList>
            <li>ability to work collaboratively in a team environment</li>
            <li>ability to work under pressure</li>
            <li>
              professional experience in Life Action Features, Animated
              Features, Commercials and Games
            </li>
            <li>strong communication and time management skills</li>
            <li>
              huge variety in animation: digital doubles, characters and
              creatures, cartoony and photorealistic, keyframe and Motion
              Capture, acting as well as action movements including facial
              animation and lipsync
            </li>
          </StyledList>
        </InfoItem>

        <InfoItem $isRightColumn={isRightColumn}>
          <StyledYear>SOFTWARE</StyledYear>
          <StyledList>
            <li>Maya</li>
            <li>3D Studio Max</li>
            <li>Motionbuilder</li>
            <li>Softimage XSI</li>
            <li>Photoshop</li>
            <li>Premiere</li>
          </StyledList>
        </InfoItem>

        <InfoItem>
          <StyledYear>LANGUAGES</StyledYear>
          <StyledList>
            <li>German (native)</li>
            <li>English (fluent)</li>
          </StyledList>
        </InfoItem>

        <InfoItem $isRightColumn={isRightColumn}>
          <StyledYear>INTERESTS</StyledYear>
          <StyledList>
            <li>Film</li>
            <li>Sports: martial arts, soccer, basketball </li>
            <li>Music: drums, guitar</li>
          </StyledList>
        </InfoItem>
      </CVGrid>
    );
};



const InfoItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin-top: ${({$isRightColumn}) => ($isRightColumn ? "4rem" : "0")};
  }
`;

const TextWrapperLink = styled(Link)`
  text-decoration: none;
  color: var(--white);

  :hover {
    color: var(--yellow);
    font-weight: 900;
  }
`;