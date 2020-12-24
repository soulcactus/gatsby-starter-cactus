import { css } from '@emotion/react';
import reset from 'react-style-reset/string';

import { CustomTheme } from '@styles/theme';

export const globalStyles = (props: CustomTheme) => css`
    :root {
        --size-0: 0;
        --size-0-0-0-2: 0 0 0 0.2rem;
        --size-0-0-8: 0 0 0.8rem;
        --size-0-0-10: 0 0 1rem;
        --size-0-0-12: 0 0 1.2rem;
        --size-0-0-50: 0 0 5rem;
        --size-0-2-0-0: 0 0.2rem 0 0;
        --size-0-5: 0 0.5rem;
        --size-0-10-0-0: 0 1rem 0 0;
        --size-0-15-0-0: 0 1.5rem 0 0;
        --size-0-20: 0 2rem;
        --size-0-20-2: 0 2rem 0.2rem;
        --size-2-0-0: 0.2rem 0 0;
        --size-2-25-0-28: 0.2rem 2.5rem 0 2.8rem;
        --size-3-5: 0.3rem 0.5rem;
        --size-5: 0.5rem;
        --size-5-0-7-point-5: 0.5rem 0 0.75rem;
        --size-8: 0.8rem;
        --size-10: 1rem;
        --size-10-0-0: 1rem 0 0;
        --size-11: 1.1rem;
        --size-12: 1.2rem;
        --size-12-0: 1.2rem 0;
        --size-13: 1.3rem;
        --size-14: 1.4rem;
        --size-15: 1.5rem;
        --size-16: 1.6rem;
        --size-18: 1.8rem;
        --size-20: 2rem;
        --size-20-0-30: 2rem 0 3rem;
        --size-20-0-35: 2rem 0 3.5rem;
        --size-23: 2.3rem;
        --size-25: 2.5rem;
        --size-25-20: 2.5rem 2rem;
        --size-30: 3rem;
        --size-35-0: 3.5rem 0;
        --size-36: 3.6rem;
        --size-50: 5rem;
        --size-55: 5.5rem;
        --size-70: 7rem;
        --size-80: 8rem;
        --size-100: 10rem;
        --size-111: 11.1rem;
        --size-150: 15rem;
        --size-156: 15.6rem;
        --size-180: 18rem;
        --size-740: 74rem;
        --size-calc-percent-100-minus-thirteen-point-one: calc(100% - 13.1rem);
        --size-minus-3-point-5-0-10: -0.35rem 0 1rem;
        --size-percent-50: 50%;
        --size-percent-100: 100%;
        --margin-auto: 0 auto;
        --transition-left-linear: left 200ms linear;
    }

    body.light {
        --border-1: 0.1rem solid #ddd;
        --color-main: #f8f8f8;
        --color-gradient: linear-gradient(145deg, white, #eaeaea);
        --color-active: #f5f5f5;
        --color-text: #333;
        --color-sub-text-1: #797979;
        --color-sub-text-2: #999;
        --box-shadow-color-1: 0.3rem 0.3rem 0.5rem rgba(0, 9, 52, 0.07),
            -0.5rem -0.5rem 0.5rem white;
        --box-shadow-color-2: 0.3rem 0.3rem 0.5rem rgba(0, 9, 52, 0.1),
            -0.5rem -0.5rem 0.5rem white;
        --box-shadow-color-3: 3px 3px 5px rgba(0, 9, 52, 0.25),
            -2px -2px 2px white;
        --box-shadow-color-4: 0.5rem 0.2rem 1rem rgba(0, 9, 52, 0.075),
            inset 0.4rem 0.4rem 0.4rem rgba(0, 9, 52, 0.175),
            inset 0 -0.4rem 0.2rem white;
        --box-shadow-color-5: 0.1rem 0.1rem 0.2rem rgba(0, 9, 52, 0.05),
            -0.2rem -0.2rem 0.2rem white;
        --box-shadow-color-6: 0.3rem 0.3rem 0.5rem rgba(0, 9, 52, 0.25),
            -0.3rem -0.3rem 0.3rem white;
        --box-shadow-color-7: 0.5rem 0.2rem 1rem rgba(0, 9, 52, 0.075),
            inset 0.4rem 0.4rem 0.4rem rgba(0, 9, 52, 0.25),
            inset 0 -0.4rem 0.2rem white;
    }

    ${reset};

    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        background: var(--color-main);
        word-wrap: break-word;
        word-break: keep-all;
        font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo',
            'Spoqa Han Sans Neo', 'Segoe UI', sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol';
        color: var(--color-text);
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
        border: var(--size-0);
        outline: var(--size-0);
        padding: var(--size-0);
        background: transparent;
        cursor: pointer;

        &:active {
            border: var(--size-0);
        }

        &:disabled {
            cursor: inherit;
        }

        // TODO: check styles
        &:focus-visible {
            outline: 0.2rem solid black;
        }

        &:-moz-focusring {
            outline: 0.1rem dotted black;
        }
    }

    input {
        border: var(--size-0);
        outline: var(--size-0);
    }

    label {
        outline: var(--size-0);

        &:active {
            border: var(--size-0);
        }

        // TODO: check styles
        &:focus-visible {
            outline: 0.2rem solid black;
        }

        &:-moz-focusring {
            outline: 0.1rem dotted black;
        }
    }
`;

export default globalStyles;
