import styled from '@emotion/styled';
import { SiFacebook, SiGithub, SiTwitter } from 'react-icons/si';

import { SocialLinksProps } from '@interfaces/components/socialLinks';

export default function SocialLinks(props: SocialLinksProps) {
    const { list } = props;
    const { facebook, github, twitter } = list;

    return (
        <StyledSocialLinks>
            {!!github && (
                <li>
                    <a href={`https://github.com/${github}`}>
                        <SiGithub />
                    </a>
                </li>
            )}
            {!!facebook && (
                <li>
                    <a href={`https://www.facebook.com/${facebook}`}>
                        <SiFacebook />
                    </a>
                </li>
            )}
            {!!twitter && (
                <li>
                    <a href={`https://twitter.com/${twitter}`}>
                        <SiTwitter />
                    </a>
                </li>
            )}
        </StyledSocialLinks>
    );
}

const StyledSocialLinks = styled.ul`
    margin: var(--size-10-0-0);

    li {
        display: inline-block;
        border-radius: var(--size-percent-50);
        padding: var(--size-3-5);
        font-size: var(--size-20);
        color: var(--color-sub-text-1);
        box-shadow: var(--box-shadow-color-6);

        &:not(:last-of-type) {
            margin: var(--size-0-10-0-0);
        }

        &:active {
            box-shadow: var(--box-shadow-color-7);
        }
    }

    svg {
        margin: var(--size-2-0-0);
    }
`;
