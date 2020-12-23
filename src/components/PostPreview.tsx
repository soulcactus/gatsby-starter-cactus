import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { PostPreviewProps } from '@interfaces/components/postPreview';
import { $size } from '@styles/mixins';
import { media } from '@styles/mediaQueries';

export default function PostPreview(props: PostPreviewProps) {
    const { posts } = props;

    return (
        <>
            {posts.map((item, index) => {
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
                    <Link to={slug} key={index}>
                        <StyledPostArticle hasThumbnail={!!thumbnail}>
                            {!!thumbnail && (
                                <StyledThumbnail>
                                    <Img
                                        fixed={thumbnail.childImageSharp.fixed}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            border: '0.1rem solid #ddd',
                                            borderRadius: '0.5rem',
                                        }}
                                    />
                                </StyledThumbnail>
                            )}
                            <div>
                                <header>
                                    <h3>{title ?? slug}</h3>
                                </header>
                                <section>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: description ?? excerpt,
                                        }}
                                    />
                                </section>
                                <footer>
                                    <span>{category}</span>
                                    <small>{date}</small>
                                </footer>
                            </div>
                        </StyledPostArticle>
                    </Link>
                );
            })}
        </>
    );
}

const StyledPostArticle = styled.article<{ hasThumbnail: boolean }>`
    display: flex;
    flex-direction: column;
    margin: 2rem 0 3.5rem;
    border-radius: 1rem;
    padding: 2.5rem 2rem;
    background: ${(props) => props.theme.backgrounds.light};
    box-shadow: var(--box-shadow-color-1);

    ${media('md')} {
        flex-direction: initial;
        justify-content: space-between;
    }

    &:active {
        box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 9, 52, 0.05),
            -0.2rem -0.2rem 0.2rem white;
    }

    div {
        &:last-child {
            flex-basis: ${(props) =>
                props.hasThumbnail ? 'calc(100% - 13.1rem)' : '100%'};
        }
    }

    h3 {
        margin: ${(props) => (props.hasThumbnail ? '1.2rem 0' : '0 0 1.2rem')};
        line-height: 2.3rem;
        font-size: 1.8rem;
        font-weight: bold;
        color: #333;

        ${media('md')} {
            margin: -0.35rem 0 1rem;
        }
    }

    p {
        line-height: 2rem;
        font-size: 1.4rem;
        color: #797979;
    }

    footer {
        margin: 1rem 0 0;
        font-size: 1.3rem;
    }

    span {
        font-weight: bold;
        color: #333;
    }

    small {
        color: #999;

        &::before {
            content: '|';
            margin: 0 0.5rem;
            font-size: 1rem;
        }
    }
`;

const StyledThumbnail = styled.div`
    ${$size('100%', '18rem')};

    ${media('md')} {
        ${$size('11.1rem')};
    }
`;
