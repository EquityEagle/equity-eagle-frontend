import styled from "styled-components";

export const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledStart = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  align-items: center;
  position: relative;
  justify-content: center;
  gap: 1.5rem;
`;

export const StyledDash = styled.div`
  display: grid;
  grid-template-columns: 25rem auto 25rem;
  width: 100%;
  height: 100%;
  position: relative;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 7rem auto 20rem;
    gap: 0;
  }
  @media (max-width: 800px) {
    grid-template-columns: 7rem auto 3rem;
    gap: 0;
  }
  @media (max-width: 700px) {
    display: flex;
    gap: 1rem;
  }
`;

export const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  align-items: center;
  justify-content: center;
`;

export const StyledMetrix = styled.div`
  display: grid;
  grid-template-columns: 25rem auto;
  width: 100%;
  height: 100%;
  position: relative;
  gap: 2rem;
  padding-right: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 8rem auto;
    gap: 0;
    /* overflow: hidden; */
  }

  @media (max-width: 800px) {
    grid-template-columns: 8rem auto;
    display: grid;
    gap: 0;
    padding-left: 0;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    gap: 0;
    padding-left: 0;
    position: relative;
    margin-right: 0;
    padding-right: 0;
  }
`;
