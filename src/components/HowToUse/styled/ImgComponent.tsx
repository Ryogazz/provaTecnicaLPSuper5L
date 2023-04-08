import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "inter";
  font-size: 24px;
  font-weight: bold;
  line-height: 22px;
  font-style: normal;
  text-align: center;
  color: #004c98;
`;

export const ImageI = styled.img`
  margin-top: 20px;
  width: 70%;
`;

export const CirclesWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: space-between;
    -webkit-box-align: center;
    width: 54%;
    align-items: center;
`;

export const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export const CircleText = styled.span`
  font-family: "inter";
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  font-style: normal;
  text-align: center;
  color: #004c98;
`;

export const Rectangle = styled.div`
  margin-top: 20px;
  width: min-content;
  height: min-content;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: #ffff;
  padding: 5px 20px;
`;
export const RectangleText = styled.span`
  font-family: "inter";
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  font-style: normal;
  text-align: center;
  color: #ffffff;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: 20px;
  }
`;