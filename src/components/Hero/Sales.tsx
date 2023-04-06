import { SalesContainer, TitleS } from './styles/Sales.styled';
import json from './texts.json';

const Sales = () => {
  return (
   <SalesContainer>
    <TitleS>{json.title}</TitleS>
   </SalesContainer>
  );
};

export default Sales;