import styled from "styled-components";
import { colors, fonts, spacing, borderRadius } from "../Shared/variables";

export const DetailsContainer = styled.div`
  padding: ${spacing["2xl"]};
  max-width: 800px;
`;

export const CarImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: ${borderRadius.lg};
  overflow: hidden;
  margin-bottom: ${spacing["2xl"]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CarTitle = styled.h2`
  font-size: ${fonts.sizes["3xl"]};
  font-weight: ${fonts.weights.bold};
  color: ${colors.text};
  margin-bottom: ${spacing.lg};
`;

export const CarPrice = styled.div`
  font-size: ${fonts.sizes["2xl"]};
  font-weight: ${fonts.weights.semibold};
  color: ${colors.primary};
  margin-bottom: ${spacing["2xl"]};
`;

export const CarDescription = styled.p`
  font-size: ${fonts.sizes.base};
  line-height: 1.6;
  color: ${colors.text};
  margin-bottom: ${spacing["2xl"]};
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spacing.lg};
  margin-bottom: ${spacing["2xl"]};
`;

export const DetailItem = styled.div`
  background: ${colors.secondary};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.md};
`;

export const DetailLabel = styled.div`
  font-size: ${fonts.sizes.sm};
  font-weight: ${fonts.weights.medium};
  color: ${colors.textSecondary};
  margin-bottom: ${spacing.xs};
`;

export const DetailValue = styled.div`
  font-size: ${fonts.sizes.base};
  font-weight: ${fonts.weights.semibold};
  color: ${colors.text};
`;

export const RentalConditions = styled.div`
  margin-bottom: ${spacing["2xl"]};
`;

export const RentalConditionsTitle = styled.h3`
  font-size: ${fonts.sizes["2xl"]};
  font-weight: ${fonts.weights.semibold};
  color: ${colors.text};
  margin-bottom: ${spacing.lg};
`;

export const ConditionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ConditionItem = styled.li`
  background: ${colors.secondary};
  padding: ${spacing.md};
  border-radius: ${borderRadius.md};
  margin-bottom: ${spacing.sm};
  font-size: ${fonts.sizes.base};
  color: ${colors.text};
`;

export const RentalButton = styled.a`
  display: inline-block;
  background: ${colors.primary};
  color: white;
  font-size: ${fonts.sizes.lg};
  font-weight: ${fonts.weights.semibold};
  padding: ${spacing.lg} ${spacing["2xl"]};
  border-radius: ${borderRadius.lg};
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${colors.primaryHover};
  }
`;
