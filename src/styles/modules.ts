import { css } from '@emotion/react';

export const normalBoxStyles = css`
    display: flex;
    align-items: center;
`;

export const justifiedBoxStyles = css`
    ${normalBoxStyles};
    justify-content: space-between;
`;
