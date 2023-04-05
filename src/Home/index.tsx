import ButtonsList from "./components/ButtonsList";
import Img from "./components/Img";
import ImgColumn from "./components/ImgColum";
import TextDetail from "./components/TextDetail";
import * as S from "./styles";

const Home = () => {
  return (
    <S.MainContainer>
      <S.HomeContainer>
        <S.FlexContainer>
          <ImgColumn />
          <Img />
          <TextDetail />
        </S.FlexContainer>
        <ButtonsList />
      </S.HomeContainer>
    </S.MainContainer>
  );
};

export default Home;
