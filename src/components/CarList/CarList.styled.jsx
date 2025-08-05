import styled from "styled-components";
import { spacing, breakpoints } from "../Shared/variables";

export const CarListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${spacing["2xl"]};
  margin-bottom: ${spacing["3xl"]};

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${spacing.lg};
  }

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${spacing.lg};
  }
`;

export const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing["2xl"]};
`;

export const LoadMoreButton = styled.button`
  background: ${(props) => props.theme.colors?.primary || "#3470ff"};
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: ${spacing.md} ${spacing["2xl"]};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors?.primaryHover || "#0b44cd"};
  }

  &:disabled {
    background: #ccc;
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
