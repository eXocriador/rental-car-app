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
  background: url("https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")
    center/cover;
  color: white;
  padding: 120px 0;
  text-align: left;
  position: relative;
  margin-bottom: ${spacing["3xl"]};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 60px;
  font-weight: ${fonts.weights.bold};
  margin-bottom: 20px;
  line-height: 72px;
  font-family: ${fonts.primary};
`;

const HeroDescription = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.9;
  line-height: 32px;
  font-family: ${fonts.primary};
`;

const CTAButton = styled.button`
  background-color: white;
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 600;
  padding: 12px 50px;
  border: none;
  border-radius: ${borderRadius.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${shadows.md};
  font-family: ${fonts.primary};
  min-width: 156px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${colors.secondary};
    transform: translateY(-2px);
    box-shadow: ${shadows.lg};
  }

  &:active {
    transform: translateY(0);
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewCatalog = () => {
    navigate("/catalog");
  };

  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Find Your Perfect Rental Car</HeroTitle>
        <HeroDescription>
          Discover a wide selection of vehicles for your journey. From compact
          cars to luxury vehicles, we have the perfect ride for every occasion.
        </HeroDescription>
        <CTAButton onClick={handleViewCatalog}>View Catalog</CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default HomePage;
