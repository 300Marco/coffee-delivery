import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        background-color: ${(props) => props.theme['white-300']};
        color: ${(props) => props.theme['gray-700']};
        -webkit-font-smoothing: antialiased !important;

        overflow-y: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 12px;
        }

        &::-webkit-scrollbar-track {
            border-radius: 20px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme['gray-500']};
            border-radius: 20px;
        }
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    } 
`;
