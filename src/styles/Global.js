import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,::after,::before{
padding: 0;
margin: 0;
box-sizing: border-box;
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
  position: fixed;
  background: linear-gradient(
    to left,
    rgba(0, 0, 255, 0.9),
    rgba(255, 0, 0, 0.8)
  );
  width: 500px;
  height: 500px;
  border-radius: 9999px;
  filter: blur(55px);
  z-index: 0;
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
