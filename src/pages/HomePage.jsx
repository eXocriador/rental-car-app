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
  background: url("https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    center/cover no-repeat;
  color: white;
  padding: 184px 0; /* Adjust padding for vertical centering */
  text-align: center; /* Center align all text */
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 1184px;
  margin: 0 auto;
  padding: 0 16px;
  position: relative;
  z-index: 2;

  @media (min-width: 1440px) {
    padding: 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 800; /* Extra Bold */
  margin-bottom: 24px;
  line-height: 1.1;
  font-family: ${fonts.primary};
`;

const HeroDescription = styled.p`
  font-size: 18px;
  margin-bottom: 48px;
  opacity: 0.9;
  line-height: 1.5;
  max-width: 600px; /* Constrain width */
  margin-left: auto;
  margin-right: auto;
  font-family: ${fonts.primary};
`;

const CTAButton = styled.button`
  background-color: #3470ff;
  color: white;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 50px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0b44cd;
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
