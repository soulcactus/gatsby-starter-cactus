import { css } from '@emotion/react';

export const normalBoxStyles = css`
    display: flex;
    align-items: center;
`;

export const justifiedBoxStyles = css`
    ${normalBoxStyles};
    justify-content: space-between;
`;

export const searchButtonStyles = css`
    position: absolute;
    font-size: var(--size-16);
    color: var(--color-sub-text-1);
`;
