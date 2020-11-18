import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import FacebookIcon from '@components/icons/Facebook';
import GithubIcon from '@components/icons/Github';
import TwitterIcon from '@components/icons/Twitter';
import { BioProps } from '@interfaces/components/bio';
import { justifiedBoxStyles } from '@styles/mixins';

export default function Bio(props: BioProps) {
    const { darkTheme } = props;

    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/profile.png/" }) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
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
    const { facebook, github, twitter } = social;

    return (
        <StyledBio>
            <Image
                alt={name}
                fixed={data.avatar.childImageSharp.fixed}
                imgStyle={{
                    border: '0.1rem solid #ddd',
                    borderRadius: '100%',
                }}
            />
            <StyledProfile>
                <div>
                    <h2>
                        <Link to="/about">{name}</Link>
                    </h2>
                    <span>{summary}</span>
                </div>
                {!!Object.values(social).length && (
                    <ul>
                        {!!github && (
                            <li>
                                <Link to="/">
                                    <GithubIcon darkTheme={darkTheme} />
                                </Link>
                            </li>
                        )}
                        {!!facebook && (
                            <li>
                                <Link to="/">
                                    <FacebookIcon />
                                </Link>
                            </li>
                        )}
                        {!!twitter && (
                            <li>
                                <Link to="/">
                                    <TwitterIcon />
                                </Link>
                            </li>
                        )}
                    </ul>
                )}
            </StyledProfile>
        </StyledBio>
    );
}

const StyledBio = styled.div`
    ${justifiedBoxStyles};
`;

const StyledProfile = styled.div`
    ${justifiedBoxStyles};
    flex-basis: calc(100% - 6rem);
    margin: -0.4rem 0 0;

    h2 {
        margin: 0 0 0.4rem;
        font-size: 1.8rem;
        font-weight: bold;
        letter-spacing: -0.1rem;
    }

    span {
        font-size: 1.2rem;
    }

    ul {
        margin: 0.5rem 0 0;
    }

    li {
        display: inline-block;

        &:not(:last-child) {
            margin: 0 0.7rem 0 0;
        }
    }
`;
