import styled from "styled-components";
import { colors, fonts, spacing, borderRadius } from "../Shared/variables";

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
  font-weight: 500;
  color: #121417;
  background-color: #f7f7fb;
  height: 48px;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;

  /* Add custom arrow */
  background-image: url("data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 7.5L10 12.5L15 7.5' stroke='%23121417' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  background-repeat: no-repeat;
  background-position: right 18px center;

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
