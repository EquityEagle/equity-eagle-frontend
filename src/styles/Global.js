import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,::after,::before{
padding: 0;
margin: 0;
box-sizing: border-box;
/* overflow-x: hidden; */
}


body{
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    --tw-bg-opacity: 1;
    background-color: rgba(0,0,0,0.91);
    /* background-color: rgb(23 31 33/var(--tw-bg-opacity)); */
}
`;

export const LeftBlur = styled.div`
  position: absolute;
  background: linear-gradient(rgb(35 64 175), rgb(30 58 138));
  /* border-radius: 20px; Adjust the value to control the roundnesss */
  padding: 20px;
  width: 300px;
  height: 300px;
  border-radius: 9999px;
  filter: blur(55px);
  z-index: -10;
`;

export const RightBlur = styled.div`
  position: absolute;
  background: linear-gradient(rgb(220 38 38), rgb(127 29 29));
  /* border-radius: 20px; Adjust the value to control the roundnesss */
  padding: 20px;
  width: 300px;
  height: 300px;
  border-radius: 9999px;
  filter: blur(55px);
  z-index: -10;
`;

export const Stars = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 35px solid #fff;
  position: fixed;
  z-index: 0;
  filter: blur(10px);
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
`;

export const FlexEven = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  align-items: center;

  @media (max-width: 700px) {
    justify-content: space-between;
  }
`;
