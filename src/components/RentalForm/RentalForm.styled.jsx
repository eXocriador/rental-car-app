import styled from "styled-components";
import {
  colors,
  fonts,
  spacing,
  shadows,
  borderRadius,
  transitions
} from "../Shared/variables";

export const FormContainer = styled.div`
  background: white;
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.lg};
  padding: ${spacing["2xl"]};
  position: sticky;
  top: ${spacing.lg};
`;

export const FormTitle = styled.h2`
  font-size: ${fonts.sizes["2xl"]};
  font-weight: ${fonts.weights.bold};
  color: ${colors.text};
  margin-bottom: ${spacing.lg};
  text-align: center;
`;

export const CarInfo = styled.div`
  background: ${colors.secondary};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.md};
  margin-bottom: ${spacing.xl};
  text-align: center;

  h4 {
    font-size: ${fonts.sizes.lg};
    font-weight: ${fonts.weights.semibold};
    color: ${colors.text};
    margin-bottom: ${spacing.sm};
  }
`;

export const CarPrice = styled.div`
  font-size: ${fonts.sizes["2xl"]};
  font-weight: ${fonts.weights.bold};
  color: ${colors.primary};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};

  .error {
    color: ${colors.error};
    font-size: ${fonts.sizes.sm};
    margin-top: ${spacing.xs};
  }
`;

export const FormLabel = styled.label`
  font-size: ${fonts.sizes.base};
  font-weight: ${fonts.weights.medium};
  color: ${colors.text};
`;

export const FormInput = styled.input`
  padding: ${spacing.md};
  border: 2px solid ${(props) => (props.error ? colors.error : colors.border)};
  border-radius: ${borderRadius.md};
  font-size: ${fonts.sizes.base};
  transition: ${transitions.default};
  background: white;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primary}20;
  }

  &::placeholder {
    color: ${colors.textSecondary};
  }

  &:disabled {
    background: ${colors.secondary};
    cursor: not-allowed;
  }
`;

export const FormSelect = styled.select`
  padding: ${spacing.md};
  border: 2px solid ${(props) => (props.error ? colors.error : colors.border)};
  border-radius: ${borderRadius.md};
  font-size: ${fonts.sizes.base};
  transition: ${transitions.default};
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primary}20;
  }

  &:disabled {
    background: ${colors.secondary};
    cursor: not-allowed;
  }
`;

export const FormTextarea = styled.textarea`
  padding: ${spacing.md};
  border: 2px solid ${colors.border};
  border-radius: ${borderRadius.md};
  font-size: ${fonts.sizes.base};
  font-family: inherit;
  transition: ${transitions.default};
  background: white;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primary}20;
  }

  &::placeholder {
    color: ${colors.textSecondary};
  }
`;

export const SubmitButton = styled.button`
  background: ${colors.primary};
  color: white;
  font-size: ${fonts.sizes.lg};
  font-weight: ${fonts.weights.semibold};
  padding: ${spacing.lg} ${spacing["2xl"]};
  border: none;
  border-radius: ${borderRadius.md};
  cursor: pointer;
  transition: ${transitions.default};
  margin-top: ${spacing.lg};

  &:hover {
    background: ${colors.primaryHover};
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: ${colors.textSecondary};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const SuccessMessage = styled.div`
  text-align: center;
  padding: ${spacing["2xl"]} 0;

  h3 {
    font-size: ${fonts.sizes["2xl"]};
    font-weight: ${fonts.weights.bold};
    color: ${colors.success};
    margin-bottom: ${spacing.lg};
  }

  p {
    font-size: ${fonts.sizes.base};
    color: ${colors.textSecondary};
    line-height: 1.6;
  }
`;
