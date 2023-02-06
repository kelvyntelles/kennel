import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: white;
    color: black;
    font-family: ${(props) => props.theme.fontFamily.sans};
  }
`
