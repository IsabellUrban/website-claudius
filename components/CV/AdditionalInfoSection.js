import styled from "styled-components";
import Link from "next/link";

export default function AdditionalInfoSection() {
    return (
      <>
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

        <StyledText>2024</StyledText>
        <StyledList>
          <li>
            Speaker at FMX Stuttgart, Germany: Animation & Mocap Pipeline
            Secrets by Xsens
          </li>
        </StyledList>

        <StyledText>2023</StyledText>
        <StyledList>
          <li>
            Speaker at FMX Stuttgart, Germany: The Marsupial, The Myth, The
            Legend
          </li>
        </StyledList>

        <StyledText>2021</StyledText>
        <StyledList>
          <li>
            Speaker at FMX Stuttgart, Germany: Hopping for the Best: Die
            Känguru-Chroniken
          </li>
        </StyledList>

        <StyledText>2021</StyledText>
        <StyledList>
          <li>
            VES Award Nominee in the categorie Outstanding Animated Character in
            a Photoreal Feature for &quot;Die Känguru Chroniken&quot;
          </li>
        </StyledList>

        <StyledText>2020</StyledText>
        <StyledList>
          <li>
            Winner{" "}
            <span style={{ color: "gold" }}>German Film Award in Gold</span> in
            the categorie Best Visual Effects and Animation for &quot;Die
            Känguru Chroniken&quot;
          </li>
        </StyledList>

        <StyledText>2004-2006</StyledText>
        <StyledList>
          <li>
            Teaching children at the Kinderfilmhaus Ludwigsburg in animation and
            vfx
          </li>
        </StyledList>

        <StyledText>2001</StyledText>
        <StyledList>
          <li>
            Visiting lecture at the HFF Potsdam Babelsberg about interactive
            animation in games
          </li>
        </StyledList>

        <StyledYear>SKILLS</StyledYear>
        <StyledList>
          <li>ability to work collaboratively in a team environment</li>
          <li>ability to work under pressure</li>
          <li>
            professional experience in Life Action Features, Animated Features,
            Commercials and Games
          </li>
          <li>strong communication and time management skills</li>
          <li>
            huge variety in animation: digital doubles, characters and
            creatures, cartoony and photorealistic, keyframe and Motion Capture,
            acting as well as action movements including facial animation and
            lipsync
          </li>
        </StyledList>

        <StyledYear>SOFTWARE</StyledYear>
        <StyledList>
          <li>Maya</li>
          <li>3D Studio Max</li>
          <li>Motionbuilder</li>
          <li>Softimage XSI</li>
          <li>Photoshop</li>
          <li>Premiere</li>
        </StyledList>

        <StyledYear>LANGUAGES</StyledYear>
        <StyledList>
          <li>German (native)</li>
          <li>English (fluent)</li>
        </StyledList>

        <StyledYear>INTERESTS</StyledYear>
        <StyledList>
          <li>Film</li>
          <li>Sports: martial arts, soccer, basketball </li>
          <li>Music: drums, guitar</li>
        </StyledList>
      </>
    );
};

const StyledYear = styled.p`
  font: var(--subheadline);
  color: var(--yellow);
  font-size: 0.85rem;
  line-height: 1.5;
  text-align: left;
  padding-top: 1rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledText = styled.p`
  font: var(--subheadline);
  color: var(--white);
  line-height: 1.5;
  text-align: left;
  

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledList = styled.ul`
  font: var(--bodytext);
  color: var(--white);
  font-size: 0.75rem;
  line-height: 1.5;
  text-align: left;
  padding-top: 1rem;
  list-style-type: disc;
  margin-left: 1rem;
  margin-bottom: 1.75rem;
  
  @media (min-width: 768px) {
    font-size: 0.8rem;
    padding-top: 0.5rem;
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