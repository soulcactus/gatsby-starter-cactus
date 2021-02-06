import { graphql } from 'gatsby';
import queryString from 'query-string';

import Bio from '@components/Bio';
import Category from '@components/Category';
import Layout, { StyledToolbar } from '@components/Layout';
import PostPreview from '@components/PostPreview';
import Search from '@components/Search';
import SEO from '@components/SEO';
import ViewPosts from '@components/ViewPosts';
import * as CATEGORY from '@constants/category';
import { useCategory, useRadio, useTheme } from '@hooks/index';
import { BlogIndexProps } from '@interfaces/pages/blogIndex';
import { useEffect, useState } from 'react';

const BlogIndex = (props: BlogIndexProps) => {
    const { data } = props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    const categories = Array.from(
        new Set(posts.map((item) => item.node.frontmatter.category).sort()),
    );

    const [themeState, handleTheme] = useTheme(false);
    const [viewPageState, handleViewPage] = useRadio('infiniteScroll');

    const [
        categoryState,
        categoryIndexState,
        handleCategory,
        handlePrevious,
        handleNext,
    ] = useCategory(
        (queryString.parse(location?.search).category as string) ??
            CATEGORY.ALL,
        categories,
    );

    const isInfiniteScroll = viewPageState === 'infiniteScroll';

    const [postsState, setPosts] = useState(
        isInfiniteScroll ? posts.slice(0, 3) : posts,
    );

    useEffect(() => {
        const categorizedPosts =
            categoryState === CATEGORY.ALL
                ? posts
                : posts.filter(
                      (item) =>
                          item.node.frontmatter.category === categoryState,
                  );

        const getCurrentScrollPercentage = () =>
            ((window.scrollY + window.innerHeight) /
                document.body.clientHeight) *
            100;

        const handleScroll = () => {
            if (getCurrentScrollPercentage() > 90) {
                setPosts((state) => [
                    ...state,
                    ...categorizedPosts.slice(state.length, state.length + 3),
                ]);
            }
        };

        if (isInfiniteScroll) {
            setPosts([...categorizedPosts.slice(0, 3)]);
            window.addEventListener('scroll', handleScroll, false);

            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            setPosts(categorizedPosts);
        }
    }, [categoryState, viewPageState]);

    return (
        <Layout
            handleCategory={handleCategory}
            handleTheme={handleTheme}
            isDarkTheme={themeState}
            title={siteTitle}
        >
            <SEO title="All posts" />
            <Bio />
            <Category
                categories={categories as string[]}
                currentCategory={categoryIndexState}
                handleChange={handleCategory}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
            />
            <StyledToolbar>
                <ViewPosts
                    isInfiniteScroll={isInfiniteScroll}
                    handleChange={handleViewPage}
                />
                <Search />
            </StyledToolbar>
            <main>
                <PostPreview posts={postsState} />
            </main>
        </Layout>
    );
};

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt(truncate: true)
                    fields {
                        slug
                    }
                    frontmatter {
                        category
                        date(formatString: "MMMM DD, YYYY")
                        description
                        thumbnail {
                            childImageSharp {
                                fixed(width: 125, height: 125) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                        title
                    }
                }
            }
        }
    }
`;
