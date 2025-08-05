import styled from "styled-components";
import {
  colors,
  fonts,
  spacing,
  shadows,
  transitions
} from "../Shared/variables";

export const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid ${colors.border};
  overflow: hidden;
  transition: ${transitions.normal};
  cursor: pointer;
  font-family: ${fonts.primary};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
    border-color: ${colors.primary};
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 268px;
  background: ${colors.secondary};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: ${spacing.md};
  right: ${spacing.md};
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${transitions.fast};
  z-index: 2;

  &:hover {
    background: white;
    transform: scale(1.05);
  }

  img {
    width: 24px;
    height: 24px;
    filter: ${(props) =>
      props.$isFavorite
        ? "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)"
        : "none"};
    transition: ${transitions.fast};
  }
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${spacing.md};
`;

export const CarTitle = styled.h3`
  font-size: 18px;
  font-weight: ${fonts.weights.semibold};
  color: ${colors.text};
  margin: 0;
  line-height: 20px;
  font-family: ${fonts.primary};
`;

export const CarPrice = styled.div`
  font-size: 18px;
  font-weight: ${fonts.weights.semibold};
  color: ${colors.primary};
  font-family: ${fonts.primary};
`;

export const CarDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 16px;
  font-size: 12px;
  color: ${colors.textSecondary};
  line-height: 16px;
`;

export const DetailItem = styled.span`
  &:not(:last-child)::after {
    content: "|";
    margin-left: 8px;
    color: ${colors.border};
  }
`;

export const LearnMoreButton = styled.button`
  width: 100%;
  background: ${colors.primary};
  color: white;
  font-size: 16px;
  font-weight: ${fonts.weights.medium};
  padding: 12px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: ${transitions.fast};
  font-family: ${fonts.primary};
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${colors.primaryHover};
  }
`;
