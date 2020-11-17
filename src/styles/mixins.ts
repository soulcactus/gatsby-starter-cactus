import { css } from 'styled-components';

export const normalBoxStyles = css`
    display: flex;
    align-items: center;
`;

export const justifiedBoxStyles = css`
    ${normalBoxStyles};
    justify-content: space-between;
`;
