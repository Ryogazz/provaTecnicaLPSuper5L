import * as S from "./styles/Photolist.styled";
import img1 from "../../assets/PNG/Produto.png";
import img2 from "../../assets/PNG/ALGICIDA 1L (1).png";
import img3 from "../../assets/PNG/ALGICIDA 1L (2).png";
import img4 from "../../assets/PNG/ALGICIDA 1L (3).png";
import img5 from "../../assets/PNG/ALGICIDA 1L (4).png";
import img6 from "../../assets/PNG/ALGICIDA 1L (5).png";
import icon from "../../assets/PNG/seta cima.png";
import icon2 from "../../assets/PNG/seta baixo.png";
import { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import type { Swiper as SwiperType } from 'swiper';

const PhotoList = () => {
  interface MyComponentProps {
    swiper: SwiperType;
  }
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null> (null);
  const isScreenSmall = useMediaQuery("(max-width:720px)");


  const handlePhotoClick = (index: number) => {
    setSelectedPhoto(index);
  };

  const handlePrev = () => {
    controlledSwiper?.slidePrev();
  }

  const handleNext = () => {
    controlledSwiper?.slideNext();
  }


  interface PhotoProps {
    src: string;
    selected: boolean;
    onClick: () => void;
  }

  const photos: PhotoProps[] = [
    {
      src: img1,
      onClick: () => handlePhotoClick(1),
      selected: selectedPhoto === 1,
    },
    {
      src: img2,
      onClick: () => handlePhotoClick(2),
      selected: selectedPhoto === 2,
    },
    {
      src: img3,
      onClick: () => handlePhotoClick(3),
      selected: selectedPhoto === 3,
    },
    {
      src: img4,
      onClick: () => handlePhotoClick(4),
      selected: selectedPhoto === 4,
    },
    {
      src: img5,
      onClick: () => handlePhotoClick(5),
      selected: selectedPhoto === 5,
    },
    {
      src: img6,
      onClick: () => handlePhotoClick(6),
      selected: selectedPhoto === 6,
    },
    {
      src: img2,
      onClick: () => handlePhotoClick(2),
      selected: selectedPhoto === 2,
    },
    {
      src: img3,
      onClick: () => handlePhotoClick(3),
      selected: selectedPhoto === 3,
    },
    {
      src: img4,
      onClick: () => handlePhotoClick(4),
      selected: selectedPhoto === 4,
    },
    {
      src: img5,
      onClick: () => handlePhotoClick(5),
      selected: selectedPhoto === 5,
    },
    {
      src: img6,
      onClick: () => handlePhotoClick(6),
      selected: selectedPhoto === 6,
    },
  ];


  return (
    <S.PhotoListContainer>
      <Swiper
      spaceBetween={isScreenSmall? 30 : 10}
      slidesPerView={isScreenSmall? 2 : 6}
      onSwiper={(swiper) => setControlledSwiper(swiper)}
      direction={isScreenSmall? 'horizontal' : 'vertical'}
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index}>
          <S.Photo src={photo.src} onClick={photo.onClick} selected/>
        </SwiperSlide>
      ))}
    </Swiper>
      <S.IconContainer>
        <S.IconButton onClick={handleNext}>{<img src={icon} />}</S.IconButton>
        <S.IconButton onClick={handlePrev}>{<img src={icon2} />}</S.IconButton>
      </S.IconContainer >
    </S.PhotoListContainer>
  );
};

export default PhotoList;
