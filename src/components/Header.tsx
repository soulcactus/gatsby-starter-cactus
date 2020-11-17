import { Link } from 'gatsby';
import styled from 'styled-components';

import Switch from '@components/Switch';
import { HeaderProps } from '@interfaces/components/header';
import { justifiedBoxStyles } from '@styles/mixins';

export default function Header(props: HeaderProps) {
    const { title } = props;

    return (
        <StyledHeader>
            <h1>
                <Link to="/">{title}</Link>
            </h1>
            <Switch />
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    ${justifiedBoxStyles};
    width: 100%;
    height: 10rem;
    margin: 0 0 5rem;

    h1 {
        font-family: ${(props) => props.theme.fontFamily.title};
        font-size: ${(props) => props.theme.fontSize.title};
    }
`;
