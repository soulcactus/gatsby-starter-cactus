import styled from '@emotion/styled';

import * as CATEGORY from '@constants/category';
import { HeaderProps } from '@interfaces/components/header';
import { $size } from '@styles/mixins';
import { justifiedBoxStyles } from '@styles/modules';

export default function Header(props: HeaderProps) {
    const { children, handleClick, title } = props;

    return (
        <StyledHeader>
            <h1>
                <button
                    aria-label="Go to Home"
                    onClick={() => handleClick(CATEGORY.ALL)}
                >
                    {title}
                </button>
            </h1>
            {children}
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    ${justifiedBoxStyles};
    ${$size('var(--size-percent-100)', 'var(--size-100)')};
    margin: var(--size-0-0-50);
    padding: var(--size-0-0-8);

    button {
        font-size: var(--size-30);
        font-weight: bold;
    }
`;
