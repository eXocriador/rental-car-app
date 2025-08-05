import styled from "styled-components";
import { colors, fonts, spacing, borderRadius } from "../Shared/variables";

export const FiltersContainer = styled.div`
  background: white;
  padding: ${spacing["2xl"]};
  border-radius: ${borderRadius.lg};
  border: 1px solid ${colors.border};
  margin-bottom: ${spacing["2xl"]};
  font-family: ${fonts.primary};
`;

export const FiltersTitle = styled.h2`
  font-size: ${fonts.sizes["2xl"]};
  font-weight: ${fonts.weights.semibold};
  margin-bottom: ${spacing.lg};
  color: ${colors.text};
`;

export const FiltersForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  gap: 20px;
  align-items: end;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

export const FilterLabel = styled.label`
  font-size: ${fonts.sizes.sm};
  font-weight: ${fonts.weights.medium};
  color: ${colors.text};
`;

export const FilterSelect = styled.select`
  padding: 12px 16px;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  font-size: 16px;
  background: white;
  transition: border-color 0.2s ease;
  font-family: ${fonts.primary};
  height: 44px;
  cursor: pointer;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export const FilterInput = styled.input`
  padding: 12px 16px;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  font-size: 16px;
  background: white;
  transition: border-color 0.2s ease;
  font-family: ${fonts.primary};
  height: 44px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }

  &::placeholder {
    color: ${colors.textSecondary};
  }
`;

export const SearchButton = styled.button`
  background: ${colors.primary};
  color: white;
  font-size: 16px;
  font-weight: ${fonts.weights.medium};
  padding: 12px 51px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: ${fonts.primary};
  height: 44px;
  min-width: 156px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${colors.primaryHover};
  }

  &:disabled {
    background: ${colors.textSecondary};
    cursor: not-allowed;
  }
`;

export const ResetButton = styled.button`
  background: transparent;
  color: ${colors.textSecondary};
  font-size: ${fonts.sizes.base};
  font-weight: ${fonts.weights.medium};
  padding: ${spacing.md} ${spacing["2xl"]};
  border: 1px solid ${colors.border};
  border-radius: ${borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.secondary};
    border-color: ${colors.textSecondary};
  }
`;
