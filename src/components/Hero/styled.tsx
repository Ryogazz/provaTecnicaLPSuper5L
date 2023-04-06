import styled from "styled-components";

export const HeroWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    
  }
`;


export const FlexColumn = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  }
`;
