import {
  IconS,
  IconsContainer,
  PhotoAndIconsContainer,
  PhotoContainer,
  PhotoS,
  TextS,
} from "./styles/Photo.styled";
import img from "../../assets/PNG/Produto.png";
import textS from "../Hero/texts.json";
import icon from "../../assets/PNG/selo_50_litros.png";
import icon2 from "../../assets/PNG/selo_preço_litro.png";
const Photo = () => {

  return (
    <PhotoContainer>
      <PhotoAndIconsContainer>
        <PhotoS src={img} />
        <IconsContainer>
          <IconS src={icon} />
          <IconS src={icon2} />
        </IconsContainer>
      <TextS>{textS.imgText}</TextS>
      </PhotoAndIconsContainer>
    </PhotoContainer>
  );
};

export default Photo;
