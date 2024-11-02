import { createGlobalStyle } from 'styled-components'

export const GlobalStylesCoffeeDelivery = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${(props) => props.theme.colors.default};
    color: ${(props) => props.theme.colors.baseText};
  }
`
