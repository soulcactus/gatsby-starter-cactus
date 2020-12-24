import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { HeaderProps } from '@interfaces/components/header';
import { $size } from '@styles/mixins';
import { justifiedBoxStyles } from '@styles/modules';

export default function Header(props: HeaderProps) {
    const { children, title } = props;

    return (
        <StyledHeader>
            <h1>
                <Link aria-label="Go to Home" to="/">
                    {title}
                </Link>
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

    h1 {
        font-size: var(--size-30);
        font-weight: bold;
    }
`;
