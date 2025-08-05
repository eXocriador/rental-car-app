import styled from "styled-components";
import { spacing, breakpoints } from "../Shared/variables";

export const CarListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin-bottom: 80px;
  justify-items: center;

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
  }

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 400px;
    margin: 0 auto 80px auto;
  }
`;

export const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

export const LoadMoreButton = styled.button`
  background: #3470ff;
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
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

export const EmptyState = styled.div`
  text-align: center;
  padding: ${spacing["3xl"]} 0;
  color: ${(props) => props.theme.colors?.textSecondary || "#8a8a89"};
`;

export const EmptyStateTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${spacing.md};
  color: ${(props) => props.theme.colors?.text || "#121417"};
`;

export const EmptyStateText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;
