import React, { useState } from "react";
import * as S from "./styles";



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
    <S.InputContainer>
      <S.InputWrapper>
        <S.Input type="text" placeholder="Digite o CEP" value={cep} onChange={handleCepChange} />
        <S.ButtonInput onClick={handleCalculateClick}>Calcular</S.ButtonInput>
      </S.InputWrapper>
    </S.InputContainer>
  );
};

export default CepInput;
