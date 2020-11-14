import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

export default function Bio() {
    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
                childImageSharp {
                    fixed(width: 75, height: 75) {
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
                        twitter
                    }
                }
            }
        }
    `);

    const { author, social } = data.site.siteMetadata;

    return (
        <StyledBio>
            <Image
                alt={author.name}
                fixed={data.avatar.childImageSharp.fixed}
                imgStyle={{
                    borderRadius: '100%',
                }}
            />
            <StyledProfile>
                <h2>
                    <Link to="/about">{author.name}</Link>
                </h2>
                <span>{author.summary}</span>
            </StyledProfile>
        </StyledBio>
    );
}

const StyledBio = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledProfile = styled.div`
    flex-basis: calc(100% - 10rem);

    h2 {
        margin: 0 0 0.5rem;
        font-size: 2rem;
        font-weight: bold;
    }

    span {
        font-size: 1.4rem;
    }
`;
