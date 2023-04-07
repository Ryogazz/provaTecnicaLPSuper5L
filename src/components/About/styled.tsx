import styled from "styled-components";
import img from "../../assets/PNG/chão.jpg";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

export const Background = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`;

export const BlueRectangle = styled.div`
  background-color: #004c98;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 34%;
  left: 65%;
  transform: translate(-50%, -50%);
`;

export const ImageA = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  transform: scale(1.7);
`;

export const TextWrapper = styled.div`
  max-width: 100%;
  height: 100%;
`;

export const TitleA = styled.h1`
  width: 100%;
  font-family: "inter";
  font-size: 2vw;
  font-weight: bold;
  line-height: 22px;
  font-style: normal;
  text-align: left;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const TexObs = styled.p`
  width: 50vw;
  font-family: "inter";
  font-size: 1.5vw;
  font-weight: 400;
  line-height: 22px;
  font-style: normal;
  text-align: left;
  color: #ffffff;
`;

export const TextA = styled.p`
  width: 50vw;
  font-family: "inter";
  font-size: 1.8vw;
  font-weight: 400;
  line-height: 22px;
  font-style: normal;
  text-align: left;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

export const PaddingRectangle = styled.div`
  width: 90%;
  max-width: 800px; 
  border-radius: 20px;
  background: #ffffff;
  display: flex;
  box-sizing: border-box;
  position: absolute;
  top: 88%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;

  @media screen and (max-width: 720px) {
    display: none;
}
`;

export const IconA = styled.img`
  width: 20vw; 
  height: auto;
  max-width: 267px; 
`;