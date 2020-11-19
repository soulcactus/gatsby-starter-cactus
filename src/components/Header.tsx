import { Link } from 'gatsby';
import styled from 'styled-components';

import { HeaderProps } from '@interfaces/components/header';
import { justifiedBoxStyles, size } from '@styles/mixins';

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
    ${size('100%', '10rem')};
    margin: 0 0 5rem;
    border-bottom: 0.1rem solid #ddd;
    padding: 0 0 0.8rem;

    h1 {
        font-family: ${(props) => props.theme.fontFamily.title};
        font-size: ${(props) => props.theme.fontSize.title};
    }
`;
