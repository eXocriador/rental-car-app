import React from "react";
import { Link, NavLink } from "react-router-dom";
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
        <Logo as={Link} to="/">
          RentalCar
        </Logo>
        <Navigation>
          <NavItem as={NavLink} to="/" end>
            Home
          </NavItem>
          <NavItem as={NavLink} to="/catalog">
            Catalog
          </NavItem>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
