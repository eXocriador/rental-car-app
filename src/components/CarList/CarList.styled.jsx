import styled from "styled-components";
import { spacing, breakpoints } from "../Shared/variables";

export const CarListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: ${spacing["3xl"]};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing["2xl"]};
`;

export const LoadMoreButton = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors?.primary || "#3470ff"};
  font-size: 16px;
  font-weight: 600;
  padding: 12px 51px;
  border: 1px solid ${(props) => props.theme.colors?.primary || "#3470ff"};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: ${(props) => props.theme.fonts?.primary || "Inter, sans-serif"};
  height: 44px;
  min-width: 156px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme.colors?.primary || "#3470ff"};
    color: white;
  }

  &:disabled {
    background: ${(props) => props.theme.colors?.textSecondary || "#8a8a89"};
    border-color: ${(props) => props.theme.colors?.textSecondary || "#8a8a89"};
    color: white;
    cursor: not-allowed;
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
