import {
  Circle,
  CircleText,
  CirclesWrapper,
  ComponentWrapper,
  ImageI,
  Rectangle,
  RectangleText,
  Title,
} from "./styled/ImgComponent";

interface Props {
  title: string;
  imageUrl: string;
  circle1Number: string;
  circle2Number: string;
  rectangleText: string;
}

const ImgComponent = ({
  circle1Number,
  circle2Number,
  imageUrl,
  rectangleText,
  title,
}: Props) => {
  return (
    <ComponentWrapper>
      <Title>{title}</Title>
      <ImageI src={imageUrl} />
      <CirclesWrapper>
        <Circle>
          <CircleText>{circle1Number}</CircleText>
        </Circle>
        <Circle>
          <CircleText>{circle2Number}</CircleText>
        </Circle>
      </CirclesWrapper>
      <Rectangle>
        <RectangleText>{rectangleText}</RectangleText>
      </Rectangle>
    </ComponentWrapper>
  );
};

export default ImgComponent;
