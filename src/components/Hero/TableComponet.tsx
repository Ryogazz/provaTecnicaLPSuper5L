import { TableS, TdS, ThS, TrS } from './styles/Sales.styled';

const TableComponent = () => {
  return (
    <TableS>
      <thead>
        <tr>
          <ThS>Frete</ThS>
          <ThS>Valor</ThS>
          <ThS>Prazo</ThS>
        </tr>
      </thead>
      <tbody>
        <TrS>
          <TdS>CORREIOS PAC</TdS>
          <TdS>R$ 22,49</TdS>
          <TdS>5 a 6 dias úteis</TdS>
        </TrS>
        <TrS>
          <TdS>CORREIOS sedex</TdS>
          <TdS>R$ 31,72</TdS>
          <TdS>2 a 3 dias úteis</TdS>
        </TrS>
      </tbody>
    </TableS>
  );
};

export default TableComponent;