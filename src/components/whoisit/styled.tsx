import styled from "styled-components";

export const WhoIsItWrapper = styled.div`
  height: auto;
  position: relative;
  background-color: #004c98;
`;

export const MainDiv = styled.div`
  width: 100%;
  display: flex;
`;

export const LeftDiv = styled.div`
  width: 50%;
  text-align-last: center;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const RightDiv = styled.div`
  width: 50%;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  line-height: 36px;
  font-style: normal;
  text-align: left;
  color: #ffffff; ;
`;

export const Paragraph = styled.p`
  margin-top: 16px;
  font-family: "inter";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  font-style: normal;
  text-align: left;
  color: #ffffff;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border: 1px solid black;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const ImageInsideWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const ImageInCircle = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
`;

export const CircleWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  border-radius: 50%;
  position: relative;
  margin-top: 15%;
`;

export const RightContent = styled.div`
  padding: 16px;
  margin-top: 15%;
`;
