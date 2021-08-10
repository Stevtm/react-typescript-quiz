import styled, { createGlobalStyle } from "styled-components";
import DBImage from "./images/mountains.jpeg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%; 
    }

    body {
        background-image: url(${DBImage});
        background-size: cover;
        margin: 0; 
        padding: 0 20px; 
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box; 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;
