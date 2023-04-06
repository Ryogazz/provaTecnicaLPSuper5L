import styled from "styled-components";

export const PhotoContainer = styled.div`
  max-width: 70vw;
  max-height: 70vh;

  border-color: #e2e2e2;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
`;

export const PhotoS = styled.img`
  width: 119%;
  max-width: 809px;
`;

export const TextS = styled.p`
font-family: "inter";
font-size: 14px;
font-weight: 400;
line-height: 22px;
font-style: normal;
text-align: center;
color: #aeadad;
`;

export const IconsContainer = styled.div`
max-width: 150px;
max-height: 317px;
display: flex;
flex-direction: column;
gap: 17px;
overflow: hidden;
margin-right: 10px;
margin-top: 12px;
`;


export const IconS = styled.img`
width: 100%;
`;


export const PhotoAndIconsContainer = styled.div`
 display: grid;
  grid-template-columns: 1fr 15%;
  align-items: center;
  justify-content: center;

  & ${PhotoS} {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  & ${IconsContainer} {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-self: start;
  }

  & ${TextS} {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    text-align: center;
    margin-top: 20px;
  }


`