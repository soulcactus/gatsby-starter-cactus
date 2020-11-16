import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

export default function Bio() {
    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/profile.png/" }) {
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
                        github
                        facebook
                        twitter
                        instagram
                    }
                }
            }
        }
    `);

    const { author, social } = data.site.siteMetadata;
    const { name, summary } = author;
    const { facebook, github, instagram, twitter } = social;

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
                <h2>
                    <Link to="/about">{name}</Link>
                </h2>
                <span>{summary}</span>
                {!!Object.values(social).length && (
                    <ul>
                        {!!github && <li>github</li>}
                        {!!facebook && <li>facebook</li>}
                        {!!twitter && <li>twitter</li>}
                        {!!instagram && <li>instagram</li>}
                    </ul>
                )}
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
    flex-basis: calc(100% - 9rem);

    h2 {
        margin: 0 0 0.5rem;
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: -0.1rem;
    }

    span {
        font-size: 1.4rem;
    }
`;
