import PhotoList from "./PhotoLis";
import { Container } from "../Global.styled";
import { Flex, FlexColumn, HeroWrapper } from "./styled";
import Photo from "./Photo";
import Sales from "./Sales";
import Menu from '../Menu';
const Home = () => {
  return (
    <HeroWrapper>
      <Container>
        <Flex>
          <FlexColumn>
            <PhotoList />
            <Photo />
          </FlexColumn>
          <Sales />
        </Flex>
        <Menu />
      </Container>
    </HeroWrapper>
  );
};

export default Home;
