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
                    description,
                    date,
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
                                            width: 'var(--size-percent-100)',
                                            height: 'var(--size-percent-100)',
                                            border: 'var(--border-1)',
                                            borderRadius: 'var(--size-5)',
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
    margin: var(--size-20-0-35);
    border-radius: var(--size-10);
    padding: var(--size-25-20);
    box-shadow: var(--box-shadow-color-1);

    ${media('md')} {
        flex-direction: initial;
        justify-content: space-between;
    }

    &:active {
        box-shadow: var(--box-shadow-color-5);
    }

    div {
        &:last-child {
            flex-basis: ${(props) =>
                props.hasThumbnail
                    ? 'var(--size-calc-percent-100-minus-thirteen-point-one)'
                    : 'var(--size-percent-100)'};
        }
    }

    h3 {
        margin: ${(props) =>
            props.hasThumbnail ? 'var(--size-12-0)' : 'var(--size-0-0-12)'};
        line-height: var(--size-23);
        font-size: var(--size-18);
        font-weight: bold;

        ${media('md')} {
            margin: var(--size-minus-3-point-5-0-10);
        }
    }

    p {
        line-height: var(--size-20);
        font-size: var(--size-14);
        color: var(--color-sub-text-1);
    }

    footer {
        margin: var(--size-10-0-0);
        font-size: var(--size-13);
    }

    span {
        font-weight: bold;
    }

    small {
        color: var(--color-sub-text-2);

        &::before {
            content: '|';
            margin: var(--size-0-5);
            font-size: var(--size-10);
        }
    }
`;

const StyledThumbnail = styled.div`
    ${$size('var(--size-percent-100)', 'var(--size-180)')};

    ${media('md')} {
        ${$size('var(--size-111)')};
    }
`;
