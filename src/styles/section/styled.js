import styled from "styled-components";

export const StyledHero = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 2rem;

  @media (max-width: 800px) {
    padding: 1rem;
    overflow-x: hidden;
  }
`;
