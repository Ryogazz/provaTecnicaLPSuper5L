import { Container } from "../Global.styled";
import ImgComponent from "./ImgComponets";
import {
  Circle,
  Circle1,
  Circle2,
  HowToUseWrapper,
  ImgContainer,
  NumberH,
  Rectangle,
  RectangleCenter,
  RectangleF,
  RectangleTextF,
  RetangleAndCircle,
  TextH,
  TextRectangleCenter,
  TitleH,
} from "./styled";
import json from "./texts.json";
import img from "../../assets/PNG/limpeza_pesada.png";
import img2 from "../../assets/PNG/limpeza_media.png";
import img3 from "../../assets/PNG/limpeza_leve.png";
import { ImgWrapper } from "./styled/ImgComponent";

const HowToUse = () => {
  return (
    <HowToUseWrapper>
      <Container>
        <TitleH>{json.title}</TitleH>
        <RetangleAndCircle>
          <Rectangle>
            <Circle>
              <NumberH>1</NumberH>
            </Circle>
            <TextH>{json.text}</TextH>
          </Rectangle>
          <Rectangle>
            <Circle>
              <NumberH>2</NumberH>
            </Circle>
            <TextH>{json.text2}</TextH>
          </Rectangle>
          <Rectangle>
            <Circle>
              <NumberH>3</NumberH>
            </Circle>
            <TextH>{json.text3}</TextH>
          </Rectangle>
          <Rectangle>
            <Circle>
              <NumberH>4</NumberH>
            </Circle>
            <TextH>{json.text4}</TextH>
          </Rectangle>
          <Rectangle>
            <Circle>
              <NumberH>5</NumberH>
            </Circle>
            <TextH>{json.text5}</TextH>
          </Rectangle>
        </RetangleAndCircle>
        <RectangleCenter>
          <TextRectangleCenter>{json.text6}</TextRectangleCenter>
          <ImgContainer>
            <ImgWrapper>
              <ImgComponent
                title={json.text7}
                imageUrl={img}
                circle1Number={"1"}
                circle2Number={"4"}
                rectangleText={json.Ml}
              />
              <ImgComponent
                title={json.text8}
                imageUrl={img2}
                circle1Number={"1"}
                circle2Number={"6"}
                rectangleText={json.Ml2}
              />
              <ImgComponent
                title={json.text9}
                imageUrl={img3}
                circle1Number={"1"}
                circle2Number={"10"}
                rectangleText={json.Ml3}
              />
            </ImgWrapper>
            <RectangleF>
              <RectangleTextF>proporção:</RectangleTextF>
              <Circle1 />
              <RectangleTextF>Produto</RectangleTextF>
              <Circle2 />
              <RectangleTextF>água</RectangleTextF>
            </RectangleF>
          </ImgContainer>
        </RectangleCenter>
      </Container>
    </HowToUseWrapper>
  );
};

export default HowToUse;
