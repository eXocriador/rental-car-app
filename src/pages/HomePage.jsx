import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  colors,
  fonts,
  spacing,
  shadows,
  borderRadius
} from "../components/Shared/variables";

const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    ${colors.primary} 0%,
    ${colors.primaryHover} 100%
  );
  color: white;
  padding: ${spacing["3xl"]} 0;
  text-align: center;
  border-radius: 0 0 ${borderRadius.xl} ${borderRadius.xl};
  margin-bottom: ${spacing["3xl"]};
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
`;

const HeroTitle = styled.h1`
  font-size: ${fonts.sizes["4xl"]};
  font-weight: ${fonts.weights.bold};
  margin-bottom: ${spacing.lg};
  line-height: 1.2;
`;

const HeroDescription = styled.p`
  font-size: ${fonts.sizes.xl};
  margin-bottom: ${spacing["2xl"]};
  opacity: 0.9;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  background-color: white;
  color: ${colors.primary};
  font-size: ${fonts.sizes.lg};
  font-weight: ${fonts.weights.semibold};
  padding: ${spacing.md} ${spacing["2xl"]};
  border: none;
  border-radius: ${borderRadius.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${shadows.md};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
  }

  &:active {
    transform: translateY(0);
  }
`;

const FeaturesSection = styled.section`
  padding: ${spacing["3xl"]} 0;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing["2xl"]};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
`;

const FeatureCard = styled.div`
  background: white;
  padding: ${spacing["2xl"]};
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.md};
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${colors.secondary};
  border-radius: 50%;
  margin: 0 auto ${spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${colors.primary};
`;

const FeatureTitle = styled.h3`
  font-size: ${fonts.sizes["2xl"]};
  font-weight: ${fonts.weights.semibold};
  margin-bottom: ${spacing.md};
  color: ${colors.text};
`;

const FeatureDescription = styled.p`
  color: ${colors.textSecondary};
  line-height: 1.6;
`;

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewCatalog = () => {
    navigate("/catalog");
  };

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Find Your Perfect Rental Car</HeroTitle>
          <HeroDescription>
            Discover a wide selection of vehicles for your journey. From compact
            cars to luxury vehicles, we have the perfect ride for every
            occasion.
          </HeroDescription>
          <CTAButton onClick={handleViewCatalog}>View Catalog</CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>🚗</FeatureIcon>
            <FeatureTitle>Wide Selection</FeatureTitle>
            <FeatureDescription>
              Choose from hundreds of vehicles across different categories and
              brands.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>💰</FeatureIcon>
            <FeatureTitle>Best Prices</FeatureTitle>
            <FeatureDescription>
              Competitive pricing with transparent fees and no hidden costs.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>⚡</FeatureIcon>
            <FeatureTitle>Quick Booking</FeatureTitle>
            <FeatureDescription>
              Easy and fast booking process with instant confirmation.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </>
  );
};

export default HomePage;
