import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { mq } from "utils/mq";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Propaganda';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: local('Propaganda'),
         url('fonts/propaganda-Regular.woff2') format('woff2'),
         url('fonts/propaganda-Regular.woff') format('woff');
  }

  ${normalize}

  * {
    &,
    &:before,
    &:after {
      box-sizing: border-box;
    }
    &:focus {
      outline: orange solid;
      &:not(:focus-visible) {
        outline: 0;
      }
    }
  }

  html {
    scroll-behavior: smooth;
  }

  :root {
    font-size: 62.5%;
    @media ${mq.laptop} {
      font-size: 100%;
    }
    @media ${mq.desktop} {
      font-size: 128.125%;
    }
  }

  @media screen and (min-width: 0\0) {
    :root,
    html {
      font-size: 10px;
    }
  }
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    :root,
    html {
      font-size: 10px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Propaganda', sans-serif;
    word-break: keep-all;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
  }
`;

export default GlobalStyles;
