import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing:border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Spoqa Han Sans', sans-serif;
        font-size: 1.6rem;
    }
    
    a {
        text-decoration: none;
        color: inherit;
        
        a:active {
            color: inherit;
        }
    }
`;

export default GlobalStyles;
