import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
body {
    padding: 20px 40px;
    font-family: 'Open Sans Condensed', sans-serif;

    @media screen and (max-width: 800px){
        padding: 10px;
    }
}
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }
`;