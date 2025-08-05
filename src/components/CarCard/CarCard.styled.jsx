import styled from "styled-components";
import { fonts } from "../Shared/variables";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: ${fonts.primary};
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  background-color: #f8f9fa;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.3) 0%,
      rgba(18, 20, 23, 0) 50%,
      rgba(18, 20, 23, 0.1) 100%
    );
    pointer-events: none;
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    background: white;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => (props.$isFavorite ? "#3470ff" : "none")};
    stroke: ${(props) =>
      props.$isFavorite ? "#3470ff" : "rgba(18, 20, 23, 0.9)"};
    stroke-width: 2;
    filter: ${(props) =>
      props.$isFavorite ? "none" : "drop-shadow(0 0 2px rgba(0, 0, 0, 0.8))"};
    transition: all 0.2s ease;
  }
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 12px;
`;

export const CarTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  color: #121417;
  flex: 1;

  span {
    color: #3470ff;
    font-weight: 700;
  }
`;

export const CarPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #3470ff;
  white-space: nowrap;
`;

export const CarDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 8px;
  margin-bottom: 24px;
  font-size: 12px;
  color: rgba(18, 20, 23, 0.6);
  line-height: 1.4;
  flex: 1;
`;

export const DetailItem = styled.span`
  background: #f8f9fa;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 500;

  &:not(:last-child)::after {
    content: "";
  }
`;

export const LearnMoreButton = styled.button`
  width: 100%;
  background: #3470ff;
  color: white;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${fonts.primary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(52, 112, 255, 0.3);

  &:hover {
    background: #0b44cd;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(52, 112, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;
