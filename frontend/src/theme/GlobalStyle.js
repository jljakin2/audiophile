import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
}

html {
font-size: 100%; // 16px
box-sizing: border-box;

// 450px
@media only screen and (max-width: 28.125em) {
    font-size: 95%;
  }
}

body {
    font-family: 'Manrope', sans-serif;
}

:is(h1, h2, h3, h4, h5, h6) {
font-weight: 700;
}
`;

export default GlobalStyle;
