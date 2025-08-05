import styled from "styled-components";
import { colors, spacing } from "../Shared/variables";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding-top: 80px; /* Account for fixed header */

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 0;
`;

export const ContentWrapper = styled.div`
  max-width: 1184px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 1440px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;
