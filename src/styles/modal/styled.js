import styled from "styled-components";

export const StyledMoreModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 250px;
  background: ${({ islight }) => (islight ? "#fff" : "#000")};
  bottom: 5.9rem;
  height: auto;
  left: 16px;
  z-index: 150;
  border-radius: 9px;
  gap: 8px;
`;

export const StyledSwitchModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 300px;
  background: ${({ islight }) => (islight ? "#fff" : "#000")};
  bottom: 5.9rem;
  height: auto;
  left: 16px;
  z-index: 100;
  border-radius: 9px;
  gap: 8px;
  padding-bottom: 1rem;

  @media (max-width: 700px) {
    width: 100%;
    left: 0;
    right: 0;
    bottom: 3rem;
    z-index: 200;
  }
`;
