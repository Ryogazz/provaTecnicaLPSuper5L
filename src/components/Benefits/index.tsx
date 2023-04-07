import { Container } from "../Global.styled";
import { BenefitsWrapper, ContainerB, IconAndTextB, IconB, TextB, TextBox, TextWrapper, TitleB } from "./styled";
import json from "./texts.json";
import img from "../../assets/PNG/iconB.png";

const Benefits = () => {
  return (
    <BenefitsWrapper>
      <Container>
        <ContainerB>
          <TextBox>
            <TextWrapper>
            <TitleB>{json.title}</TitleB>
            <IconAndTextB>
              <IconB src={img} />
              <TextB>{json.text}</TextB>
            </IconAndTextB>
            <IconAndTextB>
              <IconB src={img} />
              <TextB>{json.text2}</TextB>
            </IconAndTextB>
            <IconAndTextB>
              <IconB src={img} />
              <TextB>{json.text3}</TextB>
            </IconAndTextB>
            <IconAndTextB>
              <IconB src={img} />
              <TextB>{json.text4}</TextB>
            </IconAndTextB>
            <IconAndTextB>
              <IconB src={img} />
              <TextB>{json.text5}</TextB>
            </IconAndTextB>
            </TextWrapper>
          </TextBox>
        </ContainerB>
      </Container>
    </BenefitsWrapper>
  );
};

export default Benefits;
