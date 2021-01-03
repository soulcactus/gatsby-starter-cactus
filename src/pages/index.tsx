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

    const categorizedPosts =
        categoryState === CATEGORY.ALL
            ? posts
            : posts.filter(
                  (item) => item.node.frontmatter.category === categoryState,
              );

    const isInfiniteScroll = viewPageState === 'infiniteScroll';

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
                <PostPreview posts={categorizedPosts} />
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
