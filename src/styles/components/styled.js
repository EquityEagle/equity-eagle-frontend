import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  padding: 1rem;
  height: 65px;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: rgba(0, 0, 0, 0.61);
  z-index: 200;
`;

export const StyledFooter = styled.footer`
  background: #000;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  padding: 5rem;
  width: 100%;
  /* height: 5rem; */
  /* background-color: ; */

  @media (max-width: 800px) {
    padding: 3rem;
    flex-direction: column;
    gap: 2rem;
    height: auto;
  }
  @media (max-width: 700px) {
    padding: 1rem;
  }
`;
