import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-family: 'Space Mono', monospace;
    }

    body {
        background: #c5e4e7;
    }

`