import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import SocialLinks from '@components/SocialLinks';
import { normalBoxStyles } from '@styles/modules';

export default function Bio() {
    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/profile.png/" }) {
                childImageSharp {
                    fixed(width: 80, height: 80) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        github
                        facebook
                        twitter
                    }
                }
            }
        }
    `);

    const { author, social } = data.site.siteMetadata;
    const { name, summary } = author;

    return (
        <StyledBio>
            <Image
                alt={name}
                fixed={data.avatar.childImageSharp.fixed}
                imgStyle={{
                    border: 'var(--border-1)',
                    borderRadius: 'var(--size-percent-50)',
                }}
                style={{
                    minWidth: 'var(--size-80)',
                    margin: 'var(--size-0-15-0-0)',
                    borderRadius: 'var(--size-percent-50)',
                    overflow: 'hidden',
                }}
            />
            <div>
                <b>{name}</b>
                <span>{summary}</span>
                {!!Object.values(social).length && (
                    <SocialLinks list={social} />
                )}
            </div>
        </StyledBio>
    );
}

const StyledBio = styled.div`
    ${normalBoxStyles};
    border-radius: var(--size-10);
    padding: var(--size-15);
    box-shadow: var(--box-shadow-color-1);

    div {
        padding: var(--size-0-0-10);
        font-size: var(--size-15);
    }

    b {
        display: block;
        margin: var(--size-5-0-7-point-5);
        font-size: var(--size-16);
        font-weight: bold;
    }

    span {
        font-size: var(--size-13);
        color: var(--color-sub-text-1);
    }
`;
