import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 320px) {
    max-width: 320px;
    padding-left: 24px;
    padding-right: 24px
  }
  @media (min-width: 480px) {
    max-width: 480px;
    padding-left: 35px;
    padding-right: 35px
  }
  @media (min-width: 640px) {
    max-width: 640px;
    padding-left: 47px;
    padding-right: 47px
  }
  @media (min-width: 768px) {
    max-width: 768px;
    padding-left: 55px;
    padding-right: 55px
  }
  @media (min-width: 1024) {
    max-width: 1024px;
    padding-left: 75px;
    padding-right: 75px
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 94px;
    padding-right: 94px
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
    padding-left: 112px;
    padding-right: 112px
  }
  @media (min-width: 1920px) {
    max-width: 1920px;
    padding-left: 140px;
    padding-right: 140px;
  }
`;

