import { MenuIcon, MenuWrapper, HamburgerWrapper, HamburgerIcon, Overlay, CloseIcon } from "./styled";
import { useState, useEffect } from "react";
import { FaTimes } from 'react-icons/fa';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <>
        <HamburgerIcon onClick={toggleMenu} />
        {showMenu && (
          <>
            <Overlay onClick={toggleMenu} />
            <HamburgerWrapper>
              <CloseIcon onClick={toggleMenu} />
              <MenuIcon onClick={toggleMenu}>O que é?</MenuIcon>
              <MenuIcon onClick={toggleMenu}>Benefícios do Super Pós Obra?</MenuIcon>
              <MenuIcon onClick={toggleMenu}>Descrição</MenuIcon>
              <MenuIcon onClick={toggleMenu}>Quem é a Policlean Oirad?</MenuIcon>
            </HamburgerWrapper>
          </>
        )}
      </>
    );
  } else {
    return (
      <MenuWrapper>
        <MenuIcon>O que é?</MenuIcon>
        <MenuIcon>Benefícios do Super Pós Obra?</MenuIcon>
        <MenuIcon>Descrição</MenuIcon>
        <MenuIcon>Quem é a Policlean Oirad?</MenuIcon>
      </MenuWrapper>
    );
  }
};

export default Menu;