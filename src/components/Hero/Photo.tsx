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
  //importar json textS

  return (
    <PhotoContainer>
      <PhotoAndIconsContainer>
        <PhotoS src={img} />
        <IconsContainer>
          <IconS src={icon} />
          <IconS src={icon2} />
        </IconsContainer>
      </PhotoAndIconsContainer>
      <TextS>{textS.imgText}</TextS>
    </PhotoContainer>
  );
};

export default Photo;
