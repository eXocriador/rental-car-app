import styled from "styled-components";

export const DetailsContainer = styled.div`
  padding: 0;
  width: 100%;
  max-width: none;
`;

export const CarImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CarTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  color: #121417;
  margin-bottom: 16px;

  span {
    color: #3470ff;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-bottom: 20px;
  font-size: 16px;
  color: rgba(18, 20, 23, 0.7);
  line-height: 1.5;
`;

export const InfoItem = styled.span`
  background: #f8f9fa;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;

  &:not(:last-child)::after {
    content: "";
  }
`;

export const CarDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #121417;
  margin-top: 20px;
  margin-bottom: 32px;
  max-width: 800px;
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: #121417;
  margin-bottom: 16px;
  margin-top: 32px;
`;

export const RentalConditions = styled.div`
  margin-top: 32px;
`;

export const ConditionsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const ConditionItem = styled.p`
  padding: 12px 20px;
  border-radius: 25px;
  background: #f8f9fa;
  font-size: 14px;
  line-height: 1.5;
  color: #363535;
  font-weight: 500;

  span {
    font-weight: 700;
    color: #3470ff;
  }
`;
