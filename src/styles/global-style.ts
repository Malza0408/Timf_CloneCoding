import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: 1.5;
}
html {
    font-size: 62.5%;
    color: #222222;
}
ul {
    list-style: none;
    margin: 0;
}

a {
    cursor: pointer;
    text-decoration: none;
    color: black;
}

h1 {
    font-size: 3.2rem;
}

h4 {
    font-size: 1.92rem;
}

h5 {
    font-size: 1.36rem;
}

button {
    all: unset;
}

`;
