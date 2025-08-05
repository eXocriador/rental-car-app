import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fonts } from "../components/Shared/variables";
import Header from "../components/Header/Header";

const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const HeroSection = styled.section`
  background: url("https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
    center/cover no-repeat;
  color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px; /* Account for fixed header */

  @media (max-width: 768px) {
    padding-top: 70px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  font-family: ${fonts.primary};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin-bottom: 3rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-family: ${fonts.primary};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const CTAButton = styled.button`
  background: #3470ff;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 3rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(52, 112, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: #0b44cd;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(52, 112, 255, 0.4);
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
    <HomeContainer>
      <Header />
      <HeroSection>
        <HeroContent>
          <HeroTitle>Find Your Perfect Rental Car</HeroTitle>
          <HeroDescription>
            Discover a wide selection of premium vehicles for your journey. From
            compact cars to luxury vehicles, we have the perfect ride for every
            occasion.
          </HeroDescription>
          <CTAButton onClick={handleViewCatalog}>Explore Our Fleet</CTAButton>
        </HeroContent>
      </HeroSection>
    </HomeContainer>
  );
};

export default HomePage;
