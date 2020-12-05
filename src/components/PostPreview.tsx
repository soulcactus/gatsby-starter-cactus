import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { PostPreviewProps } from '@interfaces/components/postPreview';

export default function PostPreview(props: PostPreviewProps) {
    const { posts } = props;

    return (
        <>
            {posts.map((item) => {
                const node = item.node;
                const { excerpt, frontmatter } = node;
                const { slug } = node.fields;

                const {
                    category,
                    date,
                    description,
                    thumbnail,
                    title,
                } = frontmatter;

                return (
                    <Link to={slug}>
                        <article key={slug}>
                            <div>
                                <header>
                                    <h3>{title ?? slug}</h3>
                                    <span>{category}</span>
                                    <small>{date}</small>
                                </header>
                                <section>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: description ?? excerpt,
                                        }}
                                    />
                                    {!!thumbnail && (
                                        <div>
                                            <Img
                                                fixed={
                                                    thumbnail.childImageSharp
                                                        .fixed
                                                }
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            />
                                        </div>
                                    )}
                                </section>
                            </div>
                        </article>
                    </Link>
                );
            })}
        </>
    );
}

// const StyledPostPreview = styled.article<{ thumbnail: boolean }>`
//     margin: 0 0 7rem;
//
//     header {
//         margin: 0 0 1.5rem;
//     }
//
//     h3 {
//         margin: 0 0 1rem;
//         font-size: 2rem;
//         font-weight: bold;
//     }
//
//     span {
//         display: inline-block;
//         margin: 0 0.75rem 0 0;
//         border: 0.1rem solid #ddd;
//         border-radius: 0.5rem;
//         padding: 0.4rem 0.75rem 0.7rem;
//         background: #f5f5f5;
//         font-size: 1.2rem;
//         font-weight: bold;
//         color: #666;
//     }
//
//     small {
//         font-size: 1.2rem;
//     }
//
//     section {
//         ${justifiedBoxStyles};
//     }
//
//     p {
//         width: ${(props) => (props.thumbnail ? 'calc(100% - 15rem)' : '100%')};
//         line-height: 2.25rem;
//         font-size: 1.5rem;
//
//         ${mediaQueries('xs')`
//             display: -webkit-box;
//             -webkit-line-clamp: 5;
//             -webkit-box-orient: vertical;
//             overflow: hidden;
//             text-overflow: ellipsis;
//         `}
//
//         ${mediaQueries('md')`
//             display: inherit;
//             -webkit-line-clamp: inherit;
//             -webkit-box-orient: inherit;
//             overflow: inherit;
//             text-overflow: inherit;
//         `}
//     }
// `;
//
// const StyledThumbnail = styled.div`
//     ${mediaQueries('xs')`
//         width: 10rem;
//         height: 10rem;
//     `}
//
//     ${mediaQueries('md')`
//         width: 12.5rem;
//         height: 12.5rem;
//     `}
// `;
