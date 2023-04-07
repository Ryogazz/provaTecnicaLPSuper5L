import styled from "styled-components";
import img from "../../assets/PNG/familia.jpg";

export const BenefitsWrapper = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  padding-bottom: 20px;
  height: 63vh;  
  position: relative;

  @media screen and (max-width: 720px) {
    height: 100vh;
  }
`;

export const ContainerB = styled.div`
  width: 100%;
  transform: scale(0.7);
  transform-origin: top left;
  margin-left: 20%;
  position: absolute;
  top: 25%;
  left: 0;
  bottom: 0;

`;

export const TextWrapper = styled.div`
  width: 100%;
  padding: 12%;
`

export const TextBox = styled.div`
  width: 50%;
  border-radius: 10px;
  background-color: #004c98;
  float: right;
  transform: scale(1);
  transform-origin: top right;

  @media screen and (max-width: 720px) {
    width: 100%;
    float: none;
    transform: scale(1);
    transform-origin: top left;
  }
`;

export const TitleB = styled.h1`
  font-family: "inter";
  font-size: 36px;
  font-weight: bold;
  line-height: 22px;
  font-style: normal;
  text-align: left;
  color: #ffffff;
  margin-bottom: 30px;
  text-align: center;
`;

export const IconAndTextB = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconB = styled.img`
  width: 33.5px;
  height: 36.9px;
  margin-right: 10px;
`;

export const TextB = styled.p`
  font-family: "inter";
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  color: #ffffff;
`;
