import { navigate } from 'gatsby-link';
import { useCallback, useEffect, useState } from 'react';
import queryString from 'query-string';

import * as CATEGORY from '@constants/category';
import * as STORAGES from '@constants/storages';

const findCategoryIndex = (categories: string[], item: string) =>
    categories.findIndex((value) => value === item) + 1;

const useCategory = (initialState: string, categories: string[]) => {
    const [state, setter] = useState(initialState);
    const [indexState, indexSetter] = useState(0);

    const handler = useCallback((item) => {
        const pathname = location.pathname;
        const category = { category: item };
        const isAll = item === CATEGORY.ALL;

        const isViewWithPagination = JSON.parse(
            localStorage.getItem(STORAGES.VIEW_WITH_PAGINATION),
        );

        setter(item);
        indexSetter(isAll ? 0 : findCategoryIndex(categories, item));

        navigate(
            isAll
                ? isViewWithPagination
                    ? `${pathname}?page=1`
                    : pathname
                : isViewWithPagination
                ? `?${queryString.stringify(category)}&page=1`
                : `?${queryString.stringify(category)}`,
        );
    }, []);

    const handlePrevious = useCallback(() => {
        const pathname = location.pathname;

        const isViewWithPagination = JSON.parse(
            localStorage.getItem(STORAGES.VIEW_WITH_PAGINATION),
        );

        if (indexState === 0) {
            navigate(isViewWithPagination ? `${pathname}?page=1` : pathname, {
                replace: true,
            });
        } else {
            const categoryItem = categories[indexState - 2];
            const category = { category: categoryItem };
            const isAll = indexState === 1;

            setter(isAll ? CATEGORY.ALL : categoryItem);
            indexSetter(isAll ? 0 : indexState - 1);

            navigate(
                isViewWithPagination
                    ? `?${queryString.stringify(category)}&page=1`
                    : `?${queryString.stringify(category)}`,
                { replace: true },
            );
        }
    }, [indexState]);

    const handleNext = useCallback(() => {
        if (indexState !== categories?.length) {
            const categoryItem = categories[indexState];
            const category = { category: categoryItem };

            const isViewWithPagination = JSON.parse(
                localStorage.getItem(STORAGES.VIEW_WITH_PAGINATION),
            );

            setter(categoryItem);
            indexSetter(indexState + 1);

            navigate(
                isViewWithPagination
                    ? `?${queryString.stringify(category)}&page=1`
                    : `?${queryString.stringify(category)}`,
            );
        }
    }, [categories, indexState]);

    useEffect(() => {
        const category = queryString.parse(location.search).category;
        const isAll = category === CATEGORY.ALL;

        indexSetter(
            isAll ? 0 : findCategoryIndex(categories, category as string),
        );
    }, []);

    useEffect(() => {
        const handlePopstate = () => {
            const category = queryString.parse(location.search).category;

            setter((category as string) ?? CATEGORY.ALL);

            indexSetter(
                category === undefined
                    ? 0
                    : findCategoryIndex(categories, category as string),
            );
        };

        window.addEventListener('popstate', handlePopstate);

        return () => window.removeEventListener('popstate', handlePopstate);
    }, [state]);

    return [state, indexState, handler, handlePrevious, handleNext] as const;
};

export default useCategory;
