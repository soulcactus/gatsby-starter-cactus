import { useEffect, useState } from 'react';
import queryString from 'query-string';

import * as VIEWPOSTS from '@constants/viewPosts';
import * as STORAGES from '@constants/storages';

// TODO: fix any type
const usePosts = ({
    categoryState,
    handlePage,
    initialState,
    pageState,
    posts,
    viewPageState,
}: any) => {
    const [state, setter] = useState(initialState);

    const isViewWithPagination = JSON.parse(
        localStorage.getItem(STORAGES.VIEW_WITH_PAGINATION),
    );

    useEffect(() => {
        if (isViewWithPagination) {
            const currentPageNumber = Number(pageState);

            setter(
                posts.slice(
                    VIEWPOSTS.POST_COUNT * (currentPageNumber - 1),
                    VIEWPOSTS.POST_COUNT * currentPageNumber,
                ),
            );
        }
    }, [pageState]);

    useEffect(() => {
        const isViewWithPagination = JSON.parse(
            localStorage.getItem(STORAGES.VIEW_WITH_PAGINATION),
        );

        const getCurrentScrollPercentage = () =>
            ((window.scrollY + window.innerHeight) /
                document.body.clientHeight) *
            100;

        const handleScroll = () => {
            if (getCurrentScrollPercentage() > 90) {
                setter((state: any) => [
                    ...state,
                    ...posts.slice(
                        state.length,
                        state.length + VIEWPOSTS.POST_COUNT,
                    ),
                ]);
            }
        };

        if (isViewWithPagination) {
            const currentPage = queryString.parse(location.search).page ?? '1';
            const currentPageNumber = Number(currentPage);

            setter(
                posts.slice(
                    VIEWPOSTS.POST_COUNT * (currentPageNumber - 1),
                    VIEWPOSTS.POST_COUNT * currentPageNumber,
                ),
            );

            handlePage({ selected: Number(currentPage) - 1 });
        } else {
            setter([...posts.slice(0, VIEWPOSTS.POST_COUNT)]);
            window.addEventListener('scroll', handleScroll, false);
        }

        if (!isViewWithPagination) {
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [categoryState, viewPageState]);

    return state;
};

export default usePosts;
