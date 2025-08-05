import styled from "styled-components";
import { fonts, transitions } from "../Shared/variables";

export const CardContainer = styled.div`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: ${fonts.primary};
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
  background-color: #f3f3f2;
  margin-bottom: 14px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    );
    pointer-events: none;
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  z-index: 2;

  svg {
    width: 18px;
    height: 18px;
    fill: ${(props) => (props.$isFavorite ? "#3470FF" : "none")};
    stroke: ${(props) =>
      props.$isFavorite ? "#3470FF" : "rgba(255, 255, 255, 0.8)"};
    transition: all 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const CarTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  span {
    color: #3470ff;
  }
`;

export const CarPrice = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #121417;
`;

export const CarDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
  margin-bottom: 28px;
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  line-height: 1.5;
  max-height: 40px;
  overflow: hidden;
`;

export const DetailItem = styled.span`
  &:not(:last-child)::after {
    content: "|";
    margin-left: 6px;
    color: rgba(18, 20, 23, 0.1);
  }
`;

export const LearnMoreButton = styled.button`
  width: 100%;
  background: #3470ff;
  color: white;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 50px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: ${transitions.fast};
  font-family: ${fonts.primary};
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;

  &:hover {
    background: #0b44cd;
  }
`;
