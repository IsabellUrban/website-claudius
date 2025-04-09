import styled from "styled-components";
import Image from "next/image";
import Claudius_500x500 from "@/public/images/Claudius_500x500.jpg";
import Headline from "@/components/Headline/Headline";


export default function Aboutsection() {
    return (
      <AboutSection>
        <StyledContainer>
          <Headline headline={"about"} />

          <AboutContent>
            <StyledBackground>
              <ImageWrapper>
                <StyledImage
                  src={Claudius_500x500}
                  alt="Picture of Claudius Urban"
                  width={500}
                  height={500}
                />
              </ImageWrapper>
            </StyledBackground>
            <TextWrapper>
              <StyledQuote>
                “Great stories are what inspire me to deliver stand-out
                animation.”
              </StyledQuote>
              <StyledText>
                From overseeing the animation team to pipeline, previsualization
                and motion capture acting, Claudius Urban’s role within the
                animation industry is extremely wide-ranging - he thrives on
                every challenge. <br />
                <br />
                Since his training in 3D at the prestigious Filmakademie
                Baden-Württemberg in Ludwigsburg, Germany, Claudius has traveled
                all over the world, honing his craft in animation. He has worked
                with several major visual effects houses, experiencing different
                pipelines, approaches, cultures and working environments. <br />
                <br />
                Throughout this time he created iconic sequences for film and
                television: Iron Man’s self-assembling suit, the Troll ramming
                head-first into a stone wall in Hobbit 3, the disturbing and
                memorable birth of Doomsday in Batman vs. Superman and the
                impressive one-minute climactic battle shot of Koba running
                amuck on a tank in Dawn of the Planet of the Apes. <br />
                <br />
                “Growing up, I always had pictures and stories in my head that I
                wasn’t able to communicate,” says Claudius. “Animation gave me a
                way to tell stories as living pictures, to breathe life into my
                thoughts. I love that my profession has given me a way of
                channeling that creativity.”
              </StyledText>
            </TextWrapper>
          </AboutContent>
        </StyledContainer>
      </AboutSection>
    );
    }

    const AboutSection = styled.section`
      background-color: transparent;
      padding: 4rem 0rem 4rem 0rem;
      width: 100%;
    `;

    const StyledContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `;

    const AboutContent = styled.div`
      display: flex;
      align-items: stretch;
      justify-content: center;
      flex-direction: column;
      background-color: var(--black);
      width: 100%;

      @media (min-width: 768px) {
      flex-direction: row;
      
      }
    `;

    const StyledBackground = styled.div`
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;

      @media (min-width: 768px) {
        width: 50%;
        background-color: var(--yellow);
      }
    `;
    const ImageWrapper = styled.div`
      position: relative;
      width: 100%;
      height: auto;
      padding: 1rem;

      @media (min-width: 768px) {
      padding: 2rem;
      }
    `;

    const StyledImage = styled(Image)`
      width: 100%;
      height: auto;
      max-height: 200px;
      object-fit: contain;

      @media (min-width: 768px) {
        max-height: 200vh;
      }
    `;

    const TextWrapper = styled.div`
      display: flex;
      position: relative;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      padding: 1rem;
      background-color: var(--white);

      @media (min-width: 768px) {
        width: 50%;
        padding: 2rem;
      }
    `;

  const StyledQuote = styled.h3`
    font-size: 0.95rem;
    color: var(--black);
    font-style: italic;;
    padding: 1rem 0rem;

    @media (min-width: 768px) {
      font-size: 1.25rem;
      padding: 2rem 0rem;
    }
  `;

    const StyledText = styled.p`
      font: var(--bodytext);
      color: var(--black);
      line-height: 1.5;
      text-align: left;
      padding: 1rem 0rem;

      @media (min-width: 768px) {
        font-size: 1rem;
        padding: 2rem 0rem;
      }
    `;