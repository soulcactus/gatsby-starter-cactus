import { graphql } from 'gatsby';
import { navigate, replace } from 'gatsby-link';
import ReactPaginate from 'react-paginate';
import queryString from 'query-string';

import Bio from '@components/Bio';
import Category from '@components/Category';
import Layout, { StyledToolbar } from '@components/Layout';
import PostPreview from '@components/PostPreview';
import Search from '@components/Search';
import SEO from '@components/SEO';
import ViewPosts from '@components/ViewPosts';
import * as CATEGORY from '@constants/category';
import * as STORAGES from '@constants/storages';
import * as VIEWPOSTS from '@constants/viewPosts';
import { useCategory, useRadio, useTheme } from '@hooks/index';
import { BlogIndexProps } from '@interfaces/pages/blogIndex';
import { useCallback, useEffect, useState } from 'react';

const BlogIndex = (props: BlogIndexProps) => {
    const { data } = props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    const postCount = 10;

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

    const [pageState, setPage] = useState(
        queryString.parse(location.search).page ?? '1',
    );

    const [postsState, setPosts] = useState(
        isInfiniteScroll
            ? posts.slice(0, postCount)
            : posts.slice(0, postCount),
    );

    const handlePage = useCallback(({ selected }) => {
        setPage(`${selected + 1}`);
    }, []);

    useEffect(() => {
        const handlePageMove = function () {
            const parsedSearch = queryString.parse(location.search);

            const isViewWithPagination = JSON.parse(
                localStorage.getItem(STORAGES.VIEW_WITH_PAGINATION),
            );

            isViewWithPagination
                ? setPage(parsedSearch.page)
                : delete parsedSearch.page;

            if (
                (isViewWithPagination && parsedSearch.page !== '1') ||
                !isViewWithPagination
            ) {
                replace(`?${queryString.stringify(parsedSearch)}`);
            }
        };

        window.addEventListener('popstate', handlePageMove);

        return () => window.removeEventListener('popstate', handlePageMove);
    }, []);

    useEffect(() => {
        const parsedSearch = queryString.parse(location.search);

        localStorage.setItem(
            STORAGES.VIEW_WITH_PAGINATION,
            JSON.stringify(!isInfiniteScroll),
        );

        isInfiniteScroll ? delete parsedSearch.page : (parsedSearch.page = '1');

        replace(`?${queryString.stringify(parsedSearch)}`);
    }, [viewPageState]);

    useEffect(() => {
        if (!isInfiniteScroll) {
            const currentPageNumber = Number(pageState);
            const parsedSearch = queryString.parse(location.search);

            if (pageState !== parsedSearch.page) {
                parsedSearch.page = pageState;
                navigate(`?${queryString.stringify(parsedSearch)}`);
            }

            setPosts(
                categorizedPosts.slice(
                    postCount * (currentPageNumber - 1),
                    postCount * currentPageNumber,
                ),
            );
        }
    }, [pageState]);

    useEffect(() => {
        const getCurrentScrollPercentage = () =>
            ((window.scrollY + window.innerHeight) /
                document.body.clientHeight) *
            100;

        const handleScroll = () => {
            if (getCurrentScrollPercentage() > 90) {
                setPosts((state) => [
                    ...state,
                    ...categorizedPosts.slice(
                        state.length,
                        state.length + postCount,
                    ),
                ]);
            }
        };

        if (isInfiniteScroll) {
            setPosts([...categorizedPosts.slice(0, postCount)]);
            window.addEventListener('scroll', handleScroll, false);
        } else {
            const currentPage = queryString.parse(location.search).page ?? '1';
            const currentPageNumber = Number(currentPage);

            setPosts(
                categorizedPosts.slice(
                    postCount * (currentPageNumber - 1),
                    postCount * currentPageNumber,
                ),
            );

            setPage(currentPage);
        }

        if (isInfiniteScroll) {
            return () => window.removeEventListener('scroll', handleScroll);
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
            {!isInfiniteScroll && (
                <ReactPaginate
                    forcePage={Number(pageState) - 1}
                    marginPagesDisplayed={0}
                    nextLabel="next"
                    onPageChange={handlePage}
                    pageCount={categorizedPosts.length / postCount}
                    pageRangeDisplayed={4}
                    previousLabel="prev"
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
