import { Container } from "../Global.styled";
import { CircleWrapper, ImageInCircle, ImageInsideWrapper, LeftDiv, MainDiv, Paragraph, RightContent, RightDiv, Title, WhoIsItWrapper } from './styled';
import img from '../../assets/PNG/CompositeLayer (1).png';
import json from './texts.json';
const WhoIsIt = () => {
  return (
    <WhoIsItWrapper>
      <Container>
      <MainDiv>
      <LeftDiv>
        <CircleWrapper>
          <ImageInsideWrapper>
            <ImageInCircle src={img} />
          </ImageInsideWrapper>
        </CircleWrapper>
      </LeftDiv>
      <RightDiv>
        <RightContent>
          <Title>{json.title}</Title>
          <Paragraph>{json.text}</Paragraph>
          <Paragraph>{json.text2}</Paragraph>
          <Paragraph>{json.text3}</Paragraph>
          <Paragraph>{json.text4}</Paragraph>
        </RightContent>
      </RightDiv>
    </MainDiv>
      </Container>
    </WhoIsItWrapper>
  );
};

export default WhoIsIt;
