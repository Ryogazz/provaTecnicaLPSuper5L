import styled from "styled-components";

export const PhotoListContainer = styled.div`
  /* width: 100%; */
  /* max-width: 142px; */
  max-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .swiper-wrapper {
    max-width: 122px;
    max-height: 811px;

    @media screen and (max-width: 720px) {
      width: 100%;
      /* max-height: 100px; */
    }
  }
  .swiper-slide {
    /* width: 80px;
    height: 80px; */
    gap: 10px;

    @media screen and (max-width: 720px) {
      max-width: 100%;
      /* max-height: 400px; */
    }
  }
`;

interface PhotoProps {
  selected: boolean;
}

export const Photo = styled.img<PhotoProps>`
  width: 122px;
  height: 122px;
  object-fit: contain;

  ${(PhotoProps) =>
    PhotoProps.selected &&
    `
    border-color: #004c98;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
  `}
  @media screen and (max-width: 720px) {
    width: 60px;
    height: 60px;
  }
`;

export const IconButton = styled.button`
  width: 38px;
  height: 38px;
  background-color: #ffff;
  border: none;

  @media screen and (max-width: 720px) {
    background-color: transparent;
    img {
      transform: translate(-50%, -50%) rotate(-90deg);
    }
  }
`;

export const IconContainer = styled.div`
  width: 122px;
  height: 53px;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
  background-color: #ffff;
  align-items: center;
  z-index: 1;

  @media screen and (max-width: 720px) {
    height: 30px;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-left: 3px;
  }
`;
