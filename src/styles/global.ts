import { css } from '@emotion/react';
import reset from 'react-style-reset/string';

import { CustomTheme } from '@styles/theme';

export const globalStyles = (props: CustomTheme) => css`
    ${reset};

    * {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        font-size: 62.5%;
    }

    body {
        background: ${props.backgrounds.light};
        word-wrap: break-word;
        word-break: keep-all;
        font-family: ${props.fontFamily.normal};
        font-size: ${props.fontSize.normal};
        color: ${props.colors.normal};
        transition: background 0.15s ease-in-out 0.05s;

        &.dark {
            background: ${props.backgrounds.dark};
        }
    }

    a {
        text-decoration: none;
        color: inherit;

        &:active {
            color: inherit;
        }
    }

    button,
    input,
    textarea {
        font-family: inherit;
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

        &:disabled {
            cursor: inherit;
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

    label {
        outline: 0;

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
`;

export default globalStyles;
