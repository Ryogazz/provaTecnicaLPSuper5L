import styled from "styled-components";

export const HowToUseWrapper = styled.div`
  height: auto;
  position: relative;
  background-color: #83bdd6;
`;

export const TitleH = styled.h1`
  font-family: "inter";
  font-size: 36px;
  font-weight: bold;
  line-height: 22px;
  font-style: normal;
  text-align: center;
  color: #004c98;
  padding: 50px 0;
`;

export const Rectangle = styled.div`
  width: 312px;
  height: 199px;
  border-radius: 10px;
  background: #004c98;
  position: relative;
  margin-right: 10px;

  @media screen and (max-width: 720px) {
    margin-right: 0;
    margin-bottom: 50px;
    width: 100%;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Circle = styled.div`
  width: 89px;
  height: 89px;
  border-radius: 50%;
  background: #ffffff;
  position: absolute;
  top: -44.5px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NumberH = styled.span`
  font-family: "inter";
  font-size: 48px;
  font-weight: bold;
  line-height: 22px;
  font-style: normal;
  text-align: center;
  color: #004c98;
`;

export const TextH = styled.p`
  font-family: "inter";
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const RetangleAndCircle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-right: -10px;
  margin-bottom: 40px;

  @media screen and (max-width: 720px) {
    flex-direction: column;

    ${Rectangle} {
      margin-right: 0;
    }
  }

  ${Rectangle}:not(:last-child) {
    margin-right: 10px;
  }
`;

export const RectangleCenter = styled.div`
  width: 100%;
  border-radius: 10px;
  border-color: #004c98;
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TextRectangleCenter = styled.div`
  width: 229px;
  height: 53px;
  font-family: "inter";
  font-size: 28px;
  font-weight: bold;
  line-height: 22px;
  font-style: normal;
  text-align: center;
  color: #004c98;
  position: absolute;
  top: -12px;
  left: 50%;
  background-color: #83bdd6;
  transform: translateX(-50%);
`;

export const RectangleF = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: fit-content;
  min-width: 235px; 
  padding: 10px 20px;
  border-color: rgb(0, 76, 152);
  border-width: 2px;
  border-style: solid;
  border-radius: 50px;
  margin-bottom: 76px;
  margin-top: 35px;
`;

export const CircleF = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 5px;
`;

export const RectangleTextF = styled.span`
  font-family: "inter";
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  font-style: normal;
  text-align: center;
  color: #004c98;
`;

export const Circle1 = () => <CircleF color="#ff0000" />;
export const Circle2 = () => <CircleF color="#00F5FF" />;

export const ImgContainer = styled.div``;
