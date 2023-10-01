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

export const StyledWhySection = styled.section`
  /* height: 90vh; */
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  position: relative;
  gap: 2rem;
  background: #000;

  @media (max-width: 800px) {
    padding: 1rem;
    overflow-x: hidden;
  }
`;

export const StyledJournalSection = styled.section`
  /* height: 90vh; */
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  /* justify-content: center; */
  position: relative;
  gap: 2rem;
  /* background: #000; */

  @media (max-width: 800px) {
    padding: 1rem;
    overflow-x: hidden;
  }
`;

export const StyledLast = styled.div`
  background-color: #000;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  height: auto;
  align-items: center;
  width: 100%;
  position: relative;
  /* justify-content: center; */
`;
