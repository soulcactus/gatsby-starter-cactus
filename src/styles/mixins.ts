import { css } from 'styled-components';

export const normalBoxStyles = css`
    display: flex;
    align-items: center;
`;

export const justifiedBoxStyles = css`
    ${normalBoxStyles};
    justify-content: space-between;
`;

export const $size = (width: string, height?: string) => css`
    height: ${height ?? width};
    width: ${width};
`;
