import styled from "styled-components";
import { colors, fonts, spacing, shadows } from "../Shared/variables";

export const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  max-width: 1184px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 70px;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #3470ff;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #0b44cd;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

export const NavItem = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.text};
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #3470ff;
    background: rgba(52, 112, 255, 0.1);
  }

  &.active {
    color: #3470ff;
    background: rgba(52, 112, 255, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
