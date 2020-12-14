import styled from '@emotion/styled';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import SocialLinks from '@components/SocialLinks';
import { BioProps } from '@interfaces/components/bio';
import { normalBoxStyles } from '@styles/modules';

export default function Bio(props: BioProps) {
    const { isDarkTheme } = props;

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
                    border: '0.1rem solid #ddd',
                    borderRadius: '50%',
                }}
                style={{
                    minWidth: '8rem',
                    margin: '0 1.5rem 0 0',
                    borderRadius: '50%',
                    overflow: 'hidden',
                }}
            />
            <div>
                <b>
                    <Link to="/about">{name}</Link>
                </b>
                <span>{summary}</span>
                {!!Object.values(social).length && (
                    <SocialLinks isDarkTheme={isDarkTheme} list={social} />
                )}
            </div>
        </StyledBio>
    );
}

const StyledBio = styled.div`
    ${normalBoxStyles};
    border-radius: 1rem;
    padding: 1.5rem;
    background: ${(props) => props.theme.backgrounds.light};
    box-shadow: 0.3rem 0.3rem 0.5rem rgba(0, 9, 52, 0.07),
        -0.5rem -0.5rem 0.5rem white;

    div {
        padding-bottom: 1rem;
        font-size: 1.5rem;
    }

    b {
        display: block;
        margin: 0.5rem 0 0.75rem;
        color: #333333;
        font-size: 1.6rem;
        font-weight: bolder;
    }

    span {
        font-size: 1.3rem;
        color: #797979;
    }
`;
