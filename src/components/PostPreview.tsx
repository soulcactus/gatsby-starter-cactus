import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { PostPreviewProps } from '@interfaces/components/postPreview';
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
                                            __html: description || excerpt,
                                        }}
                                    />
                                    {!!thumbnail && (
                                        <Img
                                            fixed={
                                                thumbnail.childImageSharp.fixed
                                            }
                                        />
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
        text-align: justify;
        font-size: 1.5rem;
    }
`;
