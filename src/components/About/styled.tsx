import styled from "styled-components";
import img from "../../assets/PNG/chão.jpg";

export const AboutWrapper = styled.div`
  height: auto;
  position: relative;
  background-color: #004c98;
  padding-bottom: 20px;
`;

export const Background = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;


export const ImageWrapper = styled.div`
  position: absolute;
  top: 34%;
  left: 65%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 1920px) {
    top: 41%;
    left: 61%;
  }

  @media screen and (max-width: 1520px) {
    top: 41%;
    left: 65%;
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const ImageA = styled.img`
  max-width: 500px;
  width: 70%;
  height: auto;
  transform: scale(1.7);
  object-fit: contain;


`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: space-between;

  row-gap: 4rem;
  padding-top: 5rem;
  margin-bottom: 2rem;
`;

export const TitleA = styled.h1`
  font-family: "inter";
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  text-align: left;
  color: #ffffff;
  margin-bottom: 20px;
  @media screen and (max-width: 720px) {
    font-size: 3vw;
  }
`;

export const TexObs = styled.p`
  font-family: "inter";
  font-size: 10px;
  font-weight: 400;
  line-height: 22px;
  font-style: normal;
  text-align: left;
  color: #ffffff;
  @media screen and (max-width: 720px) {
    font-size: 2.5vw;
  }
`;

export const TextA = styled.p`
  font-family: "inter";
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  color: #ffffff;
  @media screen and (max-width: 720px) {
    font-size: 2.5vw;
  }
`;

export const TextContainer = styled.div`
  width: 36%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PaddingRectangle = styled.div`
  width: 100%;
  border-radius: 20px;
  background: #ffffff;
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  justify-content: space-around;
  position: relative;
  align-items: center;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const IconA = styled.img`
  width: 200px;
  height: auto;
`;
