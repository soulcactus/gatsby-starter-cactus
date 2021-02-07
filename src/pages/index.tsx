import { graphql } from 'gatsby';
import { navigate } from 'gatsby-link';
import { useEffect } from 'react';
import queryString from 'query-string';

import Bio from '@components/Bio';
import Category from '@components/Category';
import Layout, { StyledToolbar } from '@components/Layout';
import Pagination from '@components/Pagination';
import PostPreview from '@components/PostPreview';
import Search from '@components/Search';
import SEO from '@components/SEO';
import ViewPosts from '@components/ViewPosts';
import * as CATEGORY from '@constants/category';
import * as STORAGES from '@constants/storages';
import * as VIEWPOSTS from '@constants/viewPosts';
import {
    useCategory,
    usePage,
    usePosts,
    useRadio,
    useTheme,
} from '@hooks/index';
import { BlogIndexProps } from '@interfaces/pages/blogIndex';

const BlogIndex = (props: BlogIndexProps) => {
    const { data } = props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    const categories = Array.from(
        new Set(posts.map((item) => item.node.frontmatter.category).sort()),
    );

    const [themeState, handleTheme] = useTheme(false);

    const [viewPageState, handleViewPage] = useRadio(
        !!JSON.parse(localStorage.getItem(STORAGES.VIEW_WITH_PAGINATION))
            ? VIEWPOSTS.PAGINATION
            : VIEWPOSTS.INFINITE_SCROLL,
    );

    const isInfiniteScroll = viewPageState === VIEWPOSTS.INFINITE_SCROLL;

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

    const [pageState, handlePage] = usePage(
        queryString.parse(location.search).page ?? '1',
    );

    const postsState = usePosts({
        categoryState,
        handlePage,
        initialState: posts.slice(0, VIEWPOSTS.POST_COUNT),
        pageState,
        posts: categorizedPosts,
        viewPageState,
    });

    useEffect(() => {
        const parsedSearch = queryString.parse(location.search);

        localStorage.setItem(
            STORAGES.VIEW_WITH_PAGINATION,
            JSON.stringify(!isInfiniteScroll),
        );

        isInfiniteScroll ? delete parsedSearch.page : (parsedSearch.page = '1');
        navigate(`?${queryString.stringify(parsedSearch)}`, { replace: true });
    }, [viewPageState]);

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
            {!isInfiniteScroll && (
                <Pagination
                    currentPage={pageState}
                    handleChange={handlePage}
                    posts={categorizedPosts}
                />
            )}
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
