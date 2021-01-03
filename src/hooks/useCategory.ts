import { push, replace } from 'gatsby-link';
import { useCallback, useEffect, useState } from 'react';
import queryString from 'query-string';

import * as CATEGORY from '@constants/category';

// TODO: move function
const findCategoryIndex = (categories: string[], item: string) =>
    categories.findIndex((value) => value === item) + 1;

const useCategory = (initialState: string, categories: string[]) => {
    const [state, setter] = useState(initialState);
    const [indexState, indexSetter] = useState(0);

    const handler = useCallback((item) => {
        const pathname = location.pathname;
        const category = { category: item };
        const isAll = item === CATEGORY.ALL;

        setter(item);
        indexSetter(isAll ? 0 : findCategoryIndex(categories, item));
        push(isAll ? pathname : `?${queryString.stringify(category)}`);
    }, []);

    const handlePrevious = useCallback(() => {
        if (indexState === 0) {
            replace(location.pathname);
        } else {
            const categoryItem = categories[indexState - 2];
            const category = { category: categoryItem };
            const isAll = indexState === 1;

            setter(isAll ? CATEGORY.ALL : categoryItem);
            indexSetter(isAll ? 0 : indexState - 1);
            replace(`?${queryString.stringify(category)}`);
        }
    }, [indexState]);

    const handleNext = useCallback(() => {
        if (indexState !== categories?.length) {
            const categoryItem = categories[indexState];
            const category = { category: categoryItem };

            setter(categoryItem);
            indexSetter(indexState + 1);
            push(`?${queryString.stringify(category)}`);
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
