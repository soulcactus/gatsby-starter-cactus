import { css } from '@emotion/react';
import reset from 'react-style-reset/string';

import { CustomTheme } from '@styles/theme';

export const globalStyles = (props: CustomTheme) => css`
    ${reset};

    body.light {
        --background-color: #f8f8f8;
        --font-color-normal: #333;
        --font-color-gray: #797979;
        --box-shadow-color-1: 0.3rem 0.3rem 0.5rem rgba(0, 9, 52, 0.07),
            -0.5rem -0.5rem 0.5rem white;
    }

    * {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        font-size: 62.5%;
    }

    body {
        background: var(--background-color);
        word-wrap: break-word;
        word-break: keep-all;
        font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
            'Spoqa Han Sans Neo', 'Segoe UI', sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol';
        color: var(--font-color-normal);
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
