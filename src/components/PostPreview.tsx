import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { PostPreviewProps } from '@interfaces/components/postPreview';
import mediaQuery from '@styles/mediaQuery';
import { justifiedBoxStyles } from '@styles/mixins';

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
                        <StyledPostPreview key={slug} thumbnail={!!thumbnail}>
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
                                        <StyledThumbnail>
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
                                        </StyledThumbnail>
                                    )}
                                </section>
                            </div>
                        </StyledPostPreview>
                    </Link>
                );
            })}
        </>
    );
}

const StyledPostPreview = styled.article<{ thumbnail: boolean }>`
    margin: 0 0 7rem;

    header {
        margin: 0 0 1.5rem;
    }

    h3 {
        margin: 0 0 1rem;
        font-size: 2rem;
        font-weight: bold;
    }

    span {
        display: inline-block;
        margin: 0 0.75rem 0 0;
        border: 0.1rem solid #ddd;
        border-radius: 0.5rem;
        padding: 0.4rem 0.75rem 0.7rem;
        background: #f5f5f5;
        font-size: 1.2rem;
        font-weight: bold;
        color: #666;
    }

    small {
        font-size: 1.2rem;
    }

    section {
        ${justifiedBoxStyles};
    }

    p {
        width: ${(props) => (props.thumbnail ? 'calc(100% - 15rem)' : '100%')};
        line-height: 2.25rem;
        font-size: 1.5rem;

        ${mediaQuery('xs')`
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        `}

        ${mediaQuery('md')`
            display: inherit;
            -webkit-line-clamp: inherit;
            -webkit-box-orient: inherit;
            overflow: inherit;
            text-overflow: inherit;
        `}
    }
`;

const StyledThumbnail = styled.div`
    ${mediaQuery('xs')`
        width: 10rem;
        height: 10rem;
    `}

    ${mediaQuery('md')`
        width: 12.5rem;
        height: 12.5rem;
    `}
`;
