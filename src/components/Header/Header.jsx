import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Navigation,
  NavItem
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>RentalCar</Logo>
        <Navigation>
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="/catalog">Catalog</NavItem>
          <NavItem to="/favorites">Favorites</NavItem>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
