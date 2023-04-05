import * as S from "./styles";
import ImgPrincipal from "../../../assets/PNG/mockup_super_pos_obra_principal_5l.png";
import Img1 from "../../../assets/PNG/selo_50_litros.png";
import Img2 from "../../../assets/PNG/selo_preço_litro.png";

export const Img = () => {
  return (
    <S.ImgContainer>
      <S.ImgAndTextContainer>
        <S.Img src={ImgPrincipal} alt="Logo" />
        <S.imageContainer>
          <S.image2 src={Img1} alt="Logo" />
          <S.image2 src={Img2} alt="Logo" />
        </S.imageContainer>
        <S.text>
          *Valor por litro diluído considerando diluição para limpeza leve
        </S.text>
      </S.ImgAndTextContainer>
    </S.ImgContainer>
  );
};

export default Img;
