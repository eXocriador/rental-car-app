import styled from "styled-components";

export const DetailsContainer = styled.div`
  padding: 40px;
  max-width: 541px; /* As per design */
  /* Removed background and border-radius as Modal handles these */
`;

export const CarImage = styled.div`
  width: 100%;
  height: 248px; /* Correct height from design */
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CarTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33; /* 24px */
  color: #121417;
  margin-bottom: 8px;

  span {
    color: #3470ff;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
  margin-bottom: 14px;
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  line-height: 1.5;
`;

export const InfoItem = styled.span`
  &:not(:last-child)::after {
    content: "|";
    margin-left: 6px;
    color: rgba(18, 20, 23, 0.1);
  }
`;

export const CarDescription = styled.p`
  font-size: 14px;
  line-height: 1.43; /* 20px */
  color: #121417;
  margin-top: 14px;
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43; /* 20px */
  color: #121417;
  margin-bottom: 8px;
`;

export const RentalConditions = styled.div`
  margin-top: 24px;
`;

export const ConditionsList = styled.div`
  /* Change from ul to div */
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ConditionItem = styled.p`
  /* Change from li to p */
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  font-size: 12px;
  line-height: 1.5; /* 18px */
  color: #363535;

  span {
    font-weight: 600;
    color: #3470ff;
  }
`;

export const RentalButton = styled.a`
  margin-top: 24px;
  display: inline-block;
  background: #3470ff;
  color: white;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 50px;
  border-radius: 12px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background: #0b44cd;
  }
`;
