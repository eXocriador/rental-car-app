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
  display: flex;
  gap: 18px;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 50px;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

export const FilterLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #8a8a89;
`;

export const FilterSelect = styled.select`
  padding: 14px 18px;
  border: none;
  border-radius: 14px;
  font-size: 18px;
  background: #f7f7fb;
  transition: border-color 0.2s ease;
  font-family: ${fonts.primary};
  height: 48px;
  cursor: pointer;
  width: 224px;
  font-weight: 500;

  &:focus {
    outline: none;
  }
`;

export const MileageGroup = styled.div`
  display: flex;
`;

export const MileageInputWrapper = styled.div`
  position: relative;

  input {
    position: relative;
    z-index: 1;
  }

  label {
    position: absolute;
    left: 24px;
    top: 14px;
    font-size: 18px;
    font-weight: 500;
    color: #121417;
    z-index: 0;
  }
`;

export const FilterInput = styled.input`
  padding: 14px 24px 14px 70px;
  width: 160px;
  height: 48px;
  background: #f7f7fb;
  border: none;
  font-size: 18px;
  font-weight: 500;

  &:first-of-type {
    border-radius: 14px 0 0 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }
  &:last-of-type {
    border-radius: 0 14px 14px 0;
  }

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background: #3470ff;
  color: white;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 44px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: ${fonts.primary};
  height: 48px;
  min-width: 136px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #0b44cd;
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
