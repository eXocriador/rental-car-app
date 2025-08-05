import styled from "styled-components";
import { colors, spacing } from "../Shared/variables";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
`;

export const MainContent = styled.main`
  flex: 1;
  padding: ${spacing.xl} 0;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
`;
