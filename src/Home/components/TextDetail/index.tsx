import React, { ChangeEvent, useState } from "react";
import * as S from "./styles";
import img from "../../../assets/PNG/Grupo 40.png";
import icon from "../../../assets/PNG/Caminho 325.png";
import icon2 from "../../../assets/PNG/Grupo 155.png";
import NumberInput from "./NumberInput";
import CepInput from './CepInput';
import Table from './Table';

const TextDetail = () => {
  const [value, setValue] = useState(0);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(parseInt(event.target.value));
  }

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>SUPER PÓS OBRA 5L - REMOVE SUJIDADES</S.Title>
        <S.SubTitle>REF: 14543183</S.SubTitle>
        <S.ImgStar src={img} />
        <S.TextAvaliation>(45) Avaliações. Avalie agora!</S.TextAvaliation>
      </S.TitleContainer>
      <S.Line />
      <S.ValueContainer>
        <S.Value>R$75,00</S.Value>
        <S.ValueInstallment>em até 12x de R$ 7,19</S.ValueInstallment>
        <S.InputAndButton>
          <NumberInput
            min={1}
            max={10}
            step={1}
            value={value}
            onChange={handleChange}
          />
          <S.ContainerButton>
            <S.Button>Comprar</S.Button>
            <S.IncoAndText>
              <S.Icon src={icon} />
              <S.Text>
                Aqui sua compra é 100% segura, compre com tranquilidade.
              </S.Text>
            </S.IncoAndText>
          </S.ContainerButton>
        </S.InputAndButton>
        <S.Button2>Revenda e lucre</S.Button2>
        <S.Line />
        <S.IncoAndText2>
          <S.Icon2 src={icon2} />
          <S.Text2>Frete e prazo de entrega</S.Text2>
        </S.IncoAndText2>
        <CepInput 
          onCalculate={(cep: string) => {console.log(cep)}}
        />
        <Table />
      </S.ValueContainer>
    </S.Container>
  );
};

export default TextDetail;
