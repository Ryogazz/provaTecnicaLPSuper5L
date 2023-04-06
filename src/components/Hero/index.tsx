import PhotoList from "./PhotoLis";
import { Container } from "../Global.styled";
import { Flex, FlexColumn, HeroWrapper } from "./styled";
import Photo from "./Photo";
import Sales from "./Sales";
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
      </Container>
    </HeroWrapper>
  );
};

export default Home;
