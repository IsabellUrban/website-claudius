import styled from "styled-components";
import Image from "next/image";
import Claudius_500x500 from "@/public/images/Claudius_500x500.jpg";
import Headline from "@/components/Headline/Headline";
import DropDown from "./DropDown";


export default function Aboutsection({headline}) {
    return (
      <AboutSection>
        <StyledContainer>
          <Headline headline={"about"} />

          <AboutContent>
            <HeaderWrapper>
              <ImageWrapper>
                <StyledImage
                  src={Claudius_500x500}
                  alt="Picture of Claudius Urban"
                />
              </ImageWrapper>
              <TextWrapper>
                <StyledQuote>
                  “Great stories inspire me to create outstanding animation.”
                </StyledQuote>
              </TextWrapper>
            </HeaderWrapper>

            <TextWrapper>
              <StyledText>
                From overseeing the animation team to pipeline, previsualization
                and motion capture acting, Claudius Urban’s role as animation
                supervisor is extremely wide-ranging. He thrives on every
                challenge. Since his training in 3D at the prestigious
                Filmakademie Baden-Württemberg in Ludwigsburg, Germany, Claudius
                has traveled all over the world, honing his craft in animation.
                He has worked with several major visual effects houses,
                experiencing different pipelines, approaches, cultures and
                working environments. Throughout this time he created iconic
                sequences for film and television: Iron Man’s self-assembling
                suit, the Troll ramming head-first into a stone wall in Hobbit
                3, the disturbing and memorable birth of Doomsday in Batman vs.
                Superman and the impressive one-minute climactic battle shot of
                Koba running amuck on a tank in Dawn of the Planet of the Apes.
                “Growing up, I always had pictures and stories in my head that I
                wasn’t able to communicate,” says Claudius. “Animation gave me a
                way to tell stories as living pictures, to breathe life into my
                thoughts. I love that my profession has given me a way of
                channeling that creativity.”
              </StyledText>
            </TextWrapper>

            <DropDown />	
          </AboutContent>
        </StyledContainer>
      </AboutSection>
    );
    }

    const AboutSection = styled.section`
      background-color: var(--black);
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
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem ;
    background-color: var(--yellow);
    width: 80%;

    @media (min-width: 768px) {
      padding: 2rem;
    }
    `;

    const HeaderWrapper = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
`;
    const ImageWrapper = styled.div`
        position: relative;
        width: 40vh;
        height: auto;

        @media (min-width: 768px) {
          width: 30vh;
          height: auto;
        }     
    `;

    const StyledImage = styled(Image)`
      width: 100%;
      height: 100%;
      object-fit: cover;
    `;

    const TextWrapper = styled.div`
      display: flex;
      position: relative;
      justify-content: center;
    `;

  const StyledQuote = styled.h3`
    font-size: 0.95rem;
    color: var(--black);
    font-style: italic;;
    padding: 1rem;

    @media (min-width: 768px) {
      font-size: 1.75rem;
      padding: 2rem;
    }
  `;

    const StyledText = styled.p`
      font-size: 0.75rem;
      color: var(--black);
      line-height: 1.5;
      text-align: left;
      padding: 1rem 0rem;

      @media (min-width: 768px) {
        font-size: 1.75rem;
        padding: 2rem 0rem;
      }
    `;