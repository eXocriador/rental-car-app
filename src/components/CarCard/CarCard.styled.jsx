import styled from "styled-components";
import {
  colors,
  fonts,
  spacing,
  shadows,
  borderRadius,
  transitions
} from "../Shared/variables";

export const CardContainer = styled.div`
  background: white;
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.md};
  overflow: hidden;
  transition: ${transitions.normal};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.lg};
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
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
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${transitions.fast};
  z-index: 2;

  &:hover {
    background: white;
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${(props) =>
      props.$isFavorite ? colors.error : colors.textSecondary};
    transition: ${transitions.fast};
  }
`;

export const CardContent = styled.div`
  padding: ${spacing.lg};
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${spacing.md};
`;

export const CarTitle = styled.h3`
  font-size: ${fonts.sizes.lg};
  font-weight: ${fonts.weights.semibold};
  color: ${colors.text};
  margin: 0;
  line-height: 1.3;
`;

export const CarPrice = styled.div`
  font-size: ${fonts.sizes.lg};
  font-weight: ${fonts.weights.semibold};
  color: ${colors.primary};
`;

export const CarDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm};
  margin-bottom: ${spacing.lg};
  font-size: ${fonts.sizes.sm};
  color: ${colors.textSecondary};
  line-height: 1.4;
`;

export const DetailItem = styled.span`
  &:not(:last-child)::after {
    content: "|";
    margin-left: ${spacing.sm};
    color: ${colors.border};
  }
`;

export const LearnMoreButton = styled.button`
  width: 100%;
  background: ${colors.primary};
  color: white;
  font-size: ${fonts.sizes.base};
  font-weight: ${fonts.weights.medium};
  padding: ${spacing.md};
  border: none;
  border-radius: ${borderRadius.md};
  cursor: pointer;
  transition: ${transitions.fast};

  &:hover {
    background: ${colors.primaryHover};
  }
`;
