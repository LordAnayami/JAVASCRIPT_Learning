import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,body {
    font-family: 'Noto Sans', sans-serif;
    margin: 0;
    padding: 0;
    overscroll-behavior: none;
  }

  li, ul {
    text-decoration: none;
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
