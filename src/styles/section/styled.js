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

export const StyledConnectsection = styled.section`
  height: 85vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10rem 0px 5rem;
  overflow: hidden;
  background: linear-gradient(
        135deg,
        rgba(0, 64, 77, 0.9) 0%,
        rgba(2, 12, 27, 0.8) 100%
      )
      0% 0% / contain,
    url("/world.svg") center center no-repeat;

  @media (max-width: 800px) {
    padding: 1rem;
    overflow-x: hidden;
  }
`;
