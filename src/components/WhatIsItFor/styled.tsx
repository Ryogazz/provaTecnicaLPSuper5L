import styled from 'styled-components';
import img from '../../assets/PNG/molecula.jpg';

export const WhatIsItForWrapper = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
`;

export const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftDiv = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 10px 0 0 10px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
  transform: scale(0.8);

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
    transform: scale(0.9);
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transform: none;
    padding: 5%;
  }
`;

export const RightDiv = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  /* margin: 10%; */
`;

export const Title = styled.h2`
  font-family: "inter";
  font-size: 36px;
  font-weight: bold;
  line-height: 48px;
  font-style: normal;
  text-align: left;
  color: #004c98;
  margin-bottom: 5%;
`;

export const TextW = styled.p`
  font-family: "inter";
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  font-style: normal;
  text-align: left;
  color: #004c98;
`;

export const Separator = styled.hr`
  border: none;
  /* border-top: 1px solid #ccc; */
  margin: 5% 0;
`;
