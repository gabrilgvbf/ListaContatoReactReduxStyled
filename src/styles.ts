
import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
*{
  
  border:0;
  box-sizing:border-box;
  font-family:sans-serif;
  list-style:none;
}

`

export const BotaoLista = styled.button`

background-color:yellow;

`

export const BotaoAdicionar = styled.button`

background-color:green;
`

export default GlobalStyle

