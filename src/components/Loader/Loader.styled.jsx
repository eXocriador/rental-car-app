import styled, { keyframes } from "styled-components";
import { colors } from "../Shared/variables";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid ${colors.border};
  border-top: 4px solid ${colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoaderText = styled.p`
  margin-top: 1rem;
  color: ${colors.textSecondary};
  font-size: 1rem;
`;
