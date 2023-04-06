import {
  ButtonANdInput,
  ButtonB,
  ButtonG,
  Evaluation,
  IconAndSecurity,
  IconAndTextCart,
  IconCart,
  IconS,
  IconSecurity,
  Installment,
  Line,
  Price,
  RefS,
  SalesContainer,
  SecurityText,
  TextCart,
  TitleS,
} from "./styles/Sales.styled";
import json from "./texts.json";
import icon from "../../assets/PNG/Grupo 40.png";
import IconSecu from "../../assets/PNG/Caminho 325.png";
import IconCar from "../../assets/PNG/caminhão.png";
import NumberInput from "./NumberInputComponent";
import { ChangeEvent, useState } from "react";
import CepInput from './CepInput';
import TableComponent from './TableComponet';

const Sales = () => {
  const [value, setValue] = useState(0);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(parseInt(event.target.value));
  }

  return (
    <SalesContainer>
      <TitleS>{json.title}</TitleS>
      <RefS>{json.ref}</RefS>
      <IconS src={icon} />
      <Evaluation>
        <strong>{json.evaluationBold}</strong>
        {json.evaluation}
      </Evaluation>
      <Line />
      <Price>{json.value}</Price>
      <Installment>
        {json.installment}
        {<strong>{json.installmentBold}</strong>}
        {json.installmentCont}
        {<strong>{json.installmentBoldCont}</strong>}
      </Installment>
      <ButtonANdInput>
        <NumberInput
          min={1}
          max={10}
          step={1}
          value={value}
          onChange={handleChange}
        />
        <ButtonG>Comprar</ButtonG>
      </ButtonANdInput>
      <IconAndSecurity>
        <IconSecurity src={IconSecu} />
        <SecurityText>{json.securityText}</SecurityText>
      </IconAndSecurity>
      <ButtonB>Revenda e lucre</ButtonB>
      <Line />
      <IconAndTextCart>
        <IconCart src={IconCar}/>
        <TextCart>{json.cepText}</TextCart>
      </IconAndTextCart>
      <CepInput 
        onCalculate={(cep: string) => {console.log(cep)}}
      />

      <TableComponent />
    </SalesContainer>
  );
};

export default Sales;
