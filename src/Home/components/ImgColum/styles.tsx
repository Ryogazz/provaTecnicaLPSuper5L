import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 809px;
  margin-right: 18px;
  position: relative;
  gap: 15px;
`;

export const Img = styled.img`
  width: 122px;
  height: 123px;
  &:first-child {
    border-color: #004c98;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
  }
`;

export const ImgIconContainer = styled.div`
  width: 122px;
  height: 53px;
  background: #ffffff;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
`;

export const ImgIcon = styled.img`
  width: 38px;
  height: 38px;
`;
