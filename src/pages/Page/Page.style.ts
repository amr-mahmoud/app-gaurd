import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.label`
  color: gray;
  padding: 20px 10px;
  font-size: 18px;
  font-weight: 450;
  margin-bottom: 10px;
  line-height: 3;
`;

export const CardsWrapper = styled.div`
  padding: 0 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 375px 375px 375px;
  gap: 45px;
  @media screen and (max-width: 1400px) {
    grid-template-columns: 375px 375px;
    gap: 30px;
  }
`;
