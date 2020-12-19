import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { SiFacebook, SiGithub, SiTwitter } from 'react-icons/si';
import { SocialLinksProps } from '@interfaces/components/socialLinks';
import { normalBoxStyles } from '@styles/modules';

export default function SocialLinks(props: SocialLinksProps) {
    const { isDarkTheme, list } = props;
    const { facebook, github, twitter } = list;

    return (
        <StyledSocialLinks>
            {!!github && (
                <li>
                    <Link to="/">
                        <SiGithub />
                    </Link>
                </li>
            )}
            {!!facebook && (
                <li>
                    <Link to="/">
                        <SiFacebook />
                    </Link>
                </li>
            )}
            {!!twitter && (
                <li>
                    <Link to="/">
                        <SiTwitter />
                    </Link>
                </li>
            )}
        </StyledSocialLinks>
    );
}

const StyledSocialLinks = styled.ul`
    margin: 1rem 0 0;

    li {
        display: inline-block;
        border-radius: 50%;
        padding: 0.3rem 0.5rem;
        font-size: 2rem;
        color: #797979;
        box-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 9, 52, 0.25),
            -0.3rem -0.3rem 0.3rem white;

        &:not(:last-child) {
            margin: 0 1rem 0 0;
        }

        &:active {
            box-shadow: 0.5rem 0.2rem 1rem rgba(0, 9, 52, 0.075),
                inset 0.4rem 0.4rem 0.4rem rgba(0, 9, 52, 0.25),
                inset 0 -0.4rem 0.2rem white;
        }
    }

    svg {
        margin: 0.2rem 0 0;
    }
`;
