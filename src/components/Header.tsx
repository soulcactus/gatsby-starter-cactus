import { Link } from 'gatsby';

import { HeaderProps } from '@interfaces/components/header';

export default function Header(props: HeaderProps) {
    const { children, title } = props;

    return (
        <header>
            <h1>
                <Link aria-label="Go to Home" to="/">
                    {title}
                </Link>
            </h1>
            {children}
        </header>
    );
}
//
// const StyledHeader = styled.header`
//     ${justifiedBoxStyles};
//     ${$size('100%', '10rem')};
//     margin: 0 0 5rem;
//     padding: 0 0 0.8rem;
//
//     h1 {
//         font-size: ${(props) => props.theme.fontSize.title};
//         font-weight: bolder;
//     }
// `;
