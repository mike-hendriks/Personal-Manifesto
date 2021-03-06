import styled, { createGlobalStyle } from "styled-components";

// global style
export const GlobalStyle = createGlobalStyle`
  @font-face {
     font-family: 'circularBlack';
     src: url('/fonts/Circular_Std_Black.ttf');
  }
  @font-face {
     font-family: 'circularBold';
     src: url('/fonts/Circular_Std_Bold.ttf');
  }
  @font-face {
     font-family: 'circularRegular';
     src: url('/fonts/Circular_std.ttf');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'circularRegular', sans-serif;
    color: #1a1b1f;
  }
`;

// Titles
export const H1 = styled.h1`
  font-family: "circularBold", sans-serif;
  font-size: 75px;
  margin-bottom: 15px;
  color: #292929;
  margin-left: 30px;
`;
export const H2 = styled.h2`
  font-size: 30px;
  margin: 0 0 35px 0;
  color: #656565;
  margin-left: 30px;
  margin-bottom: 50px;
`;

// Container
export const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
`;
