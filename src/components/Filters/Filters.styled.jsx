import styled from "styled-components";
import { colors, fonts, spacing, borderRadius } from "../Shared/variables";

export const FiltersForm = styled.form`
  display: flex;
  gap: 20px;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 60px;
  padding: 32px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FilterLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #121417;
  margin-bottom: 4px;
`;

export const FilterSelect = styled.select`
  padding: 14px 18px;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #121417;
  background-color: #ffffff;
  height: 48px;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  appearance: none;

  /* Add custom arrow */
  background-image: url("data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 7.5L10 12.5L15 7.5' stroke='%23121417' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  background-repeat: no-repeat;
  background-position: right 18px center;

  &:focus {
    outline: none;
    border-color: #3470ff;
    box-shadow: 0 0 0 3px rgba(52, 112, 255, 0.1);
  }

  &:hover {
    border-color: #3470ff;
  }
`;

export const MileageGroup = styled.div`
  display: flex;
  gap: 0;
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
    font-size: 16px;
    font-weight: 500;
    color: #121417;
    z-index: 0;
  }
`;

export const FilterInput = styled.input`
  padding: 14px 24px 14px 70px;
  width: 160px;
  height: 48px;
  background: #ffffff;
  border: 2px solid #e9ecef;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:first-of-type {
    border-radius: 12px 0 0 12px;
    border-right: 1px solid #e9ecef;
  }
  &:last-of-type {
    border-radius: 0 12px 12px 0;
  }

  &:focus {
    outline: none;
    border-color: #3470ff;
    box-shadow: 0 0 0 3px rgba(52, 112, 255, 0.1);
  }

  &:hover {
    border-color: #3470ff;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const SearchButton = styled.button`
  background: #3470ff;
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 32px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${fonts.primary};
  height: 48px;
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
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

  &:disabled {
    background: #8a8a89;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const ResetButton = styled.button`
  background: transparent;
  color: #6c757d;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 24px;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${fonts.primary};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: #f8f9fa;
    border-color: #6c757d;
    color: #495057;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
