import styled from 'styled-components';

export const AfterCleaningWrapper = styled.div`
  height: auto;
  position: relative;
  background-color: #83bdd6;
`;

export const TitleA = styled.h1`
  font-family: "inter";
  font-size: 36px;
  font-weight: bold;
  line-height: 22px;
  font-style: normal;
  text-align: center;
  color: #004c98;
  padding: 50px 0;
`;

export const TextA = styled.p`
  font-family: "inter";
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  padding: 1px 17vw;
`;

export const Rectangle = styled.div`
  background-color: #b4dbec;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 197px;
  border-radius: 10px;
`;

export const TextA2 = styled.span`
  font-family: "inter";
  font-size: 36px;
  font-weight: bold;
  line-height: 22px;
  font-style: normal;
  text-align: center;
  color: #004c98;
  margin-right: 20px;
`;

export const BulletList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  margin-left: 5px;
`;

export const BulletListItem = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
  font-family: "inter";
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  font-style: normal;
  color: #004c98;
`;

export const BulletPoint = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #004c98;
`;


export const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const LeftDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const Circle = styled.div`
  width: 70%;
  height: 70%;
  border-radius: 50%;
  border-color: #004c98;
  border-width: 1px;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleImg = styled.img`
  max-width: 100%;
  max-height: 145%;
  overflow: hidden;
`;

export const RightDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const TitleA3 = styled.h1`
  font-family: "inter";
  font-size: 42px;
  font-weight: bold;
  line-height: 48px;
  font-style: normal;
  color: #004c98;
  align-self: start;
`;

export const TextA3 = styled.p`
  font-family: "inter";
  font-size: 24px;
  font-weight: normal;
  line-height: 36px;
  font-style: normal;
  color: #ffff;
`;

export const ImageA2 = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-top: 20px;
`;
