import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors, fonts, spacing } from "../Shared/variables";

export const HeaderContainer = styled.header`
  background-color: ${colors.background};
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: ${fonts.sizes["2xl"]};
  font-weight: ${fonts.weights.bold};
  color: ${colors.text};
  margin: 0;
  font-family: ${fonts.primary};
`;

export const Navigation = styled.nav`
  display: flex;
  gap: ${spacing.xl};
`;

export const NavItem = styled(NavLink)`
  font-size: ${fonts.sizes.base};
  font-weight: ${fonts.weights.medium};
  color: ${colors.text};
  text-decoration: none;
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${spacing.sm};
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.primary};
    background-color: ${colors.secondary};
  }

  &.active {
    color: ${colors.primary};
    background-color: ${colors.secondary};
  }
`;
