import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background: white;
        font-family: ${(props) => props.theme.fontFamily.normal};
        font-size: ${(props) => props.theme.fontSize.normal};
        color: ${(props) => props.theme.colors.normal};
        transition: background 0.45s ease-in-out 0.095s;
        
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
    }
`;

export default GlobalStyles;
