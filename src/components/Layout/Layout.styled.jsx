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
  max-width: 1184px; /* (1440px viewport - 128px padding on each side) */
  margin: 0 auto;
  padding: 0 16px; /* Basic padding for smaller screens */

  @media (min-width: 1440px) {
    padding: 0; /* No padding on large screens as max-width handles it */
  }
`;
