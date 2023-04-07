import { Container } from "../Global.styled";
import {
  AboutWrapper,
  Background,
  BlueRectangle,
  IconA,
  ImageA,
  ImageWrapper,
  PaddingRectangle,
  TexObs,
  TextA,
  TextContainer,
  TextWrapper,
  TitleA,
} from "./styled";
import img from "../../assets/PNG/mockup-com-capa.png";
import icon from "../../assets/PNG/icon1.png";
import icon2 from "../../assets/PNG/icon2.png";
import icon3 from "../../assets/PNG/icon3.png";
import json from "./texts.json";

const About = () => {
  return (
    <AboutWrapper>
      <Background>
        <BlueRectangle>
          <ImageWrapper>
            <ImageA src={img} />
          </ImageWrapper>
          <Container>
            <TextWrapper>
              <TextContainer>
                <TitleA>{json.title}</TitleA>
                <TextA>{json.textLine1}</TextA>
                <TextA>{json.text}</TextA>
                <TexObs>{json.textObs}</TexObs>
              </TextContainer>
              <TextContainer>
                <TitleA>{json.title2}</TitleA>
                <TextA>{json.text2}</TextA>
              </TextContainer>
              <TextContainer>
                <TitleA>{json.title3}</TitleA>
                <TextA>{json.text3}</TextA>
              </TextContainer>
            </TextWrapper>
            <PaddingRectangle>
              <IconA src={icon} />
              <IconA src={icon2} />
              <IconA src={icon3} />
            </PaddingRectangle>
          </Container>
        </BlueRectangle>
      </Background>
    </AboutWrapper>
  );
};

export default About;
