import React, { useState } from "react";
import { ButtonInput, Input, InputContainer, InputWrapper } from './styles/Sales.styled';

interface Props {
  onCalculate: (cep: string) => void;
}

const CepInput: React.FC<Props> = ({ onCalculate }) => {
  const [cep, setCep] = useState("");

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  const handleCalculateClick = () => {
    onCalculate(cep);
  };

  return (
    <InputContainer>
      <InputWrapper>
        <Input type="text" placeholder="Digite o CEP" value={cep} onChange={handleCepChange} />
        <ButtonInput onClick={handleCalculateClick}>Calcular</ButtonInput>
      </InputWrapper>
    </InputContainer>
  );
};

export default CepInput;