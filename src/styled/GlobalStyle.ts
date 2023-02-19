import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('/fonts/Gotham-Bold.ttf'),
         url('/fonts/Gotham-Book.otf'),
         url('/fonts/Gotham-Light.ttf'),
         url('/fonts/Gotham-Medium.otf);
  }
`;

export default GlobalStyle;