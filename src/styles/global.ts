import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        font-size: 62.5%;
    }

    body {
        background: white;
        word-wrap: break-word;
        word-break: keep-all;
        font-family: ${(props) => props.theme.fontFamily.normal};
        font-size: ${(props) => props.theme.fontSize.normal};
        color: ${(props) => props.theme.colors.normal};
        transition: background 0.15s ease-in-out 0.05s;
        
        &.dark {
            background: #171c28;
        }
    }
    
    a {
        text-decoration: none;
        color: inherit;
        
        &:active {
            color: inherit;
        }
    }
    
    button {
        border: 0;
        outline: 0;
        padding: 0;
        background: transparent;
        cursor: pointer;
      
        &:active {
            border: 0;
        }
        
        &:focus-visible {
            outline: 0.2rem solid black;
        }
        
        &:-moz-focusring {
            outline: 0.1rem dotted black;
        }
    }
    
    input {
        border: 0;
        outline: 0;
    }
`;

export default GlobalStyles;
