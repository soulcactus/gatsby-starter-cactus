import { Link } from 'gatsby';

import { SocialLinksProps } from '@interfaces/components/socialLinks';

export default function SocialLinks(props: SocialLinksProps) {
    const { list } = props;
    const { facebook, github, twitter } = list;

    return (
        <ul>
            {!!github && (
                <li>
                    <Link to="/"></Link>
                </li>
            )}
            {!!facebook && (
                <li>
                    <Link to="/"></Link>
                </li>
            )}
            {!!twitter && (
                <li>
                    <Link to="/"></Link>
                </li>
            )}
        </ul>
    );
}

// const StyledSocialLinks = styled.ul`
//     ${mediaQueries('xs')`
//         margin: 1rem 0 0;
//     `}
//
//     ${mediaQueries('md')`
//         margin: 0.5rem 0 0;
//     `}
//
//     li {
//         display: inline-block;
//
//         &:not(:last-child) {
//             margin: 0 0.7rem 0 0;
//         }
//     }
// `;
