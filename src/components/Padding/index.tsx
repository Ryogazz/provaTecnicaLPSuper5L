import { useState, useEffect } from 'react';
import { PaddingWrapper } from './styled';
import img from "../../assets/PNG/Componente 80 –.png";
import imgM from "../../assets/PNG/Componente 80 –.png";

const Paddin = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobileOrNot = windowSize.width < 720 ? imgM : img;

  return (
    <PaddingWrapper src={mobileOrNot} />
  );
};

export default Paddin;
