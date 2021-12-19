import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GoyangDeogyang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GoyangDeogyang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  @font-face {
    font-family: 'GoyangIlsan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GoyangIlsan.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  html {
    font-size: 20px;
    @media (max-width: 1261px) {
      font-size: 16px;
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'GoyangIlsan';
    color: #444444;
    font-size: 1rem;
  }
  #root {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  img {
    display: block;
    max-width: 100%;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    margin: 0;
    padding: 0;
    background: transparent;
    border: 0;
  }
`;

export default GlobalStyle;