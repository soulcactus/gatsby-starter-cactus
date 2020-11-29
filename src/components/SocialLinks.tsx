import { Link } from 'gatsby';
import styled from 'styled-components';

import mediaQuery from '@styles/mediaQuery';
import { SocialLinksProps } from '@interfaces/components/socialLinks';

export default function SocialLinks(props: SocialLinksProps) {
    const { darkTheme, list } = props;
    const { facebook, github, twitter } = list;

    return (
        <StyledSocialLinks>
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
        </StyledSocialLinks>
    );
}

const StyledSocialLinks = styled.ul`
    ${mediaQuery('xs')`
        margin: 1rem 0 0;
    `}

    ${mediaQuery('md')`
        margin: 0.5rem 0 0;
    `}

    li {
        display: inline-block;

        &:not(:last-child) {
            margin: 0 0.7rem 0 0;
        }
    }
`;
