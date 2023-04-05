import * as S from "./styles";

const Table = () => {
  return (
    <S.Table>
      <thead>
        <tr>
          <S.Th>Frete</S.Th>
          <S.Th>Valor</S.Th>
          <S.Th>Prazo</S.Th>
        </tr>
      </thead>
      <tbody>
        <S.Tr>
          <S.Td>CORREIOS PAC</S.Td>
          <S.Td>R$ 22,49</S.Td>
          <S.Td>5 a 6 dias úteis.</S.Td>
        </S.Tr>
        <S.Tr>
          <S.Td>CORREIOS sedex</S.Td>
          <S.Td>R$ 31,72</S.Td>
          <S.Td>2 a 3 dias úteis.</S.Td>
        </S.Tr>
      </tbody>
    </S.Table>
  );
};

export default Table;
