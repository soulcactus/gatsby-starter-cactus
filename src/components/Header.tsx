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
    ${$size('100%', '10rem')};
    margin: 0 0 5rem;
    padding: 0 0 0.8rem;

    h1 {
        font-size: ${(props) => props.theme.fontSize.title};
        font-weight: bolder;
    }
`;
