import styled, { keyframes } from "styled-components";
import { colors } from "../Shared/variables";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 9999;
`;

export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid ${colors.border};
  border-top: 4px solid ${colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const LoaderText = styled.p`
  margin-top: 1.5rem;
  color: ${colors.textSecondary};
  font-size: 1.1rem;
  font-weight: 500;
`;
