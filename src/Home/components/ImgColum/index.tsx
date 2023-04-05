import * as S from "./styles";
import img1 from "../../../assets/PNG/mockup_super_pos_obra_principal_5l.png";
import img2 from "../../../assets/PNG/ALGICIDA 1L (1).png";
import img3 from "../../../assets/PNG/ALGICIDA 1L (2).png";
import img4 from "../../../assets/PNG/ALGICIDA 1L (3).png";
import img5 from "../../../assets/PNG/ALGICIDA 1L (4).png";
import img6 from "../../../assets/PNG/ALGICIDA 1L (5).png";
import icon from "../../../assets/PNG/Componente 75 –.png";
import icon2 from "../../../assets/PNG/Componente 75 – (1).png";

export const ImgColumn = () => {
  return (
    <S.Container>
      <S.Img src={img1} />
      <S.Img src={img2} />
      <S.Img src={img3} />
      <S.Img src={img4} />
      <S.Img src={img5} />
      <S.Img src={img6} />
      <S.ImgIconContainer>
        <S.ImgIcon src={icon} />
        <S.ImgIcon src={icon2} />
      </S.ImgIconContainer>
    </S.Container>
  );
};

export default ImgColumn;
