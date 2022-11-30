import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0%;
        box-sizing: border-box;
        outline: none;
    }

    body {
        min-height: 100vh;
        display: grid;
        justify-content: center;
        align-items: center;
    }

    body, input, button {
        background-color: #FCFCFC;
        font-family: 'Overpass', sans-serif;
    }   
`

export default GlobalStyles