import styled from "styled-components";

export const StyledNav = styled.nav`
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

  @media (max-width: 700px) {
    padding: 9px;
    height: 60px;
  }
`;

export const StyledFooter = styled.footer`
  background: #000;
  position: relative;
  display: ${({ notHome }) => (notHome ? "none" : "flex")};
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

export const StyledMenu = styled.div`
  position: fixed;
  background: rgb(0, 0, 0, 0.91);
  width: 100%;
  height: 400px;
  top: 5rem;
  z-index: 99;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  /* justify-content: space-evenly; */

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const StyledSideNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  /* background: #000; */
  width: 400px;
  /* padding: 1rem; */

  @media (max-width: 1024px) {
    width: 100px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const StyledSideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: fixed;
  background: #000;
  width: 350px;
  padding: 1rem;

  @media (max-width: 1024px) {
    width: 100px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const StyledNavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  margin-top: 3rem;
  margin-left: 3rem;
  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const StyledMobileNav = styled.nav`
  display: none;
  background: #000;
  padding: 10px;
  position: fixed;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  bottom: 0;
  padding-left: 16px;
  padding-right: 16px;
  z-index: 100;

  @media (max-width: 700px) {
    display: ${({ notHome }) => (notHome ? "flex" : "none")};
  }
`;

export const StyledHeroDash = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  margin-left: 2rem;

  @media (max-width: 700px) {
    padding: 14px;
    margin-left: 0;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const Flex = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const StyledSetupItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
