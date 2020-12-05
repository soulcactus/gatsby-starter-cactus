import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import SocialLinks from '@components/SocialLinks';
import { BioProps } from '@interfaces/components/bio';

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
        <div>
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
            <div>
                <div>
                    <span>
                        <Link to="/about">{name}</Link>
                    </span>
                    <span>{summary}</span>
                </div>
                {!!Object.values(social).length && (
                    <SocialLinks darkTheme={darkTheme} list={social} />
                )}
            </div>
        </div>
    );
}

// const StyledBio = styled.div`
//     ${justifiedBoxStyles};
// `;
//
// const StyledProfile = styled.div`
//     display: flex;
//     flex-basis: calc(100% - 8.5rem);
//     margin: -0.4rem 0 0;
//
//     div {
//         ${mediaQueries('xs')`
//            max-width: 100%;
//         `}
//
//         ${mediaQueries('md')`
//            max-width: 50rem;
//         `}
//     }
//
//     span {
//         display: block;
//
//         &:first-child {
//             font-size: 1.8rem;
//             font-weight: bold;
//             letter-spacing: -0.1rem;
//
//             ${mediaQueries('xs')`
//                 margin: 0 0 0.2rem;
//             `}
//
//             ${mediaQueries('md')`
//                 margin: 0 0 0.4rem;
//             `}
//         }
//
//         &:last-child {
//             line-height: 1.8rem;
//             font-size: 1.2rem;
//         }
//     }
//
//     ${mediaQueries('xs')`
//         align-items: flex-start;
//         flex-direction: column;
//         justify-content: flex-start;
//     `}
//
//     ${mediaQueries('md')`
//         align-items: center;
//         flex-direction: row;
//         justify-content: space-between;
//     `}
// `;
