import styled from "styled-components";

export const SalesContainer = styled.div`
  max-width: 90vw;
  border-color: #e2e2e2;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleS = styled.h1`
  font-family: "inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  font-style: normal;
  text-align: center;
  color: #687175;
  margin-top: 40px;
  margin-left: 2rem;
  margin-right: 2rem;
  white-space: nowrap;

  @media screen and (max-width: 480px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const RefS = styled.p`
  font-family: "inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  font-style: normal;
  text-align: center;
  color: #687175;
  margin-top: 14px;
  margin-left: auto;
  margin-right: auto;
`;

export const IconS = styled.img`
  width: 128px;
  height: 19px;
  object-fit: cover;
  //centralizar
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 22px;
`;

export const Evaluation = styled.p`
  width: 192px;
  height: 16px;

  font-family: "inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  font-style: normal;
  text-align: center;
  color: #687175;
  margin-left: auto;
  margin-right: auto;
  margin-top: 11px;
  white-space: nowrap;
  margin-bottom: 14px;
`;

export const Line = styled.hr`
  border-color: #e2e2e2;
  border-width: 1px;
  border-style: solid;
  margin-left: 24px;
  margin-right: 24px;
  width: 90%;
  background-color: #e2e2e2;
`;

export const Price = styled.p`
  width: 261px;
  height: 60px;

  font-family: "inter";
  font-size: 48px;
  font-weight: bold;
  line-height: 48px;
  font-style: normal;
  text-align: center;
  color: #000000;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const Installment = styled.p`
  width: 261px;
  height: 20px;
  font-family: "inter";
  font-size: 16px;
  /* font-weight: bold; */
  line-height: 16px;
  font-style: normal;
  text-align: center;
  color: #000000;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7px;
`;

export const ContainerNumberInput = styled.div`
  width: 100px;
  height: 50px;
  border-color: #e2e2e2;
  border-width: 1px;
  border-style: solid;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin: 30px;
  button {
    width: 16px;
    height: 13px;
    font-size: 14px;
    font-weight: bold;
    line-height: 1;
    background-color: #fff;
    color: #333;
    cursor: pointer;
    border: none;
  }
  input {
    width: 60px;
    height: 40px;
    font-size: 15px;
    text-align: center;
    border: none;
    outline: none;
  }
`;

export const ButtonG = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 7px;

  background: #59c00b;
  font-family: "inter";
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  font-style: normal;
  text-align: center;
  color: #ffffff;
`;

export const ButtonANdInput = styled.div`
  width: 544px;
  height: 65px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  justify-content: center;
  padding: 7px;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const IconSecurity = styled.img`
  width: 14.8px;
  height: 20px;
`;

export const SecurityText = styled.p`
  width: 351px;
  height: 14px;
  font-family: "inter";
  font-size: 13px;
  font-weight: 400;
  line-height: 13px;
  font-style: normal;
  text-align: left;
  color: #59c00b;
`;
export const IconAndSecurity = styled.div`
  display: flex;
  width: 374.5px;
  height: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  align-items: center;
  gap: 9px;
  margin-bottom: 9px;
`;

export const ButtonB = styled.button`
  width: 75%;
  height: 65px;
  border-radius: 7px;
  background: #004c98;
  margin-left: auto;
  margin-right: auto;

  font-family: "inter";
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  margin: 8px;
  margin-bottom: 20px;
`;

export const IconCart = styled.img`
  width: 49.2px;
  height: 24.4px;
`;
export const TextCart = styled.p`
  width: 100%;
  height: 18px;
  font-family: "inter";
  font-size: 18px;
  font-weight: bold;
  line-height: 18px;
  font-style: normal;
  text-align: left;
  color: #000000;
`;

export const IconAndTextCart = styled.div`
  width: 275px;
  height: 18px;
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 30px;
`;

export const InputContainer = styled.div`
  width: 75%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: #e2e2e2;
  border-width: 1px;
  border-style: solid;
  border-radius: 7px;
  margin-top: 21px;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 24px;
  padding: 22px;
  border-radius: 7px;
  &:focus {
    outline: none;
  }
`;

export const ButtonInput = styled.button`
  height: 100%;
  border: none;
  color: black;
  font-size: 24px;
  border-radius: 0 7px 7px 0;
  cursor: pointer;
  background-color: #fff;
  padding: 0 22px;
`;

export const TableS = styled.table`
  width: 90%;
  height: 116px;
  margin-top: 25px;
  border-spacing: 0;
  margin-bottom: 30px;
`;

export const ThS = styled.th`
  height: 13px;
  padding: 13px;
  font-family: "inter";
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
  font-style: normal;
  text-align: left;
  color: #000000;
  text-align: center;
  background-color: #e2e2e2;
`;

export const TdS = styled.td`
  height: 13px;
  font-family: "inter";
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  font-style: normal;
  text-align: center;
  color: #000000;
  border: none;
`;

export const TrS = styled.tr`
  background-color: #e2e2e2;
  padding: 10px;
  &:nth-child(odd) {
    background-color: #f1f1f1;
  }
`;
