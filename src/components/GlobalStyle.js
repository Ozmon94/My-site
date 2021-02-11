import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
    background:#242424;
    font-family: 'Roboto', sans-serif;
    overflow-x:hidden;
}
button{
    font-weight:bold;
    font-size:1.1rem;
    cursor: pointer;
    padding:1rem 2rem;
    border:3px solid #38afdf;
    background:transparent;
    border-radius:10px;
    color:white;
    font-family: 'Roboto', sans-serif;
    transition:all 0.5s ease;
    &:hover{
        background: #38afdf;
        color:white;
    }
}


`;

export default GlobalStyle;
