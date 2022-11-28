import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
html {
  width: 100vw;
  overflow-x: hidden;
}

body {
  margin: ${p => p.theme.space[0]}px;
  padding-bottom: ${p => p.theme.space[5]}px;


  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: ${p => p.theme.colors.primaryText};
  background-color: ${p => p.theme.colors.backgroundBody};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};

}
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: ${p => p.theme.space[0]}px;
  }
  ul {
      list-style: none;
      padding: ${p => p.theme.space[0]}px;
      margin: 0;
  }
  img {
      display: block;
      max-width: 100%;
      height: auto;
  }
`;
