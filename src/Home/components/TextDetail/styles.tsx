import styled from "styled-components";

export const Container = styled.div`
  width: 673px;
  height: 811px;

  border-color: #e2e2e2;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;

  background: #ffffff;
  margin-left: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const Title = styled.div`
  width: 516px;
  height: 24px;

  font-family: "inter";
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  font-style: normal;
  text-align: center;
  color: #687175;
  margin-bottom: 17px;
`;

export const SubTitle = styled.div`
  width: 100px;
  height: 12px;

  font-family: "inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  font-style: normal;
  text-align: center;
  color: #687175;
  margin-bottom: 22px;
`;

export const ImgStar = styled.img`
  width: 128.8px;
  height: 19.8px;
  margin-bottom: 11px;
`;
export const TextAvaliation = styled.div`
  width: 192px;
  height: 16px;

  font-family: "inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  font-style: normal;
  text-align: center;
  color: #687175;
  margin-bottom: 19px;
`;

export const Line = styled.hr`
  width: 624px;
  border-color: #e2e2e2;
  border-width: 1px;
  border-style: solid;
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Value = styled.div`
  width: 261px;
  height: 60px;

  font-family: "inter";
  font-size: 48px;
  font-weight: bold;
  line-height: 48px;
  font-style: normal;
  text-align: center;
  color: #000000;
  margin-bottom: 7px;
`;

export const ValueInstallment = styled.div`
  width: 261px;
  height: 20px;

  font-family: "inter";
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
  font-style: normal;
  text-align: center;
  color: #000000;
  margin-bottom: 15px;
`;

export const InputAndButton = styled.div`
  display: flex;
  margin-bottom: 9px;
  gap: 14px;
`;

export const ContainerNumberInput = styled.div`
  width: 132px;
  height: 65px;
  border-color: #e2e2e2;
  border-width: 1px;
  border-style: solid;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

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

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Button = styled.button`
  width: 398px;
  height: 65px;

  border-radius: 7px;

  background: #59c00b;
  font-family: "inter";
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
  font-style: normal;
  text-align: center;
  color: #ffffff;
`;

export const IncoAndText = styled.div`
  gap: 9px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 14.8px;
  height: 20px;
`;

export const Text = styled.div`
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

export const Button2 = styled.button`
  width: 544px;
  height: 65px;
  border-radius: 7px;
  background: #004c98;
  font-family: "inter";
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const IncoAndText2 = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 20px;
`;

export const Icon2 = styled.img`
  width: 49.2px;
  height: 24.4px;
`;

export const Text2 = styled.div`
  width: 210px;
  height: 18px;

  font-family: "inter";
  font-size: 18px;
  font-weight: bold;
  line-height: 18px;
  font-style: normal;
  text-align: left;
  color: #000000;
`;

export const InputContainer = styled.div`
  width: 398px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: #e2e2e2;
  border-width: 1px;
  border-style: solid;
  border-radius: 7px;
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

export const Table = styled.table`
  width: 631px;
  height: 126px;
  margin-top: 25px;
  border-spacing: 0;
`;

export const Th = styled.th`
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

export const Td = styled.td`
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

export const Tr = styled.tr`
  background-color: #e2e2e2;
  padding: 10px;
  &:nth-child(odd) {
    background-color: #f1f1f1;
  }
`;
