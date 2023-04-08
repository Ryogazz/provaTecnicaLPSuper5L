import { Container } from "../Global.styled";
import {
  AfterCleaningWrapper,
  BulletList,
  BulletListItem,
  BulletPoint,
  Circle,
  CircleImg,
  ImageA2,
  LeftDiv,
  MainDiv,
  Rectangle,
  RightDiv,
  TextA,
  TextA2,
  TextA3,
  TitleA,
  TitleA3,
} from "./styled";
import json from "./texts.json";
import img from "../../assets/PNG/luva.png";
import img2 from "../../assets/PNG/imgA.png";

const AfterCleaning = () => {
  return (
    <AfterCleaningWrapper>
      <Container>
        <TitleA>{json.title}</TitleA>
        <TextA>{json.text}</TextA>

        <Rectangle>
          <TextA2>{json.text2}</TextA2>
          <BulletList>
            <BulletListItem>
              <BulletPoint />
              <span>{json.text3}</span>
            </BulletListItem>
            <BulletListItem>
              <BulletPoint />
              <span>{json.text4}</span>
            </BulletListItem>
            <BulletListItem>
              <BulletPoint />
              <span>{json.text5}</span>
            </BulletListItem>
            <BulletListItem>
              <BulletPoint />
              <span>{json.text6}</span>
            </BulletListItem>
          </BulletList>
        </Rectangle>
        <MainDiv>
          <LeftDiv>
            <Circle>
              <CircleImg src={img} />
            </Circle>
          </LeftDiv>
          <RightDiv>
            <TitleA3>{json.title2}</TitleA3>
            <TextA3>{json.text7}</TextA3>
            <ImageA2 src={img2} />
            <TextA3>{json.text8}</TextA3>
          </RightDiv>
        </MainDiv>
      </Container>
    </AfterCleaningWrapper>
  );
};

export default AfterCleaning;
