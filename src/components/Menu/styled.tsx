import styled from "styled-components";
import { FaBars, FaTimes } from 'react-icons/fa';

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 720px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const HamburgerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const HamburgerIcon = styled(FaBars)`
  font-size: 28px;
  color: #004c98;
`;

export const CloseIcon = styled(FaTimes)`
  font-size: 28px;
  color: #004c98;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const MenuIcon = styled.a`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: #004c98;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  font-family: "inter";
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  font-style: normal;
  text-align: center;
  color: #004c98;
  margin: 10px;

  @media (min-width: 720px) {
    width: 312px;
    height: 135px;
    margin: 0;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;