import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import SocialLinks from '@components/SocialLinks';
import { BioProps } from '@interfaces/components/bio';
import mediaQuery from '@styles/mediaQuery';
import { justifiedBoxStyles } from '@styles/mixins';

export default function Bio(props: BioProps) {
    const { darkTheme } = props;

    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/profile.png/" }) {
                childImageSharp {
                    fixed(width: 70, height: 70) {
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
                    border: '0.1rem solid #ddd',
                    borderRadius: '100%',
                }}
                style={{
                    minWidth: '7rem',
                }}
            />
            <StyledProfile>
                <div>
                    <span>
                        <Link to="/about">{name}</Link>
                    </span>
                    <span>{summary}</span>
                </div>
                {!!Object.values(social).length && (
                    <SocialLinks darkTheme={darkTheme} list={social} />
                )}
            </StyledProfile>
        </StyledBio>
    );
}

const StyledBio = styled.div`
    ${justifiedBoxStyles};
`;

const StyledProfile = styled.div`
    display: flex;
    flex-basis: calc(100% - 8.5rem);
    margin: -0.4rem 0 0;

    div {
        ${mediaQuery('xs')`
           max-width: 100%;
        `}

        ${mediaQuery('md')`
           max-width: 50rem;
        `}
    }

    span {
        display: block;

        &:first-child {
            font-size: 1.8rem;
            font-weight: bold;
            letter-spacing: -0.1rem;

            ${mediaQuery('xs')`
                margin: 0 0 0.2rem;
            `}

            ${mediaQuery('md')`
                margin: 0 0 0.4rem;
            `}
        }

        &:last-child {
            line-height: 1.8rem;
            font-size: 1.2rem;
        }
    }

    ${mediaQuery('xs')`
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;
    `}

    ${mediaQuery('md')`
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    `}
`;
